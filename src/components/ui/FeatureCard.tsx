'use client';

import { motion } from 'framer-motion';
import { Icon, type IconName } from './Icon';
import { fadeUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

type Tone = 'navy' | 'blue' | 'orange';

const ICON_TONES: Record<Tone, string> = {
  navy: 'bg-navy/8 text-navy ring-navy/10',
  blue: 'bg-blue-tint text-blue-brand ring-blue-brand/15',
  orange: 'bg-orange-tint text-orange-ink ring-orange/20',
};

const BADGE_TONES = {
  orange: 'bg-orange-tint text-orange-ink',
  green: 'bg-emerald-50 text-emerald-700',
} as const;

export type FeatureCardProps = {
  icon: IconName;
  title: string;
  body: string;
  tone?: Tone;
  badge?: string;
  badgeTone?: keyof typeof BADGE_TONES;
};

export function FeatureCard({
  icon,
  title,
  body,
  tone = 'navy',
  badge,
  badgeTone = 'orange',
}: FeatureCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        'group relative overflow-hidden rounded-card border border-hairline bg-white p-7',
        'shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-out-expo',
        'hover:-translate-y-1 hover:border-navy/15 hover:shadow-card-hover',
      )}
    >
      {/* Hover wash — pure opacity, no layout cost. */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-tint/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105',
            ICON_TONES[tone],
          )}
        >
          <Icon name={icon} className="h-6 w-6" strokeWidth={2.1} />
        </span>
        {badge && (
          <span
            className={cn(
              'rounded-full px-2.5 py-1 text-[11px] font-semibold',
              BADGE_TONES[badgeTone],
            )}
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="relative mt-5 text-h4 text-ink">{title}</h3>
      <p className="relative mt-2 text-body text-ink-secondary">{body}</p>
    </motion.article>
  );
}
