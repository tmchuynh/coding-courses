"use client";

import { BentoGridSection } from "@/components/BentoGrid";
import DynamicCTA from "@/components/CTAs/DynamicCTA";
import { programFeatures } from "@/lib/constants/pages/programInfo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ParentGuidePage() {
  const [activeFeature, setActiveFeature] = useState(programFeatures[0]);
  const router = useRouter();

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
        <h2 className="mb-4 font-bold text-2xl">
          How You Can Support Your Child
        </h2>
        <p className="mb-6">
          You don't need a background in technology to help your child succeed
          in coding. Your involvement makes a big difference. Here's how:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 my-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">👏</span>
              </div>
            </div>
            <div>
              <h4>Be an Encourager</h4>
              <p className="text-sm">
                Show interest in your child's projects. Ask them to demonstrate
                what they've built or explain what they're working on. Your
                enthusiasm reinforces their confidence and motivation.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">💪</span>
              </div>
            </div>
            <div>
              <h4>Normalize Struggles</h4>
              <p className="text-sm">
                Let your child know it's okay to feel frustrated when code
                doesn't work. Remind them that errors are learning
                opportunities, not failures.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🏠</span>
              </div>
            </div>
            <div>
              <h4>Create a Learning-Friendly Environment</h4>
              <p className="text-sm">
                Designate a quiet, well-lit space for online classes or coding
                practice. Eliminate distractions by turning off notifications
                and ensuring they're comfortable.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">📝</span>
              </div>
            </div>
            <div>
              <h4>Stay Informed</h4>
              <p className="text-sm">
                Read class updates, newsletters, and lesson summaries.
                Participate in parent-teacher conferences or demo days to stay
                engaged in your child's progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>A Note to Parents & Guardians</h2>
        <p className="mb-6">
          We value your support and involvement. Here's how you can help your
          child get the most out of our programs:
        </p>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 my-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🎒</span>
              </div>
            </div>
            <div>
              <h4>Stay Involved</h4>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  Ask to see their weekly project — students love to share!
                </li>
                <li>Encourage them to explain what they built and why</li>
                <li>
                  Provide a quiet space and tech setup for remote sessions
                </li>
                <li>
                  Celebrate effort and improvement, not just final outcomes
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">📩</span>
              </div>
            </div>
            <div>
              <h4>Parent Communication</h4>
              <ul className="space-y-2 pl-5 list-disc">
                <li>We'll provide weekly recaps with progress updates</li>
                <li>Look out for Showcase invitations and feedback forms</li>
                <li>For questions, contact us at support@[yourcompany].com</li>
                <li>
                  You're also welcome to review session recordings (where
                  applicable)
                </li>
                <li>Attend virtual class observations by request</li>
                <li>
                  Reach out at any time with questions or concerns—we're here to
                  help
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>You're in Good Hands</h2>
        <p>
          Whether your child is coding their first game or preparing to build an
          AI project, you can trust that every interaction is carefully managed
          with professionalism and care. Our team is trained to prioritize both
          safety and meaningful learning—so your child can thrive in a secure,
          creative space.
        </p>
        <p>
          We look forward to partnering with you to support your child's coding
          journey. If you have any questions or need assistance, please don't
          hesitate to reach out at support@[yourcompany].com.
        </p>
      </section>

      <section className="mb-8">
        <DynamicCTA variant="parent-guide" />
      </section>

      <BentoGridSection />

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
            <div className="flex flex-col flex-1 items-start bg-card shadow-sm p-8 border border-border rounded-xl md:min-h-[320px] text-card-foreground">
              <p className="md:hidden md:mb-5 text-sm">
                {activeFeature?.description}
              </p>
              <div className="2xl:flex flex-wrap justify-around gap-3 hidden md:grid lg:grid-cols-2 mx-auto 2xl:mx-0">
                {activeFeature.images.map((image, index) => (
                  <Image
                    src={image}
                    alt={`${activeFeature.id}-${index}-Image`}
                    key={index}
                    className="rounded-md xl:w-72 xl:h-72 lg:aspect-square object-cover"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            {/* Right: List of benefits */}
            <div className="flex flex-col flex-1 gap-3">
              {programFeatures.map((benefit) => (
                <button
                  key={benefit.id}
                  className={`flex flex-col items-start  px-4 py-3 rounded-lg text-left transition-colors ${
                    activeFeature === benefit
                      ? "bg-card border border-primary shadow"
                      : "bg-muted border border-border hover:bg-card"
                  }`}
                  onClick={() => setActiveFeature(benefit)}
                  aria-current={activeFeature === benefit}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{benefit.icon}</span>
                    <h3>{benefit.title}</h3>
                  </div>
                  <p className="md:block hidden ml-10 max-w-4/5 text-sm">
                    {activeFeature?.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
