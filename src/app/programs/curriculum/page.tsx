"use client";

import { Card, CardContent } from "@/components/ui/card";
import { curriculumCourses } from "@/lib/constants/courses/curriculumCourses";
import { formatToSlug } from "@/lib/utils/format";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AgeGroupsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Preview Our Planned Our Curriculum for Each Class</h1>

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
            <Card key={index}>
              <CardContent>
                <h3
                  className="underline underline-offset-2 hover:no-underline cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/programs/curriculum/${formatToSlug(course.courseName)}/`
                    )
                  }
                >
                  {course.courseName}
                </h3>
                <p>{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
