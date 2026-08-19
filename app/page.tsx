import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "JARVIS",
    category: "AI · Web Development",
    description:
      "An AI-powered personal assistant exploring voice interaction, automation, browser APIs, and intelligent commands.",
    stack: ["JavaScript", "Web Speech API", "AI", "CSS"],
    href: "/work/jarvis",
    symbol: "✦",
  },
  {
    number: "02",
    title: "FLKEYBOARD",
    category: "Interactive Web Application",
    description:
      "A keyboard-focused project built around browser events, visual feedback, interaction, and responsive design.",
    stack: ["HTML5", "CSS3", "JavaScript", "Keyboard Events"],
    href: "/work/flkeyboard",
    symbol: "⌨",
  },
  {
    number: "03",
    title: "PG-Life",
    category: "Full-Stack · Web Application",
    description:
      "A practical accommodation discovery platform designed to help students explore and compare PG properties.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    href: "/work/pg-life",
    symbol: "⌂",
  },
  {
    number: "04",
    title: "Sahil Biswas Portfolio",
    category: "Portfolio · Next.js",
    description:
      "A modern developer portfolio built around project proof, case studies, responsive design, and professional presentation.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "/work/portfolio",
    symbol: "◈",
  },
];

const skills = [
  {
    title: "Frontend",
    symbol: "◇",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    symbol: "⌘",
    items: ["Node.js", "Express", "REST APIs", "Server Logic"],
  },
  {
    title: "Database",
    symbol: "◉",
    items: ["MongoDB", "MySQL", "SQL", "Data Modeling"],
  },
  {
    title: "AI & Tools",
    symbol: "✦",
    items: ["Generative AI", "Prompt Engineering", "Git", "GitHub", "Vercel"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the real problem, user needs, constraints, and what success should look like.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the structure, user flow, components, technology choices, and implementation path.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn the plan into a working product using reusable components and practical development patterns.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Check responsiveness, accessibility, interaction, edge cases, and overall usability.",
  },
  {
    number: "05",
    title: "Ship",
    description:
      "Deploy the application, review the result, and continue improving it through iteration.",
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">

      {/* GLOBAL BACKGROUND */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[5%] top-[10%] h-105 w-105 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-[10%] top-[20%] h-115 w-115 rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[30%] h-105 w-105 rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[52px_52px]" />
      </div>

      <div className="relative">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:px-12 lg:pb-36 lg:pt-40">

          <div className="max-w-6xl">

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for opportunities
              </span>

              <span className="rounded-full border border-white/10 bg-white/2.5 px-4 py-2 text-xs text-white/40">
                India
              </span>
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
              Web Developer · AI Engineer · Business Professional
            </p>

            <h1 className="mt-8 max-w-6xl text-5xl font-bold leading-[0.92] tracking-tighter sm:text-7xl lg:text-[7.5rem]">
              I build digital
              <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                experiences & systems.
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/50 sm:text-xl">
              I&apos;m Sahil Biswas, focused on building practical web
              applications, modern interfaces, AI-powered experiences, and
              technology-driven digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                Explore my work
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/2 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/4"
              >
                Let&apos;s talk
                <span className="transition group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK STATS
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-4 border-y border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <StatBox value="8+" label="Practical Projects" />
            <StatBox value="Full" label="Stack Development" />
            <StatBox value="AI" label="Assisted Workflows" />
            <StatBox value="100%" label="Responsive Focus" />
          </div>
        </section>

        {/* =====================================================
            WHAT I DO
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <SectionLabel>What I Do</SectionLabel>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Building practical digital products.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <CapabilityCard
                symbol="▣"
                title="Frontend Development"
                description="Responsive and reusable interfaces using React, Next.js, TypeScript, and modern CSS."
              />

              <CapabilityCard
                symbol="⌘"
                title="Full-Stack Applications"
                description="Connecting frontend experiences with APIs, backend logic, databases, and real application workflows."
              />

              <CapabilityCard
                symbol="✦"
                title="AI-Assisted Development"
                description="Using AI tools and prompt engineering to accelerate development, research, debugging, and iteration."
              />

              <CapabilityCard
                symbol="◇"
                title="Product Thinking"
                description="Approaching projects as working products with clear users, problems, decisions, and outcomes."
              />

            </div>
          </div>
        </section>

        {/* =====================================================
            SELECTED PROJECTS
        ===================================================== */}

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>
              <SectionLabel>Selected Work</SectionLabel>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Projects that prove the work.
              </h2>
            </div>

            <Link
              href="/work"
              className="group text-sm text-white/40 transition hover:text-cyan-300"
            >
              View all projects
              <span className="ml-2 inline-block transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/2.5 p-1 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <div className="relative min-h-full rounded-[1.8rem] bg-[#080808] p-8 sm:p-9">

                  <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-400/0 blur-[100px] transition duration-700 group-hover:bg-cyan-400/10" />

                  <div className="relative">

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/25">
                        {project.number}
                      </span>

                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                        {project.symbol}
                      </span>
                    </div>

                    <p className="mt-12 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-xl leading-8 text-white/45">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-white/40 transition group-hover:border-cyan-400/20 group-hover:text-cyan-200"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

                      <span className="text-sm text-white/30">
                        View case study
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition duration-300 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                        →
                      </span>

                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================
            TECH STACK
        ===================================================== */}

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

          <SectionLabel>Technology Stack</SectionLabel>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Tools I use to turn ideas into working products.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group rounded-3xl border border-white/10 bg-white/2 p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/3"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300 transition group-hover:rotate-6 group-hover:scale-110">
                  {skill.symbol}
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {skill.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/2.5 px-3 py-2 text-xs text-white/45"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <SectionLabel>How I Work</SectionLabel>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A simple process from idea to launch.
              </h2>
            </div>

            <div className="space-y-2">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="group grid gap-5 rounded-2xl border border-transparent p-5 transition hover:border-white/10 hover:bg-white/2 sm:grid-cols-[70px_1fr]"
                >

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs font-semibold text-cyan-300 transition group-hover:scale-110">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl leading-7 text-white/45">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

          <SectionLabel>Experience</SectionLabel>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/2.5 p-8 sm:p-10 lg:p-12">

            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">

              <div>
                <span className="inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  Front-End AI Engineering
                </span>

                <h2 className="mt-6 text-3xl font-semibold">
                  FlyRank AI
                </h2>

                <p className="mt-3 text-white/35">
                  Practical learning · Project-driven development
                </p>
              </div>

              <div>
                <p className="text-lg leading-8 text-white/50">
                  Working through practical frontend and AI-fluency projects
                  focused on real interfaces, accessibility, reusable
                  components, portfolio development, and AI-assisted
                  engineering workflows.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <MiniPoint text="React & TypeScript practice" />
                  <MiniPoint text="ARIA accessibility patterns" />
                  <MiniPoint text="AI-assisted development" />
                  <MiniPoint text="Portfolio case-study development" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            CURRENTLY BUILDING
        ===================================================== */}

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="group rounded-[2rem] border border-cyan-400/15 bg-cyan-400/2.5 p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 sm:p-10">

              <div className="flex items-center gap-3 text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Currently Building
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold">
                Better full-stack experiences.
              </h2>

              <p className="mt-5 leading-8 text-white/45">
                Continuing to build practical applications while improving
                architecture, accessibility, user experience, and production
                deployment.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-purple-400/15 bg-purple-400/2.5 p-8 transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 sm:p-10">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                Currently Learning
              </p>

              <h2 className="mt-6 text-3xl font-semibold">
                Deeper AI + engineering workflows.
              </h2>

              <p className="mt-5 leading-8 text-white/45">
                Exploring stronger React patterns, accessibility, full-stack
                architecture, AI integration, prompt engineering, and better
                ways to review AI-generated code.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            WHY WORK WITH ME
        ===================================================== */}

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <SectionLabel>Working With Me</SectionLabel>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                More than just writing code.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <ReasonCard
                number="01"
                title="Clear Communication"
                description="I focus on understanding requirements and communicating progress clearly."
              />

              <ReasonCard
                number="02"
                title="Practical Problem Solving"
                description="I prefer building working solutions and learning through real implementation."
              />

              <ReasonCard
                number="03"
                title="Fast Learning"
                description="I actively learn new tools, patterns, and technologies as projects require them."
              />

              <ReasonCard
                number="04"
                title="Product Mindset"
                description="I think about usability, maintainability, accessibility, and the actual user experience."
              />

            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

          <div className="group relative overflow-hidden rounded-[2.5rem] border border-cyan-400/15 bg-linear-to-br from-cyan-400/8 via-blue-400/4 to-purple-400/8 p-8 sm:p-12 lg:p-16">

            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[120px] transition duration-700 group-hover:scale-125" />

            <div className="absolute bottom-0 left-[30%] h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

            <div className="relative max-w-4xl">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Let&apos;s Build
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Have an idea worth
                <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {" "}
                  building?
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
                I&apos;m interested in opportunities where I can build useful
                digital products, solve real problems, and continue growing as
                a developer.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  Start a Conversation
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/work"
                  className="rounded-full border border-white/10 px-7 py-4 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-purple-300"
                >
                  Explore My Work
                </Link>

              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

/* =====================================================
   REUSABLE COMPONENTS
===================================================== */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
      {children}
    </p>
  );
}

function StatBox({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/2.5">

      <p className="text-3xl font-semibold text-white">
        {value}
      </p>

      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/30">
        {label}
      </p>

    </div>
  );
}

function CapabilityCard({
  symbol,
  title,
  description,
}: {
  symbol: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/2 p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/3">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
        {symbol}
      </div>

      <h3 className="mt-7 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-white/45">
        {description}
      </p>
    </div>
  );
}

function MiniPoint({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-sm text-white/45">
      <span className="text-cyan-300">✓</span>
      {text}
    </div>
  );
}

function ReasonCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-400 hover:-translate-y-1 hover:border-purple-400/25">

      <span className="text-xs font-semibold text-purple-300/70">
        {number}
      </span>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-white/40">
        {description}
      </p>

    </div>
  );
}