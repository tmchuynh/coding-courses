import { CourseSchedule } from "@/lib/interfaces/courses";

export const webDevAndAppCreation: CourseSchedule[] = [
  {
    week: 1,
    title: "Modern Web Dev Recap & Advanced Tools",
    focus:
      "Review of HTML, CSS, JavaScript fundamentals. Introduction to modern development tools: advanced VS Code features, browser developer tools deep dive, version control basics (Git conceptual).",
    outcomes:
      "Students will solidify core web concepts and become more proficient with essential development tools.",
  },
  {
    week: 2,
    title: "Advanced HTML & CSS Techniques",
    focus:
      "Semantic HTML5 for accessibility and SEO. Advanced CSS selectors, CSS custom properties (variables), pseudo-classes and pseudo-elements. Introduction to CSS preprocessors (Sass/SCSS concepts).",
    outcomes:
      "Students will write more structured, maintainable, and accessible HTML and CSS, utilizing advanced styling techniques.",
  },
  {
    week: 3,
    title: "Responsive Design Mastery: Flexbox & Grid",
    focus:
      "Deep dive into CSS Flexbox for 1D layouts. Comprehensive look at CSS Grid for 2D layouts. Mobile-first design strategies and advanced media queries.",
    outcomes:
      "Students will be able to create complex, responsive layouts that adapt seamlessly to various screen sizes.",
  },
  {
    week: 4,
    title: "JavaScript: Beyond the Basics",
    focus:
      "ES6+ features (let/const, arrow functions, template literals, destructuring). Working with arrays and objects (map, filter, reduce). Asynchronous JavaScript: Callbacks, Promises (conceptual).",
    outcomes:
      "Students will write more modern and efficient JavaScript, and understand asynchronous operations.",
  },
  {
    week: 5,
    title: "Introduction to Frontend Frameworks/Libraries",
    focus:
      "What are frontend frameworks (e.g., React, Vue, Svelte)? Why use them? Core concepts: components, state, props. Building a simple interactive UI with a beginner-friendly library or framework concepts.",
    outcomes:
      "Students will understand the benefits of component-based architecture and build a small application using framework principles.",
  },
  {
    week: 6,
    title: "Building Reusable UI Components",
    focus:
      "Thinking in components: breaking down UIs into reusable pieces. Props for passing data. Managing component state. Styling components. Project: Build a small component library.",
    outcomes:
      "Students will design and implement reusable UI components, leading to more modular and scalable applications.",
  },
  {
    week: 7,
    title: "Understanding Backend Concepts & HTTP",
    focus:
      "What is a backend server? Client-Server architecture. HTTP methods (GET, POST, PUT, DELETE). Understanding APIs and how data is exchanged. RESTful API principles.",
    outcomes:
      "Students will grasp fundamental backend concepts and understand how frontend applications communicate with servers.",
  },
  {
    week: 8,
    title: "Working with APIs: Fetching & Displaying Data",
    focus:
      "Using the Fetch API in JavaScript to make requests to public APIs. Handling JSON data. Displaying API data dynamically on a webpage. Error handling for API requests.",
    outcomes:
      "Students will be able to integrate external data into their web applications by consuming public APIs.",
  },
  {
    week: 9,
    title: "Introduction to Node.js & Express.js",
    focus:
      "What is Node.js? Setting up a basic Node.js server. Introduction to Express.js for building simple APIs. Creating basic API endpoints (routes) to serve data.",
    outcomes:
      "Students will set up a simple backend server using Node.js and Express and create basic API endpoints.",
  },
  {
    week: 10,
    title: "Full-Stack Project Part 1: Frontend Development",
    focus:
      "Planning a simple full-stack application (e.g., to-do list, blog). Designing the frontend UI. Implementing frontend components and logic to interact with planned backend API.",
    outcomes:
      "Students will develop the frontend of a full-stack application, including UI and API interaction logic.",
  },
  {
    week: 11,
    title: "Full-Stack Project Part 2: Backend Development & Integration",
    focus:
      "Building the backend API endpoints for the project using Node.js/Express. Connecting frontend to the backend. Testing full-stack functionality. Basic data persistence (e.g., using a JSON file or simple in-memory store).",
    outcomes:
      "Students will develop the backend API for their project and integrate it with the frontend, creating a functional full-stack application.",
  },
  {
    week: 12,
    title: "Project Deployment & Showcase",
    focus:
      "Introduction to deploying web applications. Deploying the frontend (e.g., Netlify, Vercel). Basic backend deployment concepts. Final project presentations and peer review.",
    outcomes:
      "Students will deploy their full-stack application and present their work, understanding basic deployment strategies.",
  },
];
