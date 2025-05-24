"use client";

import { programFeatures } from "@/lib/constants/pages/programInfo";
import { useState } from "react";

export default function ParentGuidePage() {
  const [activeFeature, setActiveFeature] = useState(programFeatures[0]);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Parent Guide</h1>
      <h5>Empowering Parents to Support the Next Generation of Coders</h5>

      <section className="mb-8">
        <h2>Welcome, Parents</h2>
        <p className="mb-2">
          We understand that as a parent, you want the best for your child—an
          education that prepares them for the future, cultivates their
          passions, and develops real-world skills. Our programs are designed
          with those goals in mind. Whether your child is just starting out or
          already diving into complex coding projects, this guide will help you
          understand how our curriculum works, what your child will gain, and
          how you can play a supportive role in their coding journey.
        </p>
      </section>

      <section className="mb-8">
        <h2>Why Coding Matters</h2>
        <p className="mb-2">
          Coding is more than just a technical skill—it’s a new kind of literacy
          in the digital age. Children who learn to code gain more than the
          ability to write programs. They develop:
        </p>
        <ul className="space-y-1 mb-2 list-disc list-inside">
          <li>
            <strong>Problem-Solving Skills:</strong> Coding teaches children how
            to break down problems, think logically, and develop step-by-step
            solutions.
          </li>
          <li>
            <strong>Creativity:</strong> From games to apps, coding lets kids
            bring their ideas to life in unique and expressive ways.
          </li>
          <li>
            <strong>Resilience:</strong> Debugging errors and overcoming
            challenges builds perseverance and a growth mindset.
          </li>
          <li>
            <strong>Teamwork:</strong> Many of our projects encourage
            collaboration, preparing students for real-world working
            environments.
          </li>
          <li>
            <strong>Digital Literacy:</strong> In a tech-driven world,
            understanding how technology works gives kids a powerful advantage.
          </li>
        </ul>
        <p>
          These skills are relevant across careers and industries, and early
          exposure positions your child as a confident and capable digital
          citizen.
        </p>
      </section>

      <section className="mb-12 py-8 rounded-lg">
        <div>
          <h2>What You Can Expect from Our Programs</h2>
          <p>
            Our classes are intentionally structured to offer maximum
            engagement, personalization, and educational value. Here’s what sets
            our curriculum apart:
          </p>
          <div className="flex md:flex-row flex-col gap-8 mt-2">
            {/* Left: Detailed card */}
            <div className="flex flex-col flex-1 items-start bg-card shadow-sm p-8 border border-border rounded-xl min-h-[320px] text-card-foreground">
              <span className="mb-4 text-4xl">{activeFeature?.icon}</span>
              <h3>{activeFeature?.title}</h3>
              <p className="mb-2">{activeFeature?.description}</p>
            </div>
            {/* Right: List of benefits */}
            <div className="flex flex-col flex-1 gap-3">
              {programFeatures.map((benefit) => (
                <button
                  key={benefit.id}
                  className={`flex flex-col items-start  px-4 py-3 rounded-lg text-left transition-colors ${
                    activeFeature === benefit
                      ? "bg-card border border-primary shadow"
                      : "bg-card/50 border border-border hover:bg-card"
                  }`}
                  onClick={() => setActiveFeature(benefit)}
                  aria-current={activeFeature === benefit}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{benefit.icon}</span>
                    <h3>{benefit.title}</h3>
                  </div>
                  <p className="ml-10 max-w-4/5 text-sm">
                    {activeFeature?.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>How You Can Support Your Child</h2>
        <p className="mb-2">
          You don’t need a background in technology to help your child succeed
          in coding. Your involvement makes a big difference. Here’s how:
        </p>
        <ul className="space-y-2 mb-2 list-none">
          <li>
            <span role="img" aria-label="check" className="mr-2">
              ✅
            </span>
            <strong>Be an Encourager</strong>
            <br />
            Show interest in your child’s projects. Ask them to demonstrate what
            they’ve built or explain what they’re working on. Your enthusiasm
            reinforces their confidence and motivation.
          </li>
          <li>
            <span role="img" aria-label="check" className="mr-2">
              ✅
            </span>
            <strong>Normalize Struggles</strong>
            <br />
            Let your child know it’s okay to feel frustrated when code doesn’t
            work. Remind them that errors are learning opportunities, not
            failures.
          </li>
          <li>
            <span role="img" aria-label="check" className="mr-2">
              ✅
            </span>
            <strong>Create a Learning-Friendly Environment</strong>
            <br />
            Designate a quiet, well-lit space for online classes or coding
            practice. Eliminate distractions by turning off notifications and
            ensuring they’re comfortable.
          </li>
          <li>
            <span role="img" aria-label="check" className="mr-2">
              ✅
            </span>
            <strong>Stay Informed</strong>
            <br />
            Read class updates, newsletters, and lesson summaries. Participate
            in parent-teacher conferences or demo days to stay engaged in your
            child’s progress.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>Technical Requirements</h2>
        <p className="mb-2">
          To ensure your child has the best experience, here’s what they’ll need
          for online learning:
        </p>
        <ul className="space-y-1 mb-2 list-disc list-inside">
          <li>A laptop or desktop computer (not a tablet or Chromebook)</li>
          <li>A stable internet connection</li>
          <li>A webcam and microphone</li>
          <li>Access to a quiet, focused workspace</li>
        </ul>
        <p>
          For in-person classes, students may bring their own laptops. If that’s
          not possible, we provide equipment on-site.
        </p>
      </section>

      <section className="mb-8">
        <h2>Safety &amp; Privacy Commitments</h2>
        <p className="mb-2">We take safety seriously. Our policies include:</p>
        <ul className="space-y-1 mb-2 list-disc list-inside">
          <li>Live supervision of all classes</li>
          <li>Secure platforms for communication and coursework</li>
          <li>Strict data privacy standards</li>
          <li>Age-appropriate content and interactions</li>
          <li>Clear behavior guidelines to ensure respectful collaboration</li>
        </ul>
        <p>
          You can trust that your child’s online and in-person experiences are
          managed with care and professionalism.
        </p>
      </section>

      <section>
        <h2>Let’s Build the Future Together</h2>
        <p>
          Your support at home, paired with our expert instruction, creates the
          perfect environment for your child to thrive. Together, we can help
          your child become not just a great coder, but a confident, creative,
          and capable learner ready for the challenges of tomorrow.
        </p>
      </section>
    </div>
  );
}
