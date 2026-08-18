"use client";

import { motion } from "framer-motion";
import { Icon } from "@/lib/icon-map";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/motion/variants";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Nos services"
          title="Un accompagnement pensé pour simplifier vos démarches"
          description="Quatre piliers pour aborder votre demande de visa avec méthode et sérénité."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-4 rounded-3xl border border-navy-900/8 bg-cream-50 p-7 shadow-card transition-[border-color,box-shadow] hover:border-gold-300"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-semibold text-navy-900">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
