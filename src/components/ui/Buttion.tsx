import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes, } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
}

const Buttion = ({ className, icon, title,  ...props }: Props) => {
  return (
    <button
      {...props}
      
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
