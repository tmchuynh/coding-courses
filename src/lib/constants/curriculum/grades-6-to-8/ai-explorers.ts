import { CourseSchedule } from "@/lib/interfaces/courses";

export const aiExplorers: CourseSchedule[] = [
  {
    week: 1,
    title: "What is AI? Introduction to Machine Learning",
    focus:
      "Defining Artificial Intelligence (AI) and Machine Learning (ML). Examples of AI in everyday life. Types of ML: Supervised, Unsupervised, Reinforcement Learning (overview). Ethical considerations: What is fairness in AI?",
    outcomes:
      "Students will understand the basic concepts of AI and ML, identify AI applications, and begin discussing ethical implications.",
    project: "AI Concept Map & App Hunt",
    projectDescription:
      "Create a digital concept map illustrating key AI terms (AI, ML, Supervised/Unsupervised Learning). Identify and list 3-5 real-world AI applications you use or see daily, briefly explaining their function.",
  },
  {
    week: 2,
    title: "Data, Data, Everywhere! The Fuel for AI",
    focus:
      "Understanding the importance of data in ML. Types of data (images, text, numbers). Introduction to datasets. Data collection and potential biases in data. Activity: Exploring a simple dataset.",
    outcomes:
      "Students will recognize the role of data in training AI models and understand how biases in data can affect AI outcomes.",
    project: "Dataset Detective",
    projectDescription:
      "Examine a provided simple dataset (e.g., a list of movie ratings or animal characteristics). Identify 2-3 patterns in the data and discuss at least one potential bias, explaining how it might affect an AI model trained on this data.",
  },
  {
    week: 3,
    title: "Image Recognition: Teaching Computers to See",
    focus:
      "Introduction to computer vision. How machines 'see' images (pixels). Training a simple image classifier using a visual tool (e.g., Teachable Machine). Understanding training, validation, and testing.",
    outcomes:
      "Students will train a basic image recognition model and understand the process of teaching a computer to classify images.",
    project: "First Image Classifier",
    projectDescription:
      "Using Teachable Machine, collect at least 20 images for two distinct visual categories (e.g., cats vs. dogs, day vs. night). Train an image classification model and test its accuracy with new, unseen images from each category.",
  },
  {
    week: 4,
    title: "Text Recognition & Natural Language Processing (NLP) Basics",
    focus:
      "Introduction to NLP. How computers understand text. Sentiment analysis concepts. Training a simple text classifier (e.g., positive/negative reviews) using a visual tool.",
    outcomes:
      "Students will train a basic text classification model and understand how AI can interpret and categorize text.",
    project: "Sentiment Text Classifier",
    projectDescription:
      "Using a tool like Teachable Machine (text project), create a model to classify short text snippets (e.g., movie comments, product reviews) as 'positive' or 'negative'. Train with 10-15 examples for each and test with new phrases.",
  },
  {
    week: 5,
    title: "Meet the Neural Network: Brains of AI",
    focus:
      "Simplified explanation of neural networks (neurons, layers, connections). Visualizing a simple neural network. How neural networks learn (weights and biases - conceptual).",
    outcomes:
      "Students will gain a conceptual understanding of how neural networks are structured and how they learn.",
    project: "Neural Network Blueprint",
    projectDescription:
      "Draw a clear diagram of a simple feedforward neural network with labeled input neurons (e.g., 'image pixel 1', 'image pixel 2'), one hidden layer, and output neurons (e.g., 'is_cat', 'is_dog'). Briefly explain how information might flow from input to output.",
  },
  {
    week: 6,
    title: "Building with AI: Project Brainstorm & Simple Tools",
    focus:
      "Exploring simple AI-powered tools and platforms (e.g., AI art generators, simple chatbot builders). Brainstorming project ideas that could use AI. Focus on ethical use and limitations.",
    outcomes:
      "Students will explore various AI tools and start planning a small project that incorporates AI concepts.",
    project: "AI Project Proposal",
    projectDescription:
      "Develop a detailed proposal for a simple AI project you will build in Weeks 10-11. Your proposal should state the problem, the AI technique (e.g., image/text classification), the tool (e.g., Teachable Machine), data collection plan, and potential ethical considerations.",
  },
  {
    week: 7,
    title: "AI in Games: Smart Characters & Adaptive Challenges",
    focus:
      "How AI is used in video games (e.g., enemy behavior, non-player characters (NPCs), procedural content generation). Discussing adaptive difficulty. Simple game AI concepts.",
    outcomes:
      "Students will understand the role of AI in creating engaging game experiences and explore basic game AI principles.",
    project: "AI Game Concept",
    projectDescription:
      "Design a concept for a simple game (e.g., a maze game, a platformer). Describe one AI-driven character (enemy or helper) or an adaptive AI feature (e.g., difficulty adjustment). Sketch its behavior or logic flow.",
  },
  {
    week: 8,
    title: "AI for Good: Solving Real-World Problems",
    focus:
      "Exploring applications of AI in fields like healthcare, environmental science, and accessibility. Case studies of AI making a positive impact. Discussing responsible AI development.",
    outcomes:
      "Students will learn about beneficial applications of AI and consider the societal impact of AI technologies.",
    project: "AI for Good Case Study",
    projectDescription:
      "Research one specific AI application that is used for social good (e.g., in healthcare, environment, accessibility). Prepare a 3-5 slide presentation explaining the problem, how AI helps, and its impact.",
  },
  {
    week: 9,
    title: "The Challenge of Bias in AI",
    focus:
      "Deeper dive into how bias can enter AI systems (data, algorithms, human oversight). Consequences of biased AI. Strategies for mitigating bias. Importance of diverse teams in AI development.",
    outcomes:
      "Students will critically analyze how bias affects AI and discuss ways to promote fairness and equity in AI systems.",
    project: "AI Bias Mitigation Plan",
    projectDescription:
      "Identify one example of AI bias discussed in class or from research. Propose 2-3 concrete strategies to mitigate this bias in an AI system. Present your findings as a short written report or a 2-3 slide presentation.",
  },
  {
    week: 10,
    title: "AI Project Workshop: Building Your Idea - Part 1",
    focus:
      "Students begin working on their chosen AI project using visual tools or simple coding environments. Focus on implementing a core AI feature (e.g., image classification, text generation, simple decision-making).",
    outcomes:
      "Students will start developing their AI-related project, applying concepts learned in previous weeks.",
    project: "AI Project: Core Model",
    projectDescription:
      "Begin building your approved AI project from Week 6. Focus on training your core AI model (e.g., in Teachable Machine) and implementing the most basic interaction with it (e.g., testing the model with inputs). Document your model's initial performance.",
  },
  {
    week: 11,
    title: "AI Project Workshop: Testing & Refining - Part 2",
    focus:
      "Continued project development. Testing the AI component of their project. Debugging and refining based on results. Considering user experience and ethical implications of their project.",
    outcomes:
      "Students will test and iterate on their AI projects, focusing on functionality and responsible design.",
    project: "AI Project: Integration & Test",
    projectDescription:
      "Continue your AI project by integrating your trained model into a simple application or interface (e.g., using Scratch, p5.js with Teachable Machine, or the tool's built-in testing). Test thoroughly, debug, and refine based on outcomes. Document changes and improvements.",
  },
  {
    week: 12,
    title: "AI Explorers Showcase: Presenting Your Creations",
    focus:
      "Students finalize and present their AI projects. Explaining the AI concepts used, challenges faced, and what they learned. Discussion on the future of AI and continued learning.",
    outcomes:
      "Students will showcase their AI projects, articulate their learning, and reflect on the future possibilities of AI.",
    project: "AI Explorers Showcase",
    projectDescription:
      "Deliver a 5-7 minute presentation of your completed AI project. Demonstrate its functionality, explain the AI concepts used, discuss challenges faced, what you learned, and one ethical consideration related to your project.",
  },
];
