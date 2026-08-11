import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* =========================
            HEADER
        ========================== */}

        <section className="border-b border-cyan-400/10 pb-20 pt-20 sm:pb-28 sm:pt-24">

          <div className="max-w-5xl">

            <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-lg shadow-cyan-500/10">
              Selected Work
            </p>

            <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-8xl">

              Things I&apos;ve
              <br />

              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                built.
              </span>

            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              A collection of projects exploring web development,
              AI, interactive experiences, responsive design,
              and practical digital products.
            </p>

          </div>

        </section>


        {/* =========================
            PROJECT GRID
        ========================== */}

        <section className="py-20 sm:py-24">

          <div className="grid gap-8 md:grid-cols-2">


            {/* =========================
                PROJECT 01 — JARVIS
            ========================== */}

            <article className="group overflow-hidden rounded-4xl border border-cyan-400/10 bg-white/3 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10">

              <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20">

                <div className="absolute h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl transition duration-700 group-hover:scale-150" />

                <div className="relative text-center">

                  <div className="text-6xl font-bold tracking-tighter text-cyan-300/80 transition duration-500 group-hover:scale-110">
                    J
                  </div>

                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-300/50">
                    AI Assistant
                  </p>

                </div>

                <span className="absolute right-6 top-6 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-300">
                  01
                </span>

              </div>


              <div className="p-7 sm:p-8">

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                  AI · Web Development
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  JARVIS
                </h2>

                <p className="mt-4 leading-7 text-white/45">
                  An AI-powered personal assistant project designed
                  to explore voice interaction, automation, intelligent
                  responses, and modern web technologies.
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-300">
                    JavaScript
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs text-blue-300">
                    AI
                  </span>

                  <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1.5 text-xs text-purple-300">
                    Web APIs
                  </span>

                </div>


                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href="/work/project-one"
                    className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    View Project →
                  </a>

                  <a
                    href="#"
                    className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>


            {/* =========================
                PROJECT 02 — FLKEYBOARD
            ========================== */}

            <article className="group overflow-hidden rounded-4xl border border-purple-400/10 bg-white/3 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/10">

              <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20">

                <div className="absolute h-48 w-48 rounded-full bg-purple-400/20 blur-3xl transition duration-700 group-hover:scale-150" />

                <div className="relative">

                  <div className="grid grid-cols-6 gap-1.5 rounded-xl border border-white/10 bg-black/40 p-3 shadow-2xl">

                    {Array.from({ length: 18 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-7 w-7 rounded-md border border-purple-300/20 bg-purple-300/10 transition duration-300 group-hover:bg-purple-300/20 sm:h-8 sm:w-8"
                      />
                    ))}

                  </div>

                  <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-purple-300/60">
                    Interactive Keyboard
                  </p>

                </div>

                <span className="absolute right-6 top-6 rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-xs text-purple-300">
                  02
                </span>

              </div>


              <div className="p-7 sm:p-8">

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
                  Interactive Web Application
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  FLKEYBOARD
                </h2>

                <p className="mt-4 leading-7 text-white/45">
                  An interactive keyboard-based web project focused
                  on responsive interfaces, JavaScript interactions,
                  keyboard events, and engaging user experiences.
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1.5 text-xs text-purple-300">
                    HTML
                  </span>

                  <span className="rounded-full border border-pink-400/20 bg-pink-400/5 px-3 py-1.5 text-xs text-pink-300">
                    CSS
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs text-blue-300">
                    JavaScript
                  </span>

                </div>


                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href="/work/project-two"
                    className="rounded-full bg-purple-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-purple-300"
                  >
                    View Project →
                  </a>

                  <a
                    href="#"
                    className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-purple-300"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>


            {/* =========================
                PROJECT 03 — PG-LIFE
            ========================== */}

            <article className="group overflow-hidden rounded-4xl border border-emerald-400/10 bg-white/3 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/10">

              <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-linear-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20">

                <div className="absolute h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl transition duration-700 group-hover:scale-150" />

                <div className="relative text-center">

                  <div className="rounded-2xl border border-emerald-300/20 bg-black/30 px-8 py-6">

                    <div className="text-4xl font-bold text-emerald-300">
                      PG
                    </div>

                    <div className="mt-1 text-xs uppercase tracking-[0.25em] text-emerald-300/50">
                      Life
                    </div>

                  </div>

                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-emerald-300/60">
                    Property Platform
                  </p>

                </div>

                <span className="absolute right-6 top-6 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-300">
                  03
                </span>

              </div>


              <div className="p-7 sm:p-8">

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                  Full-Stack Web Development
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  PG-Life
                </h2>

                <p className="mt-4 leading-7 text-white/45">
                  A full-stack property discovery platform designed
                  to help users explore PG accommodations through
                  responsive interfaces and database-driven functionality.
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full border border-orange-400/20 bg-orange-400/5 px-3 py-1.5 text-xs text-orange-300">
                    HTML
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs text-blue-300">
                    CSS
                  </span>

                  <span className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-1.5 text-xs text-yellow-300">
                    JavaScript
                  </span>

                  <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5 text-xs text-green-300">
                    PHP
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-300">
                    MySQL
                  </span>

                </div>


                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href="/work/project-three"
                    className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
                  >
                    View Project →
                  </a>

                  <a
                    href="#"
                    className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:border-emerald-400/30 hover:text-emerald-300"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>


            {/* =========================
                PROJECT 04 — PORTFOLIO
            ========================== */}

            <article className="group overflow-hidden rounded-4xl border border-orange-400/10 bg-white/3 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-orange-500/10">

              <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-linear-to-br from-orange-500/20 via-red-500/10 to-purple-500/20">

                <div className="absolute h-48 w-48 rounded-full bg-orange-400/20 blur-3xl transition duration-700 group-hover:scale-150" />

                <div className="relative text-center">

                  <div className="text-5xl font-bold tracking-tight text-orange-300">
                    SB
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-orange-300/50">
                    Personal Portfolio
                  </div>

                </div>

                <span className="absolute right-6 top-6 rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-xs text-orange-300">
                  04
                </span>

              </div>


              <div className="p-7 sm:p-8">

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-400">
                  Personal Website
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Sahil Biswas Portfolio
                </h2>

                <p className="mt-4 leading-7 text-white/45">
                  A modern personal portfolio designed to showcase
                  development experience, technical skills, projects,
                  certifications, and professional background.
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-300">
                    Next.js
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs text-blue-300">
                    React
                  </span>

                  <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1.5 text-xs text-purple-300">
                    Tailwind CSS
                  </span>

                </div>


                <div className="mt-8 flex flex-wrap gap-3">

                  <Link
                    href="/"
                    className="rounded-full bg-orange-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-300"
                  >
                    View Portfolio →
                  </Link>

                  <a
                    href="https://github.com/sahilbiswas12-sky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:border-orange-400/30 hover:text-orange-300"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* =========================
            BOTTOM CTA
        ========================== */}

        <section className="border-t border-white/10 py-20 sm:py-24">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Have an idea?
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

              Let&apos;s create something

              <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}worth remembering.
              </span>

            </h2>

            <a
              href="/contact"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
            >
              Start a project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </section>

      </div>

    </main>
  );
}