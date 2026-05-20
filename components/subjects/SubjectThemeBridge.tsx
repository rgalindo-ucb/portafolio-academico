"use client";

import { useEffect } from "react";

import type { Subject } from "@/types/subject";

type SubjectThemeBridgeProps = {
  subject: Subject;
};

export function SubjectThemeBridge({ subject }: SubjectThemeBridgeProps) {
  useEffect(() => {
    const body = document.body;
    const variables = {
      "--subject-primary": subject.color.primary,
      "--subject-secondary": subject.color.secondary,
      "--subject-accent": subject.color.accent,
      "--subject-background": subject.color.background,
      "--subject-text": subject.color.text,
      "--subject-gradient": subject.gradient,
    };

    body.classList.add("subject-route-theme");
    Object.entries(variables).forEach(([name, value]) => {
      body.style.setProperty(name, value);
    });

    return () => {
      body.classList.remove("subject-route-theme");
      Object.keys(variables).forEach((name) => {
        body.style.removeProperty(name);
      });
    };
  }, [subject]);

  return null;
}
