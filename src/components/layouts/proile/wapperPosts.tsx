"use client";
import Buttion from "@/components/ui/Buttion";
import {
  useGetPrfileDataMedia,
  useGetProfileDataTwitt,
} from "@/hook/useGetProfileData";
import { cn } from "@/utils/cn";
import { IconHeart } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TwittType } from "../../../../types/getAllTwittType";
import TwittCard from "../TwittCard";
import { ProfileMediaType } from "../../../../types/profile/type";
import Link from "next/link";
type ButtonType = "post" | "media";
const WapperPost = ({ userId }: { userId: string }) => {
  const [buttonState, setbuttonState] = useState<ButtonType>("post");

  const query = useGetProfileDataTwitt(userId);
  const query1 = useGetPrfileDataMedia(userId);
  const data = query.data as TwittType[];
  const data1 = query1.data as ProfileMediaType[];

  useEffect(() => {
    if (buttonState === "post") {
      query.refetch();
    } else {
      query1.refetch();
    }
  }, [buttonState]);

  return (
    <div className="mt-5 min-h-70">
      <div className="flex gap-2">
        <Buttion
          onClick={() => setbuttonState("post")}
          title="Post"
          className={cn(
            "mt-0 rounded-md border-2 border-neutral-800 bg-transparent px-1 py-1 text-sm text-white transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800 md:mt-0 md:py-2 md:text-lg",
            buttonState === "post" &&
              "border-transparent outline-2 outline-blue-500",
          )}
        />
        <Buttion
          onClick={() => setbuttonState("media")}
          title="Media"
          className={cn(
            "mt-0 rounded-md border-2 border-neutral-800 bg-transparent px-1 py-1 text-sm text-white transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800 md:mt-0 md:py-2 md:text-lg",
            buttonState === "media" &&
              "border-transparent outline-2 outline-blue-500",
          )}
        />
      </div>
      <div className="mt-5 py-5">
        {buttonState === "post" ? (
          <div className="min-h-40 divide-y divide-neutral-800">
            {data &&
              data?.map((item) => <TwittCard key={item?.id} {...item} />)}
          </div>
        ) : (
          <div className="grid min-h-40 grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-3">
            {data1.map(
              (item) =>
                ((item.image !== undefined && item?.image?.length > 0) ||
                  item.video !== null) && (
                  <Link key={item.id} href={`/profile/p/${item.id}`}>
                    <ImageCard {...item} />
                  </Link>
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WapperPost;

const ImageCard = ({ image }: ProfileMediaType) => {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-md border-[1px] border-neutral-600 transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
      {image && (
        <Image src={image} alt="Random Image" fill className="object-cover" />
      )}
      <div className="absolute top-0 left-0 z-20 h-full w-full bg-[rgba(0,0,0,0.5)] opacity-0 transition-all duration-400 group-hover:opacity-100">
        <div className="relative flex h-full w-full items-center justify-center gap-2">
          <IconHeart />
          <span>{12}</span>
        </div>
      </div>
    </div>
  );
};
