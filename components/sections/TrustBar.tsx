"use client";

import { motion } from "framer-motion";
import { Icon } from "@/lib/icon-map";
import { trustPoints } from "@/data/trust-points";
import { Container } from "@/components/ui/Container";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/motion/variants";

export function TrustBar() {
  return (
    <section aria-label="Ce qui nous distingue" className="border-y border-navy-900/8 bg-cream-100/70 py-8">
      <Container>
        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between"
        >
          {trustPoints.map((point) => (
            <motion.li
              key={point.id}
              variants={fadeInUp}
              className="flex items-center gap-2.5 text-sm font-medium text-ink-700"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/5 text-navy-800">
                <Icon name={point.icon} className="h-4 w-4" />
              </span>
              {point.label}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
