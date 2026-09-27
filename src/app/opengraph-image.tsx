import { ImageResponse } from 'next/og';

// Edge runtime: @vercel/og's Node build resolves its font asset with
// fileURLToPath, which throws on Windows paths during prerender.
export const runtime = 'edge';
export const alt = 'KOSH — Find Local. Buy Local. The local marketplace built for your neighbourhood.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Social share card, generated at build time so it always matches the live
 * brand rather than drifting from a hand-exported PNG.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 88px',
          background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1D4ED8 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* glow accents */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: 'rgba(249,115,22,0.28)',
            filter: 'blur(90px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            left: -100,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: 'rgba(59,130,246,0.35)',
            filter: 'blur(90px)',
            display: 'flex',
          }}
        />

        {/* wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 44, fontWeight: 800, color: '#fff', letterSpacing: -1 }}>K</span>
          <svg width="44" height="52" viewBox="0 0 24 28" style={{ marginBottom: -6 }}>
            <path
              d="M12 27.2c0 0 10-10.8 10-16.1A10 10 0 1 0 2 11.1c0 5.3 10 16.1 10 16.1Z"
              fill="#F97316"
            />
            <circle cx="12" cy="10.6" r="3.9" fill="#FFFFFF" />
          </svg>
          <span style={{ fontSize: 44, fontWeight: 800, color: '#fff', letterSpacing: -1 }}>SH</span>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 44,
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 1.05,
            color: '#fff',
          }}
        >
          Find Local.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 1.05,
            color: '#F97316',
          }}
        >
          Buy Local.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 32,
            fontSize: 30,
            color: 'rgba(255,255,255,0.82)',
            maxWidth: 780,
            lineHeight: 1.4,
          }}
        >
          Discover home bakeries, local services, and neighbourhood stores near you — and order in
          seconds.
        </div>

        <div style={{ display: 'flex', marginTop: 48, gap: 14, alignItems: 'center' }}>
          {['🇨🇦 Ontario, Canada', '⭐ 4.8 rating', '2,400+ local vendors'].map((chip) => (
            <div
              key={chip}
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 9999,
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.28)',
                color: '#fff',
                fontSize: 22,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
