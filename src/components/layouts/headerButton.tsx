"use client";
import { graphqlClient } from "@/client/query";
import { getCurrentUser } from "@/graphql/client/query/getUser";
import { cn } from "@/utils/cn";
import { useCurrentUser } from "@/zustand/currentUser";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Header = () => {
  const setUser = useCurrentUser((state) => state.setUser);
  const handleClicked = () => {
    setIsFollowing(!isFollowing);
  };
  const [isFollowing, setIsFollowing] = useState(true);

  const { data, isLoading, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => graphqlClient.request(getCurrentUser),
    enabled: isFollowing,
  });
  if (
    data?.getUser &&
    data.getUser.id &&
    data.getUser.name &&
    data.getUser.email &&
    data.getUser.image
  ) {
    setUser({
      id: data.getUser.id,
      name: data.getUser.name,
      email: data.getUser.email,
      image: data.getUser.image,
    });
  }
  //   console.log(error?.message);
  return (
    <div className="sticky top-0 z-50 flex items-center justify-around bg-black text-white *:cursor-pointer *:p-5 *:font-medium">
      <button
        className={cn(
          "relative flex w-full items-center justify-center text-neutral-500",
          isFollowing && "text-white",
        )}
        onClick={handleClicked}
      >
        For you
        {isFollowing && (
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-blue-600"></div>
        )}
      </button>
      <button
        className={cn(
          "relative flex w-full items-center justify-center text-neutral-500",
          !isFollowing && "text-white",
        )}
        onClick={handleClicked}
      >
        Following
        {!isFollowing && (
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-blue-600"></div>
        )}
      </button>
    </div>
  );
};

export default Header;
