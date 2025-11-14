import { ProjectCard } from "./project-card";
import { Marquee } from "./magicui/marquee";
import { Post } from "@/data/blog";
import { Button } from "./ui/button";
import { BookMarkedIcon } from "lucide-react";

export default function CarouselDesktop({ projects }: { projects: Post[] }) {
  return (
    <div className="relative md:flex w-full flex-col items-center justify-center overflow-hidden hidden ">
      <Marquee
        pauseOnHover
        className="py-7"
        style={{ "--duration": "40s" } as React.CSSProperties}
      >
        {projects.map((project, id) => (
          <div key={id} className="w-full sm:w-auto sm:max-w-80 max-w-72">
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
          </div>
        ))}
      </Marquee>

      <Button variant="outline" size="sm" className="">
        <BookMarkedIcon className="h-4 w-4" />
        Alle Projekte
      </Button>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
