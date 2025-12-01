import Link from "next/link";
import { Chatbot } from "../chatbot";
import BlurFade from "@/components/magicui/blur-fade";

export function ChatSection() {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <section className="px-2" id="chatbot">
      <BlurFade
        className="opacity-0 space-y-3 mb-3"
        delay={BLUR_FADE_DELAY + 1.65}
      >
        <h2
          id="contact-heading"
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center"
        >
          Chatte mit mir.
        </h2>

        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
          Stelle mir Fragen zu meinen Projekten, meiner Arbeit oder mir selbst.
          Infos zu meinem Chatbot erhältst du{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/nordi-ai`}
            target="_blank"
            className="inline-flex items-center cursor-pointer hover:scale-105 underline transition-all duration-300 ease-out"
          >
            hier.
          </Link>
        </p>
      </BlurFade>
      <BlurFade
        className="opacity-0 flex w-full max-w-2xl h-[80svh] sm:max-h-[800px] mx-auto"
        delay={BLUR_FADE_DELAY + 1.7}
      >
        <Chatbot />
      </BlurFade>
    </section>
  );
}
