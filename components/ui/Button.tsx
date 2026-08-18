"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 shadow-[0_12px_30px_-10px_rgba(191,140,43,0.55)] hover:from-gold-400 hover:to-gold-500 focus-visible:outline-gold-600",
  secondary:
    "bg-white/70 text-navy-900 border border-navy-900/15 hover:bg-white hover:border-navy-900/25 focus-visible:outline-navy-700",
  ghost:
    "bg-transparent text-cream-50 border border-cream-50/30 hover:bg-cream-50/10 focus-visible:outline-cream-50",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb958] focus-visible:outline-[#1fb958]",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const sharedClasses =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 outline-offset-4 focus-visible:outline-2 min-h-11";

/** Drag/animation DOM handlers clash with Framer Motion's own prop types. */
type MotionSafe<T> = Omit<
  T,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  showIcon?: boolean;
  icon?: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  MotionSafe<ButtonHTMLAttributes<HTMLButtonElement>> & { href?: undefined };

type ButtonAsLink = CommonProps &
  MotionSafe<AnchorHTMLAttributes<HTMLAnchorElement>> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function ButtonContent({ children, showIcon, icon }: Pick<CommonProps, "children" | "showIcon" | "icon">) {
  return (
    <>
      <span>{children}</span>
      {showIcon && (
        <span className="inline-flex transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          {icon ?? <ArrowRight className="h-4 w-4" />}
        </span>
      )}
    </>
  );
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", showIcon = false, icon, className, ...rest } = props;

  const classes = cn(sharedClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...linkRest } = rest as MotionSafe<AnchorHTMLAttributes<HTMLAnchorElement>> & {
      href: string;
      external?: boolean;
    };

    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          {...linkRest}
        >
          <ButtonContent showIcon={showIcon} icon={icon}>
            {children}
          </ButtonContent>
        </motion.a>
      );
    }

    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...linkRest}
      >
        <ButtonContent showIcon={showIcon} icon={icon}>
          {children}
        </ButtonContent>
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(rest as MotionSafe<ButtonHTMLAttributes<HTMLButtonElement>>)}
    >
      <ButtonContent showIcon={showIcon} icon={icon}>
        {children}
      </ButtonContent>
    </motion.button>
  );
}
