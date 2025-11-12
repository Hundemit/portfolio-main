"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ProjectLink } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectLinkButtonProps {
  link: ProjectLink;
  index?: number;
}

/**
 * A specialized button component for displaying project links (Website or GitHub).
 * Handles styling, icons, and event propagation automatically based on link type.
 */
export function ProjectLinkButton({ link, index }: ProjectLinkButtonProps) {
  const isGitHub = link.type === "GitHub";
  const isWebsite = link.type === "Website";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Button
      asChild
      variant="outline"
      size={isGitHub ? "icon" : "default"}
      key={index}
      className={cn(isWebsite && "w-full")}
      onClick={handleClick}
    >
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        className="flex items-center justify-center gap-2"
        aria-label={
          isWebsite ? `Visit ${link.type}` : `View project on ${link.type}`
        }
      >
        {isWebsite ? (
          <Icons.globe className="size-3" aria-hidden="true" />
        ) : (
          <Icons.github className="size-3" aria-hidden="true" />
        )}
        {isWebsite && <span>{link.type}</span>}
      </Link>
    </Button>
  );
}
