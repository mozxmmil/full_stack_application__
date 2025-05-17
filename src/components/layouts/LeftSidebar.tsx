import { SideBarItem } from "@/utils/item_leftSideBar";
import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import Buttion from "../ui/Buttion";

const SidebarLeft = () => {
  return (
    <nav className="hidden md:block md:col-span-3 ">
      <section className="flex justify-end bg-orange-600 sm:col-span-2 md:col-span-3">
        <div className="bg-green-400 p-1 md:w-[85%] md:py-4">
          <div className="flex size-15 items-center justify-center rounded-full transition-colors duration-300 hover:cursor-pointer hover:bg-neutral-500">
            <IconBrandX className="size-5 text-[#E7E9EA] md:size-10" />
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {SideBarItem.map((item, inx) => (
              <Link
                href={item.link}
                key={inx}
                className="flex w-fit items-center gap-3 rounded-full px-2 py-3 pr-8 text-white hover:bg-[rgba(95,85,85,0.4)]"
              >
                {item.icon}
                <span className="text-md hidden md:block md:font-[10px] 2xl:text-2xl">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="w-full pr-5">
            <Buttion title="Post" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default SidebarLeft;
