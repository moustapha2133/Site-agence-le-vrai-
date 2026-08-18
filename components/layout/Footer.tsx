import { Compass, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import {
  affiliationDisclaimer,
  contactInfo,
  legalNotice,
  navItems,
  siteConfig,
  socialLinks,
  whatsappLink,
} from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-cream-50/80">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <a href="#accueil" className="flex items-center gap-2.5 font-display text-lg font-semibold text-cream-50">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
              <Compass className="h-5 w-5" aria-hidden="true" />
            </span>
            {siteConfig.name}
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-cream-50/60">
            {siteConfig.tagline}. Un accompagnement clair et humain pour vos
            démarches de visa depuis l&apos;Algérie.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href={socialLinks.facebook}
              aria-label="Atlas Visa sur Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <SocialIcon name="facebook" className="h-4 w-4 text-sm" />
            </a>
            <a
              href={socialLinks.instagram}
              aria-label="Atlas Visa sur Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <SocialIcon name="instagram" className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              aria-label="Atlas Visa sur LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <SocialIcon name="linkedin" className="h-4 w-4 text-xs" />
            </a>
          </div>
        </div>

        <nav aria-label="Liens du site" className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50">
            Navigation
          </h3>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-cream-50/60 transition-colors hover:text-gold-400">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50">
            Contact
          </h3>
          <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-2.5 text-sm text-cream-50/60 transition-colors hover:text-gold-400">
            <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phoneDisplay.replace(/\s/g, "")}`} className="flex items-start gap-2.5 text-sm text-cream-50/60 transition-colors hover:text-gold-400">
            <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 text-sm text-cream-50/60 transition-colors hover:text-gold-400"
          >
            <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            WhatsApp : {contactInfo.phoneDisplay}
          </a>
          <p className="flex items-start gap-2.5 text-sm text-cream-50/60">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {contactInfo.address}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50">
            Informations
          </h3>
          <a href="/mentions-legales" className="text-sm text-cream-50/60 transition-colors hover:text-gold-400">
            Mentions légales
          </a>
          <a href="/confidentialite" className="text-sm text-cream-50/60 transition-colors hover:text-gold-400">
            Politique de confidentialité
          </a>
        </div>
      </Container>

      <div className="border-t border-cream-50/10">
        <Container className="flex flex-col gap-3 py-6 text-xs leading-relaxed text-cream-50/50">
          <p>{legalNotice}</p>
          <p>{affiliationDisclaimer}</p>
          <p className="pt-2 text-cream-50/40">
            &copy; {year} {siteConfig.name}. Tous droits réservés.
          </p>
        </Container>
      </div>
    </footer>
  );
}
