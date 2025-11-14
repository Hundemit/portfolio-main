"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { ProjectLink } from "@/lib/types";
import { useRouter } from "next/navigation";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { ProjectLinkButton } from "./project-link-button";
import { LinkIcon } from "lucide-react";

interface Props {
  title: string;
  slug: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly ProjectLink[];
  className?: string;
  descriptionShow?: boolean;
}

export function ProjectCard({
  title,
  slug,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  descriptionShow = true,
}: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use resolvedTheme to avoid hydration mismatch
  const currentTheme = resolvedTheme || theme;

  return (
    <Card
      onClick={() => {
        router.push(`/blog/${slug}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={
        " flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full sm:hover:scale-[1.01] cursor-pointer w-full min-h-96  "
      }
    >
      {video && (
        <div className="h-40 w-full overflow-hidden">
          {isMounted && (
            <video
              src={video}
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              className="pointer-events-none mx-auto h-full w-full object-cover object-top" // needed because random black line at bottom of video
            />
          )}
        </div>
      )}
      {image && (
        <div className="p-2">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-center shadow-none rounded"
          />
        </div>
      )}
      <CardHeader className="px-2">
        <CardTitle className=" text-base line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col gap-2 px-2">
        <div className={cn(!descriptionShow && "hidden sm:block")}>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          {/* markdown description */}
          <Markdown
            components={{
              a: ({ node, ...props }) => (
                <Link
                  {...props}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  href={props.href ?? ""}
                />
              ),
            }}
            className=" prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3"
          >
            {description}
          </Markdown>
        </div>
        {/* tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                variant="secondary"
                className="px-1 py-0 text-[10px]"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <div className=" flex-grow " />

      <CardFooter className="px-2 pb-2 mt-auto">
        {/* links */}
        {links && links.length > 0 && (
          <div className="flex flex-row items-start gap-1 w-full">
            {links.map((link, idx) => (
              <ProjectLinkButton key={idx} link={link} index={idx} />
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
