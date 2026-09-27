'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { TRUST_STATS } from '@/lib/constants';
import { formatStat } from '@/lib/utils';

export function TrustBarSection() {
  return (
    <section
      className="border-y border-hairline bg-white py-6"
      aria-label="KOSH by the numbers"
    >
      <div className="kosh-container">
        <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-y-0">
          {TRUST_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i > 0
                  ? 'md:border-l md:border-hairline flex flex-col items-center px-4 text-center'
                  : 'flex flex-col items-center px-4 text-center'
              }
            >
              <dd className="text-[28px] font-bold leading-none text-navy">
                <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </dd>
              <dt className="mt-1.5 text-[13px] text-ink-secondary">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/**
 * Counts from 0 to `value` the first time the stat scrolls into view.
 * Uses requestAnimationFrame rather than a per-tick interval so the animation
 * stays on the browser's frame budget.
 */
function CountUp({
  value,
  decimals = 0,
  suffix = '',
  duration = 1400,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast start, gentle settle.
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {formatStat(display, decimals)}
      {suffix}
    </span>
  );
}
