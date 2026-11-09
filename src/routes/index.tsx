import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/")({
  head: () => wardePageMeta(
    "Warde Interiors | Thoughtful residential interiors in Thane",
    "Personalised residential interiors, shaped around everyday living in Thane, Maharashtra.",
  ),
  component: Index,
});

function Index() {
  return <HomePage />;
}
