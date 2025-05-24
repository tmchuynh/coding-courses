import { CourseSchedule } from "@/lib/interfaces/courses";

export const unityGameDev9To12: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Unity and C# Basics",
    focus:
      "Unity interface overview. GameObjects, Components, Scenes. C# fundamentals: variables, data types, operators, control flow.",
    outcomes: "",
    project:
      "Set up a Unity project and create a C# script to print a message to the console.",
    projectDescription:
      "Students will initialize their first Unity project, familiarize themselves with the editor, and write a basic C# script that outputs a 'Hello World' style message to the Unity console, demonstrating understanding of script creation and attachment.",
  },
  {
    week: 2,
    title: "Scripting Player Movement and Input",
    focus:
      "Creating C# scripts. Handling player input (keyboard, mouse). Implementing 2D/3D character movement.",
    outcomes: "",
    project:
      "Develop a script to move a 2D sprite or 3D cube based on keyboard input.",
    projectDescription:
      "This project involves writing C# scripts to enable player control over a GameObject. Students will implement logic to read keyboard inputs (e.g., arrow keys or WASD) and translate these inputs into movement for a 2D sprite or a 3D cube within the game scene.",
  },
  {
    week: 3,
    title: "Physics and Collisions",
    focus:
      "Unity's physics engine: Rigidbodies, Colliders. Detecting and responding to collisions. Triggers and physical materials.",
    outcomes: "",
    project:
      "Implement a scenario where two objects collide and trigger an event (e.g., sound or score change).",
    projectDescription:
      "Students will set up a scene with at least two GameObjects equipped with Rigidbodies and Colliders. They will then script a response to a collision event, such as playing a sound, changing an object's color, or incrementing a score variable.",
  },
  {
    week: 4,
    title: "Game Mechanics - Collectibles, Hazards, Scoring",
    focus:
      "Implementing core game mechanics. Creating collectible items, hazards that affect the player, and a scoring system.",
    outcomes: "",
    project: "Create a simple game with a player, collectibles, and a hazard.",
    projectDescription:
      "This project focuses on building a small interactive game. Students will create scripts for items that can be collected by the player, hazards that might reset the player or deduct points, and a system to track and display the player's score.",
  },
  {
    week: 5,
    title: "User Interface (UI) Design and Implementation",
    focus:
      "Unity UI system: Canvas, Text, Buttons, Sliders. Creating main menus, HUDs (Heads-Up Displays), and game over screens.",
    outcomes: "",
    project: "Design and implement a main menu screen with a start button.",
    projectDescription:
      "Students will use Unity's UI system to create a functional main menu. This includes adding UI elements like Text for the game title, a Button to start the game, and potentially other elements like an options or quit button.",
  },
  {
    week: 6,
    title: "Animation in Unity",
    focus:
      "Unity's animation system: Animation window, Animator controller. Creating and controlling sprite animations or 3D model animations.",
    outcomes: "",
    project: "Animate a character's idle and walk cycles.",
    projectDescription:
      "Using Unity's animation tools, students will create at least two animation clips for a character: an idle animation for when the character is still, and a walk/run animation for when the character is moving. They will set up an Animator Controller to manage these states.",
  },
  {
    week: 7,
    title: "Working with 2D Tilemaps or 3D Environments",
    focus:
      "For 2D: Using Tilemaps to create levels. For 3D: Prototyping environments, importing assets, and basic level design.",
    outcomes: "",
    project:
      "Build a small 2D level using Tilemaps or a simple 3D environment.",
    projectDescription:
      "Students will either use Unity's Tilemap system to design and build a 2D game level with different types of tiles (e.g., ground, walls, platforms) or construct a basic 3D environment using primitive shapes or imported simple assets, focusing on layout and navigability.",
  },
  {
    week: 8,
    title: "AI for Non-Player Characters (NPCs)",
    focus:
      "Basic AI behaviors for NPCs: pathfinding (NavMesh basics), simple decision making (e.g., patrol, chase).",
    outcomes: "",
    project: "Create an NPC that patrols a set path.",
    projectDescription:
      "This project involves creating a Non-Player Character (NPC) that exhibits simple autonomous behavior. Students will define a patrol path (e.g., between two points) and script the NPC to move along this path, potentially using Unity's NavMesh system for more complex environments.",
  },
  {
    week: 9,
    title: "Audio Integration - Sound Effects and Music",
    focus:
      "Importing and playing sound effects. Implementing background music. Using Audio Sources and Audio Listeners.",
    outcomes: "",
    project: "Add background music and sound effects for player actions.",
    projectDescription:
      "Students will enhance their game by incorporating audio. This includes adding looping background music to set the mood and implementing sound effects that trigger in response to specific player actions or game events (e.g., jumping, collecting an item).",
  },
  {
    week: 10,
    title: "Game State Management and Scene Transitions",
    focus:
      "Managing different game states (e.g., playing, paused, game over). Loading and transitioning between scenes.",
    outcomes: "",
    project: "Implement a game over screen and a way to restart the game.",
    projectDescription:
      "This project focuses on controlling the flow of the game. Students will implement a game over state that activates under certain conditions (e.g., player health reaches zero) and provides an option to restart the game, which involves reloading the main game scene or transitioning to a menu.",
  },
  {
    week: 11,
    title: "Polishing, Debugging, and Optimization",
    focus:
      "Adding polish to the game (particle effects, camera work). Debugging techniques. Basic game optimization strategies.",
    outcomes: "",
    project:
      "Optimize a simple game scene by reducing draw calls or improving script performance.",
    projectDescription:
      "Students will learn to identify performance bottlenecks in a sample game scene using Unity's Profiler or other diagnostic tools. They will then apply optimization techniques, such as simplifying models, optimizing scripts, or using static batching, to improve frame rates or reduce resource usage.",
  },
  {
    week: 12,
    title: "Project: Build and Publish a Small Game",
    focus:
      "Students develop a complete small game incorporating learned concepts. Building the game for a target platform (PC, WebGL).",
    outcomes: "",
    project:
      "Develop and build a small, complete game (e.g., a simple platformer or collector game).",
    projectDescription:
      "The capstone project for this course involves students applying all the concepts learned to create a small but complete game. This includes game mechanics, UI, animation, audio, and level design. Finally, they will build their game for a chosen platform like PC or WebGL.",
  },
];
