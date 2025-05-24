import { Curriculum } from "@/lib/interfaces/courses";

export const curriculumCourses: Curriculum[] = [
  {
    title: "Grades K to 2",
    courses: [
      {
        courseName: "Code Through Stories",
        category: "block-coding",
        level: "Beginner",
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
      },
      {
        courseName: "Digital Discovery Lab",
        category: "hardware",
        level: "Beginner",
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
      },
      {
        courseName: "Mini Makers",
        category: "hardware",
        level: "Beginner",
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
      },
      {
        courseName: "Code and Play",
        category: "block-coding",
        level: "Beginner",
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
      },
      {
        courseName: "Pattern Makers",
        category: "block-coding",
        level: "Beginner",
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
      },
      {
        courseName: "Tinker Time",
        category: "hardware",
        level: "Beginner",
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
          "Be ready for more structured coding tasks in K to 2 or 3 to 5 courses",
        ],
        next: ["Mini Makers", "Code Through Stories"],
      },
      {
        courseName: "Sensory Circuits Lab",
        category: "hardware",
        level: "Beginner",
        description:
          "Students build simple circuits and use sensors to trigger lights, sounds, and movement. This hands-on course connects physical actions to digital responses.",
        focus: [
          "Building circuits with LEDs and buzzers",
          "Using sensors for input/output",
          "Exploring cause and effect with hardware",
        ],
        outcomes: [
          "Create interactive hardware projects",
          "Understand basic electronics and sensors",
          "Develop fine motor and logical skills",
        ],
        next: ["Tinker Time", "Mini Makers"],
      },
      {
        courseName: "Bitsbox and Bots",
        category: "block-coding",
        level: "Beginner",
        description:
          "Students learn to code using Bitsbox, a fun platform that teaches coding through app creation. They also explore robotics with simple bots, integrating coding and hardware.",
        focus: [
          "Creating apps with Bitsbox and block coding",
          "Basic robotics with programmable bots",
          "Understanding app logic and hardware interaction",
        ],
        outcomes: [
          "Build and publish simple apps using Bitsbox",
          "Program robots to perform tasks and respond to input",
          "Develop problem-solving skills through coding challenges",
        ],
      },
    ],
  },
  {
    title: "Grades 3 to 5",
    courses: [
      {
        courseName: "Game Builders Club",
        category: "game-dev",
        level: "Beginner",
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
      },
      {
        courseName: "AI Storytellers",
        category: "data-science-ml-ai",
        level: "Beginner",
        description:
          "Young learners use simple AI tools to create interactive stories and characters. They explore how computers can 'think' and make choices in storytelling.",
        focus: [
          "AI-powered story generation",
          "Voice and image recognition basics",
          "Creative play with AI assistants",
        ],
        outcomes: [
          "Understand basic AI concepts through stories",
          "Interact with AI-driven characters",
          "Spark curiosity about technology and intelligence",
        ],
        next: ["Code Through Stories", "Mini Makers"],
      },
      {
        courseName: "Web Wonders",
        category: "web-and-app-dev",
        level: "Beginner",
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
      },
      {
        courseName: "App Explorers",
        category: "web-and-app-dev",
        level: "Beginner",
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
        next: ["Creative Code with Art", "Code for Music"],
      },
      {
        courseName: "Creative Code with Art",
        category: "game-dev",
        level: "Intermediate",
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
      },
      {
        courseName: "Code for Music",
        category: "game-dev",
        level: "Intermediate",
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
        next: ["Creative Code with Art", "Game Studio"],
      },
      {
        courseName: "Code a Storybook",
        category: "block-coding",
        level: "Beginner",
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
        next: ["Creative Code with Art"],
      },
      {
        courseName: "AI Playground",
        category: "data-science-ml-ai",
        level: "Beginner",
        description:
          "Students experiment with visual and audio AI tools to create art, music, and games. They learn about training data, pattern recognition, and ethical AI use.",
        focus: [
          "Hands-on with image and sound recognition",
          "Training simple AI models",
          "Discussing fairness and bias in AI",
        ],
        outcomes: [
          "Build creative projects using AI tools",
          "Understand how AI learns from data",
          "Discuss responsible AI use",
        ],
        next: ["AI Basics", "Creative Code with Art"],
      },
      {
        courseName: "Inventing Workshop",
        category: "hardware",
        level: "Intermediate",
        description:
          "Students design and build gadgets using microcontrollers and sensors. They learn about circuits, programming, and prototyping real-world inventions.",
        focus: [
          "Micro:bit or Arduino basics",
          "Sensor integration and coding",
          "Prototyping and testing inventions",
        ],
        outcomes: [
          "Build working electronic prototypes",
          "Combine hardware and software creatively",
          "Develop problem-solving and engineering skills",
        ],
        next: ["Game Studio"],
      },
    ],
  },
  {
    title: "Grades 6 to 8",
    courses: [
      {
        courseName: "Game Studio",
        category: "game-dev",
        level: "Intermediate",
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
        next: ["Database Basics", "Unity Game Dev 6 to 8"],
      },
      {
        courseName: "Unity Game Dev 6 to 8",
        category: "game-dev",
        level: "Advanced",
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
        next: ["Game Studio", "Animation and Game Dev"],
      },
      {
        courseName: "Interactive Elements",
        category: "web-and-app-dev",
        level: "Intermediate",
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
      },
      {
        courseName: "Frontend Fundamentals",
        category: "web-and-app-dev",
        level: "Intermediate",
        description:
          "Students learn the basics of front-end development using HTML, CSS, and JavaScript. They explore responsive design, accessibility, and modern web standards.",
        focus: [
          "Responsive design using CSS and media queries",
          "Accessibility best practices in web development",
          "Modern web standards and tools",
          "Understanding the DOM and event handling",
          "Building interactive web pages",
        ],
        outcomes: [
          "Build responsive and accessible web pages",
          "Understand the principles of front-end development",
          "Prepare for advanced web development topics",
          "Develop problem-solving skills through coding challenges",
          "Gain confidence in creating interactive web applications",
        ],
        next: [
          "Nextjs Essentials",
          "Full Stack Foundations",
          "Interactive Elements",
        ],
      },
      {
        courseName: "AI Explorers",
        category: "data-science-ml-ai",
        level: "Intermediate",
        description:
          "Students dive into machine learning by building simple models for image and text recognition. They explore neural networks, datasets, and real-world AI applications.",
        focus: [
          "Training and testing ML models",
          "Exploring neural networks visually",
          "Ethics and impact of AI in society",
          "Understanding data collection and bias",
          "Building simple AI applications",
          "Discussing AI's role in various industries",
        ],
        outcomes: [
          "Build and test basic AI models",
          "Understand neural network fundamentals",
          "Discuss AI's role in the world",
          "Develop critical thinking about technology",
          "Prepare for advanced AI and data science topics",
          "Explore career paths in AI and machine learning",
          "Gain hands-on experience with AI tools and frameworks",
        ],
        next: ["AI Basics", "Simulators and Physics"],
      },
      {
        courseName: "Smart Devices Lab",
        category: "hardware",
        level: "Intermediate",
        description:
          "Students create smart gadgets using sensors, microcontrollers, and code. Projects include smart lights, alarms, and interactive displays.",
        focus: [
          "IoT basics with Arduino or Raspberry Pi",
          "Sensor data collection and automation",
          "Building and coding smart devices",
        ],
        outcomes: [
          "Prototype IoT devices",
          "Understand automation and real-world applications",
          "Prepare for advanced hardware and robotics",
        ],
        next: ["Unity Game Dev", "Database Basics"],
      },
      {
        courseName: "UX/UI Design",
        category: "web-and-app-dev",
        level: "Intermediate",
        description:
          "Students learn the principles of user experience and interface design. They explore design thinking, wireframing, and prototyping tools to create user-friendly applications.",
        focus: [
          "User-centered design principles",
          "Wireframing and prototyping tools",
          "Usability testing and feedback loops",
          "Designing for accessibility and inclusivity",
          "Creating interactive prototypes",
        ],
        outcomes: [
          "Design user-friendly interfaces for web and mobile apps",
          "Conduct usability tests and iterate on designs",
          "Understand the importance of UX in software development",
          "Prepare for advanced web and app development",
        ],
      },
      {
        courseName: "Web Dev and App Creation",
        category: "web-and-app-dev",
        level: "Intermediate",
        description:
          "Students dive deeper into web development and app creation, learning modern tools and frameworks to build responsive websites and interactive applications. This roadmap covers frontend and backend concepts, user interface design, and dynamic web experiences, preparing learners for more advanced programming challenges.",
        focus: [
          "Frontend and backend development concepts",
          "Responsive design and user interface principles",
          "Dynamic web experiences with modern frameworks",
          "Building interactive applications",
        ],
        outcomes: [
          "Build responsive websites and interactive applications",
          "Understand the full web development stack",
          "Prepare for advanced programming challenges",
        ],
      },
    ],
  },
  {
    title: "Grades 9 to 12",
    courses: [
      {
        courseName: "Nextjs Essentials",
        category: "full-stack-web",
        level: "Advanced",
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
          "Advanced Backend and DevOps",
          "Startup Studio",
          "Advanced Web Dev",
        ],
      },
      {
        courseName: "Simulators and Physics",
        category: "data-science-ml-ai",
        level: "Advanced",
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
        next: [
          "Application Programming Interfaces and Integrations",
          "Database Basics",
        ],
      },
      {
        courseName: "Full Stack Foundations",
        category: "full-stack-web",
        level: "Intermediate",
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
        next: [
          "Application Programming Interfaces and Integrations",
          "Database Basics",
          "Advanced Web Dev",
          "Algorithms",
        ],
      },
      {
        courseName: "Application Programming Interfaces and Integrations",
        category: "web-and-app-dev",
        level: "Intermediate",
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
        next: [
          "Nextjs Essentials",
          "Startup Studio",
          "Database Basics",
          "Algorithms",
        ],
      },
      {
        courseName: "Database Basics",
        category: "full-stack-web",
        level: "Intermediate",
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
        next: [
          "Application Programming Interfaces and Integrations",
          "Advanced Backend and DevOps",
          "Algorithms",
        ],
      },
      {
        courseName: "Startup Studio",
        category: "business",
        level: "Advanced",
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
        next: ["Nextjs Essentials", "AI Basics", "Startup Accelerator"],
      },
      {
        courseName: "AI Basics",
        category: "data-science-ml-ai",
        level: "Advanced",
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
        next: ["Startup Studio", "Nextjs Essentials (9 to 12)"],
      },
      {
        courseName: "Advanced Backend and DevOps",
        category: "full-stack-web",
        level: "Advanced",
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
        next: ["Startup Accelerator", "Algorithms", "Internship Program"],
      },
      {
        courseName: "Startup Accelerator",
        category: "business",
        level: "Advanced",
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
      },
      {
        courseName: "Advanced Web Dev",
        category: "full-stack-web",
        level: "Advanced",
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
        next: [
          "Full Stack Foundations",
          "Nextjs Essentials",
          "AI Basics",
          "Algorithms",
        ],
      },
      {
        courseName: "Capstone Project",
        category: "college-prep",
        level: "Advanced",
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
        next: ["Startup Accelerator", "Algorithms"],
      },
      {
        courseName: "Animation and Game Dev",
        category: "game-dev",
        level: "Advanced",
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
      },
      {
        courseName: "Algorithms",
        category: "college-prep",
        level: "Advanced",
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
      },
      {
        courseName: "Internship Program",
        category: "college-prep",
        level: "Advanced",
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
      },
      {
        courseName: "Entrepreneurship Basics",
        category: "business",
        level: "Intermediate",
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
      },
      {
        courseName: "Machine Learning Studio",
        category: "data-science-ml-ai",
        level: "Advanced",
        description:
          "Students build real machine learning models for image, text, and data analysis. They use Python and open-source libraries to explore supervised and unsupervised learning.",
        focus: [
          "Python for ML (scikit-learn, TensorFlow basics)",
          "Data preprocessing and visualization",
          "Model evaluation and improvement",
        ],
        outcomes: [
          "Train and deploy ML models",
          "Analyze and visualize datasets",
          "Understand real-world AI applications",
        ],
        next: ["AI Basics", "Simulators and Physics"],
      },
      {
        courseName: "Robotics Engineering",
        category: "hardware",
        level: "Advanced",
        description:
          "Students design, build, and program robots for real-world tasks. They explore sensors, actuators, and autonomous navigation using advanced kits.",
        focus: [
          "Robotics hardware and mechanics",
          "Programming autonomous behaviors",
          "Sensors, actuators, and feedback systems",
        ],
        outcomes: [
          "Build and program advanced robots",
          "Understand robotics systems integration",
          "Prepare for robotics competitions or engineering careers",
        ],
        next: ["Startup Studio", "Advanced Backend and DevOps"],
      },
      {
        courseName: "Capstone Accelerator",
        category: "college-prep",
        level: "Advanced",
        description:
          "Students work on a comprehensive capstone project that showcases their skills. They integrate front-end and back-end technologies, focusing on deployment and user experience.",
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
      },
      {
        courseName: "AI and Robotics Introduction",
        category: "hardware",
        level: "Advanced",
        description:
          "Students explore the intersection of robotics and AI. They build robots that can learn from their environment and make decisions based on data.",
        focus: [
          "Machine learning for robotics",
          "Sensor integration and data analysis",
          "Autonomous navigation and decision-making",
        ],
        outcomes: [
          "Build robots that learn and adapt",
          "Understand the principles of AI in robotics",
          "Prepare for careers in robotics and AI",
        ],
        next: ["Robotics Engineering", "Machine Learning Studio"],
      },
      {
        courseName: "Unity Game Dev 9 to 12",
        category: "game-dev",
        level: "Advanced",
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
        next: ["Game Studio", "Animation and Game Dev"],
      },
      {
        courseName: "Game Design and Development",
        category: "game-dev",
        level: "Advanced",
        description:
          "Students learn advanced game design principles and development techniques. They create complex games with rich narratives, mechanics, and user experiences.",
        focus: [
          "Game design theory and mechanics",
          "User experience and narrative design",
          "Advanced programming concepts in game development",
        ],
        outcomes: [
          "Design and develop complex games with rich narratives",
          "Understand the principles of game mechanics and user experience",
          "Prepare for careers in game design and development",
        ],
        next: ["Unity Game Dev 9 to 12", "Animation and Game Dev"],
      },
    ],
  },
];
