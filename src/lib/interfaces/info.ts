import { Subsection } from "../types/types";

export interface Page {
  id?: number;
  sectionTitle: string;
  description?: string;
  subsections?: Subsection[];
  content?: string[];
  note?: string;
}
