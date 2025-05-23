"use client";

import { ctaContent } from "@/lib/constants/ctas";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function DynamicCTA({
  variant = "default",
}: {
  variant?: "default" | "summer-camp" | "trial-class";
}) {
  const router = useRouter();
  const content = ctaContent[variant];

  return (
    <section>
      <h2>{content.heading}</h2>
      <p>{content.paragraphs[0]}</p>
      <p className="mt-4">
        <strong>{content.paragraphs[1].split("?")[0]}?</strong>
        {content.paragraphs[1].substring(
          content.paragraphs[1].indexOf("?") + 1
        )}
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
