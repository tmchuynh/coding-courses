import { CourseSchedule } from "@/lib/interfaces/courses";

export const capstoneProject: CourseSchedule[] = [
  {
    week: 1,
    title: "Project Ideation and Proposal",
    focus:
      "Brainstorming project ideas. Defining project scope, objectives, and deliverables. Writing a project proposal.",
    outcomes: "Define project scope & goals.",
    project: "Write Project Proposal",
    projectDescription:
      "Students will brainstorm potential full-stack application ideas, select one, and develop a formal project proposal. The proposal will detail the problem the application solves, its target audience, core features (scope), key objectives, and expected deliverables.",
  },
  {
    week: 2,
    title: "Technology Stack Selection and Architecture Design",
    focus:
      "Choosing appropriate technologies (frontend, backend, database). Designing the application architecture. Planning data models.",
    outcomes: "Select tech stack, design architecture.",
    project: "Doc Tech Stack & Architecture",
    projectDescription:
      "Based on their project proposal, students will select an appropriate technology stack (e.g., MERN, PERN, or others). They will then create a high-level architecture diagram illustrating the main components (frontend, backend, database) and their interactions, along with an initial data model design.",
  },
  {
    week: 3,
    title: "Project Planning and Task Breakdown",
    focus:
      "Creating a project timeline. Breaking down the project into manageable tasks. Setting up version control (Git) and project management tools.",
    outcomes: "Plan project tasks and timeline.",
    project: "Project Plan & Task List",
    projectDescription:
      "Students will break down their capstone project into smaller, manageable tasks. They will estimate the effort for each task, create a project timeline with milestones, and set up their project in a version control system (Git/GitHub) and a project management tool (e.g., Trello, Jira).",
  },
  {
    week: 4,
    title: "Frontend Development - Setup and Core UI",
    focus:
      "Setting up the frontend environment. Building core UI components and layout. Implementing basic navigation.",
    outcomes: "Build core frontend UI.",
    project: "Frontend Setup & Core UI",
    projectDescription:
      "Students will initialize their frontend project (e.g., using Create React App, Next.js). They will then build the main application layout (header, footer, content area) and implement the primary navigation structure (e.g., navigation bar, routing between core pages).",
  },
  {
    week: 5,
    title: "Backend Development - API Design and Setup",
    focus:
      "Designing RESTful APIs or GraphQL schema. Setting up the backend server and database connections. Implementing initial API endpoints.",
    outcomes: "Develop core backend APIs.",
    project: "Backend Setup & Core APIs",
    projectDescription:
      "Students will set up their backend server environment (e.g., Node.js/Express). They will design their API (RESTful or GraphQL), establish database connections, and implement the first set of core API endpoints required by the frontend (e.g., for user authentication, fetching initial data).",
  },
  {
    week: 6,
    title: "Integrating Frontend and Backend",
    focus:
      "Connecting the frontend to backend APIs. Implementing data fetching and submission. Handling user authentication.",
    outcomes: "Connect frontend to backend.",
    project: "Integrate Frontend & Backend",
    projectDescription:
      "This week focuses on connecting the two main parts of the application. Students will implement frontend logic to make API calls to their backend for fetching data to display and submitting user input (e.g., from forms). A basic user authentication flow (login/registration) will also be integrated.",
  },
  {
    week: 7,
    title: "Feature Development - Iteration 1",
    focus:
      "Focused development on core project features. Implementing business logic. Regular code reviews and feedback sessions.",
    outcomes: "Develop core project features.",
    project: "Implement Major Feature 1",
    projectDescription:
      "Students will focus on developing and completing one significant, core feature of their application. This involves implementing both frontend UI/UX and backend business logic, including database interactions and API endpoint functionality for that feature.",
  },
  {
    week: 8,
    title: "Feature Development - Iteration 2",
    focus:
      "Continued development of advanced features. Addressing complex functionalities and edge cases.",
    outcomes: "Develop advanced features.",
    project: "Implement Major Feature 2",
    projectDescription:
      "Building on the progress from the previous week, students will implement another major feature or a set of smaller, related features. This may involve more complex logic, third-party API integrations, or handling more intricate user interactions and edge cases.",
  },
  {
    week: 9,
    title: "Testing and Quality Assurance",
    focus:
      "Writing unit and integration tests. Manual testing and bug fixing. Ensuring application stability and performance.",
    outcomes: "Test application components.",
    project: "Write Project Tests",
    projectDescription:
      "Students will focus on ensuring the quality of their application by writing tests. This includes unit tests for individual functions/components (both frontend and backend) and integration tests for API endpoints or key user flows. They will also perform manual testing and fix identified bugs.",
  },
  {
    week: 10,
    title: "User Experience (UX) Refinement and Deployment Preparation",
    focus:
      "Focusing on UX improvements based on testing. Preparing the application for deployment. Setting up deployment environment.",
    outcomes: "Refine UX, prepare for deployment.",
    project: "UX Refinement & Deploy Prep",
    projectDescription:
      "Students will gather feedback on their application's user experience (e.g., through peer reviews or usability testing) and make refinements to the UI/UX. They will also begin preparing for deployment by creating necessary configuration files and build scripts.",
  },
  {
    week: 11,
    title: "Deployment and Final Testing",
    focus:
      "Deploying the application to a hosting platform. Conducting final end-to-end testing in the production environment.",
    outcomes: "Deploy and test in production.",
    project: "Deploy & Final Test App",
    projectDescription:
      "Students will deploy their completed full-stack application to a cloud hosting platform (e.g., Vercel for frontend, Heroku/AWS for backend). After deployment, they will conduct thorough end-to-end testing on the live environment to ensure everything functions as expected.",
  },
  {
    week: 12,
    title: "Project Presentation and Documentation",
    focus:
      "Preparing and delivering a final project presentation. Completing project documentation. Retrospective and lessons learned.",
    outcomes: "Present final project and docs.",
    project: "Present Capstone & Docs",
    projectDescription:
      "As the final step, students will prepare and deliver a comprehensive presentation of their capstone project. This includes a live demo, discussion of the architecture, features implemented, challenges faced, and lessons learned. They will also submit final project documentation (e.g., README, user guide).",
  },
];
