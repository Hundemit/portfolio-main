"use server";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { Metadata } from "../lib/types";
import { notFound, redirect } from "next/navigation";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}



export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}


export type Post = {
  slug: string;
  metadata: Metadata;
  source: string;
};

export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join("content", `${slug}.mdx`);

  try {
    let source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);
    return {
      source: content,
      metadata: metadata as Metadata,
      slug,
    };
  } catch (error) {
    // Wenn die Datei nicht gefunden wird, leite zu /blog weiter
    redirect("/blog");
  }
}

export async function getPostsByNames(slugs: string[]): Promise<Post[]> {
  return Promise.all(
    slugs.map(async (s) => {
      return await getPost(s);
    })
  );
}

async function getAllPosts(dir: string): Promise<Post[]> {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      return await getPost(slug);
    })
  );
}

export async function getBlogPosts(): Promise<Post[]> {
  return getAllPosts(path.join(process.cwd(), "content"));
}
