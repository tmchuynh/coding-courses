"use client";

import { Course } from "@/lib/types/types";
import { formatToSlug } from "@/lib/utils/format";
import { findAgeGroupForCourse } from "@/lib/utils/get";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function CurriculumCourseCard({ course }: { course: Course }) {
  const router = useRouter();
  const ageGroup = findAgeGroupForCourse(course.courseName);
  if (!ageGroup) {
    return <div className="p-8">Age group not found.</div>;
  }
  return (
    <div className="shadow p-6 border rounded-lg">
      <h3>{course.courseName}</h3>
      <p className="mb-4">{course.description}</p>
      <div className="mb-2">
        <h3 className="font-semibold">Focus:</h3>
        {course.focus && course.focus.length > 0 && (
          <ul className="ml-4 list-disc list-inside">
            {course.focus.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-2">
        <h3 className="font-semibold">Outcomes:</h3>
        <ul className="ml-4 list-disc list-inside">
          {course.outcomes.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      {course.next && course.next.length > 0 && (
        <div>
          <h3 className="font-semibold">Next Courses:</h3>
          <ul className="ml-4 list-disc list-inside">
            {course.next.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <Button
        className="mt-6"
        onClick={() =>
          router.push(
            `/curriculum/age-groups/${formatToSlug(ageGroup)}/${formatToSlug(
              course.courseName
            )}`
          )
        }
      >
        View Current Schedule
      </Button>
    </div>
  );
}
