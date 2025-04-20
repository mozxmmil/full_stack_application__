import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, { message: "minimum 3 letter required" }).max(20),
  email: z
    .string()
    .email()
    .regex(new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")),
  password: z
    .string()
    .min(6, { message: "minimum password should be 6 letter" })
    .max(10),
});

export type UserInputType = z.infer<typeof userSchema>;

export type UserInputTypeWithImage = UserInputType & {
  conformPassword: string;
  image: File | null;
};
