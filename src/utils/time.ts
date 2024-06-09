/**
 *
 * @param ms number of milliseconds to wait
 * @returns halts the program execution for the `ms` milliseconds
 */
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Calculates the length of the transaction from `start` to `end`
 * @param start a date formatted to string, ex.: 2024-01-10T14:51:20.555+00:00
 * @param end a date formatted to string, ex.: 2024-01-10T14:53:27.742+00:00
 * @returns a time struct: {days:number, hours: number, minutes: number, seconds: number}
 */
export const getTimeLength = (start: string, end: string) => {
  console.log({ start, end });
  const s: number = new Date(parseInt(start)).getTime();
  const e: number = new Date(parseInt(end)).getTime();
  console.log({ s, e });
  const elapsed: number = e - s;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

/**
 * Produces a time elapsed string, ex. 1 day | 3 hours, etc.
 * @param dt a struct of {days:number, hours: number, minutes: number, seconds: number}
 * @returns a string with the time elapsed since the start
 */
export function unpackDateTime(dt: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}): string {
  if (dt.days) return `${dt.days} day${dt.days > 1 ? "s" : ""}`;
  if (dt.hours) return `${dt.hours} hour${dt.hours > 1 ? "s" : ""}`;
  if (dt.minutes) return `${dt.minutes} minute${dt.minutes > 1 ? "s" : ""}`;
  if (dt.seconds) return `${dt.seconds} second${dt.seconds > 1 ? "s" : ""}`;
  return "";
}
