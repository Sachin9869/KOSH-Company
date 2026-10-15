'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, MapPin, Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionWrapper';
import { NEARBY_LISTINGS } from '@/lib/constants';
import { VIEWPORT, fadeUp, staggerContainer } from '@/lib/motion';

/**
 * "Popular near you" — real listings from the app, with their photos, in the
 * same card style the buyer app uses.
 */
export function NearbySection() {
  return (
    <section className="bg-surface-page py-16 md:py-24" aria-labelledby="nearby-heading">
      <div className="kosh-container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="nearby-heading"
            eyebrow="On KOSH right now"
            title="Popular near you"
            subtitle="Fresh bread, party trays, a yard cleanup or a basement suite — all from people in your neighbourhood."
            align="left"
            className="max-w-2xl"
          />
          <Link
            href="#download"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mint px-4 py-2.5 text-nav font-semibold text-navy transition-colors hover:bg-orange-tint"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            See them on the map
          </Link>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
        >
          {NEARBY_LISTINGS.map((listing) => (
            <motion.li
              key={listing.title}
              variants={fadeUp}
              className="group overflow-hidden rounded-[20px] border border-hairline bg-white shadow-card transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/images/${listing.image}.webp`}
                  alt={listing.alt}
                  fill
                  sizes="(min-width: 1024px) 300px, 50vw"
                  className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-navy shadow-card">
                  {listing.tag}
                </span>
                <span
                  className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-navy shadow-card"
                  aria-hidden="true"
                >
                  <Heart className="h-4 w-4" />
                </span>
              </div>
              <div className="p-3.5 sm:p-4">
                <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-ink sm:line-clamp-1 sm:text-base">
                  {listing.title}
                </h3>
                <p className="mt-0.5 line-clamp-1 text-[12px] text-ink-secondary sm:text-[13px]">
                  {listing.seller} · {listing.city}
                </p>
                <div className="mt-2.5 flex items-center justify-between gap-2">
                  <p className="text-[15px] font-extrabold text-navy sm:text-base">
                    {listing.price}
                  </p>
                  {'rating' in listing && (
                    <p className="flex items-center gap-1 text-[12px] font-semibold text-ink">
                      <Star className="h-3.5 w-3.5 fill-apricot text-apricot" aria-hidden="true" />
                      <span className="sr-only">Rated</span>
                      {listing.rating}
                    </p>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
