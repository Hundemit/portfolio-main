import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume/resume";
import { formatDate } from "@/lib/utils";
import { Suspense } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateMetadata } from "./metadata";
import { StructuredData } from "@/components/structured-data";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export { generateMetadata };

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  let post = await getPost(slug);

  return (
    <section id="blog" className="px-6">
      <StructuredData
        type="article"
        article={{
          title: post.metadata.title,
          description: post.metadata.description,
          publishedAt: post.metadata.publishedAt,
          image: post.metadata.image ? `${DATA.personal.url}${post.metadata.image}` : `${DATA.personal.url}/Opengraphimage.png`,
          slug: post.slug,
        }}
      />
      <StructuredData
        type="breadcrumb"
        article={{
          title: post.metadata.title,
          description: post.metadata.description,
          publishedAt: post.metadata.publishedAt,
          image: post.metadata.image || "",
          slug: post.slug,
        }}
      />

      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="title font-medium text-3xl tracking-tighter max-w-[650px]">{post.metadata.title}</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY + 0.1}>
        <div className="flex justify-between items-center my-2 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.metadata.publishedAt)}</p>
          </Suspense>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY + 0.1}>
        <div className="flex flex-wrap gap-1 mb-8">
          {post.metadata.tags.map((skill, id) => (
            <Badge className="h-fit" key={skill}>
              {skill}
            </Badge>
          ))}
          {post.metadata.links && post.metadata.links.length > 0 && (
            <div className="flex gap-1 ml-auto w-full mt-4 ">
              {post.metadata.links.map((link, id) => (
                <Link key={id} href={link.href} className="w-full" target="_blank">
                  <Button variant="outline" className="w-full hover:-translate-y-1 transition-all duration-300 ease-out flex gap-2 px-2 py-1 ">
                    <Icons.globe className="size-3" />
                    {link.type}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY + 0.2}>
        <article className="prose prose-h2:mb-2 dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.source }}></article>
      </BlurFade>
    </section>
  );
}
