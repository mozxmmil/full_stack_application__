import { ApiResponse } from "@/utils/apiHandler";
import { NextResponse } from "next/server";

export async function DELETE() {
  const responce = NextResponse.json(
    new ApiResponse(200, "user Log-out", true, null),
    {
      status: 200,
    },
  );
  responce.cookies.delete("access_token");
  return responce;
}
