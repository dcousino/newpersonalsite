export type SectionKey =
  | "about"
  | "skills"
  | "experience"
  | "education"
  | "contact";

export type Language = "html" | "css" | "js" | "json" | "yaml" | "tsx";

export type TokenType =
  | "keyword"
  | "string"
  | "comment"
  | "tag"
  | "attr"
  | "value"
  | "punct"
  | "function"
  | "number"
  | "boolean"
  | "operator"
  | "type"
  | "constant";

export type BrandKey = "microsoft" | "philips" | "ups" | "usmc";

export interface Token {
  text: string;
  type?: TokenType;
  brand?: BrandKey;
}

export interface CodeLine {
  indent?: number;
  tokens: Token[];
}

export interface SectionData {
  key: SectionKey;
  fileName: string;
  language: Language;
  title: string;
  lines: CodeLine[];
  accent?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  timeframe: string;
  highlights: string[];
  brand: BrandKey;
}

export interface EducationEntry {
  school: string;
  credential: string;
  year: string;
}
