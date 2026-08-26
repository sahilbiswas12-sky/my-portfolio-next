import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills | Sahil Biswas",
  description:
    "Explore Sahil Biswas's frontend, backend, database, AI, accessibility and development skills.",
};

const skillGroups = [
  {
    number: "01",
    symbol: "◇",
    title: "Frontend Development",
    description:
      "Building responsive, accessible and reusable user interfaces for modern web applications.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    number: "02",
    symbol: "⌘",
    title: "Backend Development",
    description:
      "Creating server logic, APIs and application workflows that support frontend experiences.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Server Logic",
      "API Integration",
    ],
  },
  {
    number: "03",
    symbol: "◉",
    title: "Databases",
    description:
      "Working with structured and document-based data for practical web applications.",
    skills: [
      "MongoDB",
      "MySQL",
      "SQL",
      "Data Modelling",
      "localStorage",
    ],
  },
  {
    number: "04",
    symbol: "✦",
    title: "AI and Generative AI",
    description:
      "Using AI tools to support research, development, debugging, content workflows and application features.",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "LLM Integration",
      "Google Gemini",
      "ChatGPT",
      "Claude",
      "RAG Basics",
      "AI SDK",
    ],
  },
  {
    number: "05",
    symbol: "⌁",
    title: "Development Tools",
    description:
      "Managing projects, source code, packages, collaboration and production deployments.",
    skills: [
      "Git",
      "GitHub",
      "npm",
      "VS Code",
      "Vercel",
      "GitHub Pages",
      "Postman",
    ],
  },
  {
    number: "06",
    symbol: "◎",
    title: "Accessibility and Testing",
    description:
      "Improving usability through semantic structure, keyboard support and accessible interface patterns.",
    skills: [
      "Semantic HTML",
      "ARIA",
      "Keyboard Navigation",
      "Focus Management",
      "Responsive Testing",
      "Vitest",
      "React Testing Library",
    ],
  },
];

const workingApproach = [
  "Understand the problem and user requirements",
  "Plan the interface, components and application flow",
  "Build reusable and responsive components",
  "Test functionality, accessibility and edge cases",
  "Deploy, review and improve the final product",
];

export default function SkillsPage() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-18 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[5%] top-[10%] h-105 w-105 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-[10%] top-[20%] h-115 w-115 rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[30%] h-105 w-105 rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[52px_52px]" />
      </div>

      <div className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Skills and Capabilities
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Technologies I use to build
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              practical digital products.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            My skills cover frontend development, backend fundamentals,
            databases, accessibility, AI-assisted workflows and production
            deployment.
          </p>
        </section>

        {/* Skill cards */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="group rounded-[2rem] border border-white/10 bg-white/2.5 p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/25">
                    {group.number}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {group.symbol}
                  </span>
                </div>

                <h2 className="mt-8 text-2xl font-semibold">
                  {group.title}
                </h2>

                <p className="mt-4 leading-7 text-white/45">
                  {group.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-white/55 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Working approach */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
                Working Approach
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                How I apply these skills.
              </h2>
            </div>

            <div className="space-y-3">
              {workingApproach.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/2 px-5 py-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/10 text-xs font-semibold text-purple-300">
                    0{index + 1}
                  </span>

                  <p className="text-white/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Currently learning */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="rounded-[2rem] border border-purple-400/20 bg-linear-to-br from-purple-400/10 via-blue-400/5 to-cyan-400/10 p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
              Currently Learning
            </p>

            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
              Continuing to grow as a full-stack developer.
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-white/50">
              I am improving my knowledge of full-stack architecture,
              accessibility, automated testing, AI integration and production
              application development through practical projects.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="rounded-[2.5rem] border border-cyan-400/15 bg-white/2.5 p-8 text-center sm:p-12">
            <h2 className="text-4xl font-semibold tracking-tight">
              See these skills in practice.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/50">
              Explore the projects where I applied these technologies to build
              working web applications.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/work"
                className="rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1"
              >
                Explore My Work →
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/10 px-7 py-4 text-sm font-semibold text-white/70 transition hover:border-purple-400/30 hover:text-purple-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}