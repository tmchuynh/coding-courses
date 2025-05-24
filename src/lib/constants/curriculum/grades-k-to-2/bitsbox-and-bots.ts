import { CourseSchedule } from "@/lib/interfaces/courses";

export const bitsboxAndBots: CourseSchedule[] = [
  {
    week: 1,
    title: "Welcome to Bitsbox: Your First App!",
    focus:
      "Introduction to Bitsbox interface, typing simple commands, creating a basic app.",
    outcomes: "Run simple Bitsbox app.",
    project: "Bitsbox Hello App",
    projectDescription:
      "Log into Bitsbox, find a super simple starter app (like one that just displays text), type the command `text('Hello!')` and run the app on the virtual device.",
  },
  {
    week: 2,
    title: "Adding Graphics & Text",
    focus: "Using Bitsbox commands for stamps (images) and text.",
    outcomes: "Use Bitsbox stamps/text.",
    project: "Bitsbox Animal App",
    projectDescription:
      "In Bitsbox, create an app that displays a `stamp()` of your favorite animal and uses the `text()` command to write its name.",
  },
  {
    week: 3,
    title: "Making Things Move",
    focus: "Bitsbox commands for simple animations and movement.",
    outcomes: "Animate in Bitsbox.",
    project: "Bitsbox Bouncing Ball",
    projectDescription:
      "Use Bitsbox commands to make a `stamp()` (e.g., a ball) move across the screen or bounce when it hits the edge.",
  },
  {
    week: 4,
    title: "Tap Interactions",
    focus: "Making app elements respond to taps (clicks).",
    outcomes: "Make Bitsbox apps interactive.",
    project: "Bitsbox Tap Game",
    projectDescription:
      "Create a Bitsbox app with a balloon `stamp()`. Write code so that when the balloon is tapped, it disappears or plays a sound.",
  },
  {
    week: 5,
    title: "Meet the Bots: Basic Commands",
    focus:
      "Introduction to a simple programmable bot (e.g., Ozobot, Sphero Mini), basic movement coding.",
    outcomes: "Program bot basic moves.",
    project: "Program Bot Square",
    projectDescription:
      "Using block coding for Ozobot (with Color Codes) or Sphero Mini, program the bot to move in a square shape.",
  },
  {
    week: 6,
    title: "Mini-Project: Bitsbox Game & Bot Challenge",
    focus: "Create a simple Bitsbox game and a related bot movement sequence.",
    outcomes: "Link Bitsbox app and bot.",
    project: "Bitsbox Game & Bot Task",
    projectDescription:
      "Create a Bitsbox app where you tap to hit a target. Then, program your bot to move to a physical 'target' mat after a successful 'hit' is simulated.",
  },
  {
    week: 7,
    title: "More Bitsbox: Sounds & Effects",
    focus: "Adding sound effects and visual effects to Bitsbox apps.",
    outcomes: "Add sounds to Bitsbox apps.",
    project: "Bitsbox Sound App",
    projectDescription:
      "Create a Bitsbox app with multiple `stamp()` images. Make each stamp play a different funny sound when tapped.",
  },
  {
    week: 8,
    title: "Bot Mazes & Paths",
    focus: "Programming bots to follow lines or navigate mazes.",
    outcomes: "Program bot to follow path.",
    project: "Program Bot Line Follow",
    projectDescription:
      "Draw a course with thick black lines on white paper. Program an Ozobot using Color Codes to follow the line from start to finish, including at least one turn.",
  },
  {
    week: 9,
    title: "Connecting Apps & Bots (Conceptual)",
    focus:
      "Discussing how apps could control bots, simple cause-effect with both.",
    outcomes: "Conceptualize app-bot control.",
    project: "Design App-Bot Interaction",
    projectDescription:
      "Draw a picture of a Bitsbox app interface with buttons. Then draw what your bot would do if you could press those buttons in the app to control it.",
  },
  {
    week: 10,
    title: "Final Project: App & Bot Duo - Planning",
    focus: "Brainstorming an app idea that has a companion bot action.",
    outcomes: "Plan integrated app/bot project.",
    project: "Plan App & Bot Story",
    projectDescription:
      "Plan a simple Bitsbox app (e.g., a story with a character) and a corresponding action for your bot (e.g., the bot acts out a part of the story). Sketch the app screen and the bot's path.",
  },
  {
    week: 11,
    title: "Final Project: App & Bot Duo - Building",
    focus: "Developing the Bitsbox app and programming the bot.",
    outcomes: "Develop app and bot sequence.",
    project: "Build App & Bot Duo",
    projectDescription:
      "Build the Bitsbox app according to your plan from Week 10. Program your bot to perform its corresponding action. Test them together.",
  },
  {
    week: 12,
    title: "Bitsbox & Bots Showcase",
    focus: "Presenting app and bot projects.",
    outcomes: "Present Bitsbox app and bot.",
    project: "Showcase App & Bot",
    projectDescription:
      "Present your Bitsbox app and demonstrate how your bot interacts or complements it. Explain the commands you used in Bitsbox and how you programmed your bot.",
  },
];
