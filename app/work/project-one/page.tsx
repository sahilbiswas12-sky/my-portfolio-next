export default function ProjectOnePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white sm:px-8 lg:px-12">

      <div className="mx-auto max-w-5xl">

        {/* =========================
            HEADER
        ========================== */}

        <section className="border-b border-cyan-400/10 pb-16">

          <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-lg shadow-cyan-500/10">
            Project 01
          </p>

          <h1 className="mt-7 text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">

            JARVIS

            <span className="ml-3 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Assistant
            </span>

          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            An AI-powered personal assistant project designed to
            explore voice interaction, automation, intelligent
            responses, and modern web technologies.
          </p>

        </section>


        {/* =========================
            PROJECT PREVIEW
        ========================== */}

        <section className="py-16">

          <div className="relative flex min-h-90 items-center justify-center overflow-hidden rounded-4xl border border-cyan-400/10 bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 shadow-2xl shadow-cyan-500/5">

            {/* Glow */}

            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="absolute h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

            {/* JARVIS Logo */}

            <div className="relative text-center">

              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-cyan-300/30 bg-black/40 shadow-2xl shadow-cyan-500/20">

                <span className="text-7xl font-bold tracking-[-0.08em] text-cyan-300">
                  J
                </span>

              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/70">
                Intelligent AI Assistant
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            TECHNOLOGIES
        ========================== */}

        <section className="border-b border-white/10 pb-16">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technologies
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
              JavaScript
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              AI
            </span>

            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
              Web APIs
            </span>

            <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-300">
              Voice Interaction
            </span>

          </div>

        </section>


        {/* =========================
            PROJECT OVERVIEW
        ========================== */}

        <section className="grid gap-12 py-16 md:grid-cols-2">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About the project
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building a smarter digital assistant.
            </h2>

          </div>

          <div>

            <p className="leading-8 text-white/50">
              JARVIS is an experimental AI assistant project focused
              on creating a more interactive and intelligent digital
              experience. The project explores how users can interact
              with technology through natural commands, automation,
              voice interaction, and AI-powered responses.
            </p>

          </div>

        </section>


        {/* =========================
            FEATURES
        ========================== */}

        <section className="border-t border-white/10 py-16">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            Key Features
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/3 p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/6">

              <div className="text-2xl text-cyan-300">
                ◉
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                AI Interaction
              </h3>

              <p className="mt-3 leading-7 text-white/40">
                Designed to experiment with intelligent responses
                and AI-powered interactions.
              </p>

            </div>


            <div className="rounded-2xl border border-blue-400/10 bg-blue-400/3 p-6 transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/6">

              <div className="text-2xl text-blue-300">
                ◇
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Voice Interaction
              </h3>

              <p className="mt-3 leading-7 text-white/40">
                Explores voice-based interaction and browser
                capabilities for a more natural experience.
              </p>

            </div>


            <div className="rounded-2xl border border-purple-400/10 bg-purple-400/3 p-6 transition duration-300 hover:border-purple-400/30 hover:bg-purple-400/6">

              <div className="text-2xl text-purple-300">
                ✦
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Automation
              </h3>

              <p className="mt-3 leading-7 text-white/40">
                Focused on automating useful tasks and creating
                practical assistant-style functionality.
              </p>

            </div>


            <div className="rounded-2xl border border-pink-400/10 bg-pink-400/3 p-6 transition duration-300 hover:border-pink-400/30 hover:bg-pink-400/6">

              <div className="text-2xl text-pink-300">
                ✧
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Modern Web Experience
              </h3>

              <p className="mt-3 leading-7 text-white/40">
                Built to explore modern web technologies and
                responsive interactive interfaces.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            PROJECT LINKS
        ========================== */}

        <section className="border-t border-white/10 pt-12">

          <div className="flex flex-wrap gap-4">

            {/* Replace # with your real project URL later */}

            <a
              href="#"
              className="rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
            >
              View Project →
            </a>

            {/* Replace # with your GitHub URL later */}

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/3 px-6 py-3 text-sm font-medium text-white/70 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              GitHub ↗
            </a>

          </div>

        </section>


        {/* =========================
            BACK TO WORK
        ========================== */}

        <div className="mt-16">

          <a
            href="/work"
            className="text-sm font-medium text-white/40 transition hover:text-cyan-300"
          >
            ← Back to selected work
          </a>

        </div>

      </div>

    </main>
  );
}