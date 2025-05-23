import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const data = form.get("data") as string;
  const image = form.get("image") as File;
  if (!data) throw new Error("Twitt must be");
  
  return NextResponse.json({ messa: "done" }, { status: 200 });
}
