import { graphqlClient } from "@/client/query";
import { Follow, Unfollow } from "@/graphql/client/mutation/follow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useFollow = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (userId: string) => graphqlClient.request(Follow, { userId }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      toast.success("Followed");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return mutation;
};

export const useUnfollow = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (userId: string) => graphqlClient.request(Unfollow, { userId }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      toast.success("unFollow");
    },
    onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
  });

  return mutation;
};
