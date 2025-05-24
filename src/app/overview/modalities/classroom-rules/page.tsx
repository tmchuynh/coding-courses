import { classroomRules } from "@/lib/constants/pages/classroomRules";

export default function ClassroomRulesPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <section>
        <h1>Classroom Rules</h1>
        <ul className="space-y-6">
          {classroomRules.map((rule, idx) => (
            <li key={`${rule.id}-${idx}`}>
              <h2 className="mb-2 font-bold text-lg">{rule.sectionTitle}</h2>
              {rule.content && (
                <ul className="mb-2 list-disc list-inside">
                  {rule.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {rule.note && (
                <div className="text-gray-600 text-sm italic">
                  Note: {rule.note}
                </div>
              )}
              {rule.description && (
                <p className="text-gray-700">{rule.description}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
