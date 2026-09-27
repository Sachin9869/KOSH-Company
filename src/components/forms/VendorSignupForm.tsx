'use client';

import { useState } from 'react';

export function VendorSignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');

  return (
    <div className="rounded-card border border-hairline bg-white p-8 shadow-card">
      <h3 className="text-h4 text-ink">Get early access</h3>
      <p className="mt-1 text-body text-ink-secondary">
        Be the first to know when KOSH launches in your area.
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Vendor early access form"
      >
        <div>
          <label htmlFor="signup-name" className="mb-1.5 block text-body-sm font-medium text-ink">
            Your name
          </label>
          <input
            id="signup-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-hairline px-4 py-3 text-body text-ink placeholder:text-ink-muted focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
          />
        </div>

        <div>
          <label htmlFor="signup-email" className="mb-1.5 block text-body-sm font-medium text-ink">
            Email address
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-hairline px-4 py-3 text-body text-ink placeholder:text-ink-muted focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
          />
        </div>

        <div>
          <label
            htmlFor="signup-business"
            className="mb-1.5 block text-body-sm font-medium text-ink"
          >
            Business name <span className="text-ink-muted">(optional)</span>
          </label>
          <input
            id="signup-business"
            type="text"
            placeholder="My Local Shop"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="w-full rounded-xl border border-hairline px-4 py-3 text-body text-ink placeholder:text-ink-muted focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
          />
        </div>

        {/* Submit button — temporarily disabled while sign-up flow is being built */}
        <div className="group relative">
          <button
            type="submit"
            disabled
            aria-disabled="true"
            className="mt-2 w-full cursor-not-allowed rounded-xl bg-navy/40 px-6 py-3.5 text-body font-semibold text-white/70 transition-colors"
          >
            Notify me when KOSH launches
          </button>
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-[12px] font-medium text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100"
          >
            Sign-ups opening soon — stay tuned!
          </span>
        </div>

        <p className="text-center text-[12px] text-ink-muted">
          No credit card required · No setup fee · Free to start
        </p>
      </form>
    </div>
  );
}
