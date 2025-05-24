import { graphqlClient } from "@/client/query";
import { TwittPayload } from "@/gql/graphql";
import { createTwitt } from "@/graphql/client/mutation/createTwitt";
import { getAllTwitts } from "@/graphql/client/query/getAllTwitt";
import { getCurrentUser } from "@/graphql/client/query/getUser";
import { uploadImageURI } from "@/graphql/client/query/uploadImageCreateTwitt";
import { useCurrentUser } from "@/zustand/currentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetCurrentUser = () => {
  const setUser = useCurrentUser((state) => state.setUser);

  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => graphqlClient.request(getCurrentUser),
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
    queryKey: ["all-Twitt"],
    queryFn: () => graphqlClient.request(getAllTwitts),
  });
  return { ...query, data: query.data?.getTwitts };
};

export const useCrateTwitt = () => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ payload }: { payload: TwittPayload }) =>
      graphqlClient.request(createTwitt, { payload }),
    onSuccess: async () => {
      toast.success("Twitt Created successfully");
      await client.invalidateQueries({ queryKey: ["all-Twitt"] });
    },
  });

  return mutation;
};

export const useGetuploadImageURI = () => {
  return async (iamgeType: string, imageName: string) => {
    const { uploadImage } = await graphqlClient.request(uploadImageURI, {
      iamgeType,
      imageName,
    });
    if (uploadImage) {
      return uploadImage;
    }
  };
};
