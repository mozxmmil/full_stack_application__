import { IconGif, IconMoodEmpty, IconPhotoScan } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import Buttion from "../ui/Buttion";

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
        <div className="top">
          <textarea
            placeholder="What's happening?"
            className="hideScrollbar min-h-20 w-full resize-none overflow-y-auto bg-transparent p-4 text-3xl text-nowrap wrap-break-word whitespace-pre-wrap outline-none"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="lastbottom flex items-center justify-between gap-1 text-sm">
            <div className="iconsContainer flex size-10 items-center justify-center gap-2 rounded-full hover:cursor-pointer hover:bg-gray-500">
              <IconPhotoScan className="size-6" />
            </div>
            <div className="iconsContainer ustify-center flex size-10 items-center justify-center gap-2 rounded-full hover:cursor-pointer hover:bg-gray-500">
              <IconGif className="size-6" />
            </div>
            <div className="iconsContainer ustify-center flex size-10 items-center justify-center gap-2 rounded-full hover:cursor-pointer hover:bg-gray-500">
              <IconMoodEmpty className="size-6" />
            </div>
          </div>
          <div>
            <Buttion title="Post" className="text-md px-4 py-2 outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwittCreater;
