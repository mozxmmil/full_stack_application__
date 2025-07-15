import { graphqlClient } from "@/client/query";
import { getRecommcomededUser } from "@/graphql/client/query/getRecommendedUser";

import { useQuery } from "@tanstack/react-query";

export const useGetRecommendedUser = () => {
  const query = useQuery({
    queryKey: ["recommendedUser"],
    queryFn: () => graphqlClient.request(getRecommcomededUser),
  });
  return query;
};
