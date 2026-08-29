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

export default function Navbar() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-100 -translate-y-24 rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-black shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/90 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg"
            aria-label="Sahil Biswas homepage"
          >
            <div className="relative" aria-hidden="true">
              <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-lg transition group-hover:bg-purple-400/40" />

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-300 via-blue-400 to-purple-400 text-sm font-bold text-black transition group-hover:rotate-6 group-hover:scale-110">
                S
              </div>
            </div>

            <span className="text-sm font-semibold tracking-tight text-white">
              Sahil Biswas
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-white/75 transition hover:bg-cyan-400/10 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-300 to-blue-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Let&apos;s talk
              <span
                className="transition group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          <details className="group relative xl:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-300 [&::-webkit-details-marker]:hidden"
            >
              <span
                className="text-xl text-white group-open:hidden"
                aria-hidden="true"
              >
                ☰
              </span>

              <span
                className="hidden text-xl text-white group-open:inline"
                aria-hidden="true"
              >
                ×
              </span>
            </summary>

            <div className="absolute right-0 top-14 w-[min(22rem,calc(100vw-3rem))] overflow-hidden rounded-3xl border border-white/15 bg-[#080808]/98 p-3 shadow-2xl backdrop-blur-2xl">
              <nav className="space-y-1" aria-label="Mobile navigation">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/link flex min-h-12 items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className="text-xs text-white/60"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-semibold text-white/90 group-hover/link:text-cyan-200">
                        {item.name}
                      </span>
                    </span>

                    <span
                      className="text-white/60 transition group-hover/link:translate-x-1 group-hover/link:text-cyan-200"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 px-6 py-4 text-sm font-semibold text-black"
              >
                Start a Conversation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}