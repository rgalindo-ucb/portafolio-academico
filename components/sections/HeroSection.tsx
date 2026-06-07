import { Briefcase, Github, Heart, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

import { AnimatedText } from "@/components/motion/AnimatedText";
import { ParallaxBlock } from "@/components/motion/ParallaxBlock";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { universityName } from "@/data/subjects";

const studentName = "Rodrigo Riosei Galindo Merida";
const studentProfession = "Estudiante de Negocios y Ciencia de Datos";
const profileDescription =
  "Soy un profesional con experiencia en el área de ventas, administrativa y financiera. Mi enfoque y orientación al cliente, la negociación y cierre de tratos me permite construir relaciones sólidas y alcanzar objetivos estratégicos. Con una sólida ética laboral y una capacidad para trabajar bajo presión."

const hardSkills = ["Python", "Java", "Programación", "MS Office", "Bash Scripting", "JSON/XML"];
const softSkills = ["Liderazgo", "Negociación", "Comunicación efectiva", "Pensamiento estratégico", "Resolución de problemas", "Atención al detalle"];
const hobbies = ["Descubrir nueva música", "Lectura", "Videojuegos","Ricing (Hyprland)" ];

export function HeroSection() {
  return (
    <section className="home-hero relative overflow-hidden border-b border-white/10">
      <div className="home-hero__mesh" aria-hidden="true" />
      <div className="home-hero__grid" aria-hidden="true" />
      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
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
                Presentación personal
              </span>
              <span className="eyebrow-line" />
            </div>
          </Reveal>

          <AnimatedText
            as="h1"
            text={`${studentName}`}
            className="font-editorial mt-8 max-w-5xl text-5xl font-normal leading-none text-balance sm:text-7xl lg:text-[5.6rem]"
          />

          <Reveal delay={0.18}>
            <p className="mt-8 text-lg font-semibold text-primary">{studentProfession}</p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-foreground/82">
              {profileDescription}
            </p>
          </Reveal>

          <Reveal delay={0.34}>
           <div className="mt-10 grid gap-6">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Descripción personal</p>
                <p className="mt-3 text-base leading-7 text-foreground">
                  Soy una persona curiosa, enfocada a aprender continuamente y con una gran pasión por la tecnología. Soy muy competitivo por lo que me gusta afrontar desafíos que me permitan crecer y desafiar mis límites. Me considero una persona empática que busca entender y ayudar a los demás.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={34} className="relative z-10">
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="/portfolio/Headshot.png"
                alt="Foto personal de Rodrigo Galindo"
                className="h-72 w-full object-cover object center"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <CardHeader className="pb-0 pt-6 px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>{studentName}</CardTitle>
                  <CardDescription>{studentProfession}</CardDescription>
                </div>
                <Sparkles className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-6 pb-6 pt-2">
              <div className="grid gap-4 text-sm text-foreground/90">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Carrera: Negocios y Ciencia de Datos</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>Intereses: Tecnología, finanzas y negocios</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <Mail className="h-4 w-4 text-blue-500" aria-hidden="true" />
                  <span>Correo: rgalindomerida@gmail.com</span>
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Habilidades Duras</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hardSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Habilidades Blandas</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Pasatiempos e intereses</p>
                <div className="mt-4 space-y-2 text-sm text-foreground/90">
                  {hobbies.map((hobby) => (
                    <div key={hobby} className="rounded-2xl bg-white/5 p-3">
                      <span className="inline-flex items-center gap-2">
                        <Heart className="h-4 w-4 text-pink-400" aria-hidden="true" />
                        {hobby}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Redes sociales</p>
                <div className="mt-4 grid gap-3 text-sm text-foreground/90">
                  <a
                    href="https://www.linkedin.com/in/rodrigo-galindo-573261aa/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" aria-hidden="true" />
                    linkedin.com/in/rodrigo-galindo
                  </a>
                  <a
                    href="https://github.com/Momon36"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    github.com/rodrigogalindo
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
