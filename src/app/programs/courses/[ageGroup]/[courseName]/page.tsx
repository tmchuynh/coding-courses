"use client";
import { Button } from "@/components/ui/button";
import { curriculumCourses } from "@/lib/constants/courses/curriculumCourses";
import { yearRoundSchedule } from "@/lib/constants/courses/yearRoundSchedule";
import { Times } from "@/lib/types/types";
import { capitalize, formatToSlug } from "@/lib/utils/format";
import { findAgeGroupForCourse } from "@/lib/utils/get";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useParams, useRouter } from "next/navigation";

export default function CourseDetailPage() {
  const params = useParams();
  const courseNameParam = decodeURIComponent(params.courseName as string);
  const router = useRouter();

  // Find course in curriculumCourses
  let curriculumCourse: any = null;
  let curriculumGroupTitle = "";
  for (const group of curriculumCourses) {
    const found = group.courses.find(
      (c) =>
        c.courseName.replace(/\s/g, "").toLowerCase() ===
        capitalize(courseNameParam).replace(/\s/g, "").toLowerCase()
    );
    if (found) {
      curriculumCourse = found;
      curriculumGroupTitle = group.title;
      break;
    }
  }

  // Find course in yearRoundSchedule
  let scheduleCourse: any = null;
  let scheduleGroup: any = null;
  for (const group of yearRoundSchedule) {
    const found = group.schedules.find(
      (c) =>
        c.courseName.replace(/\s/g, "").toLowerCase() ===
        capitalize(courseNameParam).replace(/\s/g, "").toLowerCase()
    );
    if (found) {
      scheduleCourse = found;
      scheduleGroup = group;
      break;
    }
  }

  const sortedSchedule = groupAndSortByProperties(
    scheduleCourse.schedule,
    "days",
    "format"
  );

  if (!curriculumCourse) {
    return <div className="p-8">Course not found.</div>;
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>{curriculumCourse.courseName}</h1>
      <h5>
        {scheduleCourse.subtitle && <>{scheduleCourse.subtitle}</>}
        {curriculumCourse.level && <> | {curriculumCourse.level}</>}
        {scheduleGroup.ageGroup && <> ({scheduleGroup.ageGroup})</>}
      </h5>

      <p>{curriculumCourse.description}</p>
      <div className="mb-4">
        <h3>Focus:</h3>
        <ul className="ml-6 list-disc">
          {curriculumCourse.focus.map((f: string, i: number) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3>Outcomes:</h3>
        <ul className="ml-6 list-disc">
          {curriculumCourse.outcomes.map((o: string, i: number) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </div>
      {curriculumCourse.next && curriculumCourse.next.length > 0 && (
        <div className="mb-4">
          <h3>Next Course(s):</h3>
          <ul className="ml-6 list-disc">
            {curriculumCourse.next.map((n: string, i: number) => {
              const ageGroup = findAgeGroupForCourse(n);
              if (!ageGroup) {
                return <li key={i}>{n}</li>;
              }
              return (
                <li key={i}>
                  <Button
                    variant={"link"}
                    className="m-0"
                    onClick={() =>
                      router.push(
                        `/programs/courses/${formatToSlug(
                          ageGroup
                        )}/${formatToSlug(n)}`
                      )
                    }
                  >
                    {n}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {scheduleCourse && (
        <div className="mt-6 mb-4 pt-6 border-t">
          <h2>Current Schedule</h2>
          <div>
            <span className="font-semibold">Currently Includes:</span>{" "}
            {scheduleCourse.includes?.join(", ")}
          </div>
          <div className="gap-2 space-y-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
            {sortedSchedule.map((schedule: Times, i: number) => (
              <div key={i} className="flex flex-col gap-1">
                <div>
                  <span className="font-semibold">Meeting Days:</span>{" "}
                  {schedule.days.map((day: string, index: number) => (
                    <span key={index}>
                      {day}'s
                      {index < schedule.days.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="font-semibold">Meeting Time:</span>{" "}
                  {schedule.startTime &&
                    `${schedule.startTime} - ${schedule.endTime}`}{" "}
                </div>
                <div>
                  <span className="font-semibold">Duration:</span>{" "}
                  {schedule.durationWeeks && `${schedule.durationWeeks} weeks`}
                </div>
                <div>
                  <span className="font-semibold">Format:</span>{" "}
                  {schedule.format && `${schedule.format}`}
                </div>
                <div>
                  <span className="font-semibold">Instructors:</span>{" "}
                  {schedule.instructors && schedule.instructors.length > 0 ? (
                    schedule.instructors?.map(
                      (instructor: string, index: number) => (
                        <span key={index}>
                          {instructor}
                          {index < instructor.length - 1 ? ", " : ""}
                        </span>
                      )
                    )
                  ) : (
                    <span>Not assigned</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button
        className="mt-6"
        onClick={() =>
          router.push(`/programs/courses/${formatToSlug(curriculumGroupTitle)}`)
        }
      >
        View All Course Schedules for {curriculumGroupTitle}
      </Button>
    </div>
  );
}
