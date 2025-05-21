import { graphqlClient } from "@/client/query";
import { getAllTwitts } from "@/graphql/client/query/getAllTwitt";
import { getCurrentUser } from "@/graphql/client/query/getUser";
import { useCurrentUser } from "@/zustand/currentUser";
import { useTwitterAccount } from "@/zustand/twitterAccount";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentUser = () => {
  const isFollowing = useTwitterAccount((state) => state.isFollowing);
  const setUser = useCurrentUser((state) => state.setUser);

  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => graphqlClient.request(getCurrentUser),
    enabled: !isFollowing,
  });

  if (
    query.data?.getUser &&
    query.data.getUser.id &&
    query.data.getUser.name &&
    query.data.getUser.email &&
    query.data.getUser.image
  ) {
    setUser({
      id: query.data.getUser.id,
      name: query.data.getUser.name,
      email: query.data.getUser.email,
      image: query.data.getUser.image,
    });
  }

  return { ...query, data: query.data?.getUser };
};

export const useGetAllTwitts = () => {
  const query = useQuery({
    queryKey: ["all-user"],
    queryFn: () => graphqlClient.request(getAllTwitts),
  });
  return { ...query, data: query.data?.getTwitts };
};
