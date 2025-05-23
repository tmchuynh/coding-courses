"use client";
import { summerCourses } from "@/lib/constants/courses/summerCourses";
import { useState } from "react";

export default function SummerCampsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Summer Camps</h1>
      <h5>
        Immersive, hands-on tech experiences that spark curiosity and build real
        skills
      </h5>
      <p>
        Our Summer Coding Camps are designed to turn vacation time into a season
        of exploration and innovation. Through full-day, week-long programs,
        students dive deep into coding, game development, robotics, and
        more—working on exciting projects that blend creativity with technology.
        Each camp is carefully structured to provide a fun, supportive
        environment where kids can build friendships, grow their confidence, and
        develop real-world skills they’ll carry into the future. Whether your
        child is a beginner or an experienced coder, our camps offer the perfect
        mix of learning and play to make their summer unforgettable.
      </p>

      {/* Tabs */}
      <div className="flex gap-4 mt-8 border-b border-border">
        {summerCourses.map((group, idx) => (
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
        <div className="space-y-6">
          {summerCourses[activeTab].courses.map((course) => (
            <div
              key={course.courseName}
              className="bg-card shadow-sm p-4 border border-border rounded-lg text-card-foreground"
            >
              <h3>
                {course.courseName} ({course.level})
              </h3>
              <h5>{course.subtitle}</h5>
              <div className="mb-2 text-sm">
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
