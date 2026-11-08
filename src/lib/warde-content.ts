export const projectPlaceholders = [
  { slug: "residence-study-one", image: "living", title: "Project title to be added", location: "Location to be added", year: "Year to be added" },
  { slug: "residence-study-two", image: "dining", title: "Project title to be added", location: "Location to be added", year: "Year to be added" },
  { slug: "residence-study-three", image: "bedroom", title: "Project title to be added", location: "Location to be added", year: "Year to be added" },
  { slug: "residence-study-four", image: "reading", title: "Project title to be added", location: "Location to be added", year: "Year to be added" },
] as const;

export function projectMetadataTitle(slug: string) {
  const projectIndex = projectPlaceholders.findIndex((project) => project.slug === slug);
  const projectNumber = projectIndex >= 0 ? String(projectIndex + 1).padStart(2, "0") : "";
  return projectNumber
    ? `Project ${projectNumber} | Warde Interiors, Thane`
    : "Project details | Warde Interiors, Thane";
}