import { generateAccessToken, Jwt } from "@/utils/accessToken&refreshTokenGen";
import { ApiError, ApiResponse } from "@/utils/apiHandler";
import { hashPassword } from "@/utils/bcrypt";
import { prismaClient } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { userSchemaforApi } from "../../../../../types/zod/userSchema";
import { readFileSync } from "fs";
import { arrayBuffer, buffer } from "stream/consumers";
import { Cloudinary } from "@/utils/cloudinay";

export async function POST(req: NextRequest) {
  // getting data from the form
  const formData = await req.formData();
  try {
    const resName = formData.get("name");
    const resemail = formData.get("email");
    const respassword = formData.get("password");
    const resconformPassword = formData.get("conformPassword");
    const resimage = formData.get("image") as File;

    // making data object for prisma and zod type checking
    const data = {
      name: resName,
      email: resemail,
      password: respassword,
      conformPassword: resconformPassword,
      image: resimage,
    };

    const bufferdata = await data.image.arrayBuffer();
    const buffer = Buffer.from(bufferdata);
    const base64 = buffer.toString("base64");
    const uri = `data:${data.image.type};base64,${base64}`;
    console.log(uri);

    Cloudinary.UploadImage(uri).then((data) => console.log(data));

    //todo: now cloudinary has impliment successfully and now i have to clear the code like remove console.log
    return NextResponse.json({
      status: "success",
      message: "user created successfully",
    });
    // zod type checking
    // const zodParseData = userSchemaforApi.safeParse(data);

    // if (!zodParseData.success)
    //   throw new ApiError(
    //     400,
    //     "invalid data",
    //     JSON.stringify(zodParseData.error.format()),
    //   );

    // // destructuring the data
    // const { name, email, password } = zodParseData.data;

    // // cheking if user already exist
    // const user = await prismaClient.user.findUnique({ where: { email } });
    // if (user) throw new Error("user already exist");

    // // before saving the password we have to hash it
    // const hashedPassword = await hashPassword(password);

    // const newUser = await prismaClient.user.create({
    //   data: {
    //     name,
    //     email,
    //     passwrod: hashedPassword,
    //   },
    // });

    // if (!newUser) throw new ApiError(400, "something went wrong");

    // const { accessToken, refreshToken } = generateAccessToken(
    //   newUser.id,
    //   newUser.email,
    // );
    // await prisma?.account.create({
    //   data: {
    //     access_token: accessToken as string,
    //     refresh_token: refreshToken,
    //     provider: "credential",
    //     providerAccountId: newUser.id,
    //     type: "credential",
    //     userId: newUser.id,
    //   },
    // });
    // console.log(accessToken, "accesstoken");
    // const responce = NextResponse.json(
    //   new ApiResponse(200, "user created", true, newUser),
    //   {
    //     status: 200,
    //   },
    // );
    // console.log(responce);
    // responce.cookies.set("access_token", accessToken, {
    //   httpOnly: true,
    //   secure: true,
    // });
    // return responce;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      new ApiResponse(400, "something went wrong", false, error),
      {
        status: 400,
      },
    );
  }
}

export async function GET(req: NextRequest) {
  Jwt.call(req);
  return NextResponse.json({
    message: "hello",
  });
}
