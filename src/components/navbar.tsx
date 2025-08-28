"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navbarbuttonstyle = cn(
  buttonVariants({ variant: "ghost", size: "icon" }),
  "size-12 aspect-square rounded-xl hover:bg-black/10  dark:hover:bg-white/10 backdrop-blur-sm  text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500"
);

export default function Navbar() {
  return (
    <nav className="fixed bottom-2 sm:bottom-10 left-0 right-0 z-50 duration-200">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navigation.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={item.href} aria-label={item.label} className={navbarbuttonstyle}>
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.personal.social)
            .filter(([name, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link target="_blank" href={social.url} aria-label={social.name} className={navbarbuttonstyle}>
                      <social.icon className="size-4 " />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className={navbarbuttonstyle} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </nav>
  );
}
