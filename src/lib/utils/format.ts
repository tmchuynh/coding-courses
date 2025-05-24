export const capitalize = (str: string) => {
  return str
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b[a-zA-Z]/g, (char) => char.toUpperCase());
};

export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatTime = (time: string): string => {
  const date = new Date(`1970-01-01T${time}`);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDuration = (duration: string): string => {
  const [weeks, days] = duration.split(" ");
  return `${weeks} weeks ${days} days`;
};

export function formatCamelCaseToTitle(camelCase: string): string {
  // Add space before capital letters and convert to lowercase
  const withSpaces = camelCase.replace(/([A-Z])/g, " $1").toLowerCase();

  // Capitalize the first letter of each word
  return withSpaces
    .split(" ")
    .map((word) => word.trim())
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatNumberToCurrency(
  value: number,
  min?: number,
  max?: number
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: min || 0,
    maximumFractionDigits: max || 0,
  }).format(value);
}

export function formatToSlug(str: string): string {
  console.log("formatToSlug", str);
  console.log(
    "formatted",
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Formats a grade range slug into a human-readable string.
 * 
 * @param slug - The slug to format, e.g., "grades-k-2" or "grades-3-5"
 * @returns A formatted string, e.g., "Grades K–2" or "Grades 3–5"
 * 
 * @example
 * formatGradeRangeSlug("grades-k-2") // returns "Grades K–2"
 * formatGradeRangeSlug("grades-3-5") // returns "Grades 3–5"
 * formatGradeRangeSlug("invalid-slug") // returns "invalid-slug"
 */
export function formatGradeRangeSlug(slug: string): string {
  // Match "grades-k-2" or "grades-3-5" etc.
  const match = slug.match(/^grades-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)$/);
  if (!match) return slug;
  const [_, start, end] = match;
  // Capitalize K if present, otherwise just use as is
  const formatPart = (part: string) =>
    part.length === 1 ? part.toUpperCase() : part;
  return `Grades ${formatPart(start)}–${formatPart(end)}`;
}