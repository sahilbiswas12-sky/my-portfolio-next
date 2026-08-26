import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Sahil Biswas",
  description:
    "View Sahil Biswas's technical skills, experience, education and selected web-development projects.",
};

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL"],
  },
  {
    title: "Tools and AI",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
      "Generative AI",
      "Prompt Engineering",
      "RAG Basics",
    ],
  },
];

const projects = [
  {
    title: "AI Qualification Chat",
    type: "AI-enhanced frontend application",
    description:
      "A streaming AI chat application with project-qualification scoring, generative UI and structured error handling.",
    stack: "Next.js, React, TypeScript, Tailwind CSS, Google Gemini",
    href: "https://ai-qualification-chat.vercel.app/",
  },
  {
    title: "TaskFlow AI",
    type: "Task-management web application",
    description:
      "A responsive task-management application with searching, filtering, sorting, progress tracking and local data storage.",
    stack: "React, Vite, JavaScript, HTML, CSS",
    href: "https://sahilbiswas12-sky.github.io/taskflow-ai/",
  },
  {
    title: "Personal Portfolio",
    type: "Developer portfolio",
    description:
      "A responsive portfolio presenting my skills, projects, experience, certificates and professional journey.",
    stack: "Next.js, React, TypeScript, Tailwind CSS",
    href: "/",
  },
];

export default function ResumePage() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-18 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[5%] top-[10%] h-105 w-105 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-[10%] top-[20%] h-115 w-115 rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[52px_52px]" />
      </div>

      <div className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12">
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Available for Opportunities
          </span>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Sahil Biswas
              </p>

              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
                Web Developer and
                <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  AI Engineer.
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-8 text-white/50">
              I build practical web applications that turn ideas into working
              products. I am currently looking for opportunities where I can
              build real-world applications and continue growing as a full-stack
              developer.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/Sahil-Biswas-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1"
            >
              View Resume ↗
            </a>

            <a
              href="/Sahil-Biswas-Resume.pdf"
              download="Sahil-Biswas-Resume.pdf"
              className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-7 py-4 text-sm font-semibold text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400/10"
            >
              Download Resume ↓
            </a>

            <a
              href="https://calendly.com/sahilbiswas890/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-400/25 bg-purple-400/5 px-7 py-4 text-sm font-semibold text-purple-300 transition hover:-translate-y-1 hover:bg-purple-400/10"
            >
              Book a Call ↗
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
            Experience
          </p>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/2.5 p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs font-semibold text-purple-300">
                  August 2026
                </span>

                <h2 className="mt-6 text-3xl font-semibold">
                  FlyRank AI
                </h2>

                <p className="mt-3 text-cyan-300">
                  Front-End AI Engineering Intern
                </p>
              </div>

              <div>
                <p className="leading-8 text-white/50">
                  Participated in a remote educational internship focused on
                  practical frontend development, accessibility, reusable
                  components, portfolio development and AI-assisted engineering
                  workflows.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "React and TypeScript practice",
                    "Accessible interface patterns",
                    "AI application development",
                    "Testing and error handling",
                    "Production deployment",
                    "Portfolio case studies",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-sm text-white/55"
                    >
                      <span className="mr-3 text-cyan-300">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Technical Skills
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Technologies I use to build working products.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/2.5 p-7"
              >
                <h3 className="text-xl font-semibold">{group.title}</h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
            Selected Projects
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-[2rem] border border-white/10 bg-white/2.5 p-7 transition hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                  {project.type}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  {project.description}
                </p>

                <p className="mt-6 text-sm leading-6 text-white/30">
                  {project.stack}
                </p>

                <p className="mt-7 text-sm text-cyan-300">
                  View project →
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
            Education
          </p>

          <div className="mt-10 rounded-[2rem] border border-purple-400/15 bg-purple-400/5 p-8 sm:p-10">
            <h2 className="text-3xl font-semibold">
              Bachelor of Technology
            </h2>

            <p className="mt-3 text-purple-300">
              Computer Science and Engineering
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-white/45">
              Developing a practical foundation in programming, web
              development, databases, software engineering and computer-science
              concepts.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="rounded-[2.5rem] border border-cyan-400/15 bg-linear-to-br from-cyan-400/8 via-blue-400/4 to-purple-400/8 p-8 text-center sm:p-12">
            <h2 className="text-4xl font-semibold">
              Interested in working together?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/50">
              Contact me to discuss development opportunities, projects or
              professional collaboration.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1"
            >
              Contact Me →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}