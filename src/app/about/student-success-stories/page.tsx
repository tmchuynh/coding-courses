"use client";

import { StudentStoryCard } from "@/components/cards/StudentStoryCard";
import { ItemsPerPageSelect } from "@/components/ui/ItemsPerPageSelect";
import { StoryFilters } from "@/components/ui/StoryFilters";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination } from "@/hooks/usePagination";
import { studentStories } from "@/lib/constants/courses/studentStories";
import { Stories } from "@/lib/types/types";
import { Award, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

export default function ImpactPage() {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [filteredStories, setFilteredStories] =
    useState<Stories[]>(studentStories);

  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    canGoNext,
    canGoPrevious,
  } = usePagination({
    data: filteredStories,
    itemsPerPage,
  });

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 max-w-7xl w-10/12 md:w-11/12">
      {/* Header Section */}
      <div className="space-y-6 mb-12 text-center">
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-4">
            Real Impact Stories
          </Badge>
          <h1 className="bg-clip-text bg-gradient-to-r from-primary to-primary/60 font-bold text-4xl text-transparent md:text-5xl lg:text-6xl">
            Student Success Stories
          </h1>
          <h2 className="mx-auto max-w-3xl text-muted-foreground text-xl md:text-2xl">
            Real achievements from real students who turned curiosity into
            capability.
          </h2>
        </div>

        <p className="mx-auto max-w-4xl leading-relaxed text-lg text-muted-foreground">
          Our students don't just learn how to code—they build confidence,
          discover passions, and achieve real results. From developing apps to
          winning competitions, our learners are using their skills in
          meaningful and inspiring ways. These stories showcase the impact of
          our programs and the limitless potential of young minds when given the
          right tools and support.
        </p>

        {/* Stats */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mt-8 mx-auto max-w-2xl">
          <div className="text-center">
            <div className="flex items-center justify-center bg-primary/10 mb-2 mx-auto rounded-full h-12 w-12">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="font-bold text-2xl text-foreground">
              {studentStories.length}
            </div>
            <div className="text-muted-foreground text-sm">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center bg-primary/10 mb-2 mx-auto rounded-full h-12 w-12">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="font-bold text-2xl text-foreground">100%</div>
            <div className="text-muted-foreground text-sm">
              Student Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center bg-primary/10 mb-2 mx-auto rounded-full h-12 w-12">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="font-bold text-2xl text-foreground">95%</div>
            <div className="text-muted-foreground text-sm">
              Continue Learning
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <StoryFilters
        stories={studentStories}
        onFilteredStoriesChange={setFilteredStories}
      />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
        <div className="text-muted-foreground text-sm">
          Showing{" "}
          {filteredStories.length === 0
            ? 0
            : (currentPage - 1) * itemsPerPage + 1}{" "}
          to {Math.min(currentPage * itemsPerPage, filteredStories.length)} of{" "}
          {filteredStories.length} stories
          {filteredStories.length !== studentStories.length && (
            <span className="text-primary">
              {" "}
              (filtered from {studentStories.length})
            </span>
          )}
        </div>
        <ItemsPerPageSelect
          value={itemsPerPage}
          onValueChange={setItemsPerPage}
        />
      </div>

      {/* Stories Grid */}
      {filteredStories.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mb-4 text-muted-foreground">
            <Users className="opacity-50 mb-4 mx-auto h-12 w-12" />
            <h3 className="mb-2 font-semibold text-lg">No stories found</h3>
            <p>
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
          </div>
        </div>
      ) : (
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mb-12">
          {currentItems.map((story, idx) => (
            <StudentStoryCard
              key={`${currentPage}-${idx}`}
              story={story}
              index={filteredStories.indexOf(story)}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={goToPreviousPage}
                  className={
                    !canGoPrevious
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {getPageNumbers().map((pageNumber, index) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => goToPage(pageNumber)}
                    isActive={currentPage === pageNumber}
                    className="cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {currentPage < totalPages - 2 && totalPages > 5 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={goToNextPage}
                  className={
                    !canGoNext
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
