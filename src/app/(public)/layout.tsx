import SidebarLeft from "@/components/layouts/LeftSidebar";
import RightSidebar from "@/components/layouts/RightSidebar";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/utils/cn";

type Props = {
	children: React.ReactNode;
};
const layout = ({ children }: Props) => {
	return (
		<main
			className={cn(
				"grid grid-cols-12 h-screen max-w-7xl mx-auto justify-center  ",
				GeistSans.className
			)}
		>
			<SidebarLeft />
			{children}
			<RightSidebar />
		</main>
	);
};

export default layout;
