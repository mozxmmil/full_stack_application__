import SidebarLeft from "@/components/layouts/LeftSidebar";
import RightSidebar from "@/components/layouts/RightSidebar";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/utils/cn";
import BottomNavBar from "@/components/layouts/BottomNavBar";
import "./index.css";
import { Metadata } from "next";
type Props = {
  children: React.ReactNode;
};
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
  };
}
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
