import journalImage01 from "@/assets/interior-placeholder-01.jpg";
import journalImage02 from "@/assets/interior-placeholder-02.jpg";
import journalImage03 from "@/assets/interior-placeholder-03.jpg";

export const projectEnquiryEmbedUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfehsj3z0FRThk2rmUoaVvO1u83Mew66rCVGy9c86Um65h_BA/viewform?embedded=true";


export const projectPlaceholders = [
  {
    slug: "the-melange-house",
    image: "https://i.postimg.cc/90wpSn7y/hero-img2.png",
    title: "The Mélange House",
    location: "Piramal Araynya Towers, Reay Road",
    configuration: "A 2BHK Residence",
    description: `The Mélange House is an expression of thoughtfully layered aesthetics, where diverse colour palettes, rich textures and refined detailing come together to create a home with its own distinctive character.

Moving through a palette of muted sage, soft pastel pink, warm beige, creamy ivory, cappuccino and deeper cherry and maroon accents, each space unfolds with a personality of its own. The interplay of these tones is complemented by elegant wall mouldings, bespoke furniture, subtle material contrasts and carefully layered ambient lighting.

Every element has been thoughtfully considered to strike a balance between visual richness and everyday functionality. Rather than following a single design language, the home celebrates the beauty of individual spaces while maintaining a sense of continuity throughout.

The result is a residence that feels warm, composed and quietly luxurious , where thoughtful design meets timeless elegance.`,
    gallery: [
      journalImage01,
      journalImage02,
      journalImage03,
    ],
  },
  {
    slug: "the-olive-and-ember-house",
    image: "https://i.postimg.cc/25wrbH31/hero-img-3.png",
    title: "The Olive & Ember House",
    location: "Lodha Upper Thane",
    configuration: "A 3BHK Residential Project",
    description: `The Olive & Ember House is a contemporary residence shaped by a thoughtful interplay of earthy colours, warm textures and functional design. A palette of olive green, muted neutrals, caramel and rich teal accents creates a distinctive visual identity, bringing warmth and character into everyday living.

The living and dining spaces are designed as a cohesive setting, featuring a statement television wall, customised furniture, subtle wall detailing and layered ceiling illumination. The kitchen continues the earthy design language through its olive cabinetry, dark countertops and thoughtfully integrated storage.

Each bedroom introduces a different expression of colour and comfort, balancing individual aesthetics with the overall warmth of the home. Every element has been considered to maximise functionality while maintaining a clean and cohesive visual experience.

The result is a home that feels contemporary yet inviting, expressive yet balanced , a reflection of thoughtful design where colour, comfort and functionality come together.`,
    gallery: [
      journalImage02,
      journalImage03,
      journalImage01,
    ],
  },
  {
    slug: "the-compact-canvas",
    image: "https://i.postimg.cc/yxKmQ87K/hero-img-2.png",
    title: "The Compact Canvas",
    location: "Lodha Crown, Thane",
    configuration: "A 2BHK Residential Project",
    description: `The Compact Canvas is a thoughtful exploration of design possibilities within a compact living space. Rooted in intelligent space planning and a refined aesthetic, the home brings together functionality, individuality and timeless detailing.

A harmonious palette of warm neutrals, soft blush tones, muted blues and creamy whites lends each space its own distinct personality. Elegant wall mouldings, expressive wallpapers, customised niches and carefully considered furniture details add depth and character without overwhelming the interiors.

Every square foot has been approached with purpose, balancing practical requirements with visual elegance. The result is a home that feels inviting, thoughtfully composed and effortlessly refined - a reminder that exceptional design is not defined by the size of a space, but by the thought behind every detail.`,
    gallery: [
      journalImage03,
      journalImage01,
      journalImage02,
    ],
  },
  {
    slug: "elara",
    image: "https://i.postimg.cc/gcMyqd17/hero-img-4.png",
    title: "Elara",
    location: "Raymond Realty",
    configuration: "A 2BHK Residential Project",
    description: `Elara is a contemporary home brought to life through a thoughtful interplay of colour, texture and personalised detailing. Designed to balance expressive aesthetics with everyday functionality, the residence embraces a palette of earthy greens, muted blues, warm neutrals, blush pinks and rich terracotta accents.

Each space unfolds with its own distinct personality. From the statement teal dining feature and warm-toned living area to the thoughtfully detailed bedrooms and customised kitchen, every element contributes to a cohesive yet visually diverse design narrative.

Bespoke furniture, distinctive wall treatments, decorative partitions and carefully layered lighting add depth and character throughout the home. The pooja space is thoughtfully integrated as a design feature, bringing together traditional significance and contemporary craftsmanship.

The result is a home that feels vibrant yet balanced, personal yet cohesive ,a reflection of modern living shaped by thoughtful design and attention to detail.`,
    gallery: [
      journalImage01,
      journalImage03,
      journalImage02,
    ],
  },
  {
    slug: "the-avira",
    image: "https://i.postimg.cc/VLdqKp8Y/hero-img-5.png",
    title: "The Avira",
    location: "Raymond Realty, Thane",
    configuration: "A 2BHK Residential Project",
    description: `The Avira is a thoughtfully designed residence that brings together contemporary aesthetics, practical planning and subtle detailing. With a balanced approach to colour, texture and functionality, the home reflects a design language that is simple, warm and effortlessly inviting.

A combination of muted greens, soft blush tones, deep blues, warm wooden finishes and creamy neutrals lends each space its own character while maintaining a sense of visual continuity throughout the home.

From the carefully detailed living area and personalised bedroom interiors to the streamlined kitchen and thoughtfully integrated storage, every element has been designed with everyday comfort in mind.

The use of customised furniture, elegant wall treatments, layered lighting and considered material selections adds depth without overwhelming the spaces.

The result is a home that feels personal, comfortable and contemporary , where thoughtful design makes everyday living more meaningful.`,
    gallery: [
      journalImage02,
      journalImage01,
      journalImage03,
    ],
  },
] as const;


export function projectMetadataTitle(slug: string) {
  const project = projectPlaceholders.find((item) => item.slug === slug);

  return project
    ? `${project.title} | Warde Interiors`
    : "Project details | Warde Interiors, Thane";
}
