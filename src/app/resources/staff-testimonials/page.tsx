import { staffTestimonials } from "@/lib/constants/testimonials/staff";

export default function StaffTestimonialsPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Staff Testimonials</h1>
      <p>
        Our staff members share their experiences and insights about working
        with us. Their testimonials highlight the supportive environment and the
        rewarding nature of our educational programs.
      </p>
      <div className="gap-6 md:gap-8 mt-6 columns-1 md:columns-2 lg:columns-3">
        {staffTestimonials.length > 0 ? (
          staffTestimonials.map((testimonial, index) => (
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
            No staff testimonials available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
