import { CourseSchedule } from "@/lib/interfaces/courses";

export const aiAndRoboticsIntroduction: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to AI, Robotics, and Their Intersection",
    focus:
      "Defining AI and Robotics. Exploring how AI enhances robotic capabilities. Real-world examples of AI-powered robots.",
    outcomes: "Understand AI/robotics basics.",
    project: "Research AI Robot",
    projectDescription:
      "Students will research a specific real-world robot that utilizes AI (e.g., autonomous vacuum, delivery drone, warehouse robot). They will prepare a short presentation identifying its robotic hardware (sensors, actuators) and the AI techniques it employs (e.g., navigation, object recognition).",
  },
  {
    week: 2,
    title: "Robotics Fundamentals & Microcontroller Programming",
    focus:
      "Basic robot components (sensors, actuators, chassis). Introduction to a robotics platform (e.g., Arduino-based robot) and its programming.",
    outcomes: "Program robot microcontroller.",
    project: "Robot LED & Motor Control",
    projectDescription:
      "Using an Arduino-based (or similar) robot kit, students will write a program to make an on-board LED blink. They will then extend this to control a motor, making it run forward and backward for short durations, demonstrating basic hardware control.",
  },
  {
    week: 3,
    title: "Sensors for Perception in Robotics",
    focus:
      "Using sensors (ultrasonic, IR, camera basics) for environmental perception. Reading and interpreting sensor data.",
    outcomes: "Use sensors for perception.",
    project: "Robot Obstacle Detection",
    projectDescription:
      "Students will interface an ultrasonic distance sensor with their robot. They will write a program that continuously measures the distance to an object in front of the robot and makes the robot stop if an obstacle is detected within a certain range.",
  },
  {
    week: 4,
    title: "Introduction to Machine Learning for Robotics",
    focus:
      "Overview of supervised and unsupervised learning. How ML can be used for robot decision-making and pattern recognition.",
    outcomes: "Learn ML basics for robotics.",
    project: "Collect Sensor Dataset",
    projectDescription:
      "Using a light sensor (or another simple sensor) on their robot, students will collect a small dataset of readings under two distinct environmental conditions (e.g., 'bright room' vs. 'dim room', or 'on black surface' vs. 'on white surface'). This data will be manually labeled.",
  },
  {
    week: 5,
    title: "Computer Vision Basics for Robots",
    focus:
      "Introduction to image processing concepts. Using a camera with a microcontroller (e.g., Raspberry Pi, ESP32-CAM). Simple object detection/color tracking.",
    outcomes: "Use camera for basic CV.",
    project: "Robot Camera Color Detect",
    projectDescription:
      "If using a camera-equipped platform (like Raspberry Pi with a camera module or ESP32-CAM), students will write a basic script (e.g., Python with OpenCV) to capture video frames and perform simple color detection, highlighting or identifying objects of a specific color in the camera's view.",
  },
  {
    week: 6,
    title:
      "Training Simple ML Models for Robot Tasks (e.g., Teachable Machine)",
    focus:
      "Using tools like Teachable Machine to train custom image or sound classification models for robotic interaction.",
    outcomes: "Train simple ML model (TM).",
    project: "Train Gesture Classifier (TM)",
    projectDescription:
      "Students will use Google's Teachable Machine to collect image samples of two different hand gestures (e.g., 'open hand' vs. 'closed fist'). They will train an image classification model on this data and test its ability to recognize the gestures.",
  },
  {
    week: 7,
    title: "Integrating ML Models with a Robot",
    focus:
      "Deploying a simple ML model onto the robot. Making the robot react based on model predictions (e.g., follow a colored object).",
    outcomes: "Integrate ML model with robot.",
    project: "Integrate TM Model with Robot",
    projectDescription:
      "Students will attempt to integrate the model trained in Teachable Machine (or a similar simple model) with their robot. For example, if using a platform that supports Teachable Machine export (like micro:bit or some Arduino setups), the robot could be programmed to move forward on 'open hand' and stop on 'closed fist'.",
  },
  {
    week: 8,
    title: "Path Planning and Navigation Basics",
    focus:
      "Introduction to robot navigation concepts. Simple algorithms for path planning (e.g., avoiding obstacles, reaching a target).",
    outcomes: "Understand robot navigation.",
    project: "Robot Path/Obstacle Nav",
    projectDescription:
      "Students will program their robot to follow a simple, predefined sequence of movements (e.g., forward, turn right, forward). Alternatively, they can enhance their obstacle avoidance from Week 3 to not just stop, but to turn and attempt to navigate around a single detected obstacle.",
  },
  {
    week: 9,
    title: "Reinforcement Learning Concepts in Robotics (Intro)",
    focus:
      "Basic idea of reinforcement learning: agents, environments, rewards. How robots can learn from trial and error (conceptual).",
    outcomes: "Grasp RL concepts for robots.",
    project: "Design Robot RL Scenario",
    projectDescription:
      "Students will conceptually design a simple reinforcement learning problem for their robot. This includes defining the agent (robot), environment, possible actions, states, and a reward function (e.g., robot learns to navigate a simple maze to find a 'reward' location). No implementation is required, focus is on design.",
  },
  {
    week: 10,
    title: "Speech Recognition and Voice Control for Robots",
    focus:
      "Using speech recognition modules or services to enable voice commands for controlling robot actions.",
    outcomes: "Implement basic voice control.",
    project: "Robot Voice Control",
    projectDescription:
      "If hardware allows (e.g., Raspberry Pi with microphone, or specific voice recognition modules for Arduino), students will attempt to implement basic voice control for their robot. This would involve recognizing simple commands like 'forward', 'stop', 'left', 'right' and triggering corresponding robot actions.",
  },
  {
    week: 11,
    title: "Ethical Considerations in AI and Robotics",
    focus:
      "Discussing the societal impact, safety, and ethical challenges of autonomous and intelligent robots.",
    outcomes: "Reflect on AI/robotics ethics.",
    project: "Essay on Robot Ethics",
    projectDescription:
      "Students will write a short essay (200-300 words) discussing the potential ethical implications, societal benefits, and challenges associated with the widespread adoption of a specific type of AI-powered robot, such as autonomous delivery robots or social companion robots.",
  },
  {
    week: 12,
    title: "Mini Project: Building an AI-Enhanced Robot",
    focus:
      "Students work on a project to build a robot that uses a simple AI technique (e.g., vision-based navigation, voice control, or learned behavior).",
    outcomes: "Build AI-enhanced robot.",
    project: "AI Robot Line/Object Follow",
    projectDescription:
      "For their final mini-project, students will integrate one of the AI concepts learned into a functional robotic task. Examples include: using a camera and simple CV to make the robot follow a brightly colored object, or using the Teachable Machine model to have the robot respond differently to two distinct visual cues.",
  },
];
