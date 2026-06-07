"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  as?: "h1" | "h2" | "p";
  className?: string;
  delay?: number;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const word: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export function AnimatedText({
  text,
  as = "h2",
  className,
  delay = 0,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");
  const sharedProps = {
    className: cn(className),
    "aria-label": text,
    initial: prefersReducedMotion ? false : "hidden",
    whileInView: prefersReducedMotion ? undefined : "visible",
    viewport: { once: true, margin: "-12% 0px" },
    variants: container,
    transition: { delay },
  };

  const content = (
    <>
      {words.map((currentWord, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block overflow-visible pb-[0.12em] align-top"
          key={`${currentWord}-${index}`}
          variants={word}
        >
          {currentWord}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </>
  );

  if (as === "h1") {
    return <motion.h1 {...sharedProps}>{content}</motion.h1>;
  }

  if (as === "p") {
    return <motion.p {...sharedProps}>{content}</motion.p>;
  }

  return <motion.h2 {...sharedProps}>{content}</motion.h2>;
}
