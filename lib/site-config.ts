import type { ContactInfo, NavItem, SocialLinks } from "@/types";

/**
 * Single source of truth for branding, navigation and contact details.
 * Update this file to rebrand the agency — name, texts and coordinates
 * are not hard-coded anywhere else in the UI.
 */
export const siteConfig = {
  name: "Atlas Visa",
  shortName: "Atlas",
  tagline: "Accompagnement visa depuis l'Algérie",
  description:
    "Préparez votre demande de visa avec un accompagnement clair et personnalisé. Réservez votre consultation avec Atlas Visa depuis l'Algérie.",
  seoTitle: "Atlas Visa | Accompagnement visa Espagne et Europe depuis l'Algérie",
  locale: "fr-DZ",
  url: "https://www.atlas-visa.dz",
} as const;

export const navItems: NavItem[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Comment ça marche", href: "#processus" },
  { label: "FAQ", href: "#faq" },
];

export const contactInfo: ContactInfo = {
  phoneDisplay: "+213 555 00 00 00",
  whatsappNumber: "213555000000",
  email: "contact@atlas-visa.dz",
  address: "12 Rue Didouche Mourad, Alger, Algérie",
};

export const socialLinks: SocialLinks = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
};

export const legalNotice =
  "Atlas Visa est un service privé d'accompagnement administratif. La décision finale concernant l'octroi d'un visa appartient exclusivement aux autorités consulaires compétentes.";

export const affiliationDisclaimer =
  "Atlas Visa n'est ni une ambassade, ni un consulat, ni un organisme gouvernemental, et n'agit en aucun cas comme représentant officiel des autorités consulaires. Nous accompagnons nos clients dans la préparation de leurs démarches administratives.";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contactInfo.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
