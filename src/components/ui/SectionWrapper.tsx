import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionWrapperProps = {
  id?: string;
  as?: ElementType;
  /** Vertical rhythm: sections are 96px on desktop, tighter on mobile. */
  spacing?: 'none' | 'tight' | 'default';
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  'aria-labelledby'?: string;
};

const SPACING = {
  none: '',
  tight: 'py-14 md:py-20',
  default: 'py-16 md:py-24',
} as const;

/** Section shell: id anchor, semantic tag, vertical rhythm, and page gutter. */
export function SectionWrapper({
  id,
  as: Tag = 'section',
  spacing = 'default',
  className,
  containerClassName,
  children,
  ...rest
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn('relative', SPACING[spacing], className)} {...rest}>
      <div className={cn('kosh-container', containerClassName)}>{children}</div>
    </Tag>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowTone?: 'blue' | 'orange';
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
  id?: string;
  className?: string;
};

/** Eyebrow + headline + subtitle block used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  eyebrowTone = 'blue',
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        align === 'center' && 'max-w-3xl',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'section-eyebrow mb-3',
            eyebrowTone === 'orange' ? 'text-orange' : 'text-blue-brand',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'text-balance text-h1-sm md:text-h1',
          tone === 'dark' ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-pretty text-body md:text-body-lg',
            align === 'center' && 'mx-auto max-w-xl',
            tone === 'dark' ? 'text-white/70' : 'text-ink-secondary',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
