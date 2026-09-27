import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { KoshLogo } from '@/components/ui/KoshLogo';

type LegalPageProps = {
  title: string;
  /** Human-readable "last updated" date shown under the title. */
  updated: string;
  children: React.ReactNode;
};

/**
 * Shared shell for /privacy and /terms: a plain white header, an 800px reading
 * column, and the site footer. Section markup inside uses <LegalSection>.
 */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-hairline bg-white">
        <div className="kosh-container flex h-16 items-center justify-between">
          <Link href="/" aria-label="KOSH home" className="flex items-center rounded-md">
            <KoshLogo variant="navy" size={22} />
          </Link>
          <Link
            href="/"
            className="text-nav text-ink-secondary transition-colors duration-200 hover:text-navy"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main id="main" className="bg-white px-5 py-16 sm:px-6 md:py-24">
        <article className="mx-auto max-w-[800px]">
          <h1 className="text-h1-sm text-navy md:text-h1">{title}</h1>
          <p className="mt-3 text-body-sm text-ink-secondary">Last updated: {updated}</p>
          <div className="mt-12 space-y-10">{children}</div>
        </article>
      </main>

      <Footer />
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-h3-sm text-navy md:text-h3">{title}</h2>
      <div className="mt-4 space-y-4 text-body text-ink-secondary [&_a]:font-medium [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
