export const projectEnquiryUrl = "https://forms.gle/f8t4z6BCVYeGcsz8A";

export const projectPlaceholders = [
  { slug: "residence-study-one", image: "portfolio-01", title: "Project 01 · Details to be added", location: "Location to be added", year: "Year to be added" },
  { slug: "residence-study-two", image: "portfolio-02", title: "Project 02 · Details to be added", location: "Location to be added", year: "Year to be added" },
  { slug: "residence-study-three", image: "portfolio-03", title: "Project 03 · Details to be added", location: "Location to be added", year: "Year to be added" },
  { slug: "residence-study-four", image: "portfolio-04", title: "Project 04 · Details to be added", location: "Location to be added", year: "Year to be added" },
  { slug: "residence-study-five", image: "portfolio-05", title: "Project 05 · Details to be added", location: "Location to be added", year: "Year to be added" },
  { slug: "residence-study-six", image: "portfolio-06", title: "Project 06 · Details to be added", location: "Location to be added", year: "Year to be added" },
] as const;

export function projectMetadataTitle(slug: string) {
  const projectIndex = projectPlaceholders.findIndex((project) => project.slug === slug);
  const projectNumber = projectIndex >= 0 ? String(projectIndex + 1).padStart(2, "0") : "";
  return projectNumber
    ? `Project ${projectNumber} | Warde Interiors, Thane`
    : "Project details | Warde Interiors, Thane";
}