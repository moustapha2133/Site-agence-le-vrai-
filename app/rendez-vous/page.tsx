import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contactInfo, siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Prendre rendez-vous | ${siteConfig.name}`,
  description:
    "Réservez votre consultation avec Atlas Visa. La prise de rendez-vous en ligne complète arrive bientôt.",
};

/**
 * Placeholder booking page. The full calendar / slot-selection flow
 * (backed by an API and account system) will replace this screen — see
 * lib/services/appointment-service.ts.
 */
export default function RendezVousPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream-50 px-5 py-24 text-center">
      <Container className="flex max-w-xl flex-col items-center gap-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
          <CalendarClock className="h-7 w-7" aria-hidden="true" />
        </span>
        <h1 className="font-display text-3xl font-semibold text-navy-900">
          La prise de rendez-vous en ligne arrive bientôt
        </h1>
        <p className="text-base leading-relaxed text-ink-500">
          Notre espace de réservation complet est en cours de préparation.
          En attendant, contactez-nous directement sur WhatsApp ou par
          téléphone pour planifier votre consultation avec {siteConfig.name}.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            href={whatsappLink("Bonjour, je souhaite prendre rendez-vous.")}
            external
            variant="whatsapp"
            size="lg"
          >
            Discuter sur WhatsApp
          </Button>
          <Button href={`tel:${contactInfo.phoneDisplay.replace(/\s/g, "")}`} variant="secondary" size="lg">
            {contactInfo.phoneDisplay}
          </Button>
        </div>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Retour à l&apos;accueil
        </Link>
      </Container>
    </main>
  );
}
