"use client";

import { motion } from "framer-motion";
import { Icon } from "@/lib/icon-map";
import { whyUsPoints } from "@/data/why-us";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/motion/variants";

export function WhyUs() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600"
          >
            Pourquoi nous choisir
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display max-w-md text-3xl font-semibold text-navy-900 sm:text-4xl"
          >
            Une approche pensée pour votre tranquillité d&apos;esprit
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-md text-base leading-relaxed text-ink-500">
            Nous simplifions chaque étape de votre démarche pour que vous
            puissiez avancer avec confiance, sans perdre de temps ni vous
            perdre dans les formalités.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button href="#processus" variant="secondary" size="md">
              Voir comment ça marche
            </Button>
          </motion.div>
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          {whyUsPoints.map((point) => (
            <motion.li
              key={point.id}
              variants={fadeInUp}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 rounded-2xl border border-navy-900/8 bg-cream-100/60 p-5"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <Icon name={point.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-navy-900">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">
                  {point.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
