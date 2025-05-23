import DynamicCTA from "@/components/CTAs/DynamicCTA";
import { faqs } from "@/lib/constants/faqs";

export default function FAQsPage() {
  const generalFaqSection = faqs.find(
    (section) => section.title === "General FAQs"
  );
  const generalFaqs = generalFaqSection?.faqs ?? [];

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Frequently Asked Questions</h1>
      <h5>
        Answers to help you feel confident about your child’s coding journey.
      </h5>
      <p>
        We know that choosing the right coding program is an important decision.
        Whether you're wondering about curriculum structure, class logistics,
        age requirements, or technical needs, we've compiled answers to the most
        common questions from parents and students. If you don’t see your
        question here, feel free to reach out—we’re always happy to help.
      </p>
      <div className="divide-y">
        {generalFaqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="flex md:flex-row flex-col gap-4 px-4 md:px-8 py-6"
          >
            <h4 className="md:w-1/2">{faq.question}</h4>
            <p className="md:w-1/2">{faq.answer}</p>
          </div>
        ))}
      </div>

      <DynamicCTA />
    </div>
  );
}
