import { create } from "zustand";

type personData = { id: string; name: string };

export interface userDataType {
  id: string;
  name: string;
  email: string;
  image: string;
  follower: personData[];
  following: personData[];
}

interface currentUserType {
  user: userDataType | null;
  setUser: (user: userDataType) => void;
}
export const useCurrentUser = create<currentUserType>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
