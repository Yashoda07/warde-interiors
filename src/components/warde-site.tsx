import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Instagram, Layers3, Layout, Mail, Menu, Phone, Sparkles, UsersRound, X } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import wardeLogo from "@/assets/warde-interiors-logo.png.asset.json";
import heroImage from "@/assets/warde-hero.jpg";
import diningImage from "@/assets/interior-placeholder-01.jpg";
import bedroomImage from "@/assets/interior-placeholder-02.jpg";
import readingImage from "@/assets/interior-placeholder-03.jpg";
import founderHomePortrait from "@/assets/warde-founder-home.png.asset.json";
import founderAboutPortrait from "@/assets/warde-founder-about.png.asset.json";
import { projectPlaceholders } from "@/lib/warde-content";
import { Button } from "@/components/ui/button";

const imageFor = (image: string) => {
  if (image === "dining") return diningImage;
  if (image === "bedroom") return bedroomImage;
  if (image === "reading") return readingImage;
  return heroImage;
};

const navItems = [
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Process", "/process"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand-mark" aria-label="Warde Interiors home" onClick={() => setMenuOpen(false)}>
          <img src={wardeLogo.url} alt="Warde Interiors" width={88} height={88} />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "nav-link nav-link--active" }} className="nav-link">Home</Link>
          {navItems.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "nav-link nav-link--active" }} className="nav-link">{label}</Link>)}
        </nav>
        <Button asChild className="header-cta"><Link to="/start-your-project">Start your project <ArrowUpRight aria-hidden="true" /></Link></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        {navItems.map(([label, to]) => <Link key={to} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}
        <Button asChild className="mobile-nav-cta"><Link to="/start-your-project" onClick={() => setMenuOpen(false)}>Start your project <ArrowUpRight aria-hidden="true" /></Link></Button>
      </nav>}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand">
        <img src={wardeLogo.url} alt="Warde Interiors" width={86} height={86} loading="lazy" />
        <p>Thoughtful spaces, designed around you.</p>
      </div>
      <div className="footer-links"><span className="eyebrow">EXPLORE</span><Link to="/projects">Projects</Link><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/process">Our process</Link></div>
      <div className="footer-links"><span className="eyebrow">GET IN TOUCH</span><Link to="/contact">Contact the studio</Link><Link to="/start-your-project">Start your project <ArrowUpRight aria-hidden="true" /></Link><span>Thane, Maharashtra, India</span></div>
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
        <img src={imageFor(project.image)} alt={`${project.title} — temporary illustrative interior image, not a completed Warde Interiors project`} width={project.image === "bedroom" ? 1600 : 1280} height={project.image === "bedroom" ? 1104 : 1600} loading="lazy" />
        <span className="image-note">Illustrative placeholder</span>
      </Link>
      <div className="project-caption"><div><span className="eyebrow">ILLUSTRATIVE PLACEHOLDER</span><h3>{project.title}</h3><p>{project.location}</p></div><Link to="/projects/$slug" params={{ slug: project.slug }} className="text-link">View More <ArrowUpRight aria-hidden="true" /></Link></div>
    </article>)}
  </div>;
}

export function EnquiryCta({ compact = false }: { compact?: boolean }) {
  return <section className={`enquiry-cta${compact ? " enquiry-cta--compact" : ""}`}>
    <div><p className="eyebrow">A SPACE THAT FEELS LIKE YOURS</p><h2>Let’s create something<br className="desktop-break" /> beautiful together.</h2><p>Tell us about your space and the way you envision living.</p></div>
    <Button asChild variant="outline" className="cta-outline"><Link to="/start-your-project">Start your project <ArrowUpRight aria-hidden="true" /></Link></Button>
  </section>;
}

export function HomePage() {
  const steps = ["Understand", "Conceptualise", "Design", "Execute", "Handover"];
  return <>
    <section className="home-hero">
      <img src={heroImage} alt="Temporary illustrative residential interior; Warde Interiors project photography to be added" width={1920} height={1280} fetchPriority="high" />
      <div className="home-hero__shade" />
      <div className="home-hero__content"><p className="eyebrow">WARDE INTERIORS · RESIDENTIAL DESIGN · THANE</p><h1>Thoughtful spaces,<br /> designed around you.</h1><p>Personalised homes where function, feeling and everyday life come together.</p><div className="hero-actions"><Button asChild><Link to="/projects">Explore projects <ArrowRight aria-hidden="true" /></Link></Button><Link to="/start-your-project" className="hero-text-link">Start your project <ArrowUpRight aria-hidden="true" /></Link></div></div>
      <span className="home-hero__image-note">Illustrative image · studio project photography to be added</span>
      <a className="hero-scroll" href="#introduction"><span>DISCOVER WARDE INTERIORS</span><ArrowDown aria-hidden="true" /></a>
    </section>

    <section id="introduction" className="intro-section section-wrap">
      <div className="intro-copy"><p className="eyebrow">A MORE PERSONAL WAY TO DESIGN</p><h2>Design that begins<br /> with understanding.</h2><p>Samiksha Warde, founder of Warde Interiors, is passionate about creating spaces that bring together thoughtful design, functionality and timeless aesthetics. With a background in Interior Design, she approaches every project with creativity, attention to detail and a deep understanding of how spaces shape everyday living. Her design philosophy revolves around creating personalised interiors that reflect each client’s lifestyle, vision and individuality, where every element has a purpose and every space tells a story.</p><Link to="/about-us" className="text-link">Know More About Us <ArrowRight aria-hidden="true" /></Link></div>
      <figure className="intro-image founder-home-image"><img src={founderHomePortrait.url} alt="Samiksha Warde, Founder and Interior Designer at Warde Interiors" width={600} height={800} loading="lazy" /></figure>
    </section>

    <section className="selected-section section-wrap"><div className="section-heading-row"><div><p className="eyebrow">A FEW SPACES, IN TIME</p><h2>Selected projects</h2><p>A collection of homes shaped by individual lifestyles and thoughtful design.</p></div><Link to="/projects" className="text-link">View all projects <ArrowRight aria-hidden="true" /></Link></div><div className="placeholder-notice"><span className="eyebrow">ILLUSTRATIVE PLACEHOLDERS</span><p>These temporary images are not completed Warde Interiors projects; project details will be added when supplied.</p></div><ProjectList limit={6} /></section>

    <section className="philosophy-section"><div className="philosophy-copy"><p className="eyebrow">OUR DESIGN PHILOSOPHY</p><h2>Function first.<br /> Design that naturally follows.</h2><p>How a space works is where its beauty begins. We consider movement, comfort, storage, materials and detail together—before a design takes its final form.</p><Link to="/process" className="text-link">Explore our process <ArrowRight aria-hidden="true" /></Link></div><figure className="philosophy-image"><img src={readingImage} alt="Temporary illustrative reading nook with considered built-in joinery" width={1280} height={1600} loading="lazy" /><figcaption>Illustrative interior image · studio photography to be added</figcaption></figure></section>

    <section className="services-peek section-wrap"><div className="section-heading-row"><div><p className="eyebrow">WHAT WE CAN CREATE TOGETHER</p><h2>Our services</h2></div><Link to="/services" className="text-link">Explore services <ArrowRight aria-hidden="true" /></Link></div><ServiceImageGrid compact /></section>

    <section className="process-peek"><div className="section-wrap"><div className="section-heading-row"><div><p className="eyebrow">A CLEAR, CONSIDERED JOURNEY</p><h2>From vision to reality</h2></div><Link to="/process" className="text-link">See how we work <ArrowRight aria-hidden="true" /></Link></div><CurvedProcess steps={steps} /></div></section>

    <WhyWardeSection />

    <TestimonialsMarquee />

    <section className="social-peek section-wrap"><div><p className="eyebrow">FOLLOW THE STUDIO</p><h2>More from Warde</h2><p>Studio updates and design details will find a home here.</p></div><div className="social-placeholder" aria-label="Studio social imagery placeholder"><img src={bedroomImage} alt="Temporary illustrative bedroom image" width={1600} height={1104} loading="lazy" /><span>Studio imagery to be added</span></div></section>
    <EnquiryCta />
  </>;
}

export function ProjectsPage() {
  return <main><PageIntro eyebrow="A GROWING BODY OF WORK" title="Projects" lead="Every home begins with a different story. Studio projects and their details will appear here as they are shared." /><section className="projects-page section-wrap"><div className="placeholder-notice"><span className="eyebrow">PORTFOLIO IMAGES TO BE REPLACED</span><p>The images below are illustrative placeholders, not completed Warde Interiors projects. Project names, locations and years will be added when supplied.</p></div><ProjectList /></section><EnquiryCta compact /></main>;
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projectPlaceholders.find((item) => item.slug === slug);
  const image = imageFor(project?.image ?? "living");
  const projectIndex = projectPlaceholders.findIndex((item) => item.slug === slug);
  const next = projectPlaceholders[(projectIndex + 1 + projectPlaceholders.length) % projectPlaceholders.length];
  if (!project) return <main><PageIntro eyebrow="PROJECT STUDY" title="Project details" lead="This project could not be found." /><div className="section-wrap projects-page"><Link to="/projects" className="text-link">Return to projects <ArrowRight aria-hidden="true" /></Link></div></main>;
  const gallery = project.image === "bedroom" ? [bedroomImage, readingImage, heroImage] : project.image === "reading" ? [readingImage, diningImage, bedroomImage] : project.image === "dining" ? [diningImage, heroImage, readingImage] : [heroImage, bedroomImage, diningImage];
  return <main><PageIntro eyebrow={`PROJECT STUDY · ${project.slug.slice(-3).replace("-", " ")}`} title={project.title} lead="Project information and completed-work photography will be added when supplied by the studio." /><figure className="detail-cover"><img src={image} alt="Illustrative interior placeholder; not a completed Warde Interiors project" width={1600} height={1100} /><figcaption>Illustrative image only · not a completed Warde Interiors project</figcaption></figure><section className="detail-copy section-wrap"><div><p className="eyebrow">PROJECT INFORMATION</p><h2>Project details to be added.</h2></div><div><p>Project description and completed-work photography will be added when supplied by the studio.</p><p className="eyebrow detail-placeholder">{project.location}<br />{project.year}</p></div></section><section className="detail-gallery detail-gallery--editorial section-wrap">{gallery.map((galleryImage, index) => <figure key={`${project.slug}-${index}`}><img src={galleryImage} alt={`Illustrative interior image ${index + 1}; project photography to be supplied`} loading="lazy" /><figcaption>Illustrative placeholder · project photography to be supplied</figcaption></figure>)}</section>{next && <div className="next-project section-wrap"><span className="eyebrow">NEXT PROJECT</span><Link to="/projects/$slug" params={{ slug: next.slug }}><span>{next.title}</span><ArrowRight aria-hidden="true" /></Link></div>}<EnquiryCta compact /></main>;
}

export function AboutPage() {
  return <main><PageIntro eyebrow="THE PERSON BEHIND THE STUDIO" title="An approach shaped around the way you live." lead="Warde Interiors is led by Samiksha Sudesh Warde, Founder & Interior Designer, based in Thane, Maharashtra." /><section className="about-founder section-wrap"><figure className="about-photo"><img src={founderAboutPortrait.url} alt="Samiksha Warde, founder of Warde Interiors" width={450} height={800} /><figcaption>Samiksha Warde · Founder & Interior Designer</figcaption></figure><div className="about-copy"><p className="eyebrow">SAMIKSHA SUDESH WARDE</p><h2>Design with everyday life at its centre.</h2><p>Samiksha Warde is the founder of Warde Interiors, driven by a passion for transforming spaces into thoughtfully designed, functional and aesthetically refined environments.</p><p>With a formal background in Interior Design, she combines creativity, practical space planning and a keen eye for detail to create interiors that reflect each client’s individuality, preferences and lifestyle.</p><p>Her design philosophy centres on balancing aesthetics with functionality, bringing together timeless elements, carefully selected materials and thoughtfully curated details.</p><p>At Warde Interiors, every project begins with understanding the client’s vision and translating it into spaces that feel personal, harmonious and timeless.</p><div className="education-line"><span className="eyebrow">PROFESSIONAL PROFILE</span><span>Interior design · since 2021<br />Thane, Maharashtra</span></div></div></section><section className="founder-profile section-wrap"><div><p className="eyebrow">PROFESSIONAL PROFILE</p><h2>Considered from plan to finish.</h2></div><ul>{["Founder of Warde Interiors, specialising in bespoke residential interiors.", "Expertise in space planning, design conceptualisation and development.", "Proficient in 2D technical drawings, furniture layouts and 3D visualisation.", "Experience in material selection, colour schemes and finish coordination.", "Involved in client consultation, design coordination and project execution."].map((item) => <li key={item}>{item}</li>)}</ul></section><section className="about-belief"><p className="eyebrow">A BELIEF THAT GUIDES EACH PROJECT</p><h2>“Function first.<br /> Design that naturally follows.”</h2><p>Functional and balanced spaces, timeless detailing and materials, and interiors shaped around each client’s lifestyle and requirements.</p></section><EnquiryCta compact /></main>;
}

export function AboutUsPage() {
  return <main><PageIntro eyebrow="MEET THE FOUNDER" title="Samiksha Warde" lead="Founder & Interior Designer · Warde Interiors" /><section className="about-founder section-wrap about-us-founder"><figure className="about-photo"><img src={founderAboutPortrait.url} alt="Portrait of Samiksha Warde" width={450} height={800} /><figcaption>Samiksha Warde · Warde Interiors</figcaption></figure><div className="about-copy"><p className="eyebrow">A PERSONAL APPROACH TO INTERIORS</p><h2>Spaces with purpose, made personal.</h2><p>Samiksha Warde is the founder of Warde Interiors, driven by a passion for transforming spaces into thoughtfully designed, functional and aesthetically refined environments.</p><p>With a formal background in Interior Design, she combines creativity, practical space planning and a keen eye for detail to create interiors that reflect each client’s individuality, preferences and lifestyle.</p><p>Her design philosophy centres on balancing aesthetics with functionality, bringing together timeless elements, carefully selected materials and thoughtfully curated details.</p><p>At Warde Interiors, every project begins with understanding the client’s vision and translating it into spaces that feel personal, harmonious and timeless.</p></div></section><section className="founder-profile section-wrap"><div><p className="eyebrow">PROFESSIONAL PROFILE</p><h2>Thoughtful design, developed with care.</h2></div><ul>{["Formally trained in Interior Design.", "Active in the interior design industry since 2021.", "Founder of Warde Interiors, specialising in bespoke residential interiors.", "Expertise in space planning, design conceptualisation and development.", "Proficient in 2D technical drawings, furniture layouts and 3D visualisation.", "Experience in material selection, colour schemes and finish coordination.", "Involved in client consultation, design coordination and project execution."].map((item) => <li key={item}>{item}</li>)}</ul></section><section className="founder-philosophy"><p className="eyebrow">DESIGN PHILOSOPHY</p><h2>Function first.<br />Design that naturally follows.</h2><div><p>Creating functional and aesthetically balanced spaces.</p><p>Emphasis on timeless design, thoughtful detailing and material selection.</p><p>Developing personalised interiors aligned with each client’s lifestyle and requirements.</p></div></section><EnquiryCta compact /></main>;
}

export function ServicesPage() {
  return <main><PageIntro eyebrow="WAYS TO WORK TOGETHER" title="Services" lead="Thoughtful design support for the decisions that shape a home." /><ServiceImageGrid /><EnquiryCta compact /></main>;
}

function ServiceImageGrid({ compact = false }: { compact?: boolean }) {
  const services = [{ number: "01", name: "End-to-End Interior Design", copy: "Complete interior-design services from initial consultation and concept development through design coordination and execution.", image: heroImage }, { number: "02", name: "Colour Consultancy", copy: "A completely virtual service helping clients select appropriate colour palettes for their spaces.", image: diningImage }, { number: "03", name: "3D Design Consultancy", copy: "3D visualisation and design consultancy for clients who want to understand and visualise their space before execution.", image: bedroomImage }];
  return <section className={`service-image-grid section-wrap${compact ? " service-image-grid--compact" : ""}`}>{services.map((service) => <article className="service-image-item" key={service.number}><figure><img src={service.image} alt={`Illustrative interior image for ${service.name}; not a completed Warde Interiors project`} loading="lazy" /><figcaption>Illustrative image · studio photography to be added</figcaption></figure><span className="service-gold-rule" /><p className="eyebrow">{service.number}</p><h2>{service.name}</h2><p>{service.copy}</p>{!compact && <Link to="/start-your-project" className="text-link">Tell us what you have in mind <ArrowRight aria-hidden="true" /></Link>}</article>)}</section>;
}

export function ProcessPage() {
  const stages = [{ name: "Understand", copy: "We begin by learning about your lifestyle, requirements, routines and vision for home." }, { name: "Conceptualise", copy: "A considered design direction takes shape around the people and the space." }, { name: "Design", copy: "The selected direction is developed into detailed design and visualisation." }, { name: "Execute", copy: "The design is coordinated through implementation, with attention to the decisions that matter." }, { name: "Handover", copy: "A finished space brings together function, feeling and the everyday." }];
  return <main><PageIntro eyebrow="A THOUGHTFUL WAY FORWARD" title="From vision to reality." lead="A clear five-stage process, with the design shaped around you at each step." /><section className="process-page section-wrap">{stages.map((stage, index) => <article className="process-detail" key={stage.name}><span className="process-number">0{index + 1}</span><div><p className="eyebrow">STAGE 0{index + 1}</p><h2>{stage.name}</h2><p>{stage.copy}</p></div><span className="process-check" aria-hidden="true"><Check /></span></article>)}</section><section className="process-note"><p className="eyebrow">FUNCTION FIRST</p><h2>Every decision begins<br /> with how you live.</h2><Link to="/services" className="text-link">Explore the services <ArrowRight aria-hidden="true" /></Link></section><EnquiryCta compact /></main>;
}

export function TestimonialsPage() {
  return <main><PageIntro eyebrow="CLIENT STORIES" title="Words from those we’ve served." lead="Temporary testimonial layout awaiting genuine client feedback." /><TestimonialsMarquee /><EnquiryCta compact /></main>;
}

export function ContactPage() {
  return <main><PageIntro eyebrow="LET'S BEGIN A CONVERSATION" title="Let's create something beautiful together." lead="Warde Interiors, Thane, Maharashtra" /><section className="contact-grid contact-grid--refined section-wrap"><div><p className="eyebrow">THE STUDIO</p><h2>Warde Interiors</h2><p>Thane, Maharashtra</p><div className="contact-links"><a href="mailto:Wardesamiksha58@gmail.com"><Mail aria-hidden="true" /><span>Wardesamiksha58@gmail.com</span></a><a href="tel:+919324190732"><Phone aria-hidden="true" /><span>+91 93241 90732</span></a><a href="https://www.instagram.com/warde_interiors/" target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /><span>Instagram</span></a><a href="https://wa.me/919324190732" target="_blank" rel="noreferrer"><Phone aria-hidden="true" /><span>WhatsApp</span></a></div></div><div className="contact-enquiry"><p className="eyebrow">PROJECT ENQUIRIES</p><h2>Tell us about your project.</h2><p>For a considered first conversation, share a little about your home and what you have in mind.</p><EnquiryFormDialog /></div></section><div className="contact-image"><img src={heroImage} alt="Illustrative residential interior; Warde Interiors project photography to be added" width={1920} height={1280} loading="lazy" /><span>Illustrative image · studio photography to be added</span></div></main>;
}

function EnquiryFormDialog() {
  return <Dialog><DialogTrigger asChild><Button>Tell Us About Your Project <ArrowUpRight aria-hidden="true" /></Button></DialogTrigger><DialogContent className="enquiry-dialog"><DialogHeader><DialogTitle>Tell us about your project</DialogTitle><DialogDescription>Your enquiry opens securely in the Warde Interiors Google Form.</DialogDescription></DialogHeader><iframe title="Warde Interiors project enquiry form" src="https://docs.google.com/forms/d/e/1FAIpQLSfehsj3z0FRThk2rmUoaVvO1u83Mew66rCVGy9c86Um65h_BA/viewform?embedded=true" loading="lazy" /><p className="form-embed-note">Google Forms displays its confirmation after submission when configured by the form owner.</p></DialogContent></Dialog>;
}

const processDescriptions = ["Understand the client's lifestyle, requirements and vision.", "Develop the design direction around the space and client needs.", "Translate the concept into detailed design and visualisation.", "Coordinate the design through implementation.", "Deliver a finished space designed around the client."];

function CurvedProcess({ steps }: { steps: string[] }) {
  return <div className="curved-process"><svg className="process-road" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true"><path className="process-road-edge" d="M90 42 C285 42 470 72 720 90 S830 155 640 166 S240 214 160 245 S380 315 575 320 S780 365 850 374" /><path className="process-road-center" d="M90 42 C285 42 470 72 720 90 S830 155 640 166 S240 214 160 245 S380 315 575 320 S780 365 850 374" /></svg>{steps.map((step, index) => <article className={`curved-process-step curved-process-step--${index + 1}`} key={step}><span className="process-number">0{index + 1}</span><div><h3>{step}</h3><p>{processDescriptions[index]}</p></div></article>)}</div>;
}

const wardeReasons = [
  { title: "Client-Centric Design", summary: "Every design begins with understanding the person who will use the space.", detail: "We believe the best interiors begin with listening. We take time to understand your lifestyle, daily routines, preferences and practical requirements before developing a design direction. This ensures that every decision is guided by your needs rather than a predefined design formula.", Icon: UsersRound },
  { title: "Function Meets Aesthetics", summary: "Beautiful interiors should also work effortlessly.", detail: "Our approach balances visual appeal with everyday functionality. From efficient space planning and practical storage to furniture placement, lighting and movement, every element is considered to create spaces that are comfortable, organised and visually harmonious.", Icon: Layout },
  { title: "Thoughtful Detailing", summary: "Materials, proportions, colours and details are considered as one cohesive design.", detail: "We pay attention to the details that bring a space together. Carefully selected materials, balanced proportions, coordinated colours, lighting and finishes contribute to an interior that feels complete, refined and timeless.", Icon: Layers3 },
  { title: "Personalised Spaces", summary: "Each project is developed around the individual client rather than a fixed formula.", detail: "Every home has its own character, and every client has a different vision. We develop personalised design solutions that reflect individual preferences, lifestyles and requirements, creating spaces that feel genuinely personal and meaningful.", Icon: Sparkles },
];

function WhyWardeSection() {
  return <section className="why-section section-wrap"><p className="eyebrow">THE WARDE APPROACH</p><h2>Why Warde Interiors?</h2><Accordion type="single" collapsible className="why-accordion">{wardeReasons.map(({ title, summary, detail, Icon }, index) => <AccordionItem value={`reason-${index}`} key={title}><AccordionTrigger><span><span className="eyebrow">0{index + 1}</span><strong>{title}</strong><small>{summary}</small></span><ChevronDown aria-hidden="true" /></AccordionTrigger><AccordionContent><div className="why-answer"><Icon aria-hidden="true" /><p>{detail}</p></div></AccordionContent></AccordionItem>)}</Accordion></section>;
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

function TestimonialRow({ items, direction }: { items: typeof demoTestimonials; direction: "left" | "right" }) {
  return <div className={`testimonial-marquee testimonial-marquee--${direction}`}><div className="testimonial-track"><div className="testimonial-group">{items.map((item) => <TestimonialCard item={item} key={item.name} />)}</div><div className="testimonial-group" aria-hidden="true">{items.map((item) => <TestimonialCard item={item} key={`${item.name}-loop`} />)}</div></div></div>;
}

function TestimonialCard({ item }: { item: (typeof demoTestimonials)[number] }) {
  return <article className="testimonial-demo"><span className="quote-mark" aria-hidden="true">“</span><p>{item.quote}</p><div><span aria-hidden="true">{item.name.slice(-2)}</span><p><strong>{item.name}</strong><small>{item.location}</small></p></div></article>;
}

function TestimonialsMarquee() {
  return <section className="testimonial-peek testimonial-marquee-section"><p className="eyebrow">CLIENT STORIES · DEMONSTRATION PLACEHOLDERS</p><h2>Words from those we’ve served.</h2><p className="testimonial-placeholder">Temporary examples only · not verified client reviews</p><div className="testimonial-rows"><TestimonialRow items={demoTestimonials.slice(0, 4)} direction="right" /><TestimonialRow items={demoTestimonials.slice(4)} direction="left" /></div><Link to="/testimonials" className="text-link">Client stories <ArrowRight aria-hidden="true" /></Link></section>;
}

export function PrivacyPage() {
  return <main><PageIntro eyebrow="YOUR INFORMATION" title="Privacy policy" lead="How project enquiry details are handled by Warde Interiors." /><article className="privacy-copy section-wrap"><h2>Project enquiries</h2><p>When you send a project enquiry, the details you provide—including your name, contact details and information about your home—are stored so the studio can review and respond to your request.</p><h2>How information is used</h2><p>Your enquiry information is used to understand your project and communicate with you about it. It is not displayed publicly on this website.</p><h2>Questions</h2><p>For questions about an enquiry you have sent, please contact Warde Interiors through the project enquiry form.</p><p className="placeholder-note">This privacy notice is a starting point and should be reviewed by the studio before publication.</p></article></main>;
}

export function TestimonialsPlaceholderMark() {
  return <span className="quote-mark" aria-hidden="true">“</span>;
}
