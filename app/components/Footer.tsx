import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Internships", href: "/internships" },
  { name: "Skills", href: "/skills" },
  { name: "Certificates", href: "/certificates" },
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sahilbiswas12-sky",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sahil-biswas-827337287/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -bottom-50 left-[20%] h-100 w-100 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-[10%] top-0 h-87.5 w-87.5 rounded-full bg-purple-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Introduction */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 text-sm font-bold text-black">
                S
              </div>

              <div>
                <p className="font-semibold">Sahil Biswas</p>

                <p className="mt-1 text-xs text-white/60">
                  Web Developer · AI Engineer
                </p>
              </div>
            </div>

            <h2 className="mt-10 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Building ideas into{" "}
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                working products.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/50">
              I build practical web applications, modern interfaces,
              AI-assisted experiences, and technology-driven products.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Let&apos;s build something

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Navigation and social links */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.5fr_1fr] sm:gap-12">
            <nav aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/0">
                Navigation
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-cyan-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Connect
              </p>

              <div className="mt-6 space-y-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-cyan-300"
                  >
                    {item.name} ↗
                  </a>
                ))}

                <Link
                  href="/contact"
                  className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-cyan-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs uppercase tracking-[0.18em] text-white/60">
              Available for opportunities
            </span>
          </div>

          <p className="text-xs text-white/60">
            © {currentYear} Sahil Biswas. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}