import React from "react";

export type SideBarListProps = {
  title: string;
  icon: React.ReactNode;
  link: string;
  isNotification?: boolean;
  fun?: () => void;
};
