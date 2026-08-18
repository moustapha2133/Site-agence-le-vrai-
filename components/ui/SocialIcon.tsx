type SocialName = "facebook" | "instagram" | "linkedin";

/**
 * Generic, non-trademarked glyphs for social links — a monogram for
 * Facebook/LinkedIn and a simple camera outline for Instagram, styled to
 * match the site's stroke-icon aesthetic rather than reproducing brand marks.
 */
export function SocialIcon({ name, className }: { name: SocialName; className?: string }) {
  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.6" fill="currentColor" />
      </svg>
    );
  }

  return (
    <span className={`flex items-center justify-center font-bold leading-none ${className ?? ""}`}>
      {name === "facebook" ? "f" : "in"}
    </span>
  );
}
