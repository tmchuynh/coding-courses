import { CourseSchedule } from "@/lib/types/types";
// Grades K–2
export const yearRoundSchedule: CourseSchedule[] = [
  {
    ageGroup: "Grades K–2",
    schedules: [
      {
        courseName: "Code Through Stories",
        subtitle: "Animated Storytelling & Coding",
        next: ["Mini Makers"],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday"],
            durationWeeks: 8,
            startTime: "10:00 AM",
            endTime: "11:00 AM",
          },
        ],
        includes: ["All materials", "Access to online platform"],
      },
      {
        courseName: "Bitsbox and Bots",
        subtitle: "Coding & Robotics",
        next: ["Code Through Stories"],
        schedule: [
          {
            format: "In-person",
            days: ["Sunday"],
            durationWeeks: 8,
            startTime: "10:00 AM",
            endTime: "11:00 AM",
          },
        ],
        includes: ["Bitsbox subscription", "Robotics kit"],
      },
      {
        courseName: "Digital Discovery Lab",
        subtitle: "Hands-on Tech & Logic",
        next: ["Code Through Stories"],
        schedule: [
          {
            format: "In-person",
            days: ["Sunday"],
            durationWeeks: 8,
            startTime: "10:00 AM",
            endTime: "11:00 AM",
          },
        ],
        includes: ["Lab kit", "Take-home activities"],
      },
      {
        courseName: "Mini Makers",
        subtitle: "Robotics & Creative Coding",
        next: ["Game Builders Club"],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday"],
            durationWeeks: 8,
            startTime: "1:00 PM",
            endTime: "2:00 PM",
          },
        ],
        includes: ["Robotics kit", "Project showcase"],
      },
      {
        courseName: "Code and Play",
        subtitle: "Logic Games & Movement",
        next: ["Pattern Makers", "Code Through Stories"],
        schedule: [
          {
            format: "In-person",
            days: ["Sunday"],
            startTime: "1:00 PM",
            endTime: "2:00 PM",
            durationWeeks: 10,
          },
          {
            format: "Online",
            days: ["Saturday"],
            startTime: "1:00 PM",
            endTime: "2:00 PM",
            durationWeeks: 10,
          },
          {
            format: "Online",
            days: ["Sunday"],
            startTime: "1:00 PM",
            endTime: "2:00 PM",
            durationWeeks: 10,
          },
          {
            format: "In-person",
            days: ["Saturday"],
            startTime: "3:00 PM",
            endTime: "4:00 PM",
            durationWeeks: 10,
          },
        ],
        includes: ["Activity kit", "Digital badge"],
      },
      {
        courseName: "Pattern Makers",
        subtitle: "Math & Logic Patterns",
        next: ["Digital Discovery Lab", "Tinker Time"],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday"],
            startTime: "10:00 AM",
            endTime: "11:00 AM",
            durationWeeks: 10,
          },
        ],
        includes: ["Pattern blocks", "Workbook"],
      },
      {
        courseName: "Tinker Time",
        subtitle: "Robots & Sensory Coding",
        next: ["Mini Makers", "Code Through Stories"],
        schedule: [
          {
            format: "In-person",
            days: ["Sunday"],
            startTime: "1:00 PM",
            endTime: "2:00 PM",
            durationWeeks: 8,
          },
        ],
        includes: ["Robotics kit", "Sensory toolkit"],
      },
      {
        courseName: "AI Storytellers",
        subtitle: "AI-Powered Story Creation",
        next: ["Code Through Stories", "Mini Makers"],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday"],
            durationWeeks: 8,
            startTime: "11:15 AM",
            endTime: "12:00 PM",
          },
        ],
        includes: ["AI tools access", "Story showcase"],
      },
      {
        courseName: "Sensory Circuits Lab",
        subtitle: "Hands-on Circuits & Sensors",
        next: ["Tinker Time", "Mini Makers"],
        schedule: [
          {
            format: "In-person",
            days: ["Sunday"],
            durationWeeks: 8,
            startTime: "11:15 AM",
            endTime: "12:00 PM",
          },
        ],
        includes: ["Circuit kit", "Sensor pack"],
      },
    ],
  },
  // Grades 3–5
  {
    ageGroup: "Grades 3–5",
    schedules: [
      {
        courseName: "Game Builders Club",
        subtitle: "2D Game Development",
        next: ["Web Wonders", "App Explorers"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday"],
            startTime: "10:00 AM",
            endTime: "11:30 AM",
            durationWeeks: 10,
          },
        ],
        includes: ["Scratch account", "Project feedback"],
      },
      {
        courseName: "Web Wonders",
        subtitle: "Intro to Web Development",
        next: ["App Explorers"],
        schedule: [
          {
            format: "Online",
            days: ["Sunday"],
            startTime: "10:00 AM",
            endTime: "11:30 AM",
            durationWeeks: 10,
          },
        ],
        includes: ["Web hosting", "HTML/CSS templates"],
      },
      {
        courseName: "App Explorers",
        subtitle: "Mobile App Creation",
        next: ["Creative Code with Art", "Code for Music"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday"],
            startTime: "1:00 PM",
            endTime: "2:30 PM",
            durationWeeks: 10,
          },
        ],
        includes: ["App builder access", "Design toolkit"],
      },
      {
        courseName: "Creative Code with Art",
        subtitle: "Generative Art with Code",
        next: ["Code for Music", "Code a Storybook"],
        schedule: [
          {
            format: "Online",
            days: ["Sunday"],
            startTime: "3:00 PM",
            endTime: "4:30 PM",
            durationWeeks: 10,
          },
        ],
        includes: ["p5.js access", "Art showcase"],
      },
      {
        courseName: "Code for Music",
        subtitle: "Music & Audio Coding",
        next: ["Creative Code with Art", "Game Studio"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday"],
            startTime: "3:00 PM",
            endTime: "4:00 PM",
            durationWeeks: 10,
          },
        ],
        includes: ["Music coding toolkit", "Audio samples"],
      },
      {
        courseName: "Code a Storybook",
        subtitle: "Interactive Storytelling",
        next: ["Creative Code with Art"],
        schedule: [
          {
            format: "Online",
            days: ["Sunday"],
            startTime: "4:30 PM",
            endTime: "5:30 PM",
            durationWeeks: 10,
          },
        ],
        includes: ["Storybook platform", "Digital publishing"],
      },
      {
        courseName: "AI Playground",
        subtitle: "Creative AI Projects",
        next: ["AI Basics", "Creative Code with Art"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday"],
            durationWeeks: 10,
            startTime: "11:45 AM",
            endTime: "12:45 PM",
          },
        ],
        includes: ["AI sandbox", "Project gallery"],
      },
      {
        courseName: "Inventor's Workshop",
        subtitle: "Microcontrollers & Prototyping",
        next: ["Game Studio", "Unity Game Dev"],
        schedule: [
          {
            format: "In-person",
            days: ["Sunday"],
            durationWeeks: 10,
            startTime: "11:45 AM",
            endTime: "12:45 PM",
          },
        ],
        includes: ["Microcontroller kit", "Project showcase"],
      },
    ],
  },
  // Grades 6–8
  {
    ageGroup: "Grades 6–8",
    schedules: [
      {
        courseName: "Game Studio",
        subtitle: "Advanced Game Development",
        next: ["Database Basics", "Unity Game Dev"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday", "Sunday"],
            startTime: "10:00 AM",
            endTime: "12:00 PM",
            durationWeeks: 12,
          },
        ],
        includes: ["Game engine access", "Project review"],
      },
      {
        courseName: "Unity Game Dev",
        subtitle: "Unity & C# Game Design",
        next: ["Game Studio", "3D Animation and Game Dev"],
        schedule: [
          {
            format: "Online",
            days: ["Sunday", "Wednesday"],
            startTime: "10:00 AM",
            endTime: "12:00 PM",
            durationWeeks: 12,
          },
        ],
        includes: ["Unity license", "Asset pack"],
      },
      {
        courseName: "Interactive Elements",
        subtitle: "JavaScript & APIs",
        next: ["Frontend Fundamentals"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday", "Monday"],
            startTime: "1:00 PM",
            endTime: "2:30 PM",
            durationWeeks: 12,
          },
        ],
        includes: ["API keys", "Sample projects"],
      },
      {
        courseName: "Frontend Fundamentals",
        subtitle: "HTML, CSS & JS Basics",
        next: [
          "Next.js Essentials",
          "Full Stack Foundations",
          "Interactive Elements",
        ],
        schedule: [
          {
            format: "Online",
            days: ["Sunday"],
            startTime: "1:00 PM",
            endTime: "2:30 PM",
            durationWeeks: 12,
          },
        ],
        includes: ["Code editor access", "Project templates"],
      },
      {
        courseName: "AI Explorers",
        subtitle: "Intro to Machine Learning",
        next: ["AI Basics", "Simulators and Physics"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday"],
            durationWeeks: 12,
            startTime: "2:45 PM",
            endTime: "3:45 PM",
          },
        ],
        includes: ["ML toolkit", "Data sets"],
      },
      {
        courseName: "Smart Devices Lab",
        subtitle: "IoT & Automation",
        next: ["Unity Game Dev", "Database Basics"],
        schedule: [
          {
            format: "In-person",
            days: ["Sunday"],
            durationWeeks: 12,
            startTime: "2:45 PM",
            endTime: "3:45 PM",
          },
        ],
        includes: ["IoT kit", "Automation project"],
      },
    ],
  },
  // Grades 9–12
  {
    ageGroup: "Grades 9-12",
    schedules: [
      {
        courseName: "Next.js Essentials",
        subtitle: "Advanced React & Next.js",
        next: [
          "Advanced Backend and DevOps",
          "Startup Studio",
          "Advanced Web Dev",
        ],
        schedule: [
          {
            format: "Online",
            days: ["Saturday", "Sunday", "Wednesday"],
            startTime: "10:00 AM",
            endTime: "12:00 PM",
            durationWeeks: 14,
          },
        ],
        includes: ["Next.js starter kit", "Deployment guides"],
      },
      {
        courseName: "Simulators and Physics",
        subtitle: "Coding Real-World Systems",
        next: ["APIs & Integrations", "Database Basics"],
        schedule: [
          {
            format: "Online",
            days: ["Sunday", "Wednesday"],
            startTime: "10:00 AM",
            endTime: "12:00 PM",
            durationWeeks: 14,
          },
        ],
        includes: ["Simulation toolkit", "Data sets"],
      },
      {
        courseName: "Full Stack Foundations",
        subtitle: "Dynamic Web Projects",
        next: ["APIs & Integrations", "Database Basics", "Advanced Web Dev"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday"],
            startTime: "1:00 PM",
            endTime: "3:00 PM",
            durationWeeks: 14,
          },
        ],
        includes: ["GitHub classroom", "Project templates"],
      },
      {
        courseName: "APIs & Integrations",
        subtitle: "Connecting to the Web",
        next: ["Next.js Essentials", "Startup Studio", "Database Basics"],
        schedule: [
          {
            format: "Online",
            days: ["Sunday", "Wednesday", "Thursday"],
            startTime: "1:00 PM",
            endTime: "3:00 PM",
            durationWeeks: 16,
          },
        ],
        includes: ["API keys", "Sample integrations"],
      },
      {
        courseName: "Database Basics",
        subtitle: "Data & Storage",
        next: ["APIs & Integrations", "Advanced Backend and DevOps"],
        schedule: [
          {
            format: "Online",
            days: ["Friday", "Wednesday", "Thursday"],
            startTime: "1:00 PM",
            endTime: "3:00 PM",
            durationWeeks: 14,
          },
        ],
        includes: ["Database sandbox", "CRUD exercises"],
      },
      {
        courseName: "Startup Studio",
        subtitle: "Tech Entrepreneurship",
        next: ["Next.js Essentials", "AI Basics", "Startup Accelerator"],
        schedule: [
          {
            format: "Online",
            days: ["Sunday", "Saturday"],
            startTime: "3:00 PM",
            endTime: "5:00 PM",
            durationWeeks: 16,
          },
        ],
        includes: ["Startup toolkit", "Mentorship"],
      },
      {
        courseName: "AI Basics",
        subtitle: "Intro to Artificial Intelligence",
        next: ["Startup Studio", "Next.js Essentials (Grades 9–12)"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday", "Friday", "Sunday"],
            startTime: "7:30 PM",
            endTime: "9:00 PM",
            durationWeeks: 20,
          },
        ],
        includes: ["AI sandbox", "Ethics workshop"],
      },
      {
        courseName: "Advanced Backend and DevOps",
        subtitle: "Databases, APIs & Deployment",
        next: ["Startup Accelerator"],
        schedule: [
          {
            format: "Online",
            days: ["Monday", "Wednesday", "Friday"],
            startTime: "7:30 PM",
            endTime: "9:00 PM",
            durationWeeks: 16,
          },
        ],
        includes: ["Cloud credits", "DevOps toolkit"],
      },
      {
        courseName: "Startup Accelerator",
        subtitle: "Capstone Product Launch",
        next: [],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday", "Sunday"],
            startTime: "3:00 PM",
            endTime: "5:00 PM",
            durationWeeks: 16,
          },
        ],
        includes: ["Mentorship", "Demo day"],
      },
      {
        courseName: "Advanced Web Dev",
        subtitle: "React, TypeScript & SSR",
        next: ["Full Stack Foundations", "Next.js Essentials", "AI Basics"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday", "Sunday"],
            startTime: "1:00 PM",
            endTime: "3:00 PM",
            durationWeeks: 16,
          },
        ],
        includes: ["TypeScript starter kit", "Code review"],
      },
      {
        courseName: "Capstone Project",
        subtitle: "Full-Stack Project Build",
        next: ["Startup Accelerator"],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday", "Sunday"],
            startTime: "6:00 PM",
            endTime: "9:00 PM",
            durationWeeks: 16,
          },
        ],
        includes: ["Mentorship", "Portfolio review"],
      },
      {
        courseName: "3D Animation and Game Dev",
        subtitle: "Blender & Unity 3D",
        next: ["Game Studio", "Unity Game Dev"],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday", "Sunday"],
            startTime: "1:00 PM",
            endTime: "3:00 PM",
            durationWeeks: 16,
          },
        ],
        includes: ["Blender license", "3D asset pack"],
      },
      {
        courseName: "Algorithms",
        subtitle: "AP/College CS Preparation",
        next: ["Internship Program"],
        schedule: [
          {
            format: "Online",
            days: ["Saturday", "Sunday"],
            startTime: "1:00 PM",
            endTime: "3:00 PM",
            durationWeeks: 20,
          },
        ],
        includes: ["Practice problems", "Exam prep"],
      },
      {
        courseName: "Internship Program",
        subtitle: "Real-World Tech Experience",
        next: [],
        schedule: [
          {
            format: "In-person",
            days: ["Flexible"],
            startTime: "Flexible",
            endTime: "Flexible",
            durationWeeks: 8,
          },
        ],
        includes: ["Resume review", "Reference letter"],
      },
      {
        courseName: "Entrepreneurship Basics",
        subtitle: "Business & Product Design",
        next: ["Internship Program"],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday", "Sunday"],
            startTime: "1:00 PM",
            endTime: "3:00 PM",
            durationWeeks: 16,
          },
        ],
        includes: ["Pitch deck template", "Mentorship"],
      },
      {
        courseName: "Machine Learning Studio",
        subtitle: "Building Real ML Models",
        next: ["AI Basics", "Simulators and Physics"],
        schedule: [
          {
            format: "In-person",
            days: ["Saturday"],
            durationWeeks: 16,
            startTime: "11:00 AM",
            endTime: "12:30 PM",
          },
        ],
        includes: ["Python notebooks", "ML datasets"],
      },
      {
        courseName: "Robotics Engineering",
        subtitle: "Advanced Robotics & Automation",
        next: ["Startup Studio", "Advanced Backend and DevOps"],
        schedule: [
          {
            format: "In-person",
            days: ["Sunday"],
            durationWeeks: 16,
            startTime: "11:00 AM",
            endTime: "12:30 PM",
          },
        ],
        includes: ["Robotics kit", "Competition prep"],
      },
    ],
  },
];
