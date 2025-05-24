import { CourseSchedule } from "@/lib/interfaces/courses";

export const webDevAndAppCreation: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Web Development: HTML Basics",
    focus:
      "What is the web? Structure of a webpage. Basic HTML tags (headings, paragraphs, lists, links, images).",
    outcomes:
      "Students will understand the basic structure of a webpage and create a simple HTML document.",
    project: "First Webpage: About Me",
    projectDescription:
      "Create a single HTML page with a title, headings, paragraphs, an unordered list of hobbies, and a link to a favorite website. Include at least one image.",
  },
  {
    week: 2,
    title: "Styling with CSS: Making it Look Good",
    focus:
      "Introduction to CSS. Selectors (element, class, ID). Basic properties (color, font-size, background-color, text-align). Inline vs. internal vs. external CSS.",
    outcomes:
      "Students will be able to apply basic styles to HTML elements using CSS.",
    project: "Style 'About Me' Page",
    projectDescription:
      "Using an external CSS file, style the 'All About Me' page created last week. Change font styles, colors, and background colors for different elements. Add classes or IDs for specific styling.",
  },
  {
    week: 3,
    title: "CSS Layouts: The Box Model and Simple Positioning",
    focus:
      "Understanding the CSS Box Model (padding, border, margin). Basic positioning concepts (static, relative, absolute - simplified). Simple Flexbox for alignment.",
    outcomes:
      "Students will understand how to control spacing and basic layout of elements on a page.",
    project: "Photo Gallery Layout",
    projectDescription:
      "Create an HTML page with several images. Use CSS (including the box model and simple Flexbox) to arrange these images in a gallery-style layout (e.g., a row of images with consistent spacing).",
  },
  {
    week: 4,
    title: "Introduction to JavaScript: Making Webpages Interactive",
    focus:
      "What is JavaScript? Basic syntax (variables, simple data types, console.log). Responding to button clicks. Simple DOM manipulation (changing text).",
    outcomes:
      "Students will be able to write basic JavaScript to respond to user actions and modify webpage content.",
    project: "Interactive Greeting",
    projectDescription:
      "Create an HTML page with a button. Write JavaScript so that when the button is clicked, a greeting message appears or changes on the page.",
  },
  {
    week: 5,
    title: "Introduction to App Building: Meet the App Builder",
    focus:
      "Exploring a block-based app builder (e.g., Thunkable, MIT App Inventor). Understanding the interface, components (buttons, labels, images), and event-driven programming.",
    outcomes:
      "Students will be able to navigate an app builder interface and create a simple app screen.",
    project: "First App: 'Hello App'",
    projectDescription:
      "Using an app builder, create a single-screen app that displays a welcome message, an image, and a button. Explore different component properties.",
  },
  {
    week: 6,
    title: "App Components and Basic Events",
    focus:
      "Working with various UI components. Programming button clicks to trigger actions (e.g., play a sound, change an image, show a message).",
    outcomes:
      "Students will be able to add interactivity to app components using event blocks.",
    project: "Simple Soundboard App",
    projectDescription:
      "Create an app with 3-4 buttons. Each button, when clicked, should play a different sound effect. Add images to the buttons.",
  },
  {
    week: 7,
    title: "Navigation and Multiple Screens in Apps",
    focus:
      "Designing apps with multiple screens. Programming navigation between screens using buttons.",
    outcomes:
      "Students will be able to create a multi-screen app with basic navigation.",
    project: "Two-Screen Info App",
    projectDescription:
      "Create an app with two screens. The first screen has a button that navigates to the second screen. The second screen displays some information and has a button to navigate back to the first screen.",
  },
  {
    week: 8,
    title: "Using Variables in Apps",
    focus:
      "Introduction to variables in block-based programming. Storing and changing values (e.g., a simple counter, user input).",
    outcomes:
      "Students will understand how to use variables to store and manipulate data in their apps.",
    project: "Click Counter App",
    projectDescription:
      "Create an app with a button and a label. Each time the button is clicked, a counter variable increases, and its new value is displayed on the label.",
  },
  {
    week: 9,
    title: "Mini-Project: Web & App Idea Mashup (Planning)",
    focus:
      "Brainstorming ideas for a simple project that could be a website or an app. Planning features and user interface.",
    outcomes:
      "Students will develop a concept and plan for a small web or app project.",
    project: "Project Plan: Web/App Idea",
    projectDescription:
      "Choose to design either a simple multi-page website (3-4 pages on a topic of interest) or a simple app (2-3 screens with basic interactivity). Create a sketch/wireframe of the screens/pages and list the key features.",
  },
  {
    week: 10,
    title: "Project Development: Building the Web Project",
    focus:
      "If choosing web: Building out HTML structure and CSS styling for the planned website. Implementing basic JavaScript interactivity if planned.",
    outcomes:
      "Students will develop the core structure and styling of their web project.",
    project: "Web Project Build: Part 1",
    projectDescription:
      "Students focusing on a web project will build the HTML files for all planned pages and apply CSS for layout and styling. Implement one simple JavaScript interaction.",
  },
  {
    week: 11,
    title: "Project Development: Building the App Project / Web Polish",
    focus:
      "If choosing app: Building the screens, components, and event logic for the planned app. If web: Polishing CSS, adding more JS interactivity, testing.",
    outcomes:
      "Students will implement the core functionality of their app project or refine their web project.",
    project: "App Build / Web Polish",
    projectDescription:
      "Students focusing on an app project will build all screens and implement core button logic and navigation. Web project students will refine CSS, add another JS feature, and test responsiveness.",
  },
  {
    week: 12,
    title: "Project Showcase: My Creation!",
    focus:
      "Finalizing projects. Presenting the website or app to the class. Sharing challenges and learnings.",
    outcomes:
      "Students will present their completed web or app project and reflect on the development process.",
    project: "Web/App Project Showcase",
    projectDescription:
      "Finalize your website or app. Prepare a short presentation to showcase your creation to the class, explaining its features and what you learned.",
  },
];
