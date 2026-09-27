'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionWrapper';
import { PRICING_FAQ } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" className="bg-surface-page" aria-labelledby="faq-heading">
      <SectionHeading
        id="faq-heading"
        eyebrow="Questions, answered"
        title="Everything you need to know"
      />

      <div className="mx-auto mt-10 max-w-2xl">
        <ul className="space-y-3">
          {PRICING_FAQ.map((item, i) => {
            const expanded = open === i;
            return (
              <li key={item.q} className="overflow-hidden rounded-card border border-hairline bg-white">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : i)}
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-body font-semibold text-ink">{item.q}</span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-ink-secondary transition-transform duration-200',
                        expanded && 'rotate-180 text-navy',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-5 text-body text-ink-secondary">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionWrapper>
  );
}
