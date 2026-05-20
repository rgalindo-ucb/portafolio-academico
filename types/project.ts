export type ProjectType =
  | "Informe"
  | "Presentación"
  | "Investigación"
  | "Proyecto"
  | "Práctica"
  | "Ensayo";

export type ProjectEvidence = {
  type: "pdf" | "docx" | "pptx" | "zip" | "image" | "github" | "external";
  label: string;
  url: string;
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subject: string;
  date: string;
  type: ProjectType;
  description: string;
  context: string;
  objective: string;
  process: string;
  result: string;
  keyLearnings: string[];
  tools: string[];
  tags: string[];
  featured: boolean;
  imageUrl?: string;
  fileUrl?: string;
  evidence?: ProjectEvidence[];
  gallery?: ProjectGalleryItem[];
};
