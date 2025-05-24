import { Course, Price, Schedule } from "../types/types";

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
  description?: string;
  courses: Course[];
  price?: Price;
}

export interface Schedules extends Course {
  subtitle: string;
  schedule: Schedule[];
  includes: string[];
}

export interface CourseSchedule {
  week: number;
  title: string;
  focus: string;
  outcomes: string;
  project?: string;
  projectDescription?: string;
}