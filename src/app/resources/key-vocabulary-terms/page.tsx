"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { codingVocabTerms } from "@/lib/constants/courses/vocabTerms";
import { useEffect, useMemo, useState } from "react";

type Term = {
  term: string;
  definition: string;
};

type AlphabetizedTerms = {
  [key: string]: Term[];
};

export default function KeyVocabularyTermsPage() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(
    codingVocabTerms[0].ageGroup
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeLetterSection, setActiveLetterSection] = useState<string | null>(
    null
  );

  // Find categories for the selected age group
  const categoriesForAgeGroup = useMemo(() => {
    const ageGroup = codingVocabTerms.find(
      (group) => group.ageGroup === selectedAgeGroup
    );
    return ageGroup?.categories || [];
  }, [selectedAgeGroup]);

  // Set initial category when age group changes
  useEffect(() => {
    if (categoriesForAgeGroup.length > 0) {
      setSelectedCategory(categoriesForAgeGroup[0].category);
    } else {
      setSelectedCategory(null);
    }
  }, [categoriesForAgeGroup]);

  // Alphabetize terms for the selected category
  const alphabetizedTerms = useMemo(() => {
    if (!selectedCategory) return {};

    const ageGroup = codingVocabTerms.find(
      (group) => group.ageGroup === selectedAgeGroup
    );
    const category = ageGroup?.categories.find(
      (cat) => cat.category === selectedCategory
    );
    const terms = category?.terms || [];

    // Sort terms alphabetically
    const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term));

    // Group by first letter
    const grouped: AlphabetizedTerms = {};
    sortedTerms.forEach((term) => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(term);
    });

    return grouped;
  }, [selectedAgeGroup, selectedCategory]);

  // Get available letters for navigation
  const availableLetters = useMemo(() => {
    return Object.keys(alphabetizedTerms).sort();
  }, [alphabetizedTerms]);

  // Set initial active letter section
  useEffect(() => {
    if (availableLetters.length > 0) {
      setActiveLetterSection(availableLetters[0]);
    } else {
      setActiveLetterSection(null);
    }
  }, [availableLetters]);

  // Scroll to letter section
  const scrollToLetter = (letter: string) => {
    setActiveLetterSection(letter);
    const element = document.getElementById(`letter-section-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <div className="mx-auto p-4 container">
        <h1>Coding Vocabulary Terms</h1>
        <h5>Foundational Language for Every Young Programmer</h5>
        <p>
          Mastering coding isn't just about writing lines of code—it's about
          understanding the language behind the logic. This section provides a
          structured, grade-specific vocabulary guide to the key terms students
          will encounter across our curriculum. Each term is tailored to the
          cognitive and technical level of the student’s grade, and categories
          span essential fields such as Basic Programming, Game Development, Web
          Development, Block Coding, Algorithms, Data Science, Machine Learning
          & AI, Robotics, and App Development.
        </p>
        <p className="mb-3">
          As students progress, they’ll build upon earlier vocabulary, applying
          familiar terms in new and increasingly sophisticated contexts. This
          cumulative approach ensures lasting comprehension and prepares
          students to confidently engage in real-world coding environments.
        </p>

        <h2>Vocabulary Progression Policy</h2>
        <p className="mb-3">
          To ensure a solid and cumulative understanding of technical concepts,
          students in our programs will continuously build upon previously
          introduced vocabulary terms. In every subject area—whether it's Game
          Development, Web Development, Robotics, or any other focus—students
          will learn not only the new terms relevant to their current grade
          level but also reinforce and apply key vocabulary from previous grade
          levels within that subject.
        </p>
        <p className="mb-3">
          In addition, students will always review and incorporate Basic
          Programming vocabulary from earlier grades. This foundational
          terminology is critical across all areas of coding and technical
          learning. For example:
        </p>
        <ul className="space-y-1 mb-3 pl-6 list-disc">
          <li>
            A student entering Game Development in Grades 6–8 will review and
            utilize Game Dev terms introduced in Grades K–2 and 3–5, such as
            "sprite," "loop," or "event."
          </li>
          <li>
            A student in Web Development in Grades 9–12 will be expected to
            understand and apply UX/UI terms introduced in Grades 6–8, while
            also working with advanced topics like APIs and REST.
          </li>
          <li>
            Basic Programming terms such as "variable," "function," and "loop"
            are revisited and deepened across each grade level, ensuring fluency
            in fundamental logic and syntax.
          </li>
        </ul>
        <p className="mb-3">
          This intentional reinforcement across the curriculum helps students:
        </p>
        <ul className="space-y-1 pl-6 list-disc">
          <li>Master technical language over time</li>
          <li>
            Understand how core programming concepts connect across disciplines
          </li>
          <li>Build confidence as they encounter more complex topics</li>
          <li>
            Prepare for advanced study or career pathways in computer science
            and technology
          </li>
        </ul>
        <p className="mt-3">
          By maintaining continuity and progression, we equip students not just
          to memorize definitions, but to apply technical vocabulary in
          real-world coding contexts—a key skill in both academic and
          professional environments.
        </p>

        {/* Age Group Tabs */}
        <Tabs
          value={selectedAgeGroup}
          onValueChange={setSelectedAgeGroup}
          className="mb-6"
        >
          <TabsList className="flex flex-wrap mb-2 w-full">
            {codingVocabTerms.map((group) => (
              <TabsTrigger key={group.ageGroup} value={group.ageGroup}>
                {group.ageGroup}
              </TabsTrigger>
            ))}
          </TabsList>

          {codingVocabTerms.map((group) => (
            <TabsContent key={group.ageGroup} value={group.ageGroup}>
              {/* Category Tabs */}
              <Tabs
                value={selectedCategory || ""}
                onValueChange={setSelectedCategory}
                className="mb-4"
              >
                <TabsList className="flex flex-wrap mb-2 w-full">
                  {group.categories.map((category) => (
                    <TabsTrigger
                      key={category.category}
                      value={category.category}
                    >
                      {category.category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {group.categories.map((category) => (
                  <TabsContent
                    key={category.category}
                    value={category.category}
                  >
                    {/* Letter navigation */}
                    <div className="top-0 z-10 sticky flex flex-wrap gap-2 bg-white mb-6 py-2 border-b">
                      {availableLetters.map((letter) => (
                        <Button
                          key={letter}
                          variant={
                            activeLetterSection === letter
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => scrollToLetter(letter)}
                        >
                          {letter}
                        </Button>
                      ))}
                    </div>

                    {/* Terms organized by letter */}
                    <div className="space-y-8">
                      {availableLetters.map((letter) => (
                        <div
                          key={letter}
                          id={`letter-section-${letter}`}
                          className="scroll-mt-16"
                        >
                          <h2 className="mb-4 pb-1 border-b font-bold text-xl">
                            {letter}
                          </h2>
                          <ul className="space-y-4">
                            {alphabetizedTerms[letter]?.map((term, index) => (
                              <li key={index} className="pb-3 border-b">
                                <h3 className="font-bold text-lg">
                                  {term.term}
                                </h3>
                                <p className="text-gray-700">
                                  {term.definition}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
