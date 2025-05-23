import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants/faqs";
import { CATEGORY_LABELS, getCoursesByCategory } from "@/lib/utils/get";

export default function ProgramsPage() {
  const coursesByCategory = getCoursesByCategory();

  // Find the "Course Catalog FAQs" section
  const courseCatalogFaqSection = faqs.find(
    (section) => section.title === "Course Catalog FAQs"
  );

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Our Programs</h1>
      <h5>
        Comprehensive Coding Education Tailored for Every Age and Skill Level
      </h5>
      <p>
        Our curriculum is thoughtfully crafted to engage students actively
        through hands-on learning experiences that go beyond theory. Each
        program incorporates real-world applications to make coding meaningful
        and relevant, helping students understand how their skills apply outside
        the classroom. We carefully select technologies and platforms suited to
        different age groups and proficiency levels, ensuring that beginners
        build a solid foundation while more advanced learners tackle complex
        challenges. This tailored approach guarantees that every student learns
        with tools and projects aligned to their interests and developmental
        stage, fostering both confidence and competence in coding.
      </p>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto pt-8 lg:pt-12">
        {Object.entries(coursesByCategory).map(([category, courses]) => (
          <div
            key={category}
            className="flex flex-col bg-card shadow p-6 border border-border rounded-2xl text-card-foreground"
          >
            <div className="mb-4">
              <div className="mb-1 font-bold text-lg">
                {CATEGORY_LABELS[category] || category}
              </div>
              <div className="text-sm">
                {courses.length} course{courses.length > 1 ? "s" : ""}
              </div>
            </div>
            <ul className="flex-1 space-y-2">
              {courses.map((course, idx) => (
                <li
                  key={idx}
                  className="pb-2 last:pb-0 border-b last:border-b-0"
                >
                  <span className="font-medium">{course.courseName}</span>
                  <span className="ml-2 text-gray-400 text-xs">
                    {course.level ? `(${course.level})` : ""}
                  </span>
                  <div className="text-xs">{course.ageGroup}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* FAQ Accordion for Course Catalog FAQs */}
      {courseCatalogFaqSection && (
        <div className="mt-16">
          <h2 className="mb-4 font-bold text-2xl">
            {courseCatalogFaqSection.title}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {courseCatalogFaqSection.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
}
