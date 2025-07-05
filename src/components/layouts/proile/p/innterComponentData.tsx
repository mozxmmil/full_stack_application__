import ProfileComponents from "@/components/ui/profileComponet";
import { Comment } from "@/gql/graphql";
import { timeCalculator } from "@/utils/timeCalculator";
import React from "react";

const InnerComponentData = ({ comment, createdAt, user }: Comment) => {
  const time = timeCalculator(createdAt);
  return (
    <div className="flex flex-col gap-5 py-6">
      <div className="flex items-center gap-3">
        <ProfileComponents
          href={`/profile/${user?.id}`}
          image={user?.image}
          className="size-5 sm:size-7"
        />
        <div className="flex gap-2">
          <span>{user?.name}</span>
          <span className="text-neutral-500">{time} .</span>
          
        </div>
      </div>
      <div>
        <h1 className=" px-10 font-light">{comment}</h1>
      </div>
    </div>
  );
};

export default InnerComponentData;
