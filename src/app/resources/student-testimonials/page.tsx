import { studentSummerCampTestimonials } from "@/lib/constants/testimonials/summerCamps";
import { studentYearRoundTestimonials } from "@/lib/constants/testimonials/yearRound";
import { Testimonial } from "@/lib/types/types";

export default function StudentTestimonialsPage() {
  const allStudentTestimonials: Testimonial[] = [
    ...studentYearRoundTestimonials,
    ...studentSummerCampTestimonials,
  ];

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Student Testimonials</h1>
      <p>
        Hear from our students about their experiences and successes in our
        programs. Their stories inspire us and showcase the impact of our
        educational approach.
      </p>
      <div className="gap-6 md:gap-8 mt-6 columns-1 md:columns-2 lg:columns-3">
        {allStudentTestimonials.length > 0 ? (
          allStudentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shadow-lg mb-6 md:mb-8 p-6 border border-border rounded-xl break-inside-avoid-column"
            >
              <p className="mb-4 text-base md:text-lg">
                "{testimonial.testimonial}"
              </p>
              <p className="text-right font-medium text-sm text-tertiary">
                - {testimonial.author}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-slate-500">
            No student testimonials available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
