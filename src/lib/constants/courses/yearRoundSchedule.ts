import { CourseSchedule } from "@/lib/types/types";

// Grades K–2
export const yearRoundSchedule: CourseSchedule[] = [
  {
    ageGroup: "Grades 9-12",
    schedules: [
      {
        courseName: "Code Through Stories",
        subtitle: "Animated Storytelling & Coding",
        description:
          "This introductory course uses animated storytelling to teach basic coding concepts. Students bring characters to life, build interactive plots, and learn logical sequencing through digital narratives tailored to early readers and learners.",
        focus: [
          "Fundamentals of sequencing through stories",
          "Introduction to loops and conditionals using storytelling logic",
          "Developing narrative thinking and cause-effect relationships",
        ],
        outcomes: [
          "Understand core programming concepts using visual code blocks",
          "Create and narrate animated story projects with confidence",
          "Build foundational problem-solving and sequencing skills",
        ],
        next: ["Mini Makers"],
        formatOptions: ["In-person", "Online"],
        schedule: {
          days: ["Saturday"],
          durationWeeks: 8,
          startTime: "10:00 AM",
          endTime: "11:00 AM",
        },
        instructors: "Ms. Smith, Mr. Lee",
        includes: ["All materials", "Access to online platform"],
      },
      {
        courseName: "Digital Discovery Lab",
        subtitle: "Hands-on Tech & Logic",
        description:
          "A hands-on, play-based introduction to technology that nurtures curiosity and confidence. Children engage in offline logic games, basic programming tasks, and creative tech-building activities in a highly tactile environment.",
        focus: [
          "Pattern recognition and sequencing using physical logic puzzles",
          "Collaboration and problem-solving through group activities",
          "Exploration of digital safety and basic hardware interaction",
        ],
        outcomes: [
          "Develop comfort with technology and creative play",
          "Learn teamwork and communication in project-based tasks",
          "Build early logic and reasoning necessary for future programming",
        ],
        next: ["Code Through Stories"],
        formatOptions: ["In-person"],
        schedule: {
          days: ["Sunday"],
          durationWeeks: 8,
          startTime: "10:00 AM",
          endTime: "11:00 AM",
        },
        instructors: "Ms. Johnson",
        includes: ["Lab kit", "Take-home activities"],
      },
      {
        courseName: "Mini Makers",
        subtitle: "Robotics & Creative Coding",
        description:
          "Students combine design, code, and hardware in fun, interactive challenges. This course introduces basic robotics and creative projects like digital art and interactive cards, integrating storytelling and motion.",
        focus: [
          "Intro to robotics using Dash & Dot and programmable blocks",
          "Creative use of code in animations and sounds",
          "Logical flow and user interaction principles",
        ],
        outcomes: [
          "Create functional mini-robots that respond to voice or movement",
          "Design interactive games and media using simple logic",
          "Prepare for block-based game development in upper elementary",
        ],
        next: ["Game Builders Club"],
        formatOptions: ["In-person", "Online"],
        schedule: {
          days: ["Saturday"],
          durationWeeks: 8,
          startTime: "1:00 PM",
          endTime: "2:00 PM",
        },
        instructors: "Mr. Kim",
        includes: ["Robotics kit", "Project showcase"],
      },
      {
        courseName: "Code & Play",
        subtitle: "Logic Games & Movement",
        description:
          "An engaging intro to basic computer science concepts through fun, hands-on logic games and movement-based activities. This track builds early algorithmic thinking and curiosity about how technology works.",
        focus: [
          "Logical order and sequencing through physical games",
          "Understanding cause and effect in interactive challenges",
          "Exposure to digital literacy tools in a screen-lite format",
        ],
        outcomes: [
          "Identify and describe sequences in tasks and games",
          "Grasp cause-effect relationships important for coding logic",
          "Build familiarity with educational devices and interfaces",
        ],
        next: ["Pattern Makers", "Code Through Stories"],
        formatOptions: ["In-person"],
        schedule: {
          days: ["Sunday"],
          startTime: "1:00 PM",
          endTime: "2:00 PM",
          durationWeeks: 10,
        },
        instructors: "Ms. Patel",
        includes: ["Activity kit", "Digital badge"],
      },
      {
        courseName: "Pattern Makers",
        subtitle: "Math & Logic Patterns",
        description:
          "This track builds early math and logic reasoning through hands-on and screen-based pattern exercises. Ideal for developing visual sequencing and predictive skills in a tech-enhanced setting.",
        focus: [
          "Recognizing and creating repeating patterns",
          "Using tangible tools to express sequence logic",
          "Connecting patterns to math and code structures",
        ],
        outcomes: [
          "Understand foundational math through patterns",
          "Develop visual problem-solving and attention to order",
          "Establish building blocks for future code logic work",
        ],
        next: ["Digital Discovery Lab", "Tinker Time"],
        formatOptions: ["In-person"],
        schedule: {
          days: ["Saturday"],
          startTime: "10:00 AM",
          endTime: "11:00 AM",
          durationWeeks: 10,
        },
        instructors: "Mr. Nguyen",
        includes: ["Pattern blocks", "Workbook"],
      },
      {
        courseName: "Tinker Time",
        subtitle: "Robots & Sensory Coding",
        description:
          "A tactile-focused track where students manipulate robots, sensors, and block coding kits to connect physical action with digital response. Emphasis is placed on creative play and sensory discovery.",
        focus: [
          "Beginner robotics with screen-free coding tools",
          "Multi-sensory activities linked to coding concepts",
          "Independent exploration and invention",
        ],
        outcomes: [
          "Gain comfort using tech tools for input/output actions",
          "Connect movement and sound with digital behavior",
          "Be ready for more structured coding tasks in K–2 or 3–5 courses",
        ],
        next: ["Mini Makers", "Code Through Stories"],
        formatOptions: ["In-person"],
        schedule: {
          days: ["Sunday"],
          startTime: "1:00 PM",
          endTime: "2:00 PM",
          durationWeeks: 8,
        },
        instructors: "Ms. Garcia",
        includes: ["Robotics kit", "Sensory toolkit"],
      },
    ],
  },

  // Grades 3–5
  {
    ageGroup: "Grades 9-12",
    schedules: [
      {
        courseName: "Game Builders Club",
        subtitle: "2D Game Development",
        description:
          "Students move from passive players to active creators by building 2D games. They explore user interaction, conditional logic, and sprite control, gaining experience in structured problem-solving and debugging.",
        focus: [
          "Creating animations and games using Scratch",
          "Event-driven programming and interactive controls",
          "Understanding variables, loops, and conditions",
        ],
        outcomes: [
          "Develop functional, playable games with scoring and user feedback",
          "Build debugging skills and test user inputs in real time",
          "Gain confidence to advance into web or app development",
        ],
        next: ["Web Wonders", "App Explorers"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday"],
          startTime: "10:00 AM",
          endTime: "11:30 AM",
          durationWeeks: 10,
        },
        instructors: "Mr. Brown",
        includes: ["Scratch account", "Project feedback"],
      },
      {
        courseName: "Web Wonders",
        subtitle: "Intro to Web Development",
        description:
          "An engaging intro to web development where students create personal websites. They'll explore HTML for structure, CSS for styling, and layout principles to express themselves online.",
        focus: [
          "Webpage structure using semantic HTML",
          "Creative customization using CSS properties and flexbox",
          "Responsiveness, accessibility, and layout fundamentals",
        ],
        outcomes: [
          "Build and publish personal or hobby websites",
          "Understand front-end development basics and digital identity",
          "Prepare for mobile app development or interactive coding",
        ],
        next: ["App Explorers"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Sunday"],
          startTime: "10:00 AM",
          endTime: "11:30 AM",
          durationWeeks: 10,
        },
        instructors: "Ms. White",
        includes: ["Web hosting", "HTML/CSS templates"],
      },
      {
        courseName: "App Explorers",
        subtitle: "Mobile App Creation",
        description:
          "Students transition from games to mobile functionality by building drag-and-drop apps with interactive forms, sound, and logic. Emphasis is placed on user input, design iteration, and real-world utility.",
        focus: [
          "App layout and navigation flow",
          "Conditional logic tied to user input",
          "Basic UI/UX principles in app design",
        ],
        outcomes: [
          "Create working mobile apps that respond to user interaction",
          "Design user-friendly interfaces with logic-based behavior",
          "Foundation for full-stack mobile/web app development",
        ],
        next: ["Creative Code & Art", "Code for Music"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday"],
          startTime: "1:00 PM",
          endTime: "2:30 PM",
          durationWeeks: 10,
        },
        instructors: "Ms. Davis",
        includes: ["App builder access", "Design toolkit"],
      },
      {
        courseName: "Creative Code & Art",
        subtitle: "Generative Art with Code",
        description:
          "This course empowers students to explore generative and interactive art using p5.js and Processing. Focus is on translating abstract math concepts into dynamic digital visuals.",
        focus: [
          "Mathematics as creative medium",
          "Coordinate systems and animations",
          "Loops and visual patterns",
        ],
        outcomes: [
          "Create dynamic visuals using programming concepts",
          "Explore rhythm, color, and form through code",
          "Develop interest in both technical and artistic fields",
        ],
        next: ["Code for Music", "Code a Storybook"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Sunday"],
          startTime: "3:00 PM",
          endTime: "4:30 PM",
          durationWeeks: 10,
        },
        instructors: "Mr. Martinez",
        includes: ["p5.js access", "Art showcase"],
      },
      {
        courseName: "Code for Music",
        subtitle: "Music & Audio Coding",
        description:
          "Students use coding environments to create audio experiences, loops, and basic compositions. Great for learners interested in sound, rhythm, and musical creativity.",
        focus: [
          "Audio generation through code",
          "Looping logic and timing synchronization",
          "Music structure and interactivity",
        ],
        outcomes: [
          "Build audio-visual coding projects",
          "Understand the logic behind musical structure",
          "Develop creativity with technical coding foundations",
        ],
        next: ["Creative Code & Art", "Game Studio"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday"],
          startTime: "3:00 PM",
          endTime: "4:00 PM",
          durationWeeks: 10,
        },
        instructors: "Ms. Wilson",
        includes: ["Music coding toolkit", "Audio samples"],
      },
      {
        courseName: "Code a Storybook",
        subtitle: "Interactive Storytelling",
        description:
          "Combines programming logic with storytelling. Students create branching plots and interactive elements for digital storybooks.",
        focus: [
          "Narrative flow and conditional logic",
          "Interactive storytelling techniques",
          "UI/UX in narrative experiences",
        ],
        outcomes: [
          "Design interactive story experiences",
          "Use conditionals and loops for narrative branching",
          "Introduce creative writing into tech curriculum",
        ],
        next: ["Creative Code & Art"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Sunday"],
          startTime: "4:30 PM",
          endTime: "5:30 PM",
          durationWeeks: 10,
        },
        instructors: "Ms. Clark",
        includes: ["Storybook platform", "Digital publishing"],
      },
    ],
  },

  // Grades 6–8
  {
    ageGroup: "Grades 9-12",
    schedules: [
      {
        courseName: "Game Studio",
        subtitle: "Advanced Game Development",
        description:
          "A deeper dive into game development with more complexity and customization. Students build platformers, puzzle games, or RPGs while learning core software development patterns and debugging techniques.",
        focus: [
          "Scene management and physics engines",
          "Character state logic and animations",
          "Data structures and game architecture",
        ],
        outcomes: [
          "Publish fully functional, multi-level games",
          "Understand architecture behind gaming frameworks",
          "Explore careers in game development",
        ],
        next: ["Database Basics", "Unity Game Dev"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Sunday"],
          startTime: "10:00 AM",
          endTime: "12:00 PM",
          durationWeeks: 12,
        },
        instructors: "Mr. Evans",
        includes: ["Game engine access", "Project review"],
      },
      {
        courseName: "Unity Game Dev",
        subtitle: "Unity & C# Game Design",
        description:
          "Students learn to build 2D and 3D games using Unity and C#. They explore game mechanics, physics, and user interface design, preparing them for advanced game development.",
        focus: [
          "Game mechanics and physics engines",
          "User interface design and user experience",
          "Game publishing and distribution",
        ],
        outcomes: [
          "Create and publish 2D/3D games using Unity",
          "Understand game development pipelines and tools",
          "Explore career paths in game design and development",
        ],
        next: ["Game Studio", "3D Animation & Game Dev"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Sunday", "Wednesday"],
          startTime: "10:00 AM",
          endTime: "12:00 PM",
          durationWeeks: 12,
        },
        instructors: "Ms. Thomas",
        includes: ["Unity license", "Asset pack"],
      },
      {
        courseName: "Interactive Elements",
        subtitle: "JavaScript & APIs",
        description:
          "Students learn to create interactive web applications using JavaScript and APIs. They explore dynamic page updates, user input handling, and event-driven programming.",
        focus: [
          "Dynamic page updates using JavaScript",
          "User input handling and form validation",
          "Event-driven programming and DOM manipulation",
        ],
        outcomes: [
          "Build interactive web applications with JavaScript",
          "Understand the basics of front-end development",
          "Prepare for full-stack web development",
        ],
        next: ["Frontend Fundamentals"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Monday"],
          startTime: "1:00 PM",
          endTime: "2:30 PM",
          durationWeeks: 12,
        },
        instructors: "Mr. Harris",
        includes: ["API keys", "Sample projects"],
      },
      {
        courseName: "Frontend Fundamentals",
        subtitle: "HTML, CSS & JS Basics",
        description:
          "Students learn the basics of front-end development using HTML, CSS, and JavaScript. They explore responsive design, accessibility, and modern web standards.",
        focus: [
          "Responsive design using CSS and media queries",
          "Accessibility best practices in web development",
          "Modern web standards and tools",
        ],
        outcomes: [
          "Build responsive and accessible web pages",
          "Understand the principles of front-end development",
          "Prepare for advanced web development topics",
        ],
        next: [
          "Next.js Essentials",
          "Full Stack Foundations",
          "Interactive Elements",
        ],
        formatOptions: ["Online"],
        schedule: {
          days: ["Sunday"],
          startTime: "1:00 PM",
          endTime: "2:30 PM",
          durationWeeks: 12,
        },
        instructors: "Ms. Robinson",
        includes: ["Code editor access", "Project templates"],
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
        description:
          "Advanced React and Next.js development for high schoolers focused on real-world projects. Students build scalable SPAs with hooks, authentication, forms, and server-side rendering.",
        focus: [
          "Advanced components and state management (Redux/Context)",
          "Authentication, protected routes, and API integration",
          "SSR, ISR, and static site generation in Next.js",
        ],
        outcomes: [
          "Build, deploy, and maintain full-stack web apps",
          "Use Next.js in job-ready contexts",
          "Contribute to real open-source or community projects",
        ],
        next: [
          "Advanced Backend & DevOps",
          "Startup Studio",
          "Advanced Web Dev",
        ],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Sunday", "Wednesday"],
          startTime: "10:00 AM",
          endTime: "12:00 PM",
          durationWeeks: 14,
        },
        instructors: "Mr. Walker",
        includes: ["Next.js starter kit", "Deployment guides"],
      },
      {
        courseName: "Simulators & Physics",
        subtitle: "Coding Real-World Systems",
        description:
          "Students learn to simulate real-world systems using code. They explore physics engines, data visualization, and interactive simulations, applying math concepts in a fun way.",
        focus: [
          "Physics engines and simulation logic",
          "Data visualization and interactive graphs",
          "Real-world applications of coding in science",
        ],
        outcomes: [
          "Build simulations that model real-world phenomena",
          "Use math and physics to create interactive experiences",
          "Explore STEM applications of coding",
        ],
        next: ["APIs & Integrations", "Database Basics"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Sunday", "Wednesday"],
          startTime: "10:00 AM",
          endTime: "12:00 PM",
          durationWeeks: 14,
        },
        instructors: "Ms. Allen",
        includes: ["Simulation toolkit", "Data sets"],
      },
      {
        courseName: "Full Stack Foundations",
        subtitle: "Dynamic Web Projects",
        description:
          "Students take on real-world development using HTML, CSS, and JavaScript to create dynamic websites. Projects emphasize responsive design, client-server thinking, and component-based structures.",
        focus: [
          "Semantic HTML and modern CSS (flexbox, grid)",
          "JavaScript interactivity (DOM manipulation, events)",
          "Intro to client-server concepts and tools",
        ],
        outcomes: [
          "Build dynamic web apps with interactivity and logic",
          "Use GitHub for version control and collaboration",
          "Prepare for deeper backend and framework learning",
        ],
        next: ["APIs & Integrations", "Database Basics", "Advanced Web Dev"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday"],
          startTime: "1:00 PM",
          endTime: "3:00 PM",
          durationWeeks: 14,
        },
        instructors: "Ms. Young",
        includes: ["GitHub classroom", "Project templates"],
      },
      {
        courseName: "APIs & Integrations",
        subtitle: "Connecting to the Web",
        description:
          "Students tap into the wider internet by integrating public APIs like weather, music, and sports data. Focus is on understanding requests, JSON parsing, and data-driven interfaces.",
        focus: [
          "Working with fetch/Axios for API requests",
          "Handling async data and loading states",
          "Building dashboards or tools powered by APIs",
        ],
        outcomes: [
          "Create real-time apps with live data",
          "Use APIs to add external functionality",
          "Connect projects to useful, real-world services",
        ],
        next: ["Next.js Essentials", "Startup Studio", "Database Basics"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Sunday", "Wednesday", "Thursday"],
          startTime: "1:00 PM",
          endTime: "3:00 PM",
          durationWeeks: 16,
        },
        instructors: "Mr. King",
        includes: ["API keys", "Sample integrations"],
      },
      {
        courseName: "Database Basics",
        subtitle: "Data & Storage",
        description:
          "Students explore structured data using JSON, local storage, and simple databases. They learn how data moves between front-end and back-end systems through interactive mini-projects.",
        focus: [
          "Data modeling, arrays, and object manipulation",
          "Intro to databases and CRUD operations",
          "Project-based data display (leaderboards, forms)",
        ],
        outcomes: [
          "Build projects that store, retrieve, and update data",
          "Understand client-server data relationships",
          "Prepare for full-stack applications",
        ],
        next: ["APIs & Integrations", "Advanced Backend & DevOps"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Friday", "Wednesday", "Thursday"],
          startTime: "1:00 PM",
          endTime: "3:00 PM",
          durationWeeks: 14,
        },
        instructors: "Ms. Scott",
        includes: ["Database sandbox", "CRUD exercises"],
      },
      {
        courseName: "Startup Studio",
        subtitle: "Tech Entrepreneurship",
        description:
          "Students turn their coding skills into business ideas. They develop tech-based products, pitch them, and simulate launching a startup with marketing and user testing.",
        focus: [
          "Lean startup principles and prototyping",
          "User-centered design and feedback loops",
          "Building MVPs and deploying to real users",
        ],
        outcomes: [
          "Pitch a viable tech startup idea",
          "Build and launch a functional prototype",
          "Learn teamwork, product thinking, and real-world application",
        ],
        next: ["Next.js Essentials", "AI + Code", "Startup Accelerator"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Sunday", "Saturday"],
          startTime: "3:00 PM",
          endTime: "5:00 PM",
          durationWeeks: 16,
        },
        instructors: "Ms. Adams",
        includes: ["Startup toolkit", "Mentorship"],
      },
      {
        courseName: "AI + Code",
        subtitle: "Intro to Artificial Intelligence",
        description:
          "Introduces students to artificial intelligence through coding. They train basic models, create chatbots, and explore ethical issues in AI deployment.",
        focus: [
          "Image recognition and chatbot logic",
          "Prompt engineering and training datasets",
          "Ethics and responsibility in machine learning",
        ],
        outcomes: [
          "Prototype functional AI projects (chatbots, image classifiers)",
          "Understand the role of AI in modern apps",
          "Develop critical thinking around emerging tech",
        ],
        next: ["Startup Studio", "Next.js Essentials (Grades 9–12)"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Friday", "Sunday"],
          startTime: "7:30 PM",
          endTime: "9:00 PM",
          durationWeeks: 20,
        },
        instructors: "Mr. Perez",
        includes: ["AI sandbox", "Ethics workshop"],
      },
      {
        courseName: "Advanced Backend & DevOps",
        subtitle: "Databases, APIs & Deployment",
        description:
          "Students explore databases, authentication, server logic, and deployment pipelines. Topics include Node.js, Express, PostgreSQL, and tools like Docker and CI/CD flows.",
        focus: [
          "Relational databases, REST APIs, and backend logic",
          "Security, testing, and authentication",
          "Deployment using Docker, GitHub Actions, and cloud services",
        ],
        outcomes: [
          "Launch scalable, secure back-end systems",
          "Understand infrastructure and dev lifecycle",
          "Prepare for professional web or SaaS careers",
        ],
        next: ["Startup Accelerator"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Monday", "Wednesday", "Friday"],
          startTime: "7:30 PM",
          endTime: "9:00 PM",
          durationWeeks: 16,
        },
        instructors: "Ms. Rivera",
        includes: ["Cloud credits", "DevOps toolkit"],
      },
      {
        courseName: "Startup Accelerator",
        subtitle: "Capstone Product Launch",
        description:
          "This capstone track guides students through the full process of launching a real product. With mentorship, they create, pitch, and market a tech product or platform.",
        focus: [
          "Startup ecosystems, branding, and monetization",
          "Agile workflows, user testing, and refinement",
          "Product-market fit and investor readiness",
        ],
        outcomes: [
          "Build and deploy a real-world product with users",
          "Gain entrepreneurial, UX, and leadership skills",
          "Create a project portfolio for college or career applications",
        ],
        next: [],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Sunday"],
          startTime: "3:00 PM",
          endTime: "5:00 PM",
          durationWeeks: 16,
        },
        instructors: "Mr. Murphy",
        includes: ["Mentorship", "Demo day"],
      },
      {
        courseName: "Advanced Web Dev",
        subtitle: "React, TypeScript & SSR",
        description:
          "Students master modern web development using React, TypeScript, and Next.js. They build complex applications with state management, routing, and server-side rendering.",
        focus: [
          "TypeScript for type safety and code quality",
          "State management with Redux or Context API",
          "Server-side rendering and static site generation",
        ],
        outcomes: [
          "Build production-ready web applications",
          "Understand modern web architecture and best practices",
          "Prepare for internships or college-level CS courses",
        ],
        next: ["Full Stack Foundations", "Next.js Essentials", "AI + Code"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Sunday"],
          startTime: "1:00 PM",
          endTime: "3:00 PM",
          durationWeeks: 16,
        },
        instructors: "Ms. Cooper",
        includes: ["TypeScript starter kit", "Code review"],
      },
      {
        courseName: "Capstone Project",
        subtitle: "Full-Stack Project Build",
        description:
          "Students apply their full-stack skills to build a comprehensive project. They integrate front-end and back-end technologies, focusing on deployment and user experience.",
        focus: [
          "Full-stack architecture and deployment",
          "User experience design and testing",
          "Project management and collaboration",
        ],
        outcomes: [
          "Launch a full-stack application with real users",
          "Understand the full development lifecycle",
          "Prepare for internships or job applications",
        ],
        next: ["Startup Accelerator"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Sunday"],
          startTime: "6:00 PM",
          endTime: "9:00 PM",
          durationWeeks: 16,
        },
        instructors: "Mr. Stewart",
        includes: ["Mentorship", "Portfolio review"],
      },
      {
        courseName: "3D Animation & Game Dev",
        subtitle: "Blender & Unity 3D",
        description:
          "Students learn to create 3D models and animations using Blender and Unity. They explore game mechanics, physics, and user interface design, preparing them for advanced game development.",
        focus: [
          "3D modeling and animation using Blender",
          "Game mechanics and physics engines",
          "User interface design and user experience",
        ],
        outcomes: [
          "Create and publish 3D games using Unity",
          "Understand game development pipelines and tools",
          "Explore career paths in game design and development",
        ],
        next: ["Game Studio", "Unity Game Dev"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Sunday"],
          startTime: "1:00 PM",
          endTime: "3:00 PM",
          durationWeeks: 16,
        },
        instructors: "Ms. Morgan",
        includes: ["Blender license", "3D asset pack"],
      },
      {
        courseName: "CS Prep + Algorithms",
        subtitle: "AP/College CS Preparation",
        description:
          "Students prepare for AP Computer Science and college-level CS courses. They learn algorithms, data structures, and problem-solving techniques using Python or Java.",
        focus: [
          "Algorithm design and analysis",
          "Data structures (arrays, linked lists, trees)",
          "Problem-solving techniques and coding challenges",
        ],
        outcomes: [
          "Master algorithmic thinking and coding skills",
          "Prepare for AP Computer Science and college-level CS courses",
          "Build a strong foundation for computer science careers",
        ],
        next: ["Internship Program"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Sunday"],
          startTime: "1:00 PM",
          endTime: "3:00 PM",
          durationWeeks: 20,
        },
        instructors: "Mr. Reed",
        includes: ["Practice problems", "Exam prep"],
      },
      {
        courseName: "Internship Program",
        subtitle: "Real-World Tech Experience",
        description:
          "Students gain real-world experience through internships with tech companies. They work on projects, collaborate with professionals, and build their resumes.",
        focus: [
          "Professional development and networking",
          "Real-world project experience",
          "Collaboration with industry professionals",
        ],
        outcomes: [
          "Gain valuable work experience in tech",
          "Build a professional network and resume",
          "Prepare for college or career opportunities",
        ],
        next: [],
        formatOptions: ["In-person", "Online"],
        schedule: {
          days: ["Flexible"],
          startTime: "Flexible",
          endTime: "Flexible",
          durationWeeks: 8,
        },
        instructors: "Industry Mentors",
        includes: ["Resume review", "Reference letter"],
      },
      {
        courseName: "Entrepreneurship & Innovation",
        subtitle: "Business & Product Design",
        description:
          "Students learn the principles of entrepreneurship and innovation. They explore business models, marketing strategies, and product development.",
        focus: [
          "Business models and value propositions",
          "Marketing strategies and customer discovery",
          "Product development and prototyping",
        ],
        outcomes: [
          "Develop a business idea and pitch it",
          "Understand the startup ecosystem and funding options",
          "Build skills in marketing, sales, and product development",
        ],
        next: ["Internship Program"],
        formatOptions: ["Online"],
        schedule: {
          days: ["Saturday", "Sunday"],
          startTime: "1:00 PM",
          endTime: "3:00 PM",
          durationWeeks: 16,
        },
        instructors: "Ms. Bell",
        includes: ["Pitch deck template", "Mentorship"],
      },
    ],
  },
];
