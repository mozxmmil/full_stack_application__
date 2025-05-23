"use client";
import { useCrateTwitt, useGetuploadImageURI } from "@/hook/useTwitt";
import { signupAxiso } from "@/utils/apicall";
import { useCurrentUser } from "@/zustand/currentUser";
import { IconGif, IconLoader2, IconMoodEmpty } from "@tabler/icons-react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { createTwitterErrorType } from "../../../types/error";
import {
  crateTwittDataSchema,
  crateTwittDataSchemaType,
  imageValidation,
} from "../../../types/zod/createTwittSchema";
import ClickoutsideCloser from "../common/clickOutsideCloser";
import Buttion from "../ui/Buttion";
import ImageInput from "../ui/imageInput";
import ProfileComponents from "../ui/profileComponet";

const TwittCreater = () => {
  const { mutate, data, isPending, error: errors } = useCrateTwitt();
  console.log(data);
  console.log(errors);
  const uploadFn = useGetuploadImageURI();
  const user = useCurrentUser((state) => state.user);
  const rf = useRef<HTMLInputElement | null>(null);
  const [CreateTwittData, setCreateTwittData] =
    useState<crateTwittDataSchemaType>({
      data: "",
      image: "",
    });
  console.log(CreateTwittData);
  const [error, seterror] = useState<createTwitterErrorType>({
    data: "",
    image: "",
  });
  const [emoji, setEmoji] = useState<boolean>(false);
  const [isImageShowing, setIsImageShowing] = useState<string | null>(null);

  const handleInputClicked = () => {
    rf.current?.click();
  };

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const data = e.target;
    console.log(data.name);
    if (data.name === "image" && data instanceof HTMLInputElement) {
      const files = data.files;
      if (files && files.length > 0) {
        const file = files[0];

        const { success, error } = imageValidation.safeParse(file);
        if (!success) {
          error.errors.map((message) =>
            seterror((prev) => ({
              ...prev,
              [message.path[0]]: message.message,
            })),
          );
          return;
        }
        const SignUrl = await uploadFn(file.type, file.name);
        if (SignUrl) {
          await signupAxiso.put(SignUrl, file, {
            headers: {
              "Content-Type": file.type,
            },
          });
          const url = new URL(SignUrl);
          const ImageUrl = `${url.origin}${url.pathname}`;
          setIsImageShowing(ImageUrl);
          setCreateTwittData((prev) => ({ ...prev, image: ImageUrl }));
        }
      }
      return;
    }
    setCreateTwittData((prev) => ({ ...prev, [data.name]: data.value }));
  };
  const handleEmojiClose = () => {
    setEmoji(!emoji);
  };

  const handleEmojiClicked = (e: EmojiClickData) => {
    const emoji = e.emoji as string;
    if (emoji) {
      return setCreateTwittData((prev) => ({
        ...prev,
        data: prev.data + emoji,
      }));
    }
  };

  //   console.log(mutation);
  const hanleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { success, error } = crateTwittDataSchema.safeParse(CreateTwittData);

    if (!success) {
      error.errors.map((message) =>
        seterror((prev) => ({ ...prev, [message.path[0]]: message.message })),
      );
    } else {
      mutate({ payload: CreateTwittData });
      // const form = new FormData();
    }
  };

  return (
    <div className="flex min-h-40 w-full gap-3 p-4 text-white">
      <ProfileComponents href={"/profile"} image={user?.image} />{" "}
      {/* todo: yaha pe mujhe profile ka link dalna hai  */}
      <form
        onSubmit={hanleSumbit}
        className="flex w-full flex-col gap-1 md:gap-4"
      >
        <div className="top">
          <textarea
            value={CreateTwittData.data}
            name="data"
            onChange={handleChange}
            placeholder="What's happening?"
            className="hideScrollbar min-h-10 w-full resize-none overflow-y-auto bg-transparent p-4 text-xl leading-tight font-medium text-nowrap wrap-break-word whitespace-pre-wrap outline-none md:min-h-20 md:text-3xl"
          />
          <span className="text-sm text-red-500">{error?.data}</span>
        </div>
        {isImageShowing && (
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border bg-gray-100">
            <Image
              src={isImageShowing}
              alt="Uploaded media"
              fill
              priority={false} // agar important ho toh true karo
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              onError={(e) => {
                e.currentTarget.src = "/fallback.png"; // fallback image
              }}
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="lastbottom flex items-center justify-between gap-1 text-sm">
            <ImageInput error={error?.image} onClicked={handleInputClicked} />
            <input
              ref={rf}
              type="file"
              accept="image/png , image/jpeg"
              className="hidden"
              name="image"
              onChange={handleChange}
            />
            <div className="iconsContainer ustify-center relative flex size-10 items-center justify-center gap-2 rounded-full hover:cursor-pointer hover:bg-gray-500">
              <IconGif className="size-6 text-neutral-500" />
            </div>
            <div
              onClick={() => setEmoji(!emoji)}
              className="iconsContainer ustify-center relative flex size-10 items-center justify-center gap-2 rounded-full hover:cursor-pointer hover:bg-gray-500 md:flex"
            >
              <IconMoodEmpty />
              {emoji && (
                <ClickoutsideCloser
                  className="absolute top-0 -left-0 z-50 size-10"
                  callBack={handleEmojiClose}
                >
                  <div className="absolute top-20 -left-40 z-50 size-10">
                    <EmojiPicker
                      className="bg-black dark:bg-black"
                      onEmojiClick={handleEmojiClicked}
                    />
                  </div>
                </ClickoutsideCloser>
              )}
            </div>
          </div>
          <div>
            <Buttion
              type="submit"
              title="Post"
              icon={isPending && <IconLoader2 className="animate-spin" />}
              className="text-md flex-row-reverse px-4 py-2 outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TwittCreater;
