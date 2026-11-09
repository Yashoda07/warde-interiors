import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/contact")({
  head: () => wardePageMeta(
    "Contact Warde Interiors | Thane, Maharashtra",
    "Start a conversation about your home with Warde Interiors, a residential interior design studio based in Thane, Maharashtra.",
  ),
  component: ContactPage,
});