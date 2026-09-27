'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Smartphone, Store, X } from 'lucide-react';
import { KoshLogo } from '@/components/ui/KoshLogo';
import { KoshButtonLink } from '@/components/ui/KoshButton';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * Sticky navbar.
 *
 * Over the navy hero it stays transparent so the gradient reads full-bleed;
 * past 80px it fades to a blurred white bar with a hairline and shadow.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200',
          scrolled
            ? 'border-b border-hairline bg-white/95 shadow-[0_1px_20px_rgba(15,23,42,0.06)] backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav
          className="kosh-container flex h-16 items-center justify-between gap-6"
          aria-label="Main"
        >
          <Link
            href="#top"
            className="flex items-center rounded-md"
            aria-label="KOSH — back to top"
          >
            <KoshLogo variant={scrolled ? 'navy' : 'white'} size={22} />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative text-nav transition-colors duration-200',
                    'after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-orange after:transition-[width] after:duration-200 hover:after:w-full',
                    scrolled ? 'text-ink-secondary hover:text-navy' : 'text-white/80 hover:text-white',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2.5 md:flex">
            <KoshButtonLink href="#vendor-signup" variant="orange" size="sm">
              Start selling
            </KoshButtonLink>
            <KoshButtonLink
              href="#download"
              variant={scrolled ? 'navy' : 'white'}
              size="sm"
            >
              Download app
            </KoshButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-lg transition-colors md:hidden',
              scrolled ? 'text-navy hover:bg-navy/5' : 'text-white hover:bg-white/10',
            )}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[84%] max-w-sm flex-col bg-white shadow-elevated md:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-hairline px-5">
                <KoshLogo variant="navy" size={22} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-secondary hover:bg-slate-100"
                  aria-label="Close menu"
                  autoFocus
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col px-3 py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3.5 text-base font-medium text-ink transition-colors hover:bg-slate-50 hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 border-t border-hairline p-5">
                <KoshButtonLink
                  href="#vendor-signup"
                  variant="orange"
                  size="lg"
                  fullWidth
                  onClick={() => setOpen(false)}
                  icon={<Store className="h-5 w-5" />}
                >
                  Start selling free
                </KoshButtonLink>
                <KoshButtonLink
                  href="#download"
                  variant="navy"
                  size="lg"
                  fullWidth
                  onClick={() => setOpen(false)}
                  icon={<Smartphone className="h-5 w-5" />}
                >
                  Download app
                </KoshButtonLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
