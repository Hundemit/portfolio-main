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
    "Ich bin Fullstack Entwickler und UI/UX Designer aus Leidenschaft. Mein Ziel ist es, Anwendungen zu bauen, die technisch sauber und für Nutzer intuitiv sind. \n\n Bei der Northern Lights GmbH und dem FinTech-Startup GYFF habe ich gelernt, Design, Entwicklung und Produktstrategie zusammenzubringen. Ich lege Wert auf wartbaren Code, eine klare Produktvision – und manchmal hilft ein beherzter Druck auf Backspace, um bessere Software zu schaffen.",

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
