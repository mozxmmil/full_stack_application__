import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(3, { message: "minimum 3 letter required" }).max(20),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "minimum password should be 6 letter" })
      .max(10),
    conformPassword: z.string().min(6).max(10),
  })
  .refine((data) => data.password === data.conformPassword, {
    message: "password do no match",
    path: ["conformPassword"],
  });

export const userSchemaforApi = z
  .object({
    name: z.string().min(3, { message: "minimum 3 letter required" }).max(20),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "minimum password should be 6 letter" })
      .max(10),
    conformPassword: z.string().min(6).max(10),
    image: z
      .instanceof(File)
      .refine((file) => file.size <= 5 * 1024 * 1024, {
        message: "Image must be less than 5MB",
      })
      .refine(
        (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        {
          message: "Only JPEG, PNG, or WEBP images are allowed",
        },
      ),
  })
  .refine((data) => data.password === data.conformPassword, {
    message: "password do no match",
    path: ["conformPassword"],
  });

export type UserInputType = z.infer<typeof userSchema>;

export type UserInputTypeWithImage = UserInputType & {
  image: File | null;
};

export interface UserInputError extends UserInputType {
  image?: string;
}
