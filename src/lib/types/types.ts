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
  duration?: string;
  format?: string;
  keyProjects?: string[];
  description?: string;
  focus?: string[];
  outcomes: string[];
  next?: string[];
};

export type Schedule = {
  duration: string;
  weeklySessions: string;
  sessionLength: string;
  options: string[];
};

export type CourseSchedule = {
  ageGroup: string;
  schedules: CourseSchedule[];
};