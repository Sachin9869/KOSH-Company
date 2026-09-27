import {
  BadgeCheck,
  Bell,
  ChevronLeft,
  Heart,
  MapPin,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type ScreenId = 'home' | 'search' | 'store' | 'product' | 'order';

/** Renders one illustrated KOSH app screen at the phone's logical 260×546 size. */
export function AppScreen({ screen }: { screen: ScreenId }) {
  switch (screen) {
    case 'search':
      return <SearchScreen />;
    case 'store':
      return <StoreScreen />;
    case 'product':
      return <ProductScreen />;
    case 'order':
      return <OrderScreen />;
    default:
      return <HomeScreen />;
  }
}

/* ─── shared atoms ──────────────────────────────────────────── */

function StatusBar({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const colour = tone === 'light' ? 'bg-white' : 'bg-slate-900';
  const text = tone === 'light' ? 'text-white' : 'text-slate-900';
  return (
    <div className="relative z-10 flex h-[34px] items-center justify-between px-5 pt-[6px]">
      <span className={cn('text-[9px] font-semibold', text)}>9:41</span>
      <div className="flex items-center gap-[3px]">
        {[3, 5, 7, 9].map((h) => (
          <span key={h} className={cn('w-[2px] rounded-sm', colour)} style={{ height: h }} />
        ))}
        <span className={cn('ml-[3px] h-[8px] w-[14px] rounded-[3px] border', tone === 'light' ? 'border-white' : 'border-slate-900')}>
          <span className={cn('block h-full w-[9px] rounded-[2px]', colour)} />
        </span>
      </div>
    </div>
  );
}

/** Skeleton text line — stands in for copy at mockup scale. */
function Line({ w, dark = false }: { w: number | string; dark?: boolean }) {
  return (
    <span
      className={cn('block h-[5px] rounded-full', dark ? 'bg-slate-300' : 'bg-slate-200')}
      style={{ width: typeof w === 'number' ? `${w}px` : w }}
    />
  );
}

/** Photo stand-in — a soft brand-tinted gradient tile. */
function Thumb({ className, tone = 0 }: { className?: string; tone?: number }) {
  const tones = [
    'from-orange-200 via-amber-100 to-orange-100',
    'from-blue-200 via-sky-100 to-indigo-100',
    'from-emerald-200 via-teal-100 to-emerald-100',
    'from-rose-200 via-pink-100 to-orange-100',
    'from-violet-200 via-indigo-100 to-blue-100',
  ];
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gradient-to-br',
        tones[tone % tones.length],
        className,
      )}
    >
      <span className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-white/40" />
      <span className="absolute bottom-1 left-2 h-4 w-8 rounded-full bg-white/30" />
    </div>
  );
}

function Rating({ value = '4.9', reviews }: { value?: string; reviews?: string }) {
  return (
    <span className="flex items-center gap-[3px] text-[8px] font-semibold text-slate-700">
      <Star className="h-[8px] w-[8px] fill-orange text-orange" />
      {value}
      {reviews && <span className="font-normal text-slate-400">({reviews})</span>}
    </span>
  );
}

function TypeBadge({ label, tone }: { label: string; tone: 'ad' | 'service' | 'store' }) {
  const styles = {
    ad: 'bg-blue-100 text-blue-700',
    service: 'bg-emerald-100 text-emerald-700',
    store: 'bg-orange-100 text-orange-ink',
  } as const;
  return (
    <span
      className={cn(
        'rounded-[4px] px-[5px] py-[1px] text-[7px] font-bold uppercase tracking-wide',
        styles[tone],
      )}
    >
      {label}
    </span>
  );
}

function TabBar({ active = 0 }: { active?: number }) {
  const items = [
    { Icon: Search, label: 'Discover' },
    { Icon: MapPin, label: 'Nearby' },
    { Icon: ShoppingBag, label: 'Orders' },
    { Icon: Heart, label: 'Saved' },
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-around border-t border-slate-100 bg-white/95 px-3 pb-[14px] pt-[8px] backdrop-blur">
      {items.map(({ Icon, label }, i) => (
        <div key={label} className="flex flex-col items-center gap-[3px]">
          <Icon
            className={cn('h-[13px] w-[13px]', i === active ? 'text-navy' : 'text-slate-300')}
            strokeWidth={i === active ? 2.4 : 2}
          />
          <span
            className={cn(
              'text-[7px] font-medium',
              i === active ? 'text-navy' : 'text-slate-300',
            )}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── 1. Home / discovery ───────────────────────────────────── */

function HomeScreen() {
  return (
    <div className="relative h-full w-full bg-slate-50">
      <div className="rounded-b-[22px] bg-hero-gradient pb-4">
        <StatusBar />
        <div className="px-4 pt-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[7px] font-medium uppercase tracking-wider text-white/60">
                Delivering to
              </p>
              <p className="flex items-center gap-1 text-[10px] font-semibold text-white">
                <MapPin className="h-[9px] w-[9px] text-orange" />
                Pickering, ON
              </p>
            </div>
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
              <Bell className="h-[11px] w-[11px] text-white" />
              <span className="absolute right-[5px] top-[5px] h-[4px] w-[4px] rounded-full bg-orange" />
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-[10px] bg-white px-2.5 py-2 shadow-sm">
            <Search className="h-[11px] w-[11px] text-slate-400" />
            <span className="text-[9px] text-slate-400">Tiramisu cake, plumber…</span>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3">
        <div className="flex gap-1.5">
          {['Bakery', 'Services', 'Grocery', 'Trades'].map((c, i) => (
            <span
              key={c}
              className={cn(
                'rounded-full px-2 py-[3px] text-[7.5px] font-semibold',
                i === 0 ? 'bg-navy text-white' : 'bg-white text-slate-500 ring-1 ring-slate-200',
              )}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[10px] font-bold text-slate-900">Near you</p>
          <span className="text-[8px] font-semibold text-blue-brand">See all</span>
        </div>

        <div className="mt-2 space-y-2">
          {[
            { t: "Maria's Home Bakery", s: 'Tiramisu · $32', d: '0.8 km', tone: 0 },
            { t: 'Raj Lawn Care', s: 'Mowing · from $45', d: '1.4 km', tone: 2 },
            { t: 'Sunrise Grocery', s: '240 items · Halal', d: '2.1 km', tone: 3 },
          ].map((item) => (
            <div
              key={item.t}
              className="flex items-center gap-2.5 rounded-[10px] bg-white p-2 shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
            >
              <Thumb className="h-[38px] w-[38px] shrink-0 rounded-lg" tone={item.tone} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-semibold text-slate-900">{item.t}</p>
                <p className="mt-[2px] truncate text-[8px] text-slate-500">{item.s}</p>
                <div className="mt-[3px] flex items-center gap-2">
                  <Rating />
                  <span className="text-[8px] text-slate-400">📍 {item.d}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active={0} />
    </div>
  );
}

/* ─── 2. Search results ─────────────────────────────────────── */

function SearchScreen() {
  return (
    <div className="relative h-full w-full bg-slate-50">
      <div className="bg-white pb-3 shadow-sm">
        <StatusBar tone="dark" />
        <div className="flex items-center gap-2 px-4 pt-2">
          <ChevronLeft className="h-[13px] w-[13px] text-slate-500" />
          <div className="flex flex-1 items-center gap-2 rounded-[9px] bg-slate-100 px-2.5 py-[6px]">
            <Search className="h-[10px] w-[10px] text-slate-400" />
            <span className="text-[9px] font-medium text-slate-800">tiramisu cake</span>
          </div>
          <SlidersHorizontal className="h-[13px] w-[13px] text-navy" />
        </div>
        <div className="mt-2.5 flex gap-1.5 px-4">
          {['Within 5 km', '4.5★+', 'Open now'].map((f, i) => (
            <span
              key={f}
              className={cn(
                'rounded-full px-2 py-[3px] text-[7.5px] font-semibold',
                i === 0 ? 'bg-navy/10 text-navy' : 'bg-slate-100 text-slate-500',
              )}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <p className="px-4 pt-3 text-[8px] text-slate-400">
        <span className="font-semibold text-slate-700">18 results</span> near Pickering, ON
      </p>

      <div className="mt-2 space-y-2 px-4">
        {[
          { t: 'Classic Tiramisu (8")', v: "Maria's Home Bakery", p: '$32', badge: 'Ad', tone: 'ad', d: '0.8 km' },
          { t: 'Custom cake baking', v: 'Sweet Lane Studio', p: 'from $40', badge: 'Service', tone: 'service', d: '1.9 km' },
          { t: 'Dessert counter', v: 'Sunrise Grocery', p: '12 items', badge: 'Store', tone: 'store', d: '2.1 km' },
        ].map((r, i) => (
          <div key={r.t} className="rounded-[10px] bg-white p-2 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
            <div className="flex gap-2.5">
              <Thumb className="h-[46px] w-[46px] shrink-0 rounded-lg" tone={i} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <TypeBadge label={r.badge} tone={r.tone as 'ad'} />
                  <span className="text-[7.5px] text-slate-400">{r.d}</span>
                </div>
                <p className="mt-[3px] truncate text-[9px] font-semibold text-slate-900">{r.t}</p>
                <p className="truncate text-[8px] text-slate-500">{r.v}</p>
                <div className="mt-[3px] flex items-center justify-between">
                  <Rating reviews="41" />
                  <span className="text-[9px] font-bold text-navy">{r.p}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="rounded-[10px] bg-white p-2 opacity-60 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
          <div className="flex gap-2.5">
            <Thumb className="h-[40px] w-[40px] shrink-0 rounded-lg" tone={4} />
            <div className="flex-1 space-y-[6px] pt-1">
              <Line w="70%" dark />
              <Line w="45%" />
              <Line w="55%" />
            </div>
          </div>
        </div>
      </div>
      <TabBar active={0} />
    </div>
  );
}

/* ─── 3. Vendor store page ──────────────────────────────────── */

function StoreScreen() {
  return (
    <div className="relative h-full w-full bg-slate-50">
      <div className="relative h-[92px] bg-gradient-to-br from-orange-300 via-amber-200 to-orange-200">
        <StatusBar />
        <span className="absolute -right-4 top-2 h-16 w-16 rounded-full bg-white/30" />
        <ChevronLeft className="absolute left-4 top-[42px] h-[14px] w-[14px] text-white drop-shadow" />
      </div>

      <div className="-mt-6 px-4">
        <div className="rounded-[12px] bg-white p-3 shadow-[0_4px_14px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-2.5">
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-navy text-[13px] font-bold text-white">
              M
            </div>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1 text-[10px] font-bold text-slate-900">
                Maria&apos;s Home Bakery
                <BadgeCheck className="h-[10px] w-[10px] fill-blue-brand text-white" />
              </p>
              <p className="mt-[2px] text-[8px] text-slate-500">Home Kitchen · Pickering, ON</p>
              <div className="mt-[4px] flex items-center gap-2">
                <Rating value="4.9" reviews="128" />
                <span className="rounded-[4px] bg-emerald-100 px-[5px] py-[1px] text-[7px] font-bold text-emerald-700">
                  OPEN
                </span>
              </div>
            </div>
          </div>
          <div className="mt-2.5 flex gap-1.5">
            {['🌿 Halal', '👩 Women-Owned', '🍞 Home Kitchen'].map((t) => (
              <span
                key={t}
                className="rounded-full bg-orange-tint px-[6px] py-[2px] text-[7px] font-semibold text-orange-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex gap-4 border-b border-slate-200 px-4">
        {['Products', 'About', 'Reviews'].map((t, i) => (
          <span
            key={t}
            className={cn(
              'pb-[6px] text-[9px] font-semibold',
              i === 0 ? 'border-b-2 border-navy text-navy' : 'text-slate-400',
            )}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 px-4 pt-3">
        {[
          { t: 'Tiramisu 8"', p: '$32', tone: 0 },
          { t: 'Baklava box', p: '$18', tone: 3 },
          { t: 'Carrot cake', p: '$28', tone: 1 },
          { t: 'Cookie tray', p: '$15', tone: 2 },
        ].map((p) => (
          <div key={p.t} className="overflow-hidden rounded-[10px] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
            <Thumb className="h-[52px] w-full" tone={p.tone} />
            <div className="p-[6px]">
              <p className="truncate text-[8.5px] font-semibold text-slate-900">{p.t}</p>
              <p className="mt-[2px] text-[9px] font-bold text-navy">{p.p}</p>
            </div>
          </div>
        ))}
      </div>
      <TabBar active={1} />
    </div>
  );
}

/* ─── 4. Product detail + AI summary ────────────────────────── */

function ProductScreen() {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="relative h-[168px]">
        <Thumb className="absolute inset-0 h-full w-full" tone={0} />
        <div className="relative">
          <StatusBar tone="dark" />
        </div>
        <ChevronLeft className="absolute left-4 top-[44px] h-[14px] w-[14px] text-slate-700" />
        <span className="absolute right-4 top-[42px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white/80">
          <Heart className="h-[10px] w-[10px] text-slate-600" />
        </span>
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
          {[0, 1, 2].map((d) => (
            <span
              key={d}
              className={cn('h-[3px] rounded-full', d === 0 ? 'w-3 bg-navy' : 'w-[3px] bg-navy/30')}
            />
          ))}
        </div>
      </div>

      <div className="px-4 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[11px] font-bold text-slate-900">Classic Tiramisu (8&quot;)</p>
            <p className="mt-[2px] text-[8px] text-slate-500">Maria&apos;s Home Bakery · 0.8 km</p>
          </div>
          <p className="shrink-0 text-[14px] font-extrabold text-navy">$32</p>
        </div>

        <div className="mt-1.5 flex items-center gap-2">
          <Rating value="4.9" reviews="128" />
          <span className="rounded-[4px] bg-emerald-100 px-[5px] py-[1px] text-[7px] font-bold text-emerald-700">
            READY TODAY
          </span>
        </div>

        <div className="mt-3 rounded-[10px] border border-blue-200 bg-blue-tint p-2.5">
          <p className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-wide text-blue-brand">
            <Sparkles className="h-[9px] w-[9px]" />
            KOSH AI summary
          </p>
          <div className="mt-2 space-y-[5px]">
            <Line w="94%" dark />
            <Line w="88%" dark />
            <Line w="62%" dark />
          </div>
          <div className="mt-2.5 flex gap-1.5">
            {['Egg-free option', 'Same-day', 'Halal'].map((c) => (
              <span
                key={c}
                className="rounded-full bg-white px-[6px] py-[2px] text-[7px] font-semibold text-blue-700 ring-1 ring-blue-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 space-y-[6px]">
          <Line w="100%" />
          <Line w="92%" />
          <Line w="70%" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-slate-100 bg-white px-4 pb-[16px] pt-[10px]">
        <div className="flex items-center gap-2 rounded-[8px] bg-slate-100 px-2 py-[6px]">
          <span className="text-[10px] font-bold text-slate-400">−</span>
          <span className="text-[9px] font-bold text-slate-900">1</span>
          <span className="text-[10px] font-bold text-slate-700">+</span>
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5 rounded-[8px] bg-orange py-[8px] text-[9px] font-bold text-white">
          <ShoppingBag className="h-[10px] w-[10px]" />
          Add to order · $32
        </div>
      </div>
    </div>
  );
}

/* ─── 5. Order tracking ─────────────────────────────────────── */

function OrderScreen() {
  const steps = [
    { t: 'Order confirmed', s: '2:14 PM', done: true },
    { t: 'Maria is preparing it', s: '2:20 PM', done: true },
    { t: 'Ready for pickup', s: 'Est. 2:55 PM', done: false, active: true },
    { t: 'Completed', s: '', done: false },
  ];

  return (
    <div className="relative h-full w-full bg-slate-50">
      <div className="relative h-[150px] overflow-hidden bg-blue-tint">
        <StatusBar tone="dark" />
        {/* Simplified street grid */}
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <g stroke="#CBD5E1" strokeWidth="6" opacity="0.7">
            <line x1="-10" y1="46" x2="270" y2="46" />
            <line x1="-10" y1="112" x2="270" y2="112" />
            <line x1="62" y1="-10" x2="62" y2="160" />
            <line x1="176" y1="-10" x2="176" y2="160" />
          </g>
          <path d="M62 112 L62 46 L176 46" stroke="#1E3A8A" strokeWidth="3" fill="none" strokeDasharray="6 5" />
        </svg>
        <span className="absolute left-[54px] top-[104px] flex h-4 w-4 items-center justify-center rounded-full bg-navy ring-[3px] ring-white">
          <span className="h-[5px] w-[5px] rounded-full bg-white" />
        </span>
        <span className="absolute left-[168px] top-[38px] flex h-4 w-4 items-center justify-center rounded-full bg-orange ring-[3px] ring-white">
          <MapPin className="h-[8px] w-[8px] text-white" />
        </span>
      </div>

      <div className="-mt-4 px-4">
        <div className="rounded-[12px] bg-white p-3 shadow-[0_4px_14px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[7px] font-semibold uppercase tracking-wider text-slate-400">
                Order #KSH-4471
              </p>
              <p className="mt-[2px] text-[11px] font-bold text-slate-900">Arriving 2:55 PM</p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-[3px] text-[7.5px] font-bold text-emerald-700">
              <Truck className="h-[8px] w-[8px]" />
              ON TIME
            </span>
          </div>

          <div className="mt-3 space-y-0">
            {steps.map((s, i) => (
              <div key={s.t} className="flex gap-2.5">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      'relative flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full',
                      s.done ? 'bg-navy' : s.active ? 'bg-orange' : 'bg-slate-200',
                    )}
                  >
                    {s.done && <span className="h-[3px] w-[3px] rounded-full bg-white" />}
                    {s.active && (
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-orange/50" />
                    )}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      className={cn('w-[2px] flex-1', s.done ? 'bg-navy/30' : 'bg-slate-200')}
                      style={{ minHeight: 20 }}
                    />
                  )}
                </div>
                <div className="pb-[9px]">
                  <p
                    className={cn(
                      'text-[8.5px] font-semibold',
                      s.done || s.active ? 'text-slate-900' : 'text-slate-400',
                    )}
                  >
                    {s.t}
                  </p>
                  {s.s && <p className="text-[7.5px] text-slate-400">{s.s}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-2.5 rounded-[10px] bg-white p-2.5 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
            M
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold text-slate-900">Maria&apos;s Home Bakery</p>
            <p className="text-[8px] text-slate-500">1 × Classic Tiramisu · $32</p>
          </div>
          <span className="rounded-[6px] bg-navy px-2 py-[4px] text-[7.5px] font-bold text-white">
            Message
          </span>
        </div>

        <div className="mt-2.5 rounded-[10px] bg-white p-2.5 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
          <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">
            Pickup address
          </p>
          <p className="mt-[3px] text-[8.5px] font-semibold text-slate-900">
            Liverpool Rd, Pickering, ON
          </p>
          <p className="text-[7.5px] text-slate-500">Ring the side door · 0.8 km away</p>
          <div className="mt-2 flex gap-1.5">
            <span className="flex-1 rounded-[6px] bg-slate-100 py-[5px] text-center text-[7.5px] font-semibold text-slate-600">
              Get directions
            </span>
            <span className="flex-1 rounded-[6px] bg-slate-100 py-[5px] text-center text-[7.5px] font-semibold text-slate-600">
              Need help?
            </span>
          </div>
        </div>
      </div>
      <TabBar active={2} />
    </div>
  );
}
