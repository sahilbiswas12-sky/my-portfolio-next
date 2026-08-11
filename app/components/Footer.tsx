import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 bg-[#050505] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* =========================
              BRAND
          ========================== */}

          <div className="lg:col-span-2">

            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 text-sm font-bold text-black shadow-lg shadow-cyan-500/20 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                S
              </span>

              <span className="text-lg font-semibold tracking-tight transition group-hover:text-cyan-300">
                Sahil Biswas
              </span>

            </Link>


            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              Web Developer, AI Engineer &amp; Business Professional
              building modern digital experiences, intelligent
              applications, and practical technology solutions.
            </p>


            {/* EMAIL */}

            <a
              href="mailto:sahilbiswas890@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition duration-300 hover:text-cyan-200"
            >
              sahilbiswas890@gmail.com
              <span className="transition-transform duration-300 hover:translate-x-1">
                ↗
              </span>
            </a>

          </div>


          {/* =========================
              NAVIGATION
          ========================== */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Navigation
            </p>


            <nav className="mt-6 flex flex-col gap-4">

              <Link
                href="/"
                className="w-fit text-sm text-white/50 transition duration-300 hover:translate-x-1 hover:text-cyan-300"
              >
                Home
              </Link>

              <Link
                href="/work"
                className="w-fit text-sm text-white/50 transition duration-300 hover:translate-x-1 hover:text-cyan-300"
              >
                Work
              </Link>

              <Link
                href="/about"
                className="w-fit text-sm text-white/50 transition duration-300 hover:translate-x-1 hover:text-cyan-300"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="w-fit text-sm text-white/50 transition duration-300 hover:translate-x-1 hover:text-cyan-300"
              >
                Contact
              </Link>

            </nav>

          </div>


          {/* =========================
              SOCIAL
          ========================== */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
              Connect
            </p>


            <div className="mt-6 flex flex-col gap-4">

              <a
                href="https://www.linkedin.com/in/sahil-biswas-827337287/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-blue-300/70 transition duration-300 hover:translate-x-1 hover:text-blue-300"
              >
                LinkedIn ↗
              </a>


              <a
                href="https://github.com/sahilbiswas12-sky"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-purple-300/70 transition duration-300 hover:translate-x-1 hover:text-purple-300"
              >
                GitHub ↗
              </a>


              <a
                href="https://www.instagram.com/sahil_biswas_14/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-pink-300/70 transition duration-300 hover:translate-x-1 hover:text-pink-300"
              >
                Instagram ↗
              </a>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM BAR
        ========================== */}

        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Sahil Biswas. All rights reserved.
          </p>


          <p className="text-xs text-white/20">
            Designed &amp; built with{" "}
            <span className="text-cyan-400/60">
              Next.js
            </span>
            {" "}and{" "}
            <span className="text-purple-400/60">
              Tailwind CSS
            </span>
          </p>

        </div>


        {/* =========================
            FOOTER ACCENT
        ========================== */}

        <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />

      </div>

    </footer>
  );
}