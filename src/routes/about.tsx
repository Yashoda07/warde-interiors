import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/about")({
  head: () => wardePageMeta(
    "About the Studio | Warde Interiors, Thane",
    "Meet Warde Interiors, a residential design studio led by Samiksha Sudesh Warde in Thane, Maharashtra.",
  ),
  component: AboutPage,
});