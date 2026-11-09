import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/privacy")({
  head: () => wardePageMeta(
    "Privacy Policy | Warde Interiors",
    "Read how Warde Interiors handles information submitted through residential project enquiries.",
  ),
  component: PrivacyPage,
});