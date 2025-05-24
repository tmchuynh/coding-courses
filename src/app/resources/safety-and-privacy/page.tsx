export default function SafetyAndPrivacyPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Safety and Privacy</h1>
      <p className="mb-6">
        At Coding Courses, the safety and privacy of every student, parent, and
        staff member is a foundational priority. We understand the trust you
        place in us when enrolling your child, and we uphold that trust by
        enforcing strict safety protocols, respectful classroom environments,
        and data privacy standards across all of our programs.
      </p>

      <div className="mt-6 mb-8">
        <h2 className="mb-4 font-bold text-2xl">Our Commitment</h2>
        <p className="mt-2 mb-4">
          We are committed to fostering a secure, inclusive, and supportive
          learning environment for every learner—whether attending in-person
          classes or participating online. This includes:
        </p>
        <ul className="space-y-2 pl-8 list-disc">
          <li>Maintaining safe physical spaces in our classrooms and labs.</li>
          <li>
            Adopting technology platforms that meet industry-level security
            standards.
          </li>
          <li>
            Protecting all forms of personally identifiable information (PII).
          </li>
          <li>
            Delivering a curriculum that is age-appropriate, inclusive, and
            respectful.
          </li>
        </ul>
      </div>

      <section className="flex flex-col justify-between mb-8 h-full">
        <div>
          <h2 className="mb-4 font-bold text-2xl">
            Safety &amp; Privacy Commitments
          </h2>
          <p className="mb-6">
            To support a secure experience across all environments, we have
            established a comprehensive set of policies and procedures:
          </p>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 my-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Live Supervision of All Classes</h4>
                <p className="mt-1 text-sm">
                  All sessions (online and in-person) are monitored in real time
                  by trained instructors and staff.
                </p>
                <ul className="mt-2 pl-5 text-sm list-disc">
                  <li>
                    No unsupervised communication between students is permitted.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                  <span className="text-2xl">🔒</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Secure Platforms for Learning</h4>
                <p className="mt-1 text-sm">
                  We use vetted, education-friendly software tools with strong
                  data encryption.
                </p>
                <ul className="mt-2 pl-5 text-sm list-disc">
                  <li>
                    All communication, project sharing, and course submissions
                    take place on secure, password-protected platforms.
                  </li>
                  <li>
                    Student information is never sold, shared, or used for
                    third-party advertising.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                  <span className="text-2xl">📄</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Strict Data Privacy Standards</h4>
                <p className="mt-1 text-sm">
                  We comply with COPPA (Children's Online Privacy Protection
                  Act) and FERPA (Family Educational Rights and Privacy Act)
                  guidelines.
                </p>
                <ul className="mt-2 pl-5 text-sm list-disc">
                  <li>
                    We collect only the data necessary to support your child's
                    educational experience.
                  </li>
                  <li>
                    Data is stored securely, and only authorized personnel have
                    access.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium">
                  Age-Appropriate Content & Interactions
                </h4>
                <p className="mt-1 text-sm">
                  All materials are carefully reviewed to ensure they are
                  developmentally appropriate and free from harmful content.
                </p>
                <ul className="mt-2 pl-5 text-sm list-disc">
                  <li>
                    Student communication is monitored to ensure a respectful,
                    inclusive atmosphere.
                  </li>
                  <li>
                    All online tools used for student collaboration are
                    configured to restrict public access.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-card rounded-full w-12 h-12">
                  <span className="text-2xl">📘</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Clear Behavior Guidelines</h4>
                <p className="mt-1 text-sm">
                  We maintain and enforce a Code of Conduct that sets
                  expectations for respectful, inclusive, and productive
                  interactions.
                </p>
                <ul className="mt-2 pl-5 text-sm list-disc">
                  <li>
                    Bullying, harassment, or inappropriate behavior will not be
                    tolerated—online or in person.
                  </li>
                  <li>
                    Students receive regular reminders on digital citizenship
                    and responsible technology use.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6">
          You can trust that your child's online and in-person experiences are
          managed with care and professionalism.
        </p>
      </section>
    </div>
  );
}
