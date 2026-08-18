"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleId,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  titleId?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        id={titleId}
        variants={fadeInUp}
        className="font-display max-w-2xl text-3xl font-semibold text-navy-900 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="max-w-xl text-base leading-relaxed text-ink-500"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
