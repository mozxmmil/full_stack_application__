"use client";
import { useGetCurrentUser } from "@/hook/useTwitt";
import { cn } from "@/utils/cn";
import { useTwitterAccount } from "@/zustand/twitterAccount";

const Header = () => {
   useGetCurrentUser();
  

  const { isFollowing, setIsFollowing } = useTwitterAccount((state) => state);
  

  return (
    <div className="sticky top-0 z-50 flex items-center justify-around bg-black text-white *:cursor-pointer *:p-5 *:font-medium">
      <button
        className={cn(
          "relative flex w-full items-center justify-center text-neutral-500",
          !isFollowing && "text-white",
        )}
        onClick={() => setIsFollowing(false)}
      >
        For you
        {!isFollowing && (
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-blue-600"></div>
        )}
      </button>
      <button
        className={cn(
          "relative flex w-full items-center justify-center border-none text-neutral-500 outline-none",
          isFollowing && "text-white",
        )}
        onClick={() => setIsFollowing(true)}
      >
        Following
        {isFollowing && (
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-blue-600 outline-none"></div>
        )}
      </button>
    </div>
  );
};

export default Header;
