"use client";
import React, { useState } from "react";
import Buttion from "../ui/Buttion";
import { signIn } from "next-auth/react";
import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import MultiStepForm from "../ui/MultiStepForm";
import ClickoutsideCloser from "../common/clickOutsideCloser";
import Link from "next/link";

const Login_right = () => {
  const [isVisiblediv, setIsVisiblediv] = useState(false);

  const handleClickInputField = (
    e?: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    if (e) e.stopPropagation();
    setIsVisiblediv(!isVisiblediv);
  };

  const handleCallback = (isVisible: boolean) => {
    setIsVisiblediv(!isVisible);
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 text-white md:w-fit md:items-start md:justify-start">
      <h1 className="scale-y-90 transform text-5xl font-bold tracking-tighter capitalize sm:text-6xl md:text-8xl">
        heppening now
      </h1>
      <h1 className="mt-0 scale-y-75 transform text-start text-4xl font-bold text-gray-300 md:mt-7">
        join today.
      </h1>
      <div className="w-90 px-5 sm:px-0">
        <Buttion
          onClick={handleGoogleLogin}
          className="bg-white font-medium hover:bg-neutral-200"
          title="Sign up with Google"
          icon={<IconBrandGoogleFilled />}
        />
        <Buttion
          locked={"yes"}
          disabled
          className="font-medium"
          title="Sign up with Apple"
          icon={<IconBrandAppleFilled />}
        />
        <div className="mt-5 flex items-center justify-between">
          <div className="h-[1px] w-full bg-neutral-500" />
          <span className="text-[20px] text-white">or</span>
          <div className="h-[1px] w-full bg-neutral-500" />
        </div>
        <Buttion
          onClick={handleClickInputField}
          className="bg-blue-500 font-semibold text-white hover:bg-blue-600"
          title="Create Account"
        />
        <p className="mt-2 text-[10px] leading-tight text-neutral-400 sm:text-[13px]">
          By signing up, you agree to the{" "}
          <span className="text-blue-500">Terms of Service</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>, including{" "}
          <span className="text-blue-500">Cookie Use</span>.
        </p>
        <div className="mt-3 md:mt-15">
          <h1 className="text-[15px] font-bold sm:text-xl">
            Already have account?
          </h1>
          <Link href={"signin"}>
            <Buttion
              title="Sign in"
              className="border border-neutral-400 bg-transparent text-blue-500 hover:bg-[rgba(33,150,243,0.15)]"
            />
          </Link>
        </div>
      </div>
      {isVisiblediv && (
        <div className="absolute inset-0 flex h-svh w-full items-center justify-center md:h-screen md:bg-[rgba(51,42,42,0.31)]">
          <ClickoutsideCloser callBack={handleCallback}>
            <MultiStepForm callback={handleClickInputField} />
          </ClickoutsideCloser>
        </div>
      )}
    </div>
  );
};

export default Login_right;
