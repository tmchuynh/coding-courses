"use client";
import { yearRoundSchedule } from "@/lib/constants/courses/yearRoundSchedule";
import { formatGradeRangeSlug } from "@/lib/utils/format";
import { useParams } from "next/navigation";

export default function AgeGroupSchedulePage() {
  const params = useParams();
  const ageGroupParam = decodeURIComponent(params.ageGroup as string);

  const group = yearRoundSchedule.find(
    (g) =>
      g.ageGroup.replace(/\s/g, "").replace(/–|-/g, "-") ===
      formatGradeRangeSlug(ageGroupParam)
        .replace(/\s/g, "")
        .replace(/–|-/g, "-")
  );

  if (!group) {
    return <div className="p-8">No schedule found for this age group.</div>;
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1 className="mb-6 font-bold text-2xl">
        {group.ageGroup} Course Schedules
      </h1>
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
        {group.schedules.map((course) => (
          <div
            key={course.courseName}
            className="bg-white shadow-sm p-6 border rounded-lg"
          >
            <h2 className="mb-2 font-semibold text-xl">{course.courseName}</h2>
            {course.subtitle && (
              <div className="mb-1 text-indigo-700">{course.subtitle}</div>
            )}
            <div className="mb-2 text-gray-700">{course.description}</div>
            <div className="mb-2">
              <span className="font-semibold">Focus:</span>
              <ul className="ml-6 list-disc">
                {course.focus?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Outcomes:</span>
              <ul className="ml-6 list-disc">
                {course.outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Format:</span>{" "}
              {course.formatOptions.join(", ")}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Schedule:</span>{" "}
              {course.schedule.days.join(", ")}{" "}
              {course.schedule.startTime &&
                `| ${course.schedule.startTime} - ${course.schedule.endTime}`}{" "}
              {course.schedule.durationWeeks &&
                `| ${course.schedule.durationWeeks} weeks`}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Instructors:</span>{" "}
              {course.instructors}
            </div>
            <div>
              <span className="font-semibold">Includes:</span>{" "}
              {course.includes.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
