"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ProjectLink } from "@/lib/types";
import { cn } from "@/lib/utils";
import { LinkIcon, XIcon } from "lucide-react";

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
      variant="default"
      size={isGitHub ? "icon" : "default"}
      key={index}
      className={cn(isWebsite && "w-full  group  ")}
      onClick={handleClick}
    >
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        className="flex items-center justify-center gap-2 group"
        aria-label={
          isWebsite ? `Visit ${link.type}` : `View project on ${link.type}`
        }
      >
        {isWebsite ? (
          <LinkIcon
            className="size-3 group-hover:-rotate-12 transition-all duration-300 ease-out"
            aria-hidden="true"
          />
        ) : (
          <Icons.github
            className="size-3 group-hover:-rotate-12 transition-all duration-300 ease-out"
            aria-hidden="true"
          />
        )}
        {isWebsite && (
          <>
            <span className=" h-5 relative w-14 overflow-hidden">
              <span className=" absolute top-0 left-0 group-hover:-top-5 transition-all duration-300 ease-in-out">
                {link.type}{" "}
              </span>
              <span className="absolute top-5 left-0 group-hover:top-0 transition-all duration-300 ease-in-out">
                {" "}
                Öffnen
              </span>
            </span>
          </>
        )}
      </Link>
    </Button>
  );
}
