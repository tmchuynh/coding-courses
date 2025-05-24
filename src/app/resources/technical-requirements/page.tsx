export default function TechnicalRequirementsPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Technical Requirements</h1>
      <p className="mb-6">
        To ensure your child has the best possible learning experience in our
        coding programs, we ask that the following technical setup be in place
        for online classes. Having the right equipment allows your student to
        fully engage with the curriculum, participate in live sessions, and
        successfully complete projects.
      </p>

      <section className="mb-8">
        <h2>For Online Classes</h2>
        <p>
          The following items are required for students attending online coding
          classes. These ensure a smooth and effective learning experience:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
          <div className="flex flex-col bg-card p-8 border border-border rounded-xl">
            <div className="flex justify-center items-center mb-3 w-12 h-12">
              <span className="text-2xl">💻</span>
            </div>
            <h3>Computer</h3>
            <div className="text-sm">Hardware</div>
            <p className="mb-4">
              A laptop or desktop computer (not a tablet or Chromebook) with a
              full operating system.
            </p>
            <ul className="space-y-2 mt-auto pl-4 h-full text-sm list-disc">
              <li>
                Compatible with Scratch, Replit, and other coding platforms
              </li>
              <li>
                Better performance and screen size than tablets or Chromebooks
              </li>
              <li>For compatibility with programming tools and environments</li>
            </ul>
          </div>

          <div className="flex flex-col bg-card p-8 border border-border rounded-xl">
            <div className="flex justify-center items-center mb-3 w-12 h-12">
              <span className="text-2xl">🌐</span>
            </div>
            <h3>Internet</h3>
            <div className="text-sm">Connectivity</div>
            <p className="mb-4">
              A stable internet connection with minimum 10 Mbps download speed .
            </p>
            <ul className="space-y-2 mt-auto pl-4 h-full text-sm list-disc">
              <li>Prevents interruptions during hands-on coding time</li>
              <li>
                Ensures uninterrupted learning and participation in live coding
                sessions
              </li>
            </ul>
          </div>

          <div className="flex flex-col bg-card p-8 border border-border rounded-xl">
            <div className="flex justify-center items-center mb-3 w-12 h-12">
              <span className="text-2xl">🎙️</span>
            </div>
            <h3>Audio/Visual</h3>
            <div className="text-sm">Communication</div>
            <p className="mb-4">A functioning webcam and microphone .</p>
            <ul className="space-y-2 mt-auto pl-4 h-full text-sm list-disc">
              <li>Encourages active participation in class discussions</li>
              <li>Builds community through face-to-face interaction</li>
              <li>
                Enable interactive learning, collaboration with peers, and clear
                communication with instructors
              </li>
            </ul>
          </div>

          <div className="flex flex-col bg-card p-8 border border-border rounded-xl">
            <div className="flex justify-center items-center mb-3 w-12 h-12">
              <span className="text-2xl">🔇</span>
            </div>
            <h3>Workspace</h3>
            <div className="text-sm">Environment</div>
            <p className="mb-4">
              A quiet, distraction-free environment helps students stay focused,
              hear instruction clearly, and participate confidently in class.
            </p>
            <ul className="space-y-2 mt-auto pl-4 h-full text-sm list-disc">
              <li>Minimizes background noise during virtual sessions</li>
            </ul>
          </div>

          <div className="flex flex-col bg-card p-8 border border-border rounded-xl">
            <div className="flex justify-center items-center mb-3 w-12 h-12">
              <span className="text-2xl">🎧</span>
            </div>
            <h3>Headphones</h3>
            <div className="text-sm">Audio</div>
            <p className="mb-4">
              Headphones or earbuds are ideal for shared environments, helping
              students stay immersed in their project without distractions.
            </p>
            <ul className="space-y-2 mt-auto pl-4 h-full text-sm list-disc">
              <li>Enhances focus in shared or noisy environments</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>For In-Person Classes</h2>
        <p>
          If your child is attending in-person classes, the following items are
          recommended to ensure a smooth and productive learning experience:
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
          <div className="flex flex-col bg-card p-8 border border-border rounded-xl">
            <div className="flex justify-center items-center mb-3 w-12 h-12">
              <span className="text-2xl">🧳</span>
            </div>
            <h3>Bringing Your Own Laptop</h3>
            <div className="text-sm">Equipment</div>
            <p className="mb-4">
              Students are welcome to bring their own laptops to class for a
              familiar and comfortable coding experience.
            </p>
            <ul className="space-y-2 mt-auto pl-4 h-full text-sm list-disc">
              <li>Devices should be fully charged and Wi-Fi enabled</li>
              <li>We'll help install required software during Week 1</li>
            </ul>
          </div>

          <div className="flex flex-col bg-card p-8 border border-border rounded-xl">
            <div className="flex justify-center items-center mb-3 w-12 h-12">
              <span className="text-2xl">🖥️</span>
            </div>
            <h3>Equipment Provided</h3>
            <div className="text-sm">Support</div>
            <p className="mb-4">
              Don't have access to a laptop? No problem. We provide up-to-date
              computers for students to use during class sessions.
            </p>
            <ul className="space-y-2 mt-auto pl-4 h-full text-sm list-disc">
              <li>All equipment is regularly maintained and updated</li>
            </ul>
          </div>

          <div className="flex flex-col bg-card p-8 border border-border rounded-xl">
            <div className="flex justify-center items-center mb-3 w-12 h-12">
              <span className="text-2xl">⚡</span>
            </div>
            <h3>Chargers & Accessories</h3>
            <div className="text-sm">Accessories</div>
            <p className="mb-4">
              Remember to bring power chargers and any preferred accessories to
              ensure a smooth and productive coding experience.
            </p>
            <ul className="space-y-2 mt-auto pl-4 h-full text-sm list-disc">
              <li>Power chargers for laptops</li>
              <li>Mouse, keyboard, or other preferred input devices</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>Optional but Recommended</h2>
        <p className="mb-4">
          These items are not required but can significantly enhance the
          learning experience:
        </p>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 my-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span>📓</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium">Notebook or Sketchpad</h4>
              <p className="text-sm">
                Great for planning out game levels, writing pseudocode, or
                sketching interface designs.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span>🖱️</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium">External Mouse</h4>
              <p className="text-sm">
                Improves precision for drag-and-drop environments like Scratch
                or Figma.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                <span>🖥️</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium">Second Monitor</h4>
              <p className="text-sm">
                For older or more advanced students, a dual-monitor setup can
                improve productivity by allowing them to view instructions and
                their code at the same time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Tech Support</h2>
        <p>
          If you're unsure whether your setup is adequate, please reach out
          before your child's first session. We offer free tech check-ins to
          test your setup and provide guidance for getting started smoothly.
        </p>
        <p className="font-medium">
          📧 Tech Support Contact:{" "}
          <a
            href="mailto:support@codingcourses.com"
            className="text-primary hover:underline"
          >
            support@codingcourses.com
          </a>
        </p>
      </section>
    </div>
  );
}
