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
import { timeCalculator } from "@/utils/timeCalculator";

const TwittCard = ({
  id,
  twitt,
  userId,
  createdAt,
  updatedAt,
  image,
}: TwittType) => {
  const time = timeCalculator(createdAt as string);
  return (
    <div className="flex min-h-40 w-full gap-3 divide-y p-4 text-white">
      <ProfileComponents
        href={`/profile/${userId?.id}`}
        image={userId?.image}
      />

      <div className="flex w-full flex-col justify-between gap-3">
        <div>
          <div className="top flex gap-2">
            <span>{userId?.name}</span>
            <span className="text-neutral-500">{userId?.name} .</span>
            <span className="text-neutral-500">{createdAt ? time : ""}</span>
          </div>
          <div className="mt-3 w-[90%] whitespace-break-spaces">
            <h1 className="text-wrap">{twitt}</h1>
          </div>
        </div>
        {image && (
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border bg-gray-100">
            <Image
              src={image}
              alt="Uploaded media"
              fill
              priority={false} // agar important ho toh true karo
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              onError={(e) => {
                e.currentTarget.src = "/fallback.png"; // fallback image
              }}
            />
          </div>
        )}
        <div className="lastbottom flex items-center justify-between align-bottom text-sm">
          <div className="iconsContainer flex items-center gap-1 hover:cursor-pointer hover:text-blue-500">
            <IconMessageCircle className="size-5" />
            <span className="md text-sm">12</span>
          </div>
          <div className="iconsContainer flex items-center gap-1 hover:cursor-pointer hover:text-green-500">
            <IconRepeat className="size-5" />
            <span>21</span>
          </div>
          <div className="iconsContainer flex items-center gap-1 hover:cursor-pointer hover:text-pink-500">
            <IconHeart className="size-5" />
            <span>22</span>
          </div>
          <div className="iconsContainer flex items-center gap-1 hover:cursor-pointer hover:text-blue-500">
            <IconChartHistogram className="size-5" />
            <span>22</span>
          </div>

          <div className="iconsContainer flex items-center gap-1">
            <IconBookmark className="size-5 hover:cursor-pointer hover:text-blue-500" />
            <IconUpload className="size-5 hover:cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwittCard;
