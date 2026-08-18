"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { easeOut, heroTitleLine } from "@/lib/motion/variants";

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -60],
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const bgShapeY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 80],
  );

  return (
    <section
      id="accueil"
      ref={sectionRef}
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Decorative background */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgShapeY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--color-gold-100)_0%,_transparent_70%)] opacity-70" />
        <div className="absolute right-[-10%] top-[20%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_var(--color-navy-100)_0%,_transparent_70%)] opacity-80" />
        <div className="absolute left-[-8%] bottom-[-5%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_var(--color-sand-200)_0%,_transparent_70%)] opacity-70" />
        <svg
          className="absolute inset-0 h-full w-full text-navy-900/[0.04]"
          aria-hidden="true"
        >
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <Container>
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          style={{ opacity: contentOpacity }}
          className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10"
        >
          <div className="flex flex-col items-start gap-6">
            <motion.span
              variants={badgeVariant}
              className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-700"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Votre projet de voyage commence ici
            </motion.span>

            <h1 className="font-display flex flex-col text-4xl font-semibold leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.4rem]">
              <motion.span variants={heroTitleLine}>
                Préparez votre demande de visa
              </motion.span>
              <motion.span variants={heroTitleLine} className="text-gold-600">
                avec sérénité
              </motion.span>
            </h1>

            <motion.p variants={fadeUp} className="max-w-lg text-lg leading-relaxed text-ink-700">
              Un accompagnement clair et personnalisé pour vos démarches de
              visa depuis l&apos;Algérie.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="#rendez-vous" size="lg" showIcon icon={<ArrowRight className="h-4 w-4" />}>
                Prendre rendez-vous
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                Découvrir nos services
              </Button>
            </motion.div>
          </div>

          <motion.div
            style={{ y: visualY }}
            initial={{ opacity: 0, x: 60, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
          >
            <HeroVisual />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
