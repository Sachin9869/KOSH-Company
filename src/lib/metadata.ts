import type { Metadata } from 'next';
import { SITE } from './constants';

const TITLE = 'KOSH — Find Local. Buy Local.';
const DESCRIPTION =
  'Discover local vendors, home bakeries, services, and stores near you in Ontario. Order in seconds. Support your neighbourhood.';
const OG_DESCRIPTION =
  'The local marketplace built for your neighbourhood. Discover vendors, order from local stores, and support small businesses near you.';

export const siteMetadata: Metadata = {
  title: {
    default: TITLE,
    template: '%s · KOSH',
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    'local marketplace',
    'Ontario',
    'local vendors',
    'home bakery',
    'local services',
    'buy local Ontario',
    'sell locally',
    'neighbourhood marketplace',
    'KOSH',
  ],
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: '/' },
  category: 'shopping',
  // Open Graph and Twitter images come from the file conventions in
  // src/app/opengraph-image.tsx and twitter-image.tsx — Next injects them here.
  openGraph: {
    title: TITLE,
    description: OG_DESCRIPTION,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Discover local vendors and home businesses near you in Ontario.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Favicon + apple-touch icon come from src/app/icon.svg and apple-icon.tsx.
  manifest: '/site.webmanifest',
  formatDetection: { telephone: false },
};

/** JSON-LD graph: the app itself, the organisation behind it, and the site. */
export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MobileApplication',
      '@id': `${SITE.url}/#app`,
      name: 'KOSH',
      description:
        'Local vendor discovery and instant ordering platform for Ontario, Canada.',
      applicationCategory: 'ShoppingApplication',
      operatingSystem: 'iOS, Android',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1200',
      },
      publisher: { '@id': `${SITE.url}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.legalName,
      alternateName: 'KOSH',
      url: SITE.url,
      logo: `${SITE.url}/og-image.png`,
      slogan: SITE.tagline,
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Ontario, Canada',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: SITE.supportEmail,
        contactType: 'customer support',
        areaServed: 'CA',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: DESCRIPTION,
      inLanguage: 'en-CA',
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ],
};

/** FAQ schema mirrors the pricing accordion so it can win rich results. */
export const faqJsonLd = (faq: ReadonlyArray<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
