"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, FileCheck2, MapPin } from "lucide-react";

const floatingCards = [
  {
    id: "dossier-verifie",
    label: "Dossier vérifié",
    icon: FileCheck2,
    className: "left-[-8%] top-[14%] sm:left-[-12%]",
    duration: 6.5,
    delay: 0,
  },
  {
    id: "rdv-confirme",
    label: "Rendez-vous confirmé",
    icon: CalendarCheck,
    className: "right-[-6%] top-[6%] sm:right-[-10%]",
    duration: 7.5,
    delay: 0.6,
  },
  {
    id: "visa-espagne",
    label: "Visa Espagne",
    icon: MapPin,
    className: "right-[-4%] bottom-[10%] sm:right-[-8%]",
    duration: 5.5,
    delay: 1.1,
  },
];

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg">
      {/* Decorative flight path */}
      <svg
        viewBox="0 0 400 500"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-navy-300/60"
        aria-hidden="true"
      >
        <path
          d="M20 420 C 120 380, 140 240, 90 160 C 60 110, 120 60, 220 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        <circle cx="20" cy="420" r="4" fill="currentColor" />
        <circle cx="220" cy="40" r="4" fill="currentColor" />
      </svg>

      {/* Main appointment card mockup */}
      <div className="glass-panel absolute inset-6 flex flex-col justify-between rounded-3xl p-6 shadow-soft sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              Votre consultation
            </p>
            <p className="font-display text-lg font-semibold text-navy-900">
              Espace rendez-vous
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-gold-400">
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 text-center">
          {Array.from({ length: 21 }).map((_, i) => {
            const isSelected = i === 15;
            return (
              <div
                key={i}
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] sm:h-8 sm:w-8 ${
                  isSelected
                    ? "bg-gold-500 font-semibold text-navy-950"
                    : "text-ink-500"
                }`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-2xl bg-navy-900 px-4 py-3 text-cream-50">
            <CalendarCheck className="h-5 w-5 text-gold-400" aria-hidden="true" />
            <div>
              <p className="text-xs text-cream-50/70">Prochaine étape</p>
              <p className="text-sm font-semibold">Consultation — 24 sept., 10h00</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-navy-900/10 bg-white/70 px-4 py-3">
            <FileCheck2 className="h-5 w-5 text-navy-700" aria-hidden="true" />
            <p className="text-sm font-medium text-ink-700">3 documents à préparer</p>
          </div>
        </div>
      </div>

      {/* Floating status cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.id}
          className={`glass-panel absolute z-10 hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-card sm:flex ${card.className}`}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 1, scale: 1, y: [0, -8, 0] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.5, delay: 0.9 + card.delay }
              : {
                  opacity: { duration: 0.5, delay: 0.9 + card.delay },
                  scale: { duration: 0.5, delay: 0.9 + card.delay },
                  y: {
                    duration: card.duration,
                    delay: 1 + card.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
        >
          <card.icon className="h-4 w-4 text-gold-600" aria-hidden="true" />
          <span className="text-xs font-semibold text-navy-900">{card.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
