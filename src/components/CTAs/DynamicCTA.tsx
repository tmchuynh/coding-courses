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
    | "enroll-today";
}) {
  const router = useRouter();
  const content = ctaContent[variant];

  return (
    <section>
      <h2>{content.heading}</h2>
      <p>{content.paragraphs[0]}</p>
      <p className="mt-4">
        <strong>{content.paragraphs[0]}</strong>
        {content.paragraphs.slice(1).map((para, i) => (
          <span key={i} className="block">
            {para}
          </span>
        ))}
      </p>
      <div className="flex md:flex-row flex-col gap-4">
        {content.buttons.map((btn, i) => (
          <Button
            key={i}
            onClick={() => btn.onClick(router)}
            variant={btn.variant as any}
          >
            {btn.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
