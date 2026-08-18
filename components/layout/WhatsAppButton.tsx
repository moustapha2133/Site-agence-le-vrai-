"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink(
        "Bonjour, je souhaite obtenir des informations sur l'accompagnement visa.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Atlas Visa sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1fb958] sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 motion-reduce:hidden" />
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
    </motion.a>
  );
}
