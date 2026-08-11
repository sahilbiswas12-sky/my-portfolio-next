export default function ProjectTwoPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
          Project 02
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          FLKEYBOARD
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
          An interactive keyboard-based web project focused on
          responsive interfaces, JavaScript interactions, keyboard
          events, and engaging user experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-300">
            HTML
          </span>

          <span className="rounded-full border border-pink-400/20 bg-pink-400/10 px-4 py-2 text-sm text-pink-300">
            CSS
          </span>

          <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            JavaScript
          </span>
        </div>

        <div className="mt-16 rounded-4xl border border-purple-400/10 bg-purple-400/3 p-8">
          <h2 className="text-2xl font-semibold">
            Project Overview
          </h2>

          <p className="mt-4 leading-8 text-white/50">
            This project demonstrates interactive web development,
            keyboard-based interactions, responsive design, and
            frontend JavaScript functionality.
          </p>
        </div>

      </div>
    </main>
  );
}