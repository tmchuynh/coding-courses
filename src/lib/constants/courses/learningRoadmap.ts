import { Roadmap } from "@/lib/interfaces/courses";

export const learningRoadmap: Roadmap[] = [
  {
    gradeGroup: "K to 2",
    roadmaps: [
      {
        title: "Intro to Computational Thinking",
        description:
          "This roadmap introduces young learners to the foundational concepts of computational thinking through playful, hands-on activities. Students engage in logic games, pattern recognition, and tactile exploration with simple robots, helping them develop early problem-solving skills, understand cause and effect, and build confidence with technology in a supportive environment.",
        courses: [
          {
            courseName: "Code and Play",
          },
          {
            courseName: "Pattern Makers",
          },
          {
            courseName: "Tinker Time",
          },
          {
            courseName: "Bitsbox and Bots",
          },
        ],
        price: { online: 149 * 4, inPerson: 179 * 4 }, // 4 courses
      },
      {
        title: "Story-Based Coding",
        description:
          "Students learn to code by weaving stories, solving puzzles, and creating interactive projects. This roadmap emphasizes narrative logic, sequencing, and creative expression, using tools like Scratch Jr and physical logic puzzles. Learners build collaboration skills and gain an understanding of programming flow by bringing their own stories and ideas to life through code.",
        courses: [
          {
            courseName: "Code Through Stories",
          },
          {
            courseName: "Digital Discovery Lab",
          },
          {
            courseName: "Mini Makers",
          },
        ],
        price: { online: 149 * 3, inPerson: 179 * 3 }, // 3 courses
      },
      {
        title: "AI & Circuits for Early Learners",
        description:
          "Young students are introduced to the basics of artificial intelligence and electronics in a playful, age-appropriate way. Through interactive stories with AI tools and hands-on circuit building, learners explore concepts like voice and image recognition, input/output logic, and basic electronics, fostering curiosity and early digital literacy.",
        courses: [
          {
            courseName: "AI Storytellers",
          },
          {
            courseName: "Sensory Circuits Lab",
          },
        ],
        price: { online: 149 * 2, inPerson: 179 * 2 }, // 2 courses
      },
    ],
  },
  {
    gradeGroup: "3 to 5",
    roadmaps: [
      {
        title: "Creative Coding Path",
        description:
          "This roadmap empowers students to unleash their creativity by building games, web pages, and interactive applications. Learners gain a strong foundation in coding concepts, web design, and user interaction, while developing problem-solving skills and confidence to experiment with technology in fun, meaningful ways.",
        courses: [
          {
            courseName: "Game Builders Club",
          },
          {
            courseName: "Web Wonders",
          },
          {
            courseName: "App Explorers",
          },
        ],
        price: { online: 199 * 3, inPerson: 229 * 3 }, // 3 courses
      },
      {
        title: "Creative Expression Through Code",
        description:
          "Students explore the intersection of art, music, and storytelling with programming. By creating generative art, composing music, and building interactive digital stories, learners discover how code can be a powerful tool for creative expression, mathematical thinking, and bringing their unique ideas to life.",
        courses: [
          {
            courseName: "Creative Code with Art",
          },
          {
            courseName: "Code for Music",
          },
          {
            courseName: "Code a Storybook",
          },
        ],
        price: { online: 199 * 3, inPerson: 229 * 3 }, // 3 courses
      },
      {
        title: "AI & Hardware Exploration",
        description:
          "This roadmap invites students to experiment with artificial intelligence and hardware projects. Through hands-on activities with AI tools, microcontrollers, and sensors, learners develop prototyping skills, explore ethical questions, and gain experience integrating software and hardware to invent new solutions.",
        courses: [
          {
            courseName: "AI Playground",
          },
          {
            courseName: "Inventing Workshop",
          },
        ],
        price: { online: 199 * 2, inPerson: 229 * 2 }, // 2 courses
      },
    ],
  },
  {
    gradeGroup: "6 to 8",
    roadmaps: [
      {
        title: "Web Dev and App Creation",
        description:
          "Students dive deeper into web development and app creation, learning modern tools and frameworks to build responsive websites and interactive applications. This roadmap covers frontend and backend concepts, user interface design, and dynamic web experiences, preparing learners for more advanced programming challenges.",
        courses: [
          {
            courseName: "Frontend Fundamentals",
          },
          {
            courseName: "Interactive Elements",
          },
          {
            courseName: "UX UI Design",
          },
          {
            courseName: "Web Dev and App Creation",
          },
        ],
        price: { online: 249 * 4, inPerson: 279 * 4 }, // 4 courses
      },
      {
        title: "Games & Simulations",
        description:
          "Learners design and build their own games and simulations, applying programming logic to model real-world systems and create engaging user experiences. This roadmap covers game mechanics, physics engines, and debugging, encouraging students to think critically and creatively while developing technical skills.",
        courses: [
          {
            courseName: "Game Studio",
          },
          {
            courseName: "Simulators and Physics",
          },
          {
            courseName: "Unity Game Dev 6 to 8",
          },
        ],
        price: { online: 249 * 3, inPerson: 279 * 3 }, // 3 courses
      },
      {
        title: "AI & Smart Devices",
        description:
          "Students explore the world of artificial intelligence, machine learning, and the Internet of Things (IoT). Through practical projects, they build simple ML models, create smart devices with sensors, and learn about automation and ethical considerations, gaining hands-on experience with emerging technologies.",
        courses: [
          {
            courseName: "AI Explorers",
          },
          {
            courseName: "Smart Devices Lab",
          },
        ],
        price: { online: 249 * 2, inPerson: 279 * 2 }, // 2 courses
      },
    ],
  },
  {
    gradeGroup: "9 to 12",
    roadmaps: [
      {
        title: "Full Stack Web Dev Track",
        description:
          "This comprehensive roadmap guides students through the entire web development process, from designing responsive frontends to building robust backends with APIs and databases. Learners gain practical experience with modern frameworks, authentication, deployment, and collaborative project management, preparing them for real-world software development.",
        courses: [
          {
            courseName: "Interactive Elements",
          },
          {
            courseName: "Frontend Fundamentals",
          },
          {
            courseName: "Full Stack Foundations",
          },
          {
            courseName: "Application Programming Interfaces and Integrations",
          },
          {
            courseName: "Database Basics",
          },
          {
            courseName: "Capstone Project",
          },
          {
            courseName: "Advanced Web Dev",
          },
        ],
        price: { online: 349 * 7, inPerson: 399 * 7 }, // 7 courses
      },
      {
        title: "Game Design",
        description:
          "Students master advanced game development techniques, including 2D and 3D game creation, animation, and multiplayer design. This roadmap covers the full game development lifecycle, from prototyping and physics to user interface and publishing, enabling learners to build portfolio-ready projects.",
        courses: [
          {
            courseName: "Animation and Game Dev",
          },
          {
            courseName: "Game Design and Development",
          },
          {
            courseName: "Unity Game Dev 9 to 12",
          },
        ],
        price: { online: 349 * 3, inPerson: 399 * 3 }, // 3 courses
      },
      {
        title: "CS Prep & Career Pathway",
        description:
          "Focused on preparing students for computer science careers and higher education, this roadmap covers algorithms, data structures, and problem-solving strategies. Learners gain real-world experience through internships and mentorship, building strong resumes and professional networks for future success.",
        courses: [
          {
            courseName: "Algorithms",
          },
          {
            courseName: "Capstone Project",
          },
          {
            courseName: "Internship Program",
          },
          {
            courseName: "Capstone Accelerator",
          },
        ],
        price: { online: 349 * 4, inPerson: 399 * 4 }, // 4 courses
      },
      {
        title: "Startup & Product Track",
        description:
          "Students learn the essentials of entrepreneurship and product development, working in teams to take ideas from concept to launch. This roadmap covers agile methods, business skills, pitching, and market validation, empowering learners to innovate and lead in the tech industry.",
        courses: [
          {
            courseName: "Startup Studio",
          },
          {
            courseName: "Startup Accelerator",
          },
          {
            courseName: "Entrepreneurship Basics",
          },
          {
            courseName: "Capstone Accelerator",
          },
        ],
        price: { online: 349 * 4, inPerson: 399 * 4 }, // 4 courses
      },
      {
        title: "AI & Robotics Engineering",
        description:
          "This advanced roadmap delves into machine learning, robotics, and autonomous systems. Students design, build, and program intelligent robots, develop ML models, and prepare for competitions, gaining deep technical expertise and hands-on engineering experience.",
        courses: [
          {
            courseName: "AI Basics",
          },
          {
            courseName: "AI and Robotics Introduction",
          },
          {
            courseName: "Machine Learning Studio",
          },
          {
            courseName: "Robotics Engineering",
          },
        ],
        price: { online: 349 * 4, inPerson: 399 * 4 }, // 4 courses
      },
    ],
  },
];
