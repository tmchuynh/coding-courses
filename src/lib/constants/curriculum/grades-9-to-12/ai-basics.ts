import { CourseSchedule } from "@/lib/interfaces/courses";

export const aiBasics: CourseSchedule[] = [
  {
    week: 1,
    title: "What is Artificial Intelligence?",
    focus:
      "Defining AI, Machine Learning, Deep Learning. History of AI. Types of AI (ANI, AGI, ASI). Real-world applications.",
    outcomes: "Understand AI concepts & apps.",
    project: "Research AI Applications",
    projectDescription:
      "Students will research and select three distinct real-world examples of AI in action (e.g., recommendation systems, virtual assistants, medical diagnosis tools). They will prepare a short presentation or written summary for each, identifying the type of AI involved (e.g., ANI, machine learning sub-field).",
  },
  {
    week: 2,
    title: "Introduction to Machine Learning Concepts",
    focus:
      "Supervised, unsupervised, and reinforcement learning. Datasets, features, and labels. Training and testing models.",
    outcomes: "Grasp ML fundamentals.",
    project: "Analyze Dataset for ML",
    projectDescription:
      "Students will search for a simple, publicly available dataset (e.g., Iris dataset, Titanic dataset). They will then analyze its structure, identify the different features (columns), and determine which column(s) could serve as a label (target variable) for a supervised machine learning task.",
  },
  {
    week: 3,
    title: "Supervised Learning - Classification",
    focus:
      "Understanding classification problems. Introduction to algorithms like K-Nearest Neighbors (KNN) or Decision Trees. Using pre-built models.",
    outcomes: "Use supervised classification.",
    project: "Train KNN Classifier",
    projectDescription:
      "Using a user-friendly online tool (like Google's Teachable Machine or a simple Scikit-learn example in Colab), students will train a K-Nearest Neighbors (KNN) or Decision Tree classifier on a small, prepared dataset to classify items into predefined categories.",
  },
  {
    week: 4,
    title: "Supervised Learning - Regression",
    focus:
      "Understanding regression problems. Introduction to linear regression. Predicting continuous values.",
    outcomes: "Perform regression analysis.",
    project: "Linear Regression Task",
    projectDescription:
      "Students will use spreadsheet software (like Google Sheets or Excel) or write a simple Python script (using libraries like NumPy/SciPy) to perform linear regression on a dataset with two continuous variables (e.g., predicting house price based on size), and visualize the regression line.",
  },
  {
    week: 5,
    title: "Unsupervised Learning - Clustering",
    focus:
      "Understanding clustering problems. Introduction to algorithms like K-Means. Grouping similar data points.",
    outcomes: "Apply clustering algorithms.",
    project: "K-Means Clustering Task",
    projectDescription:
      "Using an online visualization tool for K-Means clustering or a simple programming example, students will apply the K-Means algorithm to a small dataset to group data points into a predefined number of clusters. They will then attempt to interpret the meaning or characteristics of these clusters.",
  },
  {
    week: 6,
    title: "Introduction to Neural Networks",
    focus:
      "Basic concepts of neural networks: neurons, layers, activation functions. How neural networks learn.",
    outcomes: "Understand neural net structure.",
    project: "Diagram Simple Neural Net",
    projectDescription:
      "Students will draw a clear diagram illustrating a simple feedforward neural network. The diagram should label the input layer (with a few input neurons), a single hidden layer (with a few neurons), and an output layer (with one or more neurons), showing connections between layers.",
  },
  {
    week: 7,
    title: "AI in Image Recognition",
    focus:
      "How AI 'sees'. Using pre-trained models for image classification and object detection (e.g., Teachable Machine).",
    outcomes: "Use AI for image recognition.",
    project: "Train Image Classifier (TM)",
    projectDescription:
      "Students will use Google's Teachable Machine to collect image samples for two different categories of objects (e.g., apples vs. oranges, cats vs. dogs). They will then train an image classification model and test its ability to distinguish between the two object types.",
  },
  {
    week: 8,
    title: "AI in Natural Language Processing (NLP)",
    focus:
      "How AI understands text. Sentiment analysis, text generation basics. Introduction to chatbots.",
    outcomes: "Understand basic NLP.",
    project: "Sentiment Analysis Task",
    projectDescription:
      "Students will find and use a free online sentiment analysis tool. They will input at least five different sentences (ranging from positive to negative to neutral) and record the sentiment classification provided by the tool for each sentence.",
  },
  {
    week: 9,
    title: "Building a Simple Chatbot",
    focus:
      "Designing and implementing a rule-based or simple NLP-powered chatbot using available tools or libraries.",
    outcomes: "Design simple chatbots.",
    project: "Design Rule-Based Chatbot",
    projectDescription:
      "Students will design the logic for a simple rule-based chatbot. They will create a flowchart that outlines the conversation flow, including how the chatbot responds to 3-5 specific user inputs or questions based on predefined rules.",
  },
  {
    week: 10,
    title: "Prompt Engineering and Generative AI",
    focus:
      "Understanding how to effectively interact with large language models (LLMs) and generative AI tools for text and image generation.",
    outcomes: "Use prompt engineering with LLMs.",
    project: "Experiment with LLM Prompts",
    projectDescription:
      "Students will interact with a publicly available large language model (like ChatGPT or Google Bard). They will craft three distinct prompts designed to elicit different types of creative text responses (e.g., a poem, a short story, a marketing slogan) and analyze the results.",
  },
  {
    week: 11,
    title: "Ethics and Responsibility in AI",
    focus:
      "Discussing bias in AI, fairness, transparency, and the societal impact of AI technologies.",
    outcomes: "Understand AI ethics.",
    project: "Discuss AI Ethics Issue",
    projectDescription:
      "Students will choose one AI application discussed in class or researched independently and write a short paragraph (100-150 words) identifying and discussing a potential ethical concern associated with it (e.g., bias in facial recognition, job displacement due to automation).",
  },
  {
    week: 12,
    title: "AI Project & Future of AI",
    focus:
      "Students work on a small AI project applying learned concepts. Discussion on emerging AI trends and career paths.",
    outcomes: "Build simple AI project.",
    project: "Simple AI App (TM & Scratch)",
    projectDescription:
      "Students will create a small, interactive AI project. This could involve training a model in Teachable Machine (for images, sounds, or poses) and then exporting it to a platform like Scratch or p5.js to create a simple game or interactive experience based on the AI model's predictions.",
  },
];
