import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

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
  description: DATA.personal.description,
  openGraph: {
    title: `${DATA.personal.name}`,
    description: DATA.personal.description,
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
      <body className={cn("min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6", fontSans.variable)} suppressHydrationWarning>
        <div className="rounded-3xl fixed inset-0 w-screen h-screen z-[5] pointer-events-none opacity-[0.03] [background-image:url('/background.gif')] [background-repeat:repeat,no-repeat] [background-position:0_0,0_0] [background-size:auto,cover] " />
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="rounded-xl ">
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
