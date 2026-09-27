'use client';

import { motion } from 'framer-motion';
import { Globe, RefreshCw, LayoutDashboard } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { KoshButtonLink } from '@/components/ui/KoshButton';
import { VIEWPORT, fadeUp, staggerContainer } from '@/lib/motion';

const PILLARS = [
  {
    icon: Globe,
    title: 'Your store, ready instantly',
    body: 'No website. No developer. No domain to buy. Your storefront is live at kosh.ca/store/you in under 60 seconds.',
  },
  {
    icon: RefreshCw,
    title: 'We maintain it for you',
    body: 'Hosting, updates, payments, security — KOSH handles all the infrastructure. You focus on your business, not your tech stack.',
  },
  {
    icon: LayoutDashboard,
    title: 'Everything in one place',
    body: 'Products, services, yard sale items, orders, and customer messages — one app, not five scattered tools.',
  },
];

export function CentralizedSection() {
  return (
    <SectionWrapper
      className="relative overflow-hidden bg-section-gradient"
      aria-labelledby="centralized-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-navy/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <p className="section-eyebrow text-orange-ink">The KOSH difference</p>
          <h2
            id="centralized-heading"
            className="mt-3 text-balance text-h1-sm text-ink md:text-h1"
          >
            Everything scattered.
            <br />
            <span className="text-navy">Until now.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-body-lg text-ink-secondary">
            To sell online today you need an Instagram page, a WhatsApp Business number, a website,
            a payment link, and something to track orders. They don&apos;t talk to each other. You
            lose track. You lose sales.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-body-lg font-medium text-ink">
            KOSH replaces all of it — one app, one storefront, one place to run your entire
            business from day one.
          </p>
        </motion.div>
      </div>

      {/* Before / After comparison */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={fadeUp}
        className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2"
      >
        {/* Before */}
        <div className="rounded-card border border-hairline bg-white p-6 shadow-card">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-ink-muted">Before KOSH</p>
          <ul className="mt-4 space-y-3">
            {[
              'Instagram page for photos',
              'WhatsApp for orders',
              'E-Transfer or cash only',
              'Google Sheet to track orders',
              'No way to be discovered locally',
              'Pay a developer to build a site',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-body-sm text-ink-secondary">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[11px] font-bold text-red-400">
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="rounded-card border-2 border-navy bg-white p-6 shadow-elevated">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-navy">With KOSH</p>
          <ul className="mt-4 space-y-3">
            {[
              'One storefront for everything',
              'Orders managed in the app',
              'Secure CAD payments via Stripe',
              'Orders dashboard built in',
              'Appear in local search instantly',
              'Live in 60 seconds, no developer',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-body-sm text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-600">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Three pillars */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
        className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3"
      >
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <motion.li
              key={pillar.title}
              variants={fadeUp}
              className="group rounded-card border border-hairline bg-white p-7 shadow-card transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/8 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-h4 text-ink">{pillar.title}</h3>
              <p className="mt-2 text-body text-ink-secondary">{pillar.body}</p>
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={fadeUp}
        className="mt-12 flex justify-center"
      >
        <KoshButtonLink href="#vendor-signup" variant="navy" size="lg">
          Open your free store
        </KoshButtonLink>
      </motion.div>
    </SectionWrapper>
  );
}
