import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(254),
  password: z
    .string()
    .min(12, "Password must be at least 12 characters.")
    .max(128, "Password must be at most 128 characters."),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const AUTH_ERROR_MESSAGE = "Invalid email or password.";
