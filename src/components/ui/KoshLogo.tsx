import { cn } from '@/lib/utils';

type KoshLogoProps = {
  /** Colour of the K, S and H letterforms. */
  variant?: 'navy' | 'white';
  /** Wordmark font size in px — the pin scales with it. */
  size?: number;
  className?: string;
  /** Render only the pin glyph (favicon / avatar contexts). */
  markOnly?: boolean;
};

/**
 * The KOSH wordmark. The "O" is replaced by a map-pin teardrop in brand
 * orange — the single most recognisable piece of the identity, so it is drawn
 * as inline SVG rather than an image to stay crisp at every size.
 */
export function KoshLogo({
  variant = 'navy',
  size = 22,
  className,
  markOnly = false,
}: KoshLogoProps) {
  const letterColour = variant === 'white' ? 'text-white' : 'text-navy';
  // The pin reads as a capital O, so it tracks cap-height rather than font-size.
  const pinSize = Math.round(size * 1.02);

  return (
    <span
      className={cn('inline-flex items-center', className)}
      aria-label="KOSH"
      role="img"
    >
      {!markOnly && (
        <span
          className={cn('font-poppins font-extrabold leading-none', letterColour)}
          style={{ fontSize: size, letterSpacing: '-0.02em' }}
          aria-hidden="true"
        >
          K
        </span>
      )}
      <MapPinGlyph size={pinSize} />
      {!markOnly && (
        <span
          className={cn('font-poppins font-extrabold leading-none', letterColour)}
          style={{ fontSize: size, letterSpacing: '-0.02em' }}
          aria-hidden="true"
        >
          SH
        </span>
      )}
    </span>
  );
}

/** Orange teardrop pin with a punched-out centre so it still reads as an "O". */
function MapPinGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 1.18}
      viewBox="0 0 24 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
      style={{ marginInline: size * -0.02, transform: `translateY(${size * 0.07}px)` }}
    >
      <path
        d="M12 27.2c0 0 10-10.8 10-16.1A10 10 0 1 0 2 11.1c0 5.3 10 16.1 10 16.1Z"
        fill="#F97316"
      />
      <circle cx="12" cy="10.6" r="3.9" fill="#FFFFFF" />
    </svg>
  );
}
