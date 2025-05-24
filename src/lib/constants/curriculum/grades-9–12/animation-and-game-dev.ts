import { CourseSchedule } from "@/lib/interfaces/courses";

export const animationAndGameDev: CourseSchedule[] = [
  // Note: camelCase might need adjustment if starting with number "3dAnimationAndGameDev"
  {
    week: 1,
    title: "Introduction to 3D Concepts and Blender Interface",
    focus:
      "Understanding 3D space, coordinates, and terminology. Navigating the Blender interface. Basic object manipulation.",
    outcomes: "Navigate Blender, manipulate objects.",
    project: "Blender Basic Shapes Scene",
    projectDescription:
      "Students will familiarize themselves with the Blender interface by creating a new project, adding primitive 3D shapes (cube, sphere, cylinder), and practicing basic transformations (move, rotate, scale) to arrange them in a simple scene composition.",
  },
  {
    week: 2,
    title: "3D Modeling Fundamentals in Blender",
    focus:
      "Polygon modeling techniques: extrusion, subdivision, sculpting basics. Creating simple 3D models (e.g., props, characters).",
    outcomes: "Create simple 3D models.",
    project: "Model Simple 3D Object",
    projectDescription:
      "Using Blender's polygon modeling tools, students will create a simple 3D model from scratch. Examples include a coffee cup, a basic table, or a stylized low-poly tree, focusing on techniques like extruding faces, adding edge loops, and shaping the mesh.",
  },
  {
    week: 3,
    title: "Texturing and Materials in Blender",
    focus:
      "UV unwrapping and mapping. Applying textures and creating materials. Introduction to PBR (Physically Based Rendering) workflows.",
    outcomes: "Apply textures and materials.",
    project: "Texture 3D Model",
    projectDescription:
      "Students will take the 3D model created in Week 2, perform UV unwrapping to create a 2D layout of its surfaces, and then apply a simple image texture (e.g., wood grain, metal) to it using Blender's material and shading nodes.",
  },
  {
    week: 4,
    title: "Rigging and Animation Basics in Blender",
    focus:
      "Creating armatures (skeletons) for 3D models. Skinning and weight painting. Basic keyframe animation principles.",
    outcomes: "Rig and animate models.",
    project: "Rig & Animate 3D Model",
    projectDescription:
      "Students will create a basic armature (skeleton) for their 3D model. They will then bind the mesh to the armature (skinning) and use keyframe animation to create a short, simple animation, such as a waving motion or a jump.",
  },
  {
    week: 5,
    title: "Introduction to Unity Game Engine",
    focus:
      "Overview of the Unity interface. Importing assets. Understanding GameObjects, Components, and Scenes.",
    outcomes: "Use Unity, import assets.",
    project: "Import Model to Unity",
    projectDescription:
      "Students will create a new project in the Unity game engine. They will then export their animated 3D model from Blender (e.g., as an .fbx file) and import it into Unity, placing it within a new scene and ensuring the animation is also imported.",
  },
  {
    week: 6,
    title: "Basic Scripting in Unity with C#",
    focus:
      "Introduction to C# programming for Unity. Variables, functions, and control flow. Moving objects and responding to input.",
    outcomes: "Script basic Unity interactions.",
    project: "Basic Unity C# Script",
    projectDescription:
      "Students will write their first C# script in Unity. This script will be attached to their imported 3D model and will either make the model continuously rotate or trigger a simple action (like playing an animation or moving slightly) when a specific key is pressed.",
  },
  {
    week: 7,
    title: "Implementing 3D Character Control",
    focus:
      "Importing animated characters into Unity. Setting up character controllers. Implementing player movement and basic actions.",
    outcomes: "Implement 3D character movement.",
    project: "3D Character Controller",
    projectDescription:
      "Using an imported animated character (either their own or a provided one), students will set up a Character Controller component in Unity. They will then write C# scripts to enable third-person player control for movement (forward, backward, turning) and basic actions like jumping.",
  },
  {
    week: 8,
    title: "Game Mechanics and Physics in Unity",
    focus:
      "Using Unity's physics engine (Rigidbodies, Colliders). Implementing game mechanics like jumping, shooting, or interactions.",
    outcomes: "Use Unity physics for mechanics.",
    project: "Unity Physics Mechanic",
    projectDescription:
      "Students will implement a core game mechanic that utilizes Unity's physics system. Examples include creating collectible items that disappear on collision, setting up obstacles that the player character can jump over, or implementing a simple projectile shooting system.",
  },
  {
    week: 9,
    title: "UI Design and Implementation in Unity",
    focus:
      "Creating user interfaces (menus, HUDs) using Unity's UI system. Displaying scores, health, and other game information.",
    outcomes: "Create game UI in Unity.",
    project: "Unity UI Menu & HUD",
    projectDescription:
      "Students will use Unity's UI Canvas system to create a functional start menu for their game (with a 'Start Game' button) and a simple in-game Heads-Up Display (HUD) to show information like score, player health, or a timer.",
  },
  {
    week: 10,
    title: "Level Design and Environment Creation",
    focus:
      "Principles of level design. Using ProBuilder or imported assets to create game environments. Lighting and post-processing effects.",
    outcomes: "Design and build game levels.",
    project: "Build Unity Game Level",
    projectDescription:
      "Students will design and construct a small, playable 3D game level or environment. They can use Unity's ProBuilder tools for rapid prototyping or import pre-made assets. Basic lighting and post-processing effects will be applied to enhance the visual appeal.",
  },
  {
    week: 11,
    title: "Audio Integration and Game Polish",
    focus:
      "Adding sound effects and background music. Polishing game feel, debugging, and optimizing performance.",
    outcomes: "Integrate audio into games.",
    project: "Add Audio to Unity Game",
    projectDescription:
      "Students will enhance their game by adding audio elements. This includes implementing background music suitable for their game's theme and adding sound effects for key player actions (e.g., jump, collect item) and game events.",
  },
  {
    week: 12,
    title: "Mini Game Project & Build",
    focus:
      "Students develop a small 3D game incorporating animation and learned Unity concepts. Building the game for a target platform.",
    outcomes: "Build a small 3D game.",
    project: "Mini 3D Game Project",
    projectDescription:
      "As a final project, students will create a small but complete 3D game. This game must incorporate their custom animated model from Blender, at least one core game mechanic, UI elements, and audio. They will then build the game for a standalone platform (e.g., PC, Mac, or WebGL).",
  },
];
