import type { Metadata } from "next";
import OfferLettersSection from "../components/OfferLettersSection";

export const metadata: Metadata = {
  title: "Internships | Sahil Biswas",
  description:
    "Internship opportunities and offer letters received by Sahil Biswas across frontend AI engineering, web development and content writing.",
};

export default function InternshipsPage() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-18 text-white"
    >
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[5%] top-[10%] h-105 w-105 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-[10%] top-[20%] h-115 w-115 rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[52px_52px]" />
      </div>

      <div className="relative">
        <section className="mx-auto max-w-7xl px-6 pb-8 pt-24 sm:px-8 sm:pt-32 lg:px-12">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Experience Evidence
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            Internship opportunities and
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              professional learning.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            A transparent record of internship offers and confirmations I have
            received while developing practical skills across web development,
            frontend AI engineering and content writing.
          </p>
        </section>

        <OfferLettersSection />
      </div>
    </main>
  );
}
