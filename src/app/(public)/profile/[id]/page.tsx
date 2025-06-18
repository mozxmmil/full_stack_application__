"use client";
import UpperPart from "@/components/layouts/proile/upperPart";
import WapperPost from "@/components/layouts/proile/wapperPosts";
import { useGetProfileData } from "@/hook/useGetProfileData";
import { IconLoader } from "@tabler/icons-react";
import { useParams } from "next/navigation";
const ProfilePage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetProfileData(id as string);

  return (
    <section className="hideScrollbar relative col-span-full overflow-y-auto border-neutral-500 text-white md:col-span-6 md:border-x">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <IconLoader className="animate-spin text-white" />
        </div>
      ) : (
        <>
          <UpperPart paramsId={id as string} data={data!} />
          <WapperPost userId={id as string} />
        </>
      )}
    </section>
  );
};

export default ProfilePage;
