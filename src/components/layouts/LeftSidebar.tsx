
import { IconBrandX } from "@tabler/icons-react";
import Buttion from "../ui/Buttion";
import WrapperProfile from "../wrapperComponent/wrapperProfile";
import LeftSideBarIconList from "./leftSideBarIconList";

const SidebarLeft = () => {
  return (
    <nav className="hidden md:col-span-3 md:block">
      <section className="flex justify-end sm:col-span-2 md:col-span-3">
        <div className="p-1 md:w-[85%] md:py-4">
          <div className="flex size-15 items-center justify-center rounded-full transition-colors duration-300 hover:cursor-pointer hover:bg-neutral-500">
            <IconBrandX className="size-5 text-[#E7E9EA] md:size-10" />
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <LeftSideBarIconList />
          </div>
          <div className="w-full pr-5">
            <Buttion title="Post" />
            <WrapperProfile />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default SidebarLeft;
