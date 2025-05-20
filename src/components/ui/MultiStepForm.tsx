"use client";
import { iconXVariants } from "@/motion/vairants";
import { signupAxiso } from "@/utils/apicall";
import {
  IconArrowLeft,
  IconArrowNarrowRightDashed,
  IconArrowRight,
  IconLoader2,
  IconX,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import { AxiosErrorWithMessage } from "../../../types/axiosErrorType";
import {
  UserInputError,
  UserInputTypeWithImage,
  userSchema,
} from "../../../types/zod/userSchema";
import Buttion from "./Buttion";
import { signupDataResponceType } from "../../../types/signupDataResponceType";
import { useRouter } from "next/navigation";
import { SetStorage } from "@/utils/setStorageIntoBrowser";

type Props = {
  callback?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const MultiStepForm = ({ callback }: Props) => {
  const router = useRouter();
  const [prewImage, setPrewImage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [step, setstep] = useState<number>(1);
  const [formData, setFormData] = useState<UserInputTypeWithImage>({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
    image: null,
  });

  const [formError, setformError] = useState<UserInputError>({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
    image: "",
  });
  const handleCloseDialogBox = (e: React.MouseEvent<HTMLDivElement>) => {
    if (callback) {
      callback(e);
    }
  };
  const handleStepIncrement = () => {
    const { error, success } = userSchema.safeParse(formData);

    if (!success && !error.errors[0].path.includes("image") && step < 2) {
      error!.errors.forEach((data) =>
        setformError((prev) => ({
          ...prev,
          [data.path[0]]: step >= 1 ? data.message : "",
        })),
      );
    } else {
      setformError({
        name: "",
        email: "",
        password: "",
        conformPassword: "",
        image: "",
      });
      setstep((prev) => prev + 1);
    }
  };
  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const data = e.target;
    if (data.name === "image") {
      const file = data.files?.[0]; // File object lo
      if (file) {
        // Check: File { name: 'Screenshot...', type: 'image/png' }
        const url = URL.createObjectURL(file); // Preview ke liye URL
        setPrewImage(url);
        setFormData((prev) => ({ ...prev, image: file })); // File object set karo
      }
    } else {
      // Baki inputs ke liye value set karo
      setFormData((prev) => ({ ...prev, [data.name]: data.value }));
    }
  };

  const handlSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setLoading(true);

    const { error, success } = userSchema.safeParse(formData);
    if (!success) {
      error.errors.forEach((data) =>
        setformError((prev) => ({ ...prev, [data.path[0]]: data.message })),
      );
      setLoading(false);
      return;
    }

    if (formData.image === null) {
      setformError((prev) => ({
        ...prev,
        image: "please select image",
      }));
      return;
    }
    // api call --------->
    try {
      const formdata = new FormData();
      formdata.append("name", formData.name);
      formdata.append("email", formData.email);
      formdata.append("password", formData.password);
      formdata.append("conformPassword", formData.conformPassword);
      formdata.append("image", formData.image!);
      const data: signupDataResponceType = await signupAxiso.post(
        "/api/signup",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",

          },
        },
      );
      
      if (data.data.susscess) {
        toast.success("account created successfully");
        setLoading(false);
        SetStorage.setLocalStorage("refreshToken", data.data.data.refreshToken);
        router.push("/");
      }
    } catch (e) {
      const error = e as AxiosErrorWithMessage;
      console.log(error);
      if (error.response?.data?.data?.message) {
        toast.error(error.response?.data?.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("something went wrong");
      }
      setLoading(false);

      setformError({
        name: "",
        email: "",
        password: "",
        conformPassword: "",
        image: "",
      });
    }
  };
  return (
    <div className="relative h-svh w-svw space-y-5 rounded-lg bg-black p-6 text-white md:h-fit md:w-xl">
      <motion.div
        onClick={handleCloseDialogBox}
        variants={iconXVariants}
        whileHover={"hover"}
        className="absolute top-7 right-3 hover:cursor-pointer md:right-7"
      >
        <IconX className="size-7" />
      </motion.div>
      <div className="mt-14 space-y-2 text-center md:mt-10">
        <h1 className="text-xl font-bold text-white md:text-3xl">
          Create your account
        </h1>
        <span className="text-sm font-semibold text-gray-500">
          step {step} of 2
        </span>
      </div>
      <form onSubmit={handlSubmit} className="space-y-10 md:p-5">
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
              {formError.name && (
                <span className="text-red-600">{formError.name}</span>
              )}
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
              {formError.email && (
                <span className="text-red-600">{formError.email}</span>
              )}
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
              {formError.password && (
                <span className="text-red-600">{formError.password}</span>
              )}
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
              {formError.conformPassword && (
                <span className="text-red-600">
                  {formError.conformPassword}
                </span>
              )}
            </div>
            <Buttion
              onClick={handleStepIncrement}
              title="Next"
              icon={<IconArrowRight />}
              className="mt-10 flex flex-row-reverse font-medium"
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
                  quality={10}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mx-auto mt-4 flex flex-col">
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

                {formError.image && (
                  <span className="mt-3 text-center text-red-600">
                    {formError.image}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center justify-between sm:flex-row">
              <Buttion
                className="w-full px-7 text-base font-medium sm:max-w-fit mt-5"
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
                className="w-full flex-row-reverse text-base font-medium sm:w-fit mt-5"
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
