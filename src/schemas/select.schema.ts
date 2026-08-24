import * as z from "zod";

export const selectFormSchema = z.object({
  gender: z.string().min(1, "Gender is required"),
  interests: z.array(z.string()).min(1, "Select at least one interest").max(3, "Maximum 3 options selected"),
  category: z.string().min(1, "Category is required"),
  country: z.string().min(1, "Country is required"),
  assignee: z.string().min(1, "Assignee is required"),
  tags: z.array(z.string()).min(1, "Select at least one tag"),
});

export type SelectFormValues = z.infer<typeof selectFormSchema>;
