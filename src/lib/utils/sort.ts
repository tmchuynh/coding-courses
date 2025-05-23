export function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export function featuredArray(array: any[]) {
  return array.filter((item) => item?.featured === true);
}

export function sortByLength(
  array: string[],
  ascending: boolean = true
): string[] {
  return [...array].sort((a, b) => {
    const lengthA = a.length;
    const lengthB = b.length;
    return ascending ? lengthA - lengthB : lengthB - lengthA;
  });
}

export function sortByProperty<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

export function sortByPropertyByLength<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    const lengthA = (a[property] as unknown as string)?.length || 0;
    const lengthB = (b[property] as unknown as string)?.length || 0;
    return ascending ? lengthA - lengthB : lengthB - lengthA;
  });
}

export function groupAndSortByProperties<T>(
  array: T[],
  groupByProperty: keyof T,
  sortByPropertyKey?: keyof T,
  sortAscending: boolean = true,
  sortByLength: boolean = false,
  groupByLength: boolean = false,
  groupAscending: boolean = false
): T[] {
  // Group the array by the specified property or by the length of the property
  const grouped = array.reduce((acc, item) => {
    const key = groupByLength
      ? (item[groupByProperty] as unknown as string)?.length || 0
      : (item[groupByProperty] as string | number);

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string | number, T[]>);

  // Sort the group keys to ensure the groups are processed in the correct order
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    if (groupByLength) {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      return groupAscending ? numA - numB : numB - numA;
    } else {
      // Try to compare as numbers if possible, else as strings
      const isNumA = !isNaN(Number(a));
      const isNumB = !isNaN(Number(b));
      if (isNumA && isNumB) {
        return groupAscending ? Number(a) - Number(b) : Number(b) - Number(a);
      }
      // Otherwise, compare as strings
      return groupAscending ? a.localeCompare(b) : b.localeCompare(a);
    }
  });

  // Sort each group by the specified property or by the length of the property
  const sortedGroups = sortedKeys.map((key) => {
    if (sortByLength) {
      return [...grouped[key]].sort((a, b) => {
        const lengthA =
          (a[sortByPropertyKey!] as unknown as string)?.length || 0;
        const lengthB =
          (b[sortByPropertyKey!] as unknown as string)?.length || 0;
        return sortAscending ? lengthA - lengthB : lengthB - lengthA;
      });
    } else if (sortByPropertyKey) {
      return [...grouped[key]].sort((a, b) => {
        const valueA = a[sortByPropertyKey];
        const valueB = b[sortByPropertyKey];

        // Check if the property is a date in the format YYYY-MM-DD
        if (
          typeof valueA === "string" &&
          typeof valueB === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueA) &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueB)
        ) {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          return sortAscending
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        }

        // Default sorting for non-date properties
        if (valueA < valueB) {
          return sortAscending ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortAscending ? 1 : -1;
        }
        return 0;
      });
    } else {
      return grouped[key]; // If no sortByPropertyKey is provided, return the group as is
    }
  });

  // Flatten the sorted groups back into a single array
  return sortedGroups.flat();
}

export function uniqueArray(arr: string[]) {
  return Array.from(new Set(arr));
}