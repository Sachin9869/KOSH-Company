import { ImageResponse } from 'next/og';

// See opengraph-image.tsx — the Node build of @vercel/og fails on Windows.
export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Apple touch icon: the KOSH map pin on the navy brand square. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)',
        }}
      >
        <svg width="104" height="122" viewBox="0 0 24 28">
          <path
            d="M12 27.2c0 0 10-10.8 10-16.1A10 10 0 1 0 2 11.1c0 5.3 10 16.1 10 16.1Z"
            fill="#F97316"
          />
          <circle cx="12" cy="10.6" r="3.9" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    size,
  );
}
