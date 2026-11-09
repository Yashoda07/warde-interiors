import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/warde-site";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/services")({
  head: () => wardePageMeta(
    "Residential Interior Design Services | Warde Interiors",
    "Explore personalised residential interior design, colour consultancy and 3D design consultancy from Warde Interiors in Thane.",
  ),
  component: ServicesPage,
});