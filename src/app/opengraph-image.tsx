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
          background: 'linear-gradient(135deg, #10291E 0%, #173A2B 55%, #22503A 100%)',
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
            background: 'rgba(182,227,109,0.22)',
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
            background: 'rgba(242,140,82,0.22)',
            filter: 'blur(90px)',
            display: 'flex',
          }}
        />

        {/* wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 44, fontWeight: 800, color: '#fff', letterSpacing: -1 }}>KOSH</span>
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
            color: '#B6E36D',
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
          {['🇨🇦 Ontario, Canada', 'Free to start', 'AI-written listings'].map((chip) => (
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
