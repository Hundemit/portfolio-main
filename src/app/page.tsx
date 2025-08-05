import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Marquee } from "@/components/magicui/marquee";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FlipWords } from "@/components/ui/flip-words";
import { ClientOnly } from "@/components/ui/client-only";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume/resume";
import { ArrowDownToLine, BookMarkedIcon, FileDown } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const projects = await getBlogPosts();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10" suppressHydrationWarning>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <SparklesText colors={{ first: "#b0b0b0", second: "#444444" }} sparklesCount={5} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none duration-1000">
                  {`Hallo,  i'm ${DATA.personal.name.split(" ")[0]} 👋`}
                </SparklesText>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY + 0.1} yOffset={8}>
                <div suppressHydrationWarning>
                  <FlipWords duration={8000} className="md:text-xl p-0 m-0" words={Array.from(DATA.personal.description)} />
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY + 0.2}>
              <Avatar className="size-28 border">
                <AvatarImage className="object-cover" alt={DATA.personal.name} src={DATA.personal.avatarUrl} />
                <AvatarFallback>{DATA.personal.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Über mich</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">{DATA.personal.summary}</Markdown>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <Link href="/CV-Jan-Hindemit.pdf" download>
            <Button variant="outline" className="mt-4 w-full">
              <ArrowDownToLine className="size-4" />
              <span>Lebenslauf</span>
            </Button>
          </Link>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Berufserfahrung</h2>
          </BlurFade>
          {DATA.experience.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Ausbildung</h2>
          </BlurFade>
          {DATA.experience.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                href={education.href}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Techstack</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge className="hover:-translate-y-1 transition-all duration-300 ease-out" key={skill}>
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-full py-16">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Schau dir meine neuesten{" "}
                  <Link href="/projects" className="inline-flex items-center cursor-pointer gap-2 hover:scale-105 hover:underline transition-all duration-1000 ease-out" suppressHydrationWarning>
                    Projekte
                  </Link>{" "}
                  an.
                </h2>

                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ich habe an verschiedenen Projekten gearbeitet, von einfachen Websites bis hin zu komplexen Webanwendungen. Hier sind einige meiner Favoriten.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee className="[--duration:15s] py-4">
                {projects.map((project, id) => (
                  <div key={id} className="w-full sm:w-auto sm:max-w-72 max-w-72">
                    <ProjectCard
                      slug={project.slug}
                      title={project.metadata.title}
                      description={project.metadata.description}
                      dates={project.metadata.dates}
                      tags={project.metadata.technologies}
                      image={project.metadata.image}
                      video={project.metadata.video}
                      links={project.metadata.links}
                      descriptionShow={true}
                    />
                  </div>
                ))}
              </Marquee>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-24">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nimm Kontakt auf.</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Willst du mit mir sprechen? Schreibe mir einfach eine Nachricht und ich werde mich so schnell wie möglich melden.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
