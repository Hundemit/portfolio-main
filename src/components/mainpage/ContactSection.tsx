"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume/resume";
import Link from "next/link";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="sm:pt-24 pt-12 pb-12 max-w-2xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
        <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 1.7}>
          <div className="space-y-3">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            >
              Nimm Kontakt auf.
            </h2>

            <div className="flex flex-wrap gap-2 items-center justify-center">
              {Object.entries(DATA.personal.social).map(([name, social]) => (
                <Button
                  variant="outline"
                  asChild
                  key={name}
                  className="hover:scale-105 transition-all duration-300 ease-out"
                >
                  <Link
                    target="_blank"
                    href={social.url}
                    aria-label={social.name}
                  >
                    <social.icon className="size-4 " />
                    <span>{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>

            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Willst du mit mir sprechen? Schreibe mir einfach eine Nachricht
              und ich werde mich so schnell wie möglich melden.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
