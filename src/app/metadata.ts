import { DATA } from "@/data/resume/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.personal.url),
  title: {
    default: DATA.personal.name,
    template: `%s | ${DATA.personal.name}`,
  },
  description: DATA.personal.description[0],
  keywords: DATA.personal.metaKeywords as unknown as string[],
  authors: [
    {
      name: DATA.personal.name,
      url: DATA.personal.url,
    },
  ],
  creator: DATA.personal.name,
  publisher: DATA.personal.name,
  openGraph: {
    title: `${DATA.personal.name}`,
    description: DATA.personal.description[0],
    url: DATA.personal.url,
    siteName: `${DATA.personal.name}`,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: `${DATA.personal.url}/Opengraphimage.png`,
        width: 1200,
        height: 630,
        alt: `${DATA.personal.name} - Frontend Developer & UI/UX Designer Portfolio`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.personal.name}`,
    description: DATA.personal.description[0],
    card: "summary_large_image",
    creator: "@hundemit",
    images: [`${DATA.personal.url}/Opengraphimage.png`],
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: DATA.personal.url,
  },
  category: "technology",
};
