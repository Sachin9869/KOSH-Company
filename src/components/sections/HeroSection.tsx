'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Smartphone, Sparkles, Store } from 'lucide-react';
import { KoshButtonLink } from '@/components/ui/KoshButton';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const transition = (delay: number) => ({
  duration: 0.6,
  delay,
  ease: [0.16, 1, 0.3, 1] as const,
});

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-dark pb-16 pt-24 lg:pb-20 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      {/* ── photo, like the "Local this week" card in the app ──────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-market.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_40%]"
        />
        {/* Forest wash: dark behind the copy, lighter over the photo. */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-dark/70" />
      </div>

      <div className="kosh-container relative">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-10">
          {/* ── copy column ──────────────────────────────────────────── */}
          <div className="w-full text-center lg:w-[55%] lg:text-left">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={item}
              transition={transition(0)}
              className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3.5 py-1.5 text-label uppercase text-surface-dark"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Local this week
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial="hidden"
              animate="visible"
              variants={item}
              transition={transition(0.1)}
              className="mt-6 text-balance text-display-sm text-white md:text-display"
            >
              Good things are
              <br />
              <span className="text-orange">closer than you think.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={item}
              transition={transition(0.3)}
              className="mx-auto mt-5 max-w-xl text-pretty text-body-lg text-white/85 lg:mx-0"
            >
              Home bakers, farm stands, tradespeople and the shop around the corner — find them
              on KOSH, and order, book or ask in a few taps.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={item}
              transition={transition(0.5)}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            >
              <KoshButtonLink
                href="#download"
                variant="orange"
                size="lg"
                icon={<Smartphone className="h-5 w-5" />}
              >
                Download the app
              </KoshButtonLink>
              <KoshButtonLink
                href="#vendor-signup"
                variant="ghost-light"
                size="lg"
                icon={<Store className="h-5 w-5" />}
              >
                Start selling
              </KoshButtonLink>
            </motion.div>
          </div>

          {/* ── phone column ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.4)}
            className="relative flex w-full justify-center lg:w-[45%]"
          >
            <div className="relative motion-safe:animate-float-slow">
              <PhoneMockup
                screen="buyer-search"
                width={196}
                priority
                className="absolute left-[-84px] top-9 hidden origin-bottom opacity-95 sm:block"
                style={{ transform: 'rotate(-8deg)' }}
              />
              <PhoneMockup screen="buyer-home" width={252} priority className="relative z-10" />

              {/* Floating proof chips */}
              <div
                className="absolute -right-20 top-24 z-20 hidden items-center gap-2.5 rounded-2xl bg-white/95 py-2 pl-2 pr-4 shadow-elevated backdrop-blur lg:flex"
                aria-hidden="true"
              >
                <Image
                  src="/images/sourdough.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl object-cover"
                />
                <span>
                  <span className="block text-[12px] font-bold text-ink">Amara&apos;s Bakehouse</span>
                  <span className="block text-[11px] text-ink-secondary">Sourdough · $8 · 5 km</span>
                </span>
              </div>
              <div
                className="absolute -left-28 bottom-20 z-20 hidden items-center gap-2 rounded-2xl bg-orange px-3.5 py-2.5 shadow-cta-orange-lg lg:flex"
                aria-hidden="true"
              >
                <Sparkles className="h-4 w-4 text-surface-dark" />
                <span>
                  <span className="block text-[12px] font-bold text-surface-dark">Listed in 60 seconds</span>
                  <span className="block text-[11px] text-surface-dark/75">Drafted by KOSH AI</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
