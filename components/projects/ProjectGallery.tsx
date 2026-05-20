"use client";

import Image from "next/image";
import { useState } from "react";

import { ProjectGalleryLightbox } from "@/components/projects/ProjectGalleryLightbox";
import { cn } from "@/lib/utils";
import type { ProjectGalleryItem } from "@/types/project";

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
};

export function ProjectGallery({ items }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (items.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showNextImage = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex + 1) % items.length;
    });
  };

  const showPreviousImage = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex - 1 + items.length) % items.length;
    });
  };

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            className={cn(
              "project-gallery-card project-gallery-card--interactive group overflow-hidden rounded-xl border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              items.length === 1 && "xl:col-span-2 xl:mx-auto xl:w-full xl:max-w-3xl",
            )}
            onClick={() => openLightbox(index)}
            type="button"
          >
            <div className="project-gallery-card__media aspect-[4/3]">
              <Image
                alt={item.alt}
                className="project-gallery-card__image h-full w-full object-cover"
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                src={item.src}
              />
            </div>

            <div className="project-gallery-card__caption p-5 sm:p-6">
              <strong className="block text-sm font-semibold leading-6 text-[var(--subject-text)] sm:text-base">
                {item.alt}
              </strong>
              {item.caption ? (
                <p className="mt-2 text-sm leading-6 text-[color-mix(in_srgb,var(--subject-text)_72%,transparent)]">
                  {item.caption}
                </p>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <ProjectGalleryLightbox
          activeIndex={activeIndex}
          items={items}
          onClose={closeLightbox}
          onNext={showNextImage}
          onPrevious={showPreviousImage}
        />
      ) : null}
    </>
  );
}
