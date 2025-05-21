"use client";
import { useGetAllTwitts } from "@/hook/useTwitt";
import TwittCard from "./TwittCard";
import { TwittType } from "../../../types/getAllTwittType";
import { IconLoader3 } from "@tabler/icons-react";

const Wrpper = () => {
  const { data, isLoading, error } = useGetAllTwitts();
  const twitt = data as TwittType[];
  console.log(error);
  // get twitt
  return (
    <>
      {isLoading ? (
        <IconLoader3 className="mx-auto mt-10 size-10 animate-spin text-white" />
      ) : (
        <>
          {twitt && twitt.map((item) => <TwittCard {...item} key={item?.id} />)}
        </>
      )}
    </>
  );
};

export default Wrpper;
