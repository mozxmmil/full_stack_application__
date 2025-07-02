import { TokenType } from "@/app/api/graphql/route";
import { prismaClient } from "@/utils/dbConnect";

export const getCommentHandler = async (
  _: any,
  { postId }: { postId: string },
  cnx: TokenType,
) => {
  if (!cnx.user) throw new Error("user not Authorization");
  if (!postId) throw new Error("postId required");
  const comments = await prismaClient.comments.findMany({
    where: {
      postId: postId,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!comments) throw new Error("comments not found");

  return comments;
};
