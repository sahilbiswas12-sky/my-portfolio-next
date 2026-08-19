"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ACCESSIBILITY */}
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-100 -translate-y-24 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#050505]/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-[#050505]/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">

          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Sahil Biswas home"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-lg transition duration-500 group-hover:bg-purple-400/40" />

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 text-sm font-bold text-black transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                S
              </div>
            </div>

            <span className="text-sm font-semibold tracking-tight text-white">
              Sahil Biswas
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 -z-10 rounded-full border border-cyan-400/20 bg-cyan-400/6" />
                  )}

                  {item.name}

                  {active && (
                    <span className="absolute -bottom-3.25 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Let&apos;s talk

              <span className="transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 md:hidden"
          >
            <div className="flex w-5 flex-col gap-1.25">
              <span
                className={`h-0.5 w-full rounded bg-white transition duration-300 ${
                  menuOpen
                    ? "translate-y-1.75 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-0.5 w-full rounded bg-white transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full rounded bg-white transition duration-300 ${
                  menuOpen
                    ? "-translate-y-1.75 -rotate-45"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pb-10 pt-28">

          <nav className="space-y-2" aria-label="Mobile navigation">
            {navigation.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between rounded-2xl border px-5 py-5 transition ${
                    active
                      ? "border-cyan-400/20 bg-cyan-400/6"
                      : "border-white/5 hover:border-white/10 hover:bg-white/3"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs text-white/25">
                      0{index + 1}
                    </span>

                    <span
                      className={`text-2xl font-semibold ${
                        active
                          ? "text-cyan-300"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Available for opportunities
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-4 text-sm font-semibold text-black"
            >
              Start a Conversation
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}