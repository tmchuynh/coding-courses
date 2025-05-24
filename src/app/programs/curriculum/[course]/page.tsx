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

  useEffect(() => {
    const fetchData = async () => {
      const ageGroup = findAgeGroupForCourse(courseTitle);
      if (!ageGroup) {
        return <div className="p-8">Age group not found.</div>;
      }
      try {
        // Await the Promise from getCurriculumData
        const data = await getCurriculumData(
          ageGroup?.replace(" ", "-").toLowerCase(),
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
      <h1>Curriculum Overview</h1>
      <p>
        Explore our comprehensive curriculum designed to provide a structured
        learning path for each age group.
      </p>
      <p>
        Our curriculum is divided into age groups, each with a tailored set of
        courses that build foundational skills and knowledge progressively.
      </p>
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
