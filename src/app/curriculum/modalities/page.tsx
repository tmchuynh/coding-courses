"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ModalitiesPage() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <section>
        <h1>In-Person vs Online Classes</h1>
        <p>
          Our classes are designed to be interactive, supportive, and fun! Each
          session begins with a warm welcome and a quick review of previous
          lessons. Instructors introduce new coding concepts using
          easy-to-understand examples, followed by hands-on activities where
          students can practice and ask questions. We encourage teamwork,
          creativity, and curiosity. At the end of each class, we recap what
          we’ve learned and preview what’s coming next. Our goal is to make sure
          every student feels confident and excited about coding!
        </p>
      </section>

      {/* Benefits Cards Section */}
      <section className="my-12">
        <h2 className="mb-6 font-bold text-2xl text-center">
          Benefits of Each Modality
        </h2>
        <div className="flex md:flex-row flex-col justify-center gap-8">
          {/* In-Person Card */}
          <div className="flex flex-col flex-1 items-center bg-white shadow-lg p-6 rounded-2xl">
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
            <ul className="space-y-2 text-center text-gray-700">
              <li>Face-to-face interaction with instructors and peers</li>
              <li>Hands-on activities and group projects</li>
              <li>Immediate feedback and support</li>
              <li>Structured classroom environment</li>
              <li>Opportunities for socialization and teamwork</li>
            </ul>
          </div>
          {/* Online Card */}
          <div className="flex flex-col flex-1 items-center bg-white shadow-lg p-6 rounded-2xl">
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
            <ul className="space-y-2 text-center text-gray-700">
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
        <p>
          In-person classes are held at our learning center, where students can
          collaborate with peers and receive immediate feedback from
          instructors. This setting fosters a sense of community and allows for
          hands-on learning experiences.
        </p>
        <p>
          In-person classes are typically 2 hours long, with a break in the
          middle. Students are encouraged to bring their own laptops, but we
          also provide computers for those who need them. We recommend that
          students arrive 10-15 minutes early to set up their workstations and
          get settled before class begins.
        </p>
        <p>
          In-person classes are available for students ages 7-18. We offer
          classes for beginners as well as more advanced students. Our
          instructors are experienced in working with students of all skill
          levels and are dedicated to helping each student reach their full
          potential.
        </p>
        <p>
          In-person classes are a great way for students to learn coding in a
          supportive and engaging environment. We believe that the best way to
          learn is by doing, and our in-person classes provide plenty of
          opportunities for hands-on learning.
        </p>
        <Button
          onClick={() => router.push("/curriculum/modalities/classroom-rules")}
        >
          View Our Classroom Rules
        </Button>
        <p>
          If you have any questions about our in-person classes, please feel
          free to reach out to us. We are happy to provide more information and
          help you find the right class for your child.
        </p>
      </section>

      <section className="mt-8">
        <h2>Online Classes</h2>
        <p>
          Our online classes are designed to be interactive and engaging,
          providing students with the flexibility to learn from home. Each
          session includes live instruction, hands-on activities, and
          opportunities for collaboration with peers.
        </p>
        <p>
          Online classes are typically 1 hour long, with a break in the middle.
          Students will need a computer with internet access and a webcam for
          participation. We recommend that students log in 5-10 minutes early to
          ensure their technology is working properly.
        </p>
        <p>
          Online classes are available for students ages 7-18. We offer classes
          for beginners as well as more advanced students. Our instructors are
          experienced in working with students of all skill levels and are
          dedicated to helping each student reach their full potential.
        </p>
        <p>
          Online classes provide a great opportunity for students to learn
          coding in a flexible and convenient format. We believe that coding is
          an essential skill for the future, and our online classes make it
          accessible to everyone.
        </p>
        <Button
          onClick={() =>
            router.push("/curriculum/modalities/privacy-and-compliance")
          }
        >
          View Our Classroom Rules
        </Button>
        <p>
          If you have any questions about our online classes, please feel free
          to reach out to us. We are happy to provide more information and help
          you find the right class for your child.
        </p>
      </section>
    </div>
  );
}
