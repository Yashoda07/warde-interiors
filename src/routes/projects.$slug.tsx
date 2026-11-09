import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailPage } from "@/components/warde-site";
import { projectMetadataTitle } from "@/lib/warde-content";
import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => wardePageMeta(
    projectMetadataTitle(params.slug),
    "A residential interior design study from Warde Interiors in Thane, Maharashtra. Project details and studio photography will be added when supplied.",
  ),
  component: ProjectDetailRoute,
});

function ProjectDetailRoute() {
  const { slug } = Route.useParams();
  return <ProjectDetailPage slug={slug} />;
}