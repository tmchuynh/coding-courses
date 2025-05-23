import { curriculumCourses } from "@/lib/constants/courses/curriculumCourses";

const CATEGORY_LABELS: Record<string, string> = {
  "block-coding": "Block Coding",
  "game-dev": "Game Development",
  "web-dev": "Web Development",
  hardware: "Hardware & Robotics",
  business: "Business & Entrepreneurship",
  ai: "AI & Algorithms",
};

function getCoursesByCategory() {
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

export default function ProgramsPage() {
  const coursesByCategory = getCoursesByCategory();

  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      {Object.entries(coursesByCategory).map(([category, courses]) => (
        <div
          key={category}
          className="flex flex-col bg-white shadow-lg p-6 rounded-2xl"
        >
          <div className="mb-4">
            <div className="mb-1 font-bold text-lg">
              {CATEGORY_LABELS[category] || category}
            </div>
            <div className="text-gray-500 text-sm">
              {courses.length} course{courses.length > 1 ? "s" : ""}
            </div>
          </div>
          <ul className="flex-1 space-y-2">
            {courses.map((course, idx) => (
              <li key={idx} className="pb-2 last:pb-0 border-b last:border-b-0">
                <span className="font-medium">{course.courseName}</span>
                <span className="ml-2 text-gray-400 text-xs">
                  {course.level ? `(${course.level})` : ""}
                </span>
                <div className="text-gray-500 text-xs">{course.ageGroup}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
