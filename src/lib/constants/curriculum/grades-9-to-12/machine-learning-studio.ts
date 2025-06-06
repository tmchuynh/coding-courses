import { CourseSchedule } from "@/lib/interfaces/courses";

export const machineLearningStudio: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Machine Learning Workflow & Python for ML",
    focus:
      "Overview of the ML lifecycle. Setting up Python environment (Jupyter, Colab). Key libraries: NumPy, Pandas, Matplotlib.",
    outcomes: "Setup Python ML environment.",
    project: "Python ML Env & Data Load",
    projectDescription:
      "Students will configure their Python environment for machine learning (e.g., Anaconda, Google Colab) and practice using NumPy for numerical operations and Pandas to load a CSV dataset into a DataFrame, performing basic inspection (head, describe, info).",
  },
  {
    week: 2,
    title: "Data Collection and Preprocessing",
    focus:
      "Sources of data. Data cleaning techniques (handling missing values, outliers). Data transformation and feature scaling.",
    outcomes: "Preprocess data: clean, transform.",
    project: "Data Cleaning Practice",
    projectDescription:
      "Using a provided dataset, students will identify and handle missing values (e.g., by imputation or removal) and detect/address outliers in numerical features using techniques like Z-score or IQR, preparing the data for modeling.",
  },
  {
    week: 3,
    title: "Exploratory Data Analysis (EDA) and Visualization",
    focus:
      "Using Pandas for data manipulation. Visualizing data with Matplotlib and Seaborn to uncover patterns and insights.",
    outcomes: "Perform EDA with visualizations.",
    project: "EDA & Visualization",
    projectDescription:
      "Students will perform EDA on a dataset. This includes calculating descriptive statistics (mean, median, standard deviation) and creating various visualizations like histograms, box plots, and scatter plots using Matplotlib and Seaborn to understand data distributions and relationships.",
  },
  {
    week: 4,
    title: "Supervised Learning: Regression Models",
    focus:
      "Linear Regression, Polynomial Regression. Model evaluation metrics (MSE, R-squared). Implementing models with Scikit-learn.",
    outcomes: "Build/evaluate regression models.",
    project: "Linear Regression Model",
    projectDescription:
      "Students will implement a linear regression model using Scikit-learn to predict a continuous target variable from a sample dataset. They will then evaluate the model's performance using metrics like Mean Squared Error (MSE) and R-squared.",
  },
  {
    week: 5,
    title: "Supervised Learning: Classification Models",
    focus:
      "Logistic Regression, K-Nearest Neighbors (KNN), Support Vector Machines (SVM). Evaluation metrics (accuracy, precision, recall, F1-score).",
    outcomes: "Build/evaluate classification models.",
    project: "Classification Model (KNN/Logistic)",
    projectDescription:
      "Students will choose either K-Nearest Neighbors (KNN) or Logistic Regression to build a classification model on a labeled dataset. They will train the model and evaluate its performance using metrics such as accuracy, precision, recall, and F1-score, and interpret a confusion matrix.",
  },
  {
    week: 6,
    title: "Decision Trees and Random Forests",
    focus:
      "Understanding Decision Tree algorithms. Introduction to ensemble methods: Random Forests and their advantages.",
    outcomes: "Use tree-based ensemble models.",
    project: "Decision Tree & Random Forest",
    projectDescription:
      "Students will implement both a single Decision Tree classifier and a Random Forest classifier on the same dataset. They will compare the performance of these two models, noting the impact of ensemble learning on accuracy and robustness.",
  },
  {
    week: 7,
    title: "Unsupervised Learning: Clustering Algorithms",
    focus:
      "K-Means clustering, Hierarchical clustering. Evaluating clustering performance. Applications of clustering.",
    outcomes: "Apply clustering algorithms.",
    project: "K-Means Clustering",
    projectDescription:
      "Students will use the K-Means algorithm to group unlabeled data points into clusters. They will experiment with different numbers of clusters (k) and visualize the resulting clusters, possibly using dimensionality reduction if needed.",
  },
  {
    week: 8,
    title: "Dimensionality Reduction",
    focus:
      "Principal Component Analysis (PCA). Importance of dimensionality reduction. Visualizing high-dimensional data.",
    outcomes: "Perform dimensionality reduction.",
    project: "PCA Dimensionality Reduction",
    projectDescription:
      "Students will apply Principal Component Analysis (PCA) to a high-dimensional dataset to reduce its number of features while retaining most of the variance. They will then visualize the data in the reduced 2D or 3D space of principal components.",
  },
  {
    week: 9,
    title: "Introduction to Neural Networks with TensorFlow/Keras",
    focus:
      "Basic concepts of neural networks. Building simple neural networks for classification or regression using TensorFlow/Keras.",
    outcomes: "Build basic neural networks.",
    project: "Simple Neural Network (Keras)",
    projectDescription:
      "Using TensorFlow/Keras, students will define, compile, and train a simple feedforward neural network (e.g., with one or two hidden layers) for a binary or multi-class classification problem on a prepared dataset.",
  },
  {
    week: 10,
    title: "Model Evaluation and Hyperparameter Tuning",
    focus:
      "Cross-validation techniques. Grid search, random search for hyperparameter optimization. Overfitting and underfitting.",
    outcomes: "Optimize model hyperparameters.",
    project: "Hyperparameter Tuning",
    projectDescription:
      "Students will select one of the models learned previously (e.g., Random Forest, SVM) and use Scikit-learn's GridSearchCV or RandomizedSearchCV to find an optimal set of hyperparameters, aiming to improve model performance and avoid overfitting.",
  },
  {
    week: 11,
    title: "Working with Image Data (Intro to CNNs)",
    focus:
      "Basics of image processing. Introduction to Convolutional Neural Networks (CNNs) for image classification using pre-trained models.",
    outcomes: "Use CNNs for image tasks.",
    project: "Pre-trained CNN for Images",
    projectDescription:
      "Students will learn to load a pre-trained Convolutional Neural Network (CNN) model (e.g., VGG16, ResNet50 from Keras applications) and use it for transfer learning or feature extraction to classify images from a small, new dataset (e.g., cats vs. dogs).",
  },
  {
    week: 12,
    title: "ML Project: End-to-End Application",
    focus:
      "Students work on an end-to-end machine learning project, from data collection and preprocessing to model training, evaluation, and interpretation.",
    outcomes: "Execute full ML project lifecycle.",
    project: "End-to-End ML Project",
    projectDescription:
      "For their final project, students will undertake a complete machine learning task. This involves selecting a dataset (e.g., for house price prediction, spam detection, or sentiment analysis), performing all necessary preprocessing, training multiple models, evaluating them, and interpreting the results to draw conclusions.",
  },
];
