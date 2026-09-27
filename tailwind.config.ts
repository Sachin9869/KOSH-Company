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
        poppins: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1E3A8A',
          dark: '#162D6E',
          light: '#1D4ED8',
          soft: '#2E4FA8',
        },
        blue: {
          brand: '#3B82F6',
          tint: '#EFF6FF',
        },
        orange: {
          DEFAULT: '#F97316',
          dark: '#EA6C0A',
          /** Accessible orange for text/icons on light surfaces (5.1:1 on white). */
          ink: '#C2410C',
          tint: '#FFF7ED',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          page: '#F8FAFC',
          dark: '#0F172A',
          'dark-raised': '#1E293B',
          'dark-border': '#334155',
        },
        ink: {
          DEFAULT: '#0F172A',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        hairline: '#E2E8F0',
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
        card: '0 1px 4px rgba(15,23,42,0.06)',
        'card-hover': '0 18px 40px -18px rgba(15,23,42,0.28)',
        elevated: '0 24px 60px -24px rgba(15,23,42,0.35)',
        cta: '0 4px 20px rgba(0,0,0,0.15)',
        'cta-orange': '0 4px 20px rgba(249,115,22,0.4)',
        'cta-orange-lg': '0 8px 32px rgba(249,115,22,0.5)',
        phone: '0 40px 80px -32px rgba(15,23,42,0.55)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1D4ED8 100%)',
        'section-gradient': 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
        'vendor-gradient': 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)',
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
