import UpperPart from "@/components/layouts/proile/upperPart";
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <section className="hideScrollbar col-span-full overflow-y-auto border-neutral-500 text-white md:col-span-6 md:border-x">
      <UpperPart />
    </section>
  );
};

export default page;
