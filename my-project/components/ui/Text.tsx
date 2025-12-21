import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface TextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "default" | "muted" | "accent";
  align?: "left" | "center" | "right";
  marginBottom?: boolean;
  className?: string;
}

const sizeStyles: Record<NonNullable<TextProps["size"]>, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const colorStyles: Record<NonNullable<TextProps["color"]>, string> = {
  default: "text-slate-900",
  muted: "text-slate-600",
  accent: "text-blue-600",
};

const alignStyles: Record<NonNullable<TextProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function Text({
  children,
  size = "md",
  color = "default",
  align = "left",
  marginBottom = false,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        sizeStyles[size],
        colorStyles[color],
        alignStyles[align],
        marginBottom && "mb-4",
        className
      )}
    >
      {children}
    </p>
  );
}
