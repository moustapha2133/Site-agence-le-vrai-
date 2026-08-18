"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/lib/site-config";
import { easeOut } from "@/lib/motion/variants";

const panelVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
};

export function MobileNav({
  id,
  isOpen,
  onClose,
}: {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          className="fixed inset-0 z-40 flex flex-col bg-cream-50/98 pt-24 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={panelVariants}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="absolute right-5 top-6 flex h-10 w-10 items-center justify-center rounded-lg text-navy-900"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <nav
            aria-label="Navigation mobile"
            className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                variants={itemVariants}
                className="font-display text-3xl font-medium text-navy-900"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div variants={itemVariants} className="mt-4">
              <Button href="#rendez-vous" size="lg" onClick={onClose}>
                Prendre rendez-vous
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
