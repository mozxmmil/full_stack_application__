"use client";
import UserProfileSection from "@/components/layouts/commentSectionUserProfile";
import ImageViewr from "@/components/layouts/proile/p/imageViewr";
import UserDetailsComp from "@/components/layouts/proile/p/userDetails";
import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import React from "react";

const PhotoViewPage = () => {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center p-10 text-white backdrop-blur-[1.2px]">
      <div
        onClick={handleClickBack}
        className="absolute top-10 right-10 hover:cursor-pointer"
      >
        <IconX />
      </div>
      <div className="mx-auto grid h-full w-full grid-cols-1 overflow-hidden bg-zinc-900 sm:max-w-3xl sm:min-w-5xl sm:grid-cols-2">
        <div className="flex w-full flex-col">
          <UserProfileSection
            href="/"
            image="https://images.unsplash.com/photo-1750086721456-28c384a8896b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="hello ji madam"
            className="block w-full py-3 sm:hidden"
          />
          <div className="relative aspect-[4/5] h-full w-full overflow-hidden">
            <ImageViewr
              src={
                "https://images.unsplash.com/photo-1750086721456-28c384a8896b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="noImage"
              className="absolute h-full w-full object-cover"
              fill
            />
          </div>
        </div>
        <div>
          <UserDetailsComp />
        </div>
      </div>
    </main>
  );
};

export default PhotoViewPage;
