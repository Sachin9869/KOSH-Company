/**
 * Single source of truth for every piece of copy, link, and data point on the
 * KOSH landing page. Sections import from here so content edits never require
 * touching component markup.
 */

export const SITE = {
  name: 'KOSH',
  legalName: 'KOSH Technologies Inc.',
  tagline: 'Find Local. Buy Local.',
  subTagline: 'The local marketplace built for your neighbourhood.',
  url: 'https://kosh.ca',
  supportEmail: 'hello@kosh.ca',
} as const;

/** Placeholder store links — swap once the apps are published. */
export const APP_LINKS = {
  ios: 'https://apps.apple.com/ca/app/kosh',
  android: 'https://play.google.com/store/apps/details?id=ca.kosh.app',
} as const;

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/kosh.ca' },
  { label: 'Facebook', href: 'https://facebook.com/kosh.ca' },
  { label: 'TikTok', href: 'https://tiktok.com/@kosh.ca' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/kosh-ca' },
] as const;

export const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For vendors', href: '#for-vendors' },
  { label: 'Download', href: '#download' },
] as const;

/* ─── Section 3 — the problem ─────────────────────────────────────────────── */

export const PROBLEMS = [
  {
    icon: 'Search',
    title: 'Hard to discover',
    body: "Customers can't find you through search. Instagram only works if they already follow you.",
  },
  {
    icon: 'ShoppingBag',
    title: 'No real ordering system',
    body: 'DMs and phone calls are slow, error-prone, and unprofessional. You lose sales to the friction.',
  },
  {
    icon: 'TrendingDown',
    title: 'Big marketplaces ignore you',
    body: "Amazon, Uber Eats, and Facebook Marketplace aren't built for home bakeries, convenience stores, or solo tradespeople. KOSH is.",
  },
] as const;

/* ─── Section 4 — how it works ────────────────────────────────────────────── */

export const BUYER_STEPS = [
  {
    icon: 'Search',
    title: 'Search nearby',
    body: 'Type what you need — tiramisu cake, lawn mowing, a plumber — and see every nearby option instantly.',
  },
  {
    icon: 'Store',
    title: 'Browse and compare',
    body: 'See ratings, distance, prices, and availability. From home bakeries to full digital stores.',
  },
  {
    icon: 'CheckCircle',
    title: 'Buy, book, or request',
    body: 'Pay securely, track your order, and leave a review. No phone calls. No DMs. Just tap.',
  },
] as const;

export const VENDOR_STEPS = [
  {
    icon: 'Camera',
    title: 'Snap your product or service',
    body: 'Take 1–5 photos. That\'s all you need to get started.',
  },
  {
    icon: 'Sparkles',
    title: 'AI writes everything',
    body: 'KOSH AI generates your title, description, price suggestion, and tags. Ready in 60 seconds.',
  },
  {
    icon: 'TrendingUp',
    title: 'Go live. Get discovered.',
    body: 'Your listing appears in local search immediately. Accept orders right from the app.',
  },
] as const;

/* ─── Section 5 — features ─────────────────────────────────────────────────── */

export type Feature = {
  icon: 'Sparkles' | 'MapPin' | 'Store' | 'CreditCard' | 'LayoutGrid' | 'Heart';
  tone: 'navy' | 'blue' | 'orange';
  title: string;
  body: string;
  badge?: string;
  badgeTone?: 'orange' | 'green';
};

export const FEATURES: readonly Feature[] = [
  {
    icon: 'Sparkles',
    tone: 'blue',
    title: 'AI writes your listing',
    body: 'Snap a photo and let KOSH AI generate your title, description, and price suggestion. Live in 60 seconds.',
    badge: 'Vendor feature',
    badgeTone: 'orange',
  },
  {
    icon: 'MapPin',
    tone: 'navy',
    title: 'Discover by distance',
    body: "Every listing shows distance from your location. Search by category, rating, or what's available right now.",
  },
  {
    icon: 'Store',
    tone: 'navy',
    title: 'Your centralized digital store',
    body: 'One place for your products, services, and orders. Open a branded storefront at kosh.ca/store/your-name — no website, no developer, no monthly fees.',
    badge: 'No setup fee',
    badgeTone: 'green',
  },
  {
    icon: 'CreditCard',
    tone: 'navy',
    title: 'Secure CAD payments',
    body: 'Pay and receive payments in CAD via Stripe. Vendors get paid directly — no waiting.',
  },
  {
    icon: 'LayoutGrid',
    tone: 'orange',
    title: 'Single ad, service, or full store',
    body: 'Post a yard sale item, offer your services with a booking calendar, or open a complete digital store — all in one app.',
    badge: 'Vendor feature',
    badgeTone: 'orange',
  },
  {
    icon: 'Heart',
    tone: 'navy',
    title: 'Built for your community',
    body: 'Filter by Halal, Women-owned, South Asian-owned, and more. KOSH celebrates local identity.',
  },
];

/* ─── Section 6 — app screens ──────────────────────────────────────────────── */

export const APP_SCREENS = [
  { id: 'home', label: 'Discover' },
  { id: 'search', label: 'Search results' },
  { id: 'store', label: 'Vendor store' },
  { id: 'product', label: 'Product + AI summary' },
  { id: 'order', label: 'Order tracking' },
] as const;

/* ─── Section 7 — vendor benefits ──────────────────────────────────────────── */

export const VENDOR_BENEFITS: ReadonlyArray<{
  icon: 'Zap' | 'Sparkles' | 'TrendingUp';
  title: string;
  body: string;
  badge?: string;
}> = [
  {
    icon: 'Zap',
    title: 'Start instantly, no cost',
    body: 'No setup fees. No monthly costs to start. Your digital store is live in under 60 seconds.',
    badge: 'No setup fee',
  },
  {
    icon: 'Sparkles',
    title: 'AI builds your store',
    body: 'Upload photos. KOSH AI writes everything — titles, descriptions, pricing, and your storefront copy. No technical skills needed.',
  },
  {
    icon: 'TrendingUp',
    title: 'One place for everything',
    body: 'Stop juggling Instagram, WhatsApp, and cash. KOSH centralizes your store, orders, and payments so you can focus on your business.',
  },
];

/* ─── Section 8 — testimonials ─────────────────────────────────────────────── */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  city: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I ordered a tiramisu from a home baker two streets over. It was ready and better than anything in a shop.',
    name: 'Priya M.',
    role: 'Buyer',
    city: 'Scarborough',
  },
  {
    quote:
      'Our kitchen sink backed up on a Sunday. Found a licensed plumber on KOSH, booked in the app, sorted by 3pm.',
    name: 'Daniel O.',
    role: 'Buyer',
    city: 'Mississauga',
  },
  {
    quote:
      "I photographed my daughter's old bike, the AI wrote the whole listing, and it sold the same evening. Under two minutes of work.",
    name: 'Fatima A.',
    role: 'Simple ad seller',
    city: 'Brampton',
  },
  {
    quote:
      'Listed a barely-used stroller at 9pm. Three messages by morning, picked up at lunch. No Facebook Marketplace nonsense.',
    name: 'Marc T.',
    role: 'Simple ad seller',
    city: 'Hamilton',
  },
  {
    quote:
      'I clear out furniture between tenants. KOSH is now where all of it goes — local buyers, real names, no time-wasters.',
    name: 'Simran K.',
    role: 'Simple ad seller',
    city: 'Ajax',
  },
  {
    quote:
      'My lawn care route grew from 6 to 23 homes in one season. Every single new client came through local search on KOSH.',
    name: 'Raj K.',
    role: 'Lawn Care',
    city: 'Ajax',
  },
  {
    quote:
      'The booking calendar replaced my whole WhatsApp mess. Clients pick a slot, pay a deposit, and I just show up.',
    name: 'Elena V.',
    role: 'Home Cleaning',
    city: 'Pickering',
  },
  {
    quote:
      'I run a South Asian grocery out of my garage. KOSH gave me a proper storefront in an afternoon — no website, no developer.',
    name: 'Maria S.',
    role: 'Home Bakery & Grocery',
    city: 'Pickering',
  },
  {
    quote:
      'Halal filter means customers who need it find me first. My weekend orders have more than doubled since January.',
    name: 'Yusuf H.',
    role: 'Digital store',
    city: 'Whitby',
  },
];

/* ─── Section 9 — community tags ───────────────────────────────────────────── */

export const COMMUNITY_TAGS = [
  { emoji: '🥘', label: 'South Asian Owned', tone: 'navy' },
  { emoji: '🌿', label: 'Halal Certified', tone: 'orange' },
  { emoji: '👩', label: 'Women-Owned', tone: 'orange' },
  { emoji: '🌱', label: 'Vegan-Friendly', tone: 'navy' },
  { emoji: '🏳️‍🌈', label: 'LGBTQ+ Friendly', tone: 'navy' },
  { emoji: '♿', label: 'Accessibility-Friendly', tone: 'orange' },
  { emoji: '🍞', label: 'Home Kitchen', tone: 'orange' },
  { emoji: '🌍', label: 'Caribbean Owned', tone: 'navy' },
  { emoji: '🌸', label: 'Filipino Owned', tone: 'navy' },
  { emoji: '🧿', label: 'Middle Eastern Owned', tone: 'orange' },
  { emoji: '🥬', label: 'Farm Fresh', tone: 'orange' },
  { emoji: '🤲', label: 'Community-Supported', tone: 'navy' },
] as const;

/* ─── FAQ ───────────────────────────────────────────────────────────────────── */

export const PRICING_FAQ = [
  {
    q: 'Who is KOSH for?',
    a: 'KOSH is for anyone who wants to buy or sell locally — home bakeries, convenience stores, lawn care, tradespeople, yard sale sellers, ethnic grocery stores, and home-based businesses of every kind.',
  },
  {
    q: 'Do I need a website or technical skills to sell on KOSH?',
    a: 'No. KOSH gives you a complete digital storefront out of the box. Take a photo, let AI write your listing, and you\'re live — no website, no developer, no setup required.',
  },
  {
    q: 'Can I sell just one item, or do I need a full store?',
    a: 'Both work. Post a single yard sale item or a one-off service, or open a full digital store with multiple products. You choose what fits your business.',
  },
  {
    q: 'Is it really free to start?',
    a: 'Yes — there are no setup fees and no monthly charges to get started. You only pay when you make a sale.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely — no contracts, no lock-in. Your listings stay live and you can manage everything from the app.',
  },
] as const;

/* ─── Section 12 — vendor sign-up ──────────────────────────────────────────── */

export const VENDOR_BENEFIT_LIST = [
  'No setup fees — start today at no cost',
  'AI builds your listing from a photo',
  'Appear in local search immediately',
  'Secure CAD payments via Stripe',
  'Your own store page at kosh.ca/store/you',
  'iOS and Android vendor app',
] as const;

export const BUSINESS_TYPES = [
  'Home bakery',
  'Convenience store',
  'Grocery',
  'Yard sale / secondhand',
  'Cleaning service',
  'Lawn care',
  'Plumbing & trades',
  'Tutoring',
  'Photography',
  'Other',
] as const;

/* ─── Footer ────────────────────────────────────────────────────────────────── */

export const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About KOSH', href: '#' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Contact us', href: '#' },
    ],
  },
  {
    title: 'For vendors',
    links: [
      { label: 'Start selling', href: '/#vendor-signup' },
      { label: 'Vendor app', href: '/#download' },
      { label: 'Success stories', href: '/#testimonials' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'CASL Compliance', href: '#' },
    ],
  },
] as const;
