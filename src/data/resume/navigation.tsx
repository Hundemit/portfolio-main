import { BookMarkedIcon, HomeIcon } from "lucide-react";

// Navigation
export const NAVIGATION = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: BookMarkedIcon, label: "Projects" },
  ],
} as const;
