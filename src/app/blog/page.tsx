import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const projects = await getBlogPosts();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-4 px-6">
      {projects
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((project, id) => (
          <BlurFade key={id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
            <ProjectCard
              slug={project.slug}
              title={project.metadata.title}
              description={project.metadata.description}
              dates={project.metadata.dates}
              tags={project.metadata.technologies}
              image={project.metadata.image}
              video={project.metadata.video}
              links={project.metadata.links}
            />
          </BlurFade>
        ))}
    </div>
  );
}
