import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  number: string;
  title: string;
  description?: string;
  align?: "start" | "split";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  number,
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        align === "split" && "lg:grid-cols-[0.75fr_1.25fr] lg:items-end",
        className,
      )}
    >
      <div>
        <Reveal y={12}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-primary">{number}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </span>
            <span className="eyebrow-line" />
          </div>
        </Reveal>
        <AnimatedText
          text={title}
          className="font-editorial mt-5 max-w-4xl text-4xl font-normal leading-none text-foreground sm:text-6xl"
        />
      </div>

      {description ? (
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
