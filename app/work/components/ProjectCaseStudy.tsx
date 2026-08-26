import Link from "next/link";

type Accent = "cyan" | "purple" | "emerald" | "blue";

interface Feature {
  title: string;
  description: string;
  symbol: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Technology {
  name: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface ProjectCaseStudyProps {
  title: string;
  shortTitle: string;
  category: string;
  description: string;

  accent: Accent;
  visualType: "jarvis" | "keyboard" | "property" | "portfolio";

  technologies: string[];
  stats: Stat[];

  overviewTitle: string;
  overview: string[];

  challengeTitle: string;
  challenge: string;

  solutionTitle: string;
  solution: string;

  featuresTitle: string;
  features: Feature[];

  processTitle: string;
  process: ProcessStep[];

  technologyTitle: string;
  techStack: Technology[];

  liveUrl?: string;
  githubUrl?: string;

  previousUrl?: string;
  previousLabel?: string;

  nextUrl?: string;
  nextLabel?: string;
}

const styles = {
  cyan: {
    text: "text-cyan-300",
    textStrong: "text-cyan-400",
    border: "border-cyan-400/20",
    borderHover: "hover:border-cyan-400/40",
    bg: "bg-cyan-400/10",
    softBg: "bg-cyan-400/[0.04]",
    glow: "bg-cyan-400/20",
    gradient:
      "from-cyan-400 via-blue-400 to-purple-500",
    visual:
      "from-cyan-500/15 via-blue-500/10 to-purple-500/15",
  },

  purple: {
    text: "text-purple-300",
    textStrong: "text-purple-400",
    border: "border-purple-400/20",
    borderHover: "hover:border-purple-400/40",
    bg: "bg-purple-400/10",
    softBg: "bg-purple-400/[0.04]",
    glow: "bg-purple-400/20",
    gradient:
      "from-purple-400 via-fuchsia-400 to-blue-500",
    visual:
      "from-purple-500/15 via-fuchsia-500/10 to-blue-500/15",
  },

  emerald: {
    text: "text-emerald-300",
    textStrong: "text-emerald-400",
    border: "border-emerald-400/20",
    borderHover: "hover:border-emerald-400/40",
    bg: "bg-emerald-400/10",
    softBg: "bg-emerald-400/[0.04]",
    glow: "bg-emerald-400/20",
    gradient:
      "from-emerald-400 via-teal-400 to-cyan-500",
    visual:
      "from-emerald-500/15 via-teal-500/10 to-cyan-500/15",
  },

  blue: {
    text: "text-blue-300",
    textStrong: "text-blue-400",
    border: "border-blue-400/20",
    borderHover: "hover:border-blue-400/40",
    bg: "bg-blue-400/10",
    softBg: "bg-blue-400/[0.04]",
    glow: "bg-blue-400/20",
    gradient:
      "from-blue-400 via-cyan-400 to-purple-500",
    visual:
      "from-blue-500/15 via-cyan-500/10 to-purple-500/15",
  },
};

export default function ProjectCaseStudy({
  title,
  shortTitle,
  category,
  description,

  accent,
  visualType,

  technologies,
  stats,

  overviewTitle,
  overview,

  challengeTitle,
  challenge,

  solutionTitle,
  solution,

  featuresTitle,
  features,

  processTitle,
  process,

  technologyTitle,
  techStack,

  liveUrl,
  githubUrl,

  previousUrl,
  previousLabel,

  nextUrl,
  nextLabel,
}: ProjectCaseStudyProps) {
  const theme = styles[accent];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className={`absolute left-[10%] top-20 h-96 w-96 rounded-full ${theme.glow} opacity-30 blur-[140px]`}
        />

        <div className="absolute bottom-20 right-[5%] h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* ================= HERO ================= */}

        <section className="border-b border-white/10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-5xl">

            <div
              className={`inline-flex items-center gap-3 rounded-full border ${theme.border} ${theme.bg} px-4 py-2`}
            >
              <span
                className={`h-2 w-2 animate-pulse rounded-full ${theme.textStrong.replace(
                  "text-",
                  "bg-"
                )}`}
              />

              <span
                className={`text-xs font-semibold uppercase tracking-[0.25em] ${theme.text}`}
              >
                {category}
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[0.9] tracking-tighter sm:text-7xl lg:text-9xl">
              {title}
              <span
                className={`bg-linear-to-r ${theme.gradient} bg-clip-text text-transparent`}
              >
                .
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/50 sm:text-xl">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className={`rounded-full border ${theme.border} ${theme.softBg} px-4 py-2 text-sm ${theme.text}`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VISUAL ================= */}

        <section className="py-20 sm:py-28">
          <div
            className={`group relative flex min-h-107.5 items-center justify-center overflow-hidden rounded-[2.5rem] border ${theme.border} bg-linear-to-br ${theme.visual} transition duration-700 hover:border-white/20`}
          >
            <div
              className={`absolute h-80 w-80 rounded-full ${theme.glow} blur-[120px] transition duration-700 group-hover:scale-125`}
            />

            <div className="absolute right-[15%] top-[20%] h-52 w-52 rounded-full bg-purple-500/15 blur-[100px]" />

            <div className="relative w-full px-6">
              <ProjectVisual
                type={visualType}
                title={shortTitle}
                accent={accent}
              />
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}

        <section className="grid gap-4 border-t border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`group rounded-2xl border border-white/10 bg-white/2.5 p-6 transition duration-300 ${theme.borderHover} hover:-translate-y-1`}
            >
              <p
                className={`text-3xl font-semibold ${theme.text}`}
              >
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-white/35">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="border-t border-white/10 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <SectionNumber
                number="01"
                label="Overview"
                accentClass={theme.textStrong}
              />

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                {overviewTitle}
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/50 sm:text-lg">
              {overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CHALLENGE ================= */}

        <section className="grid gap-6 border-t border-white/10 py-20 sm:py-28 lg:grid-cols-2">

          <div className="group rounded-[2rem] border border-red-400/10 bg-red-400/2.5 p-8 transition duration-500 hover:-translate-y-1 hover:border-red-400/25 sm:p-10">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 text-xl text-red-300">
              !
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
              The Challenge
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              {challengeTitle}
            </h2>

            <p className="mt-6 leading-8 text-white/50">
              {challenge}
            </p>
          </div>

          <div
            className={`group rounded-[2rem] border ${theme.border} ${theme.softBg} p-8 transition duration-500 hover:-translate-y-1 sm:p-10`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${theme.border} ${theme.bg} text-xl ${theme.text}`}
            >
              ✓
            </div>

            <p
              className={`mt-8 text-xs font-semibold uppercase tracking-[0.25em] ${theme.text}`}
            >
              The Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              {solutionTitle}
            </h2>

            <p className="mt-6 leading-8 text-white/50">
              {solution}
            </p>
          </div>
        </section>

        {/* ================= FEATURES ================= */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <SectionNumber
            number="02"
            label="Features"
            accentClass={theme.textStrong}
          />

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl">
            {featuresTitle}
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                theme={theme}
              />
            ))}
          </div>
        </section>

        {/* ================= DEVELOPMENT ================= */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <SectionNumber
                number="03"
                label="Development"
                accentClass={theme.textStrong}
              />

              <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
                {processTitle}
              </h2>
            </div>

            <div className="space-y-3">
              {process.map((step) => (
                <ProcessCard
                  key={step.number}
                  {...step}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <SectionNumber
            number="04"
            label="Technology"
            accentClass={theme.textStrong}
          />

          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            {technologyTitle}
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((technology) => (
              <div
                key={technology.name}
                className={`group rounded-2xl border ${theme.border} ${theme.softBg} p-6 transition duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`mb-8 h-2 w-2 rounded-full ${theme.textStrong.replace(
                    "text-",
                    "bg-"
                  )}`}
                />

                <h3 className={`text-lg font-semibold ${theme.text}`}>
                  {technology.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  {technology.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECT LINKS ================= */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <div
            className={`group relative overflow-hidden rounded-[2.5rem] border ${theme.border} bg-linear-to-br ${theme.visual} p-8 sm:p-12`}
          >
            <div
              className={`absolute right-0 top-0 h-72 w-72 rounded-full ${theme.glow} blur-[110px] transition duration-700 group-hover:scale-125`}
            />

            <div className="relative max-w-3xl">

              <p
                className={`text-xs font-semibold uppercase tracking-[0.25em] ${theme.text}`}
              >
                Explore {title}
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Want to see how it works?
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-white/50">
                Explore the live application or inspect the source code to
                understand how the project was designed and developed.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-full bg-linear-to-r ${theme.gradient} px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  >
                    View Live Project →
                  </a>
                )}

                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-full border ${theme.border} px-6 py-3.5 text-sm text-white/60 transition hover:bg-white/4 ${theme.borderHover}`}
                  >
                    View GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= NAVIGATION ================= */}

        <section className="border-t border-white/10 py-16">

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">

            {previousUrl ? (
              <Link
                href={previousUrl}
                className="group flex items-center gap-3 text-sm text-white/35 transition hover:text-white"
              >
                <span className="transition group-hover:-translate-x-1">
                  ←
                </span>

                {previousLabel}
              </Link>
            ) : (
              <Link
                href="/work"
                className="text-sm text-white/35 transition hover:text-white"
              >
                ← Back to Selected Work
              </Link>
            )}

            {nextUrl && (
              <Link
                href={nextUrl}
                className={`group flex items-center gap-3 text-sm text-white/35 transition ${theme.text}`}
              >
                {nextLabel}

                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

/* ======================================================
   PROJECT VISUALS
====================================================== */

function ProjectVisual({
  type,
  title,
  accent,
}: {
  type: "jarvis" | "keyboard" | "property" | "portfolio";
  title: string;
  accent: Accent;
}) {
  if (type === "keyboard") {
    return <KeyboardVisual />;
  }

  if (type === "property") {
    return <PropertyVisual />;
  }

  if (type === "portfolio") {
    return <PortfolioVisual />;
  }

  return <JarvisVisual title={title} accent={accent} />;
}

function JarvisVisual({
  title,
}: {
  title: string;
  accent: Accent;
}) {
  return (
    <div className="text-center">
      <div className="relative mx-auto flex h-48 w-48 items-center justify-center">

        <div className="absolute inset-0 animate-pulse rounded-full border border-cyan-400/20" />

        <div className="absolute inset-5 rounded-full border border-cyan-400/30" />

        <div className="absolute inset-10 flex items-center justify-center rounded-full border border-cyan-400/40 bg-black/40 shadow-2xl shadow-cyan-400/20">
          <span className="text-6xl font-bold text-cyan-300">
            {title.charAt(0)}
          </span>
        </div>
      </div>

      <p className="mt-7 text-xs uppercase tracking-[0.4em] text-cyan-300/60">
        Artificial Intelligence
      </p>
    </div>
  );
}

function KeyboardVisual() {
  const keys = Array.from({ length: 24 });

  return (
    <div className="mx-auto max-w-lg">
      <div className="rounded-3xl border border-purple-400/20 bg-black/30 p-6 shadow-2xl shadow-purple-500/10">

        <div className="grid grid-cols-8 gap-2">
          {keys.map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-md border border-purple-300/20 bg-purple-300/4 transition duration-300 hover:scale-110 hover:bg-purple-400/20"
            />
          ))}
        </div>
      </div>

      <p className="mt-7 text-center text-xs uppercase tracking-[0.4em] text-purple-300/60">
        Interactive Keyboard
      </p>
    </div>
  );
}

function PropertyVisual() {
  return (
    <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
      {["₹6,500", "₹8,000", "₹9,500"].map((price, index) => (
        <div
          key={price}
          className={`rounded-2xl border border-emerald-400/20 bg-black/35 p-4 transition duration-500 hover:-translate-y-3 ${
            index === 1 ? "sm:-translate-y-5" : ""
          }`}
        >
          <div className="h-28 rounded-xl bg-linear-to-br from-emerald-400/20 to-cyan-400/5" />

          <div className="mt-4 h-2 w-16 rounded bg-white/20" />
          <div className="mt-2 h-2 w-24 rounded bg-white/10" />

          <p className="mt-5 font-semibold text-emerald-300">
            {price}
          </p>

          <p className="mt-1 text-xs text-white/30">
            / month
          </p>
        </div>
      ))}
    </div>
  );
}

function PortfolioVisual() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-blue-400/20 bg-[#080808] shadow-2xl">

      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

        <div className="ml-4 h-5 flex-1 rounded-full bg-white/4" />
      </div>

      <div className="grid min-h-64 grid-cols-[0.35fr_1fr]">
        <div className="border-r border-white/10 p-4">
          <div className="h-8 w-8 rounded-full bg-linear-to-br from-cyan-400 to-purple-500" />

          <div className="mt-8 space-y-3">
            <div className="h-2 rounded bg-white/20" />
            <div className="h-2 rounded bg-white/10" />
            <div className="h-2 rounded bg-white/10" />
          </div>
        </div>

        <div className="p-6">
          <div className="h-3 w-24 rounded bg-blue-400/30" />

          <div className="mt-5 h-7 w-3/4 rounded bg-white/20" />

          <div className="mt-3 h-3 w-full rounded bg-white/10" />
          <div className="mt-2 h-3 w-4/5 rounded bg-white/10" />

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="h-20 rounded-xl border border-blue-400/10 bg-blue-400/5" />
            <div className="h-20 rounded-xl border border-purple-400/10 bg-purple-400/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   HELPERS
====================================================== */

function SectionNumber({
  number,
  label,
  accentClass,
}: {
  number: string;
  label: string;
  accentClass: string;
}) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.25em] ${accentClass}`}
    >
      {number} · {label}
    </p>
  );
}

function FeatureCard({
  title,
  description,
  symbol,
  theme,
}: Feature & {
  theme: (typeof styles)[Accent];
}) {
  return (
    <div
      className={`group rounded-3xl border border-white/10 bg-white/2 p-7 transition-all duration-500 ${theme.borderHover} hover:-translate-y-2`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${theme.border} ${theme.bg} text-lg ${theme.text} transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
      >
        {symbol}
      </div>

      <h3 className="mt-7 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/45">
        {description}
      </p>
    </div>
  );
}

function ProcessCard({
  number,
  title,
  description,
  theme,
}: ProcessStep & {
  theme: (typeof styles)[Accent];
}) {
  return (
    <div className="group flex gap-5 rounded-2xl p-4 transition hover:bg-white/2.5">

      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${theme.border} ${theme.bg} text-xs font-semibold ${theme.text} transition group-hover:scale-110`}
      >
        {number}
      </span>

      <div>
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-white/45">
          {description}
        </p>
      </div>
    </div>
  );
}