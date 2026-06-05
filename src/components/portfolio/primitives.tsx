import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <header className="mb-8 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance">{title}</h2>
      </header>
      {children}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`card-hover rounded-xl border border-border bg-surface/40 p-6 sm:p-7 ${className}`}>
      {children}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-[11px] tracking-tight text-foreground/85 transition-colors hover:border-accent/60 hover:text-accent">
      {children}
    </span>
  );
}

export function CarLine({ label, children }: { label: "Challenge" | "Action" | "Result" | string; children: ReactNode }) {
  const tone =
    label === "Challenge" ? "text-muted-foreground" : label === "Action" ? "text-foreground/90" : "text-accent";
  return (
    <li className="flex gap-3 text-sm leading-relaxed">
      <span className={`mt-2 h-px w-5 shrink-0 ${label === "Result" ? "bg-accent" : "bg-border"}`} aria-hidden />
      <div>
        <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${tone} mr-2`}>{label}</span>
        <span className="text-foreground/85">{children}</span>
      </div>
    </li>
  );
}
