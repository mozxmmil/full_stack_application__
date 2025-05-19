import TwittCard from "@/components/layouts/TwittCard";
import TwittCreater from "@/components/layouts/TwittCreater";
import React from "react";

const page = () => {
  return (
    <section className="hideScrollbar col-span-full divide-y divide-neutral-400 overflow-y-auto border-none border-neutral-500 sm:border-x md:col-span-6">
      <TwittCreater />
      <TwittCard />
      <TwittCard />
      <TwittCard />
    </section>
  );
};

export default page;
