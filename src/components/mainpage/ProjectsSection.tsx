import BlurFade from "@/components/magicui/blur-fade";
import CarouselDesktop from "@/components/carousel-desktop";
import MobileCarousel from "@/components/carousel-mobile";
import Link from "next/link";
import { Post } from "@/data/blog";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsSection({ projects }: { projects: Post[] }) {
  return (
    <section id="projects" className="py-16" aria-labelledby="projects-heading">
      <div className="w-full">
        <BlurFade
          className="opacity-0 max-w-2xl mx-auto px-6"
          delay={BLUR_FADE_DELAY + 1.5}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2
                id="projects-heading"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                Schau dir meine neuesten{" "}
                <Link
                  href="/blog"
                  className="inline-flex items-center cursor-pointer gap-2 hover:scale-105 underline transition-all duration-1000 ease-out"
                >
                  Projekte
                </Link>{" "}
                an.
              </h2>

              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ich habe an verschiedenen Projekten gearbeitet, von einfachen
                Websites bis hin zu komplexen Webanwendungen. Hier sind einige
                meiner Favoriten.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade
          className="opacity-0 max-w-7xl mx-auto"
          delay={BLUR_FADE_DELAY + 1.6}
        >
          <CarouselDesktop projects={projects} />
          <MobileCarousel projects={projects} />
        </BlurFade>
      </div>
    </section>
  );
}
