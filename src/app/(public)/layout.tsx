import SidebarLeft from "@/components/layouts/LeftSidebar";
import RightSidebar from "@/components/layouts/RightSidebar";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/utils/cn";
import BottomNavBar from "@/components/layouts/BottomNavBar";
import "./index.css";
type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <main
      className={cn(
        "relative mx-auto grid h-svh w-svw grid-cols-12 justify-center md:h-screen md:max-w-7xl",
        GeistSans.className,
      )}
    >
      <SidebarLeft />
      {children}
      <RightSidebar />
      <BottomNavBar />
    </main>
  );
};

export default layout;
