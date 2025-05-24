"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ModalitiesPage() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <section>
        <h1>What to Expect in Every Class</h1>
        <h5>Flexible Formats, Consistent Quality</h5>
        <p>
          Our classes are designed to be interactive, supportive, and genuinely
          fun, blending structure with creativity to maximize engagement and
          learning outcomes. Each session is thoughtfully crafted to foster both
          technical growth and personal development.
        </p>
        <p>
          We begin every class with a warm welcome and a quick review of
          previous lessons. This reinforces learning and helps students feel
          confident as they build on their existing knowledge. Our instructors
          then introduce new coding concepts using clear, relatable
          examples—connecting abstract ideas to real-world applications in a way
          that makes learning intuitive and approachable. The core of each
          session is hands-on coding practice. Students immediately apply what
          they’ve learned in guided activities that encourage experimentation
          and problem-solving. Instructors circulate to answer questions,
          provide support, and challenge students with personalized feedback.
          This ensures that each learner progresses at their own pace while
          staying motivated and engaged.
        </p>
        <p>
          Throughout the class, we emphasize collaboration and creativity.
          Students often work in pairs or small groups to complete mini-projects
          or solve coding challenges, developing critical teamwork and
          communication skills. We create a classroom culture where curiosity is
          celebrated and mistakes are viewed as important learning moments.
          Every session wraps up with a recap of key takeaways and a sneak peek
          at what’s coming next. This helps students retain information and stay
          excited about their learning journey. Whether online or in person, our
          goal remains the same: to ensure every student walks away feeling
          empowered, confident, and excited about coding.
        </p>
      </section>

      {/* Benefits Cards Section */}
      <section className="my-12">
        <h2 className="mb-6 font-bold text-2xl text-center">
          Benefits of Each Modality
        </h2>
        <div className="flex md:flex-row flex-col justify-center gap-8">
          {/* In-Person Card */}
          <div className="flex flex-col flex-1 items-center bg-card shadow-lg p-6 border border-border rounded-2xl text-card-foreground">
            {/* Placeholder for icon/image */}
            <div className="flex justify-center items-center bg-blue-100 mb-4 rounded-xl w-24 h-24">
              {/* Example: User group icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#3B82F6" opacity="0.15" />
                <path
                  d="M24 28c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7 3.582 7 8 7zm0 2c-5.33 0-16 2.668-16 8v2h32v-2c0-5.332-10.67-8-16-8z"
                  fill="#3B82F6"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-center text-xl">
              In-Person Classes
            </h3>
            <ul className="space-y-2 text-center">
              <li>Face-to-face interaction with instructors and peers</li>
              <li>Hands-on activities and group projects</li>
              <li>Immediate feedback and support</li>
              <li>Structured classroom environment</li>
              <li>Opportunities for socialization and teamwork</li>
            </ul>
          </div>
          {/* Online Card */}
          <div className="flex flex-col flex-1 items-center bg-card shadow-lg p-6 border border-border rounded-2xl text-card-foreground">
            {/* Placeholder for icon/image */}
            <div className="flex justify-center items-center bg-purple-100 mb-4 rounded-xl w-24 h-24">
              {/* Example: Laptop icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                <rect
                  x="8"
                  y="14"
                  width="32"
                  height="18"
                  rx="3"
                  fill="#8B5CF6"
                  opacity="0.15"
                />
                <rect
                  x="12"
                  y="18"
                  width="24"
                  height="10"
                  rx="2"
                  fill="#8B5CF6"
                />
                <rect
                  x="10"
                  y="34"
                  width="28"
                  height="4"
                  rx="2"
                  fill="#8B5CF6"
                  opacity="0.5"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-center text-xl">
              Online Classes
            </h3>
            <ul className="space-y-2 text-center">
              <li>Learn from anywhere with internet access</li>
              <li>Flexible scheduling and self-paced options</li>
              <li>Access to digital resources and recordings</li>
              <li>Interactive online tools and platforms</li>
              <li>Connect with a diverse group of students</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2>In-Person Classes</h2>
        <h5>A hands-on, community-centered experience.</h5>
        <p>
          Our in-person classes are hosted at our state-of-the-art learning
          center, where students benefit from a dynamic, collaborative
          environment designed to inspire creativity and confidence. Learning
          face-to-face with instructors and peers allows for real-time
          interaction, immediate support, and the kind of spontaneous
          collaboration that deepens understanding and sparks innovation.
        </p>
        <p>
          Each session lasts approximately 2 hours, with a scheduled mid-class
          break to help students recharge and stay focused. We encourage
          students to arrive 10–15 minutes early to get settled, set up their
          workstations, and ease into the learning environment. While students
          are welcome to bring their own laptops, devices are available onsite
          for those who need them—ensuring technology access is never a barrier
          to learning Our in-person program is open to students ages 7 to 18,
          and is thoughtfully structured to accommodate a range of experience
          levels—from complete beginners to advanced coders. Whether your child
          is just starting out or ready to dive into more complex topics like
          game development or algorithms, our instructors tailor guidance to
          meet each student’s needs.
        </p>
        <p>
          Classroom instruction is highly interactive. Students are encouraged
          to ask questions, participate in discussions, and work on both
          individual and group projects. The classroom environment fosters
          social learning, peer mentorship, and a tangible sense of progress
          that motivates students to push their boundaries. Above all, our
          in-person classes emphasize experiential, hands-on learning. Students
          gain practical experience by building real-world applications,
          experimenting with code, and solving challenges collaboratively. This
          immersive approach doesn’t just teach coding—it cultivates
          problem-solving, resilience, and a genuine excitement for technology.
        </p>
        <p>
          In-person instruction is ideal for families seeking a structured,
          high-engagement educational experience where learners benefit from
          close mentorship, immediate feedback, and a vibrant learning
          community.
        </p>
        <Button
          onClick={() => router.push("/overview/modalities/classroom-rules")}
        >
          View Our Classroom Rules
        </Button>
      </section>

      <section className="mt-8">
        <h2>Online Classes</h2>
        <h5>Flexible, accessible, and just as powerful.</h5>
        <p>
          Our online classes bring high-quality coding education directly into
          your home. Designed to be both interactive and engaging, each session
          delivers a full classroom experience in a virtual format—complete with
          live instruction, collaborative projects, and personalized feedback.
          This flexible approach allows students to learn in a familiar
          environment while maintaining the structure and support of in-person
          learning.
        </p>
        <p>
          Each online session is 1 hour long, with a brief break to help
          students reset and stay focused. We recommend logging in 5–10 minutes
          early to troubleshoot any technical issues and ensure a smooth start.
          Students will need a computer with internet access, a webcam, and a
          quiet workspace to participate fully. Our platform is easy to use, and
          our support team is available to help with setup as needed. Our
          virtual classrooms are open to students ages 7 to 18, with
          differentiated instruction for beginners through advanced learners.
          Lessons are crafted to build foundational skills and progressively
          introduce more complex topics such as animations, game logic, and web
          development. No matter their experience level, students receive
          targeted support that challenges and motivates them.
        </p>
        <p>
          What sets our online program apart is the interactive, hands-on
          approach. Students don’t just watch—they actively code during every
          session. Using screen sharing, breakout rooms, and real-time guidance,
          instructors foster collaboration and encourage peer-to-peer learning.
          Every project is an opportunity to experiment, build confidence, and
          explore creativity.
        </p>
        <p>
          Online learning is more than just a convenience—it’s a gateway to
          equitable, future-ready education. We are committed to making our
          programs accessible to students everywhere, regardless of geographic
          or logistical barriers. By offering a robust online curriculum, we
          ensure that every child has the opportunity to develop critical tech
          skills from the comfort of their own home.
        </p>
        <p>
          Whether your child is new to coding or looking to deepen their skills,
          our online classes provide a safe, engaging, and flexible path to
          success in the digital world.
        </p>
        <Button
          onClick={() =>
            router.push("/overview/modalities/privacy-and-compliance")
          }
        >
          View Our Privacy & Compliance Statement
        </Button>
      </section>

      <section className="mt-12 text-sm">
        <p>
          If you have any questions about our in-person or online classes,
          please feel free to reach out to us. We are happy to provide more
          information and help you find the right class for your child.
        </p>
      </section>
    </div>
  );
}
