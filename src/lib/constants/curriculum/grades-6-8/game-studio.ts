import { CourseSchedule } from "@/lib/interfaces/courses";

export const gameStudio: CourseSchedule[] = [
  {
    week: 1,
    title: "Welcome to the Game Studio! Core Concepts & Tools",
    focus:
      "Overview of game dev lifecycle, game genres, core mechanics (loops, goals, rules). Intro to a beginner-friendly game engine (e.g., GDevelop, Construct). Setting up the development environment.",
    outcomes:
      "Students will understand basic game design principles, set up their development environment, and brainstorm a simple game idea.",
  },
  {
    week: 2,
    title: "Bringing Characters to Life: Sprites and Basic Movement",
    focus:
      "Creating or importing sprites. Implementing sprite animations (idle, run, jump). Programming player input for movement (keyboard/mouse).",
    outcomes:
      "Students will create an animated player character that responds to user controls within the game engine.",
  },
  {
    week: 3,
    title: "Building Your World: Tilemaps and Environment Design",
    focus:
      "Introduction to tilemaps for creating game levels. Designing a simple level with platforms, obstacles, and backgrounds. Basic parallax scrolling for depth.",
    outcomes:
      "Students will design and implement a basic game level using tilemaps and static environmental elements.",
  },
  {
    week: 4,
    title: "Making it Real: Collision Detection and Simple Physics",
    focus:
      "Implementing collision detection between player and environment (platforms, walls). Introducing basic physics concepts like gravity and jumping mechanics.",
    outcomes:
      "Students will enable their player character to interact realistically with the game world, such as landing on platforms and being blocked by walls.",
  },
  {
    week: 5,
    title: "Goals and Rewards: Collectibles, Scoring & UI Elements",
    focus:
      "Adding collectible items (e.g., coins, power-ups). Implementing a scoring system. Creating basic User Interface (UI) elements like score display and health bars.",
    outcomes:
      "Students will create a game with clear objectives (collecting items) and provide player feedback through scores and UI.",
  },
  {
    week: 6,
    title: "Adding Challenges: Simple Enemies and Basic AI",
    focus:
      "Designing simple enemy characters. Implementing basic enemy Artificial Intelligence (AI) like patrolling or simple chase behaviors. Player-enemy interaction (damage, defeat).",
    outcomes:
      "Students will implement enemy characters that provide a challenge and interact with the player.",
  },
  {
    week: 7,
    title: "Structuring Your Game: Menus and Scene Management",
    focus:
      "Managing different game states (e.g., main menu, gameplay, game over screen). Implementing transitions between scenes. Introduction to saving/loading basic game progress (optional).",
    outcomes:
      "Students will structure their game with multiple scenes, including a start screen, game level, and game over screen.",
  },
  {
    week: 8,
    title: "Audio Immersion: Sound Effects and Music",
    focus:
      "Integrating sound effects for player actions and game events (e.g., jump, collect item, enemy hit). Adding background music to enhance game atmosphere. Understanding audio formats.",
    outcomes:
      "Students will enhance their games with appropriate sound effects and background music to improve player experience.",
  },
  {
    week: 9,
    title: "Refining Your Creation: Polish and Bug Squashing",
    focus:
      "Importance of playtesting and gathering feedback. Techniques for polishing game mechanics, controls, and visuals. Common debugging strategies and tools within the game engine.",
    outcomes:
      "Students will learn to identify and fix bugs, and refine their game's overall feel and presentation based on playtesting.",
  },
  {
    week: 10,
    title: "Project Workshop: Building Your Platformer or Puzzle Game",
    focus:
      "Students begin focused work on a larger project, choosing to build either a platformer or a puzzle game, applying all concepts learned. Instructor guidance on design choices and implementation challenges.",
    outcomes:
      "Students will develop a significant portion of their chosen game project (platformer or puzzle type), demonstrating integrated skills.",
  },
  {
    week: 11,
    title: "Project Workshop: Advanced Mechanics & Customization",
    focus:
      "Continued development of the main project. Implementing more advanced or custom mechanics specific to their game idea (e.g., unique power-ups, multi-stage enemies, simple dialogue for RPG-lite elements if applicable).",
    outcomes:
      "Students will implement advanced features or custom elements in their game project, showcasing creativity and problem-solving.",
  },
  {
    week: 12,
    title: "Game Showcase! Final Touches and Sharing Your Game",
    focus:
      "Finalizing game projects: adding finishing touches, instructions, and credits. Preparing a short presentation or demo of their game. Introduction to basic game publishing/sharing options (e.g., web build, itch.io).",
    outcomes:
      "Students will complete and present a polished game project to their peers and learn basic methods for sharing their creations online.",
  },
];
