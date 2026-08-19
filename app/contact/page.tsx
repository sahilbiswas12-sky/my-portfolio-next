export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* =========================
            HEADER
        ========================== */}

        <section className="border-b border-cyan-400/10 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-36">
          <div className="max-w-6xl">

            <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-lg shadow-cyan-500/10">
              Contact
            </p>

            <h1 className="mt-8 max-w-6xl text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="block">
                Let&apos;s make something
              </span>

              <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                great together.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Have a project, idea, or opportunity in mind? I&apos;d love to
              hear about it.
            </p>

          </div>
        </section>

        {/* =========================
            CONTACT CONTENT
        ========================== */}

        <section className="grid gap-16 py-20 sm:py-24 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Get in touch
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Start a conversation.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-white/50">
              Tell me a little about what you&apos;re working on and what
              you&apos;d like to build. I&apos;ll get back to you as soon as
              possible.
            </p>

            {/* EMAIL */}

            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/70">
                Email
              </p>

              <a
                href="mailto:sahilbiswas890@gmail.com"
                className="mt-3 inline-block break-all text-lg font-medium text-white transition hover:text-cyan-300"
              >
                sahilbiswas890@gmail.com
              </a>
            </div>

            {/* SOCIAL */}

            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/70">
                Social
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/sahil-biswas-827337287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-blue-400/20 bg-blue-400/5 px-5 py-2.5 text-sm font-medium text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-200"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/sahilbiswas12-sky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-purple-400/20 bg-purple-400/5 px-5 py-2.5 text-sm font-medium text-purple-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-400/10 hover:text-purple-200"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.instagram.com/sahil_biswas_14/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-pink-400/20 bg-pink-400/5 px-5 py-2.5 text-sm font-medium text-pink-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-400/10 hover:text-pink-200"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}

          <div className="rounded-4xl border border-cyan-400/10 bg-linear-to-br from-cyan-400/5 via-blue-400/3 to-purple-500/5 p-6 shadow-2xl shadow-cyan-500/3 sm:p-8">
            <form
              action="/api/contact"
              method="POST"
              className="space-y-6"
            >

              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/3 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/20 focus:border-blue-400/40 focus:bg-blue-400/3 focus:ring-2 focus:ring-blue-400/10"
                />
              </div>

              {/* PROJECT TYPE */}

              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  What can I help with?
                </label>

                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-purple-400/40 focus:bg-purple-400/3 focus:ring-2 focus:ring-purple-400/10"
                >
                  <option value="" disabled className="bg-[#050505]">
                    Select an option
                  </option>

                  <option value="website" className="bg-[#050505]">
                    Website
                  </option>

                  <option value="web-app" className="bg-[#050505]">
                    Web Application
                  </option>

                  <option value="ui-ux" className="bg-[#050505]">
                    UI / UX Design
                  </option>

                  <option value="branding" className="bg-[#050505]">
                    Branding
                  </option>

                  <option value="other" className="bg-[#050505]">
                    Something else
                  </option>
                </select>
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  Tell me about the project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your idea..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/3 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-4 text-sm font-bold text-black shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
              >
                Send message

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>
          </div>
        </section>

        {/* =========================
            BOTTOM CTA
        ========================== */}

        <section className="border-t border-cyan-400/10 py-20 sm:py-24">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                Prefer email?
              </p>

              <h2 className="mt-4 break-all text-2xl font-semibold tracking-tight sm:text-4xl">
                <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  sahilbiswas890@gmail.com
                </span>
              </h2>
            </div>

            <a
              href="mailto:sahilbiswas890@gmail.com"
              className="group flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              Send an email

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