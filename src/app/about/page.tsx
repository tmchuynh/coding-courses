"use client";
import DynamicCTA from "@/components/CTAs/DynamicCTA";
import { impactStats } from "@/lib/constants/metrics";

export default function AboutPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>About PixelMind Labs</h1>
      <h5>Where kids become creators, not just consumers.</h5>
      <div className="gap-4 grid lg:grid-cols-2">
        <div>
          <p>
            At PixelMind Labs, we're a team of educators, developers, designers,
            and dreamers who believe that every child should have the
            opportunity to shape the future with technology. Founded on the
            belief that computer science is a basic literacy in the digital age,
            we created a learning environment where young minds can explore,
            build, and grow through the power of code.
          </p>
          <p>
            Our programs are designed to be inclusive, engaging, and relevant to
            today's world. We believe that coding is not just about learning a
            language; it's about developing a mindset of innovation, resilience,
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
            not just a goal—it's a necessity. By fostering an inclusive
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
            "Why isn't every child learning how to code?"
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

          <div className="bg-card mb-6 mt-6 p-6 border border-border rounded-xl">
            <h4 className="mb-3 font-semibold text-lg">The Journey So Far</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="bg-primary/10 px-2 py-1 rounded min-w-[60px] font-medium text-center text-primary text-sm">
                  2019
                </div>
                <p className="text-sm">
                  Founded as a grassroots initiative with just 12 students in a
                  community center basement
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-primary/10 px-2 py-1 rounded min-w-[60px] font-medium text-center text-primary text-sm">
                  2020
                </div>
                <p className="text-sm">
                  Pivoted to online learning during the pandemic, reaching
                  students across three states
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-primary/10 px-2 py-1 rounded min-w-[60px] font-medium text-center text-primary text-sm">
                  2021
                </div>
                <p className="text-sm">
                  Launched our first summer camp program and partnered with five
                  local schools
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-primary/10 px-2 py-1 rounded min-w-[60px] font-medium text-center text-primary text-sm">
                  2022
                </div>
                <p className="text-sm">
                  Introduced specialized tracks for game development, web
                  design, and mobile app creation
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-primary/10 px-2 py-1 rounded min-w-[60px] font-medium text-center text-primary text-sm">
                  2023
                </div>
                <p className="text-sm">
                  Established scholarship program and expanded to serve over
                  1,000 students annually
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-primary/10 px-2 py-1 rounded min-w-[60px] font-medium text-center text-primary text-sm">
                  2024
                </div>
                <p className="text-sm">
                  Opened our first dedicated learning centers and launched
                  advanced AI/ML curriculum
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-primary/10 px-2 py-1 rounded min-w-[60px] font-medium text-center text-primary text-sm">
                  2025
                </div>
                <p className="text-sm">
                  Celebrating 12,000+ students served and expanding
                  internationally with our first partner program
                </p>
              </div>
            </div>
          </div>
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

          <div className="bg-card mb-6 mt-6 p-6 border border-border rounded-xl">
            <h4 className="mb-4 font-semibold text-lg">
              Our Teaching Philosophy in Action
            </h4>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
              <div>
                <h5 className="mb-2 font-medium text-primary">
                  🎯 Student-Centered Learning
                </h5>
                <p className="text-sm">
                  We start with what excites each student. Whether it's gaming,
                  art, robotics, or social media, we use their interests as the
                  foundation for learning programming concepts.
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-medium text-primary">
                  🔄 Iterative Development
                </h5>
                <p className="text-sm">
                  Just like professional developers, our students learn to plan,
                  build, test, and improve their projects through multiple
                  iterations, developing resilience and problem-solving skills.
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-medium text-primary">
                  👥 Collaborative Problem-Solving
                </h5>
                <p className="text-sm">
                  Students work in pairs and small groups, learning to
                  communicate technical concepts, share ideas, and support each
                  other through challenges.
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-medium text-primary">
                  🌱 Growth Mindset Culture
                </h5>
                <p className="text-sm">
                  We celebrate debugging as much as building, viewing every
                  error as a learning opportunity and every challenge as a
                  chance to grow stronger.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 dark:from-blue-900/20 to-purple-50 dark:to-purple-900/20 p-6 rounded-xl">
            <h4 className="mb-3 font-semibold text-lg">
              What Makes Our Curriculum Special
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-blue-600 dark:text-blue-400">📚</span>
                <div>
                  <span className="font-medium">
                    Age-Appropriate Progression:
                  </span>
                  <span className="ml-2 text-sm">
                    From visual block-based coding for younger students to
                    advanced text-based programming for teens
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-purple-600 dark:text-purple-400">🎮</span>
                <div>
                  <span className="font-medium">Multi-Platform Expertise:</span>
                  <span className="ml-2 text-sm">
                    Students learn to create across web, mobile, games, and
                    emerging technologies like AR/VR
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-green-600 dark:text-green-400">🏆</span>
                <div>
                  <span className="font-medium">Portfolio Development:</span>
                  <span className="ml-2 text-sm">
                    Every student graduates with a portfolio of projects they're
                    proud to share with family, friends, and future schools
                  </span>
                </div>
              </div>
            </div>
          </div>
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
              <div className="flex items-center justify-center bg-card mb-3 rounded-full h-16 w-16 text-2xl">
                🎓
              </div>
              <h4 className="mb-1 font-medium text-lg">Learning Hours</h4>
              <p className="text-sm">
                Thousands of hours of live coding instruction delivered
              </p>
            </div>

            <div className="flex flex-col items-center p-4 text-center">
              <div className="flex items-center justify-center bg-card mb-3 rounded-full h-16 w-16 text-2xl">
                👩‍💻
              </div>
              <h4 className="mb-1 font-medium text-lg">Student Projects</h4>
              <p className="text-sm">
                Hundreds of student projects completed and showcased
              </p>
            </div>

            <div className="flex flex-col items-center p-4 text-center">
              <div className="flex items-center justify-center bg-card mb-3 rounded-full h-16 w-16 text-2xl">
                🌍
              </div>
              <h4 className="mb-1 font-medium text-lg">Global Reach</h4>
              <p className="text-sm">
                Students served across dozens of cities and schools
              </p>
            </div>

            <div className="flex flex-col items-center p-4 text-center">
              <div className="flex items-center justify-center bg-card mb-3 rounded-full h-16 w-16 text-2xl">
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

          <div className="bg-card mt-6 p-6 border border-border rounded-xl">
            <h4 className="mb-4 font-semibold text-lg">
              Student Success Stories
            </h4>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
              <div className="space-y-3">
                <div className="pl-4 border-blue-500 border-l-4">
                  <p className="italic text-sm">
                    "My daughter went from being scared of computers to building
                    her own website in just one semester. The confidence she
                    gained extends far beyond coding."
                  </p>
                  <p className="mt-1 text-muted-foreground text-xs">
                    — Sarah M., Parent
                  </p>
                </div>
                <div className="pl-4 border-green-500 border-l-4">
                  <p className="italic text-sm">
                    "I never thought I could create a real mobile app. Now I'm
                    the tech lead for my high school's app development club!"
                  </p>
                  <p className="mt-1 text-muted-foreground text-xs">
                    — Marcus, Age 16
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="pl-4 border-purple-500 border-l-4">
                  <p className="italic text-sm">
                    "The problem-solving skills I learned here help me in every
                    subject at school, not just computer science."
                  </p>
                  <p className="mt-1 text-muted-foreground text-xs">
                    — Priya, Age 14
                  </p>
                </div>
                <div className="pl-4 border-orange-500 border-l-4">
                  <p className="italic text-sm">
                    "As an educator, I'm amazed by how PixelMind Labs makes
                    complex concepts accessible to all learners."
                  </p>
                  <p className="mt-1 text-muted-foreground text-xs">
                    — Tom R., Middle School Teacher
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 dark:from-green-900/20 to-blue-50 dark:to-blue-900/20 mt-6 p-6 rounded-xl">
            <h4 className="mb-3 font-semibold text-lg">
              Where Our Students Go Next
            </h4>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-3 text-sm">
              <div>
                <h5 className="mb-2 font-medium">🏫 Academic Achievement</h5>
                <ul className="space-y-1 text-xs">
                  <li>• 85% pursue advanced STEM courses</li>
                  <li>• 92% report improved problem-solving confidence</li>
                  <li>• Many join school robotics and coding clubs</li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2 font-medium">🎯 Career Exploration</h5>
                <ul className="space-y-1 text-xs">
                  <li>• Tech internships and summer programs</li>
                  <li>• Early admission to computer science programs</li>
                  <li>
                    • Leadership roles in tech-focused student organizations
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2 font-medium">🌟 Personal Growth</h5>
                <ul className="space-y-1 text-xs">
                  <li>• Enhanced creativity and self-expression</li>
                  <li>• Improved collaboration and communication</li>
                  <li>• Greater confidence in tackling challenges</li>
                </ul>
              </div>
            </div>
          </div>
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
          <h2>Our Team</h2>
          <h5>Passionate educators and industry professionals.</h5>
          <p>
            Behind every great student success story is an exceptional
            instructor. Our team brings together the best of both worlds: deep
            technical expertise and genuine passion for teaching young minds.
          </p>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 mt-6">
            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <span className="text-blue-600 text-xl dark:text-blue-400">
                    👩‍🏫
                  </span>
                </div>
                <h4 className="font-semibold">Expert Educators</h4>
              </div>
              <p className="text-sm">
                Former classroom teachers, curriculum specialists, and education
                technology experts who understand how children learn best at
                every developmental stage.
              </p>
            </div>

            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                  <span className="text-purple-600 text-xl dark:text-purple-400">
                    👨‍💻
                  </span>
                </div>
                <h4 className="font-semibold">Industry Professionals</h4>
              </div>
              <p className="text-sm">
                Software engineers, designers, and product managers from leading
                tech companies who bring real-world experience into the
                classroom.
              </p>
            </div>

            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <span className="text-green-600 text-xl dark:text-green-400">
                    🎓
                  </span>
                </div>
                <h4 className="font-semibold">Continuous Learning</h4>
              </div>
              <p className="text-sm">
                Our instructors participate in ongoing professional development,
                staying current with both educational best practices and
                emerging technologies.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 dark:from-yellow-900/20 to-orange-50 dark:to-orange-900/20 p-6 rounded-xl">
            <h4 className="mb-3 font-semibold text-lg">
              What Our Instructors Bring
            </h4>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <div>
                <h5 className="mb-2 font-medium text-orange-700 dark:text-orange-300">
                  📋 Rigorous Selection Process
                </h5>
                <p className="text-sm">
                  All instructors undergo comprehensive background checks,
                  technical assessments, and teaching demonstrations before
                  joining our team.
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-medium text-orange-700 dark:text-orange-300">
                  🎯 Specialized Training
                </h5>
                <p className="text-sm">
                  Every team member completes our proprietary instructor
                  certification program covering child development, our
                  curriculum methodology, and classroom management.
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-medium text-orange-700 dark:text-orange-300">
                  ❤️ Genuine Passion
                </h5>
                <p className="text-sm">
                  Beyond technical skills, we look for instructors who genuinely
                  love working with young people and are committed to their
                  growth and success.
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-medium text-orange-700 dark:text-orange-300">
                  🔄 Ongoing Support
                </h5>
                <p className="text-sm">
                  Regular coaching sessions, peer observations, and professional
                  development opportunities ensure our instructors continue
                  growing as educators.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Community & Partnerships</h2>
          <h5>Building bridges in tech education.</h5>
          <p>
            We believe in the power of community and collaboration. Our
            partnerships with schools, libraries, community centers, and tech
            companies help us reach more students and create meaningful
            opportunities for learning and growth.
          </p>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mb-6 mt-6">
            <div>
              <h4 className="flex gap-2 items-center mb-3 font-semibold">
                <span className="text-blue-600 dark:text-blue-400">🏫</span>
                School Partnerships
              </h4>
              <p className="mb-3 text-sm">
                We work directly with K-12 schools to supplement their computer
                science offerings through after-school programs, professional
                development for teachers, and curriculum support.
              </p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• After-school and summer enrichment programs</li>
                <li>• Teacher training workshops and resources</li>
                <li>• Curriculum consulting and implementation support</li>
                <li>• Student showcase events and competitions</li>
              </ul>
            </div>

            <div>
              <h4 className="flex gap-2 items-center mb-3 font-semibold">
                <span className="text-green-600 dark:text-green-400">🤝</span>
                Community Outreach
              </h4>
              <p className="mb-3 text-sm">
                Through partnerships with community organizations, we ensure
                that cost is never a barrier to participation in our programs.
              </p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Scholarship programs for underserved students</li>
                <li>
                  • Free coding workshops at libraries and community centers
                </li>
                <li>• Equipment lending program for families</li>
                <li>• Multilingual family engagement initiatives</li>
              </ul>
            </div>

            <div>
              <h4 className="flex gap-2 items-center mb-3 font-semibold">
                <span className="text-purple-600 dark:text-purple-400">💼</span>
                Industry Connections
              </h4>
              <p className="mb-3 text-sm">
                Our relationships with tech companies provide students with
                real-world context and inspire them to see the possibilities in
                their coding journey.
              </p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Guest speakers from leading tech companies</li>
                <li>• Virtual field trips to tech workplaces</li>
                <li>• Mentorship programs with industry professionals</li>
                <li>• Career exploration and pathway guidance</li>
              </ul>
            </div>

            <div>
              <h4 className="flex gap-2 items-center mb-3 font-semibold">
                <span className="text-red-600 dark:text-red-400">🌟</span>
                Alumni Network
              </h4>
              <p className="mb-3 text-sm">
                Our growing alumni community stays connected through mentorship
                opportunities, advanced workshops, and peer-to-peer learning
                initiatives.
              </p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Alumni mentorship program for current students</li>
                <li>• Advanced coding workshops and hackathons</li>
                <li>• College and career guidance sessions</li>
                <li>• Annual reunion and showcase events</li>
              </ul>
            </div>
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
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 mt-4">
            <div className="flex gap-4 items-start bg-card p-6 border border-border rounded-xl text-card-foreground">
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
            <div className="flex gap-4 items-start bg-card p-6 border border-border rounded-xl text-card-foreground">
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
            <div className="flex gap-4 items-start bg-card p-6 border border-border rounded-xl text-card-foreground">
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
            <div className="flex gap-4 items-start bg-card p-6 border border-border rounded-xl text-card-foreground">
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
            <div className="flex gap-4 items-start bg-card p-6 border border-border rounded-xl text-card-foreground">
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
            <div className="flex gap-4 items-start bg-card p-6 border border-border rounded-xl text-card-foreground">
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
            Whether you're a parent, educator, student, or community
            partner—there's a place for you here. Together, we can build a
            future where every child has the power to create, explore, and
            innovate with technology.
          </p>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 mt-6">
            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <span className="text-blue-600 text-xl dark:text-blue-400">
                    👨‍👩‍👧‍👦
                  </span>
                </div>
                <h4 className="font-semibold">For Parents</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Enroll your child in our programs</li>
                <li>• Join our parent community for support and resources</li>
                <li>• Volunteer at student showcase events</li>
                <li>• Refer friends and help us grow our community</li>
              </ul>
            </div>

            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <span className="text-green-600 text-xl dark:text-green-400">
                    🏫
                  </span>
                </div>
                <h4 className="font-semibold">For Educators</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Partner with us for after-school programs</li>
                <li>• Access our teacher training workshops</li>
                <li>• Use our curriculum resources in your classroom</li>
                <li>• Join our educator network for collaboration</li>
              </ul>
            </div>

            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                  <span className="text-purple-600 text-xl dark:text-purple-400">
                    💼
                  </span>
                </div>
                <h4 className="font-semibold">For Professionals</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Guest speak at our programs</li>
                <li>• Mentor students through our mentorship program</li>
                <li>• Partner with us for employee volunteer opportunities</li>
                <li>• Support our scholarship fund</li>
              </ul>
            </div>

            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
                  <span className="text-orange-600 text-xl dark:text-orange-400">
                    🏢
                  </span>
                </div>
                <h4 className="font-semibold">For Organizations</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Sponsor a scholarship or program</li>
                <li>• Host a coding workshop or camp</li>
                <li>• Collaborate on community outreach initiatives</li>
                <li>• Provide equipment or venue support</li>
              </ul>
            </div>

            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                  <span className="text-red-600 text-xl dark:text-red-400">
                    👥
                  </span>
                </div>
                <h4 className="font-semibold">For Community Members</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Spread the word about our mission</li>
                <li>• Attend our public events and showcases</li>
                <li>• Share your skills as a volunteer instructor</li>
                <li>• Help us reach underserved communities</li>
              </ul>
            </div>

            <div className="bg-card p-6 border border-border rounded-xl">
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                  <span className="text-teal-600 text-xl dark:text-teal-400">
                    🎓
                  </span>
                </div>
                <h4 className="font-semibold">For Students & Alumni</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Join our advanced workshops and hackathons</li>
                <li>• Mentor younger students in our programs</li>
                <li>• Share your projects and inspire others</li>
                <li>• Help us improve our curriculum with feedback</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 dark:from-blue-900/20 to-purple-50 dark:to-purple-900/20 p-8 rounded-xl text-center">
            <h4 className="mb-3 font-bold text-xl">
              Ready to Make a Difference?
            </h4>
            <p className="mb-4 text-lg">
              Every child deserves the opportunity to shape the future with
              technology.
            </p>
            <p className="text-muted-foreground text-sm">
              Contact us today to learn more about how you can get involved and
              help us create lasting impact in our community.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
