import { Curriculum } from "@/lib/interfaces/courses";

export const summerCourses: Curriculum[] = [
  {
    title: "Elementary Explorers (Ages 5-10)",
    courses: [
      {
        courseName: "Creative Coding with Scratch",
        duration: "4 weeks (Mon-Fri, 9:00 AM – 12:00 PM)",
        format: "In-person & Online",
        description:
          "Introduce basic programming concepts through interactive stories, animations, and games using Scratch’s visual blocks.",
        keyProjects: [
          "Animated fairy tales",
          "Interactive quizzes",
          "Simple arcade games",
        ],
        outcomes: [
          "Basic programming concepts: sequences, loops, and events",
          "Create interactive stories and simple games",
          "Develop logical thinking and problem-solving skills",
          "Use Scratch’s drag-and-drop interface",
          "Collaboration through sharing and remixing projects",
        ],
      },
      {
        courseName: "Digital Makers: Art & Animation",
        duration: "4 weeks (Mon-Fri, 9:00 AM – 12:00 PM)",
        format: "In-person & Online",
        description:
          "Blend coding and creativity by designing digital art and animations with block-based coding tools.",
        keyProjects: [
          "Pixel art creation",
          "Animated greeting cards",
          "Story-driven animations",
        ],
        outcomes: [
          "Combine creativity with computational thinking",
          "Learn basic animation principles",
          "Design pixel art and visual storytelling",
          "Create digital greeting cards and animations",
          "Develop patience and attention to detail",
        ],
      },
      {
        courseName: "Robotics for Beginners",
        duration: "4 weeks (Mon-Fri, 9:00 AM – 12:00 PM)",
        format: "In-person & Online",
        description:
          "Hands-on introduction to robotics using Dash & Dot robots to teach basic coding and physical computing.",
        keyProjects: [
          "Robot obstacle course",
          "Light and sound programming",
          "Dance routines with robots",
        ],
        outcomes: [
          "Introduction to robotics and basic coding for physical devices",
          "Program robot movement, lights, and sounds",
          "Understand sensors and robot-environment interaction",
          "Develop problem-solving through robot behavior design",
          "Build teamwork and project planning skills",
        ],
      },
    ],
  },
  {
    title: "Middle School Makers (Ages 11-13)",
    courses: [
      {
        courseName: "Python Game Dev Lab",
        duration: "6 weeks (Mon-Fri, 1:00 PM – 4:00 PM)",
        format: "In-person & Online",
        description:
          "Develop interactive games using Python and Pygame, focusing on programming fundamentals and game mechanics.",
        keyProjects: [
          "Classic arcade-style games",
          "Multiplayer game basics",
          "Game debugging and enhancement",
        ],
        outcomes: [
          "Write code using Python syntax and structures",
          "Learn game design fundamentals",
          "Practice debugging and iterative development",
          "Use Pygame for graphics and sound",
          "Enhance creative problem-solving skills",
        ],
      },
      {
        courseName: "Web Design & Development Basics",
        duration: "6 weeks (Mon-Fri, 1:00 PM – 4:00 PM)",
        format: "In-person & Online",
        description:
          "Learn HTML, CSS, and JavaScript to build responsive, interactive web pages with real-world applications.",
        keyProjects: [
          "Personal portfolio website",
          "Interactive photo gallery",
          "Responsive landing page",
        ],
        outcomes: [
          "Understand HTML for web structure",
          "Style pages using CSS",
          "Add interactivity with JavaScript",
          "Apply responsive design principles",
          "Debug web code with developer tools",
        ],
      },
      {
        courseName: "Intro to Robotics & Electronics",
        duration: "6 weeks (Mon-Fri, 1:00 PM – 4:00 PM)",
        format: "In-person & Online",
        description:
          "Explore microcontrollers and sensors using Arduino kits to build simple automated devices and learn electronics basics.",
        keyProjects: [
          "Automated plant watering system",
          "Light-sensitive night lamp",
          "Motion-activated alarm",
        ],
        outcomes: [
          "Learn basics of electronics: circuits, sensors, actuators",
          "Program Arduino microcontrollers",
          "Build simple automated devices",
          "Understand input/output concepts",
          "Practice troubleshooting and iterative design",
        ],
      },
    ],
  },
  {
    title: "High School Innovators (Ages 14-18)",
    courses: [
      {
        courseName: "Full-Stack Web Dev Intensive",
        duration: "8 weeks (Mon-Fri, 9:00 AM – 1:00 PM)",
        format: "In-person & Online",
        description:
          "Build scalable full-stack web applications using React, Next.js, and Tailwind CSS, with backend API integration.",
        keyProjects: [
          "Social media platform clone",
          "E-commerce storefront",
          "Blog with CMS integration",
        ],
        outcomes: [
          "Develop web applications with React and Next.js",
          "Style with Tailwind CSS for clean UI/UX",
          "Integrate backend APIs and data services",
          "Use version control and deployment workflows",
          "Build responsive, accessible, and performant websites",
        ],
      },
      {
        courseName: "Mobile App Development Track",
        duration: "8 weeks (Mon-Fri, 9:00 AM – 1:00 PM)",
        format: "In-person & Online",
        description:
          "Design and deploy cross-platform mobile apps using React Native or Flutter, focusing on UI/UX and app logic.",
        keyProjects: [
          "Habit tracker app",
          "Event scheduling app",
          "Location-based service app",
        ],
        outcomes: [
          "Develop apps with React Native or Flutter",
          "Design effective mobile UI/UX",
          "Manage app state and navigation",
          "Access device features (GPS, camera)",
          "Test, debug, and prepare apps for app stores",
        ],
      },
      {
        courseName: "Cybersecurity & Ethical Hacking",
        duration: "8 weeks (Mon-Fri, 9:00 AM – 1:00 PM)",
        format: "In-person & Online",
        description:
          "Learn core cybersecurity concepts and ethical hacking techniques through hands-on labs and penetration testing simulations.",
        keyProjects: [
          "Network vulnerability assessment",
          "Password cracking techniques",
          "Defensive coding practices",
        ],
        outcomes: [
          "Understand cybersecurity threats and defenses",
          "Practice ethical hacking and penetration testing",
          "Learn network security basics and firewall concepts",
          "Write secure code and identify vulnerabilities",
          "Understand legal and ethical aspects of cybersecurity",
        ],
      },
      {
        courseName: "AI & Machine Learning Foundations",
        duration: "8 weeks (Mon-Fri, 9:00 AM – 1:00 PM)",
        format: "In-person & Online",
        description:
          "Explore data science workflows and build machine learning models using Python and popular libraries like Scikit-learn and TensorFlow.",
        keyProjects: [
          "Image classification model",
          "Sentiment analysis of text data",
          "Predictive data dashboards",
        ],
        outcomes: [
          "Program with Python for data science",
          "Manipulate and visualize data",
          "Build and evaluate machine learning models",
          "Understand classification and regression algorithms",
          "Apply AI techniques to solve real-world problems",
        ],
      },
    ],
  },
  {
    title: "Specialized Weekend Workshops (Ages 11-18)",
    courses: [
      {
        courseName: "Game Design Fundamentals",
        duration: "2-day weekend intensive (Sat-Sun, 10:00 AM – 3:00 PM)",
        format: "Online only",
        description:
          "Learn the essentials of game design, including level design, storytelling, and mechanics using game engines like Unity.",
        keyProjects: [],
        outcomes: [
          "Design engaging game levels and stories",
          "Use Unity game engine for development",
          "Script basic game logic",
          "Test and balance gameplay for fun and fairness",
        ],
      },
      {
        courseName: "Robotics & IoT Projects",
        duration: "2-day weekend intensive (Sat-Sun, 10:00 AM – 3:00 PM)",
        format: "Online only",
        description:
          "Build connected devices using microcontrollers and cloud services, focusing on automation and sensor integration.",
        keyProjects: [],
        outcomes: [
          "Build and program IoT devices",
          "Integrate sensors with microcontrollers",
          "Exchange data with cloud platforms",
          "Manage projects collaboratively",
        ],
      },
      {
        courseName: "Data Science Crash Course",
        duration: "2-day weekend intensive (Sat-Sun, 10:00 AM – 3:00 PM)",
        format: "Online only",
        description:
          "Analyze datasets and visualize data using Python, applying basic statistics and exploratory analysis.",
        keyProjects: [],
        outcomes: [
          "Clean and prepare datasets",
          "Visualize data effectively",
          "Perform basic statistical analysis",
          "Complete a hands-on data project",
        ],
      },
      {
        courseName: "Web Accessibility & UX Design",
        duration: "2-day weekend intensive (Sat-Sun, 10:00 AM – 3:00 PM)",
        format: "Online only",
        description:
          "Create inclusive and accessible websites by learning accessibility standards, user testing, and best design practices.",
        keyProjects: [],
        outcomes: [
          "Understand inclusive design principles",
          "Implement accessibility standards",
          "Conduct user testing and gather feedback",
          "Build accessible HTML and CSS components",
        ],
      },
    ],
  },
];
