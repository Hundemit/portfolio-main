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
  openGraph: {
    title: `${DATA.personal.name}`,
    description: DATA.personal.description[0],
    url: DATA.personal.url,
    siteName: `${DATA.personal.name}`,
    locale: "de_DE",
    type: "website",
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
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};
