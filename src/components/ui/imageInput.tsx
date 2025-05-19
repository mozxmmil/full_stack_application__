"use client";
import { cn } from "@/utils/cn";
import { IconPhotoScan } from "@tabler/icons-react";
import React from "react";

interface Props {
  onClicked: () => void;
  error: string;
}

const ImageInput = ({ onClicked, error }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClicked();
  };
  return (
    <div
      onClick={handleClick}
      className={cn(
        "iconsContainer flex size-10 items-center justify-center gap-2 rounded-full hover:cursor-pointer hover:bg-gray-500",
        error && "text-red-500",
      )}
    >
      <IconPhotoScan className="size-6" />
    </div>
  );
};

export default ImageInput;
