import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Sahil Biswas",
  description:
    "Future articles from Sahil Biswas about web development, accessibility, AI-assisted engineering and project lessons.",
};

const plannedTopics = [
  {
    number: "01",
    category: "Web Development",
    title: "Building practical React applications",
    description:
      "Lessons from turning project requirements into reusable components, working features and deployed products.",
  },
  {
    number: "02",
    category: "Accessibility",
    title: "Making interfaces work beyond the mouse",
    description:
      "Notes on semantic HTML, keyboard navigation, focus management and useful ARIA patterns.",
  },
  {
    number: "03",
    category: "AI Engineering",
    title: "Adding meaningful AI features to frontend apps",
    description:
      "Practical observations from streaming responses, tool calls, generative UI and failure handling.",
  },
  {
    number: "04",
    category: "Learning in Public",
    title: "What shipping projects teaches that tutorials cannot",
    description:
      "Reflections on debugging, deployment, documentation and understanding the code behind a finished project.",
  },
];

export default function BlogPage() {
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
            Notes and Articles
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            Writing about building,
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              learning and shipping.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            This will be a space for clear, practical writing about web
            development, accessibility, AI-assisted engineering and lessons
            from real projects.
          </p>
        </section>

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="rounded-[2.5rem] border border-purple-400/20 bg-linear-to-br from-purple-400/10 via-blue-400/5 to-cyan-400/10 p-8 sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                  Coming Soon
                </p>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                  The first articles are being prepared.
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-white/70">
                0 published posts
              </span>
            </div>

            <p className="mt-6 max-w-3xl leading-8 text-white/50">
              No articles have been published yet. The topics below show the
              areas I plan to document as I continue building and learning.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
            Planned Topics
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {plannedTopics.map((topic) => (
              <article
                key={topic.number}
                className="rounded-[2rem] border border-white/10 bg-white/2.5 p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">{topic.number}</span>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">
                    Planned
                  </span>
                </div>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
                  {topic.category}
                </p>

                <h2 className="mt-4 text-2xl font-semibold">{topic.title}</h2>

                <p className="mt-5 leading-7 text-white/70">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="rounded-[2.5rem] border border-cyan-400/15 bg-white/2.5 p-8 text-center sm:p-12">
            <h2 className="text-4xl font-semibold">Explore the work now.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/50">
              While the articles are being prepared, you can explore my
              projects, case studies and technical work.
            </p>
            <Link
              href="/work"
              className="mt-8 inline-flex rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1"
            >
              Explore My Work →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}