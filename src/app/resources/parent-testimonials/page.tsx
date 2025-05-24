import { parentSummerCampTestimonials } from "@/lib/constants/testimonials/summerCamps";
import { parentYearRoundTestimonials } from "@/lib/constants/testimonials/yearRound";
import { Testimonial } from "@/lib/types/types";

export default function ParentTestimonialsPage() {
  const allParentTestimonials: Testimonial[] = [
    ...parentYearRoundTestimonials,
    ...parentSummerCampTestimonials,
  ];

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Parent Testimonials</h1>
      <p>
        Our parents share their experiences and insights about our programs.
        Their testimonials highlight the positive impact on their children's
        education and development.
      </p>
      <div className="gap-6 md:gap-8 mt-6 columns-1 md:columns-2 lg:columns-3">
        {allParentTestimonials.length > 0 ? (
          allParentTestimonials.map((testimonial, index) => (
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
            No parent testimonials available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
