import type { dateRange } from "@/types/data";

export function isPresent(date: dateRange): boolean {
  return !date[1][0] && !date[1][1];
}

export function printDateRange(date: dateRange): string {
  const startDate = `${getMonth(date[0][0])} ${date[0][1]}`;
  const endDate = isPresent(date) ? "Present" : `${getMonth(date[1][0])} ${date[1][1]}`;
  return `${startDate} - ${endDate}`
}

function getMonth(index: number): string {
  switch (index) {
    case 1: return "January"
    case 2: return "February"
    case 3: return "March"
    case 4: return "April"
    case 5: return "May"
    case 6: return "June"
    case 7: return "July"
    case 8: return "August"
    case 9: return "September"
    case 10: return "October"
    case 11: return "November"
    case 12: return "December"
    default: throw new Error("Invalid date given");
  }
}