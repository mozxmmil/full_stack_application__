import React from "react";
import ProfileComponents from "../ui/profileComponet";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface Props {
  image: string;
  name: string;
  href: string;
  className?: string;
}
const UserProfileSection = ({ image, name, href, className }: Props) => {
  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-4">
        <ProfileComponents href={href} image={image} className="group " />
        <Link
          href={href}
          className="text-sm underline-offset-1 group-hover:underline"
        >
          <span>{name}</span>
        </Link>
      </div>
    </div>
  );
};

export default UserProfileSection;
