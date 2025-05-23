import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <div className="text-white">{id.toString()}</div>;
};

export default page;
