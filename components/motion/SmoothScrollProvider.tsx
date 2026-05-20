"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const handleScrollTo = (event: Event) => {
        const top = (event as CustomEvent<{ top?: number }>).detail?.top;

        if (typeof top !== "number") {
          return;
        }

        window.scrollTo({ top, left: 0, behavior: "auto" });
      };

      window.addEventListener("portfolio:scroll-to", handleScrollTo);

      return () => {
        window.removeEventListener("portfolio:scroll-to", handleScrollTo);
      };
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    const handleScrollTo = (event: Event) => {
      const top = (event as CustomEvent<{ top?: number }>).detail?.top;

      if (typeof top !== "number") {
        return;
      }

      lenis.scrollTo(top, { force: true });
      ScrollTrigger.refresh();
    };

    lenis.on("scroll", ScrollTrigger.update);

    const handleScrollLock = (event: Event) => {
      const shouldLock = (event as CustomEvent<{ locked?: boolean }>).detail
        ?.locked;

      if (shouldLock) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    const handleRouteScrollTop = () => {
      lenis.scrollTo(0, { immediate: true, force: true });
      ScrollTrigger.refresh();
    };

    window.addEventListener("portfolio:modal-scroll-lock", handleScrollLock);
    window.addEventListener("portfolio:route-scroll-top", handleRouteScrollTop);
    window.addEventListener("portfolio:scroll-to", handleScrollTo);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("portfolio:modal-scroll-lock", handleScrollLock);
      window.removeEventListener("portfolio:route-scroll-top", handleRouteScrollTop);
      window.removeEventListener("portfolio:scroll-to", handleScrollTo);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return children;
}
