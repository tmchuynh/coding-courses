import { impactStats } from "@/lib/constants/metrics";
import Image from "next/image";

export default function PhilosophyPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Educational Philosophy</h1>
      <h5>A Student-Centered Approach to Lifelong Learning</h5>
      <p>
        Our educational philosophy centers on nurturing curiosity, creativity,
        and critical thinking through an inclusive, supportive environment. We
        believe that every child learns best when engaged actively and
        encouraged to explore coding as a tool for problem-solving and
        self-expression. By emphasizing hands-on experience, collaboration, and
        adaptability, we prepare students not just to master technical skills
        but to become confident, resilient learners ready to thrive in an
        ever-evolving technological landscape.
      </p>

      <div className="gap-5 grid md:grid-cols-3 mt-3">
        <Image
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww"
          alt="Coding Class"
          width={600}
          height={400}
          className="md:block md:col-span-1 rounded-lg w-full h-full hiddn object-cover"
        />
        <div className="md:col-span-2">
          <section className="mt-8">
            <h2>Purpose-Driven Learning</h2>
            <p>
              We believe coding is far more than writing instructions for a
              machine — it is a powerful tool for addressing real-world
              challenges. Our curriculum emphasizes practical, project-based
              learning that motivates students to create meaningful applications
              and solutions. Each lesson is thoughtfully designed to connect
              technology concepts with their real-life impact, ensuring students
              not only understand how technology works but also why it is vital
              in today’s world.
            </p>
          </section>
          <section className="mt-8">
            <h2>Creativity Through Structure</h2>
            <p>
              True creativity thrives within a clear framework. Our teaching
              approach balances foundational instruction in logic, design
              principles, and syntax with opportunities for open-ended
              exploration. This structured freedom allows students to build
              confidence by mastering core skills and then applying them to
              innovate in ways that reflect their personal style and ideas.
            </p>
          </section>
          <section className="mt-8">
            <h2>Equity and Accessibility</h2>
            <p>
              We are deeply committed to fostering an inclusive educational
              environment where every student has the opportunity to succeed.
              Our curriculum is designed with accessibility at its core,
              addressing diverse learning needs and proactively removing
              barriers faced by students from underrepresented backgrounds,
              those with disabilities, or with limited technology access.
              Quality computer science education should be universally
              available.
            </p>
          </section>
        </div>
      </div>

      <section className="my-12">
        <h2>By the Numbers</h2>
        <h5>Our Impact in the Coding Education Landscape</h5>
        <p>
          Our impact is best demonstrated through the tangible achievements of
          our students and the positive changes within the communities we serve.
          We are proud to share key statistics that underscore our unwavering
          commitment to delivering high-quality coding education. These figures
          reflect not only student growth and engagement but also the broader
          influence of our programs in preparing the next generation of tech
          leaders and innovators.
        </p>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card shadow-md p-6 border border-border rounded-lg text-card-foreground"
            >
              <h2 className="text-accent">{stat.value}</h2>
              <h4>{stat.label}</h4>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gap-5 grid md:grid-cols-3">
        <div className="md:col-span-2">
          <section className="mt-8">
            <h2>Growth Mindset & Resilience</h2>
            <p>
              Coding naturally involves experimentation, mistakes, and
              iteration—ideal conditions for cultivating persistence and
              resilience. We teach students to view challenges as valuable
              learning experiences, reinforcing a growth mindset that encourages
              perseverance, adaptability, and problem-solving skills that extend
              well beyond programming.
            </p>
          </section>
          <section className="mt-8">
            <h2>Teacher-Guided, Student-Led</h2>
            <p>
              Our instructors act as mentors who provide essential guidance,
              support, and structure while empowering students to take charge of
              their learning. This balance promotes independence, encourages
              curiosity, and nurtures a sense of ownership over their
              educational journey.
            </p>
          </section>
          <section className="mt-8">
            <h2>Future-Focused Skills</h2>
            <p>
              Beyond technical expertise, our programs cultivate essential
              21st-century skills such as collaboration, ethical digital
              citizenship, and critical thinking. Graduates leave prepared not
              merely to keep pace with technological change but to actively
              shape the future through innovation and leadership.
            </p>
          </section>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D"
          alt="Coding Class"
          width={600}
          height={400}
          className="md:block hidden md:col-span-1 rounded-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
