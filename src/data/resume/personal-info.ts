import { Github, Linkedin, Mail } from "lucide-react";

export const PROFILE_INFO = {
  name: "Jan Hindemit",
  initials: "DV",
  url: "https://janhindemit.de",
  location: "Trappenkamp, DE",
  locationLink: "https://www.google.com/maps/place/trappenkamp",
  description: [
    "Ich entwickle gerne kreative, benutzerfreundliche Software im Team.",
    "Ich liebe es, innovative Lösungen für komplexe Probleme zu finden.",
    "Mein Fokus liegt auf sauberem Code und guter Zusammenarbeit.",
  ],
  summary:
    "Ich habe einen Bachelor in [Medieninformatik](/#education) und praktische Erfahrung als UI/UX-Designer und Frontend-Entwickler gesammelt. Während meines Studiums und in verschiedenen Projekten entwickelte ich responsive Webanwendungen mit [React, Angular und Tailwind CSS](/#projects). Dabei arbeitete ich eng mit Product Ownern zusammen, setzte Prototypen in [Figma](https://www.figma.com) um und baute Systeme mit klarer Code-Struktur, Wiederverwendbarkeit und Fokus auf Usability. Aktuell arbeite ich an eigenen [Projekten](/#projects), bei denen ich Design, technische Umsetzung und Produktstrategie eigenständig verantworte.",
  avatarUrl: "/me.png",
  email: "janhindemit1@gmail.com",
  tel: "+1627195588",
  social: {
    github: {
      name: "GitHub",
      url: "https://dub.sh/github-hundemit",
      icon: Github,
      navbar: true,
    },
    github2: {
      name: "GitHub",
      url: "https://dub.sh/github-hundemit",
      icon: Github,
      navbar: true,
    },
    linkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jan-hindemit/",
      icon: Linkedin,
      navbar: true,
    },
    email: {
      name: "Send Email",
      url: "mailto:janhindemit1@gmail.com",
      icon: Mail,
      navbar: true,
    },
  },
} as const;
