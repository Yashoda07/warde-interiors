import { createFileRoute } from "@tanstack/react-router";
import { ProcessPage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/process")({
  head: () => wardePageMeta(
    "Our Design Process | Warde Interiors",
    "See how Warde Interiors guides residential projects from understanding your needs through design, execution and handover.",
  ),
  component: ProcessPage,
});