import { graphqlClient } from "@/client/query";
import { getPostComments } from "@/graphql/client/query/getCommnet";
import { signupAxiso } from "@/utils/apicall";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetComment = (postId: string) => {
  console.log(postId);
  const query = useQuery({
    queryKey: ["getComment"],

    queryFn: () => {
      return graphqlClient.request(getPostComments, { postId });
    },
    staleTime: 0, 
    refetchOnMount: true, 
    refetchOnWindowFocus: false, 

  });

  return query;
};

type InputData = {
  postId: string;
  comments: string;
};

export const useDoComments = () => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ postId, comments }: InputData) => {
      const form = new FormData();
      form.append("postId", postId);
      form.append("comments", comments);

      return signupAxiso.put(`/api/commnets`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: async () => {
      await client.invalidateQueries({ queryKey: ["getComment"] });
    },
  });

  return mutation;
};
