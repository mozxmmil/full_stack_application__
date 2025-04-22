import { z } from "zod";

export const signinSchema = z.object({
  identifier: z
    .string()
    .min(3, "Must be at least 3 characters")
    .refine(
      (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z0-9_]{3,}$/; // basic username pattern

        return emailRegex.test(val) || usernameRegex.test(val);
      },
      {
        message: "Must be a valid email or username",
      },
    ),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
