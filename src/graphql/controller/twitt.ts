import { TokenType } from "@/app/api/graphql/route";
import { AwsConfig } from "@/utils/awsConfig";
import { prismaClient } from "@/utils/dbConnect";

interface payload {
  data: string;
  image?: string;
}

export type TwittPayload = {
  payload: payload;
};

export const createTwittHandler = async (
  _: any,
  { payload }: TwittPayload,
  cnx: TokenType,
) => {
  if (!cnx.user?.userId) throw new Error("user not Authorization");

  const { data, image } = payload;

  const createTwitt = await prismaClient.twitt.create({
    data: {
      twitt: data,
      image: image ?? null,
      user: { connect: { id: cnx.user.userId } },
    },
  });
  if (!createTwitt) throw new Error("try again");
  return createTwitt;
};

export const getTwittsHandler = async (_: any, __: any, cnx: TokenType) => {
  if (!cnx.user) {
    throw new Error("user not Authorization");
  }
  const twitts = await prismaClient.twitt.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!twitts) throw new Error("try again");
  return twitts;
};

export const uploadImageHandler = async (
  _: any,
  { imageName, iamgeType }: { imageName: string; iamgeType: string },
  contex: TokenType,
) => {
  if (!contex.user) throw new Error("user not Authorization");

  const uri = await AwsConfig.getPresignedToken(
    iamgeType,
    imageName,
    contex.user.userId,
  );

  if (!uri) throw new Error("Aws Problem");
  return uri;
};
