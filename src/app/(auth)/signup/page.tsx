
import Login_right from "@/components/layouts/SignuprRight";
import { IconBrandX } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    <div className="grid h-svh md: w-screen md:grid-cols-2 grid-cols-1 items-center bg-black">
      <div className="left  flex sm:h-full sm:w-full w-1/2 h-1/2  sm:items-center items-start sm:justify-center justify-start ">
        <IconBrandX className="sm:h-1/2 sm:w-1/2 size-2/4 text-white" />
      </div>
      <div className="flex items-center  h-full w-full">
        <Login_right />
      </div>
    </div>
  );
};

export default page;
