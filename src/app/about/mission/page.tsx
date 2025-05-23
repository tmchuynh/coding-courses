export default function MissionPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Our Mission */}
      <h1>Our Mission</h1>
      <h5>
        Empowering the next generation through code, creativity, and confidence.
      </h5>
      <p>
        In a world driven by technology, we believe every child deserves the
        opportunity not just to keep up—but to lead. Our mission is to
        democratize access to high-quality computer science education for
        students of all backgrounds. We aim to instill technical fluency,
        creative confidence, and a problem-solving mindset that empowers
        children to shape their futures and impact their communities through
        innovation.
      </p>
      <p>
        We are building a generation of thinkers, builders, and leaders—one line
        of code at a time.
      </p>

      <div className="flex flex-col gap-4 mt-4">
        {/* Why It Matters */}
        <section>
          <h2>Why It Matters</h2>
          <p>
            The future will be written in code. From healthcare and climate
            science to entertainment and art, nearly every industry is being
            transformed by technology. Yet, access to computer science education
            remains unequal. Many students—especially those from
            underrepresented communities—are left out of this transformation.
          </p>
          <p>We're here to change that.</p>
          <p>
            Coding isn't just a technical skill. It's a tool for critical
            thinking, storytelling, collaboration, and problem-solving. It
            teaches resilience, nurtures curiosity, and builds confidence. We
            see coding as a universal language of possibility—and we’re
            committed to making it available to every child.
          </p>
        </section>

        {/* How We Deliver Our Mission */}
        <section>
          <h2>How We Deliver Our Mission</h2>
          <p>
            We bring our mission to life through immersive, age-appropriate
            programs that balance foundational learning with real-world
            application. Whether a student is building their first game,
            designing an app to solve a local problem, or exploring advanced
            topics like AI and cybersecurity, our programs are structured to
            inspire and challenge every learner.
          </p>
          <ul className="space-y-2 mb-4 list-disc list-inside">
            <li>
              <strong>Project-Based Curriculum:</strong> Each course is designed
              around hands-on, creative challenges that reflect the problems and
              tools professionals use in the real world.
            </li>
            <li>
              <strong>Inclusive Classrooms:</strong> Our instructors are trained
              to support diverse learning needs, cultural backgrounds, and
              ability levels. Every student belongs here.
            </li>
            <li>
              <strong>Mentorship &amp; Support:</strong> Students are never
              alone in their learning journey. Our educators provide ongoing
              guidance, encouragement, and real feedback.
            </li>
            <li>
              <strong>Accessible Learning Formats:</strong> Whether online or
              in-person, our classes are flexible and accessible—designed to
              meet students where they are, both geographically and
              academically.
            </li>
          </ul>
        </section>

        {/* Core Values */}
        <section>
          <h2>Core Values</h2>
          <p>These five principles guide every decision we make:</p>
          <ul className="space-y-2 mb-4 list-disc list-inside">
            <li>
              <strong>Equity:</strong> We prioritize access, inclusion, and
              representation across all our programs. Equity isn’t a
              feature—it’s a foundation.
            </li>
            <li>
              <strong>Curiosity:</strong> We celebrate questions, not just
              answers. Our students learn to explore, investigate, and think
              independently.
            </li>
            <li>
              <strong>Resilience:</strong> Failure isn’t a setback; it’s part of
              the process. We teach students how to persevere through challenge
              and uncertainty.
            </li>
            <li>
              <strong>Relevance:</strong> Everything we teach is grounded in
              real-world applications. We want students to understand not just
              how technology works, but why it matters.
            </li>
            <li>
              <strong>Community:</strong> Learning is a shared experience. Our
              classrooms foster respect, collaboration, and a sense of
              belonging.
            </li>
          </ul>
        </section>

        {/* Our Vision */}
        <section>
          <h2>Our Vision</h2>
          <p>We envision a future where:</p>
          <ul className="space-y-2 mb-4 list-disc list-inside">
            <li>
              Every child, regardless of zip code, has the opportunity to learn
              how to code.
            </li>
            <li>
              Diversity is reflected across the technology sector, starting in
              the classroom.
            </li>
            <li>
              Students don’t just dream of building apps, games, and
              companies—they do it.
            </li>
            <li>
              Coding is recognized not just as a technical skill, but as a form
              of creative and civic expression.
            </li>
            <li>
              Education systems value computational thinking alongside literacy
              and numeracy.
            </li>
          </ul>
          <p>
            This is the future we’re building—together with our students,
            families, educators, and partners.
          </p>
        </section>

        {/* Join Us */}
        <section>
          <h2>Join Us</h2>
          <p>
            Whether you're a parent, student, educator, or supporter, we invite
            you to be part of this mission. Together, we can give children the
            tools to not just navigate the future—but to lead it.
          </p>
        </section>
      </div>
    </div>
  );
}
