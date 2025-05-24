import { CourseSchedule } from "@/lib/interfaces/courses";

export const smartDevicesLab: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Microcontrollers and Smart Devices",
    focus:
      "What is a microcontroller (e.g., Micro:bit, Arduino)? What makes a device 'smart'? Setting up the programming environment. Blinking an LED.",
    outcomes:
      "Students will understand what microcontrollers are and run their first program.",
    project: "Hello Microcontroller: Blink LED",
    projectDescription:
      "Set up the chosen microcontroller (Micro:bit or Arduino) and its programming environment. Write and upload a program to make an on-board or external LED blink.",
  },
  {
    week: 2,
    title: "Inputs: Buttons and Switches",
    focus:
      "Understanding digital inputs. Using buttons and switches to control program flow. Reading button states (pressed/released).",
    outcomes:
      "Students will be able to use buttons as inputs to trigger actions.",
    project: "Button-Controlled LED",
    projectDescription:
      "Connect a button to the microcontroller. Write a program so that an LED turns on when the button is pressed and turns off when it's released.",
  },
  {
    week: 3,
    title: "Outputs: Beyond LEDs - Buzzers and Simple Displays",
    focus:
      "Controlling buzzers to make sounds. Introduction to simple displays (e.g., Micro:bit LED matrix, basic character LCD with Arduino - simplified).",
    outcomes:
      "Students will be able to control sound output and display simple messages.",
    project: "Interactive Name Badge",
    projectDescription:
      "Using the Micro:bit LED matrix or a simple display, create a program that shows your name or a simple icon when a button is pressed. Add a sound effect with a buzzer.",
  },
  {
    week: 4,
    title: "Analog Inputs: Potentiometers and Light Sensors",
    focus:
      "Understanding analog vs. digital signals. Reading analog values from potentiometers (variable resistors) and light sensors.",
    outcomes: "Students will be able to read and interpret analog sensor data.",
    project: "Light-Sensitive LED/Sound",
    projectDescription:
      "Connect a light sensor. Write a program that reads the light level and changes the brightness of an LED (if using PWM) or the pitch/frequency of a buzzer in response to changing light.",
  },
  {
    week: 5,
    title: "Temperature and Motion Sensors",
    focus:
      "Using temperature sensors to measure ambient temperature. Introduction to motion sensors (e.g., PIR sensors for detecting presence, accelerometers for tilt/movement).",
    outcomes:
      "Students will be able to use temperature and basic motion sensors.",
    project: "Occupancy Detector/Thermometer",
    projectDescription:
      "Use a PIR motion sensor to light up an LED when motion is detected. Alternatively, use a temperature sensor to display the current temperature on the serial monitor or a simple display.",
  },
  {
    week: 6,
    title: "Controlling Motors: Servos and DC Motors",
    focus:
      "Introduction to servo motors (controlling position) and DC motors (controlling speed/direction - simplified with a motor driver).",
    outcomes: "Students will be able to control basic motor movements.",
    project: "Servo Sweeper / Fan Control",
    projectDescription:
      "Program a servo motor to sweep back and forth between two angles. Alternatively, use a potentiometer to control the speed of a small DC motor (requires a motor driver).",
  },
  {
    week: 7,
    title: "Conditional Logic: Making Smart Decisions",
    focus:
      "Using `if/else if/else` statements to make decisions based on sensor inputs. Combining multiple conditions.",
    outcomes:
      "Students will be able to implement conditional logic to create responsive smart devices.",
    project: "Smart Night Light",
    projectDescription:
      "Create a device that turns on an LED (or a series of LEDs) only when it's dark (using a light sensor) AND motion is detected (using a PIR sensor).",
  },
  {
    week: 8,
    title:
      "Introduction to Wireless Communication (Conceptual or Micro:bit Radio)",
    focus:
      "Basic concepts of wireless communication (e.g., Bluetooth, Wi-Fi - conceptual). If using Micro:bit, explore its radio feature for simple device-to-device communication.",
    outcomes:
      "Students will understand basic wireless concepts or send/receive messages between Micro:bits.",
    project: "Wireless Message Relay",
    projectDescription:
      "If using Micro:bits, program two devices to send and receive simple messages or signals using the radio feature (e.g., pressing a button on one Micro:bit lights up an LED on another).",
  },
  {
    week: 9,
    title: "Data Logging and Visualization (Simple)",
    focus:
      "Sending sensor data to a computer via serial communication. Basic data logging. Simple visualization using serial plotter or spreadsheet.",
    outcomes:
      "Students will be able to log sensor data and visualize simple trends.",
    project: "Temperature Logger",
    projectDescription:
      "Program the microcontroller to read temperature data every few seconds and send it to the computer via serial. Collect data for a few minutes and plot it using the Arduino IDE's Serial Plotter or by pasting into a spreadsheet.",
  },
  {
    week: 10,
    title: "Smart Device Project: Brainstorming and Design",
    focus:
      "Identifying a problem that a smart device could solve. Brainstorming features. Sketching the device and planning components.",
    outcomes: "Students will design a concept for a unique smart device.",
    project: "Smart Device Blueprint",
    projectDescription:
      "Choose a problem or need and design a smart device to address it. Create a blueprint including: device purpose, list of required sensors and actuators, a sketch of the device, and a flowchart of its logic.",
  },
  {
    week: 11,
    title: "Smart Device Project: Prototyping and Coding",
    focus:
      "Building the physical prototype of the smart device. Writing and debugging the code to implement its core functionality.",
    outcomes: "Students will build a working prototype of their smart device.",
    project: "Smart Device Build",
    projectDescription:
      "Assemble the hardware components for your smart device project. Write and test the code to implement its main features based on your blueprint from last week.",
  },
  {
    week: 12,
    title: "Smart Device Showcase and Future Ideas",
    focus:
      "Presenting the smart device projects. Demonstrating functionality. Discussing challenges, improvements, and future possibilities for smart devices.",
    outcomes:
      "Students will showcase their smart device and reflect on the design and build process.",
    project: "Smart Device Showcase",
    projectDescription:
      "Finalize your smart device project. Prepare and deliver a presentation demonstrating how it works, the problem it solves, the components used, and what you learned during the project.",
  },
];
