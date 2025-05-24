import { CourseSchedule } from "@/lib/interfaces/courses";

export const unityGameDev6To8: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Unity & C# Basics",
    focus:
      "Navigating the Unity interface (Scene view, Game view, Hierarchy, Inspector, Project window). Understanding GameObjects, Components, and Scenes. Introduction to C# scripting: variables, data types, and simple functions (Start, Update).",
    outcomes:
      "Students will be able to set up a Unity project, understand the main editor windows, and write basic C# scripts to print messages to the console.",
  },
  {
    week: 2,
    title: "Player Movement & Input Control",
    focus:
      "Creating a player character (2D or 3D). Writing C# scripts to handle player input (keyboard, mouse/touch). Implementing basic movement (e.g., left/right, jump for 2D; forward/backward, turning for 3D).",
    outcomes:
      "Students will create a controllable player character that responds to user input within a Unity scene.",
  },
  {
    week: 3,
    title: "Understanding Physics & Collisions",
    focus:
      "Introduction to Unity's physics engine. Using Rigidbody components for realistic movement. Understanding Colliders (Box, Sphere, Capsule) and Triggers. Detecting and responding to collisions in C#.",
    outcomes:
      "Students will implement basic physics interactions, like making objects fall with gravity and detecting when objects touch each other.",
  },
  {
    week: 4,
    title: "Prefabs & Instantiation: Building Blocks of Games",
    focus:
      "Creating and using Prefabs for reusable GameObjects (e.g., enemies, collectibles, projectiles). Instantiating Prefabs at runtime using C# scripts. Managing spawned objects.",
    outcomes:
      "Students will be able to create reusable game elements as Prefabs and dynamically spawn them into their game world via script.",
  },
  {
    week: 5,
    title: "User Interface (UI) Fundamentals",
    focus:
      "Introduction to Unity's UI system (Canvas, RectTransform). Creating UI elements like Text, Buttons, Images, and Sliders. Displaying game information (e.g., score, health) and creating simple interactive menus.",
    outcomes:
      "Students will design and implement basic UI elements to display game data and allow for simple user interaction.",
  },
  {
    week: 6,
    title: "Animation Basics: Bringing Characters to Life",
    focus:
      "Using Unity's Animation window to create simple animations (e.g., idle, walk, jump). Understanding the Animator component and Animation Controllers. Triggering animations from C# scripts based on player actions.",
    outcomes:
      "Students will create and control simple animations for their game characters or objects.",
  },
  {
    week: 7,
    title: "Sound & Audio Integration",
    focus:
      "Adding sound effects and background music. Using AudioSource and AudioClip components. Triggering sounds from C# scripts for game events (e.g., collecting an item, player jumping).",
    outcomes:
      "Students will integrate audio into their games to enhance the player experience with sound effects and music.",
  },
  {
    week: 8,
    title: "Scene Management & Game Flow",
    focus:
      "Organizing a game into multiple scenes (e.g., Main Menu, Level 1, Game Over). Writing C# scripts to load and switch between scenes. Passing data between scenes (optional, basic).",
    outcomes:
      "Students will structure their game with multiple scenes and implement navigation between them, creating a basic game flow.",
  },
  {
    week: 9,
    title: "Basic Enemy AI & Behavior",
    focus:
      "Designing simple enemy characters. Implementing basic AI behaviors using C# scripts (e.g., patrolling, following the player within a certain range, simple shooting). Player-enemy interaction (e.g., taking damage).",
    outcomes:
      "Students will create simple enemy characters with basic autonomous behaviors that can interact with the player.",
  },
  {
    week: 10,
    title: "Project Planning & Prototyping Your Game",
    focus:
      "Brainstorming game ideas (2D or simple 3D). Defining core mechanics, objectives, and win/loss conditions. Planning project scope. Starting to prototype the core gameplay loop of their chosen game concept.",
    outcomes:
      "Students will have a defined game concept and begin building a playable prototype focusing on its main mechanics.",
  },
  {
    week: 11,
    title: "Project Development & Debugging",
    focus:
      "Continued development of individual game projects. Implementing additional features, levels, and UI elements. Learning basic debugging techniques in Unity and C# to identify and fix issues.",
    outcomes:
      "Students will make significant progress on their game projects, adding more content and learning to troubleshoot common development problems.",
  },
  {
    week: 12,
    title: "Game Showcase: Final Touches & Sharing",
    focus:
      "Finalizing game projects: adding polish, instructions, and credits. Preparing a short presentation or demo of their game. Introduction to build settings for sharing games (e.g., WebGL, Windows build).",
    outcomes:
      "Students will complete a playable game, present it to their peers, and learn basic steps for building and sharing their Unity creations.",
  },
];
