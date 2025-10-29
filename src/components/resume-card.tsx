"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: {
    title: string;
    description: string;
  }[];
  previewUrl?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  previewUrl,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card
      className={cn(
        "flex sm:translate-y-0 duration-300 ease-out group bg-background hover:bg-stone-100 dark:hover:bg-stone-900 p-1 px-2",
        isExpanded
          ? "bg-stone-100 dark:bg-stone-900"
          : "sm:hover:-translate-y-0.5"
      )}
    >
      {/* <Link href={href || "#"} className="cursor-pointer" target={href === "/blog" ? "_self" : "_blank"} suppressHydrationWarning> */}
      <div className="flex-none">
        {previewUrl ? (
          <LinkPreview
            url={href || "#"}
            imageSrc={previewUrl}
            isStatic={true}
            isLinkTarget={true}
            className="font-bold "
          >
            <Avatar className="border dark:border-foreground size-12 m-auto bg-muted-background dark:bg-foreground hover:scale-125 hover:rotate-12 transition-all duration-300 ease-out">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </LinkPreview>
        ) : (
          <LinkPreview url={href || "#"} className="font-bold ">
            <Avatar className="border dark:border-foreground size-12 m-auto bg-muted-background dark:bg-foreground hover:scale-125 hover:rotate-12 transition-all duration-300 ease-out">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </LinkPreview>
        )}
      </div>
      {/* </Link> */}

      <div className="block cursor-pointer" onClick={handleClick}>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 ">
              <h3 className="inline-flex items-center justify-center font-semibold leading-non text-base">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs bg-black text-white"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 ml-1 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1",
                    isExpanded ? "rotate-90 translate-x-1" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description.map((item, index) => (
                <p className="mb-2" key={index}>
                  <b>{item.title}:</b> <br />
                  {item.description}
                </p>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </Card>
  );
};
