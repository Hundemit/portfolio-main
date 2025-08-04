// Work Experience
interface WorkExperience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  badges: string[];
  description: string;
}

export const EXPERIENCE: { work: WorkExperience[]; education: Education[] } = {
  work: [
    {
      company: "Projekte im Bereich Web & Medien",
      href: "#projects",
      badges: [],
      location: "Für Kunden und Eigenprojekte",
      title: "Für Kunden und Eigenprojekte",
      logoUrl: "/workexperience/emojilaptop.png",
      start: "März 2023",
      end: "Januar 2025",
      description: `Konzeption und Design: Kundenbriefings, Zieldefinition, Wireframes und Informationsarchitektur, Ausarbeitung von Styleguides und responsiven UI-Designs. Umsetzung mit WordPress, React und Tailwind CSS.`,
    },
    {
      company: "Northern Lights GmbH",
      href: "https://nl-it-consulting.de/",
      badges: [],
      location: "Flensburg",
      title: "Frontend-Entwickler / UI/UX-Designer",
      logoUrl: "/workexperience/northernlights.png",
      start: "Juni 2022",
      end: "Dezember 2022",
      description: `UX/UI-Konzeption: Erstellung von Wireframes und klickbaren Prototypen in Figma basierend auf Anforderungsanalysen mit Product Ownern. Entwicklung mit Angular/TypeScript und HTML/CSS, Anbindung von Microservices. Teilnahme an Scrum, Pair Programming, Code Reviews und Dokumentation.`,
    },
  ],
  education: [
    {
      school: "Hochschule Flensburg",
      href: "https://hs-flensburg.de",
      degree: "B.Sc. Medieninformatik, Abschlussnote: 1.8",
      logoUrl: "/education/hochschuleflensburg.png",
      start: "September 2018",
      end: "Juni 2025",
      badges: ["B.Sc. Medieninformatik"],
      description: `Studium der Medieninformatik an der Hochschule Flensburg.`,
    },
  ],
} as const;
