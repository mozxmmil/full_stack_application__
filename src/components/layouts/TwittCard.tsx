import {
  IconBookmark,
  IconChartHistogram,
  IconHeart,
  IconMessageCircle,
  IconRepeat,
  IconUpload,
} from "@tabler/icons-react";
import Image from "next/image";
import { TwittType } from "../../../types/getAllTwittType";
import ProfileComponents from "../ui/profileComponet";

const TwittCard = ({
  id,
  twitt,
  userId,
  createdAt,
  updatedAt,
  image,
}: TwittType) => {
  return (
    <div className="flex min-h-40 w-full gap-3 divide-y p-4 text-white">
      <ProfileComponents
        href={`/profile/${userId?.id}`}
        image={userId?.image}
      />

      <div className="flex flex-col justify-between gap-3 ">
        <div>
          <div className="top flex gap-2">
            <span>{userId?.name}</span>
            <span className="text-neutral-500">{userId?.name} .</span>
            <span className="text-neutral-500">
              {createdAt ? new Date(createdAt).toLocaleString() : ""}
            </span>
          </div>
          <div className=" whitespace-break-spaces mt-3">
            <h1>{twitt}</h1>
          </div>
        </div>
        {image && (
          <div className="bottom relative max-h-100 min-h-40 overflow-hidden rounded-md border border-neutral-400 bg-red-300">
            <Image
              src={image}
              width={500}
              height={500}
              alt="not found"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="lastbottom flex items-center justify-between  align-bottom text-sm">
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
