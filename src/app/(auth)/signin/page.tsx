"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import Buttion from "@/components/ui/Buttion";
import ClickoutsideCloser from "@/components/common/clickOutsideCloser";

const page = () => {
  
  const handleClick = async () => {
    signIn("google", { callbackUrl: "/" });
  };
  const handlerLogout = async () => {
    signOut({ callbackUrl: "/logger" });
  };
  const handleLogin = async () => {
    const responce = await signIn("credentials", {
      redirect: false,
      email: "mdmozammil605@gmail.com",
      password: "123456789",
    });
    console.log(responce);
  };
  return (
    <div className="h-screen w-screen flex">
      <ClickoutsideCloser>
        <h1 className="text-white">hello ji</h1>
      </ClickoutsideCloser>
      <ClickoutsideCloser>
        <h1 className="text-white">hello ji</h1>
      </ClickoutsideCloser>
      <ClickoutsideCloser>
        <h1 className="text-white">hello ji</h1>
      </ClickoutsideCloser>
    </div>
  );
};

export default page;
