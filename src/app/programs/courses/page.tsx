"use client";

import CurriculumCourseCard from "@/components/cards/CurriculumCourseCard";
import { curriculumCourses } from "@/lib/constants/courses/curriculumCourses";
import { useState } from "react";

export default function CourseCatalogPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1>Course Catalog</h1>

      {/* Tabs */}
      <div className="flex gap-4 mt-8 border-gray-200 border-b">
        {curriculumCourses.map((group, idx) => (
          <button
            key={group.title}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === idx
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-indigo-500"
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
