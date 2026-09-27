import Link from 'next/link';
import type { Metadata } from 'next';
import { KoshLogo } from '@/components/ui/KoshLogo';
import { KoshButtonLink } from '@/components/ui/KoshButton';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-hero-gradient px-6 text-center">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-50" />
        <div className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-orange/20 blur-[110px]" />
      </div>

      <div className="relative">
        <Link href="/" aria-label="KOSH home">
          <KoshLogo variant="white" size={26} />
        </Link>

        <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.14em] text-orange">
          404 — nothing here
        </p>
        <h1 className="mt-3 text-balance text-h1-sm text-white md:text-h1">
          This corner of the neighbourhood is empty.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-body-lg text-white/75">
          The page you were looking for has moved or never existed. Let&apos;s get you back to the
          local stuff.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <KoshButtonLink href="/" variant="white" size="lg">
            Back to home
          </KoshButtonLink>
          <KoshButtonLink href="/#vendor-signup" variant="orange" size="lg">
            Start selling
          </KoshButtonLink>
        </div>
      </div>
    </main>
  );
}
