import { CourseSchedule } from "@/lib/interfaces/courses";

export const advancedBackendAndDevops: CourseSchedule[] = [
  {
    week: 1,
    title: "Advanced Node.js and Express.js",
    focus:
      "Deep dive into Node.js event loop, streams, and modules. Advanced Express.js: custom middleware, error handling, and structuring large applications.",
    outcomes: "Use advanced Node/Express.",
    project: "Express Custom Middleware",
    projectDescription:
      "Students will take an existing Express.js application (or build a new simple one) and refactor it to include custom middleware for request logging. They will also implement a centralized error handling mechanism to manage different types of errors gracefully.",
  },
  {
    week: 2,
    title: "Relational Databases with PostgreSQL",
    focus:
      "Advanced SQL concepts. Working with PostgreSQL. Using an ORM like Sequelize or TypeORM for database interactions.",
    outcomes: "Use PostgreSQL with ORM.",
    project: "PostgreSQL & ORM Schema",
    projectDescription:
      "Students will design a relational database schema for a moderately complex application (e.g., an online learning platform with users, courses, enrollments). They will then implement this schema using PostgreSQL and an ORM like Sequelize or TypeORM, defining models and relationships.",
  },
  {
    week: 3,
    title: "Authentication and Authorization Strategies",
    focus:
      "Implementing robust authentication: JWT, OAuth 2.0. Role-based access control (RBAC) and permissions.",
    outcomes: "Implement robust auth/authz.",
    project: "JWT Auth & RBAC API",
    projectDescription:
      "Students will secure an Express.js API by implementing JSON Web Token (JWT) based authentication for user login and session management. They will also add role-based access control (RBAC) to protect certain routes based on user roles (e.g., admin, user).",
  },
  {
    week: 4,
    title: "API Security and Best Practices",
    focus:
      "Securing APIs: input validation, rate limiting, handling common vulnerabilities (OWASP Top 10). HTTPS and SSL/TLS.",
    outcomes: "Secure APIs effectively.",
    project: "API Input Validation & Rate Limit",
    projectDescription:
      "Students will enhance the security of an API by implementing robust input validation for all incoming requests (e.g., using a library like Joi or express-validator). They will also add rate limiting middleware to prevent abuse.",
  },
  {
    week: 5,
    title: "Testing Backend Applications",
    focus:
      "Unit testing, integration testing, and end-to-end testing for backend services. Using frameworks like Jest or Mocha.",
    outcomes: "Test backend applications.",
    project: "Backend API Testing (Jest/Mocha)",
    projectDescription:
      "Using a testing framework like Jest or Mocha with Supertest, students will write comprehensive tests for their backend API. This includes unit tests for individual service functions/modules and integration tests for API endpoints, aiming for high code coverage.",
  },
  {
    week: 6,
    title: "Introduction to DevOps and CI/CD",
    focus:
      "What is DevOps? Principles of Continuous Integration and Continuous Delivery/Deployment. Overview of CI/CD pipelines.",
    outcomes: "Understand DevOps & CI/CD.",
    project: "Research Backend CI/CD",
    projectDescription:
      "Students will research and create a document or diagram outlining the typical stages of a Continuous Integration and Continuous Delivery/Deployment (CI/CD) pipeline for a backend application. This should include stages like code commit, build, test, deploy to staging, and deploy to production.",
  },
  {
    week: 7,
    title: "Version Control with Git - Advanced",
    focus:
      "Advanced Git workflows (Gitflow). Rebasing, cherry-picking. Managing complex projects and collaboration.",
    outcomes: "Use advanced Git workflows.",
    project: "Advanced Git Workflow (Gitflow)",
    projectDescription:
      "Students will practice advanced Git techniques by applying the Gitflow branching model (or a similar feature-branch workflow) to a sample project. This includes creating feature branches, release branches, hotfix branches, and merging them appropriately through a simulated release cycle.",
  },
  {
    week: 8,
    title: "Introduction to Docker and Containerization",
    focus:
      "Understanding containers. Writing Dockerfiles. Building and running Docker images for backend applications.",
    outcomes: "Containerize apps with Docker.",
    project: "Dockerfile for Backend App",
    projectDescription:
      "Students will write a Dockerfile for their Node.js/Express backend application. This Dockerfile will specify the base image, copy application code, install dependencies, expose necessary ports, and define the command to run the application, ultimately building a runnable Docker image.",
  },
  {
    week: 9,
    title: "Container Orchestration with Docker Compose",
    focus:
      "Managing multi-container applications using Docker Compose. Setting up development and testing environments.",
    outcomes: "Use Docker Compose.",
    project: "Docker Compose Multi-Container",
    projectDescription:
      "Students will create a `docker-compose.yml` file to define and manage a multi-container application. This will typically include their backend application service and a separate service for their PostgreSQL database, linking them together for development and testing.",
  },
  {
    week: 10,
    title: "Building CI/CD Pipelines with GitHub Actions",
    focus:
      "Automating build, test, and deployment processes using GitHub Actions. Creating workflows.",
    outcomes: "Build CI/CD with GitHub Actions.",
    project: "GitHub Actions CI for Docker",
    projectDescription:
      "Students will create a GitHub Actions workflow file (`.github/workflows/main.yml`). This workflow will be triggered on pushes to the repository, check out the code, build the Docker image for the backend application, and run the automated tests defined in Week 5.",
  },
  {
    week: 11,
    title: "Cloud Deployment Basics (e.g., AWS, Heroku, Vercel)",
    focus:
      "Overview of cloud platforms. Deploying containerized applications. Basic infrastructure management.",
    outcomes: "Deploy apps to cloud.",
    project: "Deploy Container to Cloud",
    projectDescription:
      "Students will choose a cloud platform that supports container deployment (e.g., Heroku with Docker, AWS Elastic Container Service, or Google Cloud Run). They will then deploy their containerized backend application (and potentially its database) to this platform, making it accessible via a public URL.",
  },
  {
    week: 12,
    title: "Monitoring, Logging, and Project Deployment",
    focus:
      "Implementing logging and monitoring for backend applications. Final project deployment and review.",
    outcomes: "Monitor deployed applications.",
    project: "App Logging & Monitoring Setup",
    projectDescription:
      "Students will integrate basic logging (e.g., sending logs to a cloud logging service or a file) and monitoring (e.g., uptime checks, basic performance metrics if provided by the cloud platform) for their deployed application. They will then present their fully deployed and monitored backend application and CI/CD pipeline.",
  },
];
