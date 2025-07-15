import { TokenType } from "@/app/api/graphql/route";
import { prismaClient } from "@/utils/dbConnect";
import { recommendedRules } from "graphql";

export const getRecommendedUserHandler = async (
  _: any,
  __: any,
  cnx: TokenType,
) => {
  if (!cnx.user?.userId) throw new Error("user is UnAuthorize");
  const refcommendedUser = await prismaClient.user.findMany({
    where: {
      id: {
        not: cnx.user.userId,
      },
      follower: {
        none: {
          followerId: cnx.user.userId,
        },
      },
    },
    take: 5,
    select: {
      id: true,
      image: true,
      name: true,
    },
  });

  if (!recommendedRules) throw new Error("recommended user not found");
  return refcommendedUser;
};
