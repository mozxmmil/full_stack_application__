import { cn } from "@/utils/cn";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React, { HTMLAttributes } from "react";

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  image?: string;
}

const ProfileComponents = ({ image, className, ...props }: Props) => {
  return (
    <Link
      {...props}
      className={cn(
        "size-10 shrink-0 overflow-hidden rounded-full bg-green-500 hover:cursor-pointer sm:size-12",
        className,
      )}
    >
      <Image
        src={
          image
            ? image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4wVGjMQ37PaO4PdUVEAliSLi8-c2gJ1zvQ&s"
        }
        alt="profile"
        className="h-full w-full object-cover"
        width={50}
        height={50}
      />
    </Link>
  );
};

export default ProfileComponents;
