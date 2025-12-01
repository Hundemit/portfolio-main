"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { Image } from "next/dist/client/image-component";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

const imagerow1 = [
  {
    src: "/me-images/beach.png",
    alt: "Jan Hindemit am Strand - Urlaub und Freizeit",
    width: 72,
  },
  {
    src: "/me-images/zurich.png",
    alt: "Jan Hindemit in Zürich - Schweiz Reise",
  },
  {
    src: "/me-images/mirror.png",
    alt: "Jan Hindemit Spiegelselfie - Portfolio Aufnahme",
    width: 72,
  },
  {
    src: "/me-images/ice.png",
    alt: "Jan Hindemit beim Eishockey - Sport und Hobbies",
  },
];

const imagerow2 = [
  {
    src: "/me-images/aqua.png",
    alt: "Jan Hindemit im Schwimmbad - Entspannung",
    width: 72,
  },
  {
    src: "/me-images/bike.png",
    alt: "Jan Hindemit auf dem Fahrrad - Outdoor Aktivitäten",
  },
  {
    src: "/me-images/grill.png",
    alt: "Jan Hindemit beim Grillen - Freizeit mit Freunden",
    width: 72,
  },
  {
    src: "/me-images/famliy-beach.png",
    alt: "Jan Hindemit mit Familie am Strand - Urlaubszeit",
  },
];

export function ImagesSection() {
  return (
    <section id="images" className="px-6">
      <div className="w-full max-w-2xl mx-auto">
        <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.3}>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
            <Marquee
              className="py-2"
              style={{ "--duration": "40s" } as React.CSSProperties}
            >
              {imagerow1.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width || 150}
                  height={96}
                  className="object-cover w-fit h-24 rounded-md hover:scale-110 filter hover:grayscale-0 duration-300 transition-all ease-out select-none pointer-events-none"
                  loading="lazy"
                />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="py-2"
              style={{ "--duration": "40s" } as React.CSSProperties}
            >
              {imagerow2.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width || 150}
                  height={96}
                  className="object-cover w-fit h-24 rounded-md hover:scale-110 filter hover:grayscale-0 duration-300 transition-all ease-out select-none pointer-events-none"
                  loading="lazy"
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
