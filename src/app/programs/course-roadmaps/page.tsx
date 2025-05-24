"use client";

import { Timeline } from "@/components/ui/timeline";
import { curriculumCourses } from "@/lib/constants/courses/curriculumCourses";
import { learningRoadmap } from "@/lib/constants/courses/learningRoadmap";
import { Course } from "@/lib/types/types";
import { useState } from "react";

export default function LearningTracksPage() {
  const [activeTab, setActiveTab] = useState(0);

  // Get the current age group (e.g., "K–2", "3–5", etc.)
  const currentAgeGroup = learningRoadmap[activeTab].gradeGroup;

  // Find the curriculum for the current age group
  const curriculum =
    curriculumCourses.find(
      (c) => c.title.replace("Grades ", "") === currentAgeGroup
    )?.courses || [];

  // Helper to get full course details by name
  const getCourseDetails = (courseName: string) =>
    curriculum.find((c) => c.courseName === courseName);

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
            <p>{roadmap.description}</p>
            <div className="relative pl-6">
              <Timeline
                data={
                  roadmap.courses
                    .map((c) =>
                      typeof c === "string"
                        ? getCourseDetails(c)
                        : getCourseDetails(c.courseName)
                    )
                    .filter(Boolean) as Course[]
                }
                key={index}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
