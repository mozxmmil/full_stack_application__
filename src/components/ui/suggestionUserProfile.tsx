import React from "react";
import ProfileComponents from "./profileComponet";
import Buttion from "./Buttion";
import Link from "next/link";
import { GetRecommcomededUserQuery } from "@/gql/graphql";

const SuggestionUserProfile = ({
  getRecommcomededUser,
}: GetRecommcomededUserQuery) => {
  //   console.log(props);
  console.log(getRecommcomededUser);
  return (
    <div className="flex w-full flex-col items-center gap-2 overflow-hidden rounded-lg border border-gray-600">
      <h1 className="w-full p-2 text-xl font-bold text-white">Who to follow</h1>
      <div className="w-full divide-y divide-gray-300">
        {getRecommcomededUser?.map((value) => (
          <Link
            key={value?.id}
            href={`/profile/${value?.id}`}
            className="group group-hover:cursor-pointer flex w-full items-center justify-between px-2 py-2 hover:bg-gray-900"
          >
            <div className="flex items-center gap-2">
              <ProfileComponents href={"#"} image={value?.image} />
              <h1 className="font-bold text-gray-300 group-hover:text-white">{value?.name}</h1>
            </div>
            <Buttion
              title="Follow"
              className="mt-0 w-fit text-base sm:mt-0 md:mt-0 group-hover:bg-white"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestionUserProfile;
