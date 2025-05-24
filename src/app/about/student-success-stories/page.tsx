import { studentStories } from "@/lib/constants/courses/studentStories";

export default function ImpactPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Student Success Stories</h1>
      <h5>
        Real achievements from real students who turned curiosity into
        capability.
      </h5>
      <p>
        Our students don’t just learn how to code—they build confidence,
        discover passions, and achieve real results. From developing apps to
        winning competitions, our learners are using their skills in meaningful
        and inspiring ways. These stories showcase the impact of our programs
        and the limitless potential of young minds when given the right tools
        and support.
      </p>
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-4">
        {studentStories.map((story, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-card shadow p-6 border border-border rounded-lg text-card-foreground"
          >
            <div>
              <h4 className="font-semibold">{story.name}</h4>
              <div className="flex items-center gap-4 my-2">
                <span className="text-sm">{story.grade}</span>
                <span className="text-sm">{story.location}</span>
              </div>
              <blockquote className="mb-2 italic">"{story.quote}"</blockquote>
              <ul className="space-y-3 mb-2 text-sm">
                <li>{story.before}</li>
                <li>{story.during}</li>
                <li>{story.after}</li>
              </ul>
            </div>
            <div className="font-medium text-xs">
              Key Outcomes: {story.keyOutcomes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
