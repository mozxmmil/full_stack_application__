import { TokenType } from "@/app/api/graphql/route";
import { prismaClient } from "@/utils/dbConnect";

export const getProfileDataHandler = async (
  _: any,
  { id }: { id: string },
  cnx: TokenType,
) => {
  if (!cnx.user?.userId) throw new Error("user not UnAuthorize");
  if (!id) throw new Error("for Profile userId required");
  const user = await prismaClient.user.findFirst({
    where: {
      id: id,
    },
  });

  return user;
};

export const getProfileDataTwittHandler = async (
  _: any,
  { id }: { id: string },
) => {
  if (!id) throw new Error("User id required");
  const twitt = await prismaClient.twitt.findMany({
    where: {
      userId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return twitt;
};

export const getProfileDataMediaHandler = async (
  _: any,
  { id }: { id: string },
) => {
  if (!id) throw new Error("userId required");
  const porfileDataImage = await prismaClient.twitt.findMany({
    where: {
      userId: id,
    },
  });
  return porfileDataImage;
};

export const getImageOrVideo = async (_: any, { id }: { id: string }) => {
  if (!id) throw new Error("userId required");

  const data = await prismaClient.twitt.findFirst({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
 
  if (!data) throw new Error("image not found");
  return data;
};
