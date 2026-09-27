import { SectionHeading } from '@/components/ui/SectionWrapper';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants';

/**
 * Two counter-scrolling rows. The animation is pure CSS (transform only) so it
 * runs on the compositor and adds no JS to the bundle; hovering either row
 * pauses it via `animation-play-state`.
 */
export function TestimonialsSection() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const rowOne = TESTIMONIALS.slice(0, half);
  const rowTwo = TESTIMONIALS.slice(half);

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-surface-page py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="kosh-container">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Real neighbours"
          title="Loved by local vendors and buyers"
          subtitle="From Pickering to Hamilton — here's what happens when your neighbourhood gets a proper marketplace."
        />
      </div>

      <div className="mt-14 space-y-5">
        <MarqueeRow items={rowOne} direction="left" duration="46s" />
        <MarqueeRow items={rowTwo} direction="right" duration="52s" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: typeof TESTIMONIALS;
  direction: 'left' | 'right';
  duration: string;
}) {
  // Duplicated once so translating by -50% lands on an identical frame.
  const track = [...items, ...items];

  return (
    <div className="marquee-mask pause-on-hover relative">
      <ul
        data-marquee-track
        className={`flex w-max gap-5 px-3 ${
          direction === 'left'
            ? 'motion-safe:animate-marquee-left'
            : 'motion-safe:animate-marquee-right'
        }`}
        style={{ ['--marquee-duration' as string]: duration }}
      >
        {track.map((testimonial, i) => (
          <li key={`${testimonial.name}-${i}`} aria-hidden={i >= items.length}>
            <TestimonialCard {...testimonial} />
          </li>
        ))}
      </ul>
    </div>
  );
}
