"use client";
import { useGetRecommendedUser } from "@/hook/userGetRecommendedUser";
import SuggestionUserProfile from "../ui/suggestionUserProfile";
import { getRecommcomededUser } from "@/graphql/client/query/getRecommendedUser";

const RightSidebar = () => {
  const { data } = useGetRecommendedUser();

  console.log(data?.getRecommcomededUser);
  return (
    <aside className="col-span-3 hidden p-4 sm:block">
      <SuggestionUserProfile {...data} />
    </aside>
  );
};

export default RightSidebar;
