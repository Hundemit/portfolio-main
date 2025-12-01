import { ProjectsSection } from "./ProjectsSection";
import { getPostsByNames } from "@/data/blog";

export async function ProjectsSectionWrapper() {
  const projects = await getPostsByNames([
    "nordi-rechno",
    "nordi-ai",
    "pokedex-next",
    "google-cloud-data-analytics-zertifikat",
    "gyff",
    "aga-gutachten",
    "link-table",
  ]);

  return <ProjectsSection projects={projects} />;
}
