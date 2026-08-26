
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | Sahil Biswas",
  description:
    "Certificates earned by Sahil Biswas across software engineering, web development, AI prompting, digital business and content writing.",
};

const certificates = [
  {
    title: "Introduction to Digital Business Skills",
    issuer: "HP LIFE / HP Foundation",
    date: "June 22, 2026",
    image: "/certificates/hp-digital-business.jpg",
    type: "Course Completion",
    description:
      "An online course covering digital-economy fundamentals, digital ways of working, business transformation, tools and organizational skills.",
    skills: ["Digital Business", "Digital Tools", "Business Transformation"],
  },
  {
    title: "AI Prompt Learning Journey",
    issuer: "Naukri Campus",
    date: "May 4, 2026",
    image: "/certificates/naukri-ai-prompt.jpg",
    type: "Learning Journey",
    description:
      "Completed all levels covering prompt fundamentals, structured prompting and advanced prompting techniques.",
    skills: ["Prompt Engineering", "Structured Prompting", "AI Tools"],
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Goldman Sachs / Forage",
    date: "February 7, 2025",
    image: "/certificates/goldman-sachs-software-engineering.jpg",
    type: "Job Simulation",
    description:
      "Completed a software-engineering simulation that included a practical password-security investigation task.",
    skills: ["Software Engineering", "Password Security", "Problem Solving"],
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. / Forage",
    date: "August 6, 2025",
    image: "/certificates/jpmorgan-software-engineering.jpg",
    type: "Job Simulation",
    description:
      "Completed practical tasks involving project setup, Kafka, H2, REST integration and a REST API controller.",
    skills: ["Kafka", "REST APIs", "H2", "Software Engineering"],
  },
  {
    title: "Content Writing Internship",
    issuer: "InAmigos Foundation",
    date: "May 8, 2026",
    image: "/certificates/inamigos-content-writing.jpg",
    type: "Internship Completion",
    description:
      "Certificate acknowledging completion of a content-writing internship from April 13 to April 26, 2026.",
    skills: ["Content Writing", "Communication", "Research"],
  },
  {
    title: "Web Development Internship",
    issuer: "SkillCraft Technology",
    date: "October 1, 2025",
    image: "/certificates/skillcraft-web-development.jpg",
    type: "Internship Completion",
    description:
      "Completed a one-month web-development internship from September 1 to September 30, 2025.",
    skills: ["Web Development", "Frontend Development", "Project Work"],
  },
  {
    title: "Web Development Virtual Internship",
    issuer: "Pinnacle Labs",
    date: "August 27, 2025",
    image: "/certificates/pinnacle-web-development.jpg",
    type: "Internship Completion",
    description:
      "Completed a four-week virtual web-development internship from July 21 to August 20, 2025.",
    skills: ["Web Development", "Remote Collaboration", "Project Work"],
  },
  {
    title: "Web Development Internship",
    issuer: "Codveda Technologies",
    date: "May 10, 2026",
    image: "/certificates/codveda-web-development.jpg",
    type: "Internship Completion",
    description:
      "Certificate recording completion of a web-development internship during April and May 2026.",
    skills: ["Web Development", "Communication", "Professional Learning"],
  },
];

export default function CertificatesPage() {
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
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Learning and Achievement
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            Certificates and
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              professional learning.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            A collection of courses, simulations and internship certificates
            supporting my continued development across technology, AI and
            professional skills.
          </p>
        </section>

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {certificates.map((certificate) => (
              <article
                key={`${certificate.issuer}-${certificate.title}`}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/2.5 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${certificate.title} certificate`}
                  className="relative block aspect-4/3 overflow-hidden border-b border-white/10 bg-white"
                >
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate issued to Sahil Biswas by ${certificate.issuer}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
                  />

                  <span className="absolute bottom-4 right-4 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    View certificate ↗
                  </span>
                </a>

                <div className="p-7 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                        {certificate.issuer}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold">
                        {certificate.title}
                      </h2>
                    </div>

                    <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-xs text-purple-300">
                      {certificate.type}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-white/45">
                    {certificate.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                      Issued
                    </p>
                    <p className="mt-2 text-sm text-white/65">
                      {certificate.date}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-white/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}