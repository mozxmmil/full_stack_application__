import { NextRequest, NextResponse } from "next/server";
import { GetUserFromAccessTokenForMiddleware } from "./utils/accessToken&refreshTokenGen";

export const middleware = async (req: NextRequest) => {
  const cookieRes = req.cookies.get("access_token")?.value;
  const responce = NextResponse.next();
  const url = req.nextUrl.pathname;

  if ((url === "/signin" || url === "/signup") && !cookieRes) {
    return responce;
  }
  if ((url === "/signin" || url === "/signup") && cookieRes) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (["/", "/profile", "/explore"].includes(url)) {
    if (!cookieRes) {
      return NextResponse.redirect(new URL("/signup", req.url));
    }
    const user = await GetUserFromAccessTokenForMiddleware(cookieRes);
    if (!user) {
      return NextResponse.redirect(new URL("/signup", req.url));
    }
  }
  return responce;
};

export const config = {
  matcher: ["/profile", "/", "/explore", "/signup", "/signin"],
};
