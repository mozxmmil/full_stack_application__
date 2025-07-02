import { GetUserFromAccessToken } from "@/utils/accessToken&refreshTokenGen";
import { NextRequest, NextResponse } from "next/server";
import { user } from "../graphql/route";

export async function PUT(req: NextRequest) {
  const formData = await req.formData();
  const cookie = req.cookies;
 
  const accessToke = cookie.get("access_token")?.value;

  const user = GetUserFromAccessToken(accessToke as string) as user;
  
  try {
    if (!user) throw new Error("unAuthorize");
    const { postId, comments } = Object.fromEntries(formData);
    if (!postId && !comments) throw new Error("please provide the commnets");

    const comment = await prisma?.comments.create({
      data: {
        postId: postId as string,
        comment: comments as string,
        userId: user.userId as string,
      },
    });
    console.log(comment);
    if (!comment) throw new Error("Commnet couldn't create");

    return NextResponse.json(
      {
        data: [],
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: error, success: false }, { status: 401 });
  }
}
