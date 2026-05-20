export type SubjectColor = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export type SubjectTheme = SubjectColor;

export type SubjectVisuals = {
  heroImage: string;
  textureImage?: string;
  featuredImage?: string;
  reflectionImage?: string;
  imageCredit?: {
    name: string;
    url: string;
  };
};

export type Subject = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  heroSummary: string;
  academicFocus: string;
  reflection: string;
  competencies: string[];
  color: SubjectColor;
  gradient: string;
  visuals: SubjectVisuals;
  icon: string;
  featured: boolean;
};
