// Work Experience
interface WorkExperience {
  company: string;
  href: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: {
    title: string;
    description: string;
  }[];
  previewUrl?: string;
}

interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  description: {
    title: string;
    description: string;
  }[];
  previewUrl?: string;
}

export const EXPERIENCE: { work: WorkExperience[]; education: Education[] } = {
  work: [
    {
      company: "Projekte im Bereich Web & Medien",
      href: "/blog",
      previewUrl: "/workexperience/blogScreenshot.png",
      location: "Für Kunden und Eigenprojekte",
      title: "Für Kunden und Eigenprojekte",
      logoUrl: "/workexperience/emojilaptop.png",
      start: "Juni 2023",
      end: "Januar 2025",
      description: [
        {
          title: "Konzeption und Design",
          description:
            "Kund:innen gebrieft, Ziele und Zielgruppen definiert, Wireframes und Informationsarchitektur erstellt, Styleguides ausgearbeitet und auf ein konsistentes, responsives Erscheinungsbild geachtet.",
        },
        {
          title: "Entwicklung und technische Umsetzung",
          description: "Eigene WordPress Themes und Blöcke gebaut, Tailwind CSS eingesetzt.",
        },
      ],
    },
    {
      company: "GYFF",
      href: "https://www.linkedin.com/company/gyff/",
      location: "Flensburg",
      title: "Freelancer Webentwickler & Designer",
      logoUrl: "/workexperience/gyff-logo.jpg",
      start: "März 2023",
      end: "Juni 2023",
      description: [
        {
          title: "Konzeption und Umsetzung",
          description: "Kundenbriefings, Zieldefinition, Wireframes und Informationsarchitektur, Ausarbeitung von Styleguides und responsiven UI-Designs. Umsetzung mit WordPress.",
        },
      ],
    },
    {
      company: "Northern Lights GmbH",
      href: "https://nl-it-consulting.de/",
      location: "Flensburg",
      title: "Frontend-Entwickler / UI/UX-Designer",
      logoUrl: "/workexperience/northernlights.png",
      start: "Januar 2022",
      end: "Dezember 2022",
      description: [
        {
          title: "UX/UI-Konzeption",
          description:
            "Erstellung von Wireframes und klickbaren Prototypen in Figma basierend auf Anforderungsanalysen mit Product Ownern. Entwicklung mit Angular/TypeScript und HTML/CSS, Anbindung von Microservices. Teilnahme an Scrum, Pair Programming, Code Reviews und Dokumentation.",
        },
        {
          title: "Frontend-Entwicklung mit Angular/ TypeScript",
          description: "Komponenten, Views und Formularlogik umgesetzt, responsive HTML/CSS gepflegt und Microservices/APIs angebunden.",
        },
        {
          title: "Teamarbeit und Qualitätssicherung",
          description:
            "Aktive Teilnahme an Scrum, regelmäßige Code-Reviews und Pair Programming zur Sicherung der Codequalität. Zudem Dokumentation erstellt, Wissen geteilt und das Design- und Komponenten-System gemeinsam weiterentwickelt.",
        },
      ],
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
      description: [
        {
          title: "Programmierung & Technik",
          description:
            "Kotlin Multiplatform, JavaScript/TypeScript mit React, Node.js, SQL und REST-Schnittstellen; saubere Code-Strukturen, Versionskontrolle mit Git und grundlegende Softwarearchitektur.",
        },
        {
          title: "Web- und App-Entwicklung",
          description: "Responsive Oberflächen gebaut, Komponenten konzipiert, Datenbanken modelliert und Frontend mit Backend logisch verknüpft.",
        },
      ],
    },
    {
      school: "Cloud Data Analytics Zertifikat ",
      href: "https://www.credly.com/badges/776c7137-80ca-4920-abc6-e4d8a1d12dff/public_url",
      degree: "Professional Certificate in Cloud Data Analytics",
      logoUrl: "/education/Google Zertifikat.png",
      start: "November 2024",
      end: "September 2024",
      description: [
        {
          title: "Cloud Datenanalyse",
          description: "Daten in der Google Cloud aufbereitet, bereinigt und mit SQL sowie BigQuery analysiert. ETL-Workflows automatisiert und Datenmodelle für Entscheidungen vorbereitet.",
        },
        {
          title: "Business Intelligence und Visualisierung",
          description: "Aussagekräftige Dashboards und Reports in Looker Studio erstellt, Kennzahlen visualisiert und datengestützte Empfehlungen abgeleitet.",
        },
        {
          title: "Stakeholder Kommunikation und Best Practices",
          description: "Ergebnisse klar präsentiert, Handlungsempfehlungen formuliert und Cloud-Standards für Sicherheit, Governance und Kostenoptimierung eingehalten.",
        },
      ],
    },
  ],
} as const;
