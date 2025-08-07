"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />;
      case "dark":
        return <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />;
      case "system":
      default:
        return <SunMoon className="h-[1.2rem] w-[1.2rem] text-neutral-800  dark:text-neutral-200" />;
    }
  };

  const themeOrder = ["light", "dark", "system"];
  const nextTheme = () => {
    return themeOrder[(themeOrder.indexOf(theme ?? "light") + 1) % themeOrder.length];
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <Button variant="ghost" type="button" size="icon" className="px-2" onClick={() => setTheme(nextTheme())}>
      {renderIcon()}
    </Button>
  );
}
