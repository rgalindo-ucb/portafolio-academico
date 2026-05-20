"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function SectionReveal({
  children,
  className,
  y = 40,
}: SectionRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!element || prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [y]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
}
