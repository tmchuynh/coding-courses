import { CourseSchedule } from "@/lib/interfaces/courses";

export const fullStackFoundations: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Full Stack Development",
    focus:
      "Overview of full stack architecture (frontend, backend, database). Setting up development environment. HTML, CSS, and JavaScript basics review.",
    outcomes: "Build static pages (HTML/CSS).",
    project: "HTML/CSS Portfolio Page",
    projectDescription:
      "Students will build a single-page static website to serve as a personal portfolio. This project will reinforce HTML for structure and CSS for styling, including basic layout and design elements.",
  },
  {
    week: 2,
    title: "Advanced HTML & CSS",
    focus:
      "Semantic HTML. Advanced CSS concepts: Flexbox, Grid, responsive design, and CSS preprocessors (Sass/LESS basics).",
    outcomes: "Use advanced CSS for layout.",
    project: "Responsive Portfolio Layout",
    projectDescription:
      "Students will refactor their portfolio page from Week 1, applying advanced CSS layout techniques like Flexbox or CSS Grid to create a more complex and robust structure. Emphasis will be placed on making the page responsive across different screen sizes.",
  },
  {
    week: 3,
    title: "JavaScript Deep Dive - Part 1",
    focus:
      "ES6+ features (let/const, arrow functions, destructuring). DOM manipulation and event handling in depth.",
    outcomes: "Manipulate DOM with JavaScript.",
    project: "Interactive JS Portfolio",
    projectDescription:
      "Students will enhance their portfolio page by adding interactivity using JavaScript. This could include features like a light/dark theme switcher, an image carousel, or dynamic content display based on user interaction, focusing on DOM manipulation and event handling.",
  },
  {
    week: 4,
    title: "JavaScript Deep Dive - Part 2",
    focus:
      "Asynchronous JavaScript: Callbacks, Promises, Async/Await. Making API calls with Fetch API.",
    outcomes: "Use async JS for API calls.",
    project: "Portfolio API Data Display",
    projectDescription:
      "Students will integrate external data into their portfolio page by making an asynchronous API call using the Fetch API (or Axios). For example, they could fetch and display their GitHub repositories or blog posts from a public API.",
  },
  {
    week: 5,
    title: "Introduction to Backend Development with Node.js",
    focus:
      "Understanding Node.js runtime. NPM and package management. Building a simple HTTP server.",
    outcomes: "Create basic Node.js server.",
    project: "Simple Node.js Server",
    projectDescription:
      "Students will install Node.js and NPM, initialize a new Node.js project, and write a basic script to create an HTTP server that listens on a specific port and responds with a 'Hello World' message to incoming requests.",
  },
  {
    week: 6,
    title: "Building RESTful APIs with Express.js",
    focus:
      "Introduction to Express.js framework. Routing, middleware, request and response handling. Designing RESTful APIs.",
    outcomes: "Build REST APIs with Express.",
    project: "Express.js Mock CRUD API",
    projectDescription:
      "Using the Express.js framework, students will build a simple RESTful API. This API will have routes to handle GET, POST, PUT, and DELETE requests for a resource (e.g., 'tasks' or 'notes'), initially using in-memory mock data.",
  },
  {
    week: 7,
    title: "Introduction to Databases",
    focus:
      "Concepts of relational (SQL) and NoSQL databases. Data modeling basics. Overview of popular database systems.",
    outcomes: "Understand database concepts.",
    project: "Blog DB Schema Design",
    projectDescription:
      "Students will learn about data modeling and design a database schema for a simple blog application. This includes defining tables (for SQL) or collections (for NoSQL), fields, data types, and relationships (e.g., between posts and comments).",
  },
  {
    week: 8,
    title: "Working with a Database (e.g., MongoDB/PostgreSQL)",
    focus:
      "Setting up a database. CRUD operations (Create, Read, Update, Delete). Integrating database with Express.js application.",
    outcomes: "Integrate DB with Express API.",
    project: "Express API with DB CRUD",
    projectDescription:
      "Students will set up a local or cloud-based database (MongoDB or PostgreSQL). They will then modify their Express.js API from Week 6 to connect to this database and persist data, implementing full CRUD (Create, Read, Update, Delete) operations.",
  },
  {
    week: 9,
    title: "Frontend Framework/Library Introduction (e.g., React Basics)",
    focus:
      "Introduction to a modern frontend framework/library. Component-based architecture, state, and props.",
    outcomes: "Understand React basics.",
    project: "Simple React List Component",
    projectDescription:
      "Students will be introduced to React (or a similar frontend library/framework). They will set up a basic React project and create a component that takes an array of data as a prop and renders it as a list on the page, demonstrating understanding of components and props.",
  },
  {
    week: 10,
    title: "Connecting Frontend and Backend",
    focus:
      "Fetching data from backend APIs and displaying it on the frontend. Handling forms and submitting data to the backend.",
    outcomes: "Connect React to backend API.",
    project: "React Frontend for API",
    projectDescription:
      "Students will build a React frontend application that communicates with their Express.js API. This involves fetching data from a GET endpoint to display it, and creating a form to submit data to a POST endpoint on the backend.",
  },
  {
    week: 11,
    title: "Version Control with Git & GitHub",
    focus:
      "Fundamentals of Git: repositories, commits, branches, merging. Collaborative workflows with GitHub.",
    outcomes: "Use Git/GitHub for version control.",
    project: "Git & GitHub Project Setup",
    projectDescription:
      "Students will initialize a Git repository for their full-stack project, practice making meaningful commits, create and switch between branches for feature development, merge branches, and push their codebase to a remote repository on GitHub.",
  },
  {
    week: 12,
    title: "Mini Full Stack Project & Deployment Basics",
    focus:
      "Students build a small full stack application integrating all learned concepts. Introduction to deployment concepts.",
    outcomes: "Build and deploy simple full stack app.",
    project: "Mini Full Stack App & Deploy",
    projectDescription:
      "As a capstone, students will build a small but complete full-stack application (e.g., a to-do list, a simple note-taking app) that integrates their frontend (React), backend (Node.js/Express), and database. They will then learn the basics of deploying this application to a cloud platform like Heroku or Vercel.",
  },
];
