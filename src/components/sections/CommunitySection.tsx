'use client';

import { motion } from 'framer-motion';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionWrapper';
import { COMMUNITY_TAGS } from '@/lib/constants';
import { VIEWPORT } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function CommunitySection() {
  return (
    <SectionWrapper spacing="tight" className="bg-white" aria-labelledby="community-heading">
      <SectionHeading
        id="community-heading"
        title="Built for every community"
        subtitle="KOSH celebrates the diversity of local business."
      />

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2.5"
      >
        {COMMUNITY_TAGS.map((tag) => (
          <motion.li
            key={tag.label}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2.5 text-body-sm font-medium',
              'transition-transform duration-200 hover:-translate-y-0.5',
              tag.tone === 'navy'
                ? 'bg-navy text-white'
                : 'bg-orange-tint text-orange-ink ring-1 ring-orange/15',
            )}
          >
            <span aria-hidden="true">{tag.emoji}</span>
            {tag.label}
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center text-h4 italic text-navy"
      >
        Whatever your community — KOSH is your marketplace.
      </motion.p>
    </SectionWrapper>
  );
}
