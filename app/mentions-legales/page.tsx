import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  affiliationDisclaimer,
  contactInfo,
  legalNotice,
  siteConfig,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Mentions légales | ${siteConfig.name}`,
  description: `Mentions légales de ${siteConfig.name}.`,
};

export default function MentionsLegalesPage() {
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
          Mentions légales
        </h1>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-ink-700">
          <p>{legalNotice}</p>
          <p>{affiliationDisclaimer}</p>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-navy-900">
              Éditeur du site
            </h2>
            <p>
              {siteConfig.name} — {contactInfo.address}
              <br />
              Email : {contactInfo.email}
              <br />
              Téléphone : {contactInfo.phoneDisplay}
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-navy-900">
              Activité
            </h2>
            <p>
              {siteConfig.name} propose un service privé d&apos;accompagnement
              administratif dans la préparation de demandes de visa et de
              rendez-vous consulaires. Ce contenu est fourni à titre
              d&apos;exemple et doit être complété avec les informations
              légales exactes de la structure exploitante.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
