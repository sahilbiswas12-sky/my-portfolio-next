

import Image from "next/image";

const offerLetters = [
  {
    company: "FlyRank AI",
    role: "Front-End AI Engineering Intern",
    image: "/offer-letters/flyrank.png",
    issued: "July 31, 2026",
    duration: "August 1–31, 2026",
    location: "Remote / online",
    program: "Unpaid educational internship",
    summary:
      "An official internship confirmation for a structured, practical frontend and AI engineering program.",
    status: "Confirmed",
    needsVerification: false,
  },
  {
    company: "SkillCraft Technology",
    role: "Web Development Intern",
    image: "/offer-letters/skillcraft.jpg",
    issued: "August 28, 2025",
    duration: "September 1–30, 2025",
    location: "Not stated in the letter",
    program: "One-month educational internship",
    summary:
      "A one-month web development internship intended to provide hands-on experience in the field.",
    status: "Offer received",
    needsVerification: false,
  },
  {
    company: "Codveda Technologies",
    role: "Web Development Intern",
    image: "/offer-letters/codveda.jpg",
    issued: "April 8, 2026",
    duration: "Not stated in the letter",
    location: "Not stated in the letter",
    program: "Web development internship",
    summary:
      "An internship offer involving web design, development and implementation work on web applications.",
    status: "Offer received",
    needsVerification: false,
  },
  {
    company: "Pinnacle Labs Pvt. Ltd.",
    role: "Web Development Intern",
    image: "/offer-letters/pinnacle.jpg",
    issued: "July 19, 2025",
    duration: "One month from July 21, 2025",
    location: "Kolkata, India",
    program: "Web development internship",
    summary:
      "A focused one-month program designed to provide practical experience and strengthen software-development skills.",
    status: "Offer received",
    needsVerification: false,
  },
  {
    company: "InAmigos Foundation",
    role: "Content Writer Intern",
    image: "/offer-letters/inamigos.jpg",
    issued: "April 13, 2025",
    duration: "March 13–April 26, 2026 (as printed)",
    location: "Generally remote; fieldwork may be required",
    program: "Flexible-hours internship",
    summary:
      "A content-writing internship with flexible working hours and responsibilities described in the offer letter.",
    status: "Dates need verification",
    needsVerification: true,
  },
];

export default function OfferLettersSection() {
  return (
    <section
      id="offer-letters"
      className="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
          Professional Journey
        </p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Internship offer letters.
          </h2>

          <p className="max-w-xl leading-8 text-white/50 lg:justify-self-end">
            A record of internship opportunities offered to me across web
            development, frontend AI engineering and content writing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {offerLetters.map((offer) => (
            <article
              key={offer.company}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/2.5 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5"
            >
              <a
                href={offer.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${offer.company} offer letter`}
                className="relative block aspect-4/3 overflow-hidden border-b border-white/10 bg-white"
              >
                <Image
                  src={offer.image}
                  alt={`${offer.company} offer letter for Sahil Biswas`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
                />

                <span className="absolute bottom-4 right-4 rounded-full border border-black/10 bg-black/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  View full letter ↗
                </span>
              </a>

              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                      {offer.company}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {offer.role}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                      offer.needsVerification
                        ? "border-amber-400/25 bg-amber-400/10 text-amber-300"
                        : "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                    }`}
                  >
                    {offer.status}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-white/45">
                  {offer.summary}
                </p>

                <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Detail label="Issued" value={offer.issued} />
                  <Detail label="Duration" value={offer.duration} />
                  <Detail label="Location" value={offer.location} />
                  <Detail label="Program" value={offer.program} />
                </dl>

                {offer.needsVerification && (
                  <p className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm leading-6 text-amber-100/65">
                    The issue date and internship period printed on this letter
                    appear inconsistent. Verify them before presenting this as
                    completed experience.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <dt className="text-xs uppercase tracking-[0.18em] text-white/60">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-6 text-white/65">{value}</dd>
    </div>
  );
}