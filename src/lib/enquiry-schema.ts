import { z } from "zod";

export const projectEnquirySchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your name.").max(100, "Please use 100 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Please use 255 characters or fewer."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(20, "Please enter a valid phone number.").refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
  }, "Please enter a valid phone number."),
  project_location: z.string().trim().min(2, "Please enter the project location.").max(160),
  property_type: z.string().trim().min(1, "Please select a property type.").max(80),
  approximate_area: z.string().trim().max(80),
  possession_status: z.string().trim().max(80),
  expected_timeline: z.string().trim().min(1, "Please select an expected timeline.").max(80),
  interior_requirement: z.string().trim().min(1, "Please select a requirement.").max(120),
  project_category: z.string().trim().min(1, "Please select a project category.").max(80),
  scope_of_work: z.string().trim().min(1, "Please select the scope of work.").max(120),
  preferred_design_style: z.string().trim().max(120),
  approximate_budget: z.string().trim().max(80),
  project_description: z.string().trim().max(2000, "Please keep your description under 2,000 characters."),
  website: z.string().max(0, "Invalid submission.").optional(),
});

export type ProjectEnquiryInput = z.infer<typeof projectEnquirySchema>;