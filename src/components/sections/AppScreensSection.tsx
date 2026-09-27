'use client';

import { motion } from 'framer-motion';
import { Smartphone, Store } from 'lucide-react';
import { PhoneMockup, type ScreenId } from '@/components/ui/PhoneMockup';
import { StoreBadgeRow } from '@/components/ui/StoreBadges';
import { KoshButtonLink } from '@/components/ui/KoshButton';
import { SectionHeading } from '@/components/ui/SectionWrapper';
import { VIEWPORT, fadeUp } from '@/lib/motion';

const SCREENS: { id: ScreenId; label: string }[] = [
  { id: 'home', label: 'Discover nearby' },
  { id: 'search', label: 'Search results' },
  { id: 'store', label: 'Vendor storefront' },
  { id: 'product', label: 'AI product summary' },
  { id: 'order', label: 'Order tracking' },
];

export function AppScreensSection() {
  // The track is duplicated so the -50% translate loops seamlessly.
  const track = [...SCREENS, ...SCREENS];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24" aria-labelledby="screens-heading">
      <div className="kosh-container">
        <SectionHeading
          id="screens-heading"
          eyebrow="A closer look"
          title="See KOSH in action"
          subtitle="Five taps from “I need a plumber” to “he's on his way.” Same app, two sides of the neighbourhood."
        />
      </div>

      <div className="marquee-mask pause-on-hover relative mt-14">
        <div
          data-marquee-track
          className="flex w-max gap-6 motion-safe:animate-marquee-left px-6"
          style={{ ['--marquee-duration' as string]: '48s' }}
        >
          {track.map((screen, i) => (
            <figure
              key={`${screen.id}-${i}`}
              className="flex flex-col items-center"
              style={{ transform: `translateY(${i % 2 === 0 ? -16 : 16}px)` }}
            >
              <PhoneMockup screen={screen.id} width={224} />
              <figcaption className="mt-5 text-[13px] font-medium text-ink-secondary">
                {screen.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={fadeUp}
        className="kosh-container mt-16"
      >
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="flex flex-col items-center rounded-panel border border-hairline bg-surface-page p-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/8 text-navy">
              <Smartphone className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-h4 text-ink">User app</h3>
            <p className="mt-1.5 text-body-sm text-ink-secondary">
              Browse, order, and track — free on iOS and Android.
            </p>
            <StoreBadgeRow className="mt-5 justify-center" />
          </div>

          <div className="flex flex-col items-center rounded-panel border border-orange/20 bg-orange-tint p-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/15 text-orange-ink">
              <Store className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-h4 text-ink">Vendor app</h3>
            <p className="mt-1.5 text-body-sm text-ink-secondary">
              Photograph it, let AI list it, and start taking orders.
            </p>
            <KoshButtonLink href="#vendor-signup" variant="orange" size="md" className="mt-5">
              Get early access
            </KoshButtonLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
