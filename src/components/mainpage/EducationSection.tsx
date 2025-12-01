"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume/resume";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

export function EducationSection() {
  return (
    <section
      id="education"
      className="px-6"
      aria-labelledby="education-heading"
    >
      <div className="flex min-h-0 flex-col gap-y-3 max-w-2xl mx-auto">
        <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.9}>
          <h2 id="education-heading" className="text-xl font-bold">
            Ausbildung
          </h2>
        </BlurFade>
        {DATA.experience.education.map((education, id) => (
          <BlurFade
            key={education.school}
            className="opacity-0"
            delay={BLUR_FADE_DELAY + 0.9 + id * 0.05}
          >
            <ResumeCard
              key={education.school}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              href={education.href}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
              description={education.description}
              previewUrl={education.previewUrl}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
