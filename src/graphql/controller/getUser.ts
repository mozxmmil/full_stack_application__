import { TokenType } from "@/app/api/graphql/route";
import { prismaClient } from "@/utils/dbConnect";

export const getUserHandler = async (_: any, arg: any, context: TokenType) => {
  const { user } = context!;

  if (!user?.userId) throw new Error("userId must");

  const loggedInUser = await prismaClient.user.findUnique({
    where: {
      id: user.userId,
    },
  });
  if (!loggedInUser) throw new Error("user not found");
  return loggedInUser;
};
