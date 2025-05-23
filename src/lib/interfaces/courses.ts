import { Course, Times } from "../types/types";

export interface Track {
  track: string;
  grades: string;
  prerequisites: string | null;
  next: string[];
  skills: string[];
  description?: string;
}

export interface Roadmap {
  gradeGroup: string;
  roadmaps: Curriculum[];
}

export interface Curriculum {
  title: string;
  courses: Course[];
}

export interface Schedules extends Course {
  subtitle: string;
  formatOptions: string[];
  schedule: Times;
  instructors: string;
  includes: string[];
}
