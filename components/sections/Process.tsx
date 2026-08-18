"use client";

import { motion } from "framer-motion";
import { Icon } from "@/lib/icon-map";
import { processSteps } from "@/data/process-steps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion/variants";

export function Process() {
  return (
    <section id="processus" className="bg-navy-950 py-24 text-cream-50 sm:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Comment ça marche"
          title={
            <span className="text-cream-50">Votre démarche en 4 étapes simples</span>
          }
          description={
            <span className="text-cream-50/70">
              Un parcours structuré, du choix de votre destination jusqu&apos;au
              dépôt de votre dossier.
            </span>
          }
        />

        <div className="relative">
          {/* Horizontal progress line — desktop */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-gold-500/60 via-gold-400/40 to-transparent lg:block"
          />
          {/* Vertical progress line — mobile/tablet */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-gold-500/60 via-gold-400/40 to-transparent lg:hidden"
          />

          <motion.ol
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6"
          >
            {processSteps.map((step) => (
              <motion.li key={step.id} variants={fadeInUp} className="flex gap-5 lg:flex-col lg:gap-4">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-navy-900 font-display text-lg font-semibold text-gold-400">
                  {step.step}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cream-50/10 text-gold-300">
                    <Icon name={step.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-cream-50">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream-50/65">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
