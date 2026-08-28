export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#050505] pt-18 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Hero */}
        <section className="border-b border-cyan-400/10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl">
            <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-lg shadow-cyan-500/10">
              About Me
            </p>

            <h1 className="mt-7 max-w-6xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:mt-8 sm:text-6xl lg:text-7xl xl:text-8xl">
              I build digital
              <br />

              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                experiences &amp; systems.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-7 text-white/55 sm:mt-10 sm:text-lg sm:leading-8">
              I&apos;m Sahil Biswas, a Full-Stack Web Developer, AI
              Engineer, and Business Professional focused on building
              modern, responsive, and user-centered digital products.
            </p>
          </div>
        </section>

        {/* Professional summary */}
        <section className="grid items-start gap-12 border-b border-cyan-400/10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 lg:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Profile
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              A professional who thinks{" "}
              <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                beyond the code.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-7 text-white/55 sm:space-y-6 sm:leading-8 lg:justify-self-end">
            <p>
              I am a Full-Stack Web Developer and Computer Science
              &amp; Design graduate with hands-on experience across web
              development, AI engineering, business development, and
              professional environments.
            </p>

            <p>
              My technical work combines frontend development, backend
              systems, databases, APIs, responsive design,
              cybersecurity fundamentals, and modern web technologies.
            </p>

            <p>
              Alongside development, my business experience has
              strengthened my communication, problem-solving, client
              interaction, and professional collaboration skills.
            </p>

            <p>
              I enjoy turning ideas into practical digital products
              while maintaining a strong focus on usability,
              performance, clean implementation, and real-world impact.
            </p>
          </div>
        </section>

        {/* Keep your existing EXPERIENCE section and everything below it */}


        {/* =========================
            EXPERIENCE
        ========================== */}

        <section className="border-b border-cyan-400/10 py-20 sm:py-28">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Experience
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">

              Where I&apos;ve
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}worked.
              </span>

            </h2>

            <p className="mt-6 max-w-2xl leading-7 text-white/45">
              Experience across technology, AI, web development,
              business development, customer-focused operations,
              and professional environments.
            </p>

          </div>


          <div className="mt-16 space-y-5">


            {/* EXPERIENCE 01 */}

            <ExperienceCard
              number="01"
              role="Front-End AI Engineer"
              company="FlyRank AI"
              type="Internship"
              duration="Aug 2026 — Present"
              location="Durgapur, West Bengal, India · Remote"
              skills="JavaScript · HTML & CSS · Database Management · SQL · MongoDB · DBMS"
              current
              accent="cyan"
            />


            {/* EXPERIENCE 02 */}

            <ExperienceCard
              number="02"
              role="Senior Business Development Executive"
              company="Technext Technosoft Pvt. Ltd."
              type="Full-time"
              duration="Aug 2026 — Present"
              location="Durgapur, West Bengal, India · On-site"
              skills="Digital Marketing · English Proficiency · Client Communication"
              current
              accent="blue"
            />


            {/* EXPERIENCE 03 */}

            <ExperienceCard
              number="03"
              role="Business Development Executive"
              company="Webb4Biz"
              type="Full-time"
              duration="Apr 2026 — Jul 2026"
              location="Durgapur, West Bengal, India · On-site"
              skills="Digital Marketing · English Proficiency · Business Development"
              accent="purple"
            />


            {/* EXPERIENCE 04 */}

            <ExperienceCard
              number="04"
              role="Web Developer"
              company="Codevda Technologies"
              type="Internship"
              duration="Apr 2026"
              location="Chandrapur, Maharashtra, India · Remote"
              skills="CSS Flexbox · User Authentication · JavaScript · HTML · Responsive Design"
              accent="cyan"
            />


            {/* EXPERIENCE 05 */}

            <ExperienceCard
              number="05"
              role="Production Specialist"
              company="Fusion CX"
              type="Full-time"
              duration="Dec 2025 — Mar 2026"
              location="Durgapur, West Bengal, India · On-site"
              skills="Production Experience · Customer Support · Professional Communication"
              accent="blue"
            />


            {/* EXPERIENCE 06 */}

            <ExperienceCard
              number="06"
              role="Web Developer"
              company="SkillCraft Technology"
              type="Internship"
              duration="Sep 2025"
              location="Mumbai, Maharashtra, India · Remote"
              skills="JavaScript · HTML & CSS · React.js"
              accent="purple"
            />


            {/* EXPERIENCE 07 */}

            <ExperienceCard
              number="07"
              role="Web Developer"
              company="Pinnacle Labs"
              type="Internship"
              duration="Jul 2025"
              location="Kolkata, West Bengal, India · Remote"
              skills="JavaScript ES6+ · HTML5 · Responsive Design · Web Development"
              accent="cyan"
            />


            {/* EXPERIENCE 08 */}

            <ExperienceCard
              number="08"
              role="Web Developer"
              company="Intershala Trainings"
              type="Apprenticeship"
              duration="Dec 2024 — Mar 2025"
              location="Gurgaon, Haryana, India · Remote"
              skills="JavaScript · HTML & CSS · SQL · MongoDB · DBMS"
              accent="blue"
            />

          </div>

        </section>


        {/* =========================
            TECHNICAL SKILLS
        ========================== */}

        <section className="border-b border-cyan-400/10 py-20 sm:py-28">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technical Skills
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">

              Tools I use to turn ideas
              <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}into products.
              </span>

            </h2>

          </div>


          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <SkillCard
              title="Frontend Development"
              skills="HTML · CSS · JavaScript · React.js · Bootstrap · Tailwind CSS · Responsive Design"
              accent="cyan"
            />

            <SkillCard
              title="Backend Development"
              skills="Node.js · Express.js · REST APIs · PHP"
              accent="blue"
            />

            <SkillCard
              title="Database"
              skills="MongoDB · MySQL · DBMS Concepts · Mongoose ODM"
              accent="purple"
            />

            <SkillCard
              title="Cybersecurity"
              skills="Cybersecurity Fundamentals · Secure Coding · Web Application Security · Network Security · OWASP Top 10 · Access Control"
              accent="cyan"
            />

            <SkillCard
              title="Programming"
              skills="JavaScript · Python · Java · C · C++ · SQL"
              accent="blue"
            />

            <SkillCard
              title="Tools & Version Control"
              skills="Git · GitHub · VS Code · npm · Postman · Chrome DevTools"
              accent="purple"
            />

          </div>

        </section>


        {/* =========================
            EDUCATION
        ========================== */}

        <section className="border-b border-cyan-400/10 py-20 sm:py-28">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-blue-400/10 bg-linear-to-br from-cyan-400/6 via-blue-400/3 to-purple-400/6 p-8 shadow-xl shadow-blue-500/5 sm:p-10">

            <div className="flex flex-col justify-between gap-8 md:flex-row">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Bachelor&apos;s Degree
                </p>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  B.Tech — Computer Science & Design
                </h2>

                <p className="mt-3 text-white/50">
                  Dr. B.C. Roy Engineering College,
                  Durgapur, West Bengal
                </p>

              </div>

              <div className="shrink-0">

                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                  2022 — 2026
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CERTIFICATIONS
        ========================== */}

        <section className="border-b border-cyan-400/10 py-20 sm:py-28">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">

            Continuous
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}learning.
            </span>

          </h2>


          <div className="mt-12 flex flex-wrap gap-3">

            {[
              "Google Cybersecurity Professional Certificate",
              "Google AI Essentials",
              "IBM Cybersecurity Fundamentals",
              "Web Development Certification",
              "Software Engineering Job Simulation — JPMorgan Chase",
              "Developer & Technology Job Simulation — Accenture",
              "Technology Job Simulation — Deloitte",
              "Software Engineering Job Simulation — Goldman Sachs",
              "Cybersecurity Analyst Job Simulation — Tata Group",
            ].map((certificate, index) => (

              <span
                key={certificate}
                className={`rounded-full border px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-1 ${
                  index % 3 === 0
                    ? "border-cyan-400/20 bg-cyan-400/5 text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    : index % 3 === 1
                    ? "border-blue-400/20 bg-blue-400/5 text-blue-300 hover:border-blue-400/40 hover:bg-blue-400/10"
                    : "border-purple-400/20 bg-purple-400/5 text-purple-300 hover:border-purple-400/40 hover:bg-purple-400/10"
                }`}
              >
                {certificate}
              </span>

            ))}

          </div>

        </section>


        {/* =========================
            CTA
        ========================== */}

        <section className="py-20 sm:py-28">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Let&apos;s work together
          </p>

          <div className="mt-6 flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

              Have an idea
              <br />

              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                worth building?
              </span>

            </h2>


            <a
              href="/contact"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/25"
            >

              <span>
                Get in touch
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>

          </div>

        </section>

      </div>
    </main>
  );
}


/* =====================================================
   EXPERIENCE CARD
===================================================== */

function ExperienceCard({
  number,
  role,
  company,
  type,
  duration,
  location,
  skills,
  current = false,
  accent = "cyan",
}: {
  number: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  skills: string;
  current?: boolean;
  accent?: "cyan" | "blue" | "purple";
}) {

  const accentStyles = {
    cyan: {
      border: "border-cyan-400/10 hover:border-cyan-400/30",
      glow: "hover:shadow-cyan-500/10",
      number: "text-cyan-400/40",
      role: "group-hover:text-cyan-300",
      company: "text-cyan-300",
      badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
      dot: "bg-cyan-400",
    },

    blue: {
      border: "border-blue-400/10 hover:border-blue-400/30",
      glow: "hover:shadow-blue-500/10",
      number: "text-blue-400/40",
      role: "group-hover:text-blue-300",
      company: "text-blue-300",
      badge: "border-blue-400/20 bg-blue-400/10 text-blue-300",
      dot: "bg-blue-400",
    },

    purple: {
      border: "border-purple-400/10 hover:border-purple-400/30",
      glow: "hover:shadow-purple-500/10",
      number: "text-purple-400/40",
      role: "group-hover:text-purple-300",
      company: "text-purple-300",
      badge: "border-purple-400/20 bg-purple-400/10 text-purple-300",
      dot: "bg-purple-400",
    },
  };

  const style = accentStyles[accent];

  return (
    <article
      className={`group rounded-[2rem] border bg-white/2.5 p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/4.5 ${style.border} ${style.glow} sm:p-8`}
    >

      <div className="flex flex-col gap-6 md:flex-row md:items-start">

        {/* NUMBER */}

        <div
          className={`hidden pt-1 text-sm font-bold md:block ${style.number}`}
        >
          {number}
        </div>


        {/* CONTENT */}

        <div className="min-w-0 flex-1">

          <div className="flex flex-col justify-between gap-4 sm:flex-row">

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <h3
                  className={`text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl ${style.role}`}
                >
                  {role}
                </h3>

                {current && (
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${style.badge}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 animate-pulse rounded-full ${style.dot}`}
                    />

                    Current
                  </span>
                )}

              </div>


              <p className="mt-2 text-sm text-white/45">

                <span className={`font-medium ${style.company}`}>
                  {company}
                </span>

                <span className="mx-2 text-white/20">
                  ·
                </span>

                {type}

              </p>

            </div>


            <p className="shrink-0 text-sm text-white/35">
              {duration}
            </p>

          </div>


          {/* LOCATION */}

          <p className="mt-5 text-sm text-white/35">
            {location}
          </p>


          {/* SKILLS */}

          <div className="mt-5 flex items-start gap-3">

            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />

            <p className="text-sm leading-7 text-white/45">
              {skills}
            </p>

          </div>

        </div>

      </div>

    </article>
  );
}


/* =====================================================
   SKILL CARD
===================================================== */

function SkillCard({
  title,
  skills,
  accent = "cyan",
}: {
  title: string;
  skills: string;
  accent?: "cyan" | "blue" | "purple";
}) {

  const accentStyles = {
    cyan: {
      border: "border-cyan-400/10 hover:border-cyan-400/30",
      background: "hover:bg-cyan-400/[0.04]",
      title: "group-hover:text-cyan-300",
      glow: "hover:shadow-cyan-500/10",
      line: "from-cyan-400 to-blue-500",
    },

    blue: {
      border: "border-blue-400/10 hover:border-blue-400/30",
      background: "hover:bg-blue-400/[0.04]",
      title: "group-hover:text-blue-300",
      glow: "hover:shadow-blue-500/10",
      line: "from-blue-400 to-purple-500",
    },

    purple: {
      border: "border-purple-400/10 hover:border-purple-400/30",
      background: "hover:bg-purple-400/[0.04]",
      title: "group-hover:text-purple-300",
      glow: "hover:shadow-purple-500/10",
      line: "from-purple-400 to-pink-500",
    },
  };

  const style = accentStyles[accent];

  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border bg-white/2.5 p-7 shadow-xl transition-all duration-500 hover:-translate-y-1 ${style.border} ${style.background} ${style.glow}`}
    >

      {/* TOP GRADIENT LINE */}

      <div
        className={`absolute left-0 top-0 h-px w-0 bg-linear-to-r ${style.line} transition-all duration-500 group-hover:w-full`}
      />


      {/* ICON */}

      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-sm text-white/50 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/8">
        ◆
      </div>


      <h3
        className={`text-xl font-bold transition-colors duration-300 ${style.title}`}
      >
        {title}
      </h3>


      <p className="mt-4 text-sm leading-7 text-white/45">
        {skills}
      </p>

    </article>
  );
}