"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ProjectGalleryItem } from "@/types/project";

type ProjectGalleryLightboxProps = {
  activeIndex: number;
  items: ProjectGalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function ProjectGalleryLightbox({
  activeIndex,
  items,
  onClose,
  onNext,
  onPrevious,
}: ProjectGalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const activeItem = items[activeIndex];
  const hasMultipleItems = items.length > 1;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (!hasMultipleItems) {
        return;
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [hasMultipleItems, onClose, onNext, onPrevious]);

  if (!mounted || !activeItem) {
    return null;
  }

  return createPortal(
    <div
      aria-labelledby="project-gallery-lightbox-title"
      aria-modal="true"
      className="project-lightbox fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
    >
      <button
        aria-label="Cerrar imagen ampliada"
        className="project-lightbox__backdrop absolute inset-0"
        onClick={onClose}
        type="button"
      />

      <div className="project-lightbox__shell relative z-10 w-full max-w-6xl">
        <div
          className={cn(
            "project-lightbox__panel relative overflow-hidden rounded-[1.25rem] border",
            hasMultipleItems && "project-lightbox__panel--multi",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            aria-label="Cerrar imagen ampliada"
            className="project-lightbox__close"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {hasMultipleItems ? (
            <>
              <button
                aria-label="Ver imagen anterior"
                className="project-lightbox__nav project-lightbox__nav--left"
                onClick={onPrevious}
                type="button"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                aria-label="Ver imagen siguiente"
                className="project-lightbox__nav project-lightbox__nav--right"
                onClick={onNext}
                type="button"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          ) : null}

          <div className="project-lightbox__media-wrap">
            <div className="project-lightbox__image-frame">
              <Image
                alt={activeItem.alt}
                className="project-lightbox__image"
                fill
                sizes="100vw"
                src={activeItem.src}
              />
            </div>
          </div>

          <div className="project-lightbox__meta">
            <div className="min-w-0">
              <p
                id="project-gallery-lightbox-title"
                className="truncate text-sm font-semibold text-[var(--subject-text)] sm:text-base"
              >
                {activeItem.alt}
              </p>
              {activeItem.caption ? (
                <p className="mt-2 text-sm leading-6 text-[color-mix(in_srgb,var(--subject-text)_72%,transparent)]">
                  {activeItem.caption}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
