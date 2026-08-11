"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">

        {/* =========================
            LOGO
        ========================== */}

        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 text-sm font-bold text-black shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:rotate-12">
            S
          </span>

          <span className="hidden text-sm font-medium text-white sm:block">
            Sahil Biswas
          </span>
        </Link>


        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <div className="hidden items-center gap-1 md:flex">

          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Home
          </Link>

          <Link
            href="/work"
            className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Contact
          </Link>

        </div>


        {/* =========================
            DESKTOP CTA
        ========================== */}

        <Link
          href="/contact"
          className="hidden rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 sm:block"
        >
          Let&apos;s talk →
        </Link>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 md:hidden"
        >
          <span className="flex flex-col gap-1.5">

            <span
              className={`block h-px w-4 bg-white transition-transform duration-300 ${
                isOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-4 bg-white transition-transform duration-300 ${
                isOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />

          </span>
        </button>

      </nav>


      {/* =========================
          MOBILE MENU
      ========================== */}

      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-105 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8">

          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-2xl px-5 py-4 text-sm text-white/70 transition hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Home
            </Link>

            <Link
              href="/work"
              onClick={closeMenu}
              className="rounded-2xl px-5 py-4 text-sm text-white/70 transition hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Work
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-2xl px-5 py-4 text-sm text-white/70 transition hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-2xl px-5 py-4 text-sm text-white/70 transition hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Contact
            </Link>


            {/* MOBILE CTA */}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 px-5 py-4 text-center text-sm font-semibold text-black transition hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Let&apos;s talk →
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}