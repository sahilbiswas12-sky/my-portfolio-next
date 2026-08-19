import ProjectCaseStudy from "../components/ProjectCaseStudy";

export default function JarvisPage() {
  return (
    <ProjectCaseStudy
      title="JARVIS"
      shortTitle="JARVIS"
      category="AI · Web Development"
      accent="cyan"
      visualType="jarvis"

      description="An AI-powered personal assistant project exploring voice interaction, browser automation, intelligent commands, and modern web technologies."

      technologies={[
        "JavaScript",
        "HTML5",
        "CSS3",
        "Web Speech API",
        "Voice Interaction",
      ]}

      stats={[
        {
          value: "Voice",
          label: "Interaction Mode",
        },
        {
          value: "Web",
          label: "Application Platform",
        },
        {
          value: "AI",
          label: "Assistant Concept",
        },
        {
          value: "100%",
          label: "Responsive",
        },
      ]}

      overviewTitle="Building a personal AI assistant."

      overview={[
        "JARVIS was created to explore how browser technologies and voice interaction can be combined into a practical digital assistant experience.",

        "The application allows users to interact through voice commands and perform useful actions such as opening websites, checking time, running calculations, and triggering other browser-based tasks.",

        "The project helped me understand speech recognition, command processing, application state, browser APIs, and how conversational interaction can be connected to real user actions.",
      ]}

      challengeTitle="Making voice commands useful."

      challenge="The main challenge was converting natural voice input into predictable application actions. Different users can phrase the same command in different ways, so command recognition had to remain flexible while still producing reliable results."

      solutionTitle="Connect speech directly to actions."

      solution="I used browser speech capabilities together with JavaScript command handling to detect user intent and connect recognised phrases to useful browser actions. The interface was kept simple so voice interaction remained the primary experience."

      featuresTitle="Designed around intelligent interaction."

      features={[
        {
          symbol: "◎",
          title: "Voice Recognition",
          description:
            "Uses browser speech recognition to capture spoken commands from the user.",
        },
        {
          symbol: "↗",
          title: "Website Commands",
          description:
            "Can respond to commands that open commonly used websites and browser destinations.",
        },
        {
          symbol: "◷",
          title: "Time Commands",
          description:
            "Responds to time-related requests using real-time browser information.",
        },
        {
          symbol: "∑",
          title: "Calculations",
          description:
            "Processes basic calculation requests through command-based interaction.",
        },
        {
          symbol: "♫",
          title: "Media Actions",
          description:
            "Supports useful media-oriented commands such as music interactions.",
        },
        {
          symbol: "⚡",
          title: "Real-Time Responses",
          description:
            "Processes user commands immediately and returns interactive feedback.",
        },
      ]}

      processTitle="From command idea to working assistant."

      process={[
        {
          number: "01",
          title: "Interface Planning",
          description:
            "Designed a focused interface where interaction remains simple and understandable.",
        },
        {
          number: "02",
          title: "Speech Recognition",
          description:
            "Connected Web Speech API functionality to capture and process user speech.",
        },
        {
          number: "03",
          title: "Command Processing",
          description:
            "Created JavaScript logic to recognise commands and map them to application actions.",
        },
        {
          number: "04",
          title: "Testing & Refinement",
          description:
            "Tested different command phrases and improved responsive behaviour and interaction feedback.",
        },
      ]}

      technologyTitle="Built with browser technologies."

      techStack={[
        {
          name: "JavaScript",
          description:
            "Handles commands, application logic, and user interactions.",
        },
        {
          name: "Web Speech API",
          description:
            "Provides browser-based speech recognition capabilities.",
        },
        {
          name: "HTML5",
          description:
            "Provides semantic application structure.",
        },
        {
          name: "CSS3",
          description:
            "Creates the responsive interface and visual experience.",
        },
      ]}

      previousUrl="/work"
      previousLabel="Back to Selected Work"

      nextUrl="/work/flkeyboard"
      nextLabel="Next Project · FLKEYBOARD"
    />
  );
}