"use client";

import { Timeline } from "@/components/ui/timeline";
import { learningRoadmap } from "@/lib/constants/courses/learningRoadmap";
import { useState } from "react";

export default function LearningTracksPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1>Learning Tracks Page</h1>

      <div className="flex gap-4 mt-8 border-gray-200 border-b">
        {learningRoadmap.map((group, idx) => (
          <button
            key={group.gradeGroup}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === idx
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-indigo-500"
            }`}
            onClick={() => setActiveTab(idx)}
            type="button"
          >
            {group.gradeGroup}
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
