import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { IconLockSquareRoundedFilled } from "@tabler/icons-react";

const buttonVariants = cva(
  "md:mt-5 mt-0 flex w-full items-center justify-center gap-3 rounded-full bg-[#D7DBDC] px-4 py-2 text-xl font-bold text-black hover:cursor-pointer  relative",
  {
    variants: {
      locked: {
        yes: "bg-gray-600 ",
      },
    },
  },
);
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  title: string;
  icon?: React.ReactNode;
}

const Buttion = ({ className, icon, title, locked, ...props }: Props) => {
  return (
    <button {...props} className={cn(buttonVariants({ locked, className }))}>
      {icon && <span>{icon}</span>}
      {title}
      {locked && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <IconLockSquareRoundedFilled className="size-10 rounded-full text-white" />
        </span>
      )}
    </button>
  );
};

export default Buttion;
