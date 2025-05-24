import { CourseSchedule } from "@/lib/interfaces/courses";

export const frontendFundamentals: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Web Development & HTML Structure",
    focus:
      "How websites work (client, server, browser). Introduction to HTML. Essential tags: `<html>`, `<head>`, `<body>`, `<title>`, headings (`<h1>`-`<h6>`), paragraphs (`<p>`), line breaks (`<br>`).",
    outcomes:
      "Students will understand the basic components of web development and create a simple structured HTML document.",
    project: "First Webpage: HTML Basics",
    projectDescription:
      "Create an HTML file named `index.html`. Add the basic HTML structure, a title for the page, a main heading (`<h1>`), and a short paragraph about a favorite hobby.",
  },
  {
    week: 2,
    title: "More HTML: Links, Images, and Lists",
    focus:
      "Creating hyperlinks (`<a>`). Embedding images (`<img>` with `src` and `alt` attributes). Ordered (`<ol>`) and unordered (`<ul>`) lists with list items (`<li>`).",
    outcomes:
      "Students will be able to add links, images, and lists to their webpages.",
    project: "Hobby Page: Links & Images",
    projectDescription:
      "Enhance the 'Hobby Page' by adding a relevant image, a list of reasons why you enjoy the hobby, and a link to an external website related to the hobby.",
  },
  {
    week: 3,
    title: "Semantic HTML and Structuring Content",
    focus:
      "Understanding semantic HTML (e.g., `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`). Importance for accessibility and SEO. Using `<div>` and `<span>` for grouping.",
    outcomes:
      "Students will learn to structure web content meaningfully using semantic HTML tags.",
    project: "Semantic Blog Layout",
    projectDescription:
      "Create an HTML page that mimics a simple blog post layout using semantic tags like `<article>`, `<header>`, `<footer>`, and `<p>` for content. Include placeholder text.",
  },
  {
    week: 4,
    title: "Introduction to CSS: Styling Your Content",
    focus:
      "What is CSS? Ways to add CSS (inline, internal, external). Basic CSS syntax: selectors (element, class, ID), properties, and values. Common properties: `color`, `background-color`, `font-family`, `font-size`, `text-align`.",
    outcomes:
      "Students will be able to apply basic styles to HTML elements using CSS.",
    project: "Styling Blog Post (CSS)",
    projectDescription:
      "Create an external CSS file (`style.css`) and link it to your 'Semantic Blog Post' HTML. Apply different styles (colors, fonts, text alignment) to the header, paragraphs, and footer sections using element, class, or ID selectors.",
  },
  {
    week: 5,
    title: "The CSS Box Model: Spacing and Borders",
    focus:
      "Understanding `padding`, `border`, and `margin`. The `width` and `height` properties. `box-sizing: border-box`.",
    outcomes:
      "Students will be able to control the spacing and dimensions of elements using the box model.",
    project: "Styled Content Boxes (Box Model)",
    projectDescription:
      "On a new HTML page, create several `<div>` elements. Style each div with different padding, margins, borders, widths, and background colors to demonstrate understanding of the box model.",
  },
  {
    week: 6,
    title: "CSS Layouts: Flexbox Basics",
    focus:
      "Introduction to Flexbox for 1D layouts. `display: flex`. `flex-direction`, `justify-content`, `align-items`, `gap`.",
    outcomes:
      "Students will be able to create simple flexible layouts using Flexbox.",
    project: "Flexbox Nav Bar",
    projectDescription:
      "Create a horizontal navigation bar using an unordered list (`<ul>`) and style it with Flexbox to arrange the navigation links in a row with even spacing.",
  },
  {
    week: 7,
    title: "Responsive Design Fundamentals with CSS",
    focus:
      "What is responsive design? Viewport meta tag. Introduction to Media Queries for applying different styles based on screen size.",
    outcomes:
      "Students will understand the basics of responsive design and use media queries.",
    project: "Responsive Columns (Media Queries)",
    projectDescription:
      "Create a page with three content columns. Use Flexbox for the layout. Add a media query so that on smaller screens (e.g., max-width: 600px), the columns stack vertically instead of appearing side-by-side.",
  },
  {
    week: 8,
    title: "Introduction to JavaScript: First Steps",
    focus:
      "What JavaScript does. Adding JS to HTML (`<script>` tag). Variables (`let`, `const`), simple data types (string, number, boolean). `console.log()` for output.",
    outcomes:
      "Students will be able to write basic JavaScript code and understand variables.",
    project: "JS Variables: Favorite Things",
    projectDescription:
      "In an HTML file, write a JavaScript block that declares variables for your favorite color, number, and animal. Log these variables to the browser console.",
  },
  {
    week: 9,
    title: "JavaScript: DOM Manipulation Basics",
    focus:
      "What is the DOM? Selecting HTML elements using JavaScript (`getElementById`, `querySelector`). Changing element content (`innerHTML`, `textContent`).",
    outcomes:
      "Students will be able to select and modify HTML elements using JavaScript.",
    project: "Dynamic Greeting (JS DOM)",
    projectDescription:
      "Create an HTML page with an `<h1>` tag. Write JavaScript to select this heading and change its text content to a personalized greeting message when the page loads.",
  },
  {
    week: 10,
    title: "JavaScript: Event Handling",
    focus:
      "Responding to user actions. `addEventListener()` for common events like `click` and `mouseover`. Writing event handler functions.",
    outcomes:
      "Students will be able to make their webpages interactive by responding to user events.",
    project: "Clickable Color Changer (JS Events)",
    projectDescription:
      "Create an HTML page with a button and a `<div>`. Write JavaScript so that when the button is clicked, the background color of the `<div>` changes to a random color (or cycles through a predefined list of colors).",
  },
  {
    week: 11,
    title: "Frontend Project: Building a Personal Portfolio Page - Part 1",
    focus:
      "Planning a multi-section portfolio page (Home, About, Projects). Creating the HTML structure and basic CSS styling for all sections. Implementing a Flexbox-based layout.",
    outcomes:
      "Students will structure and style the main sections of a personal portfolio website.",
    project: "Portfolio: Structure & Style",
    projectDescription:
      "Create the HTML structure for a personal portfolio website with at least three sections (e.g., Home/Welcome, About Me, My Projects). Apply CSS for overall layout (using Flexbox for main sections) and basic styling (fonts, colors).",
  },
  {
    week: 12,
    title: "Frontend Project: Personal Portfolio Page - Part 2 & Showcase",
    focus:
      "Adding content to portfolio sections. Implementing at least one JavaScript interactive element (e.g., a theme switcher, a simple image gallery for projects). Finalizing styles and responsiveness. Presenting the portfolio.",
    outcomes:
      "Students will complete and showcase a responsive personal portfolio website with interactive elements.",
    project: "Portfolio: Interactivity & Showcase",
    projectDescription:
      "Populate your portfolio sections with content. Add at least one JavaScript-driven interactive feature. Ensure the page is responsive. Prepare a short presentation to showcase your portfolio website.",
  },
];
