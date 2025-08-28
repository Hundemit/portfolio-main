"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <SunIcon className="size-4" />;
      case "dark":
        return <MoonIcon className="size-4" />;
    }
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <Button variant="ghost" type="button" size="icon" className={cn(className)} onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle Theme">
      {renderIcon()}
    </Button>
  );
}
