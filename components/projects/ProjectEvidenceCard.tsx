import Link from "next/link";
import {
  ExternalLink,
  FileArchive,
  FileImage,
  FileText,
  Github,
  Images,
  Presentation,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { ProjectEvidence } from "@/types/project";

type ProjectEvidenceCardProps = {
  evidence: ProjectEvidence;
};

export function ProjectEvidenceCard({ evidence }: ProjectEvidenceCardProps) {
  const Icon = getEvidenceIcon(evidence.type);

  return (
    <Link
      href={evidence.url}
      rel="noreferrer"
      target="_blank"
      className="project-evidence-card rounded-lg border p-5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="project-evidence-card__icon inline-flex h-11 w-11 items-center justify-center rounded-md border">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <Badge className="subject-badge" variant="outline">
          {evidence.type.toUpperCase()}
        </Badge>
      </div>

      <strong className="mt-5 block text-base font-semibold text-[var(--subject-text)]">
        {evidence.label}
      </strong>

      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--subject-accent)]">
        Abrir recurso
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

function getEvidenceIcon(type: ProjectEvidence["type"]) {
  switch (type) {
    case "image":
      return FileImage;
    case "github":
      return Github;
    case "pptx":
      return Presentation;
    case "zip":
      return FileArchive;
    case "external":
      return Images;
    case "docx":
    case "pdf":
    default:
      return FileText;
  }
}
