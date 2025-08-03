import { HomeIcon, NotebookIcon } from "lucide-react";

// Skills and Navigation
export const SKILLS_AND_NAVIGATION = {
  skills: ["HTML", "CSS", "React.js", "Typescript", "Node.js", "Kotlin", "Angular", "Tailwind", "Figma", "Docker", "MySQL", "Git", "WordPress", "Jira", "Confluence"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
} as const;
