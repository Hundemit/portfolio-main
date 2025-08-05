"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsBreadcrumb() {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";

  return (
    <div className="sticky sm:static top-0 left-0 z-10 bg-background sm:bg-transparent backdrop-blur-sm ">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Breadcrumb className="py-4 ">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link className="hover:underline" href="/projects">
                  <h1 className={`font-medium leading-none m-0 p-0 tracking-tighter duration-700 transition-all ease-out ${isProjectsPage ? "scale-150 ml-3" : "scale-100 ml-0"}`}>Projekte</h1>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </BlurFade>
    </div>
  );
}
