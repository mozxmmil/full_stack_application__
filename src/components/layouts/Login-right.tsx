"use client";
import React, { useState } from "react";
import Buttion from "../ui/Buttion";
import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";

const Login_right = () => {
  const [isInputshowing, setIsInputshowing] = useState<boolean>(false);
  return (
    <div className="flex max-h-full min-h-[50vh] w-full flex-col items-center justify-center gap-4 text-white md:items-start md:justify-start">
      <h1 className="scale-y-90 transform text-6xl font-bold tracking-tighter capitalize sm:text-5xl md:text-8xl">
        heppening now
      </h1>
      <h1 className="mt-7 scale-y-75 transform text-start text-5xl font-bold text-gray-300">
        join today.
      </h1>
      <div className="min-h-60 w-90">
        <Buttion
          className="bg-white font-medium hover:bg-neutral-200"
          title="Sign up with Google"
          icon={<IconBrandGoogleFilled />}
        />
        <Buttion
          className="bg-white font-medium hover:bg-neutral-200"
          title="Sign up with Apple"
          icon={<IconBrandAppleFilled />}
        />
        <div className="mt-5 flex items-center justify-between">
          <div className="h-[1px] w-full bg-neutral-500" />
          <span className="text-[20px] text-white">or</span>
          <div className="h-[1px] w-full bg-neutral-500" />
        </div>
        <Buttion
          className="bg-blue-500 font-semibold text-white hover:bg-blue-600"
          title="Create Account"
        />
        <p className="mt-5 text-[13px] leading-tight text-neutral-400">
          By signing up, you agree to the{" "}
          <span className="text-blue-500">Terms of Service</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>, including{" "}
          <span className="text-blue-500">Cookie Use</span>.
        </p>
        <div className="mt-15">
          <h1 className="text-xl font-bold">Already have account?</h1>
          <Buttion
            title="Sign in"
            className="border border-neutral-400 bg-transparent text-blue-500 hover:bg-[rgba(33,150,243,0.15)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login_right;
