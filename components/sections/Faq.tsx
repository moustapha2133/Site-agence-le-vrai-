"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordionItem } from "@/components/sections/FaqAccordionItem";
import { fadeInUp, viewportOnce } from "@/lib/motion/variants";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Vos questions, nos réponses"
          description="Retrouvez les réponses aux questions les plus fréquentes sur notre accompagnement."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto w-full max-w-3xl"
        >
          {faqItems.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
