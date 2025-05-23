"use client";
import { Button } from "@/components/ui/button";
import { curriculumCourses } from "@/lib/constants/courses/curriculumCourses";
import { learningRoadmap } from "@/lib/constants/courses/learningRoadmap";
import { yearRoundSchedule } from "@/lib/constants/courses/yearRoundSchedule";
import { capitalize, formatToSlug } from "@/lib/utils/format";
import { findAgeGroupForCourse } from "@/lib/utils/get";
import { sortByLength } from "@/lib/utils/sort";
import { useParams, useRouter } from "next/navigation";

function uniqueArray(arr: string[]) {
  return Array.from(new Set(arr));
}

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

  // Find course in learningRoadmap
  let roadmapCourse: any = null;
  for (const group of learningRoadmap) {
    for (const roadmap of group.roadmaps) {
      const found = roadmap.courses.find(
        (c) =>
          c.courseName.replace(/\s/g, "").toLowerCase() ===
          capitalize(courseNameParam).replace(/\s/g, "").toLowerCase()
      );
      if (found) {
        roadmapCourse = found;
        break;
      }
    }
    if (roadmapCourse) break;
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

  if (!curriculumCourse) {
    return <div className="p-8">Course not found.</div>;
  }

  // Combine focus and outcomes arrays, removing duplicates
  const focus = sortByLength(
    uniqueArray([
      ...(curriculumCourse.focus || []),
      ...(roadmapCourse?.focus || []),
      ...(scheduleCourse?.focus || []),
    ])
  );
  const outcomes = sortByLength(
    uniqueArray([
      ...(curriculumCourse.outcomes || []),
      ...(roadmapCourse?.outcomes || []),
      ...(scheduleCourse?.outcomes || []),
    ])
  );

  console.log("scheduleCourse", scheduleCourse);
  console.log("roadmapCourse", roadmapCourse);
  console.log("curriculumCourse", curriculumCourse);
  console.log("curriculumGroupTitle", curriculumGroupTitle);
  console.log("scheduleGroup", scheduleGroup);

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
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
          {focus.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3>Outcomes:</h3>
        <ul className="ml-6 list-disc">
          {outcomes.map((o, i) => (
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
          <div className="flex flex-col gap-2 md:grid grid-cols-2 mt-2">
            <div className="flex flex-col gap-2">
              <div>
                <span className="font-semibold">Meeting Days:</span>{" "}
                {scheduleCourse.schedule.days.map(
                  (day: string, index: number) => (
                    <span key={index}>
                      {day}'s
                      {index < scheduleCourse.schedule.days.length - 1
                        ? ", "
                        : ""}
                    </span>
                  )
                )}
              </div>
              <div>
                <span className="font-semibold">Meeting Time:</span>{" "}
                {scheduleCourse.schedule.startTime &&
                  `${scheduleCourse.schedule.startTime} - ${scheduleCourse.schedule.endTime}`}{" "}
              </div>
              <div>
                <span className="font-semibold">Duration:</span>{" "}
                {scheduleCourse.schedule.durationWeeks &&
                  `${scheduleCourse.schedule.durationWeeks} weeks`}
              </div>

              <div>
                <span className="font-semibold">Instructors:</span>{" "}
                {scheduleCourse.instructors}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <span className="font-semibold">Format Options:</span>{" "}
                {scheduleCourse.formatOptions?.join(", ")}
              </div>
              <div>
                <span className="font-semibold">Includes:</span>{" "}
                {scheduleCourse.includes?.join(", ")}
              </div>
            </div>
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
