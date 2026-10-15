'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Smartphone, Store } from 'lucide-react';
import { PhoneMockup, type ScreenId } from '@/components/ui/PhoneMockup';
import { StoreBadgeRow } from '@/components/ui/StoreBadges';
import { KoshButtonLink } from '@/components/ui/KoshButton';
import { SectionHeading } from '@/components/ui/SectionWrapper';
import { VIEWPORT, fadeUp, staggerContainer } from '@/lib/motion';

const BUYER: { id: ScreenId; label: string }[] = [
  { id: 'buyer-home', label: 'Home' },
  { id: 'buyer-search', label: 'Search' },
  { id: 'buyer-store', label: 'Storefront' },
  { id: 'buyer-product', label: 'Product' },
];

const VENDOR: { id: ScreenId; label: string }[] = [
  { id: 'vendor-home', label: 'Your shop at a glance' },
  { id: 'vendor-create', label: 'Create with AI' },
];

/** Real screenshots of both apps — the buyer app and KOSH Vendor. */
export function AppScreensSection() {
  return (
    <section id="app" className="overflow-hidden bg-white py-16 md:py-24" aria-labelledby="screens-heading">
      <div className="kosh-container">
        <SectionHeading
          id="screens-heading"
          eyebrow="Inside the apps"
          title="See KOSH in action"
          subtitle="One app to find and order from the neighbourhood, one to run your shop. These are the real screens."
        />

        {/* ── buyer app ─────────────────────────────────────────────── */}
        <div className="mt-14 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-navy">
            <Smartphone className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-h4 text-ink">KOSH</h3>
            <p className="text-body-sm text-ink-secondary">For finding, ordering and booking</p>
          </div>
        </div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="hide-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          {BUYER.map((screen) => (
            <motion.li
              key={screen.id}
              variants={fadeUp}
              className="flex shrink-0 snap-center flex-col items-center"
            >
              <PhoneMockup screen={screen.id} width={236} />
              <p className="mt-4 text-[13px] font-semibold text-ink-secondary">{screen.label}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* ── vendor app ───────────────────────────────────────────── */}
        <div className="mt-16 overflow-hidden rounded-[28px] bg-surface-dark">
          <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-14 lg:p-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
              className="min-w-0"
            >
              <span className="inline-flex items-center gap-3">
                <Image src="/brand/kosh-vendor-mark.png" alt="" width={44} height={43} />
                <span className="text-h4 text-white">KOSH Vendor</span>
              </span>
              <h3 className="mt-6 max-w-md text-balance text-h2-sm text-white md:text-h2">
                Run your shop from <span className="text-orange">one screen.</span>
              </h3>
              <p className="mt-4 max-w-md text-body text-white/70">
                Switch between your store, ads and services, post with a photo, and let AI write
                the listing. Orders, messages and payouts are all on Home.
              </p>
              <KoshButtonLink
                href="#vendor-signup"
                variant="orange"
                size="md"
                className="mt-7"
                icon={<Store className="h-5 w-5" />}
              >
                Get early access
              </KoshButtonLink>
            </motion.div>

            <div className="flex min-w-0 justify-center gap-4 sm:gap-6">
              {VENDOR.map((screen, i) => (
                <figure
                  key={screen.id}
                  // Two phones don't fit a phone screen; the second joins from sm.
                  className={i === 0 ? 'flex flex-col items-center' : 'hidden flex-col items-center sm:flex'}
                  style={{ transform: `translateY(${i === 0 ? -12 : 12}px)` }}
                >
                  <PhoneMockup screen={screen.id} width={200} shadow="elevated" />
                  <figcaption className="mt-4 text-[13px] font-semibold text-white/60">
                    {screen.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <p className="text-body-sm text-ink-secondary">Free on iOS and Android</p>
          <StoreBadgeRow className="justify-center" />
        </motion.div>
      </div>
    </section>
  );
}
