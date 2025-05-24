import { CourseSchedule } from "@/lib/interfaces/courses";

export const fullStackFoundations: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Full Stack Development",
    focus:
      "Overview of full stack architecture (frontend, backend, database). Setting up development environment. HTML, CSS, and JavaScript basics review.",
    outcomes: "",
    project: "Create a simple personal portfolio page using HTML and CSS.",
    projectDescription:
      "Students will build a single-page static website to serve as a personal portfolio. This project will reinforce HTML for structure and CSS for styling, including basic layout and design elements.",
  },
  {
    week: 2,
    title: "Advanced HTML & CSS",
    focus:
      "Semantic HTML. Advanced CSS concepts: Flexbox, Grid, responsive design, and CSS preprocessors (Sass/LESS basics).",
    outcomes: "",
    project:
      "Rebuild the portfolio page using Flexbox or Grid for layout, ensuring responsiveness.",
    projectDescription:
      "Students will refactor their portfolio page from Week 1, applying advanced CSS layout techniques like Flexbox or CSS Grid to create a more complex and robust structure. Emphasis will be placed on making the page responsive across different screen sizes.",
  },
  {
    week: 3,
    title: "JavaScript Deep Dive - Part 1",
    focus:
      "ES6+ features (let/const, arrow functions, destructuring). DOM manipulation and event handling in depth.",
    outcomes: "",
    project:
      "Add interactive elements to the portfolio page using JavaScript DOM manipulation (e.g., a theme switcher).",
    projectDescription:
      "Students will enhance their portfolio page by adding interactivity using JavaScript. This could include features like a light/dark theme switcher, an image carousel, or dynamic content display based on user interaction, focusing on DOM manipulation and event handling.",
  },
  {
    week: 4,
    title: "JavaScript Deep Dive - Part 2",
    focus:
      "Asynchronous JavaScript: Callbacks, Promises, Async/Await. Making API calls with Fetch API.",
    outcomes: "",
    project:
      "Fetch data from a public API (e.g., GitHub repositories) and display it on the portfolio page.",
    projectDescription:
      "Students will integrate external data into their portfolio page by making an asynchronous API call using the Fetch API (or Axios). For example, they could fetch and display their GitHub repositories or blog posts from a public API.",
  },
  {
    week: 5,
    title: "Introduction to Backend Development with Node.js",
    focus:
      "Understanding Node.js runtime. NPM and package management. Building a simple HTTP server.",
    outcomes: "",
    project: "Set up a simple Node.js server that responds with 'Hello World'.",
    projectDescription:
      "Students will install Node.js and NPM, initialize a new Node.js project, and write a basic script to create an HTTP server that listens on a specific port and responds with a 'Hello World' message to incoming requests.",
  },
  {
    week: 6,
    title: "Building RESTful APIs with Express.js",
    focus:
      "Introduction to Express.js framework. Routing, middleware, request and response handling. Designing RESTful APIs.",
    outcomes: "",
    project:
      "Create an Express.js API with a few routes for basic CRUD operations (mock data).",
    projectDescription:
      "Using the Express.js framework, students will build a simple RESTful API. This API will have routes to handle GET, POST, PUT, and DELETE requests for a resource (e.g., 'tasks' or 'notes'), initially using in-memory mock data.",
  },
  {
    week: 7,
    title: "Introduction to Databases",
    focus:
      "Concepts of relational (SQL) and NoSQL databases. Data modeling basics. Overview of popular database systems.",
    outcomes: "",
    project: "Design a simple database schema for a blog (posts, comments).",
    projectDescription:
      "Students will learn about data modeling and design a database schema for a simple blog application. This includes defining tables (for SQL) or collections (for NoSQL), fields, data types, and relationships (e.g., between posts and comments).",
  },
  {
    week: 8,
    title: "Working with a Database (e.g., MongoDB/PostgreSQL)",
    focus:
      "Setting up a database. CRUD operations (Create, Read, Update, Delete). Integrating database with Express.js application.",
    outcomes: "",
    project:
      "Connect the Express.js API to a MongoDB or PostgreSQL database and implement CRUD operations.",
    projectDescription:
      "Students will set up a local or cloud-based database (MongoDB or PostgreSQL). They will then modify their Express.js API from Week 6 to connect to this database and persist data, implementing full CRUD (Create, Read, Update, Delete) operations.",
  },
  {
    week: 9,
    title: "Frontend Framework/Library Introduction (e.g., React Basics)",
    focus:
      "Introduction to a modern frontend framework/library. Component-based architecture, state, and props.",
    outcomes: "",
    project: "Build a simple React component to display a list of items.",
    projectDescription:
      "Students will be introduced to React (or a similar frontend library/framework). They will set up a basic React project and create a component that takes an array of data as a prop and renders it as a list on the page, demonstrating understanding of components and props.",
  },
  {
    week: 10,
    title: "Connecting Frontend and Backend",
    focus:
      "Fetching data from backend APIs and displaying it on the frontend. Handling forms and submitting data to the backend.",
    outcomes: "",
    project:
      "Create a React frontend that fetches and displays data from the Express.js API.",
    projectDescription:
      "Students will build a React frontend application that communicates with their Express.js API. This involves fetching data from a GET endpoint to display it, and creating a form to submit data to a POST endpoint on the backend.",
  },
  {
    week: 11,
    title: "Version Control with Git & GitHub",
    focus:
      "Fundamentals of Git: repositories, commits, branches, merging. Collaborative workflows with GitHub.",
    outcomes: "",
    project:
      "Initialize a Git repository for the project, make commits, and push to GitHub.",
    projectDescription:
      "Students will initialize a Git repository for their full-stack project, practice making meaningful commits, create and switch between branches for feature development, merge branches, and push their codebase to a remote repository on GitHub.",
  },
  {
    week: 12,
    title: "Mini Full Stack Project & Deployment Basics",
    focus:
      "Students build a small full stack application integrating all learned concepts. Introduction to deployment concepts.",
    outcomes: "",
    project:
      "Develop a mini full-stack application (e.g., a simple to-do list) and deploy it (e.g., Heroku/Vercel).",
    projectDescription:
      "As a capstone, students will build a small but complete full-stack application (e.g., a to-do list, a simple note-taking app) that integrates their frontend (React), backend (Node.js/Express), and database. They will then learn the basics of deploying this application to a cloud platform like Heroku or Vercel.",
  },
];
