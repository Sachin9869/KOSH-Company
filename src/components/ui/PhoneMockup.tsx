import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Real screenshots of the two apps, taken on an Android phone. */
export const SCREENS = {
  'buyer-home': 'KOSH app home: Ask KOSH, this week’s highlights and the latest offers nearby',
  'buyer-search': 'KOSH search results for “fresh”: tutoring, sweets, lawn care and farm vegetables',
  'buyer-product': 'A sourdough boule from Amara’s Bakehouse, with Add to Cart and Buy now',
  'buyer-store': 'Fresh Farm’s storefront: rating, opening hours and its vegetables',
  'vendor-home': 'KOSH Vendor home for Amara’s Bakehouse: Quick Post, New product and workspace',
  'vendor-create': 'KOSH Vendor create screen: Create with AI or fill it in yourself',
} as const;

export type ScreenId = keyof typeof SCREENS;

/** Logical design size of the phone; the screenshots are 720 × 1557. */
const BASE_W = 260;
const SCREEN_W = BASE_W - 6;
const BASE_H = Math.round((SCREEN_W * 1557) / 720) + 6;

type PhoneMockupProps = {
  screen: ScreenId;
  /** Rendered width in px; the frame scales proportionally. */
  width?: number;
  className?: string;
  /** Extra transform applied to the frame (rotation, tilt). */
  style?: React.CSSProperties;
  shadow?: 'phone' | 'elevated' | 'none';
  /** Load eagerly — for the phones in the first screenful. */
  priority?: boolean;
};

/** A slim phone frame around a real screenshot of the app. */
export function PhoneMockup({
  screen,
  width = 260,
  className,
  style,
  shadow = 'phone',
  priority = false,
}: PhoneMockupProps) {
  const scale = width / BASE_W;

  return (
    // No `relative` here: Tailwind emits `.relative` after `.absolute`, so a
    // base `relative` would silently beat an `absolute` passed by the caller.
    <div className={cn('shrink-0', className)} style={{ width, height: BASE_H * scale, ...style }}>
      <div
        className={cn(
          'relative h-full w-full bg-[#10291E] ring-1 ring-white/20',
          shadow === 'phone' && 'shadow-phone',
          shadow === 'elevated' && 'shadow-elevated',
        )}
        style={{ borderRadius: 34 * scale, padding: 3 * scale }}
      >
        <div
          className="relative h-full w-full overflow-hidden bg-surface-page"
          style={{ borderRadius: 31 * scale }}
        >
          <Image
            src={`/screens/${screen}.webp`}
            alt={SCREENS[screen]}
            fill
            sizes={`${Math.ceil(width)}px`}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
