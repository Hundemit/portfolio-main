import { Metadata } from "next";
import { DATA } from "@/data/resume/resume";
import { getPost } from "@/data/blog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const page = await getPost(slug);

    if (!page) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const ogUrl = `${DATA.personal.url}/blog/${slug}`;
    const ogImage = `${ogUrl}/opengraph-image`;

    return {
      title: page.metadata.title,
      description: page.metadata.description,
      keywords: [page.metadata.title, ...(page.metadata.tags || []), "Blog", "Article", "Web Development", "Programming", "Technology", "Software Engineering"],
      authors: [
        {
          name: DATA.personal.name,
          url: DATA.personal.url,
        },
      ],
      creator: DATA.personal.name,
      publisher: DATA.personal.name,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: page.metadata.title,
        description: page.metadata.description,
        type: "article",
        url: ogUrl,
        publishedTime: page.metadata.publishedAt,
        authors: [DATA.personal.name],
        tags: page.metadata.tags,
        images: [
          {
            url: page.metadata.image || ogImage,
            width: 1200,
            height: 630,
            alt: page.metadata.title,
          },
        ],
        siteName: DATA.personal.name,
      },
      twitter: {
        card: "summary_large_image",
        title: page.metadata.title,
        description: page.metadata.description,
        images: [page.metadata.image || ogImage],
        creator: "@hundemit",
        site: "@hundemit",
      },
      alternates: {
        canonical: ogUrl,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}
