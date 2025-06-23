import {
  IconBookmark,
  IconHeart,
  IconMessageCircle,
  IconSend,
} from "@tabler/icons-react";
import React from "react";

const LikeCommentSection = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4 *:hover:cursor-pointer">
        <IconHeart />
        <IconMessageCircle />
        <IconSend />
      </div>
      <IconBookmark className="hover:cursor-pointer" />
    </div>
  );
};

export default LikeCommentSection;
