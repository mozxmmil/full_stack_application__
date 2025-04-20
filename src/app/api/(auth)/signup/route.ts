import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "../../../../../types/zod/userSchema";
import { prismaClient } from "@/utils/dbConnect";
import { hashPassword } from "@/utils/bcrypt";
import { ApiError, ApiResponse } from "@/utils/apiHandler";
import { generateAccessToken } from "@/utils/accessToken&refreshTokenGen";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body) throw new Error("invalid data");
    const zodParseData = userSchema.safeParse(body);

    if (!zodParseData.success)
      throw new ApiError(
        400,
        "invalid data",
        JSON.stringify(zodParseData.error.format()),
      );

    const { name, email, password } = zodParseData.data;

    const user = await prismaClient.user.findUnique({ where: { email } });
    if (user) throw new Error("user already exist");

    const hashedPassword = await hashPassword(password);

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        passwrod: hashedPassword,
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
    console.log(accessToken, "accesstoken");
    const responce = NextResponse.json(
      new ApiResponse(200, "user created", true, newUser),
      {
        status: 200,
      },
    );
    console.log(responce);
    responce.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: true,
    });
    return responce;
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
