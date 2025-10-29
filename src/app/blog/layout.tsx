import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { getBlogPosts } from "@/data/blog";
import { ProjectsBreadcrumb } from "@/components/blog-breadcrumb";
import { TagFilter } from "@/components/tag-filter";

export const metadata = {
  title: "Projekte",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-12 mb-24 sm:my-24 duration-1000 max-w-2xl mx-auto">
      <ProjectsBreadcrumb />

      {children}
    </main>
  );
}
