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
import Image from "next/image";

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
    <BlurFade
      id="blog"
      className="rounded-lg sm:p-4 px-4 bg-background backdrop-blur-[2px] duration-300"
    >
      <StructuredData
        type="article"
        article={{
          title: post.metadata.title,
          description: post.metadata.description,
          publishedAt: post.metadata.publishedAt,
          image: post.metadata.image
            ? `${DATA.personal.url}${post.metadata.image}`
            : `${DATA.personal.url}/Opengraphimage.png`,
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
      {/* Blog Cover */}
      <BlurFade
        className="relative  flex flex-col items-center justify-center gap-2"
        delay={BLUR_FADE_DELAY + 0.1}
      >
        <div className="relative">
          <Image
            className="shadow-none"
            src={post.metadata.image || ""}
            alt={post.metadata.title}
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0  w-full bg-gradient-to-t from-background to-transparent to-50% "></div>
        </div>
        <div className="sm:absolute inset-0 h-full w-full   flex items-end justify-start sm:px-1 ">
          <h1 className="title font-medium text-4xl sm:text-5xl tracking-tighter max-w-[650px] duration-300">
            {post.metadata.title}
          </h1>
        </div>
      </BlurFade>
      {/* Blog Title */}

      {/* Blog Published At */}
      <BlurFade className="my-2" delay={BLUR_FADE_DELAY + 0.1}>
        <div className="flex justify-between items-center  text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </Suspense>
        </div>
      </BlurFade>
      {/* Blog Tags */}
      <BlurFade
        className="flex flex-col gap-4  mb-4"
        delay={BLUR_FADE_DELAY + 0.1}
      >
        <div className="flex flex-wrap gap-1 ">
          {post.metadata.tags.map((skill, id) => (
            <Badge variant="secondary" className="h-fit" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
        {post.metadata.links && post.metadata.links.length > 0 && (
          <div className="flex gap-1 ml-auto w-full ">
            {post.metadata.links.map((link, id) => (
              <Link
                key={id}
                href={link.href}
                className="w-full"
                target="_blank"
              >
                <Button
                  variant="default"
                  className="w-full hover:-translate-y-1 transition-all duration-300 ease-out flex gap-2 px-2 py-1 "
                >
                  <Icons.globe className="size-3" />
                  {link.type}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </BlurFade>
      {/* Blog Content */}
      <BlurFade className="" delay={BLUR_FADE_DELAY + 0.2}>
        <article
          className="prose prose-h2:mb-2 dark:prose-invert prose-p:text-justify prose-h1:text-2xl prose-img:m-0 bg-pr"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></article>
      </BlurFade>
    </BlurFade>
  );
}
