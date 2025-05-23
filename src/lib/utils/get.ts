import { curriculumCourses } from "../constants/courses/curriculumCourses";

// Utility function to find age group for a given course name
export function findAgeGroupForCourse(courseName: string): string | undefined {
  for (const group of curriculumCourses) {
    if (group.courses.some((c) => c.courseName === courseName)) {
      return group.title;
    }
  }
  return undefined;
}
