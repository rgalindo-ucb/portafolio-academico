"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    const scheduledFrames: number[] = [];
    const scheduledTimeouts: number[] = [];

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.dispatchEvent(new Event("portfolio:route-scroll-top"));
    };

    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) {
        scrollToTop();
        return;
      }

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (!target) {
        return;
      }

      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        18;

      window.dispatchEvent(
        new CustomEvent("portfolio:scroll-to", {
          detail: {
            top: Math.max(0, top),
          },
        }),
      );
    };

    const scheduleScrollToHash = () => {
      scrollToHash();

      scheduledFrames.push(window.requestAnimationFrame(scrollToHash));
      scheduledFrames.push(
        window.requestAnimationFrame(() => {
          scheduledFrames.push(window.requestAnimationFrame(scrollToHash));
        }),
      );

      [120, 320, 700].forEach((delay) => {
        scheduledTimeouts.push(window.setTimeout(scrollToHash, delay));
      });
    };

    scheduleScrollToHash();

    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("load", scrollToHash);

    return () => {
      scheduledFrames.forEach((frameId) => window.cancelAnimationFrame(frameId));
      scheduledTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("load", scrollToHash);
    };
  }, [pathname]);

  return null;
}
