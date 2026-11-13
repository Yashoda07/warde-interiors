import { createFileRoute } from "@tanstack/react-router";
import { AboutUsPage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/about-us")({
  head: () => wardePageMeta(
    "Meet Samiksha Warde | Warde Interiors",
    "Meet Samiksha Warde, founder and interior designer at Warde Interiors in Thane, Maharashtra.",
  ),
  component: AboutUsPage,
});