import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { siteMetadata } from '@/lib/metadata';
import './globals.css';

// DM Sans, as in both apps.
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
  // Headline + button weights are on the critical render path.
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#173A2B' },
    { media: '(prefers-color-scheme: dark)', color: '#10291E' },
  ],
  width: 'device-width',
  initialScale: 1,
  // Zoom is deliberately left enabled — never trap users at 1x.
  maximumScale: 5,
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={dmSans.variable}>
      <body className="font-poppins antialiased">
        {/* GTM bootstrap. Only injected when a container ID is configured. */}
        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}

        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}

        <a
          href="#main"
          className="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
