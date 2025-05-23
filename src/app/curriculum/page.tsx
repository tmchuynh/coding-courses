export default function CurriculumPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1 className="mb-6 font-bold text-3xl">Why Learn How to Code?</h1>
      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-xl">Benefits for Children</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Problem-Solving Skills:</strong> Coding teaches children how
            to break down complex problems and find logical solutions. For
            example, when writing a program, kids learn to identify issues,
            debug errors, and think critically about how to improve their
            solutions.
          </li>
          <li>
            <strong>Creativity:</strong> Programming encourages kids to create
            games, stories, and apps, turning their ideas into reality. Children
            can design their own interactive stories or build simple games,
            fostering imagination and innovation.
          </li>
          <li>
            <strong>Confidence:</strong> Building projects and overcoming
            challenges helps boost self-esteem and resilience. Completing a
            coding project gives children a sense of accomplishment and
            motivates them to tackle new challenges.
          </li>
          <li>
            <strong>Collaboration:</strong> Many coding projects involve
            teamwork, helping children develop communication and social skills.
            Working together on group projects or participating in coding clubs
            teaches kids how to share ideas and solve problems as a team.
          </li>
          <li>
            <strong>Digital Literacy:</strong> Understanding how technology
            works prepares children for a digital world. Coding helps demystify
            the devices and apps they use every day, making them more informed
            and responsible digital citizens.
          </li>
          <li>
            <strong>Math and Logic:</strong> Programming reinforces math
            concepts and logical thinking. Kids apply sequencing, pattern
            recognition, and basic arithmetic in real-world contexts.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-xl">
          Opportunities in the Tech Field
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>High Demand:</strong> Technology is a rapidly growing
            industry with a constant need for skilled professionals. According
            to the U.S. Bureau of Labor Statistics, software development jobs
            are projected to grow much faster than average over the next decade.
          </li>
          <li>
            <strong>Variety of Careers:</strong> From software development to
            data science, cybersecurity, artificial intelligence, robotics, and
            design, tech offers diverse career paths. Children who learn to code
            can pursue roles in industries like healthcare, finance,
            entertainment, and education.
          </li>
          <li>
            <strong>Competitive Salaries:</strong> Many tech jobs offer
            excellent compensation and benefits. Even entry-level positions in
            technology often provide higher-than-average starting salaries.
          </li>
          <li>
            <strong>Global Opportunities:</strong> Coding skills are valued
            worldwide, opening doors to work anywhere. Remote work and
            international collaboration are common in the tech industry.
          </li>
          <li>
            <strong>Impact:</strong> Technology shapes the future—programmers
            have the power to solve real-world problems and make a difference.
            From developing medical software to creating educational apps,
            coders can positively impact society.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 font-semibold text-xl">Real-World Examples</h2>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-3xl">🚀</span>
            <h3 className="mb-1 font-bold text-lg">Young Innovators</h3>
            <p className="text-gray-700">
              Many young people have used coding to launch successful projects
              and even businesses. For example, apps like "Tynker" and
              "Hopscotch" were created to help kids learn programming in a fun
              way.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-3xl">🤖</span>
            <h3 className="mb-1 font-bold text-lg">Competitions and Clubs</h3>
            <p className="text-gray-700">
              Coding competitions such as hackathons and robotics clubs give
              children the chance to apply their skills, win awards, and meet
              like-minded peers.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white shadow-sm p-6 border border-gray-200 rounded-xl">
            <span className="mb-3 text-3xl">🌍</span>
            <h3 className="mb-1 font-bold text-lg">Community Impact</h3>
            <p className="text-gray-700">
              Students have built apps to help their schools, local communities,
              or raise awareness for important causes, showing that coding can
              be a tool for positive change.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-xl">
          Addressing Common Parent Concerns
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Is coding too difficult for young children?</strong> Many
            platforms use visual programming languages like Scratch, making it
            accessible and engaging for kids as young as 5 or 6.
          </li>
          <li>
            <strong>Will my child spend too much time on screens?</strong>{" "}
            Coding can be balanced with other activities. Many programs
            encourage teamwork, offline planning, and hands-on projects.
          </li>
          <li>
            <strong>Does my child need to be a math genius?</strong> While math
            helps, coding is about creativity and problem-solving. Children of
            all backgrounds and skill levels can succeed.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-xl">The Future of Technology</h2>
        <p>
          Technology is transforming every aspect of our lives, from how we
          communicate to how we work and learn. By 2030, many jobs will require
          some understanding of programming or computational thinking. Early
          exposure to coding ensures your child is prepared for the careers of
          tomorrow, many of which may not even exist yet.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-semibold text-xl">
          Start Early, Succeed Later
        </h2>
        <p>
          Introducing programming at a young age gives children a head start in
          developing essential skills for school, future careers, and life.
          Whether your child dreams of becoming a game developer, engineer, or
          entrepreneur, learning to code opens up endless possibilities.
        </p>
        <p className="mt-4">
          <strong>Ready to get started?</strong> Explore our curriculum and
          discover how your child can begin their coding journey today!
        </p>
      </section>
    </div>
  );
}
