import type { ReactNode } from "react";

export function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-center font-heading text-5xl md:text-6xl font-bold tracking-tight text-balance">
      {children}
    </h1>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="scroll-m-20 text-center font-heading text-4xl md:text-5xl font-semibold tracking-tight text-balance">
      {children}
    </h2>
  );
}

export function Text({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl text-xl text-muted-foreground">
      {children}
    </p>
  );
}