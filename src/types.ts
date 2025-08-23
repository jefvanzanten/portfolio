export type Language = "TypeScript/JavaScript" | "CSS" | "Kotlin" | "Java";
export type Library = "React" | "Vue" | "Angular" | "Svelte";

export type Project = {
  id: number;
  name: string;
  description: string;
  slug: string;
  url: string;
  languages: Language[];
  libraries: string[];
  images: string[];
  category: "Frontend" | "Backend" | "Mobile" | "Fullstack";
  lastUpdated: string;
  highlighted: boolean;
};
