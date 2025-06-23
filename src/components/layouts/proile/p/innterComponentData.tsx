import ProfileComponents from "@/components/ui/profileComponet";
import React from "react";

const InnerComponentData = () => {
  return (
    <div className="flex flex-col gap-5 py-6">
      <div className="flex items-center gap-3">
        <ProfileComponents
          href={`/profile/`}
          image={
            "https://images.unsplash.com/photo-1750086721456-28c384a8896b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="size-5 sm:size-7"
        />
        <div className="flex gap-2">
          <span>{"dfjlkf"}</span>
          <span className="text-neutral-500">{"lkjfldfkl"} .</span>
          <span className="text-neutral-500">{"fsddfkfk"}</span>
        </div>
      </div>
      <div>
        <h1>nice bro what a post </h1>
      </div>
    </div>
  );
};

export default InnerComponentData;
