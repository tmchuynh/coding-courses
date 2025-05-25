"use client";
import DynamicCTA from "@/components/CTAs/DynamicCTA";
import { impactStats } from "@/lib/constants/metrics";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>About Us</h1>
      <h5>Where kids become creators, not just consumers.</h5>
      <div className="gap-4 grid lg:grid-cols-2">
        <div>
          <p>
            We’re a team of educators, developers, designers, and dreamers who
            believe that every child should have the opportunity to shape the
            future with technology. Founded on the belief that computer science
            is a basic literacy in the digital age, we created a learning
            environment where young minds can explore, build, and grow through
            the power of code.
          </p>
          <p>
            Our programs are designed to be inclusive, engaging, and relevant to
            today’s world. We believe that coding is not just about learning a
            language; it’s about developing a mindset of innovation, resilience,
            and collaboration. We strive to create a space where every student
            feels empowered to explore their interests, express their ideas, and
            take ownership of their learning journey.
          </p>
        </div>
        <div>
          <p>
            We are proud to be a part of the movement to democratize access to
            computer science education. We work tirelessly to ensure that our
            programs are accessible to all students, regardless of their
            background or prior experience. We believe that diversity in tech is
            not just a goal—it’s a necessity. By fostering an inclusive
            environment, we aim to inspire the next generation of innovators,
            creators, and leaders who will shape the future of technology.
          </p>

          <p>
            At our core, we are more than just a coding academy. We are a
            community of mentors and makers committed to helping kids unlock
            their potential—by turning curiosity into capability and creativity
            into confidence.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <section>
          <h2>Our Story</h2>
          <p className="mb-2 italic">
            It started with a simple question:
            <br />
            “Why isn’t every child learning how to code?”
          </p>
          <p>
            From that question came a mission—to close the opportunity gap in
            computer science education. We saw firsthand how many students
            lacked access to the tools and support needed to thrive in an
            increasingly digital world. So we built a solution from the ground
            up: an inclusive, engaging, and forward-thinking curriculum tailored
            to the needs of students from all backgrounds.
          </p>
          <p>
            What began as a local after-school program has grown into a thriving
            educational movement, offering both in-person and online learning
            experiences for students ages 7–18. Today, we serve hundreds of
            families through year-round programs, summer camps, and school
            partnerships.
          </p>
        </section>

        <section>
          <h2>Our Approach</h2>
          <h5>Building future-ready thinkers.</h5>
          <p>
            We teach kids how to code—but more than that, we teach them how to
            think, create, and lead.
          </p>
          <p>
            Our approach is rooted in the belief that coding is a powerful tool
            for self-expression and problem-solving. We focus on hands-on,
            project-based learning that encourages students to explore their
            interests, collaborate with peers, and develop critical thinking
            skills.
          </p>
          <ul className="space-y-2 mt-4 list-disc list-inside">
            <li>
              <span className="font-semibold">Hands-On Learning:</span> Every
              class is project-based, so students learn by building real things
              that matter to them—games, websites, animations, apps, and more.
            </li>
            <li>
              <span className="font-semibold">Tech for All:</span> Our programs
              are designed with accessibility in mind. We actively work to
              reduce barriers for students with limited access to technology or
              those with learning differences.
            </li>
            <li>
              <span className="font-semibold">Real-World Skills:</span> In
              addition to technical ability, our students develop critical
              21st-century skills like problem-solving, teamwork, and digital
              citizenship.
            </li>
            <li>
              <span className="font-semibold">Supportive Instructors:</span> Our
              teachers are passionate educators and industry professionals who
              care deeply about student growth, confidence, and curiosity.
            </li>
          </ul>
        </section>

        <section>
          <h2>Impact & Outcomes</h2>
          <h5>Empowering kids through code..</h5>
          <p>
            We measure our success not just by the lines of code written, but by
            the lives changed. Our students leave our programs with more than
            just technical skills—they gain confidence, resilience, and a sense
            of belonging in the tech world.
          </p>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8">
            <div className="flex flex-col items-center p-4 text-center">
              <div className="flex justify-center items-center bg-card mb-3 rounded-full w-16 h-16 text-2xl">
                🎓
              </div>
              <h4 className="mb-1 font-medium text-lg">Learning Hours</h4>
              <p className="text-sm">
                Thousands of hours of live coding instruction delivered
              </p>
            </div>

            <div className="flex flex-col items-center p-4 text-center">
              <div className="flex justify-center items-center bg-card mb-3 rounded-full w-16 h-16 text-2xl">
                👩‍💻
              </div>
              <h4 className="mb-1 font-medium text-lg">Student Projects</h4>
              <p className="text-sm">
                Hundreds of student projects completed and showcased
              </p>
            </div>

            <div className="flex flex-col items-center p-4 text-center">
              <div className="flex justify-center items-center bg-card mb-3 rounded-full w-16 h-16 text-2xl">
                🌍
              </div>
              <h4 className="mb-1 font-medium text-lg">Global Reach</h4>
              <p className="text-sm">
                Students served across dozens of cities and schools
              </p>
            </div>

            <div className="flex flex-col items-center p-4 text-center">
              <div className="flex justify-center items-center bg-card mb-3 rounded-full w-16 h-16 text-2xl">
                💡
              </div>
              <h4 className="mb-1 font-medium text-lg">Inspired Learning</h4>
              <p className="text-sm">
                Countless moments of "aha!" that sparked lifelong passion
              </p>
            </div>
          </div>

          <p>
            Our alumni have gone on to explore high school robotics teams,
            university tech programs, and even early careers in design and
            development.
          </p>
        </section>

        {/* Metrics Section */}
        <section>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card shadow-sm p-4 border border-border rounded-lg text-card-foreground"
              >
                <div className="mb-1 font-bold text-2xl text-primary">
                  {stat.value}
                </div>
                <div className="mb-1 font-semibold">{stat.label}</div>
                <div className="text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Core Values</h2>
          <h5>Centered on access and purpose.</h5>
          <p>
            Our core values guide everything we do—from curriculum design to
            community engagement. They are the foundation of our mission and
            reflect our commitment to creating a positive impact in the lives of
            our students and their families.
          </p>
          <p>
            We believe that every child has the potential to be a creator, not
            just a consumer of technology. Our core values are not just words;
            they are the principles that shape our programs, our culture, and
            our community. We are committed to living these values every day, in
            every interaction, and in every decision we make.
          </p>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-6">
            <div className="flex items-start gap-4 bg-card p-6 border border-border rounded-xl text-card-foreground">
              <span className="text-3xl" role="img" aria-label="Code">
                💻
              </span>
              <div>
                <div className="mb-1 font-semibold text-lg">
                  Every child can learn to code.
                </div>
                <div className="text-sm">
                  We believe coding is for everyone, regardless of background or
                  experience.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-card p-6 border border-border rounded-xl text-card-foreground">
              <span className="text-3xl" role="img" aria-label="Diversity">
                🌈
              </span>
              <div>
                <div className="mb-1 font-semibold text-lg">
                  Diversity makes tech stronger.
                </div>
                <div className="text-sm">
                  Our community thrives on different perspectives and
                  experiences.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-card p-6 border border-border rounded-xl text-card-foreground">
              <span className="text-3xl" role="img" aria-label="Joy">
                🎉
              </span>
              <div>
                <div className="mb-1 font-semibold text-lg">
                  Learning should be joyful, challenging, and meaningful.
                </div>
                <div className="text-sm">
                  We make learning fun, engaging, and relevant for every
                  student.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-card p-6 border border-border rounded-xl text-card-foreground">
              <span className="text-3xl" role="img" aria-label="Growth">
                🚀
              </span>
              <div>
                <div className="mb-1 font-semibold text-lg">
                  Mistakes are part of progress.
                </div>
                <div className="text-sm">
                  We celebrate curiosity and see every mistake as a step toward
                  mastery.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-card p-6 border border-border rounded-xl text-card-foreground">
              <span className="text-3xl" role="img" aria-label="Lightbulb">
                💡
              </span>
              <div>
                <div className="mb-1 font-semibold text-lg">
                  Tech should be used to solve real problems, not just pass
                  time.
                </div>
                <div className="text-sm">
                  We empower students to use technology for creativity, impact,
                  and positive change.
                </div>
              </div>
            </div>
            {/* New Core Value */}
            <div className="flex items-start gap-4 bg-card p-6 border border-border rounded-xl text-card-foreground">
              <span className="text-3xl" role="img" aria-label="Collaboration">
                🤝
              </span>
              <div>
                <div className="mb-1 font-semibold text-lg">
                  Collaboration drives innovation.
                </div>
                <div className="text-sm">
                  We encourage teamwork and sharing ideas to solve challenges
                  and build a supportive learning community.
                </div>
              </div>
            </div>
          </div>
        </section>

        <DynamicCTA variant="meet-the-team" />

        <section>
          <h2>Get Involved</h2>
          <h5>Invest in the next generation of creators.</h5>
          <p>
            Whether you’re a parent, educator, student, or community
            partner—there’s a place for you here. Together, we can build a
            future where every child has the power to create, explore, and
            innovate with technology.
          </p>
        </section>
      </div>
    </div>
  );
}
