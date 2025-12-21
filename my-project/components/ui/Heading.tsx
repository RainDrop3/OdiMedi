import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  align?: "left" | "center" | "right";
  marginBottom?: boolean;
  className?: string;
  id?: string;
}

const sizeStyles: Record<NonNullable<HeadingProps["size"]>, string> = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
  "2xl": "text-4xl",
  "3xl": "text-5xl",
};

const alignStyles: Record<NonNullable<HeadingProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function Heading({
  children,
  level = 1,
  size = "2xl",
  align = "left",
  marginBottom = true,
  className,
  id,
}: HeadingProps) {
  const baseClass = cn(
    "font-semibold text-slate-900",
    sizeStyles[size],
    alignStyles[align],
    marginBottom && "mb-4",
    className
  );

  switch (level) {
    case 1:
      return (
        <h1 id={id} className={baseClass}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 id={id} className={baseClass}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 id={id} className={baseClass}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 id={id} className={baseClass}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 id={id} className={baseClass}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 id={id} className={baseClass}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 id={id} className={baseClass}>
          {children}
        </h1>
      );
  }
}
