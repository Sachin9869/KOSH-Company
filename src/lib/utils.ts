/**
 * Joins conditional class names. Deliberately dependency-free — the project
 * has no class-conflict resolution needs that would justify clsx + tailwind-merge.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Formats trust-bar numbers as `2,400` / `4.8`. */
export function formatStat(value: number, decimals = 0): string {
  return value.toLocaleString('en-CA', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
