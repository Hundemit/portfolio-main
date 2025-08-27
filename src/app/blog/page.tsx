import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { getBlogPosts } from "@/data/blog";
import { TagFilter } from "@/components/tag-filter";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const projects = await getBlogPosts();

  const allTags = ["All", ...Array.from(new Set(projects.flatMap((blog) => blog.metadata.tags || []))).sort()];
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
      acc[tag] = sortedProjects.filter((blog) => blog.metadata.tags?.includes(tag)).length;
    }
    return acc;
  }, {} as Record<string, number>);

  const filteredProjects = selectedTag === "All" ? sortedProjects : sortedProjects.filter((project) => project.metadata.tags?.includes(selectedTag));

  return (
    <>
      <div className="px-6">
        <TagFilter tags={allTags} selectedTag={selectedTag} tagCounts={tagCounts} />
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
