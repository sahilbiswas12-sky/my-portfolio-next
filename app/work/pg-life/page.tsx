import ProjectCaseStudy from "../components/ProjectCaseStudy";

export default function PGLifePage() {
  return (
    <ProjectCaseStudy
      title="PG-Life"
      shortTitle="PG"
      category="Full-Stack · Accommodation Platform"
      accent="emerald"
      visualType="property"

      description="A practical accommodation discovery platform designed to help students search, explore, and compare paying guest properties through a structured web experience."

      technologies={[
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
      ]}

      stats={[
        {
          value: "Search",
          label: "Property Discovery",
        },
        {
          value: "Full",
          label: "Stack Application",
        },
        {
          value: "DB",
          label: "Data Driven",
        },
        {
          value: "24/7",
          label: "Web Access",
        },
      ]}

      overviewTitle="Simplifying accommodation discovery."

      overview={[
        "PG-Life was designed to make finding paying guest accommodation easier for students and people moving to a new area.",

        "Instead of relying on scattered listings and incomplete information, the application provides a structured interface where users can explore accommodation options and understand property information more clearly.",

        "The project demonstrates full-stack application thinking by combining frontend user experience with backend logic and database-driven information.",
      ]}

      challengeTitle="Property discovery is fragmented."

      challenge="People searching for PG accommodation often need to compare prices, locations, facilities, and property details across multiple sources. This can make the process slow and difficult."

      solutionTitle="Bring discovery into one interface."

      solution="PG-Life organises accommodation information into a structured web application where users can explore listings, review property details, and narrow down suitable options through a cleaner discovery experience."

      featuresTitle="Built around accommodation discovery."

      features={[
        {
          symbol: "⌕",
          title: "Property Search",
          description:
            "Helps users discover accommodation options through a structured search experience.",
        },
        {
          symbol: "≡",
          title: "Property Listings",
          description:
            "Displays accommodation information in organised and readable cards.",
        },
        {
          symbol: "⌖",
          title: "Location Information",
          description:
            "Supports location-based understanding of available properties.",
        },
        {
          symbol: "₹",
          title: "Pricing Details",
          description:
            "Makes rental information easier to compare between accommodation options.",
        },
        {
          symbol: "✓",
          title: "Property Details",
          description:
            "Provides relevant information that helps users evaluate each property.",
        },
        {
          symbol: "↔",
          title: "Responsive Experience",
          description:
            "Keeps property discovery usable across desktop and mobile screens.",
        },
      ]}

      processTitle="Turning a real problem into a web application."

      process={[
        {
          number: "01",
          title: "User Problem",
          description:
            "Identified the information users need when comparing PG accommodation.",
        },
        {
          number: "02",
          title: "Frontend",
          description:
            "Designed property cards, navigation, layouts, and discovery interfaces.",
        },
        {
          number: "03",
          title: "Backend & Data",
          description:
            "Connected application logic with backend services and structured data.",
        },
        {
          number: "04",
          title: "Usability",
          description:
            "Refined search, navigation, responsiveness, and information hierarchy.",
        },
      ]}

      technologyTitle="Built as a full-stack application."

      techStack={[
        {
          name: "React",
          description:
            "Creates reusable frontend components and interfaces.",
        },
        {
          name: "Node.js",
          description:
            "Provides the server-side runtime environment.",
        },
        {
          name: "Express",
          description:
            "Handles backend routes and application APIs.",
        },
        {
          name: "MongoDB",
          description:
            "Stores property and application data.",
        },
      ]}

      previousUrl="/work/flkeyboard"
      previousLabel="Previous Project · FLKEYBOARD"

      nextUrl="/work/portfolio"
      nextLabel="Next Project · Portfolio"
    />
  );
}