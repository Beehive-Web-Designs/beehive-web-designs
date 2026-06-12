const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/**
 * Formats a YYYY-MM-DD date string for display.
 *
 * Avoids `new Date().toLocaleDateString()` so CI (UTC) and browsers in US
 * timezones always render the same calendar day during hydration.
 */
export function formatBlogDate(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
}
