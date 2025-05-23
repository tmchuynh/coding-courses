"use client";

import CurriculumCourseCard from "@/components/cards/CurriculumCourseCard";
import { curriculumCourses } from "@/lib/constants/courses/curriculumCourses";
import { useState } from "react";

export default function CourseCatalogPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Course Catalog</h1>
      <h5>
        Comprehensive Coding Education Tailored for Every Age and Skill Level
      </h5>
      <p>
        Our curriculum is thoughtfully crafted to engage students actively
        through hands-on learning experiences that go beyond theory. Each
        program incorporates real-world applications to make coding meaningful
        and relevant, helping students understand how their skills apply outside
        the classroom. We carefully select technologies and platforms suited to
        different age groups and proficiency levels, ensuring that beginners
        build a solid foundation while more advanced learners tackle complex
        challenges. This tailored approach guarantees that every student learns
        with tools and projects aligned to their interests and developmental
        stage, fostering both confidence and competence in coding.
      </p>

      {/* Tabs */}
      <div className="flex gap-4 mt-8 border-b border-border">
        {curriculumCourses.map((group, idx) => (
          <button
            key={group.title}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === idx
                ? "border-tertiary text-tertiary border-b-2"
                : "border-transparent text-gray-500 hover:text-tertiary"
            }`}
            onClick={() => setActiveTab(idx)}
            type="button"
          >
            {group.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <section className="mt-8">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-3">
          {curriculumCourses[activeTab].courses.map((course, index) => (
            <CurriculumCourseCard course={course} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
