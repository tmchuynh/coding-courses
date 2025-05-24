import { CourseSchedule } from "@/lib/interfaces/courses";

export const frontendFundamentals: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Web Development",
    focus: "Overview of HTML, CSS, JS. Tools: VSCode, Chrome DevTools",
    outcomes:
      "Students can set up a dev environment and understand how websites are built.",
  },
  {
    week: 2,
    title: "HTML Fundamentals",
    focus: "Semantic HTML, elements, attributes, page structure",
    outcomes: "Build a basic personal bio webpage using HTML.",
  },
  {
    week: 3,
    title: "CSS Basics",
    focus: "Selectors, properties, units, colors, typography",
    outcomes: "Style their HTML page with fonts, colors, and spacing.",
  },
  {
    week: 4,
    title: "CSS Layouts",
    focus: "Box model, positioning, display, flexbox intro",
    outcomes: "Create a multi-section landing page layout.",
  },
  {
    week: 5,
    title: "Advanced Layouts",
    focus: "Flexbox deep dive, intro to Grid",
    outcomes: "Build a responsive pricing or feature section.",
  },
  {
    week: 6,
    title: "Responsive Design",
    focus: "Media queries, mobile-first design",
    outcomes: "Make an existing layout responsive.",
  },
  {
    week: 7,
    title: "JavaScript Basics",
    focus: "Variables, types, operators, functions",
    outcomes: "Build a simple calculator or quote generator.",
  },
  {
    week: 8,
    title: "DOM Manipulation",
    focus: "Selecting elements, event listeners, interactivity",
    outcomes: "Add interactivity to a site (e.g. button click events).",
  },
  {
    week: 9,
    title: "Forms & User Input",
    focus: "Forms, inputs, validation, feedback",
    outcomes: "Create a contact form with validation and alerts.",
  },
  {
    week: 10,
    title: "Project Planning + Setup",
    focus: "Wireframing, folder structure, assets",
    outcomes:
      "Plan and scaffold a final project (e.g. portfolio or product page).",
  },
  {
    week: 11,
    title: "Final Project Build (Part 1)",
    focus: "Independent building with instructor support",
    outcomes: "Start implementing final project with layout + content.",
  },
  {
    week: 12,
    title: "Final Project Build (Part 2) + Presentations",
    focus: "Polish design, add interactivity, debug",
    outcomes: "Complete and present final projects; peer review.",
  },
];
