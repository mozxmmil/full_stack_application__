import { cn } from "@/utils/cn";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Buttion = ({ className, icon, title, type, ...props }: Props) => {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        "mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#D7DBDC] px-4 py-2 text-xl font-bold text-black hover:cursor-pointer hover:bg-white",
        className,
      )}
    >
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
};

export default Buttion;
