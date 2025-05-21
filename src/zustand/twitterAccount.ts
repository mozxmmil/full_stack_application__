import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TwitterAccountState {
  isFollowing: boolean;
  setIsFollowing: (isFollowing: boolean) => void;
}

export const useTwitterAccount = create<TwitterAccountState>()(
  persist(
    (set) => ({
      isFollowing: false as boolean,
      setIsFollowing: (isFollowing) => set({ isFollowing }),
    }),
    {
      name: "twitter-account-storage", // localStorage key
    },
  ),
);
