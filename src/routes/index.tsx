import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/poornima-veerla-profile.asset.json";

const linkedInUrl = "https://www.linkedin.com/in/poornimaveerla/";
const githubUrl = "https://github.com/PoornimaVeerla";
const emailUrl = "mailto:veerella.poornima369@gmail.com";

const skills = [
  "Python Programming",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Analytics",
  "Tableau",
  "Data Visualization",
  "Java Full Stack",
  "Data Structures",
  "Data Modeling",
  "Web Security",
  "Computer Networking",
  "Log Analysis",
];

const projects = [
  {
    number: "01",
    type: "AI · CANDIDATE MANAGEMENT",
    title: "AI-Powered Job Recruitment System",
    copy: "A public repository focused on candidate management and the role intelligent systems can play in recruitment workflows.",
    href: "https://github.com/PoornimaVeerla/AI-Powered-Job-Recruitment-Candidate-Management-System",
    linkLabel: "View repository",
  },
  {
    number: "02",
    type: "DATA · TABLEAU",
    title: "ToyCraft Tales",
    copy: "A SmartBridge internship project using Tableau to explore toy-manufacturer data and communicate findings through visual analysis.",
    href: "https://github.com/PoornimaVeerla/ToyCraft-Tales-Tableau-s-Vision-into-Toy-Manufacturer-Data",
    linkLabel: "View repository",
  },
  {
    number: "03",
    type: "QUANTUM · SECURITY",
    title: "Quantum Random Number Generator",
    copy: "A team concept exploring quantum randomness for secure communication, developed through hackathon participation.",
    href: linkedInUrl,
    linkLabel: "View on LinkedIn",
  },
];

const education = [
  {
    period: "2023 — 2027",
    title: "B.Tech · AI & Data Science",
    place: "Kallam Haranadhareddy Institute of Technology",
  },
  {
    period: "2021 — 2023",
    title: "Intermediate · MPC",
    place: "Sri Chaitanya College of Education",
  },
  {
    period: "2020 — 2021",
    title: "Secondary School Certificate",
    place: "Oxford Concept School",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poornima Veerla — AI & Data Science Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Poornima Veerla, an AI and Data Science student building projects across intelligent systems, analytics, and data visualization.",
      },
      { property: "og:title", content: "Poornima Veerla — AI & Data Science Portfolio" },
      {
        property: "og:description",
        content: "Explore Poornima Veerla’s work in AI, data analytics, Tableau, and emerging technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SocialButton({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Linkedin }) {
  return (
    <Button asChild variant="portfolioOutline" size="lg">
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        <Icon aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}

function Index() {
  return (
    <main id="home" className="relative overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="technical-grid pointer-events-none absolute inset-x-0 top-0 h-[1050px] opacity-35" />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between border border-border bg-background/75 px-5 backdrop-blur-xl md:px-7">
          <a href="#home" className="font-display text-xl font-bold text-foreground" aria-label="Poornima Veerla home">
            PV<span className="text-primary">.</span>
          </a>
          <div className="hidden items-center gap-7 font-mono text-[11px] uppercase text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#about">About</a>
            <a className="transition-colors hover:text-primary" href="#skills">Skills</a>
            <a className="transition-colors hover:text-primary" href="#projects">Projects</a>
            <a className="transition-colors hover:text-primary" href="#journey">Experience</a>
            <a className="transition-colors hover:text-primary" href="#resume">Resume</a>
            <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
          </div>
          <Button asChild variant="portfolioOutline" size="sm" className="hidden md:inline-flex">
            <a href={emailUrl}><Mail aria-hidden="true" />Let’s talk</a>
          </Button>
          <a href="#contact" className="text-muted-foreground md:hidden" aria-label="Open contact section"><Menu aria-hidden="true" /></a>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-[880px] max-w-[1440px] items-center gap-12 px-6 pb-24 pt-36 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:pt-28">
        <div className="relative z-10 max-w-4xl">
          <div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase text-primary">
            <span className="h-px w-10 bg-primary" /> AI & Data Science Student
          </div>
          <h1 className="font-display text-[3.15rem] font-bold uppercase leading-[0.8] min-[430px]:text-[3.6rem] md:text-[clamp(4rem,9vw,8.5rem)]">
            Poornima<br /><span className="text-outline">Veerla</span>
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
            Building thoughtful technology at the intersection of artificial intelligence, data, and human-centered problem solving.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="portfolio" size="lg">
              <a href="#projects">Explore my work <ArrowDown aria-hidden="true" /></a>
            </Button>
            <SocialButton href={linkedInUrl} label="LinkedIn" icon={Linkedin} />
            <SocialButton href={githubUrl} label="GitHub" icon={Github} />
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="size-4 text-primary" />Tenali, Andhra Pradesh</span>
            <span className="flex items-center gap-2"><Sparkles className="size-4 text-primary" />Open to learning & collaboration</span>
          </div>
        </div>

        <div className="portrait-orbit relative mx-auto aspect-square w-full max-w-[610px]" aria-hidden="true">
          <div className="absolute inset-[12%] rounded-full border border-primary/25" />
          <div className="orbit-plane absolute inset-[4%] rounded-full border-2 border-primary/75" />
          <div className="orbit-plane orbit-plane-reverse absolute inset-[9%] rounded-full border border-secondary/80" />
          <div className="absolute inset-[20%] overflow-hidden rounded-full border border-primary/50 bg-surface shadow-[var(--shadow-glow)]">
            <img src={profileAsset.url} alt="" className="h-full w-full object-cover object-center grayscale-[20%] contrast-110" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
          </div>
          <div className="absolute left-2 top-1/2 border border-border bg-background/90 px-3 py-2 font-mono text-[10px] text-primary">DATA / 01</div>
          <div className="absolute right-0 top-[35%] border border-border bg-background/90 px-3 py-2 font-mono text-[10px] text-primary">AI / ACTIVE</div>
          <div className="absolute bottom-[12%] right-[8%] border border-border bg-background/90 px-3 py-2 font-mono text-[10px] text-primary">PYTHON</div>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-surface/45">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-32">
          <div>
            <p className="font-mono text-xs text-primary">01 / PROFILE</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">Curious by nature.<br /><span className="text-muted-foreground">Driven by data.</span></h2>
          </div>
          <div className="max-w-3xl lg:pt-9">
            <p className="text-2xl leading-10 text-foreground md:text-3xl md:leading-[1.5]">
              I’m an Artificial Intelligence and Data Science student at Kallam Haranadhareddy Institute of Technology.
            </p>
            <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">
              I use my portfolio to share what I am learning, building, and exploring—from analytics and visualization to intelligent systems and secure emerging technologies. I’m motivated by the opportunity to make complex information clearer and technology more useful.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {["AI & Data Science", "Data Analytics", "Problem Solving"].map((item) => (
                <div key={item} className="border-l-2 border-primary bg-surface px-5 py-4 font-mono text-xs uppercase">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs text-primary">02 / CAPABILITIES</p>
            <h2 className="mt-5 font-display text-4xl font-bold md:text-6xl">A growing<br />technical toolkit.</h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">Areas I’m actively developing through coursework, practical simulations, internships, and projects.</p>
          </div>
          <div className="grid sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={skill} className="group flex min-h-20 items-center gap-5 border-b border-border px-1 py-5 sm:px-5">
                <span className="font-mono text-[10px] text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-base font-medium transition-transform group-hover:translate-x-1 md:text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-border bg-surface/45">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs text-primary">03 / SELECTED WORK</p>
              <h2 className="mt-5 font-display text-4xl font-bold md:text-6xl">Projects in focus.</h2>
            </div>
            <Button asChild variant="portfolioOutline">
              <a href={githubUrl} target="_blank" rel="noreferrer"><Github />All repositories <ArrowUpRight /></a>
            </Button>
          </div>
          <div className="grid gap-px bg-border lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="flex min-h-[410px] flex-col bg-background p-7 md:p-9">
                <div className="flex items-center justify-between font-mono text-[10px] text-primary">
                  <span>{project.number}</span><span>{project.type}</span>
                </div>
                <h3 className="mt-20 font-display text-2xl font-bold leading-tight md:text-3xl">{project.title}</h3>
                <p className="mt-5 leading-7 text-muted-foreground">{project.copy}</p>
                <a href={project.href} target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-2 pt-8 font-mono text-xs text-primary">
                  {project.linkLabel} <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs text-primary">04 / EDUCATION</p>
            <h2 className="mt-5 font-display text-4xl font-bold md:text-6xl">Learning,<br />layer by layer.</h2>
            <div className="mt-12 border-t border-border">
              {education.map((item) => (
                <div key={item.title} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[130px_1fr]">
                  <span className="font-mono text-[11px] text-primary">{item.period}</span>
                  <div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.place}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pt-20">
            <p className="font-mono text-xs text-primary">04B / EXPERIENCE</p>
            <h2 className="mt-5 font-display text-4xl font-bold md:text-6xl">Practice into<br />perspective.</h2>
            <div className="mt-12 border-t border-border">
              <article className="grid gap-5 border-b border-border py-8 sm:grid-cols-[48px_1fr]">
                <Award className="size-6 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[10px] text-primary">JOB SIMULATION · FORAGE</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">Deloitte Australia Data Analytics</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">A practical simulation centered on data analytics work and structured problem solving.</p>
                </div>
              </article>
              <article className="grid gap-5 border-b border-border py-8 sm:grid-cols-[48px_1fr]">
                <GraduationCap className="size-6 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[10px] text-primary">INTERNSHIP · SMARTBRIDGE</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">Data Analytics with Tableau</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">Practical experience focused on turning datasets into visual insights and dashboard-based stories.</p>
                  <a href={linkedInUrl} target="_blank" rel="noreferrer" className="mt-6 flex items-center gap-2 font-mono text-xs text-primary">View profile details <ArrowUpRight className="size-4" /></a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="border-y border-border bg-surface/45">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-16 lg:py-28">
          <div>
            <p className="font-mono text-xs text-primary">05 / RESUME</p>
            <h2 className="mt-5 font-display text-4xl font-bold md:text-6xl">Education, skills,<br />and work in one view.</h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <FileText className="size-8 text-primary" aria-hidden="true" />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Review my current education, practical experience, projects, and technical interests through my verified LinkedIn profile.</p>
            <Button asChild variant="portfolio" size="lg" className="mt-8">
              <a href={linkedInUrl} target="_blank" rel="noreferrer">View resume on LinkedIn <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <p className="font-mono text-xs">06 / LET’S CONNECT</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-5xl font-display text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">Let’s build something meaningful.</h2>
              <p className="mt-7 max-w-xl text-base leading-7 opacity-75">Interested in AI, data, or thoughtful technology? I’d be glad to connect and learn about what you’re working on.</p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a className="flex items-center gap-3 border-b border-primary-foreground/40 pb-2 font-medium" href={emailUrl}><Mail />veerella.poornima369@gmail.com</a>
              <a className="flex items-center gap-3 border-b border-primary-foreground/40 pb-2 font-medium" href={linkedInUrl} target="_blank" rel="noopener noreferrer"><Linkedin />linkedin.com/in/poornimaveerla</a>
              <a className="flex items-center gap-3 border-b border-primary-foreground/40 pb-2 font-medium" href={githubUrl} target="_blank" rel="noreferrer"><Github />github.com/PoornimaVeerla</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 font-mono text-[10px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>PV. · Poornima Veerla</span><span>AI · Data · Technology</span>
        </div>
      </footer>
    </main>
  );
}