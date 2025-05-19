import { z } from "zod";

export const crateTwittDataSchema = z.object({
  data: z
    .string()
    .min(10, { message: "minimum 10 characters" })
    .max(50, { message: "max 50 character" }),
  image: z
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
    .optional(),
});

export type CreateTwittDataType = z.infer<typeof crateTwittDataSchema>;
