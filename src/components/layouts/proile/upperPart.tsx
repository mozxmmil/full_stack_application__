import Buttion from "@/components/ui/Buttion";
import { IconArrowLeft, IconCalendarWeekFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UpperPart = () => {
  return (
    <>
      <div className="topSection flex items-center gap-4 p-2">
        <Link
          href="/"
          className="rounded-full p-3 transition-opacity duration-300 hover:bg-neutral-800"
        >
          <IconArrowLeft />
        </Link>
        <h1 className="text-xl font-bold">Name</h1>
      </div>
      <div className="backPoster bg-nural-800 relative h-50">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1748882648048-1103b6963a3d?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="backPoster"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="profileImage absolute -bottom-15 left-5 size-30 overflow-hidden rounded-full border-3 border-black bg-neutral-800">
          <div className="relative h-full w-full">
            <Image
              src={
                "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="profileImage"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end p-3">
        <Buttion title="Follow" className="mt-0 w-fit md:mt-0" />
      </div>
      <div className="metainfo p-2 text-white">
        <h1 className="text-2xl font-bold">Name</h1>
        <h3 className="text-neutral-500">@ Username</h3>
        <div className="Date mt-3 flex gap-2 text-neutral-500">
          <IconCalendarWeekFilled />
          <h1>joined {"December"}</h1>
        </div>
        <div className="followList mt-2 flex gap-5">
          <h1>
            {18} <span className="text-neutral-500">following</span>
          </h1>
          <h1>
            {18} <span className="text-neutral-500">followers</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default UpperPart;
