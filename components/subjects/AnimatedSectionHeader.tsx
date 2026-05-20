"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedSectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  number?: string;
  className?: string;
  align?: "start" | "between";
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AnimatedSectionHeader({
  kicker,
  title,
  description,
  number,
  className,
  align = "start",
}: AnimatedSectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion
    ? false
    : { opacity: 0, y: 26, filter: "blur(8px)" };
  const animate = prefersReducedMotion
    ? undefined
    : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-5",
        align === "between" && "lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
      initial={initial}
      transition={{ duration: 0.78, ease: easeOut }}
      viewport={{ once: true, amount: 0.42 }}
      whileInView={animate}
    >
      <div>
        <div className="flex items-center gap-4">
          {number ? (
            <span className="font-mono text-xs text-[var(--subject-accent)]">
              {number}
            </span>
          ) : null}
          <p className="section-kicker">{kicker}</p>
          <motion.span
            aria-hidden="true"
            className="hidden h-px w-20 origin-left subject-line sm:block"
            initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.14, ease: easeOut }}
            viewport={{ once: true, amount: 0.6 }}
            whileInView={prefersReducedMotion ? undefined : { scaleX: 1, opacity: 1 }}
          />
        </div>
        <h2 className="font-editorial mt-5 max-w-4xl text-4xl font-normal leading-none sm:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
