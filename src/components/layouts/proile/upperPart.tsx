"use client";
import Buttion from "@/components/ui/Buttion";
import { User } from "@/gql/graphql";
import { useCurrentUser } from "@/zustand/currentUser";
import { IconArrowLeft, IconCalendarWeekFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  paramsId: string;
  data: User;
}
const UpperPart = ({ paramsId, data }: Props) => {
  const user = useCurrentUser((state) => state.user);

  return (
    <>
      <div className="topSection sticky top-0 z-10 flex items-center gap-4 p-2 backdrop-blur-sm">
        <Link
          href="/"
          className="rounded-full p-3 transition-opacity duration-300 hover:bg-neutral-600"
        >
          <IconArrowLeft />
        </Link>
        <h1 className="text-xl font-bold text-white">{data.name}</h1>
      </div>
      <div className="backPoster bg-nural-800 relative h-50">
        {data.image && (
          <Image
            src={data.image}
            alt="backPoster"
            fill
            className="object-cover"
            loading="lazy"
          />
        )}
        <div className="profileImage absolute -bottom-15 left-5 size-30 overflow-hidden rounded-full border-3 border-black bg-neutral-800">
          <div className="relative h-full w-full">
            {data.image && (
              <Image
                src={data.image}
                alt="backPoster"
                fill
                className="object-cover"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end p-3">
        {user?.id !== paramsId ? (
          <Buttion title="Follow" className="mt-0 w-fit md:mt-0" />
        ) : (
          <Buttion title="Edit" className="mt-0 w-fit md:mt-0" />
        )}
      </div>
      <div className="metainfo p-2 text-white">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <h3 className="text-neutral-500">@ {data.name}</h3>
        <div className="Date mt-3 flex gap-2 text-neutral-500">
          <IconCalendarWeekFilled />
          <h1>{new Date(data.createdAt).toDateString()}</h1>
        </div>
        <div className="followList mt-2 flex gap-5">
          <h1>
            {data.follower?.length}{" "}
            <span className="text-neutral-500">following</span>
          </h1>
          <h1>
            {data.following?.length}{" "}
            <span className="text-neutral-500">following</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default UpperPart;
