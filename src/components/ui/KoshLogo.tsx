import Image from 'next/image';
import { cn } from '@/lib/utils';

type KoshLogoProps = {
  /** Colour of the wordmark: forest on light surfaces, white on dark ones. */
  variant?: 'navy' | 'white';
  /** Wordmark font size in px — the mark scales with it. */
  size?: number;
  className?: string;
  /** Render only the mark (favicon / avatar contexts). */
  markOnly?: boolean;
  /** The vendor app's mark (ink tile, lime awning) instead of the buyer one. */
  vendor?: boolean;
};

/**
 * The KOSH logo, using the same marks as the apps: the shop with the red
 * awning from the buyer app, or the ink-and-lime shop from the vendor app.
 */
export function KoshLogo({
  variant = 'navy',
  size = 22,
  className,
  markOnly = false,
  vendor = false,
}: KoshLogoProps) {
  const markHeight = Math.round(size * (vendor ? 1.45 : 1.6));
  const markWidth = Math.round(markHeight * (vendor ? 240 / 232 : 206 / 256));

  return (
    <span
      className={cn('inline-flex items-center gap-2', className)}
      aria-label="KOSH"
      role="img"
    >
      <Image
        src={vendor ? '/brand/kosh-vendor-mark.png' : '/brand/kosh-mark.png'}
        alt=""
        width={markWidth}
        height={markHeight}
        priority
        className="shrink-0"
      />
      {!markOnly && (
        <span
          className={cn(
            'font-poppins font-extrabold leading-none',
            variant === 'white' ? 'text-white' : 'text-navy',
          )}
          style={{ fontSize: size, letterSpacing: '-0.01em' }}
          aria-hidden="true"
        >
          KOSH
        </span>
      )}
    </span>
  );
}
