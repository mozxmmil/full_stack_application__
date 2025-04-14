import TwittCard from "@/components/layouts/TwittCard";
import TwittCreater from "@/components/layouts/TwittCreater";
import React from "react";

const page = () => {
  return (
    <section className="hideScrollbar col-span-9 divide-y divide-neutral-400 overflow-y-auto border-x border-neutral-500 md:col-span-6">
      <TwittCreater />
      <TwittCard />
    </section>
  );
};

export default page;
