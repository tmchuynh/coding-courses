import { techStack } from "@/lib/constants/courses/techStack";

export default function TechStackPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1>Our Technology Stack</h1>
      <p>
        We use a wide range of technologies and platforms tailored to each age
        group, ensuring students learn with the best tools for their level and
        goals.
      </p>
      <div className="space-y-10">
        {techStack.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            <p className="mb-3">{group.description}</p>
            <ul className="space-y-3 pl-6 list-disc">
              {group.tools.map((tool) => (
                <li key={tool.name}>
                  <span className="font-medium">{tool.name}:</span> {tool.desc}
                  <div className="mt-1 text-gray-600 text-sm">
                    <span className="font-semibold">Why we chose it:</span>{" "}
                    {tool.why}
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
