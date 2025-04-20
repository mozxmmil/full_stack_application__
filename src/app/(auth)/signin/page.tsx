"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import Buttion from "@/components/ui/Buttion";

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
    <div className="h-screen w-screen">
      <Buttion
        className="mx-auto mt-[30rem] w-fit"
        onClick={handleClick}
        title="Sign in with Google"
      />
      <Buttion
        className="mx-auto mt-[30rem] w-fit"
        onClick={handlerLogout}
        title="logout"
      />
      <Buttion
        className="mx-auto mt-[30rem] w-fit"
        onClick={handleLogin}
        title="login with email"
      />
    </div>
  );
};

export default page;
