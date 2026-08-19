import ProjectCaseStudy from "../components/ProjectCaseStudy";

export default function FLKeyboardPage() {
  return (
    <ProjectCaseStudy
      title="FLKEYBOARD"
      shortTitle="FLKEYBOARD"
      category="Interactive Web Application"
      accent="purple"
      visualType="keyboard"

      description="An interactive keyboard-based web project focused on responsive interfaces, JavaScript interactions, keyboard events, and engaging user experiences."

      technologies={[
        "HTML5",
        "CSS3",
        "JavaScript",
        "Keyboard Events",
        "Responsive Design",
      ]}

      stats={[
        {
          value: "24+",
          label: "Interactive Keys",
        },
        {
          value: "JS",
          label: "Interaction Logic",
        },
        {
          value: "UI",
          label: "Responsive Interface",
        },
        {
          value: "100%",
          label: "Browser Based",
        },
      ]}

      overviewTitle="Creating interaction through keyboard input."

      overview={[
        "FLKEYBOARD was created as an interactive frontend project focused on keyboard events and immediate visual feedback.",

        "The application demonstrates how physical keyboard input can be connected to interface behaviour, allowing user actions to be reflected directly on screen.",

        "Building the project strengthened my understanding of DOM events, JavaScript interaction handling, responsive interface design, and feedback-driven user experiences.",
      ]}

      challengeTitle="Synchronising input and interface."

      challenge="The challenge was ensuring that keyboard input was recognised reliably while providing clear visual feedback to users. The interface needed to respond immediately without creating confusing or inconsistent states."

      solutionTitle="Turn each key press into feedback."

      solution="JavaScript keyboard event listeners were used to detect user input and update corresponding interface elements. The keyboard layout was designed to provide immediate feedback while remaining responsive across screen sizes."

      featuresTitle="Interaction that responds instantly."

      features={[
        {
          symbol: "⌨",
          title: "Keyboard Input",
          description:
            "Detects physical keyboard interaction through browser keyboard events.",
        },
        {
          symbol: "✦",
          title: "Visual Feedback",
          description:
            "Highlights interface elements when corresponding keys are activated.",
        },
        {
          symbol: "↔",
          title: "Responsive Layout",
          description:
            "Adapts the keyboard interface across desktop and smaller screens.",
        },
        {
          symbol: "⚡",
          title: "Instant Interaction",
          description:
            "Updates visual states immediately when keyboard events occur.",
        },
        {
          symbol: "◉",
          title: "Focused UI",
          description:
            "Keeps the experience centred around the keyboard interaction itself.",
        },
        {
          symbol: "◇",
          title: "Reusable Structure",
          description:
            "Organises interface elements consistently for easier development and refinement.",
        },
      ]}

      processTitle="From keyboard event to visual response."

      process={[
        {
          number: "01",
          title: "Layout Design",
          description:
            "Created the visual keyboard structure and organised keys into an understandable interface.",
        },
        {
          number: "02",
          title: "Event Handling",
          description:
            "Implemented JavaScript keyboard events to detect user input.",
        },
        {
          number: "03",
          title: "Visual States",
          description:
            "Connected key presses to active interface states and feedback.",
        },
        {
          number: "04",
          title: "Responsive Testing",
          description:
            "Improved layout behaviour and usability across different devices.",
        },
      ]}

      technologyTitle="Built around frontend interaction."

      techStack={[
        {
          name: "HTML5",
          description:
            "Provides the keyboard interface structure.",
        },
        {
          name: "CSS3",
          description:
            "Handles visual styling and responsive behaviour.",
        },
        {
          name: "JavaScript",
          description:
            "Controls keyboard events and interactive states.",
        },
        {
          name: "DOM Events",
          description:
            "Connects physical keyboard input with interface behaviour.",
        },
      ]}

      previousUrl="/work/jarvis"
      previousLabel="Previous Project · JARVIS"

      nextUrl="/work/pg-life"
      nextLabel="Next Project · PG-Life"
    />
  );
}