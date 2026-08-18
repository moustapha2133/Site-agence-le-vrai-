"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { destinations, visaCategoryLabels } from "@/data/destinations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/motion/variants";

export function Destinations() {
  return (
    <section id="destinations" className="bg-sand-50 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Destinations"
          title="Vos destinations et types de visas"
          description="Nous accompagnons différents profils de voyageurs vers l'Europe, quel que soit le motif du séjour."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {destinations.map((destination) => (
            <motion.article
              key={destination.id}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 rounded-3xl border border-navy-900/8 bg-cream-50 p-7 shadow-card hover:border-gold-300"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900/5 text-navy-800">
                  <Globe2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {destination.country}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-ink-500">
                {destination.description}
              </p>
              <ul className="flex flex-wrap gap-2 pt-1">
                {destination.categories.map((category) => (
                  <li
                    key={category}
                    className="rounded-full border border-navy-900/10 bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
                  >
                    {visaCategoryLabels[category]}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center text-sm text-ink-500"
        >
          Les conditions dépendent du pays, du type de visa et de la
          situation personnelle du demandeur. Chaque dossier fait l&apos;objet
          d&apos;une orientation adaptée lors de votre consultation.
        </motion.p>
      </Container>
    </section>
  );
}
