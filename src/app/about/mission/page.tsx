export default function MissionPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Our Mission */}
      <section className="mb-8">
        <h1 className="mb-4 font-bold text-4xl">Our Mission</h1>
        <h5 className="mb-6 text-gray-600 text-xl dark:text-gray-300">
          Empowering the next generation through code, creativity, and
          confidence.
        </h5>
        <div className="space-y-4 leading-relaxed text-lg">
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
            We recognize that technology is not just a career path—it's a lens
            through which to understand and improve the world. When we teach
            coding, we're teaching students to think systematically, break down
            complex problems, and create solutions that can reach millions of
            people. We're preparing them for a future where digital literacy is
            as fundamental as reading and writing.
          </p>
          <p>
            We are building a generation of thinkers, builders, and leaders—one
            line of code at a time. Our students don't just learn syntax; they
            learn to see problems as opportunities and develop the confidence to
            tackle challenges that haven't been solved yet.
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-8 mt-8">
        {/* Why It Matters */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-3xl">Why It Matters</h2>
          <div className="space-y-4">
            <p>
              The future will be written in code. From healthcare and climate
              science to entertainment and art, nearly every industry is being
              transformed by technology. Yet, access to computer science
              education remains unequal. Many students—especially those from
              underrepresented communities—are left out of this transformation.
            </p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">
              We're here to change that.
            </p>
            <p>
              Coding isn't just a technical skill. It's a tool for critical
              thinking, storytelling, collaboration, and problem-solving. It
              teaches resilience, nurtures curiosity, and builds confidence. We
              see coding as a universal language of possibility—and we're
              committed to making it available to every child.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 mt-6 p-6 rounded-lg">
              <h3 className="mb-3 font-semibold text-xl">
                The Digital Divide Reality
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-red-500 mr-3 mt-2 rounded-full h-2 w-2"></span>
                  <span>
                    Only 51% of high schools offer computer science courses
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-red-500 mr-3 mt-2 rounded-full h-2 w-2"></span>
                  <span>
                    Students in rural areas are 3x less likely to have access to
                    CS education
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-red-500 mr-3 mt-2 rounded-full h-2 w-2"></span>
                  <span>
                    Underrepresented minorities make up only 20% of CS graduates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-green-500 mr-3 mt-2 rounded-full h-2 w-2"></span>
                  <span>
                    Computing jobs are projected to grow 13% through 2030
                  </span>
                </li>
              </ul>
            </div>
            <p>
              Beyond career opportunities, coding education develops
              computational thinking— a fundamental skill for understanding
              patterns, designing systems, and solving complex problems across
              all disciplines. Students who learn to code develop enhanced
              logical reasoning, mathematical understanding, and creative
              expression abilities that serve them throughout their lives.
            </p>
          </div>
        </section>

        {/* The Problem We're Solving */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-3xl">
            The Problem We're Solving
          </h2>
          <div className="space-y-4">
            <p>
              Despite the critical importance of computer science education,
              significant barriers prevent many students from accessing quality
              programming instruction:
            </p>
            <div className="gap-6 grid md:grid-cols-2 mt-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 border border-red-200 dark:border-red-800 rounded-lg">
                <h3 className="mb-2 font-semibold text-red-800 dark:text-red-300">
                  Geographic Inequality
                </h3>
                <p className="text-red-700 text-sm dark:text-red-400">
                  Rural and underserved urban areas often lack qualified CS
                  teachers and adequate technology infrastructure, creating
                  educational deserts.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 border border-orange-200 dark:border-orange-800 rounded-lg">
                <h3 className="mb-2 font-semibold text-orange-800 dark:text-orange-300">
                  Economic Barriers
                </h3>
                <p className="text-orange-700 text-sm dark:text-orange-400">
                  High-quality coding programs are often expensive and out of
                  reach for families who could benefit most from the
                  opportunities they provide.
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <h3 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-300">
                  Representation Gap
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                  Women, minorities, and first-generation college students are
                  significantly underrepresented in computer science,
                  perpetuating inequality.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h3 className="mb-2 font-semibold text-purple-800 dark:text-purple-300">
                  Outdated Teaching Methods
                </h3>
                <p className="text-purple-700 text-sm dark:text-purple-400">
                  Many programs focus on memorization rather than creative
                  problem-solving, failing to engage students or prepare them
                  for real-world applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Deliver Our Mission */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-3xl">
            How We Deliver Our Mission
          </h2>
          <div className="space-y-6">
            <p className="text-lg">
              We bring our mission to life through immersive, age-appropriate
              programs that balance foundational learning with real-world
              application. Whether a student is building their first game,
              designing an app to solve a local problem, or exploring advanced
              topics like AI and cybersecurity, our programs are structured to
              inspire and challenge every learner.
            </p>

            <div className="gap-8 grid md:grid-cols-2 mt-8">
              <div>
                <h3 className="flex items-center mb-4 font-semibold text-xl">
                  <span className="flex items-center justify-center bg-blue-500 mr-3 rounded-full h-8 w-8 font-bold text-sm text-white">
                    1
                  </span>
                  Project-Based Curriculum
                </h3>
                <p className="mb-3">
                  Each course is designed around hands-on, creative challenges
                  that reflect the problems and tools professionals use in the
                  real world.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm dark:text-gray-400">
                  <li>• Build games that teach physics and math concepts</li>
                  <li>• Create mobile apps that solve community problems</li>
                  <li>• Develop websites for local nonprofits</li>
                  <li>• Design AI models for environmental monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center mb-4 font-semibold text-xl">
                  <span className="flex items-center justify-center bg-green-500 mr-3 rounded-full h-8 w-8 font-bold text-sm text-white">
                    2
                  </span>
                  Inclusive Classrooms
                </h3>
                <p className="mb-3">
                  Our instructors are trained to support diverse learning needs,
                  cultural backgrounds, and ability levels. Every student
                  belongs here.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm dark:text-gray-400">
                  <li>• Culturally responsive teaching practices</li>
                  <li>
                    • Multiple learning modalities (visual, auditory,
                    kinesthetic)
                  </li>
                  <li>• Accommodations for different abilities</li>
                  <li>• Multilingual support when needed</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center mb-4 font-semibold text-xl">
                  <span className="flex items-center justify-center bg-purple-500 mr-3 rounded-full h-8 w-8 font-bold text-sm text-white">
                    3
                  </span>
                  Mentorship & Support
                </h3>
                <p className="mb-3">
                  Students are never alone in their learning journey. Our
                  educators provide ongoing guidance, encouragement, and real
                  feedback.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm dark:text-gray-400">
                  <li>• 1-on-1 code review sessions</li>
                  <li>• Peer collaboration and pair programming</li>
                  <li>• Industry mentor connections</li>
                  <li>• Career guidance and pathway planning</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center mb-4 font-semibold text-xl">
                  <span className="flex items-center justify-center bg-orange-500 mr-3 rounded-full h-8 w-8 font-bold text-sm text-white">
                    4
                  </span>
                  Accessible Learning Formats
                </h3>
                <p className="mb-3">
                  Whether online or in-person, our classes are flexible and
                  accessible—designed to meet students where they are, both
                  geographically and academically.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm dark:text-gray-400">
                  <li>• Synchronous and asynchronous options</li>
                  <li>• Device lending program for students in need</li>
                  <li>• Flexible scheduling for working families</li>
                  <li>• Multiple skill level entry points</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-3xl">Core Values</h2>
          <p className="mb-6 text-lg">
            These five principles guide every decision we make:
          </p>

          <div className="space-y-6">
            <div className="pl-6 py-2 border-blue-500 border-l-4">
              <h3 className="mb-2 font-semibold text-blue-700 text-xl dark:text-blue-400">
                Equity
              </h3>
              <p className="mb-3">
                We prioritize access, inclusion, and representation across all
                our programs. Equity isn't a feature—it's a foundation.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                This means actively working to remove barriers, providing
                financial assistance, and ensuring our curriculum reflects
                diverse perspectives and experiences.
              </p>
            </div>

            <div className="pl-6 py-2 border-green-500 border-l-4">
              <h3 className="mb-2 font-semibold text-green-700 text-xl dark:text-green-400">
                Curiosity
              </h3>
              <p className="mb-3">
                We celebrate questions, not just answers. Our students learn to
                explore, investigate, and think independently.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                We encourage experimentation, embrace failure as learning, and
                reward creative thinking over rote memorization.
              </p>
            </div>

            <div className="pl-6 py-2 border-purple-500 border-l-4">
              <h3 className="mb-2 font-semibold text-purple-700 text-xl dark:text-purple-400">
                Resilience
              </h3>
              <p className="mb-3">
                Failure isn't a setback; it's part of the process. We teach
                students how to persevere through challenge and uncertainty.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                Debugging code teaches patience and systematic thinking.
                Overcoming programming challenges builds confidence for life's
                bigger obstacles.
              </p>
            </div>

            <div className="pl-6 py-2 border-orange-500 border-l-4">
              <h3 className="mb-2 font-semibold text-orange-700 text-xl dark:text-orange-400">
                Relevance
              </h3>
              <p className="mb-3">
                Everything we teach is grounded in real-world applications. We
                want students to understand not just how technology works, but
                why it matters.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                Our projects address current issues like climate change, social
                justice, and community health, showing students how code can
                create positive impact.
              </p>
            </div>

            <div className="pl-6 py-2 border-l-4 border-red-500">
              <h3 className="mb-2 font-semibold text-red-700 text-xl dark:text-red-400">
                Community
              </h3>
              <p className="mb-3">
                Learning is a shared experience. Our classrooms foster respect,
                collaboration, and a sense of belonging.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                Students work in teams, share their projects, and support each
                other's growth. We build lasting relationships that extend
                beyond the classroom.
              </p>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-3xl">Our Impact</h2>
          <div className="space-y-6">
            <p className="text-lg">
              Since our founding, we've seen the transformative power of
              accessible computer science education in action:
            </p>

            <div className="gap-6 grid md:grid-cols-3 mt-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
                <div className="mb-2 font-bold text-3xl text-blue-600 dark:text-blue-400">
                  1,200+
                </div>
                <div className="text-blue-800 text-sm dark:text-blue-300">
                  Students Taught
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
                <div className="mb-2 font-bold text-3xl text-green-600 dark:text-green-400">
                  78%
                </div>
                <div className="text-green-800 text-sm dark:text-green-300">
                  From Underrepresented Groups
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center">
                <div className="mb-2 font-bold text-3xl text-purple-600 dark:text-purple-400">
                  500+
                </div>
                <div className="text-purple-800 text-sm dark:text-purple-300">
                  Projects Created
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 mt-6 p-6 rounded-lg">
              <h3 className="mb-4 font-semibold text-xl">
                Student Success Stories
              </h3>
              <div className="space-y-4 text-sm">
                <blockquote className="pl-4 border-blue-500 border-l-4 italic">
                  "I never thought I could code until I joined this program. Now
                  I'm building an app to help my grandmother track her
                  medications, and I'm planning to study computer science in
                  college." - Maria, Age 16
                </blockquote>
                <blockquote className="pl-4 border-green-500 border-l-4 italic">
                  "The confidence I gained here helped me in all my subjects. I
                  approach math problems the same way I debug code—step by step,
                  without giving up." - Jerome, Age 14
                </blockquote>
                <blockquote className="pl-4 border-purple-500 border-l-4 italic">
                  "Creating a website for our local food bank made me realize
                  how powerful technology can be for helping others. I want to
                  use my skills to make a difference." - Aisha, Age 17
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-3xl">Our Vision</h2>
          <div className="space-y-4">
            <p className="text-lg">
              We envision a future where technology education is as fundamental
              and accessible as reading and mathematics. Our long-term vision
              includes:
            </p>

            <div className="gap-6 grid md:grid-cols-2 mt-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Universal Access</h3>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>
                    Every child, regardless of zip code, has the opportunity to
                    learn how to code
                  </li>
                  <li>
                    Free or affordable programs available in every community
                  </li>
                  <li>Multiple pathways to computer science education</li>
                  <li>Technology infrastructure supporting all learners</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Inclusive Innovation</h3>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>
                    Diversity reflected across the technology sector, starting
                    in the classroom
                  </li>
                  <li>Technology solutions that serve all communities</li>
                  <li>
                    Coding recognized as a form of creative and civic expression
                  </li>
                  <li>
                    Students from all backgrounds leading technological
                    innovation
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Real-World Impact</h3>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>
                    Students don't just dream of building apps and
                    companies—they do it
                  </li>
                  <li>
                    Young people using technology to solve pressing global
                    challenges
                  </li>
                  <li>
                    Ethical technology development prioritized from the start
                  </li>
                  <li>Innovation that benefits humanity and the planet</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl">
                  Educational Transformation
                </h3>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>
                    Education systems value computational thinking alongside
                    literacy and numeracy
                  </li>
                  <li>Project-based learning becomes the standard</li>
                  <li>
                    Technology integrated meaningfully across all subjects
                  </li>
                  <li>Students prepared for jobs that don't yet exist</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 font-medium text-lg">
              This is the future we're building—together with our students,
              families, educators, and partners. Every line of code written by
              our students is a step toward this vision becoming reality.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-3xl">Join Our Mission</h2>
          <div className="space-y-6">
            <p className="text-lg">
              Whether you're a parent, student, educator, or supporter, we
              invite you to be part of this mission. Together, we can give
              children the tools to not just navigate the future—but to lead it.
            </p>

            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-4 mt-6">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <h3 className="mb-2 font-semibold">Students</h3>
                <p className="mb-3 text-gray-600 text-sm dark:text-gray-400">
                  Ready to start coding? Explore our programs and find your
                  path.
                </p>
                <button className="font-medium text-blue-600 text-sm dark:text-blue-400 hover:underline">
                  View Programs →
                </button>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <h3 className="mb-2 font-semibold">Parents</h3>
                <p className="mb-3 text-gray-600 text-sm dark:text-gray-400">
                  Learn how to support your child's coding journey.
                </p>
                <button className="font-medium text-green-600 text-sm dark:text-green-400 hover:underline">
                  Parent Guide →
                </button>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <h3 className="mb-2 font-semibold">Educators</h3>
                <p className="mb-3 text-gray-600 text-sm dark:text-gray-400">
                  Join our team of passionate coding instructors.
                </p>
                <button className="font-medium text-purple-600 text-sm dark:text-purple-400 hover:underline">
                  Careers →
                </button>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <h3 className="mb-2 font-semibold">Partners</h3>
                <p className="mb-3 text-gray-600 text-sm dark:text-gray-400">
                  Support our mission through sponsorship or collaboration.
                </p>
                <button className="font-medium text-orange-600 text-sm dark:text-orange-400 hover:underline">
                  Contact Us →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
