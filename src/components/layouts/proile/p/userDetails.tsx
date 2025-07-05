import Buttion from "@/components/ui/Buttion";
import ProfileComponents from "@/components/ui/profileComponet";
import { GetImageOrVideoQuery } from "@/gql/graphql";
import { useDoComments, useGetComment } from "@/hook/comment";
import { cn } from "@/utils/cn";
import { IconLoader2 } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import UserProfileSection from "../../commentSectionUserProfile";
import InnerComponentData from "./innterComponentData";
import LikeCommentSection from "./likeCommentSection";

const UserDetailsComp = ({ getImageOrVideo }: GetImageOrVideoQuery) => {
  console.log(getImageOrVideo?.id);
  const [message, setmessage] = useState<string | null>("");
  const { mutateAsync, isPending, data } = useDoComments();

  const { data: data1, refetch } = useGetComment(getImageOrVideo?.id as string);
  console.log(data1?.getComment);

  console.log(data1);

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
  useEffect(() => {
    refetch();
  }, [getImageOrVideo?.id, refetch]);

  return (
    <aside className="flex h-full flex-col justify-between p-3">
      <UserProfileSection
        href={`/profile/${getImageOrVideo?.user?.id}`}
        image={getImageOrVideo?.user?.image as string}
        name={getImageOrVideo?.user?.name as string}
        className="hidden sm:block"
      />
      <div className="hidden border-y-2 border-neutral-500 sm:block">
        {/* {data1?.map((item) => <CommentSection key={item?.id} {...item} />)} */}
        <div className="commetSection flex h-120 flex-col divide-y divide-neutral-500 overflow-y-auto rounded-md py-6">
          {data1 ? (
            data1?.getComment?.map((item) => (
              <InnerComponentData key={item?.id} {...item} />
            ))
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <IconLoader2 className="animate-spin text-2xl" />
            </div>
          )}
        </div>
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
