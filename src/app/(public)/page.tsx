import Header from "@/components/layouts/headerButton";
import TwittCard from "@/components/layouts/TwittCard";
import TwittCreater from "@/components/layouts/TwittCreater";

const MainPage = () => {
  return (
    <section className="hideScrollbar col-span-full divide-y divide-neutral-400 overflow-y-auto border-none border-neutral-500 sm:border-x md:col-span-6">
      <Header />
      <TwittCreater />
      <TwittCard />
      <TwittCard />
      <TwittCard />
    </section>
  );
};

export default MainPage;
