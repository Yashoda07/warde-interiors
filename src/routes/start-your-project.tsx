import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageIntro } from "@/components/warde-site";
import { supabase } from "@/integrations/supabase/client";
import { projectEnquirySchema } from "@/lib/enquiry-schema";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/start-your-project")({
  head: () => wardePageMeta(
    "Start Your Project | Warde Interiors",
    "Share your residential interior design enquiry with Warde Interiors in Thane, Maharashtra.",
  ),
  component: StartYourProjectPage,
});

const fields = [
  { name: "full_name", label: "Your name", type: "text", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel", required: true },
  { name: "project_location", label: "Project location", type: "text", required: true },
  { name: "approximate_area", label: "Approximate area", type: "text", required: false },
  { name: "possession_status", label: "Possession status", type: "text", required: false },
  { name: "preferred_design_style", label: "Preferred design style", type: "text", required: false },
  { name: "approximate_budget", label: "Approximate budget", type: "text", required: false },
] as const;

const selectFields = [
  { name: "property_type", label: "Property type", required: true, options: ["Apartment", "Independent home", "Other"] },
  { name: "expected_timeline", label: "Expected timeline", required: true, options: ["Within 3 months", "3–6 months", "6–12 months", "More than 12 months", "Not decided"] },
  { name: "interior_requirement", label: "Interior requirement", required: true, options: ["New home interiors", "Renovation", "Room or selected spaces", "Consultation"] },
  { name: "project_category", label: "Project category", required: true, options: ["New home", "Renovation", "Other"] },
  { name: "scope_of_work", label: "Scope of work", required: true, options: ["Full home", "Selected spaces", "Design consultation"] },
] as const;

function StartYourProjectPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "failure">("idle");

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const parsed = projectEnquirySchema.safeParse(values);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("sending");
    const { website: _website, ...enquiry } = parsed.data;
    const toNullable = (value: string) => value.trim() || null;
    const { error } = await supabase.from("project_enquiries").insert({
      ...enquiry,
      approximate_area: toNullable(enquiry.approximate_area),
      possession_status: toNullable(enquiry.possession_status),
      preferred_design_style: toNullable(enquiry.preferred_design_style),
      approximate_budget: toNullable(enquiry.approximate_budget),
      project_description: toNullable(enquiry.project_description),
    });
    setStatus(error ? "failure" : "success");
  }

  return <main className="enquiry-page">
    <PageIntro eyebrow="A GOOD PLACE TO BEGIN" title="Start your project" lead="Tell us about your home and what you hope it can become. The studio will review your enquiry and be in touch." />
    <form className="enquiry-form section-wrap" onSubmit={submitEnquiry} noValidate>
      <div className="form-section-heading"><p className="eyebrow">ABOUT YOU & YOUR SPACE</p><p>Fields marked with an asterisk are required.</p></div>
      <div className="form-grid">
        {fields.map((field) => <label className="form-field" key={field.name}>
          <span>{field.label}{field.required ? " *" : ""}</span>
          <Input name={field.name} type={field.type} required={field.required} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} />
          {errors[field.name] && <small id={`${field.name}-error`} className="field-error">{errors[field.name]}</small>}
        </label>)}
        {selectFields.map((field) => <label className="form-field" key={field.name}>
          <span>{field.label} *</span>
          <select name={field.name} required aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} defaultValue="">
            <option value="" disabled>Select an option</option>
            {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          {errors[field.name] && <small id={`${field.name}-error`} className="field-error">{errors[field.name]}</small>}
        </label>)}
        <label className="form-field form-field--wide">
          <span>Tell us a little more</span>
          <Textarea name="project_description" rows={5} maxLength={2000} aria-invalid={Boolean(errors["project_description"])} aria-describedby={errors["project_description"] ? "project_description-error" : undefined} />
          {errors["project_description"] && <small id="project_description-error" className="field-error">{errors["project_description"]}</small>}
        </label>
        <label className="form-honeypot" aria-hidden="true" tabIndex={-1}>
          <span>Website</span><Input name="website" autoComplete="off" tabIndex={-1} />
        </label>
      </div>
      {status === "success" && <p className="form-message form-message--success" role="status">Thank you. Your project enquiry has been received.</p>}
      {status === "failure" && <p className="form-message form-message--error" role="alert">Your enquiry could not be sent just now. Please try again in a moment.</p>}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send project enquiry"}<ArrowUpRight aria-hidden="true" />
      </Button>
    </form>
  </main>;
}