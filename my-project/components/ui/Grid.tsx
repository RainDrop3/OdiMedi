import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface GridProps {
  children: ReactNode;
  columns?: string;
  gap?: string;
  className?: string;
}

export default function Grid({
  children,
  columns = "grid-cols-1 md:grid-cols-2",
  gap = "gap-6",
  className,
}: GridProps) {
  return (
    <div className={cn("grid", columns, gap, className)}>
      {children}
    </div>
  );
}
