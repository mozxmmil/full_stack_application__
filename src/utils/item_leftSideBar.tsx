import { SideBarListProps } from "../../types/leftSideBar";
import {
  IconBell,
  IconDotsCircleHorizontal,
  IconFriends,
  IconHash,
  IconHome,
  IconMessage,
  IconUserFilled,
} from "@tabler/icons-react";

export const SideBarItem: SideBarListProps[] = [
  {
    title: "Home",
    icon: <IconHome className="size-7 text-white" />,
    link: "/",
  },
  {
    title: "Explore",
    icon: <IconHash className="size-7 text-white" />,
    link: "/explore",
  },
  {
    title: "Notification",
    icon: <IconBell className="size-7 text-white" />,
    link: "/notification",
  },
  {
    title: "Messages",
    icon: <IconMessage className="size-7 text-white" />,
    link: "/messages",
  },
  {
    title: "Communities",
    icon: <IconFriends className="size-7 text-white" />,
    link: "/commmunities",
  },
  {
    title: "Profile",
    icon: <IconUserFilled className="size-7 text-white" />,
    link: "/profile",
  },
  {
    title: "More",
    icon: <IconDotsCircleHorizontal className="size-7 text-white" />,
    link: "/#",
  },
];
