"use client";
import UserProfileSection from "@/components/layouts/commentSectionUserProfile";
import ImageViewr from "@/components/layouts/proile/p/imageViewr";
import UserDetailsComp from "@/components/layouts/proile/p/userDetails";
import { useGetImageOrVideo } from "@/hook/useGetProfileData";
import { IconLoader, IconX } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";

import React, { useState } from "react";

const PhotoViewPage = () => {
  const params = useParams();
  const Postid = params.postId;
  const { data, isLoading, error } = useGetImageOrVideo(Postid as string);
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
      <div className="mx-auto grid h-fit w-full grid-cols-1 overflow-hidden bg-zinc-900  sm:max-w-5xl sm:grid-cols-2">
        <div className="flex w-full flex-col">
          <UserProfileSection
            href={`/profile/${data?.user?.id}`}
            image={data?.user?.image as string}
            name={data?.user?.name as string}
            className="block w-full py-3 sm:hidden"
          />
          <div className="relative aspect-[4/5] h-full w-full overflow-hidden">
            {isLoading ? (
              <div className="flex h-full items-center justify-center text-white">
                <IconLoader className="animate-spin" />
              </div>
            ) : (
              <ImageViewr
                src={data?.image as string}
                alt="noImage"
                className="absolute h-full w-full object-cover"
                fill
              />
            )}
          </div>
        </div>
        <div className="w-full">
          <UserDetailsComp getImageOrVideo={data} />
        </div>
      </div>
    </main>
  );
};

export default PhotoViewPage;
