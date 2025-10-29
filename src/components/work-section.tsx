import { DATA } from "@/data/resume/resume";
import BlurFade from "./magicui/blur-fade";
import { ResumeCard } from "./resume-card";

export default function WorkSection() {
  const BLUR_FADE_DELAY = 0.3;

  return (
    <>
      {/* Work Section */}
      <section id="work" aria-labelledby="work-heading" className="px-6">
        <div className="flex min-h-0 flex-col gap-y-3 max-w-2xl mx-auto">
          <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.7}>
            <h2 id="work-heading" className="text-xl font-bold">
              Berufserfahrung
            </h2>
          </BlurFade>
          {DATA.experience.work.map((work, id) => (
            <BlurFade
              key={work.company}
              className="opacity-0"
              delay={BLUR_FADE_DELAY + 0.8 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                previewUrl={work.previewUrl}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}
