import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { contactInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Politique de confidentialité | ${siteConfig.name}`,
  description: `Politique de confidentialité de ${siteConfig.name}.`,
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-cream-50 py-20">
      <Container className="max-w-2xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Retour à l&apos;accueil
        </Link>
        <h1 className="font-display text-3xl font-semibold text-navy-900">
          Politique de confidentialité
        </h1>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-ink-700">
          <p>
            Cette page décrit, à titre d&apos;exemple, comment {siteConfig.name}{" "}
            traite les informations transmises via ce site (formulaire de
            contact, prise de rendez-vous, échanges WhatsApp). Ce contenu
            doit être remplacé par une politique de confidentialité conforme
            à la réglementation applicable avant la mise en production.
          </p>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-navy-900">
              Données collectées
            </h2>
            <p>
              Nom, coordonnées de contact et informations relatives à votre
              demande de visa, uniquement dans le but de vous fournir un
              accompagnement personnalisé.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-navy-900">
              Utilisation des données
            </h2>
            <p>
              Les informations transmises servent exclusivement à organiser
              votre consultation et à assurer le suivi de votre dossier. Elles
              ne sont ni vendues, ni partagées avec des tiers non autorisés.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-navy-900">
              Contact
            </h2>
            <p>
              Pour toute question relative à vos données personnelles,
              contactez-nous à {contactInfo.email}.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
