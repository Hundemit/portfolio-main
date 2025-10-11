import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/magicui/particles";
import { Analytics } from "@vercel/analytics/react";
import { metadata } from "@/app/metadata";
import type { Viewport } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export { metadata };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="de" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Jan Hindemit" />
      </head>
      <body className={cn("relative min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto rounded-xl overflow-x-hidden ", fontSans.variable)} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Particles className="hidden sm:block fixed left-0 inset-0 -z-10 h-screen w-screen" quantity={100} ease={80} color={"#b0b0b0"} refresh={true} />
          <div
            id="noise-background"
            className="rounded-3xl fixed inset-0 w-screen h-screen z-[100] pointer-events-none opacity-[0.04] [background-image:url('/background1.gif')] [background-repeat:repeat,no-repeat] [background-position:0_0,0_0] [background-size:auto,cover] "
          />
          {children}
          <Navbar />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
