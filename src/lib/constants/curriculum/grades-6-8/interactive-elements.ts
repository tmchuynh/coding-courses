import { CourseSchedule } from "@/lib/interfaces/courses";

export const interactiveElements: CourseSchedule[] = [
  {
    week: 1,
    title: "JavaScript Fundamentals & DOM Introduction",
    focus:
      "Recap of HTML/CSS. Introduction to JavaScript: variables, data types, operators, and control flow (if/else, loops). What is the DOM? Selecting DOM elements.",
    outcomes:
      "Students will understand basic JavaScript syntax and be able to select HTML elements using JavaScript.",
  },
  {
    week: 2,
    title: "Manipulating the DOM",
    focus:
      "Changing HTML content (innerHTML, textContent). Modifying element attributes and styles with JavaScript. Creating and appending new HTML elements dynamically.",
    outcomes:
      "Students will be able to dynamically change the content, style, and structure of a webpage using JavaScript.",
  },
  {
    week: 3,
    title: "Events and Event Handling",
    focus:
      "Understanding browser events (click, mouseover, keydown, etc.). Adding event listeners to HTML elements. Writing event handler functions. The 'event' object.",
    outcomes:
      "Students will create interactive web pages that respond to user actions like clicks and mouse movements.",
  },
  {
    week: 4,
    title: "Forms and User Input",
    focus:
      "Working with HTML forms. Accessing form input values using JavaScript. Basic form validation (e.g., checking for empty fields). Providing user feedback.",
    outcomes:
      "Students will be able to capture and process user input from forms and perform simple client-side validation.",
  },
  {
    week: 5,
    title: "Functions and Scope in JavaScript",
    focus:
      "Deep dive into functions: parameters, return values. Function expressions vs. declarations. Understanding scope: global vs. local variables. Introduction to closures (conceptual).",
    outcomes:
      "Students will write more modular and organized JavaScript code using functions and understand variable scope.",
  },
  {
    week: 6,
    title: "Introduction to APIs & Fetch",
    focus:
      "What is an API? Types of APIs (REST). Making requests to public APIs using the Fetch API. Understanding promises and handling asynchronous responses (.then(), .catch()).",
    outcomes:
      "Students will understand how to request data from external APIs and handle asynchronous operations.",
  },
  {
    week: 7,
    title: "Working with JSON Data",
    focus:
      "Understanding JSON (JavaScript Object Notation) format. Parsing JSON responses from APIs. Displaying API data on a webpage dynamically.",
    outcomes:
      "Students will be able to process JSON data received from APIs and integrate it into their web pages.",
  },
  {
    week: 8,
    title: "Building an Interactive App - Part 1: Planning & UI",
    focus:
      "Project: Build a simple interactive app (e.g., weather app, recipe finder, to-do list using a public API). Planning the app features and UI. Setting up HTML structure and basic CSS.",
    outcomes:
      "Students will plan a small application and create its basic user interface structure.",
  },
  {
    week: 9,
    title: "Building an Interactive App - Part 2: API Integration & Logic",
    focus:
      "Implementing API calls for the project. Writing JavaScript functions to fetch, process, and display data. Handling user interactions and updating the UI.",
    outcomes:
      "Students will integrate API data into their application and implement core interactive logic.",
  },
  {
    week: 10,
    title: "Local Storage & Persisting Data",
    focus:
      "Introduction to Web Storage API (localStorage and sessionStorage). Storing and retrieving simple data in the browser. Use cases: saving user preferences, to-do list items.",
    outcomes:
      "Students will be able to persist small amounts of data on the user's browser using localStorage.",
  },
  {
    week: 11,
    title: "Project Enhancement & Debugging",
    focus:
      "Adding more features to the interactive app (e.g., error handling, loading states, user input validation). Debugging techniques using browser developer tools. Code refactoring for clarity.",
    outcomes:
      "Students will enhance their application with additional features and improve their debugging skills.",
  },
  {
    week: 12,
    title: "Project Showcase & Next Steps",
    focus:
      "Finalizing and polishing the interactive application. Presenting projects to peers. Discussing further learning paths in web development (frameworks, backend).",
    outcomes:
      "Students will complete and present a functional interactive web application and understand potential next steps in their learning journey.",
  },
];
