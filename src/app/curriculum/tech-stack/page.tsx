import { techStack } from "@/lib/constants/courses/techStack";

export default function TechStackPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>A Curriculum Built for the Real World</h1>
      <h5>
        Age-appropriate tools. Purpose-driven learning. Skills that last a
        lifetime.
      </h5>
      <p>
        Our curriculum is intentionally designed to be engaging, hands-on, and
        grounded in real-world relevance. We believe that the best way to learn
        is by doing—so from the very first lesson, students are actively
        building, creating, and problem-solving. Whether it's coding their first
        interactive game or designing a basic website, learners apply concepts
        immediately through meaningful projects that spark curiosity and
        reinforce learning.
      </p>
      <p>
        We leverage a diverse set of tools and platforms, thoughtfully selected
        for each age group and skill level. Younger students start with
        intuitive, visual-based programming environments that introduce
        computational thinking in a playful, accessible way. As they progress,
        they transition into more advanced coding languages and frameworks,
        including Python, JavaScript, HTML/CSS, and real development tools used
        in the industry.
      </p>
      <p>
        Our approach ensures that students don’t just memorize code—they
        understand how technology works, why it matters, and how they can use it
        to make a difference. Every project is carefully aligned with
        developmental milestones, educational standards, and the demands of
        today’s digital world, preparing students not just to keep up, but to
        lead.
      </p>
      <div className="space-y-10 mt-6 md:mt-8 lg:mt-12">
        {techStack.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            <p className="mb-3">{group.description}</p>
            <ul className="space-y-3 pl-6 list-disc">
              {group.tools.map((tool) => (
                <li key={tool.name}>
                  <strong>{tool.name}:</strong> {tool.desc}
                  <div className="mt-1 ml-5 text-sm">
                    <strong>Why we chose it:</strong> {tool.why}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-12 text-sm">
        <p>
          Our curriculum is regularly updated to include the latest technologies
          and best practices, preparing students for future academic and career
          success.
        </p>
      </div>
    </div>
  );
}
