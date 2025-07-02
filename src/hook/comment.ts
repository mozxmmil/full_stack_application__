import { signupAxiso } from "@/utils/apicall";
import { useMutation } from "@tanstack/react-query";

type InputData = {
  postId: string;
  comments: string;
};

export const useDoComments = () => {
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
  });

  return mutation;
};
