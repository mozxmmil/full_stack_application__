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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const SigninRightCard = () => {
  const router = useRouter();
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
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    
    if (res?.ok) {
      setLoading(false);
      toast.success("signIn susscess");
      router.push("/");
    }
    if (res?.error) {
      setError(res.error);
      setLoading(false);
      setStep(1);
      return;
    }
  };
  

  return (
    <div className="flex max-h-full w-full flex-col items-center justify-center gap-2 text-white md:items-start md:justify-start md:gap-4">
      <h1 className="scale-y-90 transform text-5xl font-bold tracking-tighter capitalize sm:text-6xl md:scale-y-75 md:text-8xl">
        heppening now
      </h1>
      <h1 className="mt-1 scale-y-75 transform text-start text-4xl font-bold text-gray-300 md:mt-5 md:text-5xl">
        join today.
      </h1>
      <div className="min-h-60 w-90 px-5 sm:px-0">
        <Buttion
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="mt-5 bg-white font-medium hover:bg-neutral-200"
          title="Sign up with Google"
          icon={<IconBrandGoogleFilled />}
        />
        <Buttion
          className="relative mt-5 font-medium"
          title="Sign up with Apple"
          icon={<IconBrandAppleFilled />}
          disabled
          locked={"yes"}
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
                type="email"
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
              className="mt-5 flex flex-row-reverse"
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
              className="mt-5 flex flex-row-reverse"
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
        <p className="mt-2 text-[10px] leading-tight text-neutral-400 sm:text-[13px]">
          By signing up, you agree to the{" "}
          <span className="text-blue-500">Terms of Service</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>, including{" "}
          <span className="text-blue-500">Cookie Use</span>.
        </p>
        <div className="mt-2">
          <h1 className="text-[15px] font-bold sm:text-xl">
            Don&apos;t have account{" "}
          </h1>
          <Link href={"signup"}>
            <Buttion
              title="Sign Up"
              className="mt-5 border border-neutral-400 bg-transparent text-blue-500 hover:bg-[rgba(33,150,243,0.15)]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninRightCard;
