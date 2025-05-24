import { CourseSchedule } from "@/lib/interfaces/courses";

export const advancedWebDev: CourseSchedule[] = [
  {
    week: 1,
    title: "Modern JavaScript (ESNext) & TypeScript Fundamentals",
    focus:
      "Deep dive into advanced ESNext features. Introduction to TypeScript: static typing, interfaces, types, and benefits for large-scale applications.",
    outcomes:
      " Understand TypeScript basics and apply ESNext features in code.",
    project:
      "Convert a small JavaScript project to TypeScript, adding types and interfaces.",
    projectDescription:
      "Students will take an existing small JavaScript application (e.g., a to-do list or a simple calculator) and refactor it into TypeScript. This involves adding type annotations to variables, function parameters, and return values, and defining interfaces or types for complex objects.",
  },
  {
    week: 2,
    title: "Advanced React Concepts",
    focus:
      "React Hooks in-depth (custom Hooks). Context API for state management. Performance optimization techniques (memo, useMemo, useCallback).",
    outcomes:
      " Implement custom React Hooks and optimize component performance.",
    project:
      "Create a custom React Hook for managing form input state and validation.",
    projectDescription:
      "Students will develop a reusable custom React Hook (e.g., `useFormInput`) that encapsulates logic for handling input field state, value changes, and basic validation. This hook can then be used in multiple form components.",
  },
  {
    week: 3,
    title: "State Management with Redux or Zustand",
    focus:
      "Choosing a state management library. Core concepts of Redux (actions, reducers, store, middleware) or Zustand (simplified state management).",
    outcomes: " Implement global state management for user authentication.",
    project:
      "Implement a global state for user authentication using Redux or Zustand in a React application.",
    projectDescription:
      "Students will integrate either Redux (with Redux Toolkit) or Zustand into a React application to manage global application state. A key feature to implement will be user authentication status (e.g., isLoggedIn, user profile) accessible across different components.",
  },
  {
    week: 4,
    title: "Advanced Routing and Navigation",
    focus:
      "Complex routing scenarios with React Router (nested routes, protected routes, programmatic navigation). Code splitting and lazy loading.",
    outcomes: " Implement nested routing and protected routes in a React app.",
    project:
      "Implement nested routing and a protected route in a React application using React Router.",
    projectDescription:
      "Using React Router, students will implement a more complex routing structure. This includes creating nested routes (e.g., a user dashboard with sub-pages) and a protected route that only allows access to authenticated users, redirecting others to a login page.",
  },
  {
    week: 5,
    title: "Introduction to Next.js for SSR and SSG",
    focus:
      "Benefits of Server-Side Rendering and Static Site Generation. Next.js fundamentals: pages, routing, data fetching methods (`getStaticProps`, `getServerSideProps`).",
    outcomes: " Create a Next.js application with SSG and SSR pages.",
    project:
      "Create a Next.js application with two pages: one statically generated (SSG) and one server-side rendered (SSR).",
    projectDescription:
      "Students will build a new Next.js application. They will create one page that fetches data at build time using `getStaticProps` (e.g., a blog index) and another page that fetches data on each request using `getServerSideProps` (e.g., a user profile page).",
  },
  {
    week: 6,
    title: "Building Full-Stack Applications with Next.js API Routes",
    focus:
      "Creating API endpoints within Next.js. Handling backend logic, database interactions, and authentication.",
    outcomes: " Build a Next.js API route for CRUD operations.",
    project:
      "Build a Next.js API route that interacts with a mock database to perform CRUD operations.",
    projectDescription:
      "Students will leverage Next.js API routes to create backend functionality. They will build a set of API endpoints (e.g., for managing a list of tasks) that perform Create, Read, Update, and Delete operations, initially using an in-memory array or a simple JSON file as a mock database.",
  },
  {
    week: 7,
    title: "Styling Strategies for Large Applications",
    focus:
      "CSS-in-JS (Styled Components, Emotion). Utility-first CSS (Tailwind CSS). Design systems and component libraries.",
    outcomes:
      " Style a React component library using Styled Components or Tailwind CSS.",
    project:
      "Style a React component library using Styled Components or Tailwind CSS, focusing on reusability.",
    projectDescription:
      "Students will create a small library of reusable UI components (e.g., Button, Card, Modal) and style them using either a CSS-in-JS solution like Styled Components or a utility-first framework like Tailwind CSS, emphasizing consistency and maintainability.",
  },
  {
    week: 8,
    title: "Testing Web Applications (Jest & React Testing Library)",
    focus:
      "Unit testing React components. Integration testing. Mocking API calls. Writing effective tests for maintainable code.",
    outcomes:
      " Write unit tests for React components and integration tests for API interactions.",
    project:
      "Write unit tests for React components and integration tests for API interactions using Jest and React Testing Library.",
    projectDescription:
      "Students will set up Jest and React Testing Library in their project. They will write unit tests for several React components, verifying their rendering and behavior. They will also write integration tests for scenarios involving API calls, mocking the fetch requests.",
  },
  {
    week: 9,
    title: "Web Performance Optimization",
    focus:
      "Analyzing and improving web performance: Lighthouse scores, code splitting, lazy loading images, caching strategies, minimizing bundle size.",
    outcomes:
      " Analyze and optimize web application performance using Lighthouse.",
    project:
      "Analyze a web application using Lighthouse, identify performance bottlenecks, and implement one optimization.",
    projectDescription:
      "Students will use browser developer tools (specifically Lighthouse) to audit a web application for performance. Based on the audit report, they will identify at least one performance bottleneck and implement a relevant optimization technique (e.g., lazy loading images, code splitting a large component).",
  },
  {
    week: 10,
    title: "Web Security Best Practices",
    focus:
      "Common web vulnerabilities (XSS, CSRF). Implementing security headers. Secure authentication and authorization practices.",
    outcomes:
      " Implement CSRF protection and secure HTTP headers in a web application.",
    project:
      "Implement CSRF protection and secure HTTP headers in a web application.",
    projectDescription:
      "Students will research common web security vulnerabilities. They will then implement measures to mitigate Cross-Site Request Forgery (CSRF) attacks (e.g., using CSRF tokens if applicable to their backend setup) and configure important security-related HTTP headers (e.g., Content Security Policy, X-Frame-Options).",
  },
  {
    week: 11,
    title: "Deployment and CI/CD for Web Applications",
    focus:
      "Deploying React/Next.js applications (Vercel, Netlify, AWS). Setting up CI/CD pipelines with GitHub Actions.",
    outcomes:
      " Set up a CI/CD pipeline for a Next.js application using GitHub Actions.",
    project:
      "Set up a CI/CD pipeline using GitHub Actions to automatically build, test, and deploy a Next.js application to Vercel.",
    projectDescription:
      "Students will configure a Continuous Integration/Continuous Deployment (CI/CD) pipeline using GitHub Actions. This pipeline will automatically trigger on pushes to their repository, run tests, build their Next.js application, and deploy it to a hosting platform like Vercel.",
  },
  {
    week: 12,
    title: "Capstone Project: Advanced Web Application",
    focus:
      "Students build a complex, production-ready web application incorporating advanced concepts learned throughout the course.",
    outcomes:
      " Develop a feature-rich web application demonstrating mastery of Next.js and advanced React concepts.",
    project:
      "Develop a feature-rich web application (e.g., a mini e-commerce site or a social media clone) using Next.js and advanced concepts.",
    projectDescription:
      "For their capstone, students will design and build a complex, feature-rich web application. This project should demonstrate mastery of Next.js, advanced React concepts, state management, API integration, testing, and deployment, resulting in a production-quality application (e.g., a simplified e-commerce platform, a basic social media feed, or a project management tool).",
  },
];
