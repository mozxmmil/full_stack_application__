"use client";
import { signupAxiso } from "@/utils/apicall";
import { IconGif, IconMoodEmpty } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import React, { use, useRef, useState } from "react";
import { createTwitterErrorType } from "../../../types/error";
import {
  crateTwittDataSchema,
  CreateTwittDataType,
} from "../../../types/zod/createTwittSchema";
import ClickoutsideCloser from "../common/clickOutsideCloser";
import Buttion from "../ui/Buttion";
import ImageInput from "../ui/imageInput";
import ProfileComponents from "../ui/profileComponet";
import { useCurrentUser } from "@/zustand/currentUser";

const TwittCreater = () => {
  const user = useCurrentUser((state) => state.user);
  const rf = useRef<HTMLInputElement | null>(null);
  const [CreateTwittData, setCreateTwittData] = useState<CreateTwittDataType>({
    data: "",
    image: undefined as unknown as File,
  });
  const [error, seterror] = useState<createTwitterErrorType>({
    data: "",
    image: "",
  });
  const [emoji, setEmoji] = useState<boolean>(false);

  const handleInputClicked = () => {
    rf.current?.click();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const data = e.target;
    if (data.name === "image" && data instanceof HTMLInputElement) {
      const files = data.files;
      if (files && files.length > 0) {
        const file = files[0];
        setCreateTwittData((prev) => ({ ...prev, image: file }));
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

  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return signupAxiso.post("api/crateTwitt", data, {
        headers: {
          ["Content-Type"]: "multipart/form-data",
        },
      });
    },
  });

  //   console.log(mutation);
  const hanleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { success, error } = crateTwittDataSchema.safeParse(CreateTwittData);

    if (!success) {
      error.errors.map((message) =>
        seterror((prev) => ({ ...prev, [message.path[0]]: message.message })),
      );
    } else {
      const form = new FormData();
      form.append("data", CreateTwittData.data);
      if (CreateTwittData.image) {
        form.append("image", CreateTwittData.image);
      }

      mutation.mutate(form);
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
              className="text-md px-4 py-2 outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TwittCreater;
