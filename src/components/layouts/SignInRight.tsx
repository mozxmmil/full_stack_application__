"use client";
import { cn } from "@/utils/cn";
import {
  IconArrowNarrowRightDashed,
  IconArrowRightDashed,
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
  IconLoader2,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Buttion from "../ui/Buttion";
import { signIn } from "next-auth/react";
import { SigninInputType, signinSchema } from "../../../types/zod/signinSchema";

const SigninRightCard = () => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<SigninInputType>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handStepIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (step === 1) {
      setStep((prev) => prev + 1);
    } else if (step >= 1 || step === 2) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    const { success, data, error } = signinSchema.safeParse(userData);

    if (!success) {
      setUserData({
        email: "",
        password: "",
      });
      setError(error.errors[0].message);
      setLoading(false);
      setStep(1);
      return;
    }
    console.log(data)
    const res = await signIn("credentials", {
      redirect: false,
      data,
    });
    console.log(res);
    if (res?.error) {
      setError(res.error);
      setLoading(false);
      setStep(1);
      return;
    }
  };
  useEffect(() => {}, []);

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

        <form className="w-full p-2" onSubmit={handleSumit}>
          <div className="overflow-hidden p-[1px]">
            <div
              className={cn(
                "hideScrollbar flex",
                step > 1 &&
                  "-translate-x-full transform transition-all duration-150 ease-in-out",
              )}
            >
              <input
                onChange={handleChange}
                value={userData?.email}
                className="h-full w-full shrink-0 rounded-md border-none p-3 focus:outline-blue-600"
                type="text"
                placeholder="Email or UserId"
                name="email"
                tabIndex={-1}
              />

              <input
                onChange={handleChange}
                value={userData?.password}
                className="h-full w-full shrink-0 rounded-md border-none p-3 focus:outline-blue-600"
                type="password"
                placeholder="password"
                name="password"
                tabIndex={-1}
              />
            </div>
            <p className="text-red-600">{error}</p>
          </div>
          {step !== 1 ? (
            <Buttion
              title="Sign in"
              className="flex flex-row-reverse"
              type="submit"
              icon={
                <div>
                  {loading ? (
                    <IconLoader2 className="animate-spin" />
                  ) : (
                    <IconArrowNarrowRightDashed />
                  )}
                </div>
              }
            />
          ) : (
            <Buttion
              onClick={handStepIncrease}
              title={"Next"}
              type="button"
              className="flex flex-row-reverse"
              icon={
                <div>
                  {step === 1 && (
                    <IconArrowRightDashed className="animate-pulse" />
                  )}
                </div>
              }
            />
          )}
        </form>
        <p className="mt-2 text-[13px] leading-tight text-neutral-400">
          By signing up, you agree to the{" "}
          <span className="text-blue-500">Terms of Service</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>, including{" "}
          <span className="text-blue-500">Cookie Use</span>.
        </p>
        <div className="mt-2">
          <h1 className="text-xl font-bold">Don&apos;t have account </h1>
          <Link href={"signup"}>
            <Buttion
              title="Sign Up"
              className="border border-neutral-400 bg-transparent text-blue-500 hover:bg-[rgba(33,150,243,0.15)]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninRightCard;
