import { StructuredData } from "@/components/structured-data";
import { getPostsByNames } from "@/data/blog";
import WorkSection from "@/components/work-section";
import { HeroSection } from "@/components/mainpage/HeroSection";
import { ImagesSection } from "@/components/mainpage/ImagesSection";
import { AboutSection } from "@/components/mainpage/AboutSection";
import { EducationSection } from "@/components/mainpage/EducationSection";
import { SkillsSection } from "@/components/mainpage/SkillsSection";
import { ProjectsSection } from "@/components/mainpage/ProjectsSection";
import { ContactSection } from "@/components/mainpage/ContactSection";
import { ChatSection } from "@/components/mainpage/ChatSection";

export default async function Page() {
  const projects = await getPostsByNames([
    "nordi-rechno",
    "nordi-ai",
    "pokedex-next",
    "google-cloud-data-analytics-zertifikat",
    "gyff",
    "aga-gutachten",
    "link-table",
  ]);

  return (
    <>
      <StructuredData type="person" />
      <StructuredData type="organization" />

      <main className="flex flex-col sm:gap-10 gap-6 min-h-[100dvh] sm:my-28 my-12 duration-1000">
        {/* Hero Section */}

        <HeroSection />
        <ImagesSection />
        <AboutSection />
        <WorkSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <ChatSection />
        <ContactSection />
      </main>
    </>
  );
}
