"use client";

import { Timeline } from "@/components/ui/timeline";
import { learningRoadmap } from "@/lib/constants/courses/learningRoadmap";
import { useState } from "react";

export default function LearningTracksPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Learning Tracks</h1>
      <h5>
        Personalized pathways designed to grow with your child’s skills and
        interests.
      </h5>
      <p>
        Our Learning Tracks provide a structured yet flexible roadmap for
        students at every stage of their coding journey. Whether your child is
        just beginning to explore the world of programming or is ready to dive
        into advanced projects, each track is tailored to match their age,
        experience level, and goals. From foundational logic and problem-solving
        to app development and data science, our tracks ensure that students
        build skills progressively—gaining confidence, mastering core concepts,
        and staying engaged every step of the way.
      </p>

      <div className="flex gap-4 mt-8 border-b border-border">
        {learningRoadmap.map((group, idx) => (
          <button
            key={group.gradeGroup}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === idx
                ? "border-tertiary text-tertiary border-b-2"
                : "border-transparent text-gray-500 hover:text-tertiary"
            }`}
            onClick={() => setActiveTab(idx)}
            type="button"
          >
            Grades {group.gradeGroup}
          </button>
        ))}
      </div>

      <section className="mt-8">
        {learningRoadmap[activeTab].roadmaps.map((roadmap, index) => (
          <div key={index} className="mb-8">
            <h2>{roadmap.title}</h2>
            <div className="relative pl-6">
              <Timeline data={roadmap.courses} key={index} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
