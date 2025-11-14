"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlurFade from "./magicui/blur-fade";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsBreadcrumb() {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/blog";

  return (
    <BlurFade
      className={cn(
        "py-4 sticky sm:static border-b mb-2 border-primary/10 backdrop-blur-2xl bg-background/80 sm:shadow-none top-0 left-0 z-10 duration-300 sm:mx-6 px-6 sm:px-0 rounded-t-2xl ",
        isProjectsPage ? "  " : "sm:border-transparent sm:mb-0 mb-2"
      )}
      delay={BLUR_FADE_DELAY}
    >
      <Breadcrumb>
        <BreadcrumbList className="duration-200">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link className="hover:underline  duration-200 " href="/">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link className="hover:underline" href="/blog">
                <h1
                  className={`font-medium   leading-none m-0 p-0 tracking-tighter duration-700 transition-all ease-out ${
                    isProjectsPage ? "scale-110 ml-1" : "scale-100 ml-0"
                  }`}
                >
                  Blog
                </h1>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </BlurFade>
  );
}
