"use client";
import { summerCourses } from "@/lib/constants/courses/summerCourses";
import { useState } from "react";

export default function SummerCampsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1>Summer Camps</h1>

      {/* Tabs */}
      <div className="flex gap-4 mt-8 border-gray-200 border-b">
        {summerCourses.map((group, idx) => (
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
        <div className="space-y-6">
          {summerCourses[activeTab].courses.map((course) => (
            <div
              key={course.courseName}
              className="bg-white shadow-sm p-4 border rounded-lg"
            >
              <h3 className="font-bold text-lg">{course.courseName}</h3>
              <div className="mb-2 text-gray-600 text-sm">
                <span>{course.duration}</span> | <span>{course.format}</span>
              </div>
              <p className="mb-2">{course.description}</p>
              {course.keyProjects && course.keyProjects.length > 0 && (
                <div className="mb-2">
                  <span className="font-semibold">Key Projects:</span>
                  <ul className="ml-4 list-disc list-inside">
                    {course.keyProjects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
              {course.outcomes && course.outcomes.length > 0 && (
                <div>
                  <span className="font-semibold">Outcomes:</span>
                  <ul className="ml-4 list-disc list-inside">
                    {course.outcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
