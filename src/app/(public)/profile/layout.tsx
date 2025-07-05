"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Layout = (props: any) => {
  const { children, modal } = props;
  const pathname = usePathname();
  const isModelOpen = pathname.startsWith("/profile/p/");

  return (
    <>
      {children}
      {isModelOpen ? modal : null}
    </>
  );
};

export default Layout;
