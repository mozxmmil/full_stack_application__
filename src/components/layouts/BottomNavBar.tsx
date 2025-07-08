"use client";
import { BottomItem } from "@/utils/item_leftSideBar";
import Link from "next/link";
import React, { useState } from "react";
import { SideBarListProps } from "../../../types/leftSideBar";
import ClickoutsideCloser from "../common/clickOutsideCloser";
import { signupAxiso } from "@/utils/apicall";
import { signupDataResponceType } from "../../../types/signupDataResponceType";
import { useRouter } from "next/navigation";
import { IconLoader } from "@tabler/icons-react";
import { useGetCurrentUser } from "@/hook/useTwitt";
import { useCurrentUser } from "@/zustand/currentUser";

const BottomNavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setloading] = useState(false);
  const handleclicked = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setloading(true);
    const data: signupDataResponceType =
      await signupAxiso.delete("/api/logout");
    if (data.data.susscess) {
      router.refresh();
      setloading(false);
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 block w-screen bg-black p-2 md:hidden">
      <div className="relative">
        <div className="flex items-center justify-between p-2">
          {BottomItem.map((item, inx) => (
            <BottomIconComponent {...item} key={inx} fun={handleclicked} />
          ))}
        </div>
        {isOpen && (
          <ClickoutsideCloser callBack={handleclicked}>
            <div className="absolute -top-30 right-0 min-h-30 space-y-10 divide-neutral-300 rounded-md bg-black p-1 text-white">
              <div className="flex flex-col space-y-3 p-1 text-sm font-bold">
                <Link href={"/communities"}>Communities</Link>
                <span
                  onClick={handleLogout}
                  className="flex items-center justify-start gap-2 text-red-500"
                >
                  Log-Out{" "}
                  {loading && <IconLoader className="size-4 text-white" />}
                </span>
              </div>
            </div>
          </ClickoutsideCloser>
        )}
      </div>
    </footer>
  );
};

export default BottomNavBar;

const BottomIconComponent = ({
  icon,
  link,
  title,
  isNotification,
  fun,
  isDynemic,
}: SideBarListProps) => {
  const currentUser = useCurrentUser((state) => state.user);
  const handleClicked = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (title === "More") {
      e.preventDefault();
      if (fun) fun();
    }
  };
  return (
    <Link
      onClick={handleClicked}
      href={isDynemic ? `${link}/${currentUser?.id}` : link}
      className="relative flex size-12 items-center justify-center rounded-full border border-neutral-400"
    >
      {isNotification && (
        <span className="absolute top-0 right-0 size-3 rounded-full bg-blue-500"></span>
      )}
      {icon}
    </Link>
  );
};
