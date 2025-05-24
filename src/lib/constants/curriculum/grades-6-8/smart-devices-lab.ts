import { CourseSchedule } from "@/lib/interfaces/courses";

export const smartDevicesLab: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Microcontrollers & Basic Electronics",
    focus:
      "What is a microcontroller (e.g., Arduino, ESP32)? Basic electronic components (LEDs, resistors, breadboards). Understanding circuits. Setting up the development environment (IDE).",
    outcomes:
      "Students will understand the role of microcontrollers, identify basic components, and be able to blink an LED using code.",
  },
  {
    week: 2,
    title: "Digital Inputs & Outputs: Buttons and More LEDs",
    focus:
      "Understanding digital signals (HIGH/LOW). Using buttons as digital inputs. Controlling multiple LEDs. Introduction to basic programming logic (if statements) for input-based output.",
    outcomes:
      "Students will be able to read button presses and control LEDs based on input, creating simple interactive circuits.",
  },
  {
    week: 3,
    title: "Analog Inputs: Reading Sensors",
    focus:
      "Understanding analog signals. Reading analog sensors (e.g., potentiometer, photoresistor/light sensor). Mapping analog values to control outputs (e.g., LED brightness).",
    outcomes:
      "Students will be able to read data from analog sensors and use it to control outputs dynamically.",
  },
  {
    week: 4,
    title: "Working with Motors & Actuators",
    focus:
      "Introduction to DC motors and servo motors. Controlling motor speed and direction. Using servo motors for precise positioning. Understanding motor drivers if needed.",
    outcomes:
      "Students will be able to control the movement of DC motors and the position of servo motors using their microcontroller.",
  },
  {
    week: 5,
    title: "Introduction to IoT: Connecting to the Internet",
    focus:
      "What is the Internet of Things (IoT)? Using Wi-Fi enabled microcontrollers (e.g., ESP32, ESP8266). Connecting the microcontroller to a Wi-Fi network. Sending simple data to an online platform (e.g., ThingSpeak, Adafruit IO).",
    outcomes:
      "Students will connect their microcontroller to the internet and send sensor data to a cloud service.",
  },
  {
    week: 6,
    title: "Displaying Information: LCDs & OLED Screens",
    focus:
      "Interfacing with character LCDs or small OLED displays. Displaying text, numbers, and sensor readings. Creating simple menus or status displays.",
    outcomes:
      "Students will be able to display information from their projects on external screens.",
  },
  {
    week: 7,
    title: "More Sensors: Temperature, Humidity, Motion",
    focus:
      "Working with common environmental sensors (e.g., DHT11/DHT22 for temperature/humidity, PIR for motion detection). Reading and interpreting data from these sensors.",
    outcomes:
      "Students will integrate various environmental sensors into their projects to gather more complex data.",
  },
  {
    week: 8,
    title: "Project Planning: Designing Your Smart Device",
    focus:
      "Brainstorming ideas for a smart device project (e.g., smart plant waterer, weather station, security alarm). Defining project features, required components, and system logic. Sketching a block diagram.",
    outcomes:
      "Students will define a smart device project, list necessary components, and outline its functionality.",
  },
  {
    week: 9,
    title: "Project Building: Hardware Assembly & Basic Code",
    focus:
      "Assembling the hardware components for their chosen project. Writing initial code to test individual sensors and actuators within the project context.",
    outcomes:
      "Students will assemble the physical components of their smart device and test basic functionality of each part.",
  },
  {
    week: 10,
    title: "Project Development: Integrating Components & Logic",
    focus:
      "Writing the main program logic to integrate all sensors, actuators, and potential internet connectivity. Implementing decision-making based on sensor inputs.",
    outcomes:
      "Students will develop the core software for their smart device, making components work together as a system.",
  },
  {
    week: 11,
    title: "Project Refinement: Debugging & User Interface",
    focus:
      "Testing and debugging the smart device project. Refining the user interface (if any, e.g., display messages, LED indicators). Improving reliability and responsiveness.",
    outcomes:
      "Students will troubleshoot issues in their projects and improve the overall user experience and functionality.",
  },
  {
    week: 12,
    title: "Smart Device Showcase & Future Explorations",
    focus:
      "Students present their completed smart device projects. Discussing challenges, solutions, and what they learned. Exploring further possibilities in IoT and embedded systems.",
    outcomes:
      "Students will showcase their working smart devices and reflect on their learning journey and potential next steps.",
  },
];
