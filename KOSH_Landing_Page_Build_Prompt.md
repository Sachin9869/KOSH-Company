# ============================================================
#  KOSH — COMPANY LANDING PAGE BUILD PROMPT
#  Next.js 14 · App Router · Tailwind CSS · Framer Motion
#  Two conversion goals: App download + Vendor sign-up
#  URL: kosh.ca
# ============================================================
#
#  HOW TO USE:
#  1. mkdir kosh-web && cd kosh-web
#  2. npx create-next-app@latest . --typescript --tailwind
#     --eslint --app --src-dir --import-alias "@/*"
#  3. cp this_file.md CLAUDE.md
#  4. claude
#  5. Type: "Start Task W1 — project scaffold"
# ============================================================

You are a Senior Next.js Engineer building the KOSH public
marketing and landing page. This is the public face of the
KOSH brand — the first thing a potential user or vendor sees
before downloading the app or signing up to sell.

Two conversion goals, equal weight:
  1. Users   → "Download the KOSH app" (iOS + Android)
  2. Vendors → "Start selling on KOSH" (sign-up / waitlist)

Everything on this page serves one of these two goals.
Nothing else matters. If a section doesn't move someone
toward one of these two actions, it doesn't belong on the page.

Generate production-ready, fully typed TypeScript + TSX.
Every component must be responsive (mobile-first).
Every section must be SEO-optimised (semantic HTML, meta tags).

---

## ═══ BRAND — KOSH ═══

```
App name:    KOSH
Tagline:     Find Local. Buy Local.
Sub-tagline: The local marketplace built for your neighbourhood.
Domain:      kosh.ca
Platform:    Ontario, Canada — local vendor discovery

The "O" in KOSH is a map pin (location teardrop shape).
This must appear in the hero logo and favicon.

Voice:       Warm, community-focused, modern, trustworthy.
             NOT corporate. NOT cold. NOT generic marketplace.
             Feels like: "built by someone who loves local."
```

---

## ═══ COLOUR SYSTEM ═══

```css
/* Use KOSH User App colours — this page recruits users first */

--navy:          #1E3A8A;  /* primary brand — headers, nav, CTAs */
--navy-dark:     #162D6E;  /* hover states */
--blue:          #3B82F6;  /* secondary — links, highlights */
--orange:        #F97316;  /* accent — vendor CTA, highlights */
--orange-dark:   #EA6C0A;  /* vendor CTA hover */
--bg:            #F8FAFC;  /* page background */
--surface:       #FFFFFF;  /* cards */
--text-primary:  #0F172A;  /* headings */
--text-secondary:#64748B;  /* body, descriptions */
--text-muted:    #94A3B8;  /* captions */
--border:        #E2E8F0;  /* card borders, dividers */

/* Gradients */
--hero-gradient: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1D4ED8 100%);
--section-gradient: linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%);
--vendor-gradient: linear-gradient(135deg, #F97316 0%, #FB923C 100%);
```

### Colour usage rules
```
Navy  → nav background, hero background, primary CTA buttons ("Download app")
Orange → vendor-focused CTA ("Start selling"), vendor section accents
         used sparingly — only for vendor conversion, not general decoration
Blue  → secondary links, feature highlights, map pin accent
White → cards on light background sections
The KOSH logo O pin = orange (#F97316) always
```

---

## ═══ TYPOGRAPHY ═══

```
Font: Poppins (Google Fonts — matches mobile apps)
Load weights: 300, 400, 500, 600, 700, 800

Tailwind config additions:
  fontFamily: { poppins: ['Poppins', 'sans-serif'] }

Scale:
  Display:  56px / 800 / -1.5px tracking  (hero headline)
  H1:       48px / 700 / -1px             (section headlines)
  H2:       36px / 700 / -0.5px           (sub-section)
  H3:       24px / 600                    (card titles, features)
  H4:       20px / 600                    (sub-feature titles)
  Body LG:  18px / 400 / 1.7 leading      (hero description)
  Body:     16px / 400 / 1.6              (general body)
  Body SM:  14px / 400 / 1.5             (captions, footnotes)
  Button:   16px / 600 / 0.3px tracking   (CTA labels)
  Nav:      14px / 500                    (nav links)

Mobile scale (below 768px):
  Display → 36px
  H1      → 32px
  H2      → 28px
  H3      → 22px
```

---

## ═══ TECH STACK ═══

```
Framework:    Next.js 14 (App Router)
Language:     TypeScript
Styling:      Tailwind CSS v3
Animation:    Framer Motion (scroll-triggered reveals)
Icons:        Lucide React
Fonts:        next/font/google (Poppins)
Images:       next/image (optimised)
Forms:        React Hook Form + Zod validation
Email:        Resend (vendor sign-up form submission)
Analytics:    Vercel Analytics + Google Tag Manager
SEO:          Next.js metadata API (full Open Graph + JSON-LD)
Deployment:   Vercel (or Azure Static Web Apps)
```

```bash
# Additional packages to install after create-next-app
npm install framer-motion lucide-react react-hook-form zod
npm install @hookform/resolvers resend
npm install @vercel/analytics
```

---

## ═══ PROJECT STRUCTURE ═══

```
src/
├── app/
│   ├── layout.tsx              # root layout, fonts, analytics
│   ├── page.tsx                # landing page (all sections)
│   ├── globals.css
│   └── api/
│       └── vendor-signup/
│           └── route.ts        # handles vendor sign-up form POST
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/               # one file per landing page section
│   │   ├── HeroSection.tsx
│   │   ├── TrustBarSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── AppScreensSection.tsx
│   │   ├── VendorSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── DownloadSection.tsx
│   │   └── VendorSignupSection.tsx
│   │
│   ├── ui/                     # reusable UI primitives
│   │   ├── KoshButton.tsx
│   │   ├── KoshLogo.tsx        # the O-as-map-pin logo
│   │   ├── PhoneMockup.tsx     # app screenshot in phone frame
│   │   ├── FeatureCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── StepCard.tsx
│   │   └── SectionWrapper.tsx  # padding + max-width container
│   │
│   └── forms/
│       └── VendorSignupForm.tsx
│
├── lib/
│   ├── constants.ts            # app store links, social links
│   └── metadata.ts             # shared SEO metadata
│
└── public/
    ├── images/
    │   ├── app-screenshots/    # real or mockup app screenshots
    │   ├── vendor-photos/      # local vendor lifestyle photos
    │   └── icons/
    ├── favicon.ico
    └── og-image.png            # 1200×630 Open Graph image
```

---

## ═══ SEO + METADATA ═══

```typescript
// app/layout.tsx — root metadata
export const metadata: Metadata = {
  title: 'KOSH — Find Local. Buy Local.',
  description: 'Discover local vendors, home bakeries, services, and stores near you in Ontario. Order in seconds. Support your neighbourhood.',
  keywords: ['local marketplace', 'Ontario', 'local vendors', 'home bakery', 'local services', 'KOSH'],
  metadataBase: new URL('https://kosh.ca'),
  openGraph: {
    title: 'KOSH — Find Local. Buy Local.',
    description: 'The local marketplace built for your neighbourhood. Discover vendors, order from local stores, and support small businesses near you.',
    url: 'https://kosh.ca',
    siteName: 'KOSH',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOSH — Find Local. Buy Local.',
    description: 'Discover local vendors and home businesses near you in Ontario.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// JSON-LD structured data (add to page.tsx)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'KOSH',
  description: 'Local vendor discovery and instant ordering platform for Ontario, Canada.',
  applicationCategory: 'ShoppingApplication',
  operatingSystem: 'iOS, Android',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '1200' },
};
```

---

## ═══ NAVBAR ═══

**File:** `src/components/layout/Navbar.tsx`

```
Desktop (sticky, full-width):
  Background: rgba(255,255,255,0.95) + backdrop-blur-md
  Border-bottom: 1px solid #E2E8F0
  Height: 64px
  Max-width: 1280px centred

  LEFT:  KoshLogo component (navy letters, orange O-pin)
         "KOSH" in Poppins Bold 22px

  CENTRE: Nav links (hidden below 768px)
    "How it works"  → scrolls to #how-it-works
    "For vendors"   → scrolls to #for-vendors
    "Download"      → scrolls to #download

  RIGHT:
    "Start selling" button → scrolls to #vendor-signup
      bg: #F97316 (orange), text: white, radius: 8px
      height: 40px, padding: 0 20px, Poppins 14px/600
    "Download app" button  → scrolls to #download
      bg: #1E3A8A (navy), text: white, radius: 8px

Mobile (hamburger):
  Logo left
  Hamburger icon right (ti-menu-2 or Lucide Menu)
  Drawer from right: full links + both CTAs stacked
  Drawer bg: white, full height

SCROLL BEHAVIOUR:
  At top of page: transparent bg (over hero)
  After 80px scroll: white bg + shadow appears
  Smooth transition: 200ms ease
```

---

## ═══ SECTION 1 — HERO ═══

**File:** `src/components/sections/HeroSection.tsx`

```
Full-width, min-height: 100vh
Background: hero-gradient (navy #1E3A8A → #1D4ED8)
Overflow hidden (for background elements)

BACKGROUND ELEMENTS (decorative, non-interactive):
  Large circle: top-right, navy-lighter, 600px, opacity 0.15
  Small circle: bottom-left, 200px, opacity 0.1
  Subtle grid pattern: navy-lighter lines, opacity 0.05

LAYOUT (centred column, max-width 800px, padding 80px 20px):

  BADGE CHIP (above headline):
    "🇨🇦 Built for Ontario, Canada"
    bg: rgba(255,255,255,0.15), text: white, radius: full
    border: 1px solid rgba(255,255,255,0.3)
    font: 13px / 500, padding: 6px 16px

  HEADLINE (animate in: fade up, 0.6s delay 0.1s):
    "Find Local."  — white, Display size (56px / 800)
    "Buy Local."   — orange #F97316, same size
    Two lines, centred

  SUB-HEADLINE (animate in: fade up, delay 0.3s):
    "Discover home bakeries, local services, and neighbourhood
     stores near you — and order in seconds."
    White at 85% opacity, Body LG (18px), max-width 560px, centred

  CTA BUTTONS (animate in: fade up, delay 0.5s):
    Row, centred, gap 12px, wrap on mobile

    "Download App" primary:
      bg: white, text: #1E3A8A (navy), radius: 12px
      height: 56px, padding: 0 28px, Poppins 16px/600
      shadow: 0 4px 20px rgba(0,0,0,0.15)
      Left icon: Lucide Smartphone
      Hover: scale(1.02) + shadow increase

    "Start Selling Free" secondary:
      bg: #F97316 (orange), text: white, radius: 12px
      height: 56px, padding: 0 28px, Poppins 16px/600
      shadow: 0 4px 20px rgba(249,115,22,0.4)
      Left icon: Lucide Store
      Hover: bg #EA6C0A

  SOCIAL PROOF ROW (animate in: fade up, delay 0.7s):
    Below buttons, 16px gap
    ⭐ "4.8 rating" · 👤 "2,400+ local vendors" · 📍 "Ontario, Canada"
    White at 70% opacity, 13px, centred
    Dividers between items: white 30% opacity

  PHONE MOCKUP (animate in: fade up + float, delay 0.4s):
    Below social proof on mobile, right-side on desktop
    Two overlapping phone frames (slight rotation):
      Front: Home screen screenshot
      Behind: Search results screenshot (rotated 8deg)
    Phones: white frame, 280px wide (desktop), 220px (mobile)
    Continuous floating animation: translateY(-8px → 0 → -8px), 3s ease infinite

DESKTOP LAYOUT SPLIT:
  Above 1024px: flex row
    Left 55%: all text content + CTAs (left-aligned on desktop)
    Right 45%: phone mockup (centred)
  Below 1024px: stacked, centred
```

---

## ═══ SECTION 2 — TRUST BAR ═══

**File:** `src/components/sections/TrustBarSection.tsx`

```
bg: white · border-top + border-bottom: 1px solid #E2E8F0
padding: 24px 0

Horizontal row of 4 stats (centred, max-width 900px):
  Dividers between items on desktop

  "2,400+" · "Local vendors"
  "47,000+" · "Items listed"
  "12,000+" · "Orders placed"
  "4.8 ★"  · "Average rating"

Each stat:
  Number: 28px / 700 / #1E3A8A (navy)
  Label: 13px / 400 / #64748B

On mobile: 2×2 grid
Animate: count-up animation on scroll into view (use IntersectionObserver)
```

---

## ═══ SECTION 3 — THE PROBLEM ═══

**File:** `src/components/sections/ProblemSection.tsx`

```
bg: #F8FAFC (page bg)
padding: 96px 0

HEADLINE (centred, max-width 700px):
  "Great local businesses are invisible online."
  H1, #0F172A

SUBTEXT:
  "Home bakeries, ethnic grocery stores, lawn care services,
   and tradespeople rely on Instagram DMs and Facebook posts to
   reach customers. They're losing business to big platforms
   that don't serve their community."
  Body LG, #64748B, centred, max-width 580px

3-COLUMN PAIN POINT CARDS (max-width 960px, gap 24px):
  Each card: white, radius 16px, border #E2E8F0, padding 28px
  shadow: 0 1px 4px rgba(15,23,42,0.06)

  Card 1 — "Hard to discover"
    Icon: Lucide Search (24px, #94A3B8)
    Title: H4, #0F172A
    Body: "Customers can't find you through search. Instagram
           only works if they already follow you."
    Body, #64748B

  Card 2 — "No ordering system"
    Icon: Lucide ShoppingBag (24px, #94A3B8)
    Title: "No real ordering system"
    Body: "DMs and phone calls are slow, error-prone, and
           unprofessional. You lose sales to the friction."

  Card 3 — "Losing to big platforms"
    Icon: Lucide TrendingDown (24px, #94A3B8)
    Title: "Big marketplaces ignore you"
    Body: "Amazon, Uber Eats, and Instacart aren't built for
           home bakeries or solo tradespeople. KOSH is."

TRANSITION LINE (below cards, centred):
  "KOSH fixes all of this." — H3, #1E3A8A, bold
  Underline decoration in orange

Animate: cards fade up on scroll, staggered 100ms apart
```

---

## ═══ SECTION 4 — HOW IT WORKS ═══

**File:** `src/components/sections/HowItWorksSection.tsx`
`id="how-it-works"`

```
bg: white · padding: 96px 0

SECTION LABEL (above headline):
  "How KOSH works" — 12px / 600 / uppercase / #3B82F6

HEADLINE: "From search to delivered — in minutes."
  H1, centred, #0F172A

DUAL TABS — toggle between user journey and vendor journey:
  Tab 1: "I'm a Buyer"   — navy active state
  Tab 2: "I'm a Vendor"  — orange active state
  Pill toggle, centred, 40px height

USER JOURNEY STEPS (3 steps, horizontal on desktop, vertical on mobile):
  Connecting lines between steps (dashed navy line)

  Step 1 — "Search nearby"
    Icon circle: navy bg, white icon (Lucide Search), 56px
    Number badge: "01" top-right of circle, small
    Title: H4, #0F172A
    Body: "Type what you need — tiramisu cake, lawn mowing,
           a plumber — and see every nearby option instantly."

  Step 2 — "Choose your vendor"
    Icon: Lucide Store (navy circle)
    Title: "Browse and compare"
    Body: "See ratings, distance, prices, and availability.
           From home bakeries to full digital stores."

  Step 3 — "Order in seconds"
    Icon: Lucide CheckCircle (navy circle)
    Title: "Buy, book, or request"
    Body: "Pay securely, track your order, and leave a review.
           No phone calls. No DMs. Just tap."

VENDOR JOURNEY STEPS (shown when "I'm a Vendor" tab active):

  Step 1 — "Take a photo"
    Icon: Lucide Camera (orange circle)
    Title: "Snap your product or service"
    Body: "Take 1–5 photos. That's all you need to get started."

  Step 2 — "AI builds your listing"
    Icon: Lucide Sparkles (orange circle)
    Title: "AI writes everything"
    Body: "KOSH AI generates your title, description, price
           suggestion, and tags. Ready in 60 seconds."

  Step 3 — "Start getting orders"
    Icon: Lucide TrendingUp (orange circle)
    Title: "Go live. Get discovered."
    Body: "Your listing appears in local search immediately.
           Accept orders right from the app."

Animate: steps fade in left-to-right on scroll
```

---

## ═══ SECTION 5 — FEATURES ═══

**File:** `src/components/sections/FeaturesSection.tsx`

```
bg: section-gradient (#F8FAFC → #EFF6FF) · padding: 96px 0

SECTION LABEL: "Everything you need"
HEADLINE: "Built different. Built local."
  Centred, H1, max-width 600px

2-COLUMN FEATURE GRID (desktop), 1-column (mobile), gap 20px:
  6 feature cards, white, radius 16px, border, padding 28px

  Feature 1 — AI-powered listings
    Icon: Sparkles (blue, 28px)
    Title: "AI writes your listing"
    Body: "Snap a photo and let KOSH AI generate your title,
           description, and price suggestion. Live in 60 seconds."
    Badge: "Vendor feature" (orange pill)

  Feature 2 — Local discovery
    Icon: MapPin (navy)
    Title: "Discover by distance"
    Body: "Every listing shows distance from your location.
           Search by category, rating, or what's available right now."

  Feature 3 — Digital store
    Icon: Store (navy)
    Title: "Your full online store"
    Body: "Open a branded storefront at kosh.ca/store/your-name.
           No website needed. No monthly fees."
    Badge: "Free to start"

  Feature 4 — Secure payments
    Icon: CreditCard (navy)
    Title: "Secure CAD payments"
    Body: "Pay and receive payments in CAD via Stripe.
           Vendors get paid directly — no waiting."

  Feature 5 — Three ways to sell
    Icon: LayoutGrid (orange)
    Title: "Single ad, service, or store"
    Body: "Post a single item, offer your services with a
           booking calendar, or open a full digital store."
    Badge: "Vendor feature" (orange pill)

  Feature 6 — Community first
    Icon: Heart (navy)
    Title: "Built for your community"
    Body: "Filter by Halal, Women-owned, South Asian-owned,
           and more. KOSH celebrates local identity."

Animate: grid cards fade up staggered on scroll
```

---

## ═══ SECTION 6 — APP SCREENSHOTS ═══

**File:** `src/components/sections/AppScreensSection.tsx`

```
bg: white · padding: 96px 0 · overflow hidden

HEADLINE: "See KOSH in action"
  Centred, H2, #0F172A

HORIZONTAL SCROLLING PHONE MOCKUP STRIP:
  5 phones in a row, slightly overlapping, slight Y offsets
  for depth (each phone offset by alternating +/- 16px Y)
  Auto-scrolling: translateX animation, 30s linear infinite
  Pause on hover

  Phone screens (use app screenshots or illustrated mockups):
    1. Home/Discovery screen
    2. Search results (showing 3 listing types)
    3. Vendor store page
    4. Product detail + AI summary card
    5. Order tracking screen

  Each phone: white frame, 220px wide, shadow-lg, radius 24px

Below strip — TWO CTA CHIPS:
  "User App" → download links row
  "Vendor App" → vendor sign-up scroll

DOWNLOAD LINKS ROW (centred, gap 12px):
  App Store badge (official Apple SVG badge, links to App Store)
  Google Play badge (official Google SVG badge)
  Both: height 48px, radius 10px
  Note: use placeholder links until app is published
```

---

## ═══ SECTION 7 — FOR VENDORS ═══

**File:** `src/components/sections/VendorSection.tsx`
`id="for-vendors"`

```
bg: #0F172A (near black — maximum contrast, makes this section
    visually stand out as a distinct "call to vendors" moment)
padding: 96px 0

ORANGE ACCENT LABEL: "For local businesses"
  13px / 600 / uppercase / #F97316 / centred

HEADLINE (white, centred, H1):
  "Turn your passion into"
  "a local business." (orange word: "local")

SUBTEXT (white 70%, Body LG, centred, max-width 560px):
  "Whether you're a home baker, a plumber, or running a grocery
   from your garage — KOSH gives you a storefront, an ordering
   system, and local customers. For free."

3-COLUMN VENDOR BENEFIT CARDS (dark surface #1E293B, gap 20px):
  Each: bg #1E293B, radius 16px, padding 28px
  Border: 1px solid #334155

  Card 1 — Start free
    Icon: Zap (orange, 28px)
    Title: "Start for free" (white)
    Body: "No setup fees. No monthly costs to start.
           List your first product in under 60 seconds." (grey text #94A3B8)
    Badge: "Free forever" (green pill)

  Card 2 — AI does the work
    Icon: Sparkles (orange)
    Title: "AI builds your store"
    Body: "Upload photos. KOSH AI writes everything — titles,
           descriptions, pricing, and your storefront copy."

  Card 3 — Grow locally
    Icon: TrendingUp (orange)
    Title: "Reach your neighbourhood"
    Body: "Appear in local search the moment you go live.
           Boost your listing to reach further."

VENDOR CTA (centred, 40px top margin):
  "Start selling on KOSH — it's free"
  bg: #F97316 (orange), text: white, radius: 12px
  height: 56px, padding: 0 32px, Poppins 16px/600
  shadow: 0 4px 24px rgba(249,115,22,0.5)
  → scrolls to vendor sign-up form (#vendor-signup)

Below CTA:
  "No credit card required · Free to list · 10% fee only on sales"
  12px / #64748B (grey) · centred
```

---

## ═══ SECTION 8 — TESTIMONIALS ═══

**File:** `src/components/sections/TestimonialsSection.tsx`

```
bg: #F8FAFC · padding: 96px 0

HEADLINE: "Loved by local vendors and buyers"
  H2, centred

AUTO-SCROLLING TESTIMONIAL STRIP (two rows, opposite directions):
  Row 1: scrolls left  (translateX: 0 → -50%, 25s linear infinite)
  Row 2: scrolls right (translateX: -50% → 0, 25s linear infinite)
  Pause both rows on hover (CSS animation-play-state)

TESTIMONIAL CARD (each):
  bg: white, radius: 16px, border: 1px solid #E2E8F0
  padding: 20px, min-width: 280px, max-width: 320px
  shadow: 0 1px 4px rgba(15,23,42,0.06)

  Star rating: ★★★★★ (orange, 14px)
  Quote: Body, #0F172A, italic, 2-4 lines
  Author row: avatar (36px initials circle, navy bg) + name + role
    name: 13px/600 · role: 12px/#64748B
    e.g. "Maria S. · Home Baker · Pickering"
         "Raj K. · Lawn Care · Ajax"
         "Priya M. · Buyer · Scarborough"

Write at least 8 realistic testimonials covering:
  2 × buyers (ordered from local bakery, found a plumber)
  3 × simple ad vendors (quick sale)
  2 × service vendors (lawn care, cleaning)
  1 × digital store vendor (grocery/bakery)

Testimonials should reflect Ontario/multicultural community:
  Names, areas, and scenarios should feel authentic to
  Pickering, Ajax, Scarborough, Mississauga, Brampton, Hamilton
```

---

## ═══ SECTION 9 — COMMUNITY ═══

**File:** `src/components/sections/CommunitySection.tsx`

```
bg: white · padding: 80px 0

HEADLINE: "Built for every community in Ontario"
  H2, centred, #0F172A

SUBTEXT: "KOSH celebrates the diversity of local business."
  Body LG, #64748B, centred

COMMUNITY TAG CLOUD (centred, flex wrap, gap 10px, max-width 700px):
  Animated entrance — tags fade in with slight scale from 0.8 → 1.0
  Staggered, each tag 50ms after the previous

  Tags (pill chips, mix of navy and orange backgrounds):
    🥘 South Asian Owned    🌿 Halal Certified
    👩 Women-Owned          🌱 Vegan-Friendly
    🏳️‍🌈 LGBTQ+ Friendly     ♿ Accessibility-Friendly
    🍞 Home Kitchen          🌍 Caribbean Owned
    🌸 Filipino Owned        🧿 Middle Eastern Owned
    🥬 Farm Fresh            🤲 Community-Supported

  Navy bg tags: #1E3A8A bg, white text
  Orange bg tags: #FFF7ED bg, #9A3412 text (soft orange)

CLOSING LINE:
  "Whatever your community — KOSH is your marketplace."
  H4, #1E3A8A, centred, italic
```

---

## ═══ SECTION 10 — VENDOR PRICING ═══

**File:** `src/components/sections/PricingSection.tsx`

```
bg: #F8FAFC · padding: 96px 0

SECTION LABEL: "Simple pricing"
HEADLINE: "Start free. Grow when you're ready."
  Centred, H1

SUBTEXT: "No setup fees. No hidden costs. Pay only when you earn."
  Body LG, centred, #64748B

3-COLUMN PRICING CARDS (max-width 960px, gap 24px):

  Card 1 — Free (most popular for starters)
    Header bg: white · Badge: "Start here"
    Price: "$0 / month"
    Subtext: "10% fee on sales only"
    Features list:
      ✓ 5 AI-generated listings
      ✓ 1 digital store
      ✓ Basic analytics
      ✓ In-app messaging
      ✓ Secure CAD payments
    CTA: "Get started free" (navy outlined button)

  Card 2 — Pro (featured — most popular badge)
    Header bg: navy gradient, white text
    Badge: "Most popular" (orange pill, top-right)
    Scale: slightly larger (scale 1.05) on desktop
    Border: 2px solid #1E3A8A
    Shadow: elevated (shadow-lg)
    Price: "$19 / month"
    Subtext: "10% fee on sales"
    Features list (all Free features plus):
      ✓ 50 AI-generated listings
      ✓ Priority search ranking
      ✓ Advanced analytics
      ✓ Boost credits ($10/mo)
      ✓ Customer reviews dashboard
      ✓ Priority support
    CTA: "Start Pro — $19/mo" (white bg, navy text button)

  Card 3 — Business
    Header bg: white · Badge: "For established sellers"
    Price: "$49 / month"
    Subtext: "10% fee on sales"
    Features (all Pro features plus):
      ✓ Unlimited AI listings
      ✓ Multiple store locations
      ✓ Staff accounts
      ✓ API access
      ✓ Dedicated support
    CTA: "Start Business" (navy outlined)

Below cards (centred):
  "All plans include: Stripe payments · KOSH Verified badge
   eligibility · Ontario compliance tools · Mobile app access"
  12px / #64748B

FAQ ACCORDION (below pricing, 3 questions):
  Q: "Is there a free trial on paid plans?"
  A: "Yes — all paid plans come with a 14-day free trial."

  Q: "What is the 10% platform fee?"
  A: "KOSH takes 10% of each completed order. If you don't sell,
     you don't pay anything."

  Q: "Can I cancel anytime?"
  A: "Absolutely — no contracts, cancel anytime from the app."
```

---

## ═══ SECTION 11 — APP DOWNLOAD ═══

**File:** `src/components/sections/DownloadSection.tsx`
`id="download"`

```
bg: hero-gradient (navy) · padding: 96px 0

LAYOUT: flex row on desktop, column on mobile

LEFT (50%):
  LABEL: "Download KOSH" (white, small, uppercase)
  HEADLINE: "Your neighbourhood,"
            "in your pocket." (white, H1)
  SUBTEXT: "Available on iOS and Android. Free to download."
           (white 80%, Body LG)

  APP STORE BUTTONS (stacked, 12px gap):
    Apple App Store badge (white bg or official dark badge)
      → links to Apple App Store (placeholder until published)
    Google Play badge
      → links to Google Play Store

  QR CODE (optional, below badges):
    "Or scan to download" label
    QR code image (square, 100px)
    Placeholder QR until app is published

  DOWNLOAD STATS:
    "⭐ 4.8 rating · 12,000+ downloads · Free"
    white 60%, 13px

RIGHT (50%):
  Phone mockup (home screen screenshot, white frame)
  Floating animation: translateY(-10px → 0 → -10px), 3s infinite
  Slight 3D tilt: rotateY(-8deg) for depth
```

---

## ═══ SECTION 12 — VENDOR SIGN-UP ═══

**File:** `src/components/sections/VendorSignupSection.tsx`
`id="vendor-signup"`

```
bg: white · padding: 96px 0

LAYOUT: two columns on desktop

LEFT (50%):
  LABEL: "For vendors" (orange, small, uppercase)
  HEADLINE: "Start selling in your neighbourhood today."
            H1, #0F172A

  BENEFIT LIST:
    Each item: green checkmark icon + text

    ✓ Free to start — no setup fees
    ✓ AI builds your listing from a photo
    ✓ Appear in local search immediately
    ✓ Secure CAD payments via Stripe
    ✓ Your own store page at kosh.ca/store/you
    ✓ iOS and Android vendor app

  SOCIAL PROOF (below list):
    Avatar stack (3 overlapping vendor avatars, navy circles with initials)
    "Join 2,400+ vendors already on KOSH"
    13px / #64748B

RIGHT (50%):
  SIGN-UP FORM CARD:
    bg: white, radius: 20px, shadow-lg
    border: 1px solid #E2E8F0
    padding: 32px

    Heading: "Get early access" — H3, #0F172A
    Sub: "We'll reach out within 24 hours." — Body SM, #64748B

    FORM FIELDS (React Hook Form + Zod):
      Full name *
        → text input, placeholder "Maria Santos"
      Business name *
        → text input, placeholder "Maria's Home Bakery"
      Business type *
        → dropdown:
          Home bakery / Grocery / Cleaning service / Lawn care /
          Plumbing & trades / Tutoring / Photography / Other
      City *
        → text input, placeholder "Pickering, ON"
      Phone number *
        → tel input, placeholder "+1 (647) 555-0100"
      Email address *
        → email input

      Each input:
        Label: 13px / 500 / #0F172A, margin-bottom 6px
        Input: 52px height, radius 10px, border 1px #E2E8F0
               focus: border 1.5px #1E3A8A (navy)
               padding: 0 16px, Poppins 14px, #0F172A
               placeholder: #94A3B8
        Error: 12px / #DC2626, margin-top 4px

    SUBMIT BUTTON:
      "Start selling on KOSH →"
      bg: #F97316 (orange), text: white
      width: 100%, height: 52px, radius: 10px
      Poppins 15px / 600
      Loading state: spinner + "Submitting..."
      shadow: 0 4px 16px rgba(249,115,22,0.35)

    FINE PRINT (below button):
      "By submitting you agree to our Terms of Service
       and Privacy Policy. No spam, ever."
      11px / #94A3B8, centred

    SUCCESS STATE (replace form on submit):
      Green checkmark animation (Framer Motion)
      "You're on the list! 🎉"
      "We'll reach out to [email] within 24 hours."
      "In the meantime, download the app and explore KOSH."
      Download buttons below

API ROUTE (src/app/api/vendor-signup/route.ts):
  POST handler:
    → Validate with Zod
    → Send confirmation email via Resend to vendor
    → Send notification email to KOSH team
    → Return 200 success or 422 validation error
    → Log to a Google Sheet or Notion DB (simple webhook)
    Zod schema mirrors the form fields above
```

---

## ═══ FOOTER ═══

**File:** `src/components/layout/Footer.tsx`

```
bg: #0F172A (near black) · padding: 64px 0 32px

TOP ROW (4 columns on desktop, 2 on tablet, 1 on mobile):

  Col 1 — Brand:
    KoshLogo (white letters, orange pin, 24px font)
    "Find Local. Buy Local." tagline (white 60%, 14px)
    "Ontario, Canada" (white 40%, 13px)
    Social links row (gap 12px):
      Instagram · Facebook · TikTok · LinkedIn
      Each: 36px circle, bg rgba(255,255,255,0.1), white icon

  Col 2 — Company:
    "Company" label (white 40%, 11px / uppercase)
    About KOSH
    How it works
    Vendor pricing
    Contact us
    Each: white 70%, 14px, hover: white 100%

  Col 3 — Vendors:
    "For vendors" label
    Start selling
    Vendor app
    Pricing
    Success stories

  Col 4 — Legal:
    "Legal" label
    Privacy Policy
    Terms of Service
    Cookie Policy
    CASL Compliance

DIVIDER: 1px solid rgba(255,255,255,0.1)

BOTTOM ROW:
  Left: "© 2025 KOSH Technologies Inc. All rights reserved."
        white 40%, 13px
  Right: "Made with ♥ for local communities in Ontario"
         white 40%, 13px

All footer links are href="#" (placeholder) for now.
```

---

## ═══ ANIMATIONS — FRAMER MOTION ═══

```typescript
// Reusable animation variants — define once, use everywhere

// Fade up on scroll
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Staggered children
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Scale in
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
};

// Float (continuous)
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, ease: 'easeInOut', repeat: Infinity }
  }
};

// All scroll-triggered animations use:
// whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }}
// This ensures animations only fire once, not every scroll direction
```

---

## ═══ PERFORMANCE ═══

```
Images:
  All images use next/image with proper width/height
  Priority: true on hero image only
  Lazy loading on everything else
  WebP format where possible
  Placeholder: blur

Fonts:
  next/font/google for Poppins (eliminates layout shift)
  preload: true for weights 600, 700

Core Web Vitals targets:
  LCP < 2.5s
  CLS < 0.1
  FID < 100ms

Bundle:
  Dynamic import for Framer Motion (reduces initial bundle)
  No heavy dependencies — keep it lean
```

---

## ═══ ORDERED BUILD TASKS ═══

```
Task W1  — Project scaffold
           create-next-app with TypeScript + Tailwind + App Router
           Install framer-motion, lucide-react, react-hook-form,
           zod, @hookform/resolvers, resend, @vercel/analytics
           Configure tailwind.config.ts: Poppins font, custom
           colours as CSS variables
           Set up _globals.css with CSS variable definitions
           Set up next/font/google for Poppins

Task W2  — Layout + SEO foundation
           app/layout.tsx: Poppins font, metadata, JSON-LD,
           Vercel Analytics, Google Tag Manager shell
           Navbar.tsx: sticky with scroll behaviour, mobile drawer
           Footer.tsx: 4-column layout, social links

Task W3  — Hero section
           Full navy gradient hero, headline, sub-headline,
           two CTA buttons, social proof row
           Phone mockup (static placeholder images)
           Framer Motion entrance animations
           Mobile responsive layout

Task W4  — Trust bar + Problem section
           TrustBarSection: count-up animation on scroll
           ProblemSection: 3 pain point cards, fade-up stagger

Task W5  — How it works
           Toggle between buyer and vendor journeys
           Step cards with connecting dashed line
           Staggered scroll animations

Task W6  — Features + App screenshots
           FeaturesSection: 2-col grid, 6 feature cards
           AppScreensSection: horizontal scrolling phone strip
           Auto-scroll animation

Task W7  — Vendor section
           Dark background section (#0F172A)
           3 benefit cards on dark surface
           Orange CTA button with glow shadow

Task W8  — Testimonials
           Auto-scrolling two-row strip
           8 realistic testimonial cards
           Pause on hover

Task W9  — Community + Pricing sections
           CommunitySection: animated tag cloud
           PricingSection: 3 cards + FAQ accordion
           Featured Pro card with elevation + border

Task W10 — Download section
           Navy gradient section
           App Store + Google Play badges (official SVGs)
           Phone mockup with 3D tilt

Task W11 — Vendor sign-up section + API route
           Form with React Hook Form + Zod validation
           All 6 fields with proper error states
           API route: Resend email + team notification
           Success state with animation

Task W12 — Performance + final checks
           Verify all next/image usage
           Verify Poppins loads via next/font (no FOUT)
           Verify all Framer Motion animations have once:true
           Verify mobile responsive on all sections (320px min)
           Verify all CTA buttons scroll to correct anchors
           Verify vendor sign-up form submits correctly
           Run: next build — zero errors, zero warnings
           Run Lighthouse: target 90+ on all metrics
```

---

## ═══ START COMMAND ═══

```
Start Task W1 — scaffold the KOSH landing page.

Run:
  npx create-next-app@latest . --typescript --tailwind
  --eslint --app --src-dir --import-alias "@/*"

Then install:
  npm install framer-motion lucide-react react-hook-form
  zod @hookform/resolvers resend @vercel/analytics

Configure tailwind.config.ts:
  Add fontFamily: { poppins: ['Poppins', 'sans-serif'] }
  Add the KOSH colours from CLAUDE.md as Tailwind theme extensions

Set up src/app/globals.css with all CSS variables from CLAUDE.md.
Set up src/app/layout.tsx with Poppins via next/font/google,
full metadata, and JSON-LD structured data.

Report when the dev server runs successfully at localhost:3000.
```

---

## ═══ PAGE SECTION ORDER ═══

```
1.  Navbar          (sticky)
2.  HeroSection     ← #top
3.  TrustBarSection
4.  ProblemSection
5.  HowItWorksSection  ← #how-it-works
6.  FeaturesSection
7.  AppScreensSection
8.  VendorSection      ← #for-vendors
9.  TestimonialsSection
10. CommunitySection
11. PricingSection
12. DownloadSection    ← #download
13. VendorSignupSection ← #vendor-signup
14. Footer
```

---

*KOSH Company Landing Page — Next.js 14 Build Prompt*
*Navy #1E3A8A + Orange #F97316 · Poppins · Framer Motion*
*Two conversion goals: App download + Vendor sign-up*
*kosh.ca · Ontario, Canada · Local Vendor Discovery Platform*
