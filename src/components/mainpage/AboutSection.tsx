"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume/resume";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className=" px-6">
      <BlurFade
        className="opacity-0 max-w-2xl mx-auto"
        delay={BLUR_FADE_DELAY + 0.4}
      >
        <h2 id="about-heading" className="text-xl font-bold">
          Über mich
        </h2>
      </BlurFade>
      <BlurFade
        className="opacity-0 max-w-2xl mx-auto"
        delay={BLUR_FADE_DELAY + 0.5}
      >
        <Markdown className="prose prose-p:m-0 prose-p:mb-1 max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert text-base text-justify ">
          {DATA.personal.summary}
        </Markdown>
      </BlurFade>
      <BlurFade
        className="opacity-0 max-w-2xl mx-auto"
        delay={BLUR_FADE_DELAY + 0.6}
      >
        <Link href="/CV Jan Hindemit.pdf" download>
          <Button
            variant="outline"
            className="mt-4 w-full hover:scale-105 transition-all duration-300 ease-out"
          >
            <ArrowDownToLine className="size-4" />
            <span>Lebenslauf</span>
          </Button>
        </Link>
      </BlurFade>
    </section>
  );
}
