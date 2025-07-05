import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // 1. Authorization header check
    const header = req.headers.get("Authorization");

    if (!header) {
      // 2. Proper error response with status code
      return NextResponse.json(
        { error: "Authorization header is required" },
        { status: 401 },
      );
    }

    // 3. Optional: Validate token format
    if (!header.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Invalid token format" },
        { status: 401 },
      );
    }

    // 4. Successful response
    return NextResponse.json({ message: "hello", header }, { status: 200 });
  } catch (error) {
    // 5. Proper error handling
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
