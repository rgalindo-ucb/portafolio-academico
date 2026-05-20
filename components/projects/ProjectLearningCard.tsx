import { Sparkles } from "lucide-react";

type ProjectLearningCardProps = {
  learning: string;
  index: number;
};

export function ProjectLearningCard({ learning, index }: ProjectLearningCardProps) {
  return (
    <article className="project-learning-card rounded-lg border p-5">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border project-learning-card__icon">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs text-[color-mix(in_srgb,var(--subject-accent)_74%,transparent)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-[color-mix(in_srgb,var(--subject-text)_78%,transparent)]">
        {learning}
      </p>
    </article>
  );
}
