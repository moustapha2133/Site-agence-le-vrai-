import {
  CalendarCheck,
  FileSearch,
  MessageCircleHeart,
  ListChecks,
  MapPin,
  Compass,
  Clock,
  Users,
  ShieldCheck,
  Headset,
  Plane,
  FileCheck2,
  ClipboardList,
  Send,
  Star,
  Globe2,
  Languages,
  CalendarClock,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  CalendarCheck,
  FileSearch,
  MessageCircleHeart,
  ListChecks,
  MapPin,
  Compass,
  Clock,
  Users,
  ShieldCheck,
  Headset,
  Plane,
  FileCheck2,
  ClipboardList,
  Send,
  Star,
  Globe2,
  Languages,
  CalendarClock,
  HelpCircle,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Component = iconMap[name];
  return <Component className={className} aria-hidden="true" strokeWidth={1.75} />;
}
