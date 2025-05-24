import { Schedules } from "../interfaces/courses";

export type NotFoundContextType = {
  isNotFound: boolean;
  setNotFound: (value: boolean) => void;
};

export type Testimonial = {
  testimonial: string;
  author: string;
};

export type Subsection = {
  id?: number;
  title: string;
  points?: string[];
  description?: string;
};

export type Stories = {
  name: string;
  grade: string;
  location: string;
  quote: string;
  before: string;
  during: string;
  after: string;
  keyOutcomes: string;
};

export type FAQs = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  faqs: FAQs[];
};

export type Course = {
  courseName: string;
  subtitle?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  category?: string;
  duration?: string;
  format?: string;
  keyProjects?: string[];
  description?: string;
  focus?: string[];
  outcomes?: string[];
  next?: string[];
  price?: Price | number;
};

export type Schedule = {
  durationWeeks: number;
  startTime: string;
  format: string;
  endTime: string;
  days: string[];
  options?: string[];
  instructors?: string[];
};

export type CourseSchedule = {
  ageGroup: string;
  schedules: Schedules[];
};

export type Metrics = {
  label: string;
  value: string;
  description: string;
};

export type Staff = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export type StaffTeams = {
  category: string;
  subtitle?: string;
  description?: string;
  members: Staff[];
};

export type Price = { online: number; inPerson: number };