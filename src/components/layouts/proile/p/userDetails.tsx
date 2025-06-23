import CommentSection from "../../commentSection";
import UserProfileSection from "../../commentSectionUserProfile";
import LikeCommentSection from "./likeCommentSection";

const UserDetailsComp = () => {
  return (
    <aside className="flex h-full flex-col justify-between p-4">
      <UserProfileSection
        href="/"
        image="https://images.unsplash.com/photo-1750086721456-28c384a8896b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="madam ji"
        className="hidden sm:block"
      />
      <div className="hidden sm:block border-y-2 border-neutral-500 ">
        <CommentSection />
      </div>
      <LikeCommentSection />
    </aside>
  );
};

export default UserDetailsComp;
