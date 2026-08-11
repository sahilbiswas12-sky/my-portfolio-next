export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative border-b border-cyan-400/10 pb-24 pt-20 sm:pb-32 sm:pt-28">

          {/* Background glow */}

          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

          <div className="relative max-w-6xl">

            {/* STATUS */}

            <div className="mb-10 flex flex-wrap items-center gap-3">

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 shadow-lg shadow-emerald-500/10">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                Available for opportunities

              </span>

              <span className="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-xs text-white/40">
                Durgapur, India
              </span>

            </div>


            {/* MAIN HEADING */}

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Web Developer · AI Engineer · Business Professional
            </p>


            <h1 className="mt-7 max-w-6xl text-5xl font-bold leading-[0.92] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">

              I build digital
              <br />

              <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                experiences & systems.
              </span>

            </h1>


            {/* INTRO */}

            <p className="mt-10 max-w-3xl text-base leading-8 text-white/50 sm:text-lg">

              I&apos;m <span className="font-medium text-white/80">Sahil Biswas</span>,
              a Web Developer, AI Engineer, and Business Professional focused
              on building modern web experiences, practical digital products,
              and technology-driven solutions.

            </p>


            {/* BUTTONS */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="/work"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
              >

                Explore my work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>


              <a
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/3 px-7 py-4 text-sm font-semibold text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
              >

                Let&apos;s talk

                <span>↗</span>

              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK INTRO
        ====================================================== */}

        <section className="border-b border-white/10 py-20 sm:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                What I do
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Technology,
                <span className="text-white/35">
                  {" "}creativity & business.
                </span>
              </h2>

            </div>


            <div className="space-y-6 text-base leading-8 text-white/50">

              <p>
                My experience combines frontend and full-stack web development,
                AI-focused work, database technologies, and professional
                business development.
              </p>

              <p>
                I enjoy taking an idea from concept to implementation —
                designing interfaces, building functional systems,
                connecting technologies, and creating experiences that
                are useful and easy to understand.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <section className="border-b border-white/10 py-20 sm:py-24">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
                Capabilities
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                What I bring
                <span className="text-white/35"> to the table.</span>
              </h2>

            </div>

            <a
              href="/about"
              className="w-fit text-sm text-white/40 transition hover:text-cyan-300"
            >
              View full profile →
            </a>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


            {/* WEB */}

            <div className="group rounded-3xl border border-cyan-400/10 bg-linear-to-br from-cyan-400/8 to-transparent p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300">
                &lt;/&gt;
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Web Development
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                Responsive and modern web applications using JavaScript,
                React, Next.js, Node.js, PHP, databases, and modern CSS.
              </p>

            </div>


            {/* AI */}

            <div className="group rounded-3xl border border-purple-400/10 bg-linear-to-br from-purple-400/8 to-transparent p-7 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-400/10 text-xl text-purple-300">
                AI
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                AI & Intelligent Systems
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                AI-powered experiences, automation, intelligent interfaces,
                APIs, and practical applications of modern AI technologies.
              </p>

            </div>


            {/* BUSINESS */}

            <div className="group rounded-3xl border border-orange-400/10 bg-linear-to-br from-orange-400/8 to-transparent p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:shadow-xl hover:shadow-orange-500/10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10 text-xl text-orange-300">
                ↗
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Business & Growth
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                Business development, communication, digital marketing,
                client interaction, and technology-focused problem solving.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURED WORK
        ====================================================== */}

        <section className="border-b border-white/10 py-20 sm:py-24">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                Featured Work
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Projects I&apos;ve
                <span className="text-white/35"> built.</span>
              </h2>

            </div>


            <a
              href="/work"
              className="w-fit text-sm text-white/40 transition hover:text-emerald-300"
            >
              View all projects →
            </a>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">


            {/* JARVIS */}

            <a
              href="/work"
              className="group rounded-3xl border border-cyan-400/10 bg-linear-to-br from-cyan-400/8 to-transparent p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
            >

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                01 · AI
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                JARVIS
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                AI-powered personal assistant exploring intelligent
                interactions and automation.
              </p>

              <span className="mt-7 inline-block text-sm text-cyan-300 transition group-hover:translate-x-1">
                Explore →
              </span>

            </a>


            {/* FLKEYBOARD */}

            <a
              href="/work"
              className="group rounded-3xl border border-purple-400/10 bg-linear-to-br from-purple-400/8 to-transparent p-7 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30"
            >

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
                02 · Interactive
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                FLKEYBOARD
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                Interactive web experience focused on keyboard events,
                JavaScript, and responsive interfaces.
              </p>

              <span className="mt-7 inline-block text-sm text-purple-300 transition group-hover:translate-x-1">
                Explore →
              </span>

            </a>


            {/* PG-LIFE */}

            <a
              href="/work"
              className="group rounded-3xl border border-emerald-400/10 bg-linear-to-br from-emerald-400/8 to-transparent p-7 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30"
            >

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                03 · Full Stack
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                PG-Life
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                Database-driven property discovery platform built
                around practical full-stack functionality.
              </p>

              <span className="mt-7 inline-block text-sm text-emerald-300 transition group-hover:translate-x-1">
                Explore →
              </span>

            </a>

          </div>

        </section>


        {/* =====================================================
            EXPERIENCE SNAPSHOT
        ====================================================== */}

        <section className="border-b border-white/10 py-20 sm:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Experience
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Technology meets
                <span className="text-white/35">
                  {" "}professional experience.
                </span>
              </h2>

            </div>


            <div className="space-y-4">


              <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/3 p-5 sm:flex-row">

                <div>
                  <h3 className="font-semibold">
                    Front-End AI Engineer
                  </h3>

                  <p className="mt-1 text-sm text-cyan-300/70">
                    FlyRank AI
                  </p>
                </div>

                <span className="text-sm text-white/30">
                  Present
                </span>

              </div>


              <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/3 p-5 sm:flex-row">

                <div>
                  <h3 className="font-semibold">
                    Senior Business Development Executive
                  </h3>

                  <p className="mt-1 text-sm text-orange-300/70">
                    Technext Technosoft Pvt. Ltd.
                  </p>
                </div>

                <span className="text-sm text-white/30">
                  Present
                </span>

              </div>


              <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/3 p-5 sm:flex-row">

                <div>
                  <h3 className="font-semibold">
                    Web Developer
                  </h3>

                  <p className="mt-1 text-sm text-purple-300/70">
                    SkillCraft Technology
                  </p>
                </div>

                <span className="text-sm text-white/30">
                  2025
                </span>

              </div>


              <a
                href="/about"
                className="inline-block pt-3 text-sm text-white/40 transition hover:text-blue-300"
              >
                View complete experience →
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative py-24 sm:py-32">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

          <div className="relative">

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Let&apos;s work together
            </p>

            <div className="mt-6 flex flex-col justify-between gap-10 md:flex-row md:items-end">

              <h2 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">

                Have an idea worth
                <br />

                <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  building?
                </span>

              </h2>


              <a
                href="/contact"
                className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
              >

                Get in touch

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>

            </div>


            <div className="mt-16 flex flex-wrap gap-3">

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300">
                JavaScript
              </span>

              <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs text-blue-300">
                React.js
              </span>

              <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-xs text-purple-300">
                Next.js
              </span>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300">
                Node.js
              </span>

              <span className="rounded-full border border-orange-400/20 bg-orange-400/5 px-4 py-2 text-xs text-orange-300">
                AI
              </span>

              <span className="rounded-full border border-pink-400/20 bg-pink-400/5 px-4 py-2 text-xs text-pink-300">
                Business Development
              </span>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}