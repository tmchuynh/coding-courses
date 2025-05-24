import { CourseSchedule } from "@/lib/interfaces/courses";

export const roboticsEngineering: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Robotics and Microcontrollers",
    focus:
      "What is robotics? Components of a robot. Introduction to microcontrollers (e.g., Arduino, Raspberry Pi Pico). Basic electronics.",
    outcomes: "",
    project: "Microcontroller LED Blink",
    projectDescription:
      "Students will set up their chosen microcontroller (e.g., Arduino) with the necessary software (IDE) and successfully upload a simple program to make an on-board or externally connected LED blink, demonstrating basic hardware and software interaction.",
  },
  {
    week: 2,
    title: "Programming Microcontrollers (e.g., C++/MicroPython)",
    focus:
      "Setting up the development environment. Basic programming: digital I/O, analog input. Controlling LEDs and reading sensors.",
    outcomes: "",
    project: "Write a program to read a button press and control an LED.",
    projectDescription:
      "Students will write a microcontroller program that reads the state of a digital input (a push button). When the button is pressed, an LED connected to a digital output should turn on, and turn off when the button is released.",
  },
  {
    week: 3,
    title: "Sensors in Robotics - Part 1",
    focus:
      "Understanding different types of sensors: touch, light, ultrasonic distance sensors. Interfacing sensors with microcontrollers.",
    outcomes: "",
    project: "Interface an ultrasonic sensor and display distance readings.",
    projectDescription:
      "Students will connect an ultrasonic distance sensor to their microcontroller. They will write a program to trigger the sensor, read the echo pulse, calculate the distance to an object, and display this distance (e.g., via the Serial Monitor).",
  },
  {
    week: 4,
    title: "Sensors in Robotics - Part 2",
    focus:
      "Advanced sensors: infrared (IR) sensors for line following, Inertial Measurement Units (IMUs) for orientation.",
    outcomes: "",
    project:
      "Use an IR sensor to detect a line or an IMU to read orientation data.",
    projectDescription:
      "Students will choose to work with either an IR sensor to detect a black line on a white surface (or vice-versa) or an IMU to read basic orientation data (e.g., accelerometer or gyroscope readings) and output these values.",
  },
  {
    week: 5,
    title: "Actuators - Motors and Servos",
    focus:
      "Controlling DC motors (speed and direction) using motor drivers. Precise position control with servo motors.",
    outcomes: "",
    project:
      "Control a DC motor's speed and direction, and a servo motor's position.",
    projectDescription:
      "Students will interface a DC motor with a motor driver (e.g., L298N) and write code to control its speed (using PWM) and direction. They will also connect a servo motor and program it to sweep to specific angles.",
  },
  {
    week: 6,
    title: "Robot Chassis Design and Assembly",
    focus:
      "Principles of robot mechanics and chassis design. Assembling a basic mobile robot platform.",
    outcomes: "",
    project: "Assemble a basic 2-wheel drive robot chassis.",
    projectDescription:
      "Students will assemble a provided robot kit or construct a simple 2-wheel drive mobile robot chassis. This includes mounting motors, wheels, a caster/ball-bearing, and the microcontroller board.",
  },
  {
    week: 7,
    title: "Implementing Basic Robot Behaviors",
    focus:
      "Programming simple autonomous behaviors: moving forward, turning, stopping. Obstacle avoidance using sensors.",
    outcomes: "",
    project:
      "Program the robot to move forward, turn, and stop based on sensor input (e.g., stop if obstacle detected).",
    projectDescription:
      "Using their assembled robot, students will program it to perform basic movements: move forward for a set duration, turn left/right, and stop. They will then integrate an ultrasonic sensor to implement simple obstacle avoidance (stop or turn when an obstacle is detected).",
  },
  {
    week: 8,
    title: "Line Following Robots",
    focus:
      "Designing and programming a robot to follow a line using IR or color sensors. PID control basics for smooth movement.",
    outcomes: "",
    project:
      "Build and program a robot to follow a black line on a white surface.",
    projectDescription:
      "Students will equip their robot with IR or color sensors and write a program that enables it to autonomously follow a black line on a white surface. This may involve simple conditional logic or an introduction to PID control for smoother tracking.",
  },
  {
    week: 9,
    title: "Introduction to Robot Kinematics and Locomotion",
    focus:
      "Basic concepts of robot kinematics. Different types of robot locomotion (wheeled, legged, tracked).",
    outcomes: "",
    project: "Research and present on different robot locomotion mechanisms.",
    projectDescription:
      "Students will research various robot locomotion methods beyond simple wheeled robots (e.g., legged, tracked, aerial, aquatic). They will prepare a short presentation or report on the advantages, disadvantages, and applications of at least two different mechanisms.",
  },
  {
    week: 10,
    title: "Wireless Communication and Remote Control",
    focus:
      "Using Bluetooth or Wi-Fi modules for wireless communication. Implementing remote control for a robot.",
    outcomes: "",
    project:
      "Implement remote control of the robot using a Bluetooth module and a mobile app/PC interface.",
    projectDescription:
      "Students will integrate a Bluetooth module (e.g., HC-05/06) with their robot's microcontroller. They will then develop or use a simple mobile application or a PC-based interface to send commands wirelessly to control the robot's movements.",
  },
  {
    week: 11,
    title: "Introduction to Robot Vision (Optional)",
    focus:
      "Basic concepts of computer vision for robotics using a camera (e.g., with Raspberry Pi). Object detection or color tracking.",
    outcomes: "",
    project: "Use a camera with a Raspberry Pi to detect a specific color.",
    projectDescription:
      "If using a platform like Raspberry Pi, students will connect a camera and use a library like OpenCV to write a Python script that processes the camera feed to detect and track an object of a specific color.",
  },
  {
    week: 12,
    title: "Robotics Challenge/Project",
    focus:
      "Students work in teams on a robotics challenge or a project that integrates multiple concepts learned throughout the course (e.g., maze solving, object manipulation).",
    outcomes: "",
    project:
      "Design and build a robot to complete a specific challenge (e.g., navigate a simple maze).",
    projectDescription:
      "In teams, students will tackle a defined robotics challenge. This could be navigating a simple maze, picking up and moving a small object, or a sumo-robot competition. The project requires integrating sensors, actuators, and programming logic developed throughout the course.",
  },
];
