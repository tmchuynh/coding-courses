import { Curriculum } from "@/lib/interfaces/courses";

export const summerCourses: Curriculum[] = [
  {
    title: "Elementary Explorers (Ages 5-10)",
    courses: [
      {
        courseName: "Creative Coding with Scratch",
        subtitle:
          "Fun programming fundamentals with interactive stories and games",
        level: "Beginner",
        duration: "4 weeks (Mon-Fri, 9:00 AM – 12:00 PM)",
        format: "In-person & Online",
        description:
          "Introduce basic programming concepts through interactive stories, animations, and games using Scratch’s visual blocks. Students will learn to think like programmers by sequencing instructions, using loops, and responding to events. Through hands-on projects, they will create their own interactive stories and games, fostering creativity and logical thinking. The course encourages collaboration by sharing and remixing projects within the Scratch community, helping students build confidence in coding from an early age.",
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
        subtitle: "Create digital art and animations using block-based coding",
        level: "Beginner",
        duration: "4 weeks (Mon-Fri, 9:00 AM – 12:00 PM)",
        format: "In-person & Online",
        description:
          "Blend coding and creativity by designing digital art and animations with block-based coding tools. Students will explore the fundamentals of digital design, create pixel art, and bring their creations to life with animation. The course covers basic animation principles and visual storytelling, allowing students to express themselves artistically while learning computational thinking. Projects such as animated greeting cards and story-driven animations help develop patience, attention to detail, and a sense of accomplishment.",
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
        subtitle: "Hands-on robotics and coding with Dash & Dot robots",
        level: "Beginner",
        duration: "4 weeks (Mon-Fri, 9:00 AM – 12:00 PM)",
        format: "In-person & Online",
        description:
          "Hands-on introduction to robotics using Dash & Dot robots to teach basic coding and physical computing. Students will learn how to program robots to move, make sounds, and interact with their environment using sensors. Through engaging challenges like obstacle courses and dance routines, they will develop problem-solving skills and understand the basics of robotics. The course emphasizes teamwork, creativity, and the excitement of bringing code to life in the physical world.",
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
        subtitle: "Build games and learn Python programming basics",
        level: "Beginner",
        duration: "6 weeks (Mon-Fri, 1:00 PM – 4:00 PM)",
        format: "In-person & Online",
        description:
          "Develop interactive games using Python and Pygame, focusing on programming fundamentals and game mechanics. Students will learn Python syntax, control structures, and how to manage game graphics and sound. The course guides them through building classic arcade-style games and introduces multiplayer concepts. Emphasis is placed on debugging, iterative development, and enhancing games with creative features, providing a solid foundation in both programming and game design.",
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
        subtitle: "Design and code interactive, responsive websites",
        level: "Beginner",
        duration: "6 weeks (Mon-Fri, 1:00 PM – 4:00 PM)",
        format: "In-person & Online",
        description:
          "Learn HTML, CSS, and JavaScript to build responsive, interactive web pages with real-world applications. Students will create personal portfolio websites, interactive galleries, and responsive landing pages. The course covers web structure, styling, and adding interactivity, as well as best practices for debugging and using developer tools. By the end, students will have a strong grasp of web technologies and the ability to create their own websites from scratch.",
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
        subtitle: "Explore Arduino, sensors, and electronics through projects",
        level: "Beginner",
        duration: "6 weeks (Mon-Fri, 1:00 PM – 4:00 PM)",
        format: "In-person & Online",
        description:
          "Explore microcontrollers and sensors using Arduino kits to build simple automated devices and learn electronics basics. Students will gain hands-on experience with circuits, sensors, and actuators, learning how to program Arduino boards to respond to environmental inputs. Projects include building automated plant watering systems and motion-activated alarms, fostering troubleshooting skills and an understanding of how software and hardware interact.",
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
        subtitle: "Develop modern web apps with React, Next.js, and APIs",
        level: "Intermediate",
        duration: "8 weeks (Mon-Fri, 9:00 AM – 1:00 PM)",
        format: "In-person & Online",
        description:
          "Build scalable full-stack web applications using React, Next.js, and Tailwind CSS, with backend API integration. Students will learn to design, develop, and deploy modern web apps, covering both frontend and backend development. The course includes version control, deployment workflows, and best practices for building responsive, accessible, and performant websites. Real-world projects such as social media clones and e-commerce storefronts provide practical experience and portfolio pieces.",
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
        subtitle:
          "Create cross-platform mobile apps with React Native or Flutter",
        level: "Intermediate",
        duration: "8 weeks (Mon-Fri, 9:00 AM – 1:00 PM)",
        format: "In-person & Online",
        description:
          "Design and deploy cross-platform mobile apps using React Native or Flutter, focusing on UI/UX and app logic. Students will learn to create mobile applications that run on both iOS and Android, exploring user interface design, navigation, and state management. The course covers accessing device features like GPS and camera, as well as testing and preparing apps for app stores. By the end, students will have built several functional mobile apps.",
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
        subtitle: "Hands-on labs in cybersecurity and ethical hacking",
        level: "Intermediate",
        duration: "8 weeks (Mon-Fri, 9:00 AM – 1:00 PM)",
        format: "In-person & Online",
        description:
          "Learn core cybersecurity concepts and ethical hacking techniques through hands-on labs and penetration testing simulations. Students will explore network security, vulnerability assessment, and defensive coding practices. The course emphasizes the importance of ethical behavior and legal considerations in cybersecurity, providing practical skills in identifying and mitigating security threats. Realistic scenarios and labs help students understand the challenges and responsibilities of cybersecurity professionals.",
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
        subtitle: "Intro to data science and machine learning with Python",
        level: "Intermediate",
        duration: "8 weeks (Mon-Fri, 9:00 AM – 1:00 PM)",
        format: "In-person & Online",
        description:
          "Explore data science workflows and build machine learning models using Python and popular libraries like Scikit-learn and TensorFlow. Students will learn to manipulate and visualize data, understand key algorithms, and apply AI techniques to solve real-world problems. The course includes hands-on projects such as image classification and sentiment analysis, providing a strong foundation in both the theory and practice of machine learning.",
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
        subtitle: "Learn game design principles and Unity basics",
        level: "Beginner",
        duration: "2-day weekend intensive (Sat-Sun, 10:00 AM – 3:00 PM)",
        format: "Online only",
        description:
          "Learn the essentials of game design, including level design, storytelling, and mechanics using game engines like Unity. This intensive workshop introduces students to the process of designing engaging games, from concept to prototype. Participants will explore scripting basic game logic and testing gameplay for fun and fairness, gaining insight into the creative and technical aspects of game development.",
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
        subtitle: "Build IoT devices and automate with microcontrollers",
        level: "Beginner",
        duration: "2-day weekend intensive (Sat-Sun, 10:00 AM – 3:00 PM)",
        format: "Online only",
        description:
          "Build connected devices using microcontrollers and cloud services, focusing on automation and sensor integration. Students will learn to program IoT devices, integrate sensors, and exchange data with cloud platforms. The workshop emphasizes collaborative project management and provides hands-on experience with the latest trends in robotics and the Internet of Things.",
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
        subtitle: "Analyze and visualize data with Python",
        level: "Beginner",
        duration: "2-day weekend intensive (Sat-Sun, 10:00 AM – 3:00 PM)",
        format: "Online only",
        description:
          "Analyze datasets and visualize data using Python, applying basic statistics and exploratory analysis. Students will learn to clean and prepare data, create effective visualizations, and perform statistical analysis. The workshop culminates in a hands-on data project, giving participants practical experience in the data science workflow.",
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
        subtitle: "Design accessible, user-friendly websites",
        level: "Beginner",
        duration: "2-day weekend intensive (Sat-Sun, 10:00 AM – 3:00 PM)",
        format: "Online only",
        description:
          "Create inclusive and accessible websites by learning accessibility standards, user testing, and best design practices. Students will explore the principles of inclusive design, implement accessibility features in HTML and CSS, and conduct user testing to gather feedback. The workshop provides practical skills for building websites that are usable by everyone, regardless of ability.",
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
