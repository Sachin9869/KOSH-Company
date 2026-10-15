import type { Testimonial } from '@/lib/constants';

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({ quote, name, role, city }: Testimonial) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col justify-between rounded-card border border-hairline bg-white p-5 shadow-card">
      {/* Pre-launch: these are illustrative, not real reviews. */}
      <span className="w-fit rounded-full bg-sand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-ink-secondary">
        Example
      </span>

      <blockquote className="mt-3 text-body-sm italic leading-relaxed text-ink">
        “{quote}”
      </blockquote>

      <figcaption className="mt-4 flex items-center gap-2.5 border-t border-hairline pt-4">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-[12px] font-semibold text-white"
          aria-hidden="true"
        >
          {initials(name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[13px] font-semibold text-ink">{name}</span>
          <span className="block truncate text-[12px] text-ink-secondary">
            {role} · {city}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
