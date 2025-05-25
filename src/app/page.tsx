"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

const primaryFeatures = [
  {
    name: "Grades K to 2",
    description:
      "Early introduction to coding concepts through playful exercises and visual learning. Perfect for young minds ages 5-8 to develop computational thinking.",
  },
  {
    name: "Grades 3 to 5",
    description:
      "Building foundational programming skills with interactive projects. Students ages 8-11 learn block-based coding and basic web development.",
  },
  {
    name: "Grades 6 to 8",
    description:
      "Advancing to text-based languages and more complex projects. Middle school students ages 11-14 explore game development and robotics.",
  },
  {
    name: "Grades 9 to 12",
    description:
      "College and career preparation with advanced programming, including full-stack development, AI, and specialized tracks for ages 14-18.",
  },
];

const secondaryFeatures = [
  {
    name: "Block Coding",
    description:
      "Learn the fundamentals of programming through intuitive drag-and-drop interfaces. Perfect for beginners to understand core concepts before transitioning to text-based languages.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Game Development",
    description:
      "Design and build your own games while learning programming concepts, game mechanics, and interactive storytelling. Create engaging experiences across multiple platforms.",
    icon: ServerIcon,
  },
  {
    name: "Web & App Development",
    description:
      "Build responsive websites and mobile applications using industry-standard technologies. Master HTML, CSS, JavaScript and frameworks that power the modern digital world.",
    icon: LockClosedIcon,
  },
  {
    name: "Hardware & Robotics",
    description:
      "Get hands-on experience with physical computing, electronics, and automation. Learn to program robots and build interactive hardware projects using sensors and actuators.",
    icon: ArrowPathIcon,
  },
  {
    name: "Business & Entrepreneurship",
    description:
      "Develop business acumen alongside technical skills. Learn product development, marketing strategies, and how to transform creative ideas into viable business ventures.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "College Prep",
    description:
      "Prepare for higher education with specialized courses designed to enhance your academic profile. Build projects that demonstrate your technical abilities to admissions committees.",
    icon: LockClosedIcon,
  },
  {
    name: "Full Stack Web Development",
    description:
      "Master both frontend and backend technologies to become a versatile developer. Create complete web applications from database design to user interface implementation.",
    icon: ServerIcon,
  },
  {
    name: "Cyber Security",
    description:
      "Learn to protect systems and networks from digital threats. Explore encryption, vulnerability assessment, and ethical hacking techniques to secure digital infrastructures.",
    icon: ArrowPathIcon,
  },
  {
    name: "Data Science, ML & AI",
    description:
      "Explore the cutting-edge fields of data analysis, machine learning, and artificial intelligence. Learn to create intelligent systems that can analyze data and make predictions.",
    icon: CloudArrowUpIcon,
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <main>
        {/* Hero section */}
        <div className="relative pt-14 isolate">
          <div className="lg:flex lg:items-center lg:gap-x-10 mx-auto py-24 sm:py-32 lg:py-40">
            <div className="lg:flex-auto mx-auto lg:mx-0 max-w-2xl">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 bg-white px-4 py-1 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-sm/6">
                  <span className="font-semibold">We’re hiring</span>
                  <span aria-hidden="true" className="w-px h-4 /10" />
                  <a
                    href="/about/careers"
                    className="flex items-center gap-x-1"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    See open positions
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="-mr-2 text-gray-400 size-5"
                    />
                  </a>
                </div>
              </div>

              <h1 className="mt-10 font-semibold text-5xl text-pretty sm:text-7xl tracking-tight">
                Learn to Code. Shape Your Future.
              </h1>
              <p className="mt-8 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
                Empower your child with essential digital skills through our
                expert-led coding classes. From elementary school to high
                school, our age-appropriate curriculum builds confidence,
                creativity, and technical skills that last a lifetime.
              </p>
              <div className="flex items-center gap-x-6 mt-10">
                <Button onClick={() => router.push("/programs/curriculum")}>
                  View Curriculum
                </Button>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <Image
                src="/images/logo.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="gap-x-8 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0">
          <div className="">
            <h2 className="font-semibold text-3xl text-balance sm:text-4xl tracking-tight">
              Age-Appropriate Curriculum for Every Student
            </h2>
            <p className="mt-6 text-lg/8">
              Our comprehensive programs are carefully designed to match each
              age group's cognitive development and learning pace. From playful
              introduction to coding for young learners to advanced career
              preparation for teens, we provide the right challenge at the right
              time.
            </p>
          </div>

          <div className="">
            <dl className="space-y-8 max-w-xl lg:max-w-none text-base/7">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline-block font-semibold">{feature.name}</dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-12 md:mt-20 lg:mt-32">
          <div className="mx-auto">
            <h2 className="font-semibold text-3xl text-balance sm:text-4xl tracking-tight">
              Find Your Passion in Programming
            </h2>
            <p className="max-w-4xl">
              From building games to securing networks, our diverse course
              offerings cover the full spectrum of computer science disciplines.
              Discover which path ignites your creativity and aligns with your
              career goals.
            </p>
            <div className="flex items-center gap-x-6 mt-4">
              <Button onClick={() => router.push("/programs/curriculum")}>
                View Curriculum
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-6 md:mt-8 lg:mt-12">
            <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 font-semibold text-base/7">
                    <feature.icon
                      aria-hidden="true"
                      className="flex-none text-tertiary size-5"
                    />
                    {feature.name}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-4 text-base/7">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
