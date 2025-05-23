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

export const CATEGORY_LABELS: Record<string, string> = {
  "block-coding": "Block Coding",
  "game-dev": "Game Development",
  "web-dev": "Web Development",
  hardware: "Hardware & Robotics",
  business: "Business & Entrepreneurship",
  ai: "AI & Algorithms",
};

export function getCoursesByCategory() {
  const categoryMap: Record<
    string,
    { courseName: string; level?: string; ageGroup: string }[]
  > = {};
  for (const group of curriculumCourses) {
    for (const course of group.courses) {
      const category = course.category;
      if (typeof category === "string") {
        if (!categoryMap[category]) {
          categoryMap[category] = [];
        }
        categoryMap[category].push({
          courseName: course.courseName,
          level: (course as any).level,
          ageGroup: group.title,
        });
      }
    }
  }
  return categoryMap;
}