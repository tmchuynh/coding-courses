"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { yearRoundSchedule } from "@/lib/constants/courses/yearRoundSchedule";
import { formatGradeRangeSlug, formatToSlug } from "@/lib/utils/format";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function AgeGroupSchedulePage() {
  const params = useParams();
  const ageGroupParam = decodeURIComponent(params.ageGroup as string);
  const router = useRouter();

  const group = yearRoundSchedule.find(
    (g) =>
      g.ageGroup.replace(/\s/g, "").replace(/–|-/g, "-") ===
      formatGradeRangeSlug(ageGroupParam)
        .replace(/\s/g, "")
        .replace(/–|-/g, "-")
  );

  // Gather all unique "includes" options from the group's courses
  const includesOptions = useMemo(() => {
    if (!group) return [];
    const set = new Set<string>();
    group.schedules.forEach((course) => {
      course.includes.forEach((inc: string) => set.add(inc));
    });
    return Array.from(set).sort();
  }, [group]);

  // Gather all unique days options from the group's courses
  const daysOptions = useMemo(() => {
    if (!group) return [];
    const set = new Set<string>();
    group.schedules.forEach((course) => {
      course.schedule.days.forEach((day: string) => set.add(day));
    });
    return Array.from(set).sort();
  }, [group]);

  // State for selected includes filters
  const [selectedIncludes, setSelectedIncludes] = useState<string[]>([]);
  // State for selected days filters
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  // Handler for toggling includes filter
  const handleIncludesChange = (inc: string) => {
    setSelectedIncludes((prev) =>
      prev.includes(inc) ? prev.filter((i) => i !== inc) : [...prev, inc]
    );
  };

  // Handler for toggling days filter
  const handleDaysChange = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // Filtered courses based on selected includes and days
  const filteredCourses = useMemo(() => {
    if (!group) return [];
    let courses = group.schedules;
    if (selectedIncludes.length > 0) {
      courses = courses.filter((course) =>
        selectedIncludes.every((inc) => course.includes.includes(inc))
      );
    }
    if (selectedDays.length > 0) {
      courses = courses.filter((course) =>
        selectedDays.every((day) => course.schedule.days.includes(day))
      );
    }
    return courses;
  }, [group, selectedIncludes, selectedDays]);

  if (!group) {
    return <div className="p-8">No schedule found for this age group.</div>;
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>{group.ageGroup} Course Schedules</h1>
      <h5>
        {group.schedules.length} Course
        {group.schedules.length > 1 ? "s" : ""} Available
        {group.schedules.length > 0 && ` for ${group.ageGroup}`}
      </h5>
      {/* Includes filter UI */}
      <div className="mb-6">
        <p>Filter by Includes:</p>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3">
          {includesOptions.map((inc) => (
            <Label key={inc} className="inline-flex items-center mr-4">
              <Input
                type="checkbox"
                className="mr-1 w-fit h-fit"
                checked={selectedIncludes.includes(inc)}
                onChange={() => handleIncludesChange(inc)}
              />
              {inc}
            </Label>
          ))}
        </div>
      </div>
      {/* Days filter UI */}
      <div className="mb-6">
        <p>Filter by Days:</p>
        <div className="gap-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mt-3">
          {daysOptions.map((day) => (
            <Label key={day} className="inline-flex items-center mr-4">
              <Input
                type="checkbox"
                className="mr-1 w-fit h-fit"
                checked={selectedDays.includes(day)}
                onChange={() => handleDaysChange(day)}
              />
              {day}
            </Label>
          ))}
        </div>
      </div>
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
        {filteredCourses.map((course) => (
          <div
            key={course.courseName}
            className="bg-white shadow-sm p-6 border rounded-lg"
          >
            <h2
              className="mb-2 font-semibold text-xl underline underline-offset-2 hover:no-underline cursor-pointer"
              onClick={() =>
                router.push(
                  `/programs/courses/${formatToSlug(
                    group.ageGroup
                  )}/${formatToSlug(course.courseName)}`
                )
              }
            >
              {course.courseName}
            </h2>
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
