'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { VendorSignupForm } from '@/components/forms/VendorSignupForm';
import { VENDOR_BENEFIT_LIST } from '@/lib/constants';
import { VIEWPORT, fadeLeft, fadeRight } from '@/lib/motion';

export function VendorSignupSection() {
  return (
    <section
      id="vendor-signup"
      className="overflow-hidden bg-white py-16 md:py-24"
      aria-labelledby="signup-heading"
    >
      <div className="kosh-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeLeft}
          >
            <p className="section-eyebrow text-orange-ink">For vendors</p>
            <h2 id="signup-heading" className="mt-3 text-balance text-h1-sm text-ink md:text-h1">
              Start selling in your neighbourhood today.
            </h2>

            <ul className="mt-8 space-y-3.5">
              {VENDOR_BENEFIT_LIST.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-body text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Check className="h-3 w-3 text-emerald-700" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeRight}
          >
            <VendorSignupForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
