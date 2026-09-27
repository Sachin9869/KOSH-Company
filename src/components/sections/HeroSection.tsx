'use client';

import { motion } from 'framer-motion';
import { Smartphone, Store } from 'lucide-react';
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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero-gradient pb-16 pt-24 lg:pb-20 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      {/* ── decorative background ─────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-60" />
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-brand/20 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-orange/20 blur-[90px]" />
        <div className="absolute left-1/2 top-1/3 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        {/* Soft ramp into the section below. */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy/40" />
      </div>

      <div className="kosh-container relative">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-10">
          {/* ── copy column ──────────────────────────────────────────── */}
          <div className="w-full text-center lg:w-[55%] lg:text-left">
            <motion.h1
              id="hero-heading"
              initial="hidden"
              animate="visible"
              variants={item}
              transition={transition(0.1)}
              className="mt-6 text-balance text-display-sm text-white md:text-display"
            >
              Find Local.
              <br />
              <span className="text-orange">Buy Local.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={item}
              transition={transition(0.3)}
              className="mx-auto mt-5 max-w-xl text-pretty text-body-lg text-white/85 lg:mx-0"
            >
              Discover home bakeries, convenience stores, local services, and neighbourhood
              businesses near you — and order in seconds.
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
                variant="white"
                size="lg"
                icon={<Smartphone className="h-5 w-5" />}
              >
                Download App
              </KoshButtonLink>
              <KoshButtonLink
                href="#vendor-signup"
                variant="orange"
                size="lg"
                icon={<Store className="h-5 w-5" />}
              >
                Start Selling
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
              {/* Glow behind the phones */}
              <div
                className="absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-brand/25 blur-[80px]"
                aria-hidden="true"
              />
              <PhoneMockup
                screen="search"
                width={192}
                className="absolute left-[-72px] top-7 hidden origin-bottom opacity-90 sm:block"
                style={{ transform: 'rotate(-8deg)' }}
              />
              <PhoneMockup screen="home" width={244} className="relative z-10" />

              {/* Floating proof chips */}
              <div
                className="absolute -right-16 top-24 z-20 hidden rounded-xl border border-white/20 bg-white/95 px-3 py-2 shadow-elevated backdrop-blur lg:block"
                aria-hidden="true"
              >
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
                  ⭐ Maria&apos;s Bakery
                </p>
                <p className="mt-0.5 text-[10px] text-ink-secondary">0.8 km away · Open now</p>
              </div>
              <div
                className="absolute -left-24 bottom-20 z-20 hidden rounded-xl border border-white/20 bg-orange px-3 py-2 shadow-cta-orange-lg lg:block"
                aria-hidden="true"
              >
                <p className="text-[11px] font-bold text-white">Listing live in 60s</p>
                <p className="mt-0.5 text-[10px] text-white/80">Written by KOSH AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
