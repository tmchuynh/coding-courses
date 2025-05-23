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
  level?: string;
  category?: string;
  duration?: string;
  format?: string;
  keyProjects?: string[];
  description?: string;
  focus?: string[];
  outcomes: string[];
  next?: string[];
};

export type Times = {
  durationWeeks: number;
  startTime: string;
  endTime: string;
  days: string[];
  options?: string[];
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