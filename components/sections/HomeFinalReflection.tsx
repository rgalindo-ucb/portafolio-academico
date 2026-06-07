import Link from "next/link";
import type { CSSProperties } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

import { ParallaxBlock } from "@/components/motion/ParallaxBlock";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { subjects } from "@/data/subjects";

const contactLinks = [
  {
    label: "Correo",
    href: "mailto:rgalindomerida@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
];

export function HomeFinalReflection() {
  const leadership = subjects.find((subject) => subject.slug === "desarrollo-de-liderazgo");
  const programming = subjects.find(
    (subject) => subject.slug === "introduccion-a-la-programacion",
  );
  const reflectionImage =
    leadership?.visuals.reflectionImage ??
    programming?.visuals.heroImage ??
    subjects[0]?.visuals.reflectionImage;

  return (
    <section
      id="contacto"
      className="section-padding relative overflow-hidden border-y border-white/10"
    >
      <div className="container">
        <Reveal y={24}>
          <div className="home-final-reflection premium-panel overflow-hidden">
            <ParallaxBlock amount={-4} className="absolute inset-0">
              <div
                className="home-final-reflection__image"
                style={
                  {
                    "--home-final-image": `url("${reflectionImage}")`,
                  } as CSSProperties
                }
              />
            </ParallaxBlock>
            <div className="home-final-reflection__shade" aria-hidden="true" />
            <div className="relative z-10 p-8 sm:p-10 lg:p-14">
              <p className="section-kicker">07 / Reflexion final y contacto</p>
              <p className="font-editorial mt-8 max-w-5xl text-4xl leading-tight text-foreground sm:text-6xl">
                “Cada materia aportó una herramienta distinta para observar problemas, tomar decisiones y construir soluciones.”
              </p>
              <p className="mt-8 max-w-3xl text-base leading-8 text-foreground/76">
                Siempre pensé que la razón principal de la vida era ser la mejor versión posible de uno mismo, pero ahora, también creo que aparte de esta meta individual debemos apuntar a traer el mayor bien posible a nuestro entorno cuán grande este pueda llegar a ser, desde nuestra familia, barrio, ciudad, país o al mundo entero. Agradezco este semestre y en especial a los profesores por ayudarme a entender que el entorno es igual de importante que el individuo y que no se puede pensar en uno sin el otro.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Button key={item.label} asChild variant="outline">
                      <Link href={item.href}>
                        <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {item.label}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
