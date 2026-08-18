"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site-config";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion/variants";

export function FinalCta() {
  return (
    <section
      id="rendez-vous"
      className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-24 text-cream-50 sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--color-gold-600)_0%,_transparent_65%)] opacity-20" />
        <svg className="absolute inset-0 h-full w-full text-cream-50/[0.05]" aria-hidden="true">
          <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display max-w-2xl text-3xl font-semibold sm:text-4xl"
          >
            Prêt à préparer votre projet de voyage ?
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-lg text-base leading-relaxed text-cream-50/70">
            Réservez votre consultation et avancez sereinement dans vos
            démarches de visa, étape par étape.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row">
            <Button
              href="/rendez-vous"
              size="lg"
              showIcon
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Prendre rendez-vous
            </Button>
            <Button
              href={whatsappLink("Bonjour, je souhaite prendre rendez-vous.")}
              external
              variant="whatsapp"
              size="lg"
            >
              Discuter sur WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
