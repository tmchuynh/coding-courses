import DynamicCTA from "@/components/CTAs/DynamicCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants/faqs";
import { pricingPlans } from "@/lib/constants/pricingPlans";

export default function PricingPlans() {
  // Find the "Pricing FAQs" section
  const pricingFaqSection = faqs.find(
    (section) => section.title === "Pricing FAQs"
  );

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Pricing Plans</h1>
      <h5>Flexible Options for Every Learner</h5>
      <p>
        Our pricing plans are designed to accommodate a variety of learning
        needs, whether you're looking for a single course or a comprehensive
        membership. Explore our options to find the perfect fit for you and your
        family.
      </p>
      <section className="mt-8">
        <DynamicCTA variant="trial-class" />
      </section>
      {/* Pricing Plans Display */}
      <div className="space-y-12 mt-12">
        {pricingPlans.map((plan, idx) => (
          <div key={idx}>
            <h2>{plan.planType}</h2>
            {plan.description &&
              plan.description.map((desc, i) => <p key={i}>{desc}</p>)}

            {/* Single Course Enrollment */}
            {"pricing" in plan && (
              <table className="mb-4 border w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-2 py-1 border">
                      <h4>Age Group</h4>
                    </th>
                    <th className="px-2 py-1 border">
                      <h4>Duration</h4>
                    </th>
                    <th className="px-2 py-1 border">
                      <h4>Online</h4>
                    </th>
                    <th className="px-2 py-1 border">
                      <h4>In-Person</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plan.pricing?.map((row, i) => (
                    <tr key={i}>
                      <td className="px-2 py-1 border">{row.ageGroup}</td>
                      <td className="px-2 py-1 border">{row.duration}</td>
                      <td className="px-2 py-1 border">${row.priceOnline}</td>
                      <td className="px-2 py-1 border">${row.priceInPerson}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Monthly Memberships */}
            {"tiers" in plan && (
              <div className="gap-4 grid md:grid-cols-2 mb-4">
                {plan.tiers?.map((tier, i) => (
                  <div key={i}>
                    <div className="inline-flex justify-between items-center w-full">
                      <h3>{tier.name}</h3>
                      <h4>${tier.pricePerMonth}/mo</h4>
                    </div>
                    <div className="">{tier.includes}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Full-Year Learning Path */}
            {"plans" in plan && (
              <table className="mb-4 border w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-2 py-1 border">
                      <h4>Path</h4>
                    </th>
                    <th className="px-2 py-1 border">
                      <h4>Online</h4>
                    </th>
                    <th className="px-2 py-1 border">
                      <h4>In-Person/Hybrid</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plan.plans?.map((p, i) => (
                    <tr key={i}>
                      <td className="px-2 py-1 border">{p.name}</td>
                      <td className="px-2 py-1 border">
                        ${p.annualPriceOnline}
                      </td>
                      <td className="px-2 py-1 border">
                        ${p.annualPriceInPersonHybrid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Optional Add-Ons */}
            {"items" in plan && (
              <ul className="mb-2 ml-6 list-disc">
                {plan.items?.map((item, i) => (
                  <li key={i}>
                    <strong>{item.name}:</strong> {item.price}
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Special Offers */}

            {"offers" in plan && (
              <ul className="mb-2 ml-6 list-disc">
                {plan.offers?.map((offer, i) => (
                  <li key={i}>
                    <strong>{offer.name}:</strong> {offer.price}
                    <p>{offer.description}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Includes/Benefits */}
            {plan.includes && (
              <ul className="mb-2 ml-6 list-disc">
                {plan.includes.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            )}

            {plan.benefits && (
              <ul className="mb-2 ml-6 list-disc">
                {plan.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Pricing FAQs Accordion */}
      {pricingFaqSection && (
        <div className="mt-4 md:mt-6 lg:mt-8">
          <h2 className="mb-4 font-bold text-2xl">{pricingFaqSection.title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {pricingFaqSection.faqs.map((faq, idx) => (
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
