import { GetImageOrVideoQuery } from "@/gql/graphql";
import CommentSection from "../../commentSection";
import UserProfileSection from "../../commentSectionUserProfile";
import LikeCommentSection from "./likeCommentSection";

const UserDetailsComp = ({ getImageOrVideo }: GetImageOrVideoQuery) => {
  return (
    <aside className="flex h-full flex-col justify-between p-4">
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
    </aside>
  );
};

export default UserDetailsComp;
