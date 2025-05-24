import { CourseSchedule } from "@/lib/interfaces/courses";

export const apisAndIntegrations: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to APIs",
    focus:
      "What are APIs? Types of APIs (REST, GraphQL, SOAP). Common use cases. Understanding HTTP methods (GET, POST, PUT, DELETE).",
    outcomes: " Understand the basics of APIs and their functionalities.",
    project:
      "Research and document 3 different public APIs and their functionalities.",
    projectDescription:
      "Students will explore the web to find and document three publicly accessible APIs. For each API, they will describe its purpose, the type of data it provides, and examples of how it could be used in an application.",
  },
  {
    week: 2,
    title: "Working with RESTful APIs - Part 1",
    focus:
      "Making GET requests to public APIs using Fetch API/Axios. Understanding API documentation. Handling JSON data.",
    outcomes: " Fetch data from a public API and parse JSON responses.",
    project:
      "Write a script to fetch data from a public REST API (e.g., a weather API) and display specific information.",
    projectDescription:
      "Using JavaScript (Fetch API or Axios), students will write a script that makes a GET request to a public REST API (e.g., OpenWeatherMap, JSONPlaceholder). They will parse the JSON response and display specific pieces of information from the data.",
  },
  {
    week: 3,
    title: "Working with RESTful APIs - Part 2",
    focus:
      "Authentication methods for APIs (API Keys, OAuth basics). Making POST, PUT, DELETE requests. Error handling.",
    outcomes: " Understand API authentication and make various HTTP requests.",
    project:
      "Extend the script to use an API key for authentication and handle potential errors from the API response.",
    projectDescription:
      "Students will modify their previous script to interact with an API that requires an API key for authentication. They will also implement basic error handling to manage scenarios like invalid requests or network issues.",
  },
  {
    week: 4,
    title: "Asynchronous Operations and Data Handling",
    focus:
      "Deep dive into Promises and Async/Await for managing API calls. Handling loading states and displaying data dynamically.",
    outcomes:
      " Implement Async/Await for API calls and manage loading/error states.",
    project:
      "Refactor API calling code to use Async/Await and implement loading/error states in a simple UI.",
    projectDescription:
      "Students will refactor their API interaction code to use JavaScript's Async/Await syntax for cleaner asynchronous operations. They will also create a simple HTML UI that displays loading indicators while data is being fetched and shows appropriate messages for errors.",
  },
  {
    week: 5,
    title: "Building a Client-Side Application with Public APIs",
    focus:
      "Project: Create a web application that consumes one or more public APIs (e.g., weather app, movie database browser).",
    outcomes:
      " Build a functional client-side application that integrates with a public API.",
    project:
      "Build a small client-side application (e.g., a movie search app using OMDB API) that consumes a public API.",
    projectDescription:
      "Students will develop a small, interactive client-side web application that utilizes at least one public API. For example, a movie search app using The Movie Database (TMDB) API, or a news aggregator using a news API. The app should allow user input and display API data dynamically.",
  },
  {
    week: 6,
    title: "Introduction to Server-Side API Integration",
    focus:
      "Why integrate APIs on the server (hiding API keys, data processing). Using Node.js/Express to proxy API requests.",
    outcomes:
      " Understand the need for server-side API integration and how to set it up.",
    project:
      "Create a Node.js/Express server that acts as a proxy to a public API, hiding the API key.",
    projectDescription:
      "Students will build a simple Node.js server using Express that makes requests to a third-party API on behalf of a client. This server-side proxy will securely store and use an API key, preventing its exposure on the client-side.",
  },
  {
    week: 7,
    title: "API Design Principles",
    focus:
      "Best practices for designing your own RESTful APIs. Resource naming, status codes, versioning.",
    outcomes: " Understand RESTful API design principles and best practices.",
    project:
      "Design the API endpoints (resources, HTTP methods, request/response structure) for a simple blog application.",
    projectDescription:
      "Students will design the structure of a RESTful API for a hypothetical simple blog. This includes defining resources (e.g., /posts, /users, /comments), choosing appropriate HTTP methods for CRUD operations, and outlining request/response formats and status codes.",
  },
  {
    week: 8,
    title: "Building Your Own Simple API",
    focus:
      "Creating a basic REST API using Node.js and Express. Defining endpoints and handling requests.",
    outcomes: " Implement a simple REST API with basic endpoints.",
    project:
      "Implement 2-3 basic API endpoints (e.g., GET all posts, GET post by ID) using Node.js and Express with mock data.",
    projectDescription:
      "Based on their API design from the previous week (or a new simple concept), students will implement a few basic API endpoints using Node.js and Express. Initially, these endpoints will serve mock data stored in memory.",
  },
  {
    week: 9,
    title: "Introduction to GraphQL",
    focus:
      "Understanding GraphQL concepts: schema, queries, mutations. Comparing GraphQL with REST.",
    outcomes: " Understand the basics of GraphQL and how it differs from REST.",
    project:
      "Explore a public GraphQL API (e.g., GitHub GraphQL API) and write a simple query.",
    projectDescription:
      "Students will learn the fundamentals of GraphQL. They will use a public GraphQL API explorer (like the GitHub GraphQL Explorer) to understand its schema and practice writing simple queries to fetch specific data.",
  },
  {
    week: 10,
    title: "Consuming GraphQL APIs",
    focus:
      "Using a GraphQL client library (e.g., Apollo Client basic) to interact with GraphQL APIs.",
    outcomes: " Fetch data from a GraphQL API using a client library.",
    project:
      "Use a GraphQL client to fetch data from a GraphQL API and display it in a simple frontend.",
    projectDescription:
      "Students will set up a basic frontend project and use a GraphQL client library (like Apollo Client or urql) to send a query to a public GraphQL API and display the fetched data in their application.",
  },
  {
    week: 11,
    title: "API Security Best Practices",
    focus:
      "Common API security concerns (rate limiting, input validation, HTTPS). Protecting sensitive data.",
    outcomes:
      " Understand basic API security measures and how to implement them.",
    project:
      "Research and implement one API security measure (e.g., basic rate limiting) on your custom API.",
    projectDescription:
      "Students will research common API security vulnerabilities and best practices. They will then choose one security measure (e.g., input validation, basic rate limiting using middleware) and implement it on the simple API they built in Week 8.",
  },
  {
    week: 12,
    title: "Project: Advanced API Integration",
    focus:
      "Students work on a project involving complex API integration, potentially creating a mashup of multiple APIs or building a more robust client/server application.",
    outcomes:
      " Demonstrate advanced API integration skills through a final project.",
    project:
      "Develop a project that integrates multiple APIs or builds a client-server application with your own API and a third-party API.",
    projectDescription:
      "For their final project, students will develop a more complex application. This could involve creating a 'mashup' that combines data from two or more different APIs, or building a full client-server application where the client consumes both their own custom-built API and at least one external API.",
  },
];
