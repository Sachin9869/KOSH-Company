import { cn } from '@/lib/utils';
import { AppScreen, type ScreenId } from './AppScreen';

/** Logical design size of the phone. All screens are authored at this size. */
const BASE_W = 260;
const BASE_H = 546;

type PhoneMockupProps = {
  screen: ScreenId;
  /** Rendered width in px; the frame scales proportionally. */
  width?: number;
  className?: string;
  /** Extra transform applied to the frame (rotation, tilt). */
  style?: React.CSSProperties;
  shadow?: 'phone' | 'elevated' | 'none';
};

/**
 * A hardware phone frame wrapping an illustrated KOSH app screen.
 *
 * Screens are drawn in markup rather than shipped as images: they stay sharp on
 * every display, cost no image bytes, and can be re-themed with brand tokens.
 */
export function PhoneMockup({
  screen,
  width = 260,
  className,
  style,
  shadow = 'phone',
}: PhoneMockupProps) {
  const scale = width / BASE_W;

  return (
    // No `relative` here: Tailwind emits `.relative` after `.absolute`, so a
    // base `relative` would silently beat an `absolute` passed by the caller.
    <div
      className={cn('shrink-0', className)}
      style={{ width, height: BASE_H * scale, ...style }}
      role="img"
      aria-label={`KOSH app — ${screen} screen`}
    >
      <div
        className="origin-top-left"
        style={{ width: BASE_W, height: BASE_H, transform: `scale(${scale})` }}
      >
        <div
          className={cn(
            'relative h-full w-full rounded-[2.6rem] bg-slate-900 p-[3px]',
            'ring-1 ring-white/25',
            shadow === 'phone' && 'shadow-phone',
            shadow === 'elevated' && 'shadow-elevated',
          )}
        >
          {/* Side buttons */}
          <span className="absolute -left-[2px] top-[104px] h-8 w-[3px] rounded-l bg-slate-700" />
          <span className="absolute -left-[2px] top-[148px] h-12 w-[3px] rounded-l bg-slate-700" />
          <span className="absolute -right-[2px] top-[130px] h-16 w-[3px] rounded-r bg-slate-700" />

          <div className="relative h-full w-full overflow-hidden rounded-[2.45rem] bg-white">
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-[9px] z-20 h-[22px] w-[74px] -translate-x-1/2 rounded-full bg-slate-900" />
            <AppScreen screen={screen} />
            {/* Home indicator */}
            <div className="absolute bottom-[7px] left-1/2 z-20 h-[4px] w-[96px] -translate-x-1/2 rounded-full bg-slate-900/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

export type { ScreenId };
