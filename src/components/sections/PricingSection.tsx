'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionWrapper';
import { KoshButtonLink } from '@/components/ui/KoshButton';
import { PLANS, PRICING_FAQ, type Plan } from '@/lib/constants';
import { VIEWPORT, fadeUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-surface-page" aria-labelledby="pricing-heading">
      <SectionHeading
        id="pricing-heading"
        eyebrow="Simple pricing"
        title="Start free. Grow when you're ready."
        subtitle="No setup fees. No hidden costs. Pay only when you earn."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
        className="mx-auto mt-14 grid max-w-5xl items-start gap-6 md:grid-cols-3 lg:gap-7"
      >
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </motion.div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-secondary">
        All plans include: Stripe payments · KOSH Verified badge eligibility · Ontario compliance
        tools · Mobile app access
      </p>

      <FaqAccordion />
    </SectionWrapper>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const featured = Boolean(plan.featured);

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'relative flex h-full flex-col overflow-hidden rounded-panel bg-white',
        featured
          ? 'border-2 border-navy shadow-elevated md:-my-3 md:scale-[1.03]'
          : 'border border-hairline shadow-card',
      )}
    >
      {featured && (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-orange px-3 py-1 text-[11px] font-semibold text-white">
          {plan.badge}
        </span>
      )}

      <div
        className={cn(
          'px-7 pb-7 pt-7',
          featured ? 'bg-navy-gradient text-white' : 'border-b border-hairline bg-white',
        )}
      >
        {!featured && (
          <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-ink-secondary">
            {plan.badge}
          </span>
        )}
        <h3
          className={cn(
            'text-h4',
            featured ? 'mt-0 text-white' : 'mt-4 text-ink',
          )}
        >
          {plan.name}
        </h3>
        <p className="mt-3 flex items-baseline gap-1.5">
          <span
            className={cn(
              'text-[40px] font-extrabold leading-none tracking-tight',
              featured ? 'text-white' : 'text-ink',
            )}
          >
            {plan.price}
          </span>
          <span className={cn('text-body-sm', featured ? 'text-white/70' : 'text-ink-secondary')}>
            {plan.period}
          </span>
        </p>
        <p className={cn('mt-2 text-body-sm', featured ? 'text-white/70' : 'text-ink-secondary')}>
          {plan.note}
        </p>
      </div>

      <ul className="flex flex-1 flex-col gap-3 px-7 py-7">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-body-sm text-ink">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
              strokeWidth={2.6}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="px-7 pb-7">
        <KoshButtonLink
          href="#vendor-signup"
          variant={featured ? 'navy' : 'outline'}
          size="md"
          fullWidth
        >
          {plan.cta}
        </KoshButtonLink>
      </div>
    </motion.div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-16 max-w-2xl">
      <h3 className="text-center text-h3 text-ink">Questions, answered</h3>
      <ul className="mt-6 space-y-3">
        {PRICING_FAQ.map((item, i) => {
          const expanded = open === i;
          return (
            <li key={item.q} className="overflow-hidden rounded-card border border-hairline bg-white">
              <h4>
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
              </h4>
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
  );
}
