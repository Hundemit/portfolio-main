import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from "@/components/ui/breadcrumb";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = await getPost(slug);

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? `${DATA.personal.url}${image}` : `${DATA.personal.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.personal.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  let post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog" className="sm:-mt-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image ? `${DATA.personal.url}${post.metadata.image}` : `${DATA.personal.url}/og?title=${post.metadata.title}`,
            url: `${DATA.personal.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.personal.name,
            },
          }),
        }}
      />
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/projects">Projekte</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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
          {post.metadata.technologies.map((skill, id) => (
            <Badge className="h-fit" key={skill}>
              {skill}
            </Badge>
          ))}
          {post.metadata.links && post.metadata.links.length > 0 && (
            <div className="flex gap-1 ml-auto w-full mt-4 ">
              {post.metadata.links.map((link, id) => (
                <Button key={id} variant="outline" className=" w-full  hover:-translate-y-1 transition-all duration-300 ease-out flex gap-2 px-2 py-1 ">
                  <Link className="flex gap-2 items-center" href={link.href} target="_blank">
                    <Icons.globe className="size-3" />
                    {link.type}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY + 0.2}>
        <article className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.source }}></article>
      </BlurFade>
    </section>
  );
}
