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
    isDynemic: false,
  },
  {
    title: "Explore",
    icon: <IconHash className="size-7 text-white" />,
    link: "/explore",
    isDynemic: false,
  },
  {
    title: "Notification",
    icon: <IconBell className="size-7 text-white" />,
    link: "/notification",
    isDynemic: false,
  },
  {
    title: "Messages",
    icon: <IconMessage className="size-7 text-white" />,
    link: "/messages",
    isDynemic: false,
  },
  {
    title: "Communities",
    icon: <IconFriends className="size-7 text-white" />,
    link: "/commmunities",
    isDynemic: false,
  },
  {
    title: "Profile",
    icon: <IconUserFilled className="size-7 text-white" />,
    link: "/profile",
    isDynemic: true,
  },
  {
    title: "More",
    icon: <IconDotsCircleHorizontal className="size-7 text-white" />,
    link: "#",
    isDynemic: false,
  },
];

export const BottomItem: SideBarListProps[] = [
  {
    title: "Home",
    icon: <IconHome className="size-7 text-white" />,
    link: "/",
    isNotification: false,
    isDynemic: false,
  },
  {
    title: "Explore",
    icon: <IconHash className="size-7 text-white" />,
    link: "/explore",
    isNotification: false,
    isDynemic: false,
  },
  {
    title: "Notification",
    icon: <IconBell className="size-7 text-white" />,
    link: "/notification",
    isNotification: true,
    isDynemic: false,
  },
  {
    title: "Profile",
    icon: <IconUserFilled className="size-7 text-white" />,
    link: "/profile",
    isNotification: false,
    isDynemic: true,
  },
  {
    title: "More",
    icon: <IconDotsCircleHorizontal className="size-7 text-white" />,
    link: "#",
    isNotification: false,
    isDynemic: false,
  },
];
