import { create } from "zustand";

interface userDataType {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface currentUserType {
  user: userDataType | null;
  setUser: (user: userDataType) => void;
}
export const useCurrentUser = create<currentUserType>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
