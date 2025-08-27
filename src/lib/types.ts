import { ReactNode } from "react";

// Metadata for the blog posts
export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  dates: string;
  active: boolean;
  description: string;
  tags: string[];
  links?: ProjectLink[];
  video?: string;
  typeofBlogPost: string;
};

export interface ProjectLink {
  type: string;
  href: string;
  icon: ReactNode;
}
