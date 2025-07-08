import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Stories } from "@/lib/types/types";
import { Filter, Search, X } from "lucide-react";
import { useState } from "react";

interface StoryFiltersProps {
  stories: Stories[];
  onFilteredStoriesChange: (stories: Stories[]) => void;
}

export function StoryFilters({
  stories,
  onFilteredStoriesChange,
}: StoryFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  // Get unique grades and locations for filter options
  const uniqueGrades = Array.from(
    new Set(stories.map((story) => story.grade))
  ).sort((a, b) => {
    // Custom sort for grades to order by numeric value
    const getGradeNumber = (grade: string) => {
      const match = grade.match(/(\d+)/);
      if (match) return parseInt(match[1]);
      if (grade.includes("College")) return 100; // Put college at the end
      return 0;
    };
    return getGradeNumber(a) - getGradeNumber(b);
  });
  const uniqueLocations = Array.from(
    new Set(stories.map((story) => story.location.split(", ")[1]))
  ).sort();

  // Filter stories based on current filters
  const filterStories = (search: string, grade: string, location: string) => {
    let filtered = stories;

    if (search) {
      filtered = filtered.filter(
        (story) =>
          story.name.toLowerCase().includes(search.toLowerCase()) ||
          story.quote.toLowerCase().includes(search.toLowerCase()) ||
          story.keyOutcomes.toLowerCase().includes(search.toLowerCase()) ||
          story.before.toLowerCase().includes(search.toLowerCase()) ||
          story.during.toLowerCase().includes(search.toLowerCase()) ||
          story.after.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (grade !== "all") {
      filtered = filtered.filter((story) => story.grade === grade);
    }

    if (location !== "all") {
      filtered = filtered.filter((story) => story.location.includes(location));
    }

    onFilteredStoriesChange(filtered);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    filterStories(value, gradeFilter, locationFilter);
  };

  const handleGradeChange = (value: string) => {
    setGradeFilter(value);
    filterStories(searchTerm, value, locationFilter);
  };

  const handleLocationChange = (value: string) => {
    setLocationFilter(value);
    filterStories(searchTerm, gradeFilter, value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setGradeFilter("all");
    setLocationFilter("all");
    onFilteredStoriesChange(stories);
  };

  const hasActiveFilters =
    searchTerm || gradeFilter !== "all" || locationFilter !== "all";

  return (
    <div className="space-y-4 mb-8">
      <div className="flex gap-2 items-center mb-4">
        <Filter className="h-5 w-5 text-muted-foreground" />
        <h3 className="font-semibold text-foreground">Filter Stories</h3>
        {hasActiveFilters && (
          <Badge variant="secondary" className="ml-2">
            Active
          </Badge>
        )}
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2" />
          <Input
            placeholder="Search stories..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Grade Filter */}
        <Select value={gradeFilter} onValueChange={handleGradeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            {uniqueGrades.map((grade) => (
              <SelectItem key={grade} value={grade}>
                {grade}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Location Filter */}
        <Select value={locationFilter} onValueChange={handleLocationChange}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {uniqueLocations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex justify-center">
          <button
            onClick={clearFilters}
            className="flex gap-2 items-center px-4 py-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
