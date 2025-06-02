"use client";
import { useGetAllTwitts } from "@/hook/useTwitt";
import { IconLoader3 } from "@tabler/icons-react";
import { TwittType } from "../../../types/getAllTwittType";
import Buttion from "../ui/Buttion";
import TwittCard from "./TwittCard";
import { useTwitterAccount } from "@/zustand/twitterAccount";

const WrpperTwittCard = () => {
  const isFollowing = useTwitterAccount((state) => state.isFollowing);
  
  const { data, isLoading, error, refetch } = useGetAllTwitts();
  const twitt = data as TwittType[];
//   console.log(isFollowing);
  // get twitt
  return (
    <>
      {!isFollowing && (
        <>
          {isLoading ? (
            <IconLoader3 className="mx-auto mt-10 size-6 animate-spin text-white" />
          ) : (
            <>
              {twitt &&
                twitt.map((item) => <TwittCard {...item} key={item?.id} />)}
            </>
          )}
          {error && (
            <Buttion
              onClick={() => refetch()}
              title="try again"
              className="mx-auto mt-10 w-1/2 text-sm"
            />
          )}
        </>
      )}
    </>
  );
};

export default WrpperTwittCard;
