import { Github, Linkedin, Mail } from "lucide-react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export const PROFILE = {
  name: "Jan Hindemit",
  initials: "JH",
  url: "https://janhindemit.de",
  location: "Trappenkamp, DE",
  locationLink: "https://www.google.com/maps/place/trappenkamp",

  description: ["Ich entwickle einfache und nützliche Software.", "Ich finde gerne clevere Lösungen für schwierige Aufgaben.", "Mir sind guter Code und Teamarbeit wichtig."],

  metaKeywords: [
    "Jan Hindemit",
    "Portfolio",
    "Softwareentwickler",
    "Frontend Entwickler",
    "Fullstack Entwickler",
    "UI UX Designer",
    "Webentwicklung",
    "React",
    "Next.js",
    "Angular",
    "Tailwind CSS",
    "Shadcn UI",
    "TypeScript",
    "Kotlin",
    "Kotlin Multiplatform",
    "Node.js",
    "Docker",
    "MySQL",
    "Medieninformatik",
    "Usability",
    "Projekte",
    "Blog",
    "Tech Blog",
    "Web Development Tutorials",
    "Open Source",
    "MDX Blog",
    "Modern Web Design",
    "Responsive Webdesign",
    "Figma Prototyping",
    "Cloud Data Analytics",
  ],

  summary:
    "Während meines Informatikstudiums habe ich begonnen, eigene Projekte und für mich selbst umzusetzen. Zuvor arbeitete ich als Frontend-Entwickler und UI/UX-Designer bei der Northern Lights GmbH und später als Webdesigner für das FinTech-Startup GYFF. In meinen Projekten verbinde ich Design, Entwicklung und Produktstrategie, um Software zu schaffen, die gerne genutzt wird.",

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
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jan-hindemit/",
      icon: Linkedin,
      navbar: true,
    },
    email: {
      name: "Mail",
      url: "mailto:janhindemit1@gmail.com",
      icon: Mail,
      navbar: true,
    },
    twitter: {
      name: "Twitter",
      url: "https://x.com/hundemit",
      icon: FaXTwitter,
      navbar: false,
    },
    discord: {
      name: "Discord",
      url: "https://discord.com/users/hundemit",
      icon: FaDiscord,
      navbar: false,
    },
  },
} as const;
