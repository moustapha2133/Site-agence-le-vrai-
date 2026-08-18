import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "navy";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
        tone === "gold"
          ? "border-gold-300 bg-gold-50 text-gold-700"
          : "border-cream-50/30 bg-cream-50/10 text-cream-50",
        className,
      )}
    >
      {children}
    </span>
  );
}
