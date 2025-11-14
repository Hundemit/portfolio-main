import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { getBlogPosts } from "@/data/blog";
import { TagFilter } from "@/components/tag-filter";
import { metadata } from "./metadata";

export { metadata };

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const projects = await getBlogPosts();

  const allTags = [
    "All",
    ...Array.from(
      new Set(projects.flatMap((blog) => blog.metadata.typeofBlogPost || []))
    ).sort(),
  ];
  const resolvedSearchParams = await searchParams;
  const selectedTag = resolvedSearchParams.tag || "All";

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt).getTime();
    const dateB = new Date(b.metadata.publishedAt).getTime();
    return dateB - dateA;
  });

  const tagCounts = allTags.reduce((acc, tag) => {
    if (tag === "All") {
      acc[tag] = sortedProjects.length;
    } else {
      acc[tag] = sortedProjects.filter((blog) =>
        blog.metadata.typeofBlogPost?.includes(tag)
      ).length;
    }
    return acc;
  }, {} as Record<string, number>);

  const filteredProjects =
    selectedTag === "All"
      ? sortedProjects
      : sortedProjects.filter((project) =>
          project.metadata.typeofBlogPost?.includes(selectedTag)
        );

  return (
    <>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <section className="px-6">
          <header className="mb-8">
            <h1
              aria-label="Blog & Projekte"
              className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2"
            >
              Blog & Projekte
            </h1>
            <p className="text-muted-foreground text-base">
              Meine Projekte: Von UI/UX Design bis zur vollständigen
              Implementierung
            </p>
          </header>
        </section>
      </BlurFade>
      <div className="mx-6">
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          tagCounts={tagCounts}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-4 px-6">
        {filteredProjects.map((project, id) => (
          <BlurFade key={id} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
            <ProjectCard
              slug={project.slug}
              title={project.metadata.title}
              description={project.metadata.description}
              dates={project.metadata.dates}
              tags={project.metadata.tags}
              image={project.metadata.image}
              video={project.metadata.video}
              links={project.metadata.links}
            />
          </BlurFade>
        ))}
      </div>
    </>
  );
}
