import { APP_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

type BadgeProps = {
  className?: string;
  /** `dark` = black badge for light backgrounds, `light` = white badge for navy. */
  theme?: 'dark' | 'light';
};

const BADGE_BASE =
  'group inline-flex h-12 items-center gap-2.5 rounded-[10px] px-4 transition-transform duration-200 ease-out-expo hover:-translate-y-0.5 active:translate-y-0';

function themeClasses(theme: 'dark' | 'light') {
  return theme === 'dark'
    ? 'bg-ink text-white ring-1 ring-white/10 hover:bg-slate-800'
    : 'bg-white text-ink ring-1 ring-black/5 hover:bg-slate-50';
}

export function AppStoreBadge({ className, theme = 'dark' }: BadgeProps) {
  return (
    <a
      href={APP_LINKS.ios}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download KOSH on the Apple App Store"
      className={cn(BADGE_BASE, themeClasses(theme), className)}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current" aria-hidden="true">
        <path d="M17.05 12.04c-.03-2.85 2.33-4.22 2.44-4.29-1.33-1.95-3.4-2.22-4.14-2.25-1.76-.18-3.44 1.04-4.33 1.04-.89 0-2.27-1.02-3.73-.99-1.92.03-3.69 1.12-4.68 2.84-2 3.46-.51 8.58 1.43 11.39.95 1.37 2.08 2.91 3.57 2.86 1.43-.06 1.97-.93 3.7-.93 1.73 0 2.22.93 3.73.9 1.54-.03 2.51-1.4 3.45-2.78 1.09-1.6 1.54-3.15 1.56-3.23-.03-.01-2.99-1.15-3.02-4.56zM14.5 3.9c.79-.96 1.32-2.29 1.17-3.62-1.13.05-2.5.76-3.31 1.71-.73.85-1.37 2.2-1.2 3.5 1.26.1 2.55-.64 3.34-1.59z" />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[9px] font-medium uppercase tracking-wide opacity-70">
          Download on the
        </span>
        <span className="mt-[3px] text-[15px] font-semibold">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayBadge({ className, theme = 'dark' }: BadgeProps) {
  return (
    <a
      href={APP_LINKS.android}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get KOSH on Google Play"
      className={cn(BADGE_BASE, themeClasses(theme), className)}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path
          d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
          fill="#00A0FF"
        />
        <path
          d="m17.026 15.234-3.234-3.234 3.234-3.234 3.813 2.166c.917.521.917 1.847 0 2.368l-3.813 1.934z"
          fill="#FFBC00"
        />
        <path
          d="M17.026 15.234 13.792 12 3.609 22.186c.324.32.834.363 1.213.143l12.204-7.095z"
          fill="#FF3A44"
        />
        <path
          d="M17.026 8.766 4.822 1.671c-.379-.22-.889-.177-1.213.143L13.792 12l3.234-3.234z"
          fill="#00C853"
        />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[9px] font-medium uppercase tracking-wide opacity-70">Get it on</span>
        <span className="mt-[3px] text-[15px] font-semibold">Google Play</span>
      </span>
    </a>
  );
}

export function StoreBadgeRow({
  theme = 'dark',
  className,
}: BadgeProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <AppStoreBadge theme={theme} />
      <GooglePlayBadge theme={theme} />
    </div>
  );
}
