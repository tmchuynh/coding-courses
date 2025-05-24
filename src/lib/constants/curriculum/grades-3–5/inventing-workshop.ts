import { CourseSchedule } from "@/lib/interfaces/courses";

export const inventingWorkshop: CourseSchedule[] = [
  {
    week: 1,
    title: "What is an Invention? Meet Micro:bit/Arduino",
    focus: "Exploring inventions, intro to a microcontroller, basic setup.",
    outcomes: "Understand inventing and set up a microcontroller.",
    project: "Microcontroller Setup & LED",
    projectDescription:
      "Connect the microcontroller to a computer, install necessary software, and run a basic program that lights up an LED.",
  },
  {
    week: 2,
    title: "Blinking Lights & Simple Outputs",
    focus: "Programming an LED to blink, understanding digital outputs.",
    outcomes: "Control an LED with code.",
    project: "Blinking LED Program",
    projectDescription:
      "Write a simple program that turns an LED on for one second, then off for one second, repeating this pattern.",
  },
  {
    week: 3,
    title: "Buttons & Inputs",
    focus: "Using buttons as inputs to trigger actions (e.g., light up LED).",
    outcomes: "Use button inputs to control outputs.",
    project: "Button-Controlled LED",
    projectDescription:
      "Write a program that turns on an LED when a button is pressed and turns it off when released.",
  },
  {
    week: 4,
    title: "Sensors: Light & Temperature",
    focus: "Reading data from light or temperature sensors, displaying values.",
    outcomes: "Read and display data from sensors.",
    project: "Light Sensor LED",
    projectDescription:
      "Write a program that reads the value from a light sensor and turns on an LED if the light level is below a certain threshold.",
  },
  {
    week: 5,
    title: "Making Sounds & Music",
    focus:
      "Programming simple tunes or sound effects with the microcontroller.",
    outcomes: "Create sounds using code.",
    project: "Coded Melodies/Sounds",
    projectDescription:
      "Develop a program that plays a short melody using the microcontroller's built-in sound capabilities, like beeping or playing notes.",
  },
  {
    week: 6,
    title: "Mini-Project: Interactive Badge",
    focus: "Creating a badge that lights up or makes sound based on input.",
    outcomes: "Build a simple interactive wearable device.",
    project: "Mini-Project: Interactive Badge",
    projectDescription:
      "Create a badge that lights up when a button is pressed or changes color based on light levels, integrating sensors and outputs.",
  },
  {
    week: 7,
    title: "Motors & Movement",
    focus: "Controlling small servo motors or DC motors.",
    outcomes: "Make things move with motors.",
    project: "Servo Motor Control",
    projectDescription:
      "Write a program that controls a servo motor to move to specific angles when a button is pressed, demonstrating basic movement control.",
  },
  {
    week: 8,
    title: "Combining Sensors & Actuators",
    focus: "Creating projects where sensor data controls motors or lights.",
    outcomes: "Build systems where sensors trigger actions.",
    project: "Sensor-Motor Integration",
    projectDescription:
      "Develop a project where a light sensor controls the speed of a motor or the brightness of an LED, integrating inputs and outputs.",
  },
  {
    week: 9,
    title: "Prototyping: From Idea to Physical Model",
    focus: "Using craft materials to build enclosures or parts for inventions.",
    outcomes: "Create physical prototypes for inventions.",
    project: "Invention Prototype (Crafts)",
    projectDescription:
      "Design and construct a physical model of your invention idea using materials like cardboard, plastic, or wood, integrating the microcontroller and components.",
  },
  {
    week: 10,
    title: "Final Invention Project: Ideation & Design",
    focus: "Brainstorming a useful or fun invention to build and program.",
    outcomes: "Plan a detailed invention project.",
    project: "Final Invention Plan",
    projectDescription:
      "Draft a comprehensive plan for your final invention, outlining its purpose, the components needed, how it will work, and the code that will control it.",
  },
  {
    week: 11,
    title: "Final Invention Project: Building & Coding",
    focus: "Constructing the hardware and writing the code for the invention.",
    outcomes: "Develop the hardware and software for the invention.",
    project: "Final Invention Build",
    projectDescription:
      "Work on your final invention project, assembling the hardware components and writing the code to make it function as planned. Test and refine your invention.",
  },
  {
    week: 12,
    title: "Young Inventors' Fair: Showcase",
    focus: "Presenting inventions, explaining their purpose and how they work.",
    outcomes: "Share completed inventions and demonstrate functionality.",
    project: "Inventors' Fair Showcase",
    projectDescription:
      "Prepare a presentation for your invention, explaining its purpose, how it works, and demonstrating its features. Engage with classmates and answer questions about your invention.",
  },
];
