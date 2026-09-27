'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionWrapper';
import { StepCard } from '@/components/ui/StepCard';
import { KoshButtonLink } from '@/components/ui/KoshButton';
import { BUYER_STEPS, VENDOR_STEPS } from '@/lib/constants';
import { VIEWPORT, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

type Audience = 'buyer' | 'vendor';

const TABS: { id: Audience; label: string }[] = [
  { id: 'buyer', label: "I'm a Buyer" },
  { id: 'vendor', label: "I'm a Vendor" },
];

export function HowItWorksSection() {
  const [audience, setAudience] = useState<Audience>('buyer');
  const isVendor = audience === 'vendor';
  const steps = isVendor ? VENDOR_STEPS : BUYER_STEPS;

  return (
    <SectionWrapper id="how-it-works" className="bg-white" aria-labelledby="how-heading">
      <SectionHeading
        id="how-heading"
        eyebrow="How KOSH works"
        title="From search to order — in a few taps."
      />

      {/* ── audience toggle ──────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Choose your journey"
        className="mx-auto mt-9 flex w-fit items-center gap-1 rounded-full border border-hairline bg-slate-100 p-1"
      >
        {TABS.map((tab) => {
          const active = audience === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              id={`tab-${tab.id}`}
              aria-selected={active}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setAudience(tab.id)}
              className={cn(
                'relative h-10 rounded-full px-5 text-nav transition-colors duration-200',
                active ? 'text-white' : 'text-ink-secondary hover:text-ink',
              )}
            >
              {active && (
                <motion.span
                  layoutId="audience-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className={cn(
                    'absolute inset-0 rounded-full',
                    tab.id === 'vendor' ? 'bg-orange' : 'bg-navy',
                  )}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── steps ───────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={audience}
          id={`panel-${audience}`}
          role="tabpanel"
          aria-labelledby={`tab-${audience}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14"
        >
          {/* Connecting dashed rail behind the step icons (desktop only). */}
          <div
            className="pointer-events-none absolute left-[14%] right-[14%] top-7 hidden md:block"
            aria-hidden="true"
          >
            <div
              className={cn(
                'h-px w-full',
                isVendor
                  ? 'bg-[repeating-linear-gradient(to_right,#F97316_0_8px,transparent_8px_16px)] opacity-40'
                  : 'bg-[repeating-linear-gradient(to_right,#1E3A8A_0_8px,transparent_8px_16px)] opacity-30',
              )}
            />
          </div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerContainer}
            className="relative flex flex-col gap-12 md:flex-row md:gap-8"
          >
            {steps.map((step, i) => (
              <StepCard
                key={step.title}
                index={i}
                icon={step.icon}
                title={step.title}
                body={step.body}
                tone={isVendor ? 'orange' : 'navy'}
              />
            ))}
          </motion.ol>
        </motion.div>
      </AnimatePresence>

      <div className="mt-14 flex justify-center">
        {isVendor ? (
          <KoshButtonLink href="#vendor-signup" variant="orange" size="lg">
            Start selling on KOSH
          </KoshButtonLink>
        ) : (
          <KoshButtonLink href="#download" variant="navy" size="lg">
            Download the app
          </KoshButtonLink>
        )}
      </div>
    </SectionWrapper>
  );
}
