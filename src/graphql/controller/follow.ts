import { TokenType } from "@/app/api/graphql/route";
import { User } from "@/gql/graphql";
import { prismaClient } from "@/utils/dbConnect";

export const folloUserHandler = async (
  _: any,
  { userId }: { userId: string },
  cnx: TokenType,
) => {
  if (!cnx.user || !cnx.user.userId) throw new Error("UnAuthorize User ");
  if (userId === cnx.user.userId) throw new Error("you can't follow");
  if (!userId) throw new Error("please Provide User Id");

  const checking = await prismaClient.follow.findFirst({
    where: {
      followingId: userId,
    },
  });

  if (checking) throw new Error("you are alredy Following ");

  const follow = await prismaClient.follow.create({
    data: {
      follower: {
        connect: {
          id: cnx.user.userId,
        },
      },
      following: {
        connect: {
          id: userId,
        },
      },
    },
  });

  if (follow) return true;
  return false;
};
export const unFollowUserHandler = async (
  _: any,
  { userId }: { userId: string },
  cnx: TokenType,
) => {
  if (!cnx.user || !cnx.user.userId) throw new Error("UnAuthorize User ");
  if (userId === cnx.user.userId) throw new Error("you can't follow");
  if (!userId) throw new Error("please Provide User Id");

  const checking = await prismaClient.follow.findFirst({
    where: {
      followingId: userId,
    },
  });

  if (!checking) throw new Error("you can't unFollow this Account");

  const res = await prismaClient.follow.delete({
    where: {
      followerId_followingId: {
        followerId: cnx.user.userId,
        followingId: userId,
      },
    },
  });

  if (res) return true;
  return false;
};

export const hetFollowerInfoHandler = async (parent: User) => {
  const follower = await prismaClient.follow.findMany({
    where: {
      followingId: parent.id as string,
    },
    include: {
      follower: true,
    },
  });

  return follower.map((val) => val.follower);
};
export const getFollowingInfoHandler = async (parent: User) => {
  const follower = await prismaClient.follow.findMany({
    where: {
      followerId: parent.id as string,
    },
    include: {
      follower: true,
      following: true,
    },
  });
  return follower.map((val) => val.following);
};
