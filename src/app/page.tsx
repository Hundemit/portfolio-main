import BlurFade from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { StructuredData } from "@/components/structured-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { getPostsByNames } from "@/data/blog";
import { DATA } from "@/data/resume/resume";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.3;

export default async function Page() {
  const projects = await getPostsByNames(["pokedex-next", "google-cloud-data-analytics-zertifikat", "gyff", "vitepress"]);

  const imagerow1 = [
    {
      src: "/me-images/beach.png",
      alt: "Jan Hindemit am Strand - Urlaub und Freizeit",
    },
    {
      src: "/me-images/zurich.png",
      alt: "Jan Hindemit in Zürich - Schweiz Reise",
    },
    {
      src: "/me-images/mirror.png",
      alt: "Jan Hindemit Spiegelselfie - Portfolio Aufnahme",
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
    },
    {
      src: "/me-images/bike.png",
      alt: "Jan Hindemit auf dem Fahrrad - Outdoor Aktivitäten",
    },
    {
      src: "/me-images/grill.png",
      alt: "Jan Hindemit beim Grillen - Freizeit mit Freunden",
    },
    {
      src: "/me-images/famliy-beach.png",
      alt: "Jan Hindemit mit Familie am Strand - Urlaubszeit",
    },
  ];

  return (
    <>
      <StructuredData type="person" />
      <StructuredData type="organization" />
      <main className="flex flex-col min-h-[100dvh] sm:space-y-10 space-y-6 px-6 sm:my-24 my-12 duration-1000">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY}>
                  <SparklesText colors={{ first: "#b0b0b0", second: "#444444" }} sparklesCount={5} className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none duration-1000">
                    {`${DATA.personal.name}`}
                    <span className="inline-block animate-wiggle-more animate-infinite animate-duration-[5000ms] animate-ease-in-out">✌️</span>
                  </SparklesText>
                </BlurFade>

                <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.1}>
                  <div id="description" className="h-14">
                    <FlipWords duration={8000} className="md:text-xl p-0 m-0" words={[...DATA.personal.description]} />
                  </div>
                </BlurFade>
              </div>
              <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.2}>
                <Avatar className="size-28 border hover:rotate-12 hover:scale-110 transition-all duration-300 ease-out">
                  <AvatarImage className="object-cover select-none pointer-events-none" alt={DATA.personal.name} src={DATA.personal.avatarUrl} />
                  <AvatarFallback>{DATA.personal.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="images">
          <div className="w-full">
            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.3}>
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
                <Marquee className="py-2" style={{ "--duration": "40s" } as React.CSSProperties}>
                  {imagerow1.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={150}
                      height={96}
                      className="object-cover w-fit h-24 rounded-md hover:scale-110 filter hover:grayscale-0 duration-300 transition-all ease-out select-none pointer-events-none"
                      loading="lazy"
                    />
                  ))}
                </Marquee>
                <Marquee reverse className="py-2" style={{ "--duration": "40s" } as React.CSSProperties}>
                  {imagerow2.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={150}
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
        <section id="about" aria-labelledby="about-heading">
          <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.4}>
            <h2 id="about-heading" className="text-xl font-bold">
              Über mich
            </h2>
          </BlurFade>
          <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.5}>
            <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert text-base text-justify">{DATA.personal.summary}</Markdown>
          </BlurFade>
          <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.6}>
            <Link href="/CV Jan Hindemit.pdf" download>
              <Button variant="outline" className="mt-4 w-full hover:scale-105 transition-all duration-300 ease-out">
                <ArrowDownToLine className="size-4" />
                <span>Lebenslauf</span>
              </Button>
            </Link>
          </BlurFade>
        </section>
        <section id="work" aria-labelledby="work-heading">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.7}>
              <h2 id="work-heading" className="text-xl font-bold">
                Berufserfahrung
              </h2>
            </BlurFade>
            {DATA.experience.work.map((work, id) => (
              <BlurFade key={work.company} className="opacity-0" delay={BLUR_FADE_DELAY + 0.8 + id * 0.05}>
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
        <section id="education" aria-labelledby="education-heading">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 0.9}>
              <h2 id="education-heading" className="text-xl font-bold">
                Ausbildung
              </h2>
            </BlurFade>
            {DATA.experience.education.map((education, id) => (
              <BlurFade key={education.school} className="opacity-0" delay={BLUR_FADE_DELAY + 0.9 + id * 0.05}>
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
        <section id="skills" aria-labelledby="skills-heading">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 1.1}>
              <h2 id="skills-heading" className="text-xl font-bold">
                Techstack
              </h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.skills.map((skill, id) => (
                <BlurFade key={skill.name} className="opacity-0" delay={BLUR_FADE_DELAY + 1.2 + id * 0.05}>
                  <Link href={skill.url} target="_blank">
                    <Badge className="hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">{skill.name}</Badge>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="py-16" aria-labelledby="projects-heading">
          <div className="w-full ">
            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 1.5}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 id="projects-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Schau dir meine neuesten{" "}
                    <Link href="/blog" className="inline-flex items-center cursor-pointer gap-2 hover:scale-105 underline transition-all duration-1000 ease-out">
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
            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 1.6}>
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee className="py-8" style={{ "--duration": "40s" } as React.CSSProperties}>
                  {projects.map((project, id) => (
                    <div key={id} className="w-full sm:w-auto sm:max-w-72 max-w-72">
                      <ProjectCard
                        slug={project.slug}
                        title={project.metadata.title}
                        description={project.metadata.description}
                        dates={project.metadata.dates}
                        tags={project.metadata.tags}
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
        <section id="contact" className="sm:pt-24 pt-12 pb-12" aria-labelledby="contact-heading">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
            <BlurFade className="opacity-0" delay={BLUR_FADE_DELAY + 1.7}>
              <div className="space-y-3">
                <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Nimm Kontakt auf.
                </h2>

                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {Object.entries(DATA.personal.social).map(([name, social]) => (
                    <Button variant="outline" asChild key={name} className="hover:scale-105 transition-all duration-300 ease-out">
                      <Link target="_blank" href={social.url} aria-label={social.name}>
                        <social.icon className="size-4 " />
                        <span>{social.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>

                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Willst du mit mir sprechen? Schreibe mir einfach eine Nachricht und ich werde mich so schnell wie möglich melden.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
