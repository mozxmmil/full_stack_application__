import SigninRightCard from "@/components/layouts/SignInRight";
import { IconBrandX } from "@tabler/icons-react";

const page = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-1 items-center bg-black md:grid-cols-2">
      <div className="left flex h-1/2 w-1/2 items-start justify-start sm:h-full sm:w-full sm:items-center sm:justify-center">
        <IconBrandX className="size-2/4 text-white sm:h-1/2 sm:w-1/2" />
      </div>
      <div className="flex h-full w-full items-center">
        <SigninRightCard />
      </div>
    </div>
  );
};

export default page;
