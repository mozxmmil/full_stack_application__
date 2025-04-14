import { IconGif, IconMoodEmpty, IconPhotoScan } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const TwittCreater = () => {
  return (
    <div className="flex min-h-40 w-full gap-3 p-4 text-white">
      <div className="size-12 shrink-0 overflow-hidden rounded-full bg-green-500">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4wVGjMQ37PaO4PdUVEAliSLi8-c2gJ1zvQ&s"
          }
          alt="profile"
          className="h-full w-full object-cover"
          width={50}
          height={50}
        />
      </div>

      <div className="flex w-full flex-col justify-between gap-4">
        <div className="top bg-red-500">
          <input
            type="text"
            placeholder="What's happening?"
            className="min-h-20 w-full bg-transparent text-4xl text-nowrap outline-none wrap-break-word whitespace-pre-wrap overflow-y-auto"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="lastbottom flex items-center justify-between gap-3 text-sm">
            <div className="iconsContainer flex items-center gap-2">
              <IconPhotoScan className="size-6" />
            </div>
            <div className="iconsContainer flex items-center gap-2">
              <IconGif className="size-6" />
            </div>
            <div className="iconsContainer flex items-center gap-2">
              <IconMoodEmpty className="size-6" />
            </div>
          </div>
          <div>
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwittCreater;
