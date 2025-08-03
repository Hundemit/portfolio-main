import { Icons } from "@/components/icons";

// Contact Information
export const CONTACT_INFO = {
  email: "janhindemit1@gmail.com",
  tel: "+1627195588",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://dub.sh/github-hundemit",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jan-hindemit/",
      icon: Icons.linkedin,
      navbar: true,
    },
    email: {
      name: "Send Email",
      url: "#",
      icon: Icons.email,
      navbar: false,
    },
  },
} as const;
