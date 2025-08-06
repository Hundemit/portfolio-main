"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsBreadcrumb() {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/blog";

  return (
    <BlurFade
      className="py-4 mb-2 sticky sm:static border-b border-primary/10 backdrop-blur-xl bg-transparent sm:shadow-none top-0 left-0 z-10 duration-200 sm:mx-6 px-6 sm:px-0"
      delay={BLUR_FADE_DELAY}>
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
                <h1 className={`font-medium  backdrop-blur-sm leading-none m-0 p-0 tracking-tighter duration-700 transition-all ease-out ${isProjectsPage ? "scale-150 ml-3" : "scale-100 ml-0"}`}>
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
