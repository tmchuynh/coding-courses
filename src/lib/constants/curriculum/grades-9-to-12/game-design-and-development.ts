import { CourseSchedule } from "@/lib/interfaces/courses";

export const gameDesignAndDevelopment: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Game Design Principles",
    focus:
      "What is game design? Core elements of a game (rules, goals, feedback, challenge). Player experience and engagement.",
    outcomes: "Identify core game components.",
    project: "Analyze Game Elements",
    projectDescription:
      "Students will select a game they are familiar with and write a short analysis identifying its fundamental components: the rules governing gameplay, the primary goals for the player, how the game provides feedback, and the nature of its challenges.",
  },
  {
    week: 2,
    title: "Game Mechanics and Dynamics",
    focus:
      "Understanding core game mechanics. How mechanics create game dynamics and emergent behavior. Prototyping simple mechanics.",
    outcomes: "Prototype game mechanics.",
    project: "Paper Prototype Mechanic",
    projectDescription:
      "Students will design a single, simple game mechanic (e.g., a resource collection system, a combat interaction, a puzzle element) and create a paper prototype to test its basic functionality and player interaction without digital tools.",
  },
  {
    week: 3,
    title: "Level Design and Environment Storytelling",
    focus:
      "Principles of level design for different genres. Guiding the player. Using environments to tell stories and convey information.",
    outcomes: "Design basic game levels.",
    project: "Sketch Level Map",
    projectDescription:
      "Students will sketch a top-down or isometric map for a hypothetical game level. The map should indicate the intended player path, key locations (e.g., start, end, points of interest, enemy placements), and any environmental storytelling elements.",
  },
  {
    week: 4,
    title: "Narrative Design and Storytelling in Games",
    focus:
      "Techniques for creating compelling narratives. Character development. Integrating story with gameplay.",
    outcomes: "Develop game narrative elements.",
    project: "Game Character & Story Outline",
    projectDescription:
      "Students will develop a brief biography for a main character of a game concept, including their motivations and background. They will also write a one-page outline summarizing the main plot points or narrative arc of the game.",
  },
  {
    week: 5,
    title: "User Interface (UI) and User Experience (UX) for Games",
    focus:
      "Designing intuitive game UIs. Ensuring a positive player UX. Menus, HUDs, and feedback systems.",
    outcomes: "Design game UI/UX.",
    project: "Wireframe Game UI/HUD",
    projectDescription:
      "Students will create wireframes (simple skeletal layouts) for a game's main menu screen (including options like Start, Load, Options, Quit) and an in-game Heads-Up Display (HUD) showing essential information like health, score, or ammo.",
  },
  {
    week: 6,
    title: "Introduction to a Game Engine (e.g., Unity/Godot)",
    focus:
      "Overview of a chosen game engine. Basic interface navigation. Importing assets and setting up a simple scene.",
    outcomes: "Navigate game engine basics.",
    project: "Game Engine Setup & Assets",
    projectDescription:
      "Students will install and set up a game engine (e.g., Unity or Godot), create a new project, and practice importing basic assets like 2D sprites or simple 3D models into the project library and placing them in a test scene.",
  },
  {
    week: 7,
    title: "Prototyping a Game Concept - Part 1 (Core Loop)",
    focus:
      "Students begin prototyping a game concept based on their design. Implementing the core gameplay loop using the chosen engine.",
    outcomes: "Implement core game loop.",
    project: "Prototype Core Gameplay Loop",
    projectDescription:
      "Using the chosen game engine, students will start building a digital prototype of a simple game concept. This week focuses on implementing the core gameplay loop, such as player character movement and a basic win/lose condition or objective.",
  },
  {
    week: 8,
    title: "Prototyping a Game Concept - Part 2 (Adding Mechanics)",
    focus:
      "Expanding the prototype by adding more mechanics, levels, or content. Iterating based on playtesting.",
    outcomes: "Expand prototype with mechanics.",
    project: "Add New Game Mechanic",
    projectDescription:
      "Students will expand their game prototype by adding at least one new significant game mechanic. This could involve creating collectible items, simple enemies with basic AI, interactive environment elements, or a scoring system.",
  },
  {
    week: 9,
    title: "Playtesting and Iterative Design",
    focus:
      "Importance of playtesting. Gathering and analyzing player feedback. Iterating on game design and mechanics.",
    outcomes: "Use playtesting for iteration.",
    project: "Playtest & Gather Feedback",
    projectDescription:
      "Students will have their peers playtest their game prototypes. They will observe the playtesters, take notes on their experience and difficulties, and gather structured feedback through questionnaires or informal interviews to identify areas for improvement.",
  },
  {
    week: 10,
    title: "Game Art and Audio Considerations",
    focus:
      "Overview of game art styles and pipelines. Importance of sound design and music in creating atmosphere and feedback.",
    outcomes: "Plan game art and audio.",
    project: "Game Art Mood Board & Sounds",
    projectDescription:
      "Students will create a visual mood board (a collection of images, colors, and art examples) to define the intended art style and atmosphere for their game concept. They will also list key sound effects and music cues needed to enhance the player experience.",
  },
  {
    week: 11,
    title: "Game Polish and Monetization/Distribution (Overview)",
    focus:
      "Adding polish to the game prototype. Brief overview of game monetization models and distribution platforms.",
    outcomes: "Add polish to game prototype.",
    project: "Polish Prototype (Visuals/Audio)",
    projectDescription:
      "Students will focus on adding 'juice' or polish to their game prototype. This includes implementing simple visual effects (like particle systems for explosions or impacts), adding basic sound effects for key actions, and refining controls for better feel.",
  },
  {
    week: 12,
    title: "Final Project Presentation and Game Design Document",
    focus:
      "Students present their game prototypes and a concise Game Design Document (GDD) outlining their game concept.",
    outcomes: "Present game prototype and GDD.",
    project: "Present Prototype & GDD",
    projectDescription:
      "Students will present their game prototype to the class, demonstrating its features and gameplay. They will also submit a short (1-2 page) Game Design Document (GDD) that outlines the game's concept, core mechanics, target audience, and art/audio direction.",
  },
];
