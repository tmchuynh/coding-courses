import { codingMatters } from "@/lib/constants/parentInfo";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function BentoGridSection() {
  return (
    <section>
      <h2>Why Coding Matters</h2>
      <p className="mb-2">
        Coding is more than just a technical skill—it’s a new kind of literacy
        in the digital age. These skills are relevant across careers and
        industries, and early exposure positions your child as a confident and
        capable digital citizen. Children who learn to code gain more than the
        ability to write programs. They develop:
      </p>
      <BentoGrid>
        {codingMatters.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
