"use client";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
const Layout = ({ children, modal }: Props) => {
  const pathname = usePathname();
  const isModelOpen = pathname.startsWith("/profile/p/");

  return (
    <>
      {children}
      {isModelOpen && modal}
    </>
  );
};

export default Layout;
