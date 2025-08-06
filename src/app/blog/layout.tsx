import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { getBlogPosts } from "@/data/blog";
import { ProjectsBreadcrumb } from "@/components/blog-breadcrumb";

export const metadata = {
  title: "Projekte",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPageLayout({ children }: { children: React.ReactNode }) {
  const projects = await getBlogPosts();

  return (
    <main className="mt-12 mb-24 sm:my-24 duration-1000">
      <ProjectsBreadcrumb />
      {children}
    </main>
  );
}
