import { impactStats } from "@/lib/constants/metrics";

export default function PhilosophyPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1>Educational Philosophy</h1>

      <section className="mt-8">
        <h2>Purpose-Driven Learning</h2>
        <p>
          We believe that coding is more than just writing instructions for a
          computer—it's a tool for solving real-world problems. Our curriculum
          is designed around practical, project-based learning that inspires
          students to build meaningful applications and tools. Every lesson is
          grounded in relevance, helping students understand not only how
          technology works, but why it matters.
        </p>
      </section>

      <section className="mt-8">
        <h2>Creativity Through Structure</h2>
        <p>
          Creativity flourishes within structured challenges. Our approach gives
          students foundational concepts in logic, design, and syntax before
          encouraging them to branch out into open-ended exploration. This
          balance helps learners gain confidence as they discover their unique
          approach to coding.
        </p>
      </section>

      <section className="mt-8">
        <h2>Equity and Accessibility</h2>
        <p>
          We are committed to creating an inclusive learning environment where
          students from all backgrounds can thrive. Our lessons are designed
          with accessibility in mind, and we actively reduce barriers for
          students with limited tech access, neurodiversity, or disabilities.
          Every child deserves access to a high-quality computer science
          education.
        </p>
      </section>

      <section className="my-12">
        <h2>By the Numbers</h2>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat) => (
            <div key={stat.label} className="shadow-md p-6 rounded-lg">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2>Growth Mindset & Resilience</h2>
        <p>
          Coding naturally involves trial and error, which makes it a perfect
          vehicle for teaching persistence and resilience. We encourage students
          to embrace mistakes as learning moments, reinforcing a growth mindset
          that extends beyond the screen and into everyday life.
        </p>
      </section>

      <section className="mt-8">
        <h2>Teacher-Guided, Student-Led</h2>
        <p>
          Our educators are mentors who provide guidance, support, and
          structure—while allowing students the freedom to make decisions, ask
          questions, and experiment. This dynamic fosters independence and
          ownership over their learning.
        </p>
      </section>

      <section className="mt-8">
        <h2>Future-Focused Skills</h2>
        <p>
          In addition to technical proficiency, we cultivate essential
          21st-century skills like collaboration, digital citizenship, and
          critical thinking. Our learners graduate from our programs with the
          tools and confidence to shape the future—not just adapt to it.
        </p>
      </section>
    </div>
  );
}
