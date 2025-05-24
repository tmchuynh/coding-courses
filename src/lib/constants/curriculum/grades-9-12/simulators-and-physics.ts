import { CourseSchedule } from "@/lib/interfaces/courses";

export const simulatorsAndPhysics: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Simulation and Physics Engines",
    focus:
      "Understanding what simulations are, their applications, and an overview of common physics engines and their core concepts.",
    outcomes: "",
    project: "Physics Engine Comparison",
    projectDescription:
      "Students will conduct online research to identify and compare two distinct physics engines (e.g., Box2D vs. Bullet Physics, or Matter.js vs. PhysX). They will document their core features, typical use cases, and programming languages supported.",
  },
  {
    week: 2,
    title: "Basic Physics Concepts for Simulation",
    focus:
      "Review of fundamental physics principles: motion (velocity, acceleration), forces (gravity, friction), and energy, as they apply to simulations.",
    outcomes: "",
    project: "Model Object Motion",
    projectDescription:
      "Using a programming language of their choice (e.g., Python, JavaScript), students will write a short script that calculates and outputs the position of an object over time, first with constant velocity, then with constant acceleration, applying basic kinematic equations.",
  },
  {
    week: 3,
    title: "Programming with a 2D Physics Engine",
    focus:
      "Setting up a 2D physics engine (e.g., Matter.js). Creating rigid bodies, shapes, and understanding world properties.",
    outcomes: "",
    project: "2D Rigid Body Simulation",
    projectDescription:
      "Students will set up a development environment with Matter.js (or a similar 2D physics engine). They will then create a simulation scene containing a ground plane and several dynamic rigid bodies (e.g., circles, rectangles) that fall and interact under the influence of gravity.",
  },
  {
    week: 4,
    title: "Collision Detection and Response",
    focus:
      "Implementing collision detection between objects. Handling collision events and defining physical responses.",
    outcomes: "",
    project: "Implement Collision Detection",
    projectDescription:
      "Within their 2D physics simulation, students will implement event listeners or callbacks to detect when two specific shapes collide. Upon collision, they will log a message to the console or trigger a simple visual change (e.g., color change).",
  },
  {
    week: 5,
    title: "Constraints and Joints",
    focus:
      "Using constraints and joints to connect bodies and create complex physical systems (e.g., pendulums, bridges).",
    outcomes: "",
    project: "Simulate Simple Pendulum",
    projectDescription:
      "Students will use the physics engine's joint/constraint features to model a simple pendulum. This involves creating two bodies (a fixed point and a bob) and connecting them with a revolute or distance joint, then observing its swinging motion.",
  },
  {
    week: 6,
    title: "Simulating Particle Systems",
    focus:
      "Creating and managing particle systems for effects like fire, smoke, or water. Applying forces to particles.",
    outcomes: "",
    project: "Basic Particle System",
    projectDescription:
      "Students will implement a simple particle emitter that generates a stream of particles. They will control particle properties like lifespan, velocity, and color to simulate an effect such as falling rain or rising sparks.",
  },
  {
    week: 7,
    title: "Data Visualization in Simulations",
    focus:
      "Techniques for visualizing simulation data, such as plotting trajectories, forces, or energy levels.",
    outcomes: "",
    project: "Visualize Projectile Trajectory",
    projectDescription:
      "Students will create a simulation of a projectile launched at an angle. They will then implement a way to draw or plot the path (trajectory) of the projectile as it moves through the simulated environment.",
  },
  {
    week: 8,
    title: "Building Interactive Simulations",
    focus:
      "Adding user interaction to simulations, allowing users to apply forces, create objects, or change parameters.",
    outcomes: "",
    project: "Interactive Object/Force Sim",
    projectDescription:
      "Students will enhance a physics simulation by adding user interactivity. This could involve allowing the user to click the mouse to spawn new objects into the simulation or to apply a force to an existing object by clicking and dragging.",
  },
  {
    week: 9,
    title: "Modeling Real-World Scenarios",
    focus:
      "Applying simulation techniques to model simple real-world systems (e.g., projectile motion, simple machines).",
    outcomes: "",
    project: "Model Catapult or Bouncing Ball",
    projectDescription:
      "Students will choose a simple real-world physical system (e.g., a basic catapult, a ball bouncing with a coefficient of restitution) and attempt to model its behavior using the physics engine, focusing on adjusting parameters to achieve realistic results.",
  },
  {
    week: 10,
    title: "Optimization and Performance",
    focus:
      "Strategies for optimizing simulation performance, especially with a large number of objects or complex calculations.",
    outcomes: "",
    project: "Optimize Multi-Object Simulation",
    projectDescription:
      "Students will create or be given a simulation that performs poorly due to a large number of objects or inefficient calculations. They will then apply optimization techniques (e.g., object pooling, simplifying collision shapes, spatial partitioning concepts) to improve its performance (e.g., increase FPS).",
  },
  {
    week: 11,
    title: "Introduction to 3D Simulation Concepts",
    focus:
      "Overview of 3D physics engines and the added complexities of 3D simulations (e.g., rotations, quaternions).",
    outcomes: "",
    project: "Explore 3D Physics Demo",
    projectDescription:
      "Students will explore pre-existing demos or tutorials for a 3D physics engine (e.g., Unity's physics, Unreal Engine's physics, Bullet Physics). They will identify and document key differences and added complexities compared to 2D simulations, such as 3D rotations, more complex collision shapes, and 3D vector math.",
  },
  {
    week: 12,
    title: "Capstone Project: Custom Simulator",
    focus:
      "Students design and build a custom simulator for a chosen physical phenomenon or system, applying learned concepts.",
    outcomes: "",
    project: "Custom Simulator Capstone",
    projectDescription:
      "For their capstone project, students will choose a physical phenomenon or system (e.g., a simplified solar system model, basic flocking behavior, a rudimentary vehicle suspension) and design and build a custom simulator to model it, incorporating concepts learned throughout the course.",
  },
];
