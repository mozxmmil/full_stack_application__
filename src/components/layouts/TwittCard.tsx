import {
  IconBookmark,
  IconChartHistogram,
  IconHeart,
  IconMessageCircle,
  IconRepeat,
  IconUpload,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const TwittCard = () => {
  return (
    <div className="flex min-h-40 w-full gap-3 divide-y p-4 text-white">
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

      <div className="flex flex-col gap-3">
        <div className="top flex gap-2">
          <span>userName</span>
          <span className="text-neutral-500">Userid .</span>
          <span className="text-neutral-500">4h</span>
        </div>
        <div className="whitespace-break-spaces">
          rem ipsum dolor s it amet consectetur adipisicing elit. Tempore
          voluptatem doloribus tem pora illo rem neque perspiciatis asgiat, ipsa
          tenetur accusamus itaque laboriosam natus unde!
        </div>
        <div className="bottom relative max-h-100 min-h-40 overflow-hidden rounded-md border border-neutral-400 bg-red-300">
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s"
            }
            width={500}
            height={500}
            alt="not found"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lastbottom flex items-center justify-between text-sm">
          <div className="iconsContainer flex items-center gap-2 hover:cursor-pointer hover:text-blue-500">
            <IconMessageCircle className="size-5" />
            <span>12</span>
          </div>
          <div className="iconsContainer flex items-center gap-2 hover:cursor-pointer hover:text-green-500">
            <IconRepeat className="size-5" />
            <span>21</span>
          </div>
          <div className="iconsContainer flex items-center gap-2 hover:cursor-pointer hover:text-pink-500">
            <IconHeart className="size-5" />
            <span>22</span>
          </div>
          <div className="iconsContainer flex items-center gap-2 hover:cursor-pointer hover:text-blue-500">
            <IconChartHistogram className="size-5" />
            <span>22</span>
          </div>

          <div className="iconsContainer flex items-center gap-2">
            <IconBookmark className="size-5 hover:cursor-pointer hover:text-blue-500" />
            <IconUpload className="size-5 hover:cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwittCard;
