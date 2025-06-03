"use client";
import { SideBarItem } from "@/utils/item_leftSideBar";
import { useCurrentUser } from "@/zustand/currentUser";
import Link from "next/link";
import React from "react";

const LeftSideBarIconList = () => {
  const user = useCurrentUser((user) => user.user);

  return (
    <>
      {SideBarItem.map((item, inx) => (
        <Link
          href={item.link === "/profile" ? `/profile/${user?.id}` : item.link}
          key={inx}
          className="flex w-fit items-center gap-3 rounded-full px-2 py-3 pr-8 text-white hover:bg-[rgba(95,85,85,0.4)]"
        >
          {item.icon}
          <span className="text-md hidden md:block md:font-[10px] 2xl:text-2xl">
            {item.title}
          </span>
        </Link>
      ))}
    </>
  );
};

export default LeftSideBarIconList;
