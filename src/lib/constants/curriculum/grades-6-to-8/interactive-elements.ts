import { CourseSchedule } from "@/lib/interfaces/courses";

export const interactiveElements: CourseSchedule[] = [
  {
    week: 1,
    title: "Web Fundamentals Review: HTML & CSS",
    focus:
      "Recap of HTML for structure (div, span, lists, forms) and CSS for styling (selectors, box model, basic layout with Flexbox).",
    outcomes:
      "Students will refresh their understanding of HTML structure and CSS styling.",
    project: "Styled Info Card",
    projectDescription:
      "Create an HTML page displaying an 'information card' (e.g., for a character, animal, or place) using semantic HTML. Style it with CSS, focusing on clear structure, spacing, and basic Flexbox for layout.",
  },
  {
    week: 2,
    title: "Introduction to JavaScript for Interactivity",
    focus:
      "What is JavaScript? Variables, data types, operators. Writing scripts in `<script>` tags. `console.log` for debugging. Selecting HTML elements (`getElementById`, `querySelector`).",
    outcomes:
      "Students will be able to write basic JavaScript and select HTML elements.",
    project: "Element Inspector",
    projectDescription:
      "Create an HTML page with various elements. Write JavaScript to select specific elements by ID or class and log their properties (e.g., `innerHTML`, `tagName`) to the console.",
  },
  {
    week: 3,
    title: "DOM Manipulation: Changing Content and Styles",
    focus:
      "Modifying HTML content (`innerHTML`, `textContent`). Changing CSS styles with JavaScript (`element.style`). Adding and removing CSS classes.",
    outcomes:
      "Students will be able to dynamically change webpage content and styles using JavaScript.",
    project: "Dynamic Profile Card",
    projectDescription:
      "Create an HTML profile card. Write JavaScript functions that, when called (e.g., from the console initially), change the name, description, and background color of the card.",
  },
  {
    week: 4,
    title: "Event Handling: Responding to User Actions",
    focus:
      "Introduction to events (click, mouseover, keydown). Adding event listeners (`addEventListener`). Writing functions to handle events.",
    outcomes:
      "Students will be able to make webpages respond to user interactions like clicks and mouse movements.",
    project: "Interactive Light Switch",
    projectDescription:
      "Create a webpage that simulates a light switch. Clicking a 'button' element should toggle the background color of the page (or a specific div) between light and dark, and change the button text (On/Off).",
  },
  {
    week: 5,
    title: "Working with Forms: Getting User Input",
    focus:
      "HTML form elements (`<input>`, `<textarea>`, `<select>`). Getting values from form fields using JavaScript. Basic form validation (e.g., checking if a field is empty).",
    outcomes:
      "Students will be able to retrieve and use data entered by users into forms.",
    project: "Simple Mad Libs",
    projectDescription:
      "Create an HTML form with several input fields (e.g., for a noun, verb, adjective). Write JavaScript to get the values from these fields when a 'Generate Story' button is clicked and display a short Mad Libs-style story using the inputs.",
  },
  {
    week: 6,
    title: "Conditional Logic in JavaScript",
    focus:
      "`if/else if/else` statements. Comparison operators. Logical operators (`&&`, `||`, `!`). Making decisions based on user input or page state.",
    outcomes:
      "Students will be able to use conditional statements to control the flow of their JavaScript code.",
    project: "Password Strength Checker",
    projectDescription:
      "Create a form with a password input field. As the user types, use JavaScript with conditional logic to display a message indicating if the password is 'weak' (e.g., < 6 chars), 'medium', or 'strong' (e.g., > 10 chars).",
  },
  {
    week: 7,
    title: "Creating Interactive Menus and Navigation",
    focus:
      "Building dropdown menus or toggleable navigation bars. Using JavaScript to show/hide elements. CSS transitions for smooth effects.",
    outcomes:
      "Students will be able to create common interactive navigation elements.",
    project: "Toggleable FAQ",
    projectDescription:
      "Create an FAQ section where each question is a clickable header. When a question is clicked, the corresponding answer (initially hidden) toggles visibility. Add a simple CSS transition for the reveal.",
  },
  {
    week: 8,
    title: "Simple Animations with JavaScript and CSS",
    focus:
      "Basic CSS animations and transitions. Triggering CSS animations with JavaScript by adding/removing classes. Simple JavaScript-driven animation (e.g., moving an element).",
    outcomes:
      "Students will be able to create and control simple web animations.",
    project: "Animated Modal Popup",
    projectDescription:
      "Create a button that, when clicked, displays a modal popup window. The modal should appear with a simple CSS animation (e.g., fade in or slide down). Add a close button to the modal that hides it with an animation.",
  },
  {
    week: 9,
    title: "Working with Arrays and Loops for Dynamic Content",
    focus:
      "Introduction to JavaScript arrays. Looping through arrays (`for` loop) to generate HTML content dynamically.",
    outcomes:
      "Students will be able to use arrays and loops to display lists of data on a webpage.",
    project: "Dynamic To-Do List",
    projectDescription:
      "Create a JavaScript array of to-do items (strings). Write a function that loops through this array and dynamically creates and appends list items (`<li>`) to an unordered list (`<ul>`) on the HTML page to display them.",
  },
  {
    week: 10,
    title: "Interactive Project: Planning Your Element",
    focus:
      "Brainstorming ideas for a complex interactive web element or a small single-page interactive experience. Planning features, user interactions, and structure.",
    outcomes:
      "Students will design a concept for a significant interactive web project.",
    project: "Interactive Element Plan",
    projectDescription:
      "Plan an interactive web element or a small interactive webpage (e.g., a simple quiz, an image gallery with filters, a basic character customizer). Create a design document outlining its features, user flow, and the HTML/CSS/JS techniques you'll use.",
  },
  {
    week: 11,
    title: "Interactive Project: Development - Part 1",
    focus:
      "Building the HTML structure and CSS styling for the project. Implementing core JavaScript logic and event handling for the main interactions.",
    outcomes:
      "Students will develop the foundational structure and core interactivity of their project.",
    project: "Interactive Element Build",
    projectDescription:
      "Begin building your planned interactive element. Set up the HTML and CSS. Implement the primary JavaScript functions and event listeners that drive the core interactive behavior.",
  },
  {
    week: 12,
    title: "Interactive Project: Development - Part 2 & Showcase",
    focus:
      "Adding advanced features, polishing interactions, debugging. Presenting the final interactive element or experience.",
    outcomes:
      "Students will complete and showcase their interactive web project.",
    project: "Interactive Element Showcase",
    projectDescription:
      "Complete all features of your interactive element. Refine the styling and user experience. Test thoroughly. Prepare a short presentation and demo for the class.",
  },
];
