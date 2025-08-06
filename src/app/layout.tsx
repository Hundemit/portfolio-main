import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/magicui/particles";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.personal.url),
  title: {
    default: DATA.personal.name,
    template: `%s | ${DATA.personal.name}`,
  },
  description: DATA.personal.description[0],
  openGraph: {
    title: `${DATA.personal.name}`,
    description: DATA.personal.description[0],
    url: DATA.personal.url,
    siteName: `${DATA.personal.name}`,
    locale: "en_US",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={cn("relative min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto rounded-xl  duration-1000", fontSans.variable)} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Particles className="hidden sm:block fixed left-0 inset-0 -z-10 h-screen w-screen" quantity={100} ease={80} color={"#b0b0b0"} refresh={true} />
          <div
            id="noise-background"
            className="rounded-3xl fixed inset-0 w-screen h-screen z-[100] pointer-events-none opacity-[1.05] [background-image:url('/background1.gif')] [background-repeat:repeat,no-repeat] [background-position:0_0,0_0] [background-size:auto,cover] "
          />
          {children}
          <Navbar />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
