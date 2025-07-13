import React from "react";
import ProfileComponents from "./profileComponet";
import Buttion from "./Buttion";
import Link from "next/link";


const SuggestionUserProfile = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2 overflow-hidden rounded-lg border border-gray-600">
      <h1 className="w-full p-2 text-xl font-bold text-white">Who to follow</h1>

      <Link href={"/profile/cmb3vltrn0000vlogcpxt0ex4"}  className="flex w-full items-center justify-between px-2 py-2 hover:cursor-pointer hover:bg-gray-600">
        <ProfileComponents
          href={"#"}
          image={
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Buttion
          title="Follow"
          className="mt-0 w-fit text-base sm:mt-0 md:mt-0"
        />
      </Link>
    </div>
  );
};

export default SuggestionUserProfile;
