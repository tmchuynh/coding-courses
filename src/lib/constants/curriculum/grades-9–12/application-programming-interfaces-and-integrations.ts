import { CourseSchedule } from "@/lib/interfaces/courses";

export const applicationProgrammingInterfacesAndIntegrations: CourseSchedule[] =
  [
    {
      week: 1,
      title: "Introduction to APIs",
      focus:
        "What are APIs? Types of APIs (REST, GraphQL, SOAP). Common use cases. Understanding HTTP methods (GET, POST, PUT, DELETE).",
      outcomes: "Understand API basics.",
      project: "Research Public APIs",
      projectDescription:
        "Students will explore the web to find and document three publicly accessible APIs. For each API, they will describe its purpose, the type of data it provides, and examples of how it could be used in an application.",
    },
    {
      week: 2,
      title: "Working with RESTful APIs - Part 1",
      focus:
        "Making GET requests to public APIs using Fetch API/Axios. Understanding API documentation. Handling JSON data.",
      outcomes: "Consume REST APIs (GET).",
      project: "Fetch REST API Data",
      projectDescription:
        "Using JavaScript (Fetch API or Axios), students will write a script that makes a GET request to a public REST API (e.g., OpenWeatherMap, JSONPlaceholder). They will parse the JSON response and display specific pieces of information from the data.",
    },
    {
      week: 3,
      title: "Working with RESTful APIs - Part 2",
      focus:
        "Authentication methods for APIs (API Keys, OAuth basics). Making POST, PUT, DELETE requests. Error handling.",
      outcomes: "Handle API auth and errors.",
      project: "API Auth & Error Handling",
      projectDescription:
        "Students will modify their previous script to interact with an API that requires an API key for authentication. They will also implement basic error handling to manage scenarios like invalid requests or network issues.",
    },
    {
      week: 4,
      title: "Asynchronous Operations and Data Handling",
      focus:
        "Deep dive into Promises and Async/Await for managing API calls. Handling loading states and displaying data dynamically.",
      outcomes: "Manage async API calls.",
      project: "Async/Await & UI States",
      projectDescription:
        "Students will refactor their API interaction code to use JavaScript's Async/Await syntax for cleaner asynchronous operations. They will also create a simple HTML UI that displays loading indicators while data is being fetched and shows appropriate messages for errors.",
    },
    {
      week: 5,
      title: "Building a Client-Side Application with Public APIs",
      focus:
        "Project: Create a web application that consumes one or more public APIs (e.g., weather app, movie database browser).",
      outcomes: "Build API-consuming app.",
      project: "Client-Side API App",
      projectDescription:
        "Students will develop a small, interactive client-side web application that utilizes at least one public API. For example, a movie search app using The Movie Database (TMDB) API, or a news aggregator using a news API. The app should allow user input and display API data dynamically.",
    },
    {
      week: 6,
      title: "Introduction to Server-Side API Integration",
      focus:
        "Why integrate APIs on the server (hiding API keys, data processing). Using Node.js/Express to proxy API requests.",
      outcomes: "Build server-side API proxy.",
      project: "Server-Side API Proxy",
      projectDescription:
        "Students will build a simple Node.js server using Express that makes requests to a third-party API on behalf of a client. This server-side proxy will securely store and use an API key, preventing its exposure on the client-side.",
    },
    {
      week: 7,
      title: "API Design Principles",
      focus:
        "Best practices for designing your own RESTful APIs. Resource naming, status codes, versioning.",
      outcomes: "Learn API design principles.",
      project: "Design Blog API",
      projectDescription:
        "Students will design the structure of a RESTful API for a hypothetical simple blog. This includes defining resources (e.g., /posts, /users, /comments), choosing appropriate HTTP methods for CRUD operations, and outlining request/response formats and status codes.",
    },
    {
      week: 8,
      title: "Building Your Own Simple API",
      focus:
        "Creating a basic REST API using Node.js and Express. Defining endpoints and handling requests.",
      outcomes: "Implement basic REST API.",
      project: "Build Simple API (Mock Data)",
      projectDescription:
        "Based on their API design from the previous week (or a new simple concept), students will implement a few basic API endpoints using Node.js and Express. Initially, these endpoints will serve mock data stored in memory.",
    },
    {
      week: 9,
      title: "Introduction to GraphQL",
      focus:
        "Understanding GraphQL concepts: schema, queries, mutations. Comparing GraphQL with REST.",
      outcomes: "Understand GraphQL basics.",
      project: "Explore GraphQL API",
      projectDescription:
        "Students will learn the fundamentals of GraphQL. They will use a public GraphQL API explorer (like the GitHub GraphQL Explorer) to understand its schema and practice writing simple queries to fetch specific data.",
    },
    {
      week: 10,
      title: "Consuming GraphQL APIs",
      focus:
        "Using a GraphQL client library (e.g., Apollo Client basic) to interact with GraphQL APIs.",
      outcomes: "Fetch data via GraphQL client.",
      project: "Consume GraphQL API",
      projectDescription:
        "Students will set up a basic frontend project and use a GraphQL client library (like Apollo Client or urql) to send a query to a public GraphQL API and display the fetched data in their application.",
    },
    {
      week: 11,
      title: "API Security Best Practices",
      focus:
        "Common API security concerns (rate limiting, input validation, HTTPS). Protecting sensitive data.",
      outcomes: "Apply API security basics.",
      project: "Implement API Security Measure",
      projectDescription:
        "Students will research common API security vulnerabilities and best practices. They will then choose one security measure (e.g., input validation, basic rate limiting using middleware) and implement it on the simple API they built in Week 8.",
    },
    {
      week: 12,
      title: "Project: Advanced API Integration",
      focus:
        "Students work on a project involving complex API integration, potentially creating a mashup of multiple APIs or building a more robust client/server application.",
      outcomes: "Integrate multiple APIs.",
      project: "Advanced API Integration Project",
      projectDescription:
        "For their final project, students will develop a more complex application. This could involve creating a 'mashup' that combines data from two or more different APIs, or building a full client-server application where the client consumes both their own custom-built API and at least one external API.",
    },
  ];
