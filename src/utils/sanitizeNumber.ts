export function sanitizeNumber(value: string | number | undefined): string {
  if (!value) return "";
  return String(value)
    .replace(",", ".")
    .replace(/[^0-9.]/g, "");
}
