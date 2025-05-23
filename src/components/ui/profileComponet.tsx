import { cn } from "@/utils/cn";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  image?: string | null;
}

const ProfileComponents = ({ image, className, ...props }: Props) => {
  return (
    <Link
      {...props}
      className={cn(
        "relative inline-block size-10 shrink-0 overflow-hidden rounded-full bg-neutral-800 hover:cursor-pointer sm:size-12",
        className,
      )}
    >
      {image && (
        <Image
          src={image && image}
          alt="profile"
          className="h-full w-full object-cover"
          width={10}
          height={10}
        
        />
      )}
    </Link>
  );
};

export default ProfileComponents;
