'use client';

import { motion } from 'framer-motion';
import { Icon, type IconName } from './Icon';
import { cn } from '@/lib/utils';

type StepCardProps = {
  index: number;
  icon: IconName;
  title: string;
  body: string;
  tone: 'navy' | 'orange';
};

export function StepCard({ index, icon, title, body, tone }: StepCardProps) {
  const isNavy = tone === 'navy';

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="relative flex flex-1 flex-col items-center text-center md:items-start md:text-left"
    >
      <div className="relative">
        <span
          className={cn(
            'relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg',
            isNavy ? 'bg-navy shadow-navy/25' : 'bg-orange shadow-orange/30',
          )}
        >
          <Icon name={icon} className="h-6 w-6" strokeWidth={2.2} />
        </span>
        <span
          className={cn(
            'absolute -right-2 -top-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold',
            isNavy ? 'bg-blue-tint text-navy' : 'bg-orange-tint text-orange-ink',
          )}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 text-h4 text-ink">{title}</h3>
      <p className="mt-2 max-w-xs text-body text-ink-secondary md:max-w-none">{body}</p>
    </motion.li>
  );
}
