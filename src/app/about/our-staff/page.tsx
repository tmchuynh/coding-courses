import { staff } from "@/lib/constants/staff";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Our Team</h1>
      <h5>
        Experienced educators. Passionate technologists. Dedicated mentors.
      </h5>
      <p>
        Behind every great student is a team of skilled, supportive instructors.
        Our team is made up of seasoned educators, software developers, and
        curriculum designers who are passionate about empowering the next
        generation of coders. With diverse backgrounds in education and
        technology, each team member brings real-world experience and a shared
        commitment to creating an inclusive, engaging, and high-quality learning
        environment for every student.
      </p>
      <section className="mt-2 md:mt-6 lg:mt-8">
        {staff.map((section) => {
          const sortedTeamMembers = groupAndSortByProperties(
            section.members,
            "title",
            "name"
          );
          return (
            <div key={section.category} className="mb-10">
              <h2>{section.category}</h2>
              <h5>{section.subtitle}</h5>
              <p>{section.description}</p>
              <div className="gap-6 grid md:grid-cols-2 xl:grid-cols-3 mt-3">
                {sortedTeamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col items-center md:items-start shadow-sm p-4 border rounded-lg"
                  >
                    <div className="flex md:flex-row flex-col items-end md:gap-5">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="object-top mb-4 rounded-2xl w-24 h-24 object-cover"
                      />
                      <div className="text-center md:text-left md:self-center">
                        <h3>{member.name}</h3>
                        <h4 className="mx-auto md:mx-0 mb-2 max-w-6/7 text-xs">
                          {member.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
