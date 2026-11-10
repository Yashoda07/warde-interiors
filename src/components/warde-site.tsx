import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, X } from "lucide-react";
import { useState } from "react";
import wardeLogo from "@/assets/warde-interiors-logo.png.asset.json";
import heroImage from "@/assets/warde-hero.jpg";
import diningImage from "@/assets/interior-placeholder-01.jpg";
import bedroomImage from "@/assets/interior-placeholder-02.jpg";
import readingImage from "@/assets/interior-placeholder-03.jpg";
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
        <Button asChild><Link to="/start-your-project" onClick={() => setMenuOpen(false)}>Start your project <ArrowUpRight aria-hidden="true" /></Link></Button>
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
      <div className="project-caption"><div><span className="eyebrow">PROJECT DETAILS TO BE ADDED</span><h3>{project.title}</h3><p>{project.location} <span aria-hidden="true">·</span> {project.year}</p></div><Link to="/projects/$slug" params={{ slug: project.slug }} className="text-link">View project <ArrowUpRight aria-hidden="true" /></Link></div>
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
      <div className="home-hero__content"><p className="eyebrow">RESIDENTIAL INTERIOR DESIGN · THANE</p><h1>Thoughtful spaces,<br /> designed around you.</h1><p>Personalised homes where function, feeling and everyday life come together.</p><div className="hero-actions"><Button asChild><Link to="/projects">Explore projects <ArrowRight aria-hidden="true" /></Link></Button><Link to="/start-your-project" className="hero-text-link">Start your project <ArrowUpRight aria-hidden="true" /></Link></div></div>
      <span className="home-hero__image-note">Illustrative image · studio project photography to be added</span>
      <a className="hero-scroll" href="#introduction"><span>DISCOVER WARDE</span><ArrowDown aria-hidden="true" /></a>
    </section>

    <section id="introduction" className="intro-section section-wrap">
      <div className="intro-copy"><p className="eyebrow">A MORE PERSONAL WAY TO DESIGN</p><h2>Design that begins<br /> with understanding.</h2><p>Every space starts with the people who live in it. Your routines, practical needs, storage and personal preferences shape a home that looks considered and feels effortless to live in.</p><Link to="/about" className="text-link">Meet the studio <ArrowRight aria-hidden="true" /></Link></div>
      <figure className="intro-image"><img src={diningImage} alt="Temporary illustrative residential interior; studio photography to be added" width={1280} height={1600} loading="lazy" /><figcaption>Illustrative interior image · studio photography to be added</figcaption></figure>
    </section>

    <section className="selected-section section-wrap"><div className="section-heading-row"><div><p className="eyebrow">A FEW SPACES, IN TIME</p><h2>Selected projects</h2><p>A collection of homes shaped by individual lifestyles and thoughtful design.</p></div><Link to="/projects" className="text-link">View all projects <ArrowRight aria-hidden="true" /></Link></div><ProjectList limit={3} /></section>

    <section className="philosophy-section"><div className="philosophy-copy"><p className="eyebrow">OUR DESIGN PHILOSOPHY</p><h2>Function first.<br /> Design that naturally follows.</h2><p>How a space works is where its beauty begins. We consider movement, comfort, storage, materials and detail together—before a design takes its final form.</p><Link to="/process" className="text-link">Explore our process <ArrowRight aria-hidden="true" /></Link></div><figure className="philosophy-image"><img src={readingImage} alt="Temporary illustrative reading nook with considered built-in joinery" width={1280} height={1600} loading="lazy" /><figcaption>Illustrative interior image · studio photography to be added</figcaption></figure></section>

    <section className="services-peek section-wrap"><div className="section-heading-row"><div><p className="eyebrow">WHAT WE CAN CREATE TOGETHER</p><h2>Our services</h2></div><Link to="/services" className="text-link">Explore services <ArrowRight aria-hidden="true" /></Link></div><div className="service-lines">{["End-to-End Interior Design", "Colour Consultancy", "3D Design Consultancy"].map((name, index) => <Link to="/services" className="service-line" key={name}><span className="eyebrow">0{index + 1}</span><h3>{name}</h3><ArrowUpRight aria-hidden="true" /></Link>)}</div></section>

    <section className="process-peek"><div className="section-wrap"><div className="section-heading-row"><div><p className="eyebrow">A CLEAR, CONSIDERED JOURNEY</p><h2>From vision to reality</h2></div><Link to="/process" className="text-link">See how we work <ArrowRight aria-hidden="true" /></Link></div><div className="process-steps">{steps.map((step, index) => <div className="process-step" key={step}><span className="eyebrow">0{index + 1}</span><h3>{step}</h3></div>)}</div></div></section>

    <section className="why-section section-wrap"><p className="eyebrow">THE WARDE APPROACH</p><h2>Thoughtfully designed.<br /> Personally considered.</h2><div className="values-grid">{[{ title: "Client-centric design", copy: "Each design begins with the person who will call this space home." }, { title: "Function meets aesthetics", copy: "Beautiful interiors should work intuitively in everyday life." }, { title: "Thoughtful detailing", copy: "Materials, proportions and small details come together as one." }, { title: "Spaces made personal", copy: "No fixed formula—every home responds to its own needs." }].map((value, index) => <article className="value-item" key={value.title}><span className="eyebrow">0{index + 1}</span><h3>{value.title}</h3><p>{value.copy}</p></article>)}</div></section>

    <section className="testimonial-peek"><p className="eyebrow">WORDS FROM OUR CLIENTS</p><h2>Good design is felt<br /> in the way you live.</h2><p className="testimonial-placeholder">Client testimonials will be added when supplied by the studio.</p><Link to="/testimonials" className="text-link">Client stories <ArrowRight aria-hidden="true" /></Link></section>

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
  return <main><PageIntro eyebrow="PROJECT STUDY · DETAILS TO BE ADDED" title={project?.title ?? "Project details"} lead="Project information and completed-work photography will be added when supplied by the studio." /><figure className="detail-cover"><img src={image} alt="Temporary illustrative interior image; completed project photography to be added" width={1600} height={1100} /><figcaption>Illustrative image only · not a completed Warde Interiors project</figcaption></figure><section className="detail-copy section-wrap"><div><p className="eyebrow">PROJECT INFORMATION</p><h2>A home, shaped around its people.</h2></div><div><p>Client brief, design approach, project location, completion year and materials will be added once the studio provides the details.</p><p className="eyebrow detail-placeholder">Project location · to be added<br />Completion year · to be added</p></div></section><section className="detail-gallery section-wrap"><img src={readingImage} alt="Temporary illustrative interior detail; project gallery to be supplied" width={1280} height={1600} loading="lazy" /><img src={bedroomImage} alt="Temporary illustrative interior detail; project gallery to be supplied" width={1600} height={1104} loading="lazy" /></section>{next && <div className="next-project section-wrap"><span className="eyebrow">NEXT PROJECT</span><Link to="/projects/$slug" params={{ slug: next.slug }}><span>{next.title}</span><ArrowRight aria-hidden="true" /></Link></div>}<EnquiryCta compact /></main>;
}

export function AboutPage() {
  return <main><PageIntro eyebrow="THE PERSON BEHIND THE STUDIO" title="An approach shaped around the way you live." lead="Warde Interiors is led by Samiksha Sudesh Warde, Founder & Interior Designer, based in Thane, Maharashtra." /><section className="about-founder section-wrap"><figure className="about-photo"><img src={readingImage} alt="Temporary illustrative still-life interior image; founder portrait to be added" width={1280} height={1600} /><figcaption>Founder portrait to be added · illustrative image shown</figcaption></figure><div className="about-copy"><p className="eyebrow">SAMIKSHA SUDESH WARDE</p><h2>Design with everyday life at its centre.</h2><p>With a degree in Interior Design from Yashwantrao Chavan Maharashtra Open University (YCMOU), completed in 2021, Samiksha brings a considered, personal perspective to residential spaces.</p><p>Her approach starts with listening—understanding how a home needs to work, what matters to the people living in it, and how the small decisions can make daily life feel more natural.</p><div className="education-line"><span className="eyebrow">EDUCATION</span><span>Interior Design Graduate<br />YCMOU · 2021</span></div><p className="placeholder-note">A fuller studio biography and professional experience will be added when supplied.</p></div></section><section className="about-belief"><p className="eyebrow">A BELIEF THAT GUIDES EACH PROJECT</p><h2>“Function first.<br /> Design that naturally follows.”</h2></section><EnquiryCta compact /></main>;
}

export function ServicesPage() {
  const services = [{ number: "01", name: "End-to-End Interior Design", copy: "A considered residential design journey, shaped around the space, the people who live there and the scope agreed together." }, { number: "02", name: "Colour Consultancy", copy: "A virtual, personalised conversation to explore colour preferences and bring a coordinated palette into focus." }, { number: "03", name: "3D Design Consultancy", copy: "A visual design consultation to help you explore a direction for your space before decisions are made." }];
  return <main><PageIntro eyebrow="WAYS TO WORK TOGETHER" title="Services" lead="Thoughtful design support for the decisions that shape a home." /><section className="service-page-list section-wrap">{services.map((service) => <article className="service-detail" key={service.number}><span className="eyebrow">{service.number}</span><div><h2>{service.name}</h2><p>{service.copy}</p><Link to="/start-your-project" className="text-link">Tell us what you have in mind <ArrowRight aria-hidden="true" /></Link></div><span className="service-mark" aria-hidden="true">↗</span></article>)}<p className="placeholder-note">Exact inclusions and project scope are confirmed with the studio for each enquiry.</p></section><EnquiryCta compact /></main>;
}

export function ProcessPage() {
  const stages = [{ name: "Understand", copy: "We begin by learning about your lifestyle, requirements, routines and vision for home." }, { name: "Conceptualise", copy: "A considered design direction takes shape around the people and the space." }, { name: "Design", copy: "The selected direction is developed into detailed design and visualisation." }, { name: "Execute", copy: "The design is coordinated through implementation, with attention to the decisions that matter." }, { name: "Handover", copy: "A finished space brings together function, feeling and the everyday." }];
  return <main><PageIntro eyebrow="A THOUGHTFUL WAY FORWARD" title="From vision to reality." lead="A clear five-stage process, with the design shaped around you at each step." /><section className="process-page section-wrap">{stages.map((stage, index) => <article className="process-detail" key={stage.name}><span className="process-number">0{index + 1}</span><div><p className="eyebrow">STAGE 0{index + 1}</p><h2>{stage.name}</h2><p>{stage.copy}</p></div><span className="process-check" aria-hidden="true"><Check /></span></article>)}</section><section className="process-note"><p className="eyebrow">FUNCTION FIRST</p><h2>Every decision begins<br /> with how you live.</h2><Link to="/services" className="text-link">Explore the services <ArrowRight aria-hidden="true" /></Link></section><EnquiryCta compact /></main>;
}

export function TestimonialsPage() {
  return <main><PageIntro eyebrow="WORDS FROM OUR CLIENTS" title="Experiences, in their own words." lead="The best measure of a thoughtful space is how it feels to live in." /><section className="testimonials-empty section-wrap"><p className="eyebrow">CLIENT STORIES</p><blockquote>Client testimonials will be shared here once they are provided by the studio.</blockquote><span>— Warde Interiors</span></section><EnquiryCta compact /></main>;
}

export function ContactPage() {
  return <main><PageIntro eyebrow="LET'S BEGIN A CONVERSATION" title="Let's create something beautiful together." lead="Share a little about your home, your requirements and the way you envision living." /><section className="contact-grid section-wrap"><div><p className="eyebrow">THE STUDIO</p><h2>Warde Interiors</h2><p>Residential interior design<br />Thane, Maharashtra, India</p></div><div><p className="eyebrow">PROJECT ENQUIRIES</p><p>For a considered first conversation, tell us about your project.</p><Button asChild><Link to="/start-your-project">Start your project <ArrowUpRight aria-hidden="true" /></Link></Button><p className="placeholder-note">Official studio email and Instagram link to be added when supplied.</p></div></section><div className="contact-image"><img src={heroImage} alt="Temporary illustrative residential interior; Warde Interiors photography to be added" width={1920} height={1280} loading="lazy" /><span>Illustrative image · studio photography to be added</span></div></main>;
}

export function PrivacyPage() {
  return <main><PageIntro eyebrow="YOUR INFORMATION" title="Privacy policy" lead="How project enquiry details are handled by Warde Interiors." /><article className="privacy-copy section-wrap"><h2>Project enquiries</h2><p>When you send a project enquiry, the details you provide—including your name, contact details and information about your home—are stored so the studio can review and respond to your request.</p><h2>How information is used</h2><p>Your enquiry information is used to understand your project and communicate with you about it. It is not displayed publicly on this website.</p><h2>Questions</h2><p>For questions about an enquiry you have sent, please contact Warde Interiors through the project enquiry form.</p><p className="placeholder-note">This privacy notice is a starting point and should be reviewed by the studio before publication.</p></article></main>;
}

export function TestimonialsPlaceholderMark() {
  return <span className="quote-mark" aria-hidden="true">“</span>;
}
