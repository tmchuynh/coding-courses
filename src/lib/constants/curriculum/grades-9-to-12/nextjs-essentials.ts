import { CourseSchedule } from "@/lib/interfaces/courses";

export const nextjsEssentials: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Next.js and Modern Web Development",
    focus:
      "Overview of Next.js, setting up the development environment, understanding pages, routing, and the benefits of server-side rendering (SSR) and static site generation (SSG).",
    outcomes: "Create multi-page Next.js site.",
    project: "Next.js Basic Site Setup",
    projectDescription:
      "Students will initialize a new Next.js application, create two distinct pages (e.g., `index.js` for home and `about.js` for an about page), and implement basic navigation links between them using Next.js's file-system routing.",
  },
  {
    week: 2,
    title: "React Fundamentals Refresher & Advanced Components",
    focus:
      "Review of core React concepts (components, props, state, hooks). Building advanced, reusable components. Introduction to state management with Context API.",
    outcomes: "Build reusable React components.",
    project: "React Card & Counter",
    projectDescription:
      "Students will create a flexible `Card` component in React that can accept props to display different content. They will then use this component to render a list of data. Separately, they'll build a `Counter` component demonstrating state management with the `useState` hook.",
  },
  {
    week: 3,
    title: "Routing and Navigation in Next.js",
    focus:
      "Deep dive into Next.js routing: dynamic routes, nested routes, and programmatic navigation. Implementing layouts and shared UI components.",
    outcomes: "Implement dynamic routing & layouts.",
    project: "Dynamic Routes & Layout",
    projectDescription:
      "Students will implement a dynamic routing setup for blog posts, where each post has a unique URL based on its ID (e.g., `/posts/my-first-post`). They will also create a `Layout` component (e.g., with a header and footer) that wraps all pages.",
  },
  {
    week: 4,
    title: "Data Fetching Strategies",
    focus:
      "Exploring data fetching methods in Next.js: `getStaticProps`, `getServerSideProps`, and client-side fetching with SWR/React Query. Understanding when to use each.",
    outcomes: "Fetch data with Next.js methods.",
    project: "Next.js API Data Fetch",
    projectDescription:
      "Students will choose a public API (e.g., JSONPlaceholder) and use either `getStaticProps` (for build-time data fetching) or `getServerSideProps` (for request-time data fetching) in a Next.js page to retrieve and display a list of data, like posts or users.",
  },
  {
    week: 5,
    title: "API Routes and Backend Functionality",
    focus:
      "Building API routes in Next.js to handle backend logic. Creating RESTful endpoints, handling requests, and connecting to databases or external services.",
    outcomes: "Create backend API in Next.js.",
    project: "Build Next.js API Route",
    projectDescription:
      "Students will create a new file in the `pages/api` directory to define an API endpoint. This endpoint, when accessed, will return a JSON response containing a list of mock user data, demonstrating basic backend functionality within Next.js.",
  },
  {
    week: 6,
    title: "Styling and UI/UX in Next.js",
    focus:
      "Styling options in Next.js: CSS Modules, Tailwind CSS, Styled Components. Best practices for responsive design and user experience.",
    outcomes: "Style Next.js apps responsively.",
    project: "Responsive Next.js Styling",
    projectDescription:
      "Students will take an existing Next.js page (or create a new one) and apply styling using either CSS Modules (for component-scoped CSS) or Tailwind CSS (for utility-first styling). The focus will be on creating a visually appealing and responsive layout.",
  },
  {
    week: 7,
    title: "Authentication and Authorization",
    focus:
      "Implementing authentication strategies (e.g., NextAuth.js). Handling user sessions, protecting routes, and managing user roles.",
    outcomes: "Implement basic authentication.",
    project: "NextAuth.js Basic Login",
    projectDescription:
      "Students will set up NextAuth.js in their application and implement a simple email/password or social login provider. They will create a basic login form and configure a specific route to be accessible only to authenticated users.",
  },
  {
    week: 8,
    title: "State Management with Redux/Zustand",
    focus:
      "Advanced state management solutions like Redux or Zustand for complex applications. Integrating these with Next.js.",
    outcomes: "Manage global state (Redux/Zustand).",
    project: "Global State Theme Toggle",
    projectDescription:
      "Students will integrate either Zustand (a minimalistic state management library) or Redux Toolkit into their Next.js application to manage a global state, such as a theme preference (light/dark mode), accessible and modifiable from multiple components.",
  },
  {
    week: 9,
    title: "Forms and Data Validation",
    focus:
      "Building robust forms, handling user input, and implementing client-side and server-side data validation.",
    outcomes: "Build forms with validation.",
    project: "Validated Contact Form",
    projectDescription:
      "Students will create a contact form with several input fields (e.g., name, email, message). They will use a library like React Hook Form or Formik to manage form state and implement client-side validation rules (e.g., required fields, email format).",
  },
  {
    week: 10,
    title: "Deployment and Optimization",
    focus:
      "Preparing a Next.js application for production. Optimizing for performance (image optimization, code splitting). Deploying to platforms like Vercel or Netlify.",
    outcomes: "Optimize and deploy Next.js apps.",
    project: "Optimize & Deploy Next.js App",
    projectDescription:
      "Students will take their Next.js application, optimize images using `next/image`, review bundle sizes, and then deploy the application to Vercel (or a similar platform), making it publicly accessible via a URL.",
  },
  {
    week: 11,
    title: "Testing Next.js Applications",
    focus:
      "Introduction to testing methodologies: unit testing, integration testing, and end-to-end testing for Next.js applications using tools like Jest and Cypress.",
    outcomes: "Test Next.js apps with Jest.",
    project: "Test Components & API Routes",
    projectDescription:
      "Students will set up Jest and React Testing Library in their Next.js project. They will then write unit tests for at least one React component (testing its rendering and behavior) and one API route (testing its response for given inputs).",
  },
  {
    week: 12,
    title: "Project Work & Advanced Topics",
    focus:
      "Students work on a capstone project applying all learned concepts. Introduction to advanced topics like Internationalization (i18n), Incremental Static Regeneration (ISR).",
    outcomes: "Begin Next.js capstone project.",
    project: "Next.js Capstone Start",
    projectDescription:
      "Students will begin developing a more substantial capstone project, such as a personal blog, a portfolio website, or a simple e-commerce frontend. This project will aim to incorporate many of the Next.js features and best practices learned throughout the course.",
  },
];
