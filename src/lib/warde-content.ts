export const projectEnquiryEmbedUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfehsj3z0FRThk2rmUoaVvO1u83Mew66rCVGy9c86Um65h_BA/viewform?embedded=true";

export const projectPlaceholders = [
  {
    slug: "the-melange-house",
    image: "https://i.postimg.cc/90wpSn7y/hero-img2.png",
    title: "The Mélange House",
    location: "Piramal Araynya Towers, Reay Road",
    configuration: "2BHK Residence",
    description: "A thoughtfully designed 2BHK residence at Piramal Araynya Towers, Reay Road.",
    gallery: [] as string[],
  },
  {
    slug: "the-olive-and-ember-house",
    image: "https://i.postimg.cc/25wrbH31/hero-img-3.png",
    title: "The Olive & Ember House",
    location: "Lodha Upper Thane",
    configuration: "3BHK Residential Project",
    description: "A thoughtfully designed 3BHK residential project at Lodha Upper Thane.",
    gallery: [] as string[],
  },
  {
    slug: "the-compact-canvas",
    image: "https://i.postimg.cc/yxKmQ87K/hero-img-2.png",
    title: "The Compact Canvas",
    location: "Lodha Crown, Thane",
    configuration: "2BHK Residential Project",
    description: "A thoughtfully designed 2BHK residential project at Lodha Crown, Thane.",
    gallery: [] as string[],
  },
  {
    slug: "elara",
    image: "https://i.postimg.cc/gcMyqd17/hero-img-4.png",
    title: "Elara",
    location: "Raymond Realty",
    configuration: "2BHK Residential Project",
    description: "A thoughtfully designed 2BHK residential project at Raymond Realty.",
    gallery: [] as string[],
  },
  {
    slug: "the-avira",
    image: "https://i.postimg.cc/VLdqKp8Y/hero-img-5.png",
    title: "The Avira",
    location: "Raymond Realty, Thane",
    configuration: "2BHK Residential Project",
    description: "A thoughtfully designed 2BHK residential project at Raymond Realty, Thane.",
    gallery: [] as string[],
  },
] as const;

export function projectMetadataTitle(slug: string) {
  const project = projectPlaceholders.find((item) => item.slug === slug);

  return project
    ? `${project.title} | Warde Interiors`
    : "Project details | Warde Interiors, Thane";
}
