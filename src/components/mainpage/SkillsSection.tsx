"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume/resume";
import Link from "next/link";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

export function SkillsSection() {
  return (
    <section id="skills" className="px-6" aria-labelledby="skills-heading">
      <div className="flex min-h-0 flex-col gap-y-3 max-w-2xl mx-auto">
        <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 1.1}>
          <h2 id="skills-heading" className="text-xl font-bold">
            Techstack
          </h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.skills.map((skill, id) => (
            <BlurFade
              key={skill.name}
              className="opacity-0"
              delay={BLUR_FADE_DELAY + 1.2 + id * 0.05}
            >
              <Link href={skill.url} target="_blank">
                <Badge className="hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                  {skill.name}
                </Badge>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
