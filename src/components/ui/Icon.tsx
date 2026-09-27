import {
  Camera,
  CheckCircle,
  CreditCard,
  Heart,
  LayoutGrid,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingDown,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/**
 * Icon registry. Content in `constants.ts` names icons as strings so the data
 * layer stays serialisable; this maps those names to Lucide components.
 */
export const ICONS = {
  Camera,
  CheckCircle,
  CreditCard,
  Heart,
  LayoutGrid,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingDown,
  TrendingUp,
  Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name];
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
