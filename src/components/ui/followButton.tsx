import { useFollow, useUnfollow } from "@/hook/follow_unfollow";
import { userDataType } from "@/zustand/currentUser";
import { IconLoader2 } from "@tabler/icons-react";
import { TwittType } from "../../../types/getAllTwittType";
import Buttion from "./Buttion";

interface Props {
  userId: TwittType["userId"];
  user: userDataType;
}

const FollowButton = ({ userId, user }: Props) => {
  const {
    mutate: followMutation,
    isPending: followPending,
    data: followResponse,
    error: followError,
  } = useFollow();

  
  const {
    mutate: unFollowMutation,
    isPending: unFollowPending,
    data: unfollowResponse,
    error: unFollowError,
  } = useUnfollow();
  
  const handleFollow = (id: string) => {
    if (!id) return;
    followMutation(id);
  };

  const handleUnfollow = (id: string) => {
    if (!id) return;
    unFollowMutation(id);
  };

  const isFollowing = user?.following?.some((f) => f.id === userId?.id);

  return (
    <>
      {userId?.id !== user?.id && (
        <>
          {isFollowing ? (
            <Buttion
              onClick={() => handleUnfollow(userId?.id as string)}
              title="Following"
              icon={unFollowPending && <IconLoader2 className="animate-spin" />}
              className="mt-0 flex w-fit flex-row-reverse border border-neutral-500 bg-transparent text-base text-white md:mt-0"
            />
          ) : (
            <Buttion
              onClick={() => handleFollow(userId?.id as string)}
              title="Follow"
              icon={followPending && <IconLoader2 className="animate-spin" />}
              className="mt-0 flex w-fit flex-row-reverse text-base md:mt-0"
            />
          )}
        </>
      )}
    </>
  );
};

export default FollowButton;
