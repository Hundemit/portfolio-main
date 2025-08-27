import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/magicui/particles";
import { Analytics } from "@vercel/analytics/react";
import { generateMetadata } from "@/app/blog/[slug]/metadata";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export { generateMetadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={cn("relative min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto rounded-xl ", fontSans.variable)} suppressHydrationWarning>
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
