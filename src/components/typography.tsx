import type { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-semibold tracking-tight text-balance">
      {children}
    </h1>
  );
}

export function Text({ children }: { children: ReactNode }) {
  return (
    <p className="text-xl">
      {children}
    </p>
  );
}