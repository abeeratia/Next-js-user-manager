import * as z from "zod";

export const userFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required")
    .min(2, "Must be 2-50 characters")
    .max(50, "Must be 2-50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),
  gender: z.string().min(1, "Gender is required"),
  country: z.string().optional(),
  age: z.coerce
    .number({ message: "Age must be a number" })
    .min(18, "Must be between 18-100")
    .max(100, "Must be between 18-100"),
  category: z.string().min(1, "Category is required"),
  interests: z
    .array(z.string())
    .min(1, "Select at least one interest")
    .max(5, "Maximum 5 options selected"),
  avatar: z.any().optional(),
});

export type UserFormValues = z.infer<typeof userFormSchema>;

export interface UserModel extends UserFormValues {
  id: string;
  createdAt: string;
}
