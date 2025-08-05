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
    <BlurFade delay={BLUR_FADE_DELAY}>
      <Breadcrumb className="mb-2">
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
                <h1 className={`font-medium tracking-tighter duration-500 ${isProjectsPage ? "text-2xl" : "text-md"}`}>Projekte</h1>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </BlurFade>
  );
}
