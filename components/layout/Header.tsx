"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { navItems, siteConfig } from "@/lib/site-config";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
        animate={{
          backgroundColor: isScrolled ? "rgba(253, 251, 247, 0.85)" : "rgba(253, 251, 247, 0)",
          borderColor: isScrolled ? "rgba(11, 26, 51, 0.08)" : "rgba(11, 26, 51, 0)",
          boxShadow: isScrolled
            ? "0 10px 30px -18px rgba(11, 26, 51, 0.25)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ backdropFilter: isScrolled ? "blur(16px)" : "none" }}
      >
        <Container>
          <motion.div
            className="flex items-center justify-between"
            animate={{ paddingTop: isScrolled ? 12 : 20, paddingBottom: isScrolled ? 12 : 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#accueil"
              className="flex items-center gap-2.5 font-display text-xl font-semibold text-navy-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </span>
              {siteConfig.name}
            </a>

            <nav
              aria-label="Navigation principale"
              className="hidden items-center gap-8 lg:flex"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-ink-700 transition-colors hover:text-navy-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="#rendez-vous" size="md">
                Prendre rendez-vous
              </Button>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 lg:hidden"
              aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              <span className="relative flex h-5 w-6 flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full rounded-full bg-current"
                  animate={{ rotate: isMobileOpen ? 45 : 0, y: isMobileOpen ? 8 : 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block h-0.5 w-full rounded-full bg-current"
                  animate={{ opacity: isMobileOpen ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block h-0.5 w-full rounded-full bg-current"
                  animate={{ rotate: isMobileOpen ? -45 : 0, y: isMobileOpen ? -8 : 0 }}
                  transition={{ duration: 0.25 }}
                />
              </span>
            </button>
          </motion.div>
        </Container>
      </motion.header>

      <MobileNav
        id="mobile-nav"
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
