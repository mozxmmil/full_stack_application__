import { TokenType } from "@/app/api/graphql/route";
import { prismaClient } from "@/utils/dbConnect";

interface TwittType {
  id: string;
  twitt: string;
  image: string;
  userId: string;
}

export const getUserFromTwitt = async (
  parent: TwittType,
  _: any,
  __: TokenType,
) => {
  const user = await prismaClient.user.findUnique({
    where: { id: parent.userId },
  });
  if (!user) throw new Error("user not found");
  return user;
};
