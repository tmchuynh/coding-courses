"use client";

import { ctaContent } from "@/lib/constants/ctas";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function DynamicCTA({
  variant = "default",
}: {
  variant?:
    | "default"
    | "summer-camp"
    | "trial-class"
    | "meet-the-team"
    | "view-programs"
    | "enroll-today"
    | "student-guide"
    | "parent-guide";
}) {
  const router = useRouter();
  const content = ctaContent[variant];

  return (
    <section>
      <h2>{content.heading}</h2>
      <p>
        <strong>{content.paragraphs[0]}</strong>
        {content.paragraphs.slice(1).map((para, i) => (
          <span key={i} className="block">
            {para}
          </span>
        ))}
      </p>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col gap-x-4">
          {content.buttons.slice(0, 2).map((btn, i) => (
            <div key={i} className="flex-1 md:flex-none">
              <Button
                onClick={() => btn.onClick(router)}
                variant={btn.variant as any}
                className="w-full"
              >
                {btn.label}
              </Button>
            </div>
          ))}
        </div>
        {content.buttons.length > 2 && (
          <div className="gap-x-4 grid md:grid-cols-2 xl:grid-cols-4">
            {content.buttons.slice(2).map((btn, i) => (
              <div key={i + 2}>
                <Button
                  onClick={() => btn.onClick(router)}
                  variant={btn.variant as any}
                  className="w-full"
                >
                  {btn.label}
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
