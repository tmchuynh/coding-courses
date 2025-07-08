import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Stories } from "@/lib/types/types";
import { MapPin, Quote, User } from "lucide-react";

interface StudentStoryCardProps {
  story: Stories;
  index: number;
}

export function StudentStoryCard({ story, index }: StudentStoryCardProps) {
  return (
    <Card className="flex flex-col hover:shadow-lg hover:shadow-primary/10 p-6 border-l-4 border-l-primary/30 h-full duration-300 transition-all hover:-translate-y-1">
      <div className="flex-1 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-foreground text-lg">{story.name}</h3>
            <Badge variant="secondary" className="ml-2">
              #{index + 1}
            </Badge>
          </div>

          <div className="flex gap-4 items-center text-muted-foreground text-sm">
            <div className="flex gap-1 items-center">
              <User className="h-4 w-4" />
              <span>{story.grade}</span>
            </div>
            <div className="flex gap-1 items-center">
              <MapPin className="h-4 w-4" />
              <span>{story.location}</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="relative bg-primary/5 p-4 border-l-4 border-l-primary rounded-lg">
          <Quote className="absolute left-2 top-2 h-5 w-5 text-primary/60" />
          <blockquote className="ml-6 font-medium italic text-foreground text-lg">
            "{story.quote}"
          </blockquote>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-4">
          <h4 className="pb-2 border-b font-semibold text-foreground">
            Journey Timeline
          </h4>

          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="bg-red-500 rounded-full h-3 w-3"></div>
                <div className="bg-border h-6 w-px"></div>
              </div>
              <div>
                <p className="mb-1 font-medium text-red-600 text-sm">Before</p>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {story.before}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-500 rounded-full h-3 w-3"></div>
                <div className="bg-border h-6 w-px"></div>
              </div>
              <div>
                <p className="mb-1 font-medium text-sm text-yellow-600">
                  During
                </p>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {story.during}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="bg-green-500 rounded-full h-3 w-3"></div>
              </div>
              <div>
                <p className="mb-1 font-medium text-green-600 text-sm">After</p>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {story.after}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Outcomes */}
      <div className="mt-6 pt-4 border-t">
        <p className="mb-2 font-semibold text-foreground text-sm">
          Key Outcomes
        </p>
        <div className="flex flex-wrap gap-2">
          {story.keyOutcomes.split(", ").map((outcome, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {outcome.trim()}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
