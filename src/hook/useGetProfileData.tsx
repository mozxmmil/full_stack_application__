import { graphqlClient } from "@/client/query";
import {
  getUserProfileData,
  getUserProfileDataMedia,
  getUserProfileDataTwitt,
} from "@/graphql/client/query/getProfileData";
import { useQuery } from "@tanstack/react-query";

export const useGetProfileData = (getProfileDataId: string) => {
  const query = useQuery({
    queryKey: ["profile-data"],
    queryFn: () =>
      graphqlClient.request(getUserProfileData, { getProfileDataId }),
  });
  return { ...query, data: query.data?.getProfileData };
};

export const useGetProfileDataTwitt = (getProfileDataTwittId: string) => {
  const query = useQuery({
    queryKey: ["profile-Twitt-data"],
    queryFn: () =>
      graphqlClient.request(getUserProfileDataTwitt, { getProfileDataTwittId }),
  });
  return { ...query, data: query.data?.getProfileDataTwitt };
};

export const useGetPrfileDataMedia = (getProfileDataMediaId: string) => {
  const query = useQuery({
    queryKey: ["profile-Twitt-data-media"],
    queryFn: () =>
      graphqlClient.request(getUserProfileDataMedia, { getProfileDataMediaId }),
  });
  return { ...query, data: query.data?.getProfileDataMedia };
};
