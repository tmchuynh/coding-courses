"use client";

import { CourseSchedule } from "@/lib/interfaces/courses";
import { capitalize, formatKebabToCamelCase } from "@/lib/utils/format";
import { findAgeGroupForCourse } from "@/lib/utils/get";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CurriculumPage() {
  const segments = usePathname().split("/");
  const courseName = segments[segments.length - 1];
  const courseNameId = formatKebabToCamelCase(courseName);
  const courseTitle = capitalize(courseName);
  const [loading, setLoading] = useState(true);

  const [curriculumData, setCurriculumData] = useState<CourseSchedule[]>([]);

  console.log("ageGroup", findAgeGroupForCourse(courseTitle));

  useEffect(() => {
    const fetchData = async () => {
      const ageGroup = findAgeGroupForCourse(courseTitle);
      if (!ageGroup) {
        return <div className="p-8">Age group not found.</div>;
      }
      try {
        // Await the Promise from getCurriculumData
        const data = await getCurriculumData(
          ageGroup?.replaceAll("-", "to").replaceAll(" ", "-").toLowerCase(),
          courseName,
          courseNameId
        );
        setCurriculumData(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseName, courseNameId]);

  console.log("curriculumData", curriculumData);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>{courseTitle} Curriculum Preview</h1>
      <h5>
        {curriculumData.length} Week
        {curriculumData.length > 1 ? "s" : ""} Available
        {curriculumData.length > 0 && ` for ${courseTitle}`}
      </h5>
      <p>
        Our curriculum is designed to provide a comprehensive learning
        experience, covering essential topics and skills in a structured manner.
        Each week focuses on specific concepts and outcomes to ensure students
        build a solid foundation in coding and problem-solving.
      </p>

      <div className="flex flex-col gap-9">
        <div className="border rounded-md overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="font-semibold text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3 text-center">
                  <h4>Week</h4>
                </th>
                <th className="px-4 py-3">
                  <h4>Topic</h4>
                </th>
                <th className="hidden px-4 py-3 md:table-cell">
                  <h4>Focus</h4>
                </th>
                <th className="hidden px-4 py-3 lg:table-cell">
                  <h4>Outcomes</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {curriculumData.map((weekItem) => (
                <tr
                  key={weekItem.week}
                  className="hover:bg-muted border-t hover:text-muted-foreground"
                >
                  <td className="px-4 py-3 w-1/14 font-medium text-center">
                    {weekItem.week}
                  </td>
                  <td className="px-4 py-3 w-1/5 font-semibold text-pretty">
                    {weekItem.title}
                  </td>
                  <td className="hidden px-4 py-3 w-2/5 md:table-cell">
                    {weekItem.focus}
                  </td>
                  <td className="hidden px-4 py-3 lg:table-cell">
                    {weekItem.outcomes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border rounded-md overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="font-semibold text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3 text-center">
                  <h4>Week</h4>
                </th>
                <th className="px-4 py-3">
                  <h4>Project</h4>
                </th>
                <th className="hidden px-4 py-3 md:table-cell">
                  <h4>Project Description</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {curriculumData.map((weekItem) => (
                <tr
                  key={weekItem.week}
                  className="hover:bg-muted border-t hover:text-muted-foreground"
                >
                  <td className="px-4 py-3 w-1/14 font-medium text-center">
                    {weekItem.week}
                  </td>
                  <td className="px-4 py-3 w-1/5">{weekItem.project}</td>
                  <td className="hidden px-4 py-3 text-balance md:table-cell">
                    {weekItem.projectDescription}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function getCurriculumData(
  ageGroup: string,
  courseName: string,
  courseNameId: string
): Promise<any> {
  try {
    const curriculumModule = await import(
      `@/lib/constants/curriculum/${ageGroup}/${courseName}`
    );
    // Return the specific named export that matches toolKitID
    if (curriculumModule[courseNameId]) {
      return curriculumModule[courseNameId];
    } else {
      console.error(`Export named ${courseNameId} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}
