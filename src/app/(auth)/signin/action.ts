"use server";

import { ApiError } from "@/utils/apiHandler";
import { signinSchema } from "../../../../types/zod/signinSchema";
import { prismaClient } from "@/utils/dbConnect";
import { UseActionStatetype } from "@/components/layouts/SignInRight";

export async function action(
  prev: UseActionStatetype,
  formdata: FormData,
): Promise<UseActionStatetype> {
  const email = formdata.get("email");
  const password = formdata.get("password");
  const data = {
    email,
    password,
  };
  
  
  const varyfied = signinSchema.safeParse(data);
  if (!varyfied.success) {
    throw new ApiError(
      200,
      "something happen",
      varyfied.error.errors.map((err) => err),
    );
  }
  if (!email || !password) {
    throw new ApiError(200, "fill all filed");
  }
  const user = await prismaClient.user.findMany({
    where: {
      OR: [
        {
          email: email as string,
        },
        {
          name: email as string,
        },
      ],

    },
  });

  if (user.length === 0) {
    throw new ApiError(200, "user not found");
  }
  console.log(user);
}
