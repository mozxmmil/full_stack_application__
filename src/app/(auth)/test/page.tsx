"use client";
import { graphqlClient } from "@/client/query";
import React, { useCallback } from "react";

import {} from "@/grl";
import { getCurrentUser } from "@/graphql/client/query/query";
import { useQuery } from "@tanstack/react-query";
const Test = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userData"],
    queryFn: () => graphqlClient.request(getCurrentUser),
  });

  console.log(data?.getUser);
  if (isLoading) {
    return (
      <>
        <h1>loadign ........</h1>
      </>
    );
  }
  return (
    <div className="bg-[] text-white">
      <button className="border border-red-300">click</button>
    </div>
  );
};

export default Test;
