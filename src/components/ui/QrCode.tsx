import { cn } from '@/lib/utils';

/**
 * Placeholder QR block. Deterministic (seeded LCG) so it renders identically on
 * server and client — swap for a real encoder once the store links are live.
 */
export function QrCode({ size = 100, className }: { size?: number; className?: string }) {
  const grid = 21;
  const cells: boolean[] = [];

  let seed = 20250810;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  const inFinder = (r: number, c: number) =>
    (r < 7 && c < 7) || (r < 7 && c >= grid - 7) || (r >= grid - 7 && c < 7);

  for (let r = 0; r < grid; r++) {
    for (let c = 0; c < grid; c++) {
      cells.push(inFinder(r, c) ? false : rand() > 0.52);
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${grid} ${grid}`}
      className={cn('rounded-lg bg-white p-1', className)}
      role="img"
      aria-label="QR code placeholder — scan to download the KOSH app"
    >
      <rect width={grid} height={grid} fill="#fff" />
      {cells.map((on, i) =>
        on ? (
          <rect
            key={i}
            x={i % grid}
            y={Math.floor(i / grid)}
            width="1"
            height="1"
            fill="#0F172A"
          />
        ) : null,
      )}
      {/* Finder patterns */}
      {[
        [0, 0],
        [grid - 7, 0],
        [0, grid - 7],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="7" height="7" fill="#0F172A" />
          <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
          <rect x={x + 2} y={y + 2} width="3" height="3" fill="#1E3A8A" />
        </g>
      ))}
    </svg>
  );
}
