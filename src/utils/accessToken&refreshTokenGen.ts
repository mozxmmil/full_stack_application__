
import { sign, SignOptions, verify } from "jsonwebtoken";
import { ApiError } from "./apiHandler";

export const generateAccessToken = (userId: string, email?: string) => {
  if (userId === undefined || email === undefined)
    throw new ApiError(400, "userId or email is undefined");

  if (!process.env.ACCESS_TOKEN || !process.env.ACCESS_TOKEN_EXP)
    throw new ApiError(500, "ACCESS_TOKEN or ACCESS_TOKEN_EXP is undefined");
  if (!process.env.REFRESH_TOKEN || !process.env.REFRESH_TOKEN_EXP)
    throw new ApiError(500, "ACCESS_TOKEN or ACCESS_TOKEN_EXP is undefined");

  const payload = { userId, email };
  const secret = process.env.ACCESS_TOKEN!;
  const options: SignOptions = {
    expiresIn: parseInt(process.env.ACCESS_TOKEN_EXP!),
  };
  const accessToken = sign(payload, secret, options);

  const secret2 = process.env.REFRESH_TOKEN;
  const options2: SignOptions = {
    expiresIn: parseInt(process.env.REFRESH_TOKEN_EXP!),
  };

  const refreshToken = sign(payload, secret2, options2);

  return { accessToken, refreshToken };
};

export function GetUserFromAccessToken(token: string) {
  if (!token || !process.env.ACCESS_TOKEN)
    throw new Error("Environment variable ACCESS_TOKEN or token is missing");

  try {
    const secret = process.env.ACCESS_TOKEN! || "secret";
    const user = verify(token, secret);
    if (!user) throw new Error("Acesstoken Expire");
    return user ;
  } catch (err) {
    throw new Error("invalid tokend");
  }
}
