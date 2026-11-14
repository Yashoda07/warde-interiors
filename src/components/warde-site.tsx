import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Instagram, Layers3, Layout, Mail, Menu, Phone, Sparkles, UsersRound, X } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import wardeLogo from "@/assets/warde-transparent-logo.png.asset.json";
import heroImage from "@/assets/warde-hero.jpg";
import diningImage from "@/assets/interior-placeholder-01.jpg";
import bedroomImage from "@/assets/interior-placeholder-02.jpg";
import readingImage from "@/assets/interior-placeholder-03.jpg";
import founderHomePortrait from "@/assets/warde-founder-home.png.asset.json";
import founderAboutPortrait from "@/assets/warde-founder-about.png.asset.json";
import project01 from "@/assets/project-01.png.asset.json";
import project02 from "@/assets/project-02.png.asset.json";
import project03 from "@/assets/project-03.png.asset.json";
import project04 from "@/assets/project-04.png.asset.json";
import project05 from "@/assets/project-05.png.asset.json";
import project06 from "@/assets/project-06.png.asset.json";
import philosophyPhoto from "@/assets/warde-philosophy.jpg.asset.json";
import processInfographic from "@/assets/warde-process-infographic.png.asset.json";
import { projectEnquiryUrl, projectPlaceholders } from "@/lib/warde-content";
import { Button } from "@/components/ui/button";

const imageFor = (image: string) => {
  if (image === "dining") return diningImage;
  if (image === "bedroom") return bedroomImage;
  if (image === "reading") return readingImage;
  return heroImage;
};

const portfolioImages = [project01.url, project02.url, project03.url, project04.url, project05.url, project06.url] as const;

const navItems = [
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Process", "/#design-philosophy"],
  ["Contact", "/#site-footer"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand-mark" aria-label="Warde Interiors home" onClick={() => setMenuOpen(false)}>
          <img src={wardeLogo.url} alt="Warde Interiors" width={120} height={80} />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "nav-link nav-link--active" }} className="nav-link">Home</Link>
          {navItems.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "nav-link nav-link--active" }} className="nav-link">{label}</Link>)}
        </nav>
        <Button asChild className="header-cta"><a href={projectEnquiryUrl} target="_blank" rel="noreferrer">Start your project <ArrowUpRight aria-hidden="true" /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        {navItems.map(([label, to]) => <Link key={to} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}
        <Button asChild className="mobile-nav-cta"><a href={projectEnquiryUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Start your project <ArrowUpRight aria-hidden="true" /></a></Button>
      </nav>}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand">
        <img src={wardeLogo.url} alt="Warde Interiors" width={120} height={80} loading="lazy" />
        <p>Thoughtful spaces, designed around you.</p>
      </div>
      <div className="footer-links"><span className="eyebrow">EXPLORE</span><Link to="/projects">Projects</Link><Link to="/about">About</Link><Link to="/services">Services</Link><a href="/#design-philosophy">Our process</a></div>
      <div className="footer-links"><span className="eyebrow">GET IN TOUCH</span><a href="mailto:Wardesamiksha58@gmail.com">Wardesamiksha58@gmail.com</a><a href="tel:+919324190732">+91 93241 90732</a><a href="https://www.instagram.com/warde_interiors/" target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /> Instagram</a><Link to="/" hash="#site-footer">Thane, Maharashtra, India</Link><a href={projectEnquiryUrl} target="_blank" rel="noreferrer">Start your project <ArrowUpRight aria-hidden="true" /></a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Warde Interiors</span><Link to="/privacy">Privacy policy</Link><span>Designed with intention in Thane</span></div>
  </footer>;
}

export function PageIntro({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro__lead">{lead}</p></section>;
}

export function ProjectList({ limit }: { limit?: number }) {
  const projects = projectPlaceholders.slice(0, limit ?? projectPlaceholders.length);
  return <div className="project-list">
    {projects.map((project, index) => <article className={`project-item project-item--${index + 1}`} key={project.slug}>
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="project-image-link" aria-label={`View ${project.title}`}>
      <img src={portfolioImages[index]} alt={`${project.title} — Warde Interiors residential interior`} width={566} height={800} loading="lazy" />
        <span className="image-note">Illustrative placeholder</span>
      </Link>
      <div className="project-caption"><div><span className="eyebrow">ILLUSTRATIVE PLACEHOLDER</span><h3>{project.title}</h3><p>{project.location}</p></div><Link to="/projects/$slug" params={{ slug: project.slug }} className="text-link">View More <ArrowUpRight aria-hidden="true" /></Link></div>
    </article>)}
  </div>;
}

export function EnquiryCta({ compact = false }: { compact?: boolean }) {
  return <section className={`enquiry-cta${compact ? " enquiry-cta--compact" : ""}`}>
    <div><p className="eyebrow">A SPACE THAT FEELS LIKE YOURS</p><h2>Let’s create something<br className="desktop-break" /> beautiful together.</h2><p>Tell us about your space and the way you envision living.</p></div>
    <Button asChild variant="outline" className="cta-outline"><a href={projectEnquiryUrl} target="_blank" rel="noreferrer">Start your project <ArrowUpRight aria-hidden="true" /></a></Button>
  </section>;
}

export function HomePage() {
  const [showProcessInfographic, setShowProcessInfographic] = useState(false);
  return <>
    <section className="home-hero">
      <img src={heroImage} alt="Temporary illustrative residential interior; Warde Interiors project photography to be added" width={1920} height={1280} fetchPriority="high" />
      <div className="home-hero__shade" />
      <div className="home-hero__content"><p className="eyebrow">WARDE INTERIORS · RESIDENTIAL DESIGN · THANE</p><h1>Thoughtful spaces,<br /> designed around you.</h1><p>Personalised homes where function, feeling and everyday life come together.</p><div className="hero-actions"><Button asChild><Link to="/projects">Explore projects <ArrowRight aria-hidden="true" /></Link></Button><a href={projectEnquiryUrl} target="_blank" rel="noreferrer" className="hero-text-link">Start your project <ArrowUpRight aria-hidden="true" /></a></div></div>
      <span className="home-hero__image-note">Illustrative image · studio project photography to be added</span>
      <a className="hero-scroll" href="#introduction"><span>DISCOVER WARDE INTERIORS</span><ArrowDown aria-hidden="true" /></a>
    </section>

    <section id="about" className="intro-section section-wrap">
      <div className="intro-copy"><p className="eyebrow">A MORE PERSONAL WAY TO DESIGN</p><h2>Design that begins<br /> with understanding.</h2><p>Samiksha Warde, founder of Warde Interiors, is passionate about creating spaces that bring together thoughtful design, functionality and timeless aesthetics. With a background in Interior Design, she approaches every project with creativity, attention to detail and a deep understanding of how spaces shape everyday living. Her design philosophy revolves around creating personalised interiors that reflect each client’s lifestyle, vision and individuality, where every element has a purpose and every space tells a story.</p><Link to="/about" className="text-link">Know more <ArrowRight aria-hidden="true" /></Link></div>
      <figure className="intro-image founder-home-image"><img src={founderHomePortrait.url} alt="Samiksha Warde, Founder and Interior Designer at Warde Interiors" width={600} height={800} loading="lazy" /></figure>
    </section>

    <section id="projects" className="selected-section section-wrap"><div className="section-heading-row"><div><p className="eyebrow">A FEW SPACES, IN TIME</p><h2>Selected projects</h2><p>A collection of homes shaped by individual lifestyles and thoughtful design.</p></div><Link to="/projects" className="text-link">View all projects <ArrowRight aria-hidden="true" /></Link></div><ProjectList limit={6} /></section>

    <section id="design-philosophy" className="philosophy-section"><div className="philosophy-copy"><p className="eyebrow">OUR DESIGN PHILOSOPHY</p><h2>Function first.<br /> Design that naturally follows.</h2><p>How a space works is where its beauty begins. We consider movement, comfort, storage, materials and detail together—before a design takes its final form.</p><Button className="philosophy-toggle" onClick={() => setShowProcessInfographic((show) => !show)}>{showProcessInfographic ? "Back to design philosophy" : "Explore our process"} <ArrowRight aria-hidden="true" /></Button></div><figure className="philosophy-image"><img key={showProcessInfographic ? "process" : "philosophy"} className={showProcessInfographic ? "philosophy-image--contain" : ""} src={showProcessInfographic ? processInfographic.url : philosophyPhoto.url} alt={showProcessInfographic ? "Five design stages: Understand, Conceptualise, Design, Execute and Handover" : "A residential interior with a warm palette and considered furniture"} width={showProcessInfographic ? 1536 : 433} height={showProcessInfographic ? 1024 : 800} loading="lazy" /></figure></section>

    <section className="services-peek section-wrap"><div className="section-heading-row"><div><p className="eyebrow">WHAT WE CAN CREATE TOGETHER</p><h2>Our services</h2></div><Link to="/services" className="text-link">Explore services <ArrowRight aria-hidden="true" /></Link></div><ServiceImageGrid compact /></section>

    <WhyWardeSection />

    <TestimonialsMarquee />

    <EnquiryCta />
  </>;
}

export function ProjectsPage() {
  return <main><PageIntro eyebrow="A GROWING BODY OF WORK" title="Projects" lead="Every home begins with a different story. Studio projects and their details will appear here as they are shared." /><section className="projects-page section-wrap"><div className="placeholder-notice"><span className="eyebrow">PORTFOLIO IMAGES TO BE REPLACED</span><p>The images below are illustrative placeholders, not completed Warde Interiors projects. Project names, locations and years will be added when supplied.</p></div><ProjectList /></section><EnquiryCta compact /></main>;
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projectPlaceholders.find((item) => item.slug === slug);
  const projectIndex = projectPlaceholders.findIndex((item) => item.slug === slug);
  const image = projectIndex >= 0 ? portfolioImages[projectIndex] : heroImage;
  const next = projectPlaceholders[(projectIndex + 1 + projectPlaceholders.length) % projectPlaceholders.length];
  if (!project) return <main><PageIntro eyebrow="PROJECT STUDY" title="Project details" lead="This project could not be found." /><div className="section-wrap projects-page"><Link to="/projects" className="text-link">Return to projects <ArrowRight aria-hidden="true" /></Link></div></main>;
  const gallery = [0, 1, 2].map((offset) => portfolioImages[(projectIndex + offset) % portfolioImages.length]);
  return <main><PageIntro eyebrow={`PROJECT STUDY · ${project.slug.slice(-3).replace("-", " ")}`} title={project.title} lead="Project information and completed-work photography will be added when supplied by the studio." /><figure className="detail-cover"><img src={image} alt="Illustrative interior placeholder; not a completed Warde Interiors project" width={1600} height={1100} /><figcaption>Illustrative image only · not a completed Warde Interiors project</figcaption></figure><section className="detail-copy section-wrap"><div><p className="eyebrow">PROJECT INFORMATION</p><h2>Project details to be added.</h2></div><div><p>Project description and completed-work photography will be added when supplied by the studio.</p><p className="eyebrow detail-placeholder">{project.location}<br />{project.year}</p></div></section><section className="detail-gallery detail-gallery--editorial section-wrap">{gallery.map((galleryImage, index) => <figure key={`${project.slug}-${index}`}><img src={galleryImage} alt={`Illustrative interior image ${index + 1}; project photography to be supplied`} loading="lazy" /><figcaption>Illustrative placeholder · project photography to be supplied</figcaption></figure>)}</section>{next && <div className="next-project section-wrap"><span className="eyebrow">NEXT PROJECT</span><Link to="/projects/$slug" params={{ slug: next.slug }}><span>{next.title}</span><ArrowRight aria-hidden="true" /></Link></div>}<EnquiryCta compact /></main>;
}

export function AboutPage() {
  return <main><PageIntro eyebrow="THE PERSON BEHIND THE STUDIO" title="An approach shaped around the way you live." lead="Warde Interiors is led by Samiksha Sudesh Warde, Founder & Interior Designer, based in Thane, Maharashtra." /><section className="about-founder section-wrap"><figure className="about-photo"><img src={founderAboutPortrait.url} alt="Samiksha Warde, founder of Warde Interiors" width={450} height={800} /><figcaption>Samiksha Warde · Founder & Interior Designer</figcaption></figure><div className="about-copy"><p className="eyebrow">SAMIKSHA SUDESH WARDE</p><h2>Design with everyday life at its centre.</h2><p>Samiksha Warde is the founder of Warde Interiors, driven by a passion for transforming spaces into thoughtfully designed, functional and aesthetically refined environments.</p><p>With a formal background in Interior Design, she combines creativity, practical space planning and a keen eye for detail to create interiors that reflect each client’s individuality, preferences and lifestyle.</p><p>Her design philosophy centres on balancing aesthetics with functionality, bringing together timeless elements, carefully selected materials and thoughtfully curated details.</p><p>At Warde Interiors, every project begins with understanding the client’s vision and translating it into spaces that feel personal, harmonious and timeless.</p><div className="education-line"><span className="eyebrow">PROFESSIONAL PROFILE</span><span>Interior design · since 2021<br />Thane, Maharashtra</span></div></div></section><section className="founder-profile section-wrap"><div><p className="eyebrow">PROFESSIONAL PROFILE</p><h2>Considered from plan to finish.</h2></div><ul>{["Founder of Warde Interiors, specialising in bespoke residential interiors.", "Expertise in space planning, design conceptualisation and development.", "Proficient in 2D technical drawings, furniture layouts and 3D visualisation.", "Experience in material selection, colour schemes and finish coordination.", "Involved in client consultation, design coordination and project execution."].map((item) => <li key={item}>{item}</li>)}</ul></section><section className="about-belief"><p className="eyebrow">A BELIEF THAT GUIDES EACH PROJECT</p><h2>“Function first.<br /> Design that naturally follows.”</h2><p>Functional and balanced spaces, timeless detailing and materials, and interiors shaped around each client’s lifestyle and requirements.</p></section><EnquiryCta compact /></main>;
}

export function ServicesPage() {
  return <main><PageIntro eyebrow="WAYS TO WORK TOGETHER" title="Services" lead="Thoughtful design support for the decisions that shape a home." /><ServiceImageGrid /><EnquiryCta compact /></main>;
}

function ServiceImageGrid({ compact = false }: { compact?: boolean }) {
  const services = [{ number: "01", name: "End-to-End Interior Design", copy: "Complete interior-design services from initial consultation and concept development through design coordination and execution.", image: heroImage }, { number: "02", name: "Colour Consultancy", copy: "A completely virtual service helping clients select appropriate colour palettes for their spaces.", image: diningImage }, { number: "03", name: "3D Design Consultancy", copy: "3D visualisation and design consultancy for clients who want to understand and visualise their space before execution.", image: bedroomImage }];
  return <section className={`service-image-grid section-wrap${compact ? " service-image-grid--compact" : ""}`}>{services.map((service) => <article className="service-image-item" key={service.number}><figure><img src={service.image} alt={`Illustrative interior image for ${service.name}; not a completed Warde Interiors project`} loading="lazy" /><figcaption>Illustrative image · studio photography to be added</figcaption></figure><span className="service-gold-rule" /><p className="eyebrow">{service.number}</p><h2>{service.name}</h2><p>{service.copy}</p>{!compact && <a href={projectEnquiryUrl} target="_blank" rel="noreferrer" className="text-link">Tell us what you have in mind <ArrowRight aria-hidden="true" /></a>}</article>)}</section>;
}

const wardeReasons = [
  { title: "Client-Centric Design", summary: "Every design begins with understanding the person who will use the space.", detail: "We believe the best interiors begin with listening. We take time to understand your lifestyle, daily routines, preferences and practical requirements before developing a design direction. This ensures that every decision is guided by your needs rather than a predefined design formula.", Icon: UsersRound },
  { title: "Function Meets Aesthetics", summary: "Beautiful interiors should also work effortlessly.", detail: "Our approach balances visual appeal with everyday functionality. From efficient space planning and practical storage to furniture placement, lighting and movement, every element is considered to create spaces that are comfortable, organised and visually harmonious.", Icon: Layout },
  { title: "Thoughtful Detailing", summary: "Materials, proportions, colours and details are considered as one cohesive design.", detail: "We pay attention to the details that bring a space together. Carefully selected materials, balanced proportions, coordinated colours, lighting and finishes contribute to an interior that feels complete, refined and timeless.", Icon: Layers3 },
  { title: "Personalised Spaces", summary: "Each project is developed around the individual client rather than a fixed formula.", detail: "Every home has its own character, and every client has a different vision. We develop personalised design solutions that reflect individual preferences, lifestyles and requirements, creating spaces that feel genuinely personal and meaningful.", Icon: Sparkles },
];

function WhyWardeSection() {
  return <section className="why-section section-wrap"><figure className="why-photo"><img src={philosophyPhoto.url} alt="A considered residential interior with warm furnishings and natural light" loading="lazy" /></figure><div className="why-content"><p className="eyebrow">THE WARDE APPROACH</p><h2>Why Warde Interiors?</h2><p className="why-lead">Because thoughtful design should feel right, work beautifully and belong to the people who live with it.</p><Accordion type="single" collapsible className="why-accordion">{wardeReasons.map(({ title, summary, detail, Icon }, index) => <AccordionItem value={`reason-${index}`} key={title}><AccordionTrigger><span className="why-trigger-copy"><span className="why-number">0{index + 1}</span><strong>{title}</strong><small>{summary}</small></span><ChevronDown aria-hidden="true" /></AccordionTrigger><AccordionContent><div className="why-answer"><span className="why-icon"><Icon aria-hidden="true" /></span><p>{detail}</p></div></AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

const demoTestimonials = [
  { quote: "Temporary testimonial placeholder. Replace with approved client feedback.", name: "Demo testimonial 01", location: "Client story to be supplied" },
  { quote: "A sample layout for future client words; this is not a verified review.", name: "Demo testimonial 02", location: "Client story to be supplied" },
  { quote: "Placeholder copy only, awaiting genuine feedback from the studio.", name: "Demo testimonial 03", location: "Client story to be supplied" },
  { quote: "A temporary example kept clearly separate from real client endorsements.", name: "Demo testimonial 04", location: "Client story to be supplied" },
  { quote: "Temporary testimonial placeholder. Replace with approved client feedback.", name: "Demo testimonial 05", location: "Client story to be supplied" },
  { quote: "A sample layout for future client words; this is not a verified review.", name: "Demo testimonial 06", location: "Client story to be supplied" },
  { quote: "Placeholder copy only, awaiting genuine feedback from the studio.", name: "Demo testimonial 07", location: "Client story to be supplied" },
  { quote: "A temporary example kept clearly separate from real client endorsements.", name: "Demo testimonial 08", location: "Client story to be supplied" },
];

function TestimonialColumn({ items, direction }: { items: typeof demoTestimonials; direction: "up" | "down" }) {
  return <div className={`testimonial-column testimonial-column--${direction}`}><div className="testimonial-track"><div className="testimonial-group">{items.map((item) => <TestimonialCard item={item} key={item.name} />)}</div><div className="testimonial-group" aria-hidden="true">{items.map((item) => <TestimonialCard item={item} key={`${item.name}-loop`} />)}</div></div></div>;
}

function TestimonialCard({ item }: { item: (typeof demoTestimonials)[number] }) {
  return <article className="testimonial-demo"><span className="quote-mark" aria-hidden="true">“</span><p>{item.quote}</p><div><span aria-hidden="true">{item.name.slice(-2)}</span><p><strong>{item.name}</strong><small>{item.location}</small></p></div></article>;
}

function TestimonialsMarquee() {
  return <section className="testimonial-peek testimonial-marquee-section"><div className="testimonial-layout"><div className="testimonial-heading"><p className="eyebrow">A PERSONAL DESIGN JOURNEY</p><h2>Words from those we’ve served.</h2></div><div className="testimonial-columns"><TestimonialColumn items={demoTestimonials.slice(0, 4)} direction="up" /><TestimonialColumn items={demoTestimonials.slice(4)} direction="down" /></div></div><p className="testimonial-placeholder">Client feedback will appear here when supplied by the studio.</p></section>;
}

export function PrivacyPage() {
  return <main><PageIntro eyebrow="YOUR INFORMATION" title="Privacy policy" lead="How project enquiry details are handled by Warde Interiors." /><article className="privacy-copy section-wrap"><h2>Project enquiries</h2><p>When you send a project enquiry, the details you provide—including your name, contact details and information about your home—are stored so the studio can review and respond to your request.</p><h2>How information is used</h2><p>Your enquiry information is used to understand your project and communicate with you about it. It is not displayed publicly on this website.</p><h2>Questions</h2><p>For questions about an enquiry you have sent, please contact Warde Interiors through the project enquiry form.</p><p className="placeholder-note">This privacy notice is a starting point and should be reviewed by the studio before publication.</p></article></main>;
}

export function TestimonialsPlaceholderMark() {
  return <span className="quote-mark" aria-hidden="true">“</span>;
}
