"use client";
import { useCurrentUser } from "@/zustand/currentUser";
import { IconLineDashed, IconLoader } from "@tabler/icons-react";
import ProfileComponents from "../ui/profileComponet";
import { useState } from "react";
import ClickoutsideCloser from "../common/clickOutsideCloser";
import { signupDataResponceType } from "../../../types/signupDataResponceType";
import { signupAxiso } from "@/utils/apicall";
import { useRouter } from "next/navigation";

const WrapperProfile = () => {
  const user = useCurrentUser((state) => state.user);
  const [isLogoutShowing, setIsLogoutShowing] = useState<boolean>(false);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const handleLogout = async (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setloading(true);
    const data: signupDataResponceType =
      await signupAxiso.delete("/api/logout");

    if (data.data.susscess) {
      router.refresh();
      setloading(false);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsLogoutShowing(!isLogoutShowing)}
        className="mt-5 flex w-full items-center justify-between gap-2 rounded-full p-2 hover:cursor-pointer hover:bg-neutral-800"
      >
        <ProfileComponents href={"#"} image={user?.image} />
        <div className="flex-col text-white">
          <h1 className="text-sm leading-none font-medium">{user?.name}</h1>
          <h1 className="text-sm leading-none text-neutral-400">
            {user?.email}
          </h1>
        </div>
        <IconLineDashed className="text-white" />
      </div>
      {isLogoutShowing && (
        <ClickoutsideCloser className="absolute -top-[150%] left-0 z-40 min-h-20 w-full space-y-2 overflow-hidden rounded-md border border-neutral-500 bg-black shadow-white">
          <div
            onClick={handleLogout}
            className="divide-y divide-neutral-500 bg-red-600 p-3 hover:cursor-pointer"
          >
            <h1 className="font-medium text-white">
              Log out @{user?.name}{" "}
              {loading && <IconLoader className="animate-spin" />}
            </h1>
          </div>
        </ClickoutsideCloser>
      )}
    </div>
  );
};

export default WrapperProfile;
