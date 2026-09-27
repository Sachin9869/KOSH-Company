import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'navy' | 'orange' | 'white' | 'outline' | 'ghost-light';
type Size = 'sm' | 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  navy: 'bg-navy text-white shadow-cta hover:bg-navy-dark',
  orange: 'bg-orange text-white shadow-cta-orange hover:bg-orange-dark hover:shadow-cta-orange-lg',
  white: 'bg-white text-navy shadow-cta hover:shadow-elevated',
  outline: 'border border-navy/25 bg-white text-navy hover:border-navy hover:bg-navy/5',
  'ghost-light':
    'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
};

const SIZES: Record<Size, string> = {
  sm: 'h-10 px-5 text-nav rounded-lg',
  md: 'h-12 px-6 text-btn rounded-[10px]',
  lg: 'h-14 px-7 text-btn rounded-xl',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

function classesFor({ variant = 'navy', size = 'md', fullWidth, className }: BaseProps) {
  return cn(
    'group/btn inline-flex items-center justify-center gap-2 font-poppins font-semibold',
    'transition-[transform,background-color,box-shadow] duration-200 ease-out-expo',
    'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    'disabled:pointer-events-none disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    fullWidth && 'w-full',
    className,
  );
}

/** Anchor-flavoured CTA. Internal hashes use next/link for prefetch-free scroll. */
export function KoshButtonLink({
  href,
  external,
  onClick,
  ...props
}: BaseProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const { icon, iconRight, children } = props;
  const content = (
    <>
      {icon}
      {children}
      {iconRight}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classesFor(props)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classesFor(props)}>
      {content}
    </Link>
  );
}

/** Button-flavoured CTA for form submits and in-page toggles. */
export function KoshButton({
  type = 'button',
  ...props
}: BaseProps & Omit<ComponentProps<'button'>, 'className' | 'children'>) {
  const { icon, iconRight, children, variant, size, fullWidth, className, ...rest } = props;
  return (
    <button
      type={type}
      className={classesFor({ variant, size, fullWidth, className, children })}
      {...rest}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
}
