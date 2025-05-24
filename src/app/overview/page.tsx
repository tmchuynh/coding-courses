"use client";

import DynamicCTA from "@/components/CTAs/DynamicCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants/faqs";
import { benefits } from "@/lib/constants/pages/benefits.tsx";
import { sortByProperty } from "@/lib/utils/sort";
import { useState } from "react";

export default function CurriculumPage() {
  const [selected, setSelected] = useState(benefits[0].key);
  const selectedBenefit = benefits.find((b) => b.key === selected);

  // Find the "Parents FAQs" section from the imported faqs
  const parentsFaqSection = faqs.find(
    (section) => section.title === "Parents FAQs"
  );

  const sortedBenefits = sortByProperty(benefits, "title");

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Why Learn How to Code?</h1>
      <h5>
        Empowering the Next Generation with Tools to Build, Solve, and Create in
        a Digital World
      </h5>
      <p className="mb-4">
        In today’s digital world, coding is a fundamental skill that empowers
        children to understand and shape the technology around them. Learning to
        code is not just about writing lines of code; it’s about developing a
        mindset that embraces problem-solving, creativity, and collaboration.
        Coding is a valuable skill that opens doors to countless opportunities
        in the future. It’s not just for aspiring programmers; it’s a skill that
        can benefit anyone in any field. Whether your child dreams of becoming a
        game developer, engineer, or entrepreneur, learning to code opens up
        endless possibilities.
      </p>
      <section className="mb-8">
        <h2>The Future of Technology</h2>
        <p>
          Technology is transforming every aspect of our lives—from how we
          communicate to how we work, learn, shop, and solve problems. It’s no
          longer confined to tech companies; it’s at the heart of nearly every
          industry, from healthcare and finance to agriculture, education, and
          the arts. As digital transformation accelerates, the need for
          individuals who understand how technology works—and can build with
          it—is growing rapidly.
        </p>
        <p>
          By 2030, a significant percentage of jobs will require at least a
          basic understanding of programming, data literacy, or computational
          thinking. The World Economic Forum predicts that more than 85 million
          jobs may be displaced by automation, while 97 million new roles could
          emerge that are more adapted to the new division of labor between
          humans, machines, and algorithms. In other words, coding won’t just be
          for software engineers—it will be a fundamental part of many future
          professions.
        </p>
        <p>
          Early exposure to coding ensures your child is not just keeping up,
          but staying ahead. When children learn to code at a young age, they
          are developing the thinking patterns, problem-solving habits, and
          creative skills that will serve them for a lifetime. They're learning
          how to build with technology instead of just using it passively.
          They're also acquiring the adaptability needed to thrive in a future
          filled with emerging fields like artificial intelligence, robotics,
          quantum computing, and augmented reality.
        </p>
        <p>
          Just as literacy and numeracy became foundational skills in the 20th
          century, digital fluency—particularly coding—is becoming the new core
          competency of the 21st century. And because the jobs of tomorrow may
          not exist yet, teaching children how to think like innovators,
          engineers, and creators today is the most powerful way to future-proof
          their education.
        </p>
        <p>
          Whether your child dreams of becoming a game designer, doctor,
          environmental scientist, entrepreneur, or artist, coding will amplify
          their potential. It’s not just about getting a head start in tech—it’s
          about equipping them with the mindset and tools to shape the future.
        </p>
      </section>
      <section className="mb-8">
        <h2>Benefits for Children</h2>
        <h5>
          Unlocking Cognitive, Creative, and Career-Ready Skills Through
          Hands-On Coding Education
        </h5>
        <p>
          Learning to code is not just about writing lines of code. It’s about
          developing a mindset that embraces problem-solving, creativity, and
          collaboration. In a world increasingly driven by technology, coding
          gives children a unique advantage—not just technically, but
          cognitively and socially. Here are some key benefits of coding for
          children:
        </p>
        <p>
          <strong>Ready to explore the benefits of coding?</strong> Click on a
          benefit below to learn more about how coding can positively impact
          your child's life.
        </p>

        <div className="flex md:flex-row flex-col gap-8 mt-2">
          {/* Left: Detailed card */}
          <div className="flex flex-col flex-1 items-start bg-card shadow-sm p-8 border border-border rounded-xl min-h-[320px] text-card-foreground">
            <span className="mb-4 text-4xl">{selectedBenefit?.icon}</span>
            <h3>{selectedBenefit?.title}</h3>
            <p className="mb-2">{selectedBenefit?.summary}</p>
            <p>{selectedBenefit?.detail}</p>
          </div>
          {/* Right: List of benefits */}
          <div className="flex flex-col flex-1 gap-3">
            {sortedBenefits.map((benefit) => (
              <button
                key={benefit.key}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  selected === benefit.key
                    ? "bg-card border border-primary shadow"
                    : "bg-card/50 border border-border hover:bg-card"
                }`}
                onClick={() => setSelected(benefit.key)}
                aria-current={selected === benefit.key}
              >
                <span className="text-2xl">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2>Opportunities in the Tech Field</h2>
        <h5>
          Preparing the Next Generation for High-Demand, High-Growth Careers in
          a Digital World
        </h5>
        <p>
          The tech industry is booming, and coding skills are in high demand.
        </p>
        <p>
          Coding is not just a skill; it’s a superpower that opens doors to
          countless opportunities. In today’s digital economy, nearly every
          industry—from healthcare and finance to entertainment and
          education—relies on technology. As a result, the need for individuals
          who understand how to build, maintain, and innovate with software
          continues to grow. Learning to code early gives children a head start
          in a world where digital literacy is as important as reading and math.
        </p>
        <p>
          Tech jobs are among the fastest-growing and highest-paying career
          paths, and many of them require a strong foundation in programming.
          But beyond job prospects, coding teaches kids how to think logically,
          solve complex problems, and work creatively—skills that are valuable
          in any field. Whether your child dreams of becoming a game developer,
          a doctor using AI to detect diseases, or an entrepreneur launching the
          next big app, coding can help them get there.
        </p>
        <p>
          Furthermore, as automation and artificial intelligence reshape the job
          landscape, coding equips children with the tools to adapt and
          innovate. They won’t just use technology—they’ll create it. By
          learning to code, children are not just preparing for a job; they are
          preparing for a future where they can lead, innovate, and shape the
          world around them with confidence and purpose.
        </p>
        <p>
          <strong>Why is coding important?</strong> Here are some key reasons:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mt-3">
          <div className="flex flex-col items-start bg-card shadow-sm p-6 border border-border rounded-xl text-card-foreground">
            <span className="mb-3 text-2xl">📈</span>
            <h3 className="mb-1 font-bold">High Demand</h3>
            <p className="">
              Technology is a rapidly growing industry with a constant need for
              skilled professionals. According to the U.S. Bureau of Labor
              Statistics, software development jobs are projected to grow much
              faster than average over the next decade.
            </p>
          </div>
          <div className="flex flex-col items-start bg-card shadow-sm p-6 border border-border rounded-xl text-card-foreground">
            <span className="mb-3 text-2xl">🛠️</span>
            <h3 className="mb-1 font-bold">Variety of Careers</h3>
            <p className="">
              From software development to data science, cybersecurity,
              artificial intelligence, robotics, and design, tech offers diverse
              career paths. Children who learn to code can pursue roles in
              industries like healthcare, finance, entertainment, and education.
            </p>
          </div>
          <div className="flex flex-col items-start bg-card shadow-sm p-6 border border-border rounded-xl text-card-foreground">
            <span className="mb-3 text-2xl">💰</span>
            <h3 className="mb-1 font-bold">Competitive Salaries</h3>
            <p className="">
              Many tech jobs offer excellent compensation and benefits. Even
              entry-level positions in technology often provide
              higher-than-average starting salaries.
            </p>
          </div>
          <div className="flex flex-col items-start bg-card shadow-sm p-6 border border-border rounded-xl text-card-foreground">
            <span className="mb-3 text-2xl">🌐</span>
            <h3 className="mb-1 font-bold">Global Opportunities</h3>
            <p className="">
              Coding skills are valued worldwide, opening doors to work
              anywhere. Remote work and international collaboration are common
              in the tech industry.
            </p>
          </div>
          <div className="flex flex-col items-start bg-card shadow-sm p-6 border border-border rounded-xl text-card-foreground">
            <span className="mb-3 text-2xl">🌟</span>
            <h3 className="mb-1 font-bold">Impact</h3>
            <p className="">
              Technology shapes the future—programmers have the power to solve
              real-world problems and make a difference. From developing medical
              software to creating educational apps, coders can positively
              impact society.
            </p>
          </div>
        </div>
      </section>

      <DynamicCTA />

      <section className="my-8">
        <h2>Real-World Examples</h2>
        <h5>
          How Kids Are Using Coding Today to Build Games, Apps, Robots, and
          Solve Everyday Problems
        </h5>
        <p>
          From building games to creating apps, kids are using coding to express
          their creativity and solve real-world problems. With the right tools
          and guidance, young minds are turning their curiosity into practical
          solutions and innovative projects that make a real impact. Many
          children are designing interactive games to teach others about science
          or math, while others are coding mobile apps that help classmates stay
          organized or promote mental wellness. Some students are programming
          robots to help with household tasks or entering coding competitions
          that challenge them to solve global issues like clean energy or
          accessibility. There are kids who’ve launched their own websites to
          share stories, offer tutorials, or advocate for causes they care
          about. These real-world examples show that when children learn to
          code, they’re not just learning a technical skill—they’re gaining a
          voice, a platform, and the confidence to shape the world around them.
        </p>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-3">
          <div className="flex flex-col items-start bg-card shadow-sm p-6 border border-border rounded-xl text-card-foreground">
            <span className="mb-3 text-3xl">🚀</span>
            <h3 className="mb-1 font-bold text-lg">Young Innovators</h3>
            <p className="">
              Many young people have used coding to launch successful projects
              and even businesses. For example, apps like "Tynker" and
              "Hopscotch" were created to help kids learn programming in a fun
              way.
            </p>
          </div>
          <div className="flex flex-col items-start bg-card shadow-sm p-6 border border-border rounded-xl text-card-foreground">
            <span className="mb-3 text-3xl">🤖</span>
            <h3 className="mb-1 font-bold text-lg">Competitions and Clubs</h3>
            <p className="">
              Coding competitions such as hackathons and robotics clubs give
              children the chance to apply their skills, win awards, and meet
              like-minded peers.
            </p>
          </div>
          <div className="flex flex-col items-start bg-card shadow-sm p-6 border border-border rounded-xl text-card-foreground">
            <span className="mb-3 text-3xl">🌍</span>
            <h3 className="mb-1 font-bold text-lg">Community Impact</h3>
            <p className="">
              Students have built apps to help their schools, local communities,
              or raise awareness for important causes, showing that coding can
              be a tool for positive change.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2>Addressing Common Parent Concerns</h2>
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
    </div>
  );
}
