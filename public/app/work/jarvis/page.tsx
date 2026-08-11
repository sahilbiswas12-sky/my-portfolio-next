export default function JarvisPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* =========================
            HERO
        ========================== */}

        <section className="border-b border-cyan-400/10 pb-20 pt-16 sm:pb-28 sm:pt-24">

          <div className="max-w-5xl">

            <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-lg shadow-cyan-500/10">
              AI · Web Development
            </p>

            <h1 className="mt-8 text-6xl font-bold leading-[0.9] tracking-tighter sm:text-7xl lg:text-9xl">

              JARVIS
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                .
              </span>

            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/50 sm:text-xl">
              An AI-powered personal assistant project exploring
              intelligent interaction, automation, voice capabilities,
              and modern web technologies.
            </p>

            {/* TECHNOLOGIES */}

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                JavaScript
              </span>

              <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                AI
              </span>

              <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-300">
                Web APIs
              </span>

              <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300">
                Responsive UI
              </span>

            </div>

          </div>

        </section>


        {/* =========================
            PROJECT VISUAL
        ========================== */}

        <section className="py-20 sm:py-28">

          <div className="relative flex min-h-105 items-center justify-center overflow-hidden rounded-4xl border border-cyan-400/10 bg-linear-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 shadow-2xl shadow-cyan-500/5">

            {/* BACKGROUND GLOW */}

            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]" />

            <div className="absolute h-64 w-64 translate-x-40 rounded-full bg-purple-500/20 blur-[100px]" />

            {/* JARVIS CORE */}

            <div className="relative text-center">

              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-cyan-300/30 bg-black/40 shadow-2xl shadow-cyan-400/20">

                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10">

                  <span className="text-5xl font-bold text-cyan-300">
                    J
                  </span>

                </div>

              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.4em] text-cyan-300/60">
                Artificial Intelligence
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            PROJECT OVERVIEW
        ========================== */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                01 · Overview
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Building a personal AI assistant.
              </h2>

            </div>

            <div className="space-y-6 text-base leading-8 text-white/50">

              <p>
                JARVIS was created as an exploration of how AI,
                browser technologies, and interactive interfaces
                can come together to create a more natural digital
                assistant experience.
              </p>

              <p>
                The project focuses on creating an interface that
                feels simple for the user while providing a foundation
                for intelligent responses, automation, and future
                AI-powered functionality.
              </p>

              <p>
                Rather than building only a static interface, the
                project was approached as an interactive system where
                the frontend becomes the primary way the user interacts
                with the assistant.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            PROBLEM / SOLUTION
        ========================== */}

        <section className="grid gap-6 border-t border-white/10 py-20 sm:py-28 lg:grid-cols-2">

          {/* PROBLEM */}

          <div className="rounded-4xl border border-red-400/10 bg-red-400/3 p-8 sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
              The Challenge
            </p>

            <h2 className="mt-5 text-3xl font-semibold">
              Making interaction feel natural.
            </h2>

            <p className="mt-6 leading-8 text-white/50">
              Traditional interfaces often require users to navigate
              through multiple controls and screens to accomplish
              simple tasks. The challenge was to explore a more direct
              and engaging interaction model for an AI assistant.
            </p>

          </div>


          {/* SOLUTION */}

          <div className="rounded-4xl border border-cyan-400/10 bg-cyan-400/3 p-8 sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              The Approach
            </p>

            <h2 className="mt-5 text-3xl font-semibold">
              One interface for intelligent interaction.
            </h2>

            <p className="mt-6 leading-8 text-white/50">
              JARVIS combines a focused interface with JavaScript,
              browser APIs, and AI-oriented functionality to create
              an experience that can evolve as more capabilities
              are added.
            </p>

          </div>

        </section>


        {/* =========================
            FEATURES
        ========================== */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              02 · Features
            </p>

            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              Designed around interaction.
            </h2>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              title="AI Interaction"
              description="Designed as a foundation for intelligent responses and AI-powered interactions."
              color="cyan"
            />

            <FeatureCard
              title="Voice Experience"
              description="Explores browser-based voice interaction and hands-free assistant workflows."
              color="blue"
            />

            <FeatureCard
              title="Automation"
              description="Built with the idea of connecting useful actions and automated workflows."
              color="purple"
            />

            <FeatureCard
              title="Responsive UI"
              description="Designed to remain usable across desktop, tablet, and mobile screen sizes."
              color="emerald"
            />

            <FeatureCard
              title="Web APIs"
              description="Uses browser capabilities to create a more interactive application experience."
              color="orange"
            />

            <FeatureCard
              title="Expandable System"
              description="Structured as a foundation that can grow with additional AI features and services."
              color="pink"
            />

          </div>

        </section>


        {/* =========================
            DEVELOPMENT
        ========================== */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                03 · Development
              </p>

              <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
                From idea to interaction.
              </h2>

            </div>


            <div className="space-y-8">

              <ProcessStep
                number="01"
                title="Interface"
                description="Created a focused interface designed around clarity and direct interaction."
              />

              <ProcessStep
                number="02"
                title="Interaction"
                description="Implemented JavaScript-driven interactions and browser capabilities."
              />

              <ProcessStep
                number="03"
                title="AI Foundation"
                description="Structured the experience so intelligent functionality can be integrated and expanded."
              />

              <ProcessStep
                number="04"
                title="Refinement"
                description="Focused on responsive behaviour, visual hierarchy, usability, and overall experience."
              />

            </div>

          </div>

        </section>


        {/* =========================
            TECH STACK
        ========================== */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            04 · Technology
          </p>

          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Built with modern web technology.
          </h2>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <TechCard
              name="JavaScript"
              description="Core application logic"
              color="yellow"
            />

            <TechCard
              name="HTML"
              description="Semantic structure"
              color="orange"
            />

            <TechCard
              name="CSS"
              description="Responsive interface"
              color="blue"
            />

            <TechCard
              name="Web APIs"
              description="Browser capabilities"
              color="purple"
            />

          </div>

        </section>


        {/* =========================
            PROJECT LINKS
        ========================== */}

        <section className="border-t border-white/10 py-20 sm:py-28">

          <div className="rounded-4xl border border-cyan-400/10 bg-linear-to-br from-cyan-400/8 via-blue-400/4 to-purple-400/8 p-8 sm:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Explore JARVIS
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl">
              Want to see the project?
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/50">
              Explore the live project or inspect the source code
              to see how the application was developed.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#"
                className="rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                View Live Project →
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/60 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                View GitHub ↗
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            NAVIGATION
        ========================== */}

        <section className="border-t border-white/10 py-16">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <a
              href="/work"
              className="text-sm text-white/40 transition hover:text-cyan-300"
            >
              ← Back to Selected Work
            </a>

            <a
              href="/work/flkeyboard"
              className="text-sm text-white/40 transition hover:text-purple-300"
            >
              Next Project · FLKEYBOARD →
            </a>

          </div>

        </section>

      </div>

    </main>
  );
}


/* =========================
   FEATURE CARD
========================== */

function FeatureCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    cyan: "border-cyan-400/10 bg-cyan-400/[0.03] hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] text-cyan-300",
    blue: "border-blue-400/10 bg-blue-400/[0.03] hover:border-blue-400/30 hover:bg-blue-400/[0.06] text-blue-300",
    purple: "border-purple-400/10 bg-purple-400/[0.03] hover:border-purple-400/30 hover:bg-purple-400/[0.06] text-purple-300",
    emerald: "border-emerald-400/10 bg-emerald-400/[0.03] hover:border-emerald-400/30 hover:bg-emerald-400/[0.06] text-emerald-300",
    orange: "border-orange-400/10 bg-orange-400/[0.03] hover:border-orange-400/30 hover:bg-orange-400/[0.06] text-orange-300",
    pink: "border-pink-400/10 bg-pink-400/[0.03] hover:border-pink-400/30 hover:bg-pink-400/[0.06] text-pink-300",
  };

  return (
    <div
      className={`group rounded-3xl border p-6 transition-all duration-300 ${colors[color]}`}
    >
      <div className="mb-5 h-2 w-2 rounded-full bg-current shadow-lg shadow-current" />

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/45">
        {description}
      </p>
    </div>
  );
}


/* =========================
   PROCESS STEP
========================== */

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5">

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs font-semibold text-cyan-300">
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


/* =========================
   TECHNOLOGY CARD
========================== */

function TechCard({
  name,
  description,
  color,
}: {
  name: string;
  description: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    yellow: "border-yellow-400/20 bg-yellow-400/[0.04] text-yellow-300",
    orange: "border-orange-400/20 bg-orange-400/[0.04] text-orange-300",
    blue: "border-blue-400/20 bg-blue-400/[0.04] text-blue-300",
    purple: "border-purple-400/20 bg-purple-400/[0.04] text-purple-300",
  };

  return (
    <div
      className={`rounded-2xl border p-6 ${colors[color]}`}
    >

      <h3 className="text-lg font-semibold">
        {name}
      </h3>

      <p className="mt-2 text-sm text-white/40">
        {description}
      </p>

    </div>
  );
}