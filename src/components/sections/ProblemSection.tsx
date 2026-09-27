'use client';

import { motion } from 'framer-motion';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionWrapper';
import { Icon } from '@/components/ui/Icon';
import { PROBLEMS } from '@/lib/constants';
import { VIEWPORT, fadeUp, staggerContainer } from '@/lib/motion';

export function ProblemSection() {
  return (
    <SectionWrapper className="bg-surface-page" aria-labelledby="problem-heading">
      <SectionHeading
        id="problem-heading"
        title="Great local businesses are invisible online."
        subtitle="Local stores, home-based businesses, home bakeries, local ethnic grocery stores, convenience stores, lawn care services, and tradespeople rely on Instagram DMs and Facebook posts to reach customers. They're losing business to big platforms that don't serve their community."
      />

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
        className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3"
      >
        {PROBLEMS.map((problem) => (
          <motion.li
            key={problem.title}
            variants={fadeUp}
            className="group rounded-card border border-hairline bg-white p-7 shadow-card transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-ink-muted transition-colors duration-300 group-hover:bg-orange-tint group-hover:text-orange-ink">
              <Icon name={problem.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-h4 text-ink">{problem.title}</h3>
            <p className="mt-2 text-body text-ink-secondary">{problem.body}</p>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 text-center text-h3-sm font-bold text-navy md:text-h3"
      >
        <span className="relative inline-block">
          KOSH fixes all of this.
          <span
            className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-orange"
            aria-hidden="true"
          />
        </span>
      </motion.p>
    </SectionWrapper>
  );
}
