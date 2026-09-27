'use client';

import { motion } from 'framer-motion';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { StoreBadgeRow } from '@/components/ui/StoreBadges';
import { QrCode } from '@/components/ui/QrCode';
import { VIEWPORT, fadeLeft, fadeRight } from '@/lib/motion';

export function DownloadSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-hero-gradient py-16 md:py-24"
      aria-labelledby="download-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-50" />
        <div className="absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-orange/15 blur-[110px]" />
        <div className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-brand/25 blur-[100px]" />
      </div>

      <div className="kosh-container relative">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:justify-between lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeLeft}
            className="w-full text-center lg:w-1/2 lg:text-left"
          >
            <p className="section-eyebrow text-white/60">Download KOSH</p>
            <h2
              id="download-heading"
              className="mt-3 text-balance text-h1-sm text-white md:text-h1"
            >
              Your neighbourhood,
              <br />
              in your pocket.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-pretty text-body-lg text-white/80 lg:mx-0">
              Available on iOS and Android. Browse, discover, and connect with local businesses
              around you.
            </p>

            <StoreBadgeRow theme="light" className="mt-8 justify-center lg:justify-start" />

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center lg:justify-start">
              <div className="flex items-center gap-4">
                <QrCode size={92} className="shadow-cta" />
                <p className="max-w-[9rem] text-left text-body-sm text-white/60">
                  Or scan to download on your phone
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeRight}
            className="relative flex w-full justify-center lg:w-1/2"
          >
            <div
              className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[70px]"
              aria-hidden="true"
            />
            <div className="relative motion-safe:animate-float">
              <PhoneMockup
                screen="order"
                width={272}
                shadow="elevated"
                style={{ transform: 'perspective(1400px) rotateY(-11deg) rotateX(3deg)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
