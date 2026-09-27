'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, Check, Loader2 } from 'lucide-react';
import { StoreBadgeRow } from '@/components/ui/StoreBadges';
import { BUSINESS_TYPES } from '@/lib/constants';
import { vendorSignupSchema, type VendorSignupInput } from '@/lib/vendor-signup-schema';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FIELD_BASE =
  'h-[52px] w-full rounded-[10px] border bg-white px-4 text-body-sm text-ink transition-colors duration-150 placeholder:text-ink-muted focus:outline-none focus-visible:outline-none';

export function VendorSignupForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VendorSignupInput>({
    resolver: zodResolver(vendorSignupSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (values: VendorSignupInput) => {
    setStatus('submitting');
    setServerError(null);

    try {
      const res = await fetch('/api/vendor-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { message?: string } | null;
        throw new Error(data?.message ?? 'Something went wrong. Please try again.');
      }

      setSubmittedEmail(values.email);
      setStatus('success');
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      );
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <SuccessState email={submittedEmail} />;
  }

  const submitting = status === 'submitting';

  return (
    <div className="rounded-panel border border-hairline bg-white p-6 shadow-elevated sm:p-8">
      <h3 className="text-h3 text-ink">Get early access</h3>
      <p className="mt-1.5 text-body-sm text-ink-secondary">
        We&apos;ll reach out within 24 hours.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
        <Field label="Full name" htmlFor="fullName" error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Maria Santos"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={cn(FIELD_BASE, borderFor(Boolean(errors.fullName)))}
            {...register('fullName')}
          />
        </Field>

        <Field label="Business name" htmlFor="businessName" error={errors.businessName?.message}>
          <input
            id="businessName"
            type="text"
            autoComplete="organization"
            placeholder="Maria's Home Bakery"
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby={errors.businessName ? 'businessName-error' : undefined}
            className={cn(FIELD_BASE, borderFor(Boolean(errors.businessName)))}
            {...register('businessName')}
          />
        </Field>

        <Field label="Business type" htmlFor="businessType" error={errors.businessType?.message}>
          <select
            id="businessType"
            defaultValue=""
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby={errors.businessType ? 'businessType-error' : undefined}
            className={cn(
              FIELD_BASE,
              borderFor(Boolean(errors.businessType)),
              'appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2364748B\' stroke-width=\'2\' stroke-linecap=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11',
            )}
            {...register('businessType')}
          >
            <option value="" disabled>
              Choose your business type
            </option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="City" htmlFor="city" error={errors.city?.message}>
            <input
              id="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Pickering, ON"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? 'city-error' : undefined}
              className={cn(FIELD_BASE, borderFor(Boolean(errors.city)))}
              {...register('city')}
            />
          </Field>

          <Field label="Phone number" htmlFor="phone" error={errors.phone?.message}>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+1 (647) 555-0100"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={cn(FIELD_BASE, borderFor(Boolean(errors.phone)))}
              {...register('phone')}
            />
          </Field>
        </div>

        <Field label="Email address" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="maria@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(FIELD_BASE, borderFor(Boolean(errors.email)))}
            {...register('email')}
          />
        </Field>

        {/* Honeypot — hidden from users and assistive tech, catches naive bots. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
        </div>

        {serverError && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-[10px] bg-red-50 px-4 py-3 text-body-sm text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            'flex h-[52px] w-full items-center justify-center gap-2 rounded-[10px] bg-orange',
            'text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(249,115,22,0.35)]',
            'transition-[transform,background-color,box-shadow] duration-200 ease-out-expo',
            'hover:-translate-y-0.5 hover:bg-orange-dark hover:shadow-cta-orange-lg',
            'active:translate-y-0 disabled:pointer-events-none disabled:opacity-70',
          )}
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            <>
              Start selling on KOSH
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="text-center text-[11px] leading-relaxed text-ink-muted">
          By submitting you agree to our Terms of Service and Privacy Policy. No spam, ever.
        </p>
      </form>
    </div>
  );
}

function borderFor(hasError: boolean) {
  return hasError
    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
    : 'border-hairline focus:border-navy focus:ring-2 focus:ring-navy/10';
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-medium text-ink">
        {label} <span className="text-orange-ink">*</span>
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessState({ email }: { email: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-panel border border-hairline bg-white p-8 text-center shadow-elevated"
      role="status"
      aria-live="polite"
    >
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 340, damping: 16, delay: 0.28 }}
        >
          <Check className="h-8 w-8 text-emerald-600" strokeWidth={3} aria-hidden="true" />
        </motion.span>
      </motion.span>

      <h3 className="mt-6 text-h3 text-ink">You&apos;re on the list! 🎉</h3>
      <p className="mt-2 text-body text-ink-secondary">
        We&apos;ll reach out to <span className="font-semibold text-ink">{email}</span> within 24
        hours.
      </p>
      <p className="mt-4 text-body-sm text-ink-secondary">
        In the meantime, download the app and explore KOSH.
      </p>

      <StoreBadgeRow className="mt-6 justify-center" />
    </motion.div>
  );
}
