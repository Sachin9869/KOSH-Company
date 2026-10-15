import type { Config } from 'tailwindcss';

/**
 * KOSH design tokens.
 * Colours map 1:1 to the CSS variables declared in src/app/globals.css so the
 * same palette is reachable from Tailwind classes and from raw CSS.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      /*
       * The apps' palette. Token names are kept from the first site so every
       * section picks the new colours up unchanged: `navy` is now the buyer
       * app's forest green, `orange` the vendor app's lime (always with ink
       * text on top), and `blue` the action green.
       */
      colors: {
        navy: {
          DEFAULT: '#173A2B',
          dark: '#10291E',
          light: '#286447',
          soft: '#22503A',
        },
        blue: {
          brand: '#286447',
          tint: '#EAF3EC',
        },
        orange: {
          DEFAULT: '#B6E36D',
          dark: '#A3D45A',
          /** Green for accent text and icons on light surfaces (6.9:1 on cream). */
          ink: '#286447',
          tint: '#EEF6DF',
        },
        apricot: {
          DEFAULT: '#F28C52',
          tint: '#FDEBDF',
        },
        mint: '#E2EFE5',
        sage: '#E5ECDE',
        /** Warm light fill for inputs, chips and toggles — the apps' surfaceVariant. */
        sand: '#F2EEE5',
        surface: {
          DEFAULT: '#FFFFFF',
          page: '#FBF8F1',
          dark: '#202923',
          'dark-raised': '#2A352E',
          'dark-border': '#3A463E',
        },
        ink: {
          DEFAULT: '#173A2B',
          secondary: '#5F6C65',
          muted: '#8E9A93',
        },
        hairline: '#ECE7DC',
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.0268em', fontWeight: '800' }],
        'display-sm': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        h1: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.0208em', fontWeight: '700' }],
        'h1-sm': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.0139em', fontWeight: '700' }],
        'h2-sm': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-sm': ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        btn: ['1rem', { lineHeight: '1', letterSpacing: '0.01875em', fontWeight: '600' }],
        nav: ['0.875rem', { lineHeight: '1', fontWeight: '500' }],
        label: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      maxWidth: {
        container: '80rem',
      },
      borderRadius: {
        card: '1rem',
        panel: '1.25rem',
      },
      boxShadow: {
        card: '0 1px 4px rgba(23,58,43,0.06)',
        'card-hover': '0 18px 40px -18px rgba(23,58,43,0.28)',
        elevated: '0 24px 60px -24px rgba(23,58,43,0.35)',
        cta: '0 4px 20px rgba(0,0,0,0.15)',
        'cta-orange': '0 4px 20px rgba(182,227,109,0.45)',
        'cta-orange-lg': '0 8px 32px rgba(182,227,109,0.55)',
        phone: '0 40px 80px -32px rgba(16,41,30,0.55)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #10291E 0%, #173A2B 55%, #22503A 100%)',
        'section-gradient': 'linear-gradient(180deg, #FBF8F1 0%, #EAF3EC 100%)',
        'vendor-gradient': 'linear-gradient(135deg, #B6E36D 0%, #CDEB97 100%)',
        'navy-gradient': 'linear-gradient(135deg, #173A2B 0%, #286447 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-slow': 'float 4.5s ease-in-out infinite',
        'marquee-left': 'marquee-left var(--marquee-duration, 40s) linear infinite',
        'marquee-right': 'marquee-right var(--marquee-duration, 40s) linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
