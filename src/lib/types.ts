import { ReactNode } from "react";
import type { UIMessage } from "@ai-sdk/react";

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
  type: "Website" | "GitHub";
  href: string;
  icon: ReactNode;
}

/**
 * Model configuration type
 */
export interface Model {
  id: string;
  name: string;
}

/**
 * Suggestion type - a string representing a suggested follow-up question
 */
export type Suggestion = string;

/**
 * Chat status type for loading states
 */
export type ChatLoadingStatus = "idle" | "loading" | "error";

/**
 * Initial message configuration
 */
export interface InitialMessageConfig {
  text: string;
  role: "assistant";
}

/**
 * Helper type for message text extraction
 */
export type MessageTextExtractor = (message: UIMessage) => string;
