import { jobOpenings } from "@/lib/constants/careers";

export default function CareersPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Current Job Openings</h1>
      <h5>
        Join us in our mission to empower the next generation through code,
        creativity, and confidence.
      </h5>
      <p>
        At [Your Company Name], we are always on the lookout for passionate and
        dedicated individuals who share our vision of making coding accessible
        to every child. Our team is made up of educators, technologists, and
        innovators who are committed to creating a positive impact in the lives
        of our students. If you are interested in joining our team, please
        explore our current job openings below. We offer a dynamic work
        environment, opportunities for professional growth, and the chance to
        make a difference in the lives of young learners.
      </p>

      <div className="space-y-12 divide-y">
        {jobOpenings.map((job) => (
          <div key={job.key} className="shadow my-0 py-6">
            <h2>{job.title}</h2>
            <h5>{job.department}</h5>
            <div className="mb-4">{job.summary}</div>
            <strong>Responsibilities:</strong>
            <ul className="mb-4 list-disc list-inside">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <strong>Requirements:</strong>
            <ul className="mb-4 list-disc list-inside">
              {job.requirements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {job.preferredSkills && (
              <>
                <strong>Preferred Skills:</strong>
                <ul className="mb-4 list-disc list-inside">
                  {job.preferredSkills.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            <p>
              <strong>Pay:</strong> {job.pay}
            </p>
            <p>
              <strong>Employment Type:</strong> {job.employmentType}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
