'use client';

import { motion } from 'framer-motion';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FEATURES } from '@/lib/constants';
import { VIEWPORT, staggerFast } from '@/lib/motion';

export function FeaturesSection() {
  return (
    <SectionWrapper className="bg-section-gradient" aria-labelledby="features-heading">
      <SectionHeading
        id="features-heading"
        eyebrow="Everything you need"
        title="Built different. Built local."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerFast}
        className="mt-14 grid gap-5 md:grid-cols-2"
      >
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            body={feature.body}
            tone={feature.tone}
            badge={feature.badge}
            badgeTone={feature.badgeTone}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
