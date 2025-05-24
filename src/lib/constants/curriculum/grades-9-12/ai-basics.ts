import { CourseSchedule } from "@/lib/interfaces/courses";

export const aiBasics: CourseSchedule[] = [
  {
    week: 1,
    title: "What is Artificial Intelligence?",
    focus:
      "Defining AI, Machine Learning, Deep Learning. History of AI. Types of AI (ANI, AGI, ASI). Real-world applications.",
    outcomes:
      " Students will understand the basic concepts of AI and its applications.",
    project:
      "Research and present on three real-world applications of AI, explaining the type of AI used.",
    projectDescription:
      "Students will research and select three distinct real-world examples of AI in action (e.g., recommendation systems, virtual assistants, medical diagnosis tools). They will prepare a short presentation or written summary for each, identifying the type of AI involved (e.g., ANI, machine learning sub-field).",
  },
  {
    week: 2,
    title: "Introduction to Machine Learning Concepts",
    focus:
      "Supervised, unsupervised, and reinforcement learning. Datasets, features, and labels. Training and testing models.",
    outcomes:
      " Students will grasp the fundamental concepts of machine learning and how models are trained.",
    project:
      "Find a simple dataset and identify its features and potential labels for a supervised learning task.",
    projectDescription:
      "Students will search for a simple, publicly available dataset (e.g., Iris dataset, Titanic dataset). They will then analyze its structure, identify the different features (columns), and determine which column(s) could serve as a label (target variable) for a supervised machine learning task.",
  },
  {
    week: 3,
    title: "Supervised Learning - Classification",
    focus:
      "Understanding classification problems. Introduction to algorithms like K-Nearest Neighbors (KNN) or Decision Trees. Using pre-built models.",
    outcomes:
      " Students will learn how to classify data using supervised learning techniques.",
    project:
      "Use an online tool or simple library to train a K-Nearest Neighbors classifier on a small dataset.",
    projectDescription:
      "Using a user-friendly online tool (like Google's Teachable Machine or a simple Scikit-learn example in Colab), students will train a K-Nearest Neighbors (KNN) or Decision Tree classifier on a small, prepared dataset to classify items into predefined categories.",
  },
  {
    week: 4,
    title: "Supervised Learning - Regression",
    focus:
      "Understanding regression problems. Introduction to linear regression. Predicting continuous values.",
    outcomes:
      " Students will learn how to perform regression analysis to predict continuous outcomes.",
    project:
      "Use a spreadsheet or simple script to perform linear regression on a small dataset with two variables.",
    projectDescription:
      "Students will use spreadsheet software (like Google Sheets or Excel) or write a simple Python script (using libraries like NumPy/SciPy) to perform linear regression on a dataset with two continuous variables (e.g., predicting house price based on size), and visualize the regression line.",
  },
  {
    week: 5,
    title: "Unsupervised Learning - Clustering",
    focus:
      "Understanding clustering problems. Introduction to algorithms like K-Means. Grouping similar data points.",
    outcomes:
      " Students will learn how to apply clustering algorithms to group data without predefined labels.",
    project:
      "Apply K-Means clustering to a small dataset using an online tool and interpret the clusters.",
    projectDescription:
      "Using an online visualization tool for K-Means clustering or a simple programming example, students will apply the K-Means algorithm to a small dataset to group data points into a predefined number of clusters. They will then attempt to interpret the meaning or characteristics of these clusters.",
  },
  {
    week: 6,
    title: "Introduction to Neural Networks",
    focus:
      "Basic concepts of neural networks: neurons, layers, activation functions. How neural networks learn.",
    outcomes:
      " Students will understand the structure and function of neural networks.",
    project:
      "Draw a diagram of a simple neural network with 1 input layer, 1 hidden layer, and 1 output layer.",
    projectDescription:
      "Students will draw a clear diagram illustrating a simple feedforward neural network. The diagram should label the input layer (with a few input neurons), a single hidden layer (with a few neurons), and an output layer (with one or more neurons), showing connections between layers.",
  },
  {
    week: 7,
    title: "AI in Image Recognition",
    focus:
      "How AI 'sees'. Using pre-trained models for image classification and object detection (e.g., Teachable Machine).",
    outcomes:
      " Students will learn how AI can be used for image recognition tasks.",
    project:
      "Use Teachable Machine to train an image classification model for two distinct objects.",
    projectDescription:
      "Students will use Google's Teachable Machine to collect image samples for two different categories of objects (e.g., apples vs. oranges, cats vs. dogs). They will then train an image classification model and test its ability to distinguish between the two object types.",
  },
  {
    week: 8,
    title: "AI in Natural Language Processing (NLP)",
    focus:
      "How AI understands text. Sentiment analysis, text generation basics. Introduction to chatbots.",
    outcomes:
      " Students will understand basic NLP concepts and how AI can analyze and generate text.",
    project:
      "Use an online sentiment analysis tool to classify the sentiment of 5 different sentences.",
    projectDescription:
      "Students will find and use a free online sentiment analysis tool. They will input at least five different sentences (ranging from positive to negative to neutral) and record the sentiment classification provided by the tool for each sentence.",
  },
  {
    week: 9,
    title: "Building a Simple Chatbot",
    focus:
      "Designing and implementing a rule-based or simple NLP-powered chatbot using available tools or libraries.",
    outcomes: "",
    project:
      "Design a flowchart for a simple rule-based chatbot that can answer 3-5 specific questions.",
    projectDescription:
      "Students will design the logic for a simple rule-based chatbot. They will create a flowchart that outlines the conversation flow, including how the chatbot responds to 3-5 specific user inputs or questions based on predefined rules.",
  },
  {
    week: 10,
    title: "Prompt Engineering and Generative AI",
    focus:
      "Understanding how to effectively interact with large language models (LLMs) and generative AI tools for text and image generation.",
    outcomes: "",
    project:
      "Experiment with a large language model (e.g., ChatGPT, Bard) using 3 different prompts to generate creative text.",
    projectDescription:
      "Students will interact with a publicly available large language model (like ChatGPT or Google Bard). They will craft three distinct prompts designed to elicit different types of creative text responses (e.g., a poem, a short story, a marketing slogan) and analyze the results.",
  },
  {
    week: 11,
    title: "Ethics and Responsibility in AI",
    focus:
      "Discussing bias in AI, fairness, transparency, and the societal impact of AI technologies.",
    outcomes: "",
    project:
      "Write a short paragraph discussing a potential ethical issue in a specific AI application.",
    projectDescription:
      "Students will choose one AI application discussed in class or researched independently and write a short paragraph (100-150 words) identifying and discussing a potential ethical concern associated with it (e.g., bias in facial recognition, job displacement due to automation).",
  },
  {
    week: 12,
    title: "AI Project & Future of AI",
    focus:
      "Students work on a small AI project applying learned concepts. Discussion on emerging AI trends and career paths.",
    outcomes: "",
    project:
      "Create a simple AI application using a tool like Teachable Machine integrated with Scratch or a similar platform.",
    projectDescription:
      "Students will create a small, interactive AI project. This could involve training a model in Teachable Machine (for images, sounds, or poses) and then exporting it to a platform like Scratch or p5.js to create a simple game or interactive experience based on the AI model's predictions.",
  },
];
