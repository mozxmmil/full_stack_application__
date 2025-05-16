import { generateAccessToken } from "@/utils/accessToken&refreshTokenGen";
import { ApiError, ApiResponse } from "@/utils/apiHandler";
import { hashPassword } from "@/utils/bcrypt";
import { Cloudinary } from "@/utils/cloudinay";
import { prismaClient } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { userSchemaforApi } from "../../../../../types/zod/userSchema";

export async function POST(req: NextRequest) {
  // getting data from the form
  const formData = await req.formData();
  try {
    const resName = formData.get("name") as string;
    const resemail = formData.get("email") as string;
    const respassword = formData.get("password") as string;
    const resconformPassword = formData.get("conformPassword") as string;
    const resimage = formData.get("image") as File;

    // making data object for prisma and zod type checking
    const data = {
      name: resName,
      email: resemail,
      password: respassword,
      conformPassword: resconformPassword,
      image: resimage,
    };

    // zod type checking

    const zodParseData = userSchemaforApi.safeParse(data);

    if (!zodParseData.success)
      throw new ApiError(
        400,
        "invalid data",
        JSON.stringify(zodParseData.error.format()),
      );

    // destructuring the data
    const { name, email, password, image } = zodParseData.data;

    // cheking if user already exist
    const user = await prismaClient.user.findUnique({ where: { email } });
    if (user) throw new ApiResponse(400, "user already exist", false, {});
    // before saving the password we have to hash it
    const hashedPassword = await hashPassword(password);

    const uri = await Cloudinary.ImageUriConverter(image);

    const imageUrl = await Cloudinary.UploadImage(uri);

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        passwrod: hashedPassword,
        image: imageUrl,
      },
    });

    if (!newUser) throw new ApiError(400, "something went wrong");

    const { accessToken, refreshToken } = generateAccessToken(
      newUser.id,
      newUser.email,
    );
    await prisma?.account.create({
      data: {
        access_token: accessToken as string,
        refresh_token: refreshToken,
        provider: "credential",
        providerAccountId: newUser.id,
        type: "credential",
        userId: newUser.id,
      },
    });

    const responeceUser = { id: newUser.id, accessToken, refreshToken };
    const responce = NextResponse.json(
      new ApiResponse(200, "user created", true, responeceUser),
      {
        status: 200,
      },
    );
    
    responce.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: true,
    });
    return responce;
  } catch (error) {
    return NextResponse.json(
      new ApiResponse(400, "invalid data", false, error),
      {
        status: 400,
      },
    );
  }
}
