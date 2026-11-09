import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/testimonials")({
  head: () => wardePageMeta(
    "Client Stories | Warde Interiors",
    "Client experiences of residential interior design with Warde Interiors. Testimonials will be shared when provided by the studio.",
  ),
  component: TestimonialsPage,
});