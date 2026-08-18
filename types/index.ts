import type { IconName } from "@/lib/icon-map";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export type VisaCategory =
  | "touristique"
  | "familial"
  | "etudiant"
  | "professionnel";

export interface Destination {
  id: string;
  country: string;
  /** ISO 3166-1 alpha-2 code, used for flag rendering. */
  code: string;
  description: string;
  categories: VisaCategory[];
}

export interface WhyUsPoint {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  icon: IconName;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
  /** Always true for the current demo dataset — surfaced in the UI. */
  isExample: true;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustPoint {
  id: string;
  icon: IconName;
  label: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  /** Digits only, international format, used for the wa.me link. */
  whatsappNumber: string;
  email: string;
  address: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
}
