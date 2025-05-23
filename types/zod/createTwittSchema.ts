import { z } from "zod";

export const crateTwittDataSchema = z.object({
  data: z
    .string()
    .min(10, { message: "minimum 10 characters" })
    .max(200, { message: "max 200 character" }),
});

export const imageValidation = z
  .union([
    z.instanceof(File).refine(
      (file) => {
        return ["image/jpeg", "image/png"].includes(file.type);
      },
      {
        message: "only JPEG and PNG allowed",
      },
    ),
    z.undefined(),
  ])
  .optional();

export interface crateTwittDataSchemaType {
  data: string;
  image: string;
}
