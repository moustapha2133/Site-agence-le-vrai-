"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * reducedMotion="user" makes Framer Motion honor prefers-reduced-motion
 * globally: transform-based animations collapse to instant/opacity-only,
 * nothing infinite keeps looping, and content is never hidden.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
