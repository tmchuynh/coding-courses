import { CourseSchedule } from "@/lib/interfaces/courses";

export const gameBuildersClub: CourseSchedule[] = [
  {
    week: 1,
    title: "Intro to Game Design & Scratch",
    focus:
      "What makes a game? Intro to Scratch interface, sprites, and backdrops.",
    outcomes: "Understand game elements and navigate Scratch.",
    project: "Scratch: Sprite & Backdrop",
    projectDescription:
      "Build a basic Scratch project that includes at least one sprite and a backdrop, focusing on using the Scratch interface.",
  },
  {
    week: 2,
    title: "Sprite Movement & Animation",
    focus:
      "Making sprites move with keyboard input, simple costume changes for animation.",
    outcomes: "Create a controllable, animated character.",
    project: "Animated Sprite (Keyboard)",
    projectDescription:
      "Develop a Scratch project where a sprite can move around the screen using keyboard controls, with costume changes to show movement.",
  },
  {
    week: 3,
    title: "Events & Basic Interactions",
    focus:
      "Using 'when green flag clicked', 'when sprite clicked', simple interactions.",
    outcomes: "Make sprites react to events.",
    project: "Sprite Event Interaction",
    projectDescription:
      "Build a project where clicking on a sprite triggers an action, like changing its appearance or playing a sound.",
  },
  {
    week: 4,
    title: "Loops & Sounds",
    focus: "Using repeat loops for continuous actions, adding sound effects.",
    outcomes: "Implement repeating actions and sounds.",
    project: "Loops & Sounds in Animation",
    projectDescription:
      "Create a Scratch project that uses loops to repeat an action (like moving or changing costumes) and includes sound effects that play during the loop.",
  },
  {
    week: 5,
    title: "Variables: Keeping Score",
    focus: "Introduction to variables, creating a score or lives counter.",
    outcomes: "Use variables to track game data.",
    project: "Score Counter (Variables)",
    projectDescription:
      "Develop a Scratch project that includes a variable to keep track of the player's score, updating it based on actions in the game (like collecting items or completing tasks).",
  },
  {
    week: 6,
    title: "Mini-Project: Chase Game",
    focus: "Building a simple game where one sprite chases another.",
    outcomes: "Develop a complete small game with scoring.",
    project: "Mini-Project: Chase Game",
    projectDescription:
      "Build a Scratch project where one sprite (the chaser) tries to catch another sprite (the target), updating the score when the chaser catches the target. Use movement, variables, and sound effects.",
  },
  {
    week: 7,
    title: "Conditional Logic: If/Then",
    focus:
      "Using 'if/then' blocks for decisions (e.g., if touching color, then...).",
    outcomes: "Implement conditional actions in a game.",
    project: "Conditional Game Logic",
    projectDescription:
      "Enhance the chase game by adding conditions, such as changing the score when the chaser catches the target or triggering a sound effect when a certain condition is met.",
  },
  {
    week: 8,
    title: "More Game Mechanics: Clones & Messages",
    focus:
      "Creating clones of sprites, using broadcast messages for communication.",
    outcomes: "Add complexity with cloning and messaging.",
    project: "Clones & Messages",
    projectDescription:
      "Modify the chase game to include cloned sprites that act as obstacles or additional targets, using broadcast messages to control interactions between sprites.",
  },
  {
    week: 9,
    title: "Designing Game Levels",
    focus: "Thinking about multiple levels or stages in a game.",
    outcomes: "Plan games with increasing difficulty or stages.",
    project: "Multi-Level Game Design",
    projectDescription:
      "Create a plan for a game that includes at least two levels, detailing how the gameplay will change between levels, such as increasing difficulty or introducing new mechanics.",
  },
  {
    week: 10,
    title: "Final Game Project: Planning Your Own Game",
    focus: "Brainstorming and designing a unique game concept.",
    outcomes: "Design a detailed game project.",
    project: "Final Game Plan (Scratch)",
    projectDescription:
      "Draft a game design document that includes the game's concept, mechanics, target audience, and how you will use Scratch to build it. Include sketches of sprites and levels if possible.",
  },
  {
    week: 11,
    title: "Final Game Project: Building Time",
    focus: "Developing the planned game in Scratch.",
    outcomes: "Build the core mechanics of the final game.",
    project: "Final Game Build (Scratch)",
    projectDescription:
      "Work on your final game project, implementing the mechanics, sprites, and levels you planned. Focus on getting the main gameplay working, including movement, scoring, and interactions.",
  },
  {
    week: 12,
    title: "Game Showcase & Playtesting",
    focus: "Presenting games, playing each other's creations, giving feedback.",
    outcomes: "Share completed games and practice playtesting.",
    project: "Game Showcase & Playtest",
    projectDescription:
      "Showcase your final game project, allowing classmates to playtest it. Gather feedback on gameplay, mechanics, and overall enjoyment, and discuss what you learned during the project.",
  },
];
