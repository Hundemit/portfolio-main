import { ReactNode } from "react";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links?: ProjectLink[];
  video?: string;
};

export interface ProjectLink {
  type: string;
  href: string;
  icon: ReactNode;
}
