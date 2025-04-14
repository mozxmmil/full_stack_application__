import { cn } from "@/utils/cn";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Buttion = ({ className, title, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        "mt-5 w-full rounded-full bg-[#D7DBDC] px-4 py-2 text-xl font-bold text-black hover:cursor-pointer hover:bg-white",
        className,
      )}
    >
      {title}
    </button>
  );
};

export default Buttion;
