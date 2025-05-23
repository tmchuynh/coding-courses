import { Course, Schedule } from "../types/types";

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

export interface CourseSchedule extends Course {
  subtitle: string;
  formatOptions: string[];
  schedule: Schedule;
  instructors: string;
  includes: string[];
}
