import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const header = req.headers.get("user") as string;
  
  const data = await JSON.parse(header);

  return NextResponse.json({ message: "hello", data });
}
