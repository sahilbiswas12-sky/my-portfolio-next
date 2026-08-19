import ProjectCaseStudy from "../components/ProjectCaseStudy";

export default function PortfolioPage() {
  return (
    <ProjectCaseStudy
      title="Sahil Biswas Portfolio"
      shortTitle="Portfolio"
      category="Portfolio · Next.js"
      accent="blue"
      visualType="portfolio"

      description="A modern developer portfolio designed to present practical projects, development skills, case studies, experience, and professional identity through a focused web experience."

      technologies={[
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ]}

      stats={[
        {
          value: "4+",
          label: "Featured Projects",
        },
        {
          value: "Next",
          label: "Application Framework",
        },
        {
          value: "TS",
          label: "Type Safe",
        },
        {
          value: "100%",
          label: "Responsive",
        },
      ]}

      overviewTitle="Building a portfolio around proof."

      overview={[
        "The Sahil Biswas Portfolio was created as a professional platform for presenting practical development work rather than functioning as a simple online résumé.",

        "The website places project case studies at the centre of the experience so visitors can understand what was built, which technologies were used, what problems were addressed, and how each solution was approached.",

        "A consistent visual system, responsive structure, and clear navigation help keep the projects as the strongest evidence of development ability.",
      ]}

      challengeTitle="A portfolio must prove capability."

      challenge="Many developer portfolios become collections of technology names and decorative effects without clearly demonstrating actual work. The challenge was to build something visually strong while ensuring projects remained the main focus."

      solutionTitle="Make the work the loudest element."

      solution="The website uses structured case studies, clear typography, restrained animations, reusable components, responsive layouts, and consistent visual hierarchy so that each project provides concrete evidence of development ability."

      featuresTitle="Designed as a professional platform."

      features={[
        {
          symbol: "▣",
          title: "Project Case Studies",
          description:
            "Detailed project pages explain the problem, solution, features, development process, and technology stack.",
        },
        {
          symbol: "◇",
          title: "Reusable Components",
          description:
            "Shared components keep the interface consistent and easier to maintain.",
        },
        {
          symbol: "↔",
          title: "Responsive Design",
          description:
            "Adapts layouts and typography across desktop, tablet, and mobile screens.",
        },
        {
          symbol: "⌕",
          title: "SEO Structure",
          description:
            "Uses Next.js metadata and structured routes to support discoverability.",
        },
        {
          symbol: "✉",
          title: "Contact Experience",
          description:
            "Provides clear paths for visitors, recruiters, and collaborators to get in touch.",
        },
        {
          symbol: "✦",
          title: "Visual Identity",
          description:
            "Uses a consistent dark interface, typography, gradients, spacing, and interaction system.",
        },
      ]}

      processTitle="From personal site to career platform."

      process={[
        {
          number: "01",
          title: "Content Strategy",
          description:
            "Defined the portfolio claim, page structure, case studies, and primary calls to action.",
        },
        {
          number: "02",
          title: "Design System",
          description:
            "Created consistent typography, spacing, colors, cards, buttons, and interaction patterns.",
        },
        {
          number: "03",
          title: "Next.js Development",
          description:
            "Built reusable pages and components using Next.js, React, TypeScript, and Tailwind CSS.",
        },
        {
          number: "04",
          title: "Production & Iteration",
          description:
            "Deployed the portfolio and continued refining projects, responsiveness, accessibility, and presentation.",
        },
      ]}

      technologyTitle="Built with a modern React stack."

      techStack={[
        {
          name: "Next.js",
          description:
            "Provides routing, rendering, metadata, and application architecture.",
        },
        {
          name: "React",
          description:
            "Powers reusable components and interactive interfaces.",
        },
        {
          name: "TypeScript",
          description:
            "Provides typed components and safer application development.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Handles responsive styling and the visual design system.",
        },
      ]}

      previousUrl="/work/pg-life"
      previousLabel="Previous Project · PG-Life"

      nextUrl="/work"
      nextLabel="Back to Selected Work"
    />
  );
}