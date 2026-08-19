import Link from "next/link";

const projects = [
  {
    number: "01",
    symbol: "✦",
    title: "JARVIS",
    category: "AI · Web Development",
    description:
      "An AI-powered personal assistant exploring intelligent interaction, voice capabilities, browser APIs, and automation.",
    stack: ["JavaScript", "AI", "Web APIs", "Responsive UI"],
    href: "/work/jarvis",
    highlight: "AI Assistant",
  },
  {
    number: "02",
    symbol: "⌨",
    title: "FLKEYBOARD",
    category: "Frontend · Interaction",
    description:
      "An interactive keyboard-focused project built around direct user input, responsive behaviour, and clear interface feedback.",
    stack: ["React", "TypeScript", "JavaScript", "CSS"],
    href: "/work/flkeyboard",
    highlight: "Interactive UI",
  },
  {
    number: "03",
    symbol: "⌂",
    title: "PG-Life",
    category: "Full-Stack · Web Application",
    description:
      "A practical accommodation discovery platform designed to help students explore PG options through structured information and search.",
    stack: ["React", "Node.js", "MongoDB", "JavaScript"],
    href: "/work/pg-life",
    highlight: "Full-Stack",
  },
  {
    number: "04",
    symbol: "◈",
    title: "Sahil Biswas Portfolio",
    category: "Portfolio · Product Design",
    description:
      "A modern portfolio designed to present projects, technical skills, case studies, and professional development work.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "/work/portfolio",
    highlight: "Personal Brand",
  },
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 top-125 h-100 w-100 rounded-full bg-purple-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-100 w-100 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">

        {/* HERO */}
        <section className="max-w-5xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Selected Work
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
            Projects built with
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              purpose.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50 sm:text-xl">
            A collection of practical applications, experiments, and
            interfaces focused on solving real problems through thoughtful
            design and modern web development.
          </p>

          {/* STATS */}
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat value="4+" label="Projects" />
            <Stat value="3+" label="Stacks" />
            <Stat value="100%" label="Responsive" />
            <Stat value="∞" label="Learning" />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-24 space-y-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-white/2.5 p-1 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5"
            >
              {/* GLOW */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/0 blur-[90px] transition-all duration-500 group-hover:bg-cyan-400/10" />

              <div className="relative rounded-[1.8rem] bg-black/40 p-7 sm:p-10">
                <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-white/25">
                        {project.number}
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                        {project.symbol}
                      </span>
                    </div>

                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/70">
                      {project.category}
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {project.title}
                    </h2>

                    <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-white/50">
                      {project.highlight}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div>
                    <p className="max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                      {project.description}
                    </p>

                    {/* STACK TAGS */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/50 transition group-hover:border-cyan-400/20 group-hover:text-cyan-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-sm text-white/30">
                        View case study
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* FOOTER CTA */}
        <section className="mt-28 border-t border-white/10 pt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-linear-to-br from-cyan-400/10 via-blue-400/5 to-purple-400/10 p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                More to come
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Always building something new.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-white/50">
                These projects represent practical work across frontend,
                full-stack development, AI experiments, and product-focused
                web applications.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Start a Conversation
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/2.5 p-5 transition hover:border-cyan-400/20 hover:bg-cyan-400/3">
      <p className="text-2xl font-semibold text-white">
        {value}
      </p>

      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/30">
        {label}
      </p>
    </div>
  );
}