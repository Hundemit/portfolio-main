import { DATA } from "@/data/resume/resume";

interface StructuredDataProps {
  type: "person" | "organization" | "article" | "breadcrumb";
  article?: {
    title: string;
    description: string;
    publishedAt: string;
    image: string;
    slug: string;
  };
}

export function StructuredData({ type, article }: StructuredDataProps) {
  let schema: any = {};

  if (type === "person") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: DATA.personal.name,
      url: DATA.personal.url,
      image: `${DATA.personal.url}/me.png`,
      jobTitle: "Frontend Developer & UI/UX Designer",
      description: DATA.personal.summary,
      email: DATA.personal.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Trappenkamp",
        addressCountry: "DE",
      },
      sameAs: [DATA.personal.social.github.url, DATA.personal.social.LinkedIn.url, DATA.personal.social.twitter?.url].filter(Boolean),
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Hochschule Flensburg",
      },
      knowsAbout: ["Web Development", "Frontend Development", "UI/UX Design", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    };
  }

  if (type === "organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: DATA.personal.name,
      url: DATA.personal.url,
      logo: `${DATA.personal.url}/me.png`,
      sameAs: [DATA.personal.social.github.url, DATA.personal.social.LinkedIn.url],
      contactPoint: {
        "@type": "ContactPoint",
        email: DATA.personal.email,
        contactType: "Professional",
      },
    };
  }

  if (type === "article" && article) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      image: article.image,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      author: {
        "@type": "Person",
        name: DATA.personal.name,
        url: DATA.personal.url,
      },
      publisher: {
        "@type": "Person",
        name: DATA.personal.name,
        logo: {
          "@type": "ImageObject",
          url: `${DATA.personal.url}/me.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${DATA.personal.url}/blog/${article.slug}`,
      },
    };
  }

  if (type === "breadcrumb" && article) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: DATA.personal.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${DATA.personal.url}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `${DATA.personal.url}/blog/${article.slug}`,
        },
      ],
    };
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
