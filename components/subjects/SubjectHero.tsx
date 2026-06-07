import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { subjectIcons, type SubjectIconName } from "@/components/subjects/subject-icons";
import { SubjectVisualBackground } from "@/components/subjects/SubjectVisualBackground";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { universityName } from "@/data/subjects";
import type { Subject } from "@/types/subject";

type SubjectHeroProps = {
  subject: Subject;
  index: number;
};

export function SubjectHero({ subject, index }: SubjectHeroProps) {
  const Icon = subjectIcons[subject.icon as SubjectIconName] ?? subjectIcons.sparkles;

  return (
    <section className="relative overflow-hidden border-b subject-divider">
      <SubjectVisualBackground
        imageUrl={subject.visuals.heroImage}
        intensity="low"
        variant="heroImage"
      />
      <div
        className="absolute inset-0 z-[1] opacity-20"
        style={{ background: subject.gradient } as CSSProperties}
      />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,hsl(0_0%_100%/0.045)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.035)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20" />
      <div className="absolute -left-24 top-24 z-[3] h-80 w-80 rounded-full bg-[color-mix(in_srgb,var(--subject-accent)_13%,transparent)] blur-3xl" />
      <div className="absolute bottom-10 right-0 z-[3] h-96 w-96 rounded-full bg-[color-mix(in_srgb,var(--subject-primary)_18%,transparent)] blur-3xl" />

      <div className="container relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal y={12}>
            <div className="flex items-center gap-4">
              <span
                className="font-mono text-sm"
                style={{ color: subject.color.accent }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {universityName}
              </span>
              <span className="h-px flex-1 subject-line" />
            </div>
          </Reveal>

          <AnimatedText
            as="h1"
            text={subject.name}
            className="font-editorial mt-8 max-w-5xl text-5xl font-normal leading-snug text-white sm:text-7xl lg:text-8xl"
          />

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/82">
              {subject.description}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-[var(--subject-accent)] text-[var(--subject-background)] shadow-[0_18px_48px_color-mix(in_srgb,var(--subject-accent)_18%,transparent)] hover:bg-[color-mix(in_srgb,var(--subject-accent)_88%,white)]"
                size="lg"
              >
                <Link href="#archivo-materia">
                  Ver trabajos
                  <ArrowDownRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} y={34}>
          <aside
            className="subject-hero-shell"
          >
            <div
              className="subject-hero-frame aspect-[4/5] rounded-lg border p-6"
            >
              <div
                aria-hidden="true"
                className="subject-hero-frame__media"
                style={
                  {
                    backgroundImage: `url("${subject.visuals.textureImage ?? subject.visuals.featuredImage ?? subject.visuals.reflectionImage ?? subject.visuals.heroImage}")`,
                  } as CSSProperties
                }
              />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Badge className="subject-badge-accent" variant="secondary">
                    {subject.shortName}
                  </Badge>
                  <Icon
                    className="h-7 w-7"
                    style={{ color: subject.color.accent }}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-editorial text-7xl leading-none text-white/20 sm:text-8xl">
                    {subject.shortName.slice(0, 2).toUpperCase()}
                  </p>
                  <div className="mt-6 h-px subject-line" />
                  <p className="mt-6 text-sm leading-7 text-white/78">
                    {subject.heroSummary}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>

      {subject.visuals.imageCredit ? (
        <a
          className="absolute bottom-4 right-4 z-10 hidden rounded-md border border-white/10 bg-black/25 px-2.5 py-1 text-[0.65rem] font-medium text-white/48 backdrop-blur transition-colors hover:text-white/78 sm:inline-flex"
          href={subject.visuals.imageCredit.url}
          rel="noreferrer"
          target="_blank"
        >
          Foto: {subject.visuals.imageCredit.name}
        </a>
      ) : null}
    </section>
  );
}
