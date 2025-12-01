"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume/resume";
import React from "react";
import { Bot, MoveDownLeft } from "lucide-react";
import { ChatButton } from "./ChatButton";
import { Button } from "../ui/button";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero" className="px-6">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY}>
              <SparklesText
                colors={{ first: "#b0b0b0", second: "#444444" }}
                sparklesCount={5}
                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none duration-1000"
              >
                {`${DATA.personal.name}`}
                <span className="inline-block animate-wiggle-more animate-infinite animate-duration-[5000ms] animate-ease-in-out">
                  ✌️
                </span>
              </SparklesText>
            </BlurFade>

            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.1}>
              <div id="description" className="h-14">
                <FlipWords
                  duration={8000}
                  className="md:text-xl p-0 m-0"
                  words={[...DATA.personal.description]}
                />
              </div>
            </BlurFade>
          </div>
          <BlurFade
            className="opacity-0 relative flex flex-col items-center justify-center gap-2 bg-card p-2 rounded-t-[5rem] rounded-b-xl"
            delay={BLUR_FADE_DELAY + 0.2}
          >
            <Avatar className="size-28 border hover:rotate-12 hover:scale-110 transition-all duration-300 ease-out">
              <AvatarImage
                className="object-cover select-none pointer-events-none"
                alt={DATA.personal.name}
                src={DATA.personal.avatarUrl}
              />
              <AvatarFallback>{DATA.personal.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
