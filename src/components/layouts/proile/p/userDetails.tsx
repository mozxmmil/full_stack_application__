import { GetImageOrVideoQuery } from "@/gql/graphql";
import CommentSection from "../../commentSection";
import UserProfileSection from "../../commentSectionUserProfile";
import LikeCommentSection from "./likeCommentSection";
import ProfileComponents from "@/components/ui/profileComponet";
import Buttion from "@/components/ui/Buttion";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { useDoComments } from "@/hook/comment";
import { IconLoader, IconLoader2 } from "@tabler/icons-react";
import { toast } from "sonner";

const UserDetailsComp = ({ getImageOrVideo }: GetImageOrVideoQuery) => {
  const [message, setmessage] = useState<string | null>("");
  const { mutateAsync, isPending, isError, data } = useDoComments();

  console.log(isError);

  const handleSubmit = async (e: React.FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      if (message && message?.length > 0) {
        mutateAsync({
          comments: message,
          postId: getImageOrVideo?.id as string,
        });

        if (data?.data.success) {
          toast.success("Comment added successfully");
          setmessage("");
        }
      }
    } catch (error) {
      if (error) toast.error("Re-try");
      setmessage("");
    }
  };
  return (
    <aside className="flex h-full flex-col justify-between p-3">
      <UserProfileSection
        href={`/profile/${getImageOrVideo?.user?.id}`}
        image={getImageOrVideo?.user?.image as string}
        name={getImageOrVideo?.user?.name as string}
        className="hidden sm:block"
      />
      <div className="hidden border-y-2 border-neutral-500 sm:block">
        <CommentSection />
      </div>
      <LikeCommentSection />
      <div className="flex w-full items-center gap-3">
        <ProfileComponents
          href={`/profile/${getImageOrVideo?.user?.id}`}
          className="size-5 sm:size-9"
          image={getImageOrVideo?.user?.image}
        />
        <form onSubmit={handleSubmit} className="flex w-full justify-between">
          <input
            onChange={(e) => setmessage(e.target.value)}
            value={message as string}
            type="text"
            placeholder="add a comment"
            className="text-white focus:outline-none active:outline-none"
          />
          <Buttion
            disabled={isPending}
            type="submit"
            title="Post"
            icon={isPending && <IconLoader2 className="animate-spin" />}
            className={cn(
              "mt-0 w-fit flex-row-reverse py-1 text-base text-black md:mt-0",
              message && message?.length > 0 ? "bg-white" : "bg-gray-800",
            )}
          />
        </form>
      </div>
    </aside>
  );
};

export default UserDetailsComp;
