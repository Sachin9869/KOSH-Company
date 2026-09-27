'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { KoshButtonLink } from '@/components/ui/KoshButton';
import { Icon } from '@/components/ui/Icon';
import { VENDOR_BENEFITS } from '@/lib/constants';
import { VIEWPORT, fadeUp, staggerContainer } from '@/lib/motion';

export function VendorSection() {
  return (
    <SectionWrapper
      id="for-vendors"
      className="relative overflow-hidden bg-surface-dark"
      aria-labelledby="vendor-heading"
    >
      {/* Warm glow anchors the section as the vendor moment. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange/12 blur-[120px]" />
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-30" />
      </div>

      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-eyebrow text-orange">For local businesses</p>
          <h2
            id="vendor-heading"
            className="mt-3 text-balance text-h1-sm text-white md:text-h1"
          >
            Your digital store,
            <br />
            <span className="text-orange">ready in 60 seconds.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-body-lg text-white/70">
            Whether you&apos;re a home baker, a convenience store owner, or running a yard sale —
            KOSH gives you a centralized storefront, an ordering system, and local customers.
            No website. No developer. No monthly fees to start.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3"
        >
          {VENDOR_BENEFITS.map((benefit) => (
            <motion.li
              key={benefit.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-card border border-surface-dark-border bg-surface-dark-raised p-7 transition-[transform,border-color] duration-300 ease-out-expo hover:-translate-y-1 hover:border-orange/40"
            >
              <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/15 text-orange">
                  <Icon name={benefit.icon} className="h-6 w-6" strokeWidth={2.1} />
                </span>
                {benefit.badge && (
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                    {benefit.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-h4 text-white">{benefit.title}</h3>
              <p className="mt-2 text-body text-[#94A3B8]">{benefit.body}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mt-12 flex flex-col items-center"
        >
          <KoshButtonLink
            href="#vendor-signup"
            variant="orange"
            size="lg"
            className="px-8 shadow-cta-orange-lg"
            iconRight={
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
            }
          >
            Start selling on KOSH
          </KoshButtonLink>
          <p className="mt-4 text-center text-xs text-ink-secondary">
            No credit card required · No setup fee · Free to start
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
