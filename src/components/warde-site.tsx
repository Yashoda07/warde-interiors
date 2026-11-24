import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Layers3,
  Layout,
  Menu,
  Sparkles,
  UsersRound,
  X,
  MessagesSquare,
  Lightbulb,
  DraftingCompass,
  HardHat,
  House
} from "lucide-react";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import wardeLogo from "@/assets/warde-transparent-logo.png.asset.json";
import heroImage from "@/assets/warde-hero.jpg";
import diningImage from "@/assets/interior-placeholder-01.jpg";
import bedroomImage from "@/assets/interior-placeholder-02.jpg";
import founderHomePortrait from "@/assets/warde-founder-home.png.asset.json";
import founderAboutPortrait from "@/assets/warde-founder-about.png.asset.json";
import project05 from "@/assets/project-05.png.asset.json";
import philosophyPhoto from "@/assets/warde-philosophy.jpg.asset.json";
import {
  projectEnquiryEmbedUrl,
  projectPlaceholders,
} from "@/lib/warde-content";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


export function openProjectEnquiry() {
  window.dispatchEvent(new Event("open-project-enquiry"));
}


export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFormOpen, setProjectFormOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  // Header scroll behaviour
  useEffect(() => {
    const updateHeader = () => {
      const hero = document.querySelector(".home-hero");

      setIsPastHero(
        !hero || hero.getBoundingClientRect().bottom <= 90
      );
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  // Google Form popup behaviour
  useEffect(() => {
    const handleOpenForm = () => {
      setProjectFormOpen(true);
    };

    window.addEventListener("open-project-enquiry", handleOpenForm);

    return () => {
      window.removeEventListener("open-project-enquiry", handleOpenForm);
    };
  }, []);

  // Keep your existing return statement below

  return (
    <>
    <header className="site-header">      
    <div className={`site-header__inner${isPastHero ? " site-header__inner--scrolled" : ""}`}>

        <Link
          to="/"
          className="brand-mark"
          aria-label="Warde Interiors home"
          onClick={() => setMenuOpen(false)}
        >
          <img src={wardeLogo.url} alt="Warde Interiors" width={120} height={80} />
        </Link>

       
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link
            to="/"
            className="nav-link"
            activeOptions={{ exact: true }}
            activeProps={{ className: "nav-link nav-link--active" }}
          >
            Home
          </Link>
        
          <a href="/#projects" className="nav-link">Projects</a>
        
          <Link
            to="/about"
            className="nav-link"
            activeProps={{ className: "nav-link nav-link--active" }}
          >
            About
          </Link>
        
          <a href="/#services" className="nav-link">Services</a>
          <a href="/#our-process" className="nav-link">Process</a>
          <a href="/#contact" className="nav-link">Contact</a>
        </nav>


        <Button asChild className="header-cta">
          <a href={projectEnquiryUrl} target="_blank" rel="noreferrer">
            Start your project <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {menuOpen && (
        <div className="mobile-menu-overlay">
          <button
            className="mobile-menu-backdrop"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          />

          <nav className="mobile-menu-panel" aria-label="Mobile navigation">
            <div className="mobile-menu-top">
              <Link
                to="/"
                className="mobile-menu-brand"
                onClick={() => setMenuOpen(false)}
              >
                <img src={wardeLogo.url} alt="Warde Interiors" />
              </Link>

              <button
                className="mobile-menu-close"
                aria-label="Close navigation"
                onClick={() => setMenuOpen(false)}
              >
                <X />
              </button>
            </div>

            
            <div className="mobile-menu-links">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            
              <a href="/#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            
              <a href="/#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            
              <a href="/#our-process" onClick={() => setMenuOpen(false)}>
                Process
              </a>
            
              <a href="/#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>

            <Button asChild className="mobile-nav-cta">
              <a
                href={projectEnquiryUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Start Your Project <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  <Dialog
      open={projectFormOpen}
      onOpenChange={setProjectFormOpen}
    >
      <DialogContent className="project-form-dialog">
        <DialogHeader>
          <DialogTitle>
            Start Your Project
          </DialogTitle>
        </DialogHeader>

        <iframe
          src={projectEnquiryEmbedUrl}
          title="Warde Interiors Project Enquiry Form"
          className="project-form-iframe"
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  </>
  );
}

export function SiteFooter() {
  return <footer className="site-footer" id="contact">
    <div className="footer-top">
      <div className="footer-brand">
        <img src={wardeLogo.url} alt="Warde Interiors" width={120} height={80} loading="lazy" />
        <p>Thoughtful spaces, designed around you.</p>
      </div>
      <div className="footer-links"><span className="eyebrow">EXPLORE</span><Link to="/projects">Projects</Link><Link to="/about">About</Link><Link to="/services">Services</Link><a href="/#design-philosophy">Our process</a></div>
      <div className="footer-links"><span className="eyebrow">GET IN TOUCH</span><a href="mailto:Wardesamiksha58@gmail.com">Wardesamiksha58@gmail.com</a><a href="tel:+919324190732">+91 93241 90732</a><a href="https://www.instagram.com/warde_interiors/" target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /> Instagram</a><span>Thane, Maharashtra, India</span><a href={projectEnquiryUrl} target="_blank" rel="noreferrer">Start your project <ArrowUpRight aria-hidden="true" /></a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Warde Interiors</span><Link to="/privacy">Privacy policy</Link><span>Designed with intention in Thane</span></div>
  </footer>;
}

export function PageIntro({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro__lead">{lead}</p></section>;
}


export function ProjectList({ limit }: { limit?: number }) {
  const projects = projectPlaceholders.slice(0, limit ?? projectPlaceholders.length);

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article
          className={`project-item project-item--${index + 1}`}
          key={project.slug}
        >
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="project-card-link"
            aria-label={`Explore ${project.title}`}
          >
            <div className="project-image-link">
              <img
                src={project.image}
                alt={`${project.title} — Warde Interiors`}
                loading="lazy"
              />
              <span className="project-image-indicator">
                Explore project <ArrowUpRight aria-hidden="true" />
              </span>
            </div>

            <div className="project-caption">
              <div>
                <span className="eyebrow">
                  PROJECT 0{index + 1}
                </span>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
                <p className="project-configuration">
                  {project.configuration}
                </p>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}


export function EnquiryCta({ compact = false }: { compact?: boolean }) {
  return <section className={`enquiry-cta${compact ? " enquiry-cta--compact" : ""}`}>
    <div><p className="eyebrow">A SPACE THAT FEELS LIKE YOURS</p><h2>Let’s create something<br className="desktop-break" /> beautiful together.</h2><p>Tell us about your space and the way you envision living.</p></div>
    <Button asChild variant="outline" className="cta-outline"><a href={projectEnquiryUrl} target="_blank" rel="noreferrer">Start your project <ArrowUpRight aria-hidden="true" /></a></Button>
  </section>;
}

export function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <>
    


<section id="hero" className="home-hero">
  <img
    src="https://i.postimg.cc/fb6kYmT0/hero-section-bg.png"
    alt="Contemporary residential interior designed by Warde Interiors"
    width={1920}
    height={1280}
    fetchPriority="high"
  />

  <div className="home-hero__shade" />

  <div className="home-hero__content">

    <p className="hero-eyebrow">
      <span />
      WARDE INTERIORS&nbsp; | &nbsp;THOUGHTFUL SPACES. TIMELESS DESIGN.
    </p>

    <h1>
      Thoughtful interiors,
      <br />
      <em>designed around you.</em>
    </h1>

    <p className="hero-description">
      Creating beautiful, functional and personalised spaces
      that reflect your lifestyle and inspire everyday living.
    </p>

    <div className="hero-actions">

      <Button asChild className="hero-primary-cta">
        <Link to="/projects">
          Explore Projects
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>

      <a
        href={projectEnquiryUrl}
        target="_blank"
        rel="noreferrer"
        className="hero-secondary-cta"
      >
        Let's Discuss Your Space
      </a>

    </div>
  </div>
</section>

<section id="about" className="intro-section">
  <div className="intro-copy">

    <p className="eyebrow">
      A MORE PERSONAL WAY TO DESIGN
    </p>

    <h2>
      Design that begins
      <br />
      with <em>understanding.</em>
    </h2>

    <p>
      Samiksha Warde, founder of Warde Interiors, 
      is passionate about creating spaces that bring together thoughtful design, 
      functionality and timeless aesthetics. 
      With a background in Interior Design, she approaches every project with creativity, 
      attention to detail and a deep understanding of how spaces shape everyday living. 
      Her design philosophy revolves around creating personalised interiors that reflect each client’s lifestyle, 
      vision and individuality, where every element has a purpose and every space tells a story.
    </p>

    <a href="/about" className="text-link">
      Know more
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </a>

  </div>

  <figure className="intro-image">
    <img
      src="https://i.postimg.cc/SxWnDb62/warde-portrait2.png"
      alt="Warde Interiors founder" />
  </figure>
  </section>

  <div className="section-gold-divider" aria-hidden="true" />
    
  <section
    id="projects"
    className="selected-section section-wrap"
    data-scroll-reveal
  >
    <div className="section-heading-row">
      <div>
        <p className="eyebrow">A FEW SPACES, IN TIME</p>
        <h2>The Atelier</h2>
        <p>
          A collection of homes shaped by individual lifestyles
          and thoughtful design.
        </p>
      </div>
  
      <p className="project-browse-hint">
        Select a project to explore its details
        <ArrowUpRight aria-hidden="true" />
      </p>
    </div>
  
    <ProjectList limit={5} />
    </section>


    
  <section
    id="design-philosophy"
    className="philosophy-section"
    data-scroll-reveal
  >
    <div className="philosophy-main">
  
      {/* LEFT: INTERIOR IMAGE */}
      <figure className="philosophy-image">
        <img
          src={philosophyPhoto.url}
          alt="A thoughtfully designed residential interior with warm natural tones"
          width={433}
          height={800}
          loading="lazy"
        />
      </figure>
  
      {/* RIGHT: DESIGN PHILOSOPHY */}
      <div className="philosophy-copy">
  
        <div className="philosophy-eyebrow">
          <p className="eyebrow">OUR DESIGN PHILOSOPHY</p>
          <span />
        </div>
  
        <h2>
          Function first.
          <br />
          Design that naturally
          <br />
          <em>follows.</em>
        </h2>
  
        <p>
          Creating functional and aesthetically balanced spaces.
          Emphasis on timeless design, thoughtful detailing and
          material selection. Developing personalised interiors
          that align with each client's lifestyle and requirements.
        </p>
  
      </div>
      </div>
      
        {/* OUR PROCESS */}
        <div id="our-process" className="process-section">
      
          <div className="process-heading">
            <span />
            <p>OUR PROCESS</p>
            <span />
          </div>
      
          <div className="process-grid">
      
            <div className="process-card">
              <div className="process-icon-wrap">
                <span className="process-number">01</span>
                <div className="process-icon">
                  <MessagesSquare />
                </div>
              </div>
              <h3>Understand</h3>
              <p>
                Understand the client's lifestyle, requirements
                and vision.
              </p>
            </div>
      
            <div className="process-card">
              <div className="process-icon-wrap">
                <span className="process-number">02</span>
                <div className="process-icon">
                  <Lightbulb />
                </div>
              </div>
              <h3>Conceptualise</h3>
              <p>
                Develop the design direction around the space
                and client needs.
              </p>
            </div>
      
            <div className="process-card">
              <div className="process-icon-wrap">
                <span className="process-number">03</span>
                <div className="process-icon">
                  <DraftingCompass />
                </div>
              </div>
              <h3>Design</h3>
              <p>
                Translate the concept into detailed design
                and visualisation.
              </p>
            </div>
      
            <div className="process-card">
              <div className="process-icon-wrap">
                <span className="process-number">04</span>
                <div className="process-icon">
                  <HardHat />
                </div>
              </div>
              <h3>Execute</h3>
              <p>
                Coordinate the design through implementation.
              </p>
            </div>
      
            <div className="process-card">
              <div className="process-icon-wrap">
                <span className="process-number">05</span>
                <div className="process-icon">
                  <House />
                </div>
              </div>
              <h3>Handover</h3>
              <p>
                Deliver a finished space designed around the client.
              </p>
            </div>
      
          </div>
        </div>
      
      </section>


      <section
        id="services"
        className="services-peek section-wrap"
        data-scroll-reveal
      >
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">WHAT WE CAN CREATE TOGETHER</p>
            <h2>Our services</h2>
          </div>
      
          <a href="/#services" className="text-link">
            Explore services
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      
        <ServiceImageGrid compact />
      </section>

    <div data-scroll-reveal><WhyWardeSection /></div>

    <div data-scroll-reveal><TestimonialsMarquee /></div>

    <div data-scroll-reveal><EnquiryCta /></div>
  </>;
}

export function ProjectsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="A GROWING BODY OF WORK"
        title="Selected Projects"
        lead="Discover thoughtfully designed residences, each shaped around the people who call them home."
      />

      <section className="projects-page section-wrap">
        <ProjectList />
      </section>

      <EnquiryCta compact />
    </main>
  );
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projectPlaceholders.find(
    (item) => item.slug === slug
  );

  const projectIndex = projectPlaceholders.findIndex(
    (item) => item.slug === slug
  );

  const next =
    projectIndex >= 0
      ? projectPlaceholders[
          (projectIndex + 1) % projectPlaceholders.length
        ]
      : null;

  if (!project) {
    return (
      <main>
        <PageIntro
          eyebrow="PROJECT STUDY"
          title="Project not found"
          lead="The requested project could not be found."
        />
        <div className="section-wrap projects-page">
          <Link to="/projects" className="text-link">
            Return to projects <ArrowRight />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <PageIntro
        eyebrow={`PROJECT 0${projectIndex + 1} · WARDE INTERIORS`}
        title={project.title}
        lead={project.description}
      />

      <figure className="detail-cover">
        <img
          src={project.image}
          alt={`${project.title} — Residential interiors by Warde Interiors`}
        />
        <figcaption>
          {project.title} · Warde Interiors
        </figcaption>
      </figure>

      <section className="detail-copy section-wrap">
        <div>
          <p className="eyebrow">THE PROJECT</p>
          <h2>{project.title}</h2>
        </div>

        <div className="project-facts">
          <div>
            <span>LOCATION</span>
            <p>{project.location}</p>
          </div>

          <div>
            <span>PROJECT TYPE</span>
            <p>{project.configuration}</p>
          </div>

          <div>
            <span>DESIGN STUDIO</span>
            <p>Warde Interiors</p>
          </div>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="detail-gallery detail-gallery--editorial section-wrap">
          {project.gallery.map((galleryImage, index) => (
            <figure key={`${project.slug}-${index}`}>
              <img
                src={galleryImage}
                alt={`${project.title} — Interior detail ${index + 1}`}
                loading="lazy"
              />
              <figcaption>
                {project.title} · Interior detail
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      {next && (
        <div className="next-project section-wrap">
          <span className="eyebrow">NEXT PROJECT</span>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
          >
            <span>{next.title}</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      )}

      <EnquiryCta compact />
    </main>
  );
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
  {
    title: "Client-Centric Design",
    summary:
      "Every design begins with understanding the person who will use the space. We take the time to learn about your daily habits, preferences, and future needs so the environment feels truly natural to you.",
  },
  {
    title: "Function Meets Aesthetics",
    summary:
      "Beautiful interiors should also work effortlessly. By balancing visual appeal with smart layouts and practical storage, we ensure every room supports your everyday routines without compromise.",
  },
  {
    title: "Thoughtful Detailing",
    summary:
      "Materials, proportions, colours and details are considered as one cohesive design. From the texture of the fabrics to the placement of lighting, every subtle element is curated to bring harmony and lasting quality to the space.",
  },
  {
    title: "Personalised Spaces",
    summary:
      "Each project is developed around the individual client rather than a fixed formula. This bespoke approach ensures your finished interior is a one-of-a-kind reflection of your personality and lifestyle.",
  },
];

function WhyWardeSection() {
  return (
    <section className="why-section section-wrap">
      <figure className="why-photo">
        <img
          src="https://i.postimg.cc/rFfmsb14/warde-portrait1.png"
          alt="Founder of Warde Interiors"
        />
      </figure>

      <div className="why-content">
        <p className="eyebrow">THE WARDE APPROACH</p>

        <h2>Why Warde Interiors?</h2>

        <div className="why-reasons">
          {wardeReasons.map(({ title, summary }, index) => (
            <article
                className="why-reason"
                key={title}
                style={{ "--reason-index": index } as React.CSSProperties}
              >
              <div className="why-reason-heading">
                <span className="why-number">
                  0{index + 1}
                </span>

                <h3>{title}</h3>
              </div>

              <p className="why-description">{summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


const demoTestimonials = [
  { quote: "Client feedback will appear here when supplied by the studio.", name: "Client name to be added", location: "Testimonial placeholder" },
  { quote: "This space is reserved for an approved client review.", name: "Client name to be added", location: "Testimonial placeholder" },
  { quote: "A client story will be added here after it is shared with the studio.", name: "Client name to be added", location: "Testimonial placeholder" },
  { quote: "Approved feedback from a Warde Interiors client will appear here.", name: "Client name to be added", location: "Testimonial placeholder" },
  { quote: "Client feedback will appear here when supplied by the studio.", name: "Client name to be added", location: "Testimonial placeholder" },
  { quote: "This space is reserved for an approved client review.", name: "Client name to be added", location: "Testimonial placeholder" },
  { quote: "A client story will be added here after it is shared with the studio.", name: "Client name to be added", location: "Testimonial placeholder" },
  { quote: "Approved feedback from a Warde Interiors client will appear here.", name: "Client name to be added", location: "Testimonial placeholder" },
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
