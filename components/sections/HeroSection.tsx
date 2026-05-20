import { GraduationCap, PenLine, Sparkles } from "lucide-react";

import { AnimatedText } from "@/components/motion/AnimatedText";
import { ParallaxBlock } from "@/components/motion/ParallaxBlock";
import { Reveal } from "@/components/motion/Reveal";
import { universityName } from "@/data/subjects";

const studentName = "Rodrigo Galindo";

export function HeroSection() {
  return (
    <section className="home-hero relative overflow-hidden border-b border-white/10">
      <div className="home-hero__mesh" aria-hidden="true" />
      <div className="home-hero__grid" aria-hidden="true" />
      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.06fr_0.94fr] lg:py-24">
        <div className="relative z-10">
          <Reveal y={12}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {universityName}
            </p>
          </Reveal>

          <Reveal delay={0.08} y={12}>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-mono text-sm text-primary">01</span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {studentName}
              </span>
              <span className="eyebrow-line" />
            </div>
          </Reveal>

          <AnimatedText
            as="h1"
            text="Portafolio académico del semestre."
            className="font-editorial mt-8 max-w-5xl text-5xl font-normal leading-none text-balance sm:text-7xl lg:text-[5.6rem]"
          />

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-foreground/82">
              Del aprendizaje en clase a la construcción de criterio profesional.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Este portafolio reúne trabajos, análisis, proyectos y reflexiones desarrolladas en distintas materias, mostrando la evolución de competencias académicas, estratégicas y digitales.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={34} className="relative z-10">
          <div className="home-hero-card premium-panel overflow-hidden p-5 sm:p-7">
            <ParallaxBlock amount={-5} className="home-hero-card__visual">
              <div className="home-hero-card__mark" aria-hidden="true" />
              <div className="home-hero-card__line" aria-hidden="true" />
            </ParallaxBlock>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <span>Presentación académica</span>
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>

              <p className="font-editorial mt-12 text-4xl leading-none text-foreground sm:text-5xl">
                Del aprendizaje en clase a la construcción de criterio profesional.
              </p>

              <div className="mt-10 grid gap-3">
                <div className="home-hero-note">
                  <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>Escuela de negocios orientada a la producción, competitividad y gestión empresarial.</span>
                </div>
                <div className="home-hero-note">
                  <PenLine className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span>Evidencias académicas organizadas por materia, proyecto y aprendizaje desarrollado.</span>
                </div>
              </div>

              <p className="mt-10 text-sm leading-7 text-muted-foreground">
                Cada sección presenta una parte del semestre: la comprensión del entorno empresarial, el desarrollo del liderazgo, el análisis de datos, la lógica de programación y la creatividad aplicada.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
