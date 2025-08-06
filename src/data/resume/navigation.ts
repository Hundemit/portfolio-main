import { BookMarkedIcon, HomeIcon } from "lucide-react";

// Navigation
export const NAVIGATION = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: BookMarkedIcon, label: "Blog" },
  ],
} as const;
