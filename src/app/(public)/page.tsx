"use client";
import Header from "@/components/layouts/headerButton";
import TwittCreater from "@/components/layouts/TwittCreater";
import WrpperTwittCard from "@/components/layouts/wrapperTwittCard";
import WrapperFolllowing from "@/components/wrapperComponent/wapperFollowing";



const MainPage = () => {
  return (
    <section className="hideScrollbar col-span-full divide-y divide-neutral-400 overflow-y-auto border-neutral-500 md:col-span-6 md:border-x  overflow-x-hidden">
      <Header />
      <TwittCreater />
      <WrpperTwittCard />
      <WrapperFolllowing />
    </section>
  );
}

export default MainPage;
