"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/motion/variants";

export function Testimonials() {
  return (
    <section className="bg-sand-50 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que nos clients partagent de leur expérience"
          description="Exemples illustratifs à titre indicatif — à remplacer par de vrais témoignages validés par nos clients."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 rounded-3xl border border-navy-900/8 bg-cream-50 p-7 shadow-card"
            >
              <div className="flex gap-1" aria-label={`Note : ${testimonial.rating} sur 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-gold-500 text-gold-500"
                        : "fill-transparent text-navy-900/15"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-ink-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-navy-900/8 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-gold-400">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-xs text-ink-500">{testimonial.city}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <p className="text-center text-xs text-ink-500">
          * Témoignages fictifs présentés à titre d&apos;exemple, en attente de
          contenus réels et validés.
        </p>
      </Container>
    </section>
  );
}
