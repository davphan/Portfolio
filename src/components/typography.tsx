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

export function SectionHeader({ title, description }: { title: ReactNode, description: string }) {
  return (
    <div className="sticky top-16 z-20 relative flex w-full flex-col items-center gap-4 bg-background/95 pt-6 pb-4 text-center backdrop-blur-sm">
      <SectionTitle>{title}</SectionTitle>
      <Text>{description}</Text>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-full h-8 bg-background/95 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
    </div>
  );
}