"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants/faqs";
import { useState } from "react";

export default function CurriculumPage() {
  const benefits = [
    {
      key: "problem-solving",
      icon: "🧩",
      title: "Problem-Solving Skills",
      summary:
        "Coding teaches children how to break down complex problems and find logical solutions.",
      detail: (
        <>
          <strong>Why it matters:</strong> Problem-solving is a foundational
          skill for life and learning. Coding encourages kids to analyze
          challenges, break them into smaller steps, and develop step-by-step
          solutions.
          <br />
          <br />
          <strong>Example:</strong> When debugging a program, children learn to
          identify issues, test hypotheses, and iterate until they find a
          solution. This process builds resilience and adaptability, skills that
          are valuable in any field.
        </>
      ),
    },
    {
      key: "creativity",
      icon: "🎨",
      title: "Creativity",
      summary:
        "Programming encourages kids to create games, stories, and apps, turning their ideas into reality.",
      detail: (
        <>
          <strong>Why it matters:</strong> Coding is a creative outlet that lets
          children bring their imagination to life. They can design interactive
          stories, animations, or games, and see their ideas take shape on the
          screen.
          <br />
          <br />
          <strong>Example:</strong> Kids can build their own
          choose-your-own-adventure stories or invent new games, learning to
          express themselves in new digital ways.
        </>
      ),
    },
    {
      key: "confidence",
      icon: "🌟",
      title: "Confidence",
      summary:
        "Building projects and overcoming challenges helps boost self-esteem and resilience.",
      detail: (
        <>
          <strong>Why it matters:</strong> Completing a coding project gives
          children a sense of accomplishment. Overcoming obstacles and seeing
          their work come to life builds confidence and encourages them to take
          on new challenges.
          <br />
          <br />
          <strong>Example:</strong> When a child successfully creates an app or
          solves a tough bug, they gain the confidence to try more ambitious
          projects in the future.
        </>
      ),
    },
    {
      key: "collaboration",
      icon: "🤝",
      title: "Collaboration",
      summary:
        "Many coding projects involve teamwork, helping children develop communication and social skills.",
      detail: (
        <>
          <strong>Why it matters:</strong> Coding is often a team effort.
          Working with others on group projects or in coding clubs teaches kids
          to communicate, share ideas, and solve problems together.
          <br />
          <br />
          <strong>Example:</strong> In a robotics club, children might work
          together to design, build, and program a robot, learning to listen,
          compromise, and celebrate shared successes.
        </>
      ),
    },
    {
      key: "digital-literacy",
      icon: "💻",
      title: "Digital Literacy",
      summary:
        "Understanding how technology works prepares children for a digital world.",
      detail: (
        <>
          <strong>Why it matters:</strong> Coding helps demystify the technology
          that surrounds us. Kids learn how apps, websites, and devices work,
          making them more informed and responsible digital citizens.
          <br />
          <br />
          <strong>Example:</strong> By building their own websites or apps,
          children gain a deeper appreciation for the technology they use every
          day and learn to use it safely and ethically.
        </>
      ),
    },
    {
      key: "math-logic",
      icon: "🔢",
      title: "Math and Logic",
      summary: "Programming reinforces math concepts and logical thinking.",
      detail: (
        <>
          <strong>Why it matters:</strong> Coding naturally integrates math and
          logic, helping kids apply concepts like sequencing, pattern
          recognition, and arithmetic in real-world contexts.
          <br />
          <br />
          <strong>Example:</strong> Writing a program to calculate scores in a
          game or create patterns with code helps children see the practical
          side of math and logic.
        </>
      ),
    },
  ];

  const [selected, setSelected] = useState(benefits[0].key);
  const selectedBenefit = benefits.find((b) => b.key === selected);

  // Find the "Parents FAQs" section from the imported faqs
  const parentsFaqSection = faqs.find(
    (section) => section.title === "Parents FAQs"
  );

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1 className="mb-6 font-bold text-3xl">Why Learn How to Code?</h1>
      <section className="mb-8">
        <h2 className="mb-6 font-semibold text-xl">Benefits for Children</h2>
        <div className="flex md:flex-row flex-col gap-8">
          {/* Left: Detailed card */}
          <div className="flex flex-col flex-1 items-start bg-white shadow-sm p-8 border border-gray-200 rounded-xl min-h-[320px]">
            <span className="mb-4 text-4xl">{selectedBenefit?.icon}</span>
            <h3 className="mb-2 font-bold text-lg">{selectedBenefit?.title}</h3>
            <p className="mb-2 text-gray-700">{selectedBenefit?.summary}</p>
            <div className="text-gray-600 text-sm">
              {selectedBenefit?.detail}
            </div>
          </div>
          {/* Right: List of benefits */}
          <div className="flex flex-col flex-1 gap-3">
            {benefits.map((benefit) => (
              <button
                key={benefit.key}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  selected === benefit.key
                    ? "bg-blue-50 border border-blue-400 shadow"
                    : "bg-gray-50 border border-gray-200 hover:bg-blue-100"
                }`}
                onClick={() => setSelected(benefit.key)}
                aria-current={selected === benefit.key}
              >
                <span className="text-2xl">{benefit.icon}</span>
                <span className="font-medium">{benefit.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 font-semibold text-xl">
          Opportunities in the Tech Field
        </h2>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-2xl">📈</span>
            <h3 className="mb-1 font-bold">High Demand</h3>
            <p className="text-gray-700">
              Technology is a rapidly growing industry with a constant need for
              skilled professionals. According to the U.S. Bureau of Labor
              Statistics, software development jobs are projected to grow much
              faster than average over the next decade.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-2xl">🛠️</span>
            <h3 className="mb-1 font-bold">Variety of Careers</h3>
            <p className="text-gray-700">
              From software development to data science, cybersecurity,
              artificial intelligence, robotics, and design, tech offers diverse
              career paths. Children who learn to code can pursue roles in
              industries like healthcare, finance, entertainment, and education.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-2xl">💰</span>
            <h3 className="mb-1 font-bold">Competitive Salaries</h3>
            <p className="text-gray-700">
              Many tech jobs offer excellent compensation and benefits. Even
              entry-level positions in technology often provide
              higher-than-average starting salaries.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-2xl">🌐</span>
            <h3 className="mb-1 font-bold">Global Opportunities</h3>
            <p className="text-gray-700">
              Coding skills are valued worldwide, opening doors to work
              anywhere. Remote work and international collaboration are common
              in the tech industry.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-2xl">🌟</span>
            <h3 className="mb-1 font-bold">Impact</h3>
            <p className="text-gray-700">
              Technology shapes the future—programmers have the power to solve
              real-world problems and make a difference. From developing medical
              software to creating educational apps, coders can positively
              impact society.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 font-semibold text-xl">Real-World Examples</h2>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-3xl">🚀</span>
            <h3 className="mb-1 font-bold text-lg">Young Innovators</h3>
            <p className="text-gray-700">
              Many young people have used coding to launch successful projects
              and even businesses. For example, apps like "Tynker" and
              "Hopscotch" were created to help kids learn programming in a fun
              way.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-3xl">🤖</span>
            <h3 className="mb-1 font-bold text-lg">Competitions and Clubs</h3>
            <p className="text-gray-700">
              Coding competitions such as hackathons and robotics clubs give
              children the chance to apply their skills, win awards, and meet
              like-minded peers.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-3xl">🌍</span>
            <h3 className="mb-1 font-bold text-lg">Community Impact</h3>
            <p className="text-gray-700">
              Students have built apps to help their schools, local communities,
              or raise awareness for important causes, showing that coding can
              be a tool for positive change.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-xl">
          Addressing Common Parent Concerns
        </h2>
        {parentsFaqSection && (
          <Accordion type="single" collapsible className="w-full">
            {parentsFaqSection.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </section>
      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-xl">The Future of Technology</h2>
        <p>
          Technology is transforming every aspect of our lives, from how we
          communicate to how we work and learn. By 2030, many jobs will require
          some understanding of programming or computational thinking. Early
          exposure to coding ensures your child is prepared for the careers of
          tomorrow, many of which may not even exist yet.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-semibold text-xl">
          Start Early, Succeed Later
        </h2>
        <p>
          Introducing programming at a young age gives children a head start in
          developing essential skills for school, future careers, and life.
          Whether your child dreams of becoming a game developer, engineer, or
          entrepreneur, learning to code opens up endless possibilities.
        </p>
        <p className="mt-4">
          <strong>Ready to get started?</strong> Explore our curriculum and
          discover how your child can begin their coding journey today!
        </p>
      </section>
    </div>
  );
}
