import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  return NextResponse.json({ messa: "done" }, { status: 200 });
}
