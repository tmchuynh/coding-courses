import { curriculumCourses } from "../constants/courses/curriculumCourses";
import { Course } from "../types/types";

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
  "web-and-app-dev": "Web & App Development",
  hardware: "Hardware & Robotics",
  business: "Business & Entrepreneurship",
  "college-prep": "College Prep",
  "full-stack-web": "Full Stack Web Development",
  "cyber-security": "Cyber Security",
  "data-science-ml-ai": "Data Science, ML & AI",
};

/**
 * Organizes courses by category from the curriculum data structure.
 * 
 * This function iterates through the curriculum courses and groups them by category.
 * Each course is stored with its name, level (if available), and age group.
 * 
 * @returns {Record<string, Array<{courseName: string, level?: string, ageGroup: string}>>} 
 * An object where:
 * - Keys are category names (string)
 * - Values are arrays of course objects containing:
 *   - courseName: The name of the course
 *   - level: Optional difficulty level of the course
 *   - ageGroup: The age group title the course belongs to
 * 
 * @example
 * // Returns something like:
 * // {
 * //   "Programming": [
 * //     { courseName: "Intro to JavaScript", level: "Beginner", ageGroup: "Ages 8-12" },
 * //     { courseName: "Advanced Python", level: "Intermediate", ageGroup: "Ages 13-17" }
 * //   ],
 * //   "Data Science": [
 * //     { courseName: "Data Analysis", level: "Advanced", ageGroup: "Ages 13-17" }
 * //   ]
 * // }
 */
export function getCoursesByCategory(): Record<string, Array<{ courseName: string; level?: string; ageGroup: string; }>> {
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

export function getCourseDetails(courseName: string, curriculum: Course[]) {
  console.log("courseName", courseName);
  return curriculum.find((c) => c.courseName === courseName);
}

/**
 * Returns the curriculum title based on a grade string input.
 * 
 * @param grade - The grade string to be evaluated (e.g., "K", "3", "10")
 * @returns The appropriate curriculum title range:
 *   - "Grades K to 2" for kindergarten, 0, 1, or 2
 *   - "Grades 3 to 5" for grades 3, 4, or 5
 *   - "Grades 6 to 8" for grades 6, 7, or 8
 *   - "Grades 9 to 12" for grades 9, 10, 11, or 12
 *   - Empty string if no matching grade is found
 */
export function getCurriculumTitleByGrade(grade: string) {
  // Normalize input
  const g = grade.trim().toLowerCase();
  if (["k", "kindergarten", "0", "1", "2"].some((v) => g.includes(v)))
    return "Grades K to 2";
  if (["3", "4", "5"].some((v) => g.includes(v))) return "Grades 3 to 5";
  if (["6", "7", "8"].some((v) => g.includes(v))) return "Grades 6 to 8";
  if (["9", "10", "11", "12"].some((v) => g.includes(v)))
    return "Grades 9 to 12";
  return "";
}


/**
 * Calculates the age range for a given grade level.
 * 
 * @param grade - A string representing the grade level (e.g., "K", "kindergarten", "1", "12").
 * @returns An object containing the minimum and maximum age appropriate for the grade level.
 * 
 * @example
 * // Returns { min: 5, max: 8 }
 * getAgeRangeByGrade("kindergarten");
 * 
 * @example
 * // Returns { min: 14, max: 18 }
 * getAgeRangeByGrade("9th grade");
 * 
 * @remarks
 * The function normalizes the input by trimming whitespace and converting to lowercase.
 * It handles grades K-12 and returns a default range of { min: 7, max: 16 } for unrecognized inputs.
 */
export function getAgeRangeByGrade(grade: string) {
  const g = grade.trim().toLowerCase();
  if (["k", "kindergarten", "0", "1", "2"].some((v) => g.includes(v)))
    return { min: 5, max: 8 };
  if (["3", "4", "5"].some((v) => g.includes(v))) return { min: 8, max: 11 };
  if (["6", "7", "8"].some((v) => g.includes(v))) return { min: 11, max: 14 };
  if (["9", "10", "11", "12"].some((v) => g.includes(v)))
    return { min: 14, max: 18 };
  return { min: 7, max: 16 }; // fallback default
}


/**
 * Returns an array of allowed trial days for a given grade group.
 * The days are represented as numbers where:
 * - 0 = Monday
 * - 1 = Tuesday
 * - 2 = Wednesday
 * - 3 = Thursday
 * - 4 = Friday
 * - 5 = Saturday
 * - 6 = Sunday
 * 
 * Different grade groups have different allowed trial days:
 * - Grades K to 2: Monday, Tuesday
 * - Grades 3 to 5: Wednesday, Thursday
 * - Grades 6 to 8: Friday, Monday
 * - Grades 9 to 12: Monday, Tuesday, Thursday
 * 
 * @param grade - The grade string to determine the curriculum group
 * @returns An array of numbers representing the allowed days of the week
 * @example
 * getAllowedTrialDaysByGrade("1") // Returns [0, 1] for Monday, Tuesday
 */
export function getAllowedTrialDaysByGrade(grade: string): number[] {
  const group = getCurriculumTitleByGrade(grade);
  // getDay(): 6=Sun, 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat
  switch (group) {
    case "Grades K to 2":
      return [0, 1]; // Monday, Tuesday
    case "Grades 3 to 5":
      return [2, 3]; // Wednesday, Thursday
    case "Grades 6 to 8":
      return [5, 0]; // Friday, Monday
    case "Grades 9 to 12":
      return [0, 1, 3]; // Monday, Tuesday, Thursday
    default:
      return [];
  }
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