export default function ProjectThreePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
          Project 03
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          PG-Life
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
          A full-stack property discovery platform designed to help
          users explore PG accommodations through responsive
          interfaces and database-driven functionality.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-300">
            HTML
          </span>

          <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            CSS
          </span>

          <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
            JavaScript
          </span>

          <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
            PHP
          </span>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            MySQL
          </span>
        </div>

        <div className="mt-16 rounded-4xl border border-emerald-400/10 bg-emerald-400/3 p-8">
          <h2 className="text-2xl font-semibold">
            Project Overview
          </h2>

          <p className="mt-4 leading-8 text-white/50">
            This project explores full-stack web development,
            property discovery, responsive interfaces, database
            integration, and practical user-focused functionality.
          </p>
        </div>

      </div>
    </main>
  );
}