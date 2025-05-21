"use client";
import Header from "@/components/layouts/headerButton";
import TwittCreater from "@/components/layouts/TwittCreater";
import Wrpper from "@/components/layouts/wrapper";
import { useTwitterAccount } from "@/zustand/twitterAccount";
import { Suspense } from "react";

const MainPage = () => {
  const isLoading = useTwitterAccount((state) => state.isFollowing);
  return (
    <section className="hideScrollbar col-span-full divide-y divide-neutral-400 overflow-y-auto border-none border-neutral-500 sm:border-x md:col-span-6">
      <Header />
      <TwittCreater />
      <Wrpper />
    </section>
  );
};

export default MainPage;
