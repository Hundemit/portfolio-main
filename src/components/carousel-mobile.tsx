"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Post } from "@/data/blog";
import { ProjectCard } from "@/components/project-card";
import { Button } from "./ui/button";
import { BookMarkedIcon } from "lucide-react";

export default function MobileCarousel({ projects }: { projects: Post[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-4xl md:hidden py-8">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {projects.map((project: Post, index: number) => (
            <CarouselItem key={index} className="basis-9/12">
              <ProjectCard
                slug={project.slug}
                title={project.metadata.title}
                description={project.metadata.description}
                dates={project.metadata.dates}
                tags={project.metadata.tags}
                image={project.metadata.image}
                video={project.metadata.video}
                links={project.metadata.links}
                descriptionShow={true}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 w-fit  ml-6 mt-2">
          <CarouselPrevious className=" relative inset-0 translate-x-0 translate-y-0" />
          <CarouselNext className=" relative inset-0 translate-x-0 translate-y-0" />
          <Button variant="outline" size="sm" className="">
            <BookMarkedIcon className="h-4 w-4" />
            Alle Projekte
          </Button>
        </div>
      </Carousel>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background"></div>
    </div>
  );
}
