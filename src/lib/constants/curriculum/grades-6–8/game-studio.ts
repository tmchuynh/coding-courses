import { CourseSchedule } from "@/lib/interfaces/courses";

export const gameStudio: CourseSchedule[] = [
  {
    week: 1,
    title: "Welcome to the Game Studio: Roles and Game Design Basics",
    focus:
      "What makes a good game? Elements of game design (mechanics, dynamics, aesthetics). Roles in a game studio (designer, programmer, artist - simplified). Introduction to a game development tool (e.g., Scratch, GDevelop, Construct).",
    outcomes:
      "Students will understand basic game design elements and explore a game development tool.",
    project: "Game Analysis & Tool Intro",
    projectDescription:
      "Play and analyze a simple game, identifying its core mechanics, player goals, and what makes it fun. Explore the chosen game development tool by creating a sprite that moves.",
  },
  {
    week: 2,
    title: "Brainstorming and Prototyping Game Ideas",
    focus:
      "Team formation (optional, or individual). Brainstorming game concepts. Paper prototyping: sketching game screens, rules, and player interactions.",
    outcomes:
      "Students will generate game ideas and create a paper prototype for one concept.",
    project: "Paper Prototype Game",
    projectDescription:
      "Brainstorm 2-3 simple game ideas. Choose one and create a paper prototype, including sketches of key screens/levels, rules, and how the player interacts with the game. Playtest the paper prototype with a peer.",
  },
  {
    week: 3,
    title: "Digital Prototyping: Core Mechanics",
    focus:
      "Translating paper prototypes to a digital format using the chosen game tool. Implementing the core game mechanic (e.g., player movement, jumping, shooting, collecting).",
    outcomes:
      "Students will develop a digital prototype focusing on the main player action.",
    project: "Core Mechanic Prototype",
    projectDescription:
      "Using the chosen game development tool, create a digital prototype that implements the single most important mechanic of your game idea (e.g., if it's a platformer, implement jumping; if a collector, implement item collection).",
  },
  {
    week: 4,
    title: "Adding Goals and Challenges",
    focus:
      "Defining clear win/lose conditions. Implementing objectives (e.g., reach a goal, collect X items, defeat Y enemies). Adding simple obstacles or enemies.",
    outcomes:
      "Students will implement clear objectives and initial challenges in their game prototype.",
    project: "Win/Lose & Basic Challenge",
    projectDescription:
      "Add a clear goal to your digital prototype (e.g., a finish line, a score target). Implement a simple challenge (e.g., a stationary obstacle to avoid, a timer). Add logic for winning or losing the game.",
  },
  {
    week: 5,
    title: "Art and Assets: Visual Design for Your Game",
    focus:
      "Creating or sourcing simple game art (sprites, backgrounds). Basic animation (frame-by-frame). Importing assets into the game tool.",
    outcomes:
      "Students will be able to create or find and implement visual assets for their game.",
    project: "Player Sprite & Background",
    projectDescription:
      "Design and create (or find free assets for) a player character sprite with a simple animation (e.g., idle or walk). Create or find a background image. Implement these into your game prototype.",
  },
  {
    week: 6,
    title: "Sound Design: Bringing Your Game to Life",
    focus:
      "Finding or creating simple sound effects and background music. Implementing audio triggers for game events (e.g., jump sound, collection sound).",
    outcomes:
      "Students will be able to add sound effects and music to their game.",
    project: "Add Sound FX & Music",
    projectDescription:
      "Find or create at least two sound effects for key actions in your game (e.g., player action, collecting an item) and implement them. Add a short loop of background music.",
  },
  {
    week: 7,
    title: "Level Design: Creating Engaging Spaces",
    focus:
      "Principles of simple level design. Creating a playable level with clear paths, challenges, and rewards. Iterating on level design based on playtesting.",
    outcomes: "Students will design and build a playable game level.",
    project: "First Level Design & Build",
    projectDescription:
      "Design a complete, playable level for your game. This level should include the core mechanics, challenges, goals, art, and sound implemented so far. Ensure it's possible to win and lose.",
  },
  {
    week: 8,
    title: "User Interface (UI): Menus and Information",
    focus:
      "Designing and implementing a start screen. Displaying important information to the player (e.g., score, lives, timer) using UI elements.",
    outcomes:
      "Students will create basic UI elements for their game, including a start screen.",
    project: "Start Screen & Game UI",
    projectDescription:
      "Create a start screen for your game with a 'Play' button. Add UI elements within the game level to display the player's score and/or lives.",
  },
  {
    week: 9,
    title: "Playtesting and Feedback",
    focus:
      "Importance of playtesting. How to give and receive constructive feedback. Observing others play your game to identify issues and areas for improvement.",
    outcomes:
      "Students will conduct playtesting sessions and learn to iterate based on feedback.",
    project: "Peer Playtesting",
    projectDescription:
      "Organize a playtesting session where students play each other's games. Provide structured feedback (e.g., what was fun, what was confusing, what was difficult). Take notes on feedback received for your game.",
  },
  {
    week: 10,
    title: "Iteration and Polish: Making Your Game Better",
    focus:
      "Analyzing playtesting feedback. Prioritizing changes. Bug fixing. Adding small polish elements (e.g., particle effects, screen shake - simple).",
    outcomes:
      "Students will iterate on their game design and implementation based on feedback.",
    project: "Implement Playtest Feedback",
    projectDescription:
      "Based on the feedback from Week 9, choose 2-3 key improvements or bug fixes to implement in your game. Add one small polish element.",
  },
  {
    week: 11,
    title: "Game Studio: Final Touches and Game Build",
    focus:
      "Finalizing all game elements. Ensuring the game is complete and playable from start to finish. Creating a final build/export of the game.",
    outcomes: "Students will have a completed, playable version of their game.",
    project: "Finalize Game & Build",
    projectDescription:
      "Complete all remaining tasks for your game. Perform final testing. Export/build your game into a playable format shareable with others (if the tool allows).",
  },
  {
    week: 12,
    title: "Game Showcase! Present Your Creation",
    focus:
      "Preparing a short presentation about the game. Demonstrating gameplay. Discussing the design process, challenges, and what was learned.",
    outcomes:
      "Students will present their completed game and reflect on their development journey.",
    project: "Game Studio Showcase",
    projectDescription:
      "Prepare and deliver a short presentation of your game. Demonstrate its features and gameplay. Talk about your design choices, what you enjoyed, and what you found challenging.",
  },
];
