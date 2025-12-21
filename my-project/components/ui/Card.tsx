import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
  variant?: "default" | "muted" | "ghost";
  className?: string;
}

const paddingStyles: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-white shadow-sm",
  muted: "bg-slate-50 border border-slate-200",
  ghost: "bg-transparent border border-slate-200",
};

export default function Card({
  children,
  padding = "md",
  variant = "default",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-shadow",
        paddingStyles[padding],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
