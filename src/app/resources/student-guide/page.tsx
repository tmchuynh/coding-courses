import DynamicCTA from "@/components/CTAs/DynamicCTA";

export default function StudentGuidePage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Student Guide</h1>
      <p>
        Welcome to [Your Company Name] — where kids code, create, and grow. This
        guide is your go-to resource as you start your journey in our learning
        programs. Whether you&apos;re new to code or already building amazing
        things, this guide will help you understand the tools, expectations, and
        opportunities that lie ahead.
      </p>
      <section className="mt-6">
        <h2>Our Mission</h2>
        <p className="mb-2">
          At [Your Company Name], we believe every student can be a creator, not
          just a consumer of technology. Our courses are designed to foster
          creativity, resilience, collaboration, and digital literacy — all
          through the power of code.
        </p>
      </section>
      <section className="mt-6">
        <h2>What to Expect in Class</h2>
        <p className="mb-2">
          Every session is structured to help you gradually build confidence and
          competence in a supportive environment. Here&apos;s what a typical
          class looks like:
        </p>
        <h3 className="mt-4 mb-2 font-semibold">💻 Class Format</h3>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🔍</span>
              </div>
            </div>
            <div>
              <h4>Warm-Up</h4>
              <p className="text-sm">
                Quick activities or reviews to get your brain in gear.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">📚</span>
              </div>
            </div>
            <div>
              <h4>Learn Together</h4>
              <p className="text-sm">
                We explore a new coding concept or technique.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🛠️</span>
              </div>
            </div>
            <div>
              <h4>Guided Build</h4>
              <p className="text-sm">
                You&apos;ll follow along with an instructor to apply the new
                concept.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🎨</span>
              </div>
            </div>
            <div>
              <h4>Project Time</h4>
              <p className="text-sm">
                Time to work on your own or with a partner, apply creativity,
                and build.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
            <div>
              <h4>Share & Reflect</h4>
              <p className="text-sm">
                Students present their progress and receive constructive
                feedback.
              </p>
            </div>
          </div>
        </div>
        <h3 className="mt-4 mb-2 font-semibold">🧪 Project-Based Learning</h3>
        <p className="mb-2">
          Everything we teach is applied through real projects:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🎮</span>
              </div>
            </div>
            <div>
              <h4>Interactive Projects</h4>
              <p className="text-sm">
                Build games, apps, or interactive stories.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🎬</span>
              </div>
            </div>
            <div>
              <h4>Visual Creations</h4>
              <p className="text-sm">Create animations or simulations.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🧩</span>
              </div>
            </div>
            <div>
              <h4>Problem Solving</h4>
              <p className="text-sm">Solve real-world challenges using code.</p>
            </div>
          </div>
        </div>
        <p className="mb-2">
          By the end of the program, you’ll have a portfolio of projects to show
          off and a strong foundation in digital thinking.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="mb-4 font-bold text-2xl">🛠️ Technical Skills</h2>
        <p className="mb-6">
          Our programs don’t just teach coding — they build a creative mindset.
          Here are some of the technical skills you'll acquire:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>Programming Languages</h3>
            <p className="text-sm">
              Learn Scratch, HTML/CSS, JavaScript, or Python, depending on your
              chosen track.
            </p>
          </div>
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>Core Logic</h3>
            <p className="text-sm">
              Master programming fundamentals like loops, conditionals, and
              variables.
            </p>
          </div>
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>UI/UX Basics</h3>
            <p className="text-sm">
              Understand the fundamentals of user interface and user experience
              design.
            </p>
          </div>
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>Intro to Advanced Topics</h3>
            <p className="text-sm">
              Get an introduction to AI, game mechanics, or other specialized
              areas.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 font-bold text-2xl">🌟 21st Century Skills</h2>
        <p className="mb-6">
          Beyond technical prowess, you'll cultivate essential skills for the
          future:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>Problem-Solving</h3>
            <p className="text-sm">
              Break down complex challenges step-by-step and devise effective
              solutions.
            </p>
          </div>
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>Creativity</h3>
            <p className="text-sm">
              Turn your innovative ideas into tangible games, applications, or
              animations.
            </p>
          </div>
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>Resilience</h3>
            <p className="text-sm">
              Learn from bugs and setbacks, bouncing back stronger and more
              determined.
            </p>
          </div>
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>Teamwork</h3>
            <p className="text-sm">
              Collaborate effectively on code, share insights, and celebrate
              collective success.
            </p>
          </div>
          <div className="bg-card shadow p-6 border border-border rounded-lg text-card-foreground">
            <h3>Digital Literacy</h3>
            <p className="text-sm">
              Understand how modern technology works and learn how to shape its
              future.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="mb-4 font-bold text-2xl">Code of Conduct</h2>
        <p className="mb-6">
          To make this a safe and fun space for everyone, we expect students to:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🤝</span>
              </div>
            </div>
            <div>
              <h4>Respect Others</h4>
              <p className="text-sm">
                Be respectful to both classmates and instructors at all times.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">💬</span>
              </div>
            </div>
            <div>
              <h4>Kind Language</h4>
              <p className="text-sm">
                Use kind and encouraging language with everyone.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">❓</span>
              </div>
            </div>
            <div>
              <h4>Ask Questions</h4>
              <p className="text-sm">
                There are no "dumb" questions here — always ask when unsure.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
            <div>
              <h4>Take Risks</h4>
              <p className="text-sm">
                Experimentation is how we learn — be brave in your creativity.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🐞</span>
              </div>
            </div>
            <div>
              <h4>Embrace Mistakes</h4>
              <p className="text-sm">
                Debugging is where the magic happens — learn from errors.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <div>
              <h4>Stay Engaged</h4>
              <p className="text-sm">
                Your creativity and input matter — remain active and involved.
              </p>
            </div>
          </div>
        </div>
        <p className="mb-2">
          Failure to meet these expectations may result in a warning, parent
          contact, or removal from the program.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="mb-4 font-bold text-2xl">Showcase & Final Projects</h2>
        <p className="mb-6">
          At the end of the program, every student participates in a Showcase:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🎭</span>
              </div>
            </div>
            <div>
              <h4>Present Your Work</h4>
              <p className="text-sm">
                Present your final game, animation, app, or AI project.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🤔</span>
              </div>
            </div>
            <div>
              <h4>Reflect & Share</h4>
              <p className="text-sm">
                Reflect on what you learned and what you're proud of.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span className="text-2xl">🎉</span>
              </div>
            </div>
            <div>
              <h4>Celebrate</h4>
              <p className="text-sm">
                Celebrate your hard work with classmates, parents, and mentors.
              </p>
            </div>
          </div>
        </div>
        <p className="mb-2">
          We believe in finishing strong — every student leaves with a project
          they built from scratch and the confidence to keep building.
        </p>
      </section>
      <section className="mt-6">
        <DynamicCTA variant="student-guide" />
      </section>
    </div>
  );
}
