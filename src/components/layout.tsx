import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ id, className, children }: { id?: string, className?: string, children: ReactNode }) {
  return (
    <div id={id} className={cn("mx-auto w-full max-w-5xl px-6 md:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
}
