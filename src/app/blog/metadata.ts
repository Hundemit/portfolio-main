import { DATA } from "@/data/resume/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Projekte & Tutorials",
  description: "Entdecke meine neuesten Webentwicklungs-Projekte, Tutorials zu React, Next.js, TypeScript und UI/UX Design. Portfolio von Jan Hindemit - Frontend Developer aus Deutschland.",
  keywords: [
    "Web Development Blog",
    "React Projekte",
    "Next.js Tutorial",
    "TypeScript Anleitung",
    "UI/UX Design Portfolio",
    "Frontend Entwicklung",
    "Programmier Blog Deutsch",
    "Tech Blog Deutschland",
    "Webentwickler Portfolio",
    "Modern Web Design",
    "Responsive Webdesign",
    "JavaScript Projekte",
    "Tailwind CSS",
    "Jan Hindemit Blog",
  ],
  openGraph: {
    title: "Blog - Jan Hindemit Portfolio",
    description: "Entdecke meine neuesten Webentwicklungs-Projekte, Tutorials zu React, Next.js, TypeScript und UI/UX Design.",
    url: `${DATA.personal.url}/blog`,
    siteName: DATA.personal.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: `${DATA.personal.url}/Opengraphimage.png`,
        width: 1200,
        height: 630,
        alt: "Jan Hindemit Blog - Web Development Projekte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Jan Hindemit Portfolio",
    description: "Entdecke meine neuesten Webentwicklungs-Projekte, Tutorials zu React, Next.js und TypeScript.",
    creator: "@hundemit",
    images: [`${DATA.personal.url}/Opengraphimage.png`],
  },
  alternates: {
    canonical: `${DATA.personal.url}/blog`,
  },
};
