import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/projects")({
  head: () => wardePageMeta(
    "Residential Interior Projects | Warde Interiors",
    "Explore the Warde Interiors portfolio of residential design. Studio project photography and details will be added as they are supplied.",
  ),
  component: ProjectsPage,
});