export default function LearningRoadmapCourseCard({
  courseName,
  focus = [],
  outcomes = [],
}: {
  courseName: string;
  focus?: string[];
  outcomes: string[];
}) {
  return (
    <div className="shadow mb-4 p-6 border rounded-lg">
      <h3 className="mb-2 font-bold text-lg">{courseName}</h3>
      <div className="mb-2">
        <h4 className="font-semibold text-primary">Focus:</h4>
        {focus && focus.length > 0 && (
          <ul className="ml-4 list-disc list-inside">
            {focus.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h4 className="font-semibold">Outcomes:</h4>
        <ul className="ml-4 list-disc list-inside">
          {outcomes.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
