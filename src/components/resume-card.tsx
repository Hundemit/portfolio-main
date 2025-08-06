"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
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
}
export const ResumeCard = ({ logoUrl, altText, title, subtitle, href, badges, period, description }: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card className={cn("flex sm:translate-y-0 duration-300 ease-out", isExpanded ? "" : "sm:hover:-translate-y-0.5")}>
      <Link href={href || "#"} className="cursor-pointer" target={href === "/blog" ? "_self" : "_blank"} suppressHydrationWarning>
        <div className="flex-none">
          <Avatar className="border dark:border-foreground size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
      </Link>

      <div className="block cursor-pointer" onClick={handleClick}>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader className="">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge variant="secondary" className="align-middle text-xs" key={index}>
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn("size-4 ml-1 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1", isExpanded ? "rotate-90 translate-x-1" : "rotate-0")}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{period}</div>
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
              className="mt-2 text-xs sm:text-sm">
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
