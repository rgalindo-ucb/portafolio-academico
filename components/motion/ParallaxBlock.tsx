"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

type ParallaxBlockProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
};

export function ParallaxBlock({
  children,
  className,
  amount = -10,
}: ParallaxBlockProps) {
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
      gsap.to(element, {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: element.parentElement ?? element,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, element);

    return () => context.revert();
  }, [amount]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
}
