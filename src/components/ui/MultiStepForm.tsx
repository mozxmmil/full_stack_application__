"use client";
import {
  IconArrowLeft,
  IconArrowNarrowRightDashed,
  IconArrowRightToArc,
  IconLoader2,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { UserInputTypeWithImage } from "../../../types/zod/userSchema";
import Buttion from "./Buttion";

const MultiStepForm = () => {
  const [prewImage, setPrewImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [step, setstep] = useState<number>(1);
  const [formData, setFormData] = useState<UserInputTypeWithImage>({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
    image: null,
  });

 
  const handleStepIncrement = () => {
    setstep((prev) => prev + 1);
  };

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const data = e.target;
    if (data.name === "image") {
      const file = data.files![0];
      const url = URL.createObjectURL(file);
      setPrewImage(url);
      setFormData((prev) => ({ ...prev, [data.name]: file }));
    }
    setFormData((prev) => ({ ...prev, [data.name]: data.value }));
  };

  const handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    setLoading(false);
  };
  return (
    <div className="w-xl space-y-5 rounded-lg bg-black p-6 text-white">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Create your account</h1>
        <span className="text-sm font-semibold text-gray-500">
          step {step} of 2
        </span>
      </div>
      <form onSubmit={handlSubmit} className="space-y-10 p-5">
        {step === 1 ? (
          <div className="space-y-5">
            <div className="flex flex-col">
              <label
                className="py-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Name
              </label>
              <input
                name="name"
                onChange={handleChage}
                value={formData.name}
                type="text"
                placeholder="Enter your name"
                className="p-3 outline-neutral-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="py-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Email
              </label>
              <input
                name="email"
                onChange={handleChage}
                value={formData.email}
                type="email"
                placeholder="Enter your Email"
                className="p-3 outline-neutral-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="py-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                password
              </label>
              <input
                name="password"
                onChange={handleChage}
                value={formData.password}
                type="text"
                placeholder="Enter your password"
                className="p-3 outline-neutral-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="py-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Conform password
              </label>
              <input
                name="conformPassword"
                onChange={handleChage}
                value={formData.conformPassword}
                type="text"
                placeholder="Enter your conform password"
                className="p-3 outline-neutral-400"
              />
            </div>
            <Buttion
              onClick={handleStepIncrement}
              title="Next"
              icon={<IconArrowRightToArc />}
              className="mt-10 font-medium"
            />
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="size-30 overflow-hidden rounded-full">
                <Image
                  src={prewImage ? prewImage : "/userAccount.png"}
                  alt="image not found"
                  width={50}
                  height={50}
                  quality={50}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mx-auto mt-4">
                <label
                  className="rounded-lg border border-blue-500 bg-transparent px-4 py-3 hover:cursor-pointer"
                  htmlFor="Image"
                >
                  Choose profile picture{" "}
                </label>

                <input
                  name="image"
                  onChange={handleChage}
                  type="file"
                  accept="image/*"
                  id="Image"
                  className="hidden p-4"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between sm:flex-row">
              <Buttion
                className="w-full px-7 text-base font-medium sm:max-w-fit"
                title="Back"
                icon={
                  <div className="size-5">
                    <IconArrowLeft />
                  </div>
                }
                onClick={() => setstep(1)}
              />
              <Buttion
                title="Sign Up"
                type="submit"
                className="w-full flex-row-reverse text-base font-medium sm:w-fit"
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
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
