"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types";

export function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  return (
    <div className="border-b border-navy-900/10">
      <h3>
        <button
          type="button"
          id={`faq-trigger-${item.id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${item.id}`}
          onClick={() => {
            if (contentRef.current) setHeight(contentRef.current.scrollHeight);
            onToggle();
          }}
          className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-700"
        >
          <span className="font-display text-base font-semibold text-navy-900 sm:text-lg">
            {item.question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900/5 text-navy-800"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        </button>
      </h3>
      <motion.div
        id={`faq-panel-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
        initial={false}
        animate={{ height: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="pb-5 pr-10 text-sm leading-relaxed text-ink-500">
          {item.answer}
        </div>
      </motion.div>
    </div>
  );
}
