import { CourseSchedule } from "@/lib/interfaces/courses";

export const unityGameDev6To8: CourseSchedule[] = [
  {
    week: 1,
    title: "Welcome to Unity: Interface and Basic Concepts",
    focus:
      "Navigating the Unity Hub and Editor. Understanding GameObjects, Components, Scenes, and Assets. Basic 3D/2D view manipulation.",
    outcomes:
      "Students will be able to navigate the Unity interface and understand core concepts.",
    project: "Unity Editor Tour",
    projectDescription:
      "Create a new Unity project (2D or 3D). Add several primitive shapes (Cube, Sphere, Plane or Sprite for 2D) to a scene. Practice selecting, moving, rotating, and scaling these objects.",
  },
  {
    week: 2,
    title: "Your First Script: Introduction to C# in Unity",
    focus:
      "What is scripting? Creating C# scripts. Basic C# syntax (variables, simple data types, `Debug.Log()`). Attaching scripts to GameObjects. The `Start()` and `Update()` methods.",
    outcomes:
      "Students will be able to create and attach simple C# scripts to GameObjects.",
    project: "Hello Unity Script",
    projectDescription:
      "Create a C# script that prints a 'Hello Unity!' message to the console when the game starts. Attach this script to a GameObject in the scene and test.",
  },
  {
    week: 3,
    title: "Making Things Move: Transforms and Basic Input",
    focus:
      "Accessing and modifying a GameObject's Transform (position, rotation, scale) via script. Basic keyboard input detection (`Input.GetKey()`).",
    outcomes:
      "Students will be able to move and rotate GameObjects using scripts and respond to keyboard input.",
    project: "Controllable Object",
    projectDescription:
      "Write a C# script to make a Cube (3D) or Sprite (2D) move left/right and up/down using arrow key inputs. The object should also rotate continuously.",
  },
  {
    week: 4,
    title: "Physics and Collisions: Making Interactions Real",
    focus:
      "Introduction to Unity's physics engine. Rigidbodies (2D/3D) and Colliders (2D/3D). Detecting collisions (`OnCollisionEnter` / `OnCollisionEnter2D`).",
    outcomes:
      "Students will understand basic physics components and detect collisions between objects.",
    project: "Bouncing Ball & Collision",
    projectDescription:
      "Create a 'ball' GameObject with a Rigidbody and a 'floor' GameObject with a Collider. Make the ball fall and bounce. Add a script to detect when the ball collides with the floor and print a message.",
  },
  {
    week: 5,
    title: "Prefabs and Instantiation: Creating and Spawning Objects",
    focus:
      "What are Prefabs? Creating Prefabs from GameObjects. Instantiating (spawning) Prefabs at runtime using scripts.",
    outcomes:
      "Students will be able to create reusable Prefabs and spawn them dynamically in the game.",
    project: "Bullet Spawner",
    projectDescription:
      "Create a 'Bullet' Prefab. Write a script attached to a 'Player' GameObject that spawns (instantiates) a Bullet Prefab when the spacebar is pressed.",
  },
  {
    week: 6,
    title: "User Interface (UI) Basics: Text and Buttons",
    focus:
      "Introduction to Unity's UI system (Canvas). Adding Text elements to display information (e.g., score). Adding Buttons and handling click events.",
    outcomes:
      "Students will be able to create simple UI elements like text and buttons.",
    project: "Score UI & Reset Button",
    projectDescription:
      "Create a UI Text element to display a score (initially 0). Add a UI Button that, when clicked, resets the score text back to 0 (actual scoring logic not required yet).",
  },
  {
    week: 7,
    title: "Game Logic: Variables, Conditionals, and Loops",
    focus:
      "Using variables to store game state (score, health). `if/else` statements for decision making. Simple `for` or `while` loops (conceptual or very basic use).",
    outcomes:
      "Students will be able to implement basic game logic using variables and conditional statements.",
    project: "Collectible & Score System",
    projectDescription:
      "Create a 'Player' that can move and a 'Coin' Prefab. When the player collides with a coin, the coin disappears, and a score variable increases. Display the score using UI Text.",
  },
  {
    week: 8,
    title: "Introduction to 2D Game Development (if not already focused)",
    focus:
      "Sprites, Sprite Animations (basic frame-by-frame). 2D Colliders and Rigidbodies. Tilemaps for level creation (overview).",
    outcomes:
      "Students will understand specific tools and techniques for 2D game development in Unity.",
    project: "Animated 2D Character",
    projectDescription:
      "Create a 2D project. Import a sprite sheet for a character and set up a simple idle or run animation. Create a platform for the character to stand on using a 2D sprite with a 2D collider.",
  },
  {
    week: 9,
    title: "Sound Effects and Music",
    focus:
      "Importing audio clips. Using AudioSource and `AudioSource.Play()`. Triggering sounds on events (e.g., collision, button click).",
    outcomes:
      "Students will be able to add basic sound effects and background music to their game.",
    project: "Add Game Sounds",
    projectDescription:
      "Add a sound effect when the player collects a coin (from Week 7 project) or when a button is clicked. Add a simple background music loop to your scene.",
  },
  {
    week: 10,
    title: "Mini-Game Project: Planning and Design",
    focus:
      "Brainstorming a simple game idea (e.g., a simple platformer, a top-down collector, an obstacle dodger). Sketching levels and characters. Defining core mechanics.",
    outcomes: "Students will design a concept for a small, achievable game.",
    project: "Game Design Document",
    projectDescription:
      "Create a short document or presentation outlining your mini-game idea. Include: game title, objective, core mechanics (player actions, win/lose conditions), and sketches of the main character and a sample level.",
  },
  {
    week: 11,
    title: "Mini-Game Project: Development",
    focus:
      "Building the core mechanics of the planned mini-game. Implementing player controls, interactions, and win/lose conditions.",
    outcomes:
      "Students will develop the core functionality of their mini-game.",
    project: "Mini-Game: Core Build",
    projectDescription:
      "Start building your mini-game in Unity based on your design document. Focus on implementing player movement, main interactions (e.g., collecting items, avoiding obstacles), and basic win/lose conditions.",
  },
  {
    week: 12,
    title: "Mini-Game Project: Polish and Showcase",
    focus:
      "Adding UI, sound, simple art/level polish. Testing and bug fixing. Presenting the game to peers.",
    outcomes: "Students will complete and showcase a playable mini-game.",
    project: "Mini-Game: Final & Showcase",
    projectDescription:
      "Add finishing touches to your mini-game: UI elements (start screen, score), sound effects, and simple level design. Test for bugs. Prepare a short demonstration of your game to the class.",
  },
];
