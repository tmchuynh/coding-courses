import { Roadmap } from "@/lib/interfaces/courses";

export const learningRoadmap: Roadmap[] = [
  {
    gradeGroup: "K–2",
    roadmaps: [
      {
        title: "Intro to Computational Thinking",
        courses: [
          {
            courseName: "Code & Play",
            focus: ["Hands-on logic games with basic coding ideas"],
            outcomes: [
              "Understanding sequences",
              "Cause-effect reasoning",
              "Intro to digital literacy",
            ],
          },
          {
            courseName: "Pattern Makers",
            focus: ["Explore patterns using unplugged and digital tools"],
            outcomes: [
              "Foundational math skills",
              "Pattern recognition",
              "Visual sequencing",
            ],
          },
          {
            courseName: "Tinker Time",
            focus: ["Tactile activities with simple robots and block coding"],
            outcomes: [
              "Intro to robotics",
              "Sensory engagement",
              "Early problem-solving",
            ],
          },
        ],
      },
      {
        title: "Story-Based Coding",
        courses: [
          {
            courseName: "Code Through Stories",
            focus: ["Interactive storytelling with Scratch Jr"],
            outcomes: [
              "Narrative logic",
              "Basic programming flow",
              "Creative storytelling",
            ],
          },
          {
            courseName: "Digital Discovery Lab",
            focus: [
              "Pattern recognition and sequencing using physical logic puzzles",
            ],
            outcomes: [
              "Build early logic and reasoning skills",
              "Collaboration and problem-solving",
              "Order of operations",
            ],
          },
          {
            courseName: "Mini Makers",
            focus: ["Design and code mini-projects with robotics"],
            outcomes: [
              "Intro to robotics",
              "Creative coding",
              "User interaction design",
            ],
          },
        ],
      },
      {
        title: "AI & Circuits for Early Learners",
        courses: [
          {
            courseName: "AI Storytellers",
            focus: ["Create interactive stories with AI tools and characters"],
            outcomes: [
              "Intro to AI concepts",
              "Voice/image recognition basics",
              "Creative digital play",
            ],
          },
          {
            courseName: "Sensory Circuits Lab",
            focus: [
              "Build simple circuits and use sensors for interactive projects",
            ],
            outcomes: [
              "Basic electronics",
              "Input/output logic",
              "Hands-on tech exploration",
            ],
          },
        ],
      },
    ],
  },
  {
    gradeGroup: "3–5",
    roadmaps: [
      {
        title: "Creative Coding Path",
        courses: [
          {
            courseName: "Game Builders Club",
            focus: ["Create basic games by building 2D games"],
            outcomes: [
              "Game logic",
              "Event-based programming",
              "User interaction",
            ],
          },
          {
            courseName: "Web Wonders",
            focus: ["Build and style web pages with HTML/CSS"],
            outcomes: [
              "Understanding HTML structure",
              "Styling basics",
              "Page design",
            ],
          },
          {
            courseName: "App Explorers",
            focus: ["Create interactive web applications using JS and APIs"],
            outcomes: ["Dynamic pages", "API integration", "Intermediate JS"],
          },
        ],
      },
      {
        title: "Creative Expression Through Code",
        courses: [
          {
            courseName: "Creative Code & Art",
            focus: ["Generative art with p5.js and Processing"],
            outcomes: [
              "Coordinate systems",
              "Visual rhythm",
              "Mathematical creativity",
            ],
          },
          {
            courseName: "Code for Music",
            focus: ["Create soundscapes and musical loops with code"],
            outcomes: [
              "Audio synthesis",
              "Loops & tempo",
              "Interactive sound design",
            ],
          },
          {
            courseName: "Code a Storybook",
            focus: ["Interactive digital stories using programming logic"],
            outcomes: [
              "Digital storytelling",
              "Sequencing",
              "Loops and conditions",
            ],
          },
        ],
      },
      {
        title: "AI & Hardware Exploration",
        courses: [
          {
            courseName: "AI Playground",
            focus: ["Experiment with AI tools for art, music, and games"],
            outcomes: [
              "Hands-on AI projects",
              "Pattern recognition",
              "Ethical AI discussion",
            ],
          },
          {
            courseName: "Inventor's Workshop",
            focus: [
              "Design and build gadgets with microcontrollers and sensors",
            ],
            outcomes: [
              "Prototyping skills",
              "Hardware/software integration",
              "Engineering problem-solving",
            ],
          },
        ],
      },
    ],
  },
  {
    gradeGroup: "6–8",
    roadmaps: [
      {
        title: "Web Dev + App Creation",
        courses: [
          {
            courseName: "Frontend Fundamentals",
            focus: ["Learn responsive web design with Tailwind CSS"],
            outcomes: ["Mobile-first layout", "Component design", "Clean UI"],
          },
          {
            courseName: "Web Wonders",
            focus: ["Build and style web pages with HTML/CSS"],
            outcomes: [
              "Understanding HTML structure",
              "Styling basics",
              "Page design",
            ],
          },
          {
            courseName: "Interactive Elements",
            focus: ["Use JavaScript to create forms and buttons"],
            outcomes: [
              "Intro to scripting",
              "User input handling",
              "Web interactions",
            ],
          },
          {
            courseName: "App Explorers",
            focus: ["Create interactive web applications using JS and APIs"],
            outcomes: ["Dynamic pages", "API integration", "Intermediate JS"],
          },
        ],
      },
      {
        title: "Games & Simulations",
        courses: [
          {
            courseName: "Game Studio",
            focus: ["Game dev with Python or JavaScript"],
            outcomes: [
              "Multiplayer logic",
              "User feedback systems",
              "Game loop mechanics",
            ],
          },
          {
            courseName: "Simulators & Physics",
            focus: ["Simulate systems with code (weather, physics, etc.)"],
            outcomes: [
              "Variables over time",
              "Real-world modeling",
              "Debugging logic",
            ],
          },
          {
            courseName: "Unity Game Dev",
            focus: ["Build 2D/3D games with Unity and C#"],
            outcomes: [
              "Game mechanics",
              "Physics engines",
              "User interface design",
            ],
          },
        ],
      },
      {
        title: "AI & Smart Devices",
        courses: [
          {
            courseName: "AI Explorers",
            focus: ["Build simple ML models for image/text recognition"],
            outcomes: [
              "Neural network basics",
              "Model training/testing",
              "AI ethics awareness",
            ],
          },
          {
            courseName: "Smart Devices Lab",
            focus: ["Create IoT gadgets with sensors and code"],
            outcomes: [
              "IoT prototyping",
              "Automation concepts",
              "Real-world device building",
            ],
          },
        ],
      },
    ],
  },
  {
    gradeGroup: "9–12",
    roadmaps: [
      {
        title: "Full Stack Web Dev Track",
        courses: [
          {
            courseName: "Interactive Elements",
            focus: ["Use JavaScript to create forms and buttons"],
            outcomes: [
              "Intro to scripting",
              "User input handling",
              "Web interactions",
            ],
          },
          {
            courseName: "Frontend Fundamentals",
            focus: ["Learn responsive web design with Tailwind CSS"],
            outcomes: ["Mobile-first layout", "Component design", "Clean UI"],
          },
          {
            courseName: "Full Stack Foundations",
            focus: ["Build full-stack apps with Node.js and Express"],
            outcomes: [
              "RESTful APIs",
              "Database integration",
              "Server-side rendering",
            ],
          },
          {
            courseName: "APIs & Integrations",
            focus: ["Connect to external APIs and services"],
            outcomes: [
              "API authentication",
              "Data fetching and manipulation",
              "Real-time data handling",
            ],
          },
          {
            courseName: "Database Basics",
            focus: ["Learn SQL and NoSQL databases"],
            outcomes: [
              "Database design",
              "CRUD operations",
              "Data relationships",
            ],
          },
          {
            courseName: "Capstone Project",
            focus: ["Build a full-stack application from scratch"],
            outcomes: [
              "Project management",
              "Team collaboration",
              "Portfolio-ready project",
            ],
          },
          {
            courseName: "Advanced Web Dev",
            focus: ["Explore advanced topics in web development"],
            outcomes: [
              "Progressive web apps",
              "Authentication and security",
              "Deployment strategies",
            ],
          },
        ],
      },
      {
        title: "Game Design",
        courses: [
          {
            courseName: "3D Animation & Game Dev",
            focus: ["Create 3D games and animations using Unity"],
            outcomes: [
              "3D modeling and animation",
              "Game physics and AI",
              "Multiplayer game design",
            ],
          },
          {
            courseName: "Game Studio",
            focus: ["Build 2D games with Pygame or Unity"],
            outcomes: [
              "Game mechanics and physics engines",
              "Sprite handling and UI elements",
              "Testing, balancing, and publishing games",
            ],
          },
          {
            courseName: "Unity Game Dev",
            focus: ["Build 2D/3D games with Unity and C#"],
            outcomes: [
              "Game mechanics",
              "Physics engines",
              "User interface design",
            ],
          },
        ],
      },
      {
        title: "CS Prep & Career Pathway",
        courses: [
          {
            courseName: "CS Prep + Algorithms",
            focus: ["Study data structures, sorting, and problem-solving"],
            outcomes: [
              "Interview readiness",
              "Algorithm design",
              "Time/space analysis",
            ],
          },
          {
            courseName: "Internship Program",
            focus: [
              "Match with tech nonprofits or startups for real-world coding",
            ],
            outcomes: [
              "Job experience",
              "Resume building",
              "Mentor connections",
            ],
          },
        ],
      },
      {
        title: "Startup & Product Track",
        courses: [
          {
            courseName: "Startup Studio",
            focus: ["From idea to MVP in teams"],
            outcomes: ["Agile methods", "Product management", "Public launch"],
          },
          {
            courseName: "Startup Accelerator",
            focus: ["Develop a startup idea into a prototype"],
            outcomes: ["Pitch deck", "Prototype demo", "Market validation"],
          },
          {
            courseName: "Entrepreneurship & Innovation",
            focus: ["Learn business skills for tech startups"],
            outcomes: [
              "Business model canvas",
              "Pitching and funding",
              "Market research",
            ],
          },
          {
            courseName: "Capstone Accelerator",
            focus: ["Develop and present a full-scale app or system"],
            outcomes: [
              "Final portfolio",
              "Demo day pitch",
              "Professional polish",
            ],
          },
        ],
      },
      {
        title: "AI & Robotics Engineering",
        courses: [
          {
            courseName: "Machine Learning Studio",
            focus: ["Build ML models for image, text, and data analysis"],
            outcomes: [
              "Python ML basics",
              "Data visualization",
              "Model evaluation",
            ],
          },
          {
            courseName: "Robotics Engineering",
            focus: ["Design, build, and program advanced robots"],
            outcomes: [
              "Robotics systems integration",
              "Autonomous navigation",
              "Competition readiness",
            ],
          },
        ],
      },
    ],
  },
];
