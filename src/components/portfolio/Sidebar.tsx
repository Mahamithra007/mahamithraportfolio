import profileAsset from "@/assets/profile.jpg.asset.json";

const navItems = [
  { id: "summary", label: "Summary" },
  { id: "philosophy", label: "Philosophy" },
  { id: "competencies", label: "Competencies" },
  { id: "engineered", label: "Engineered Solutions" },
  { id: "initiatives", label: "Key Initiatives" },
  { id: "credentials", label: "Credentials" },
];

export function Sidebar() {
  return (
    <aside className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-[380px] xl:w-[420px] bg-[var(--color-sidebar-bg)] lg:border-r border-border lg:overflow-y-auto">
      <div className="px-7 py-10 lg:px-10 lg:py-14 flex flex-col gap-10 lg:min-h-screen">
        {/* Profile */}
        <div className="flex items-start gap-5 lg:flex-col lg:items-stretch lg:gap-8 fade-up">
          <div className="relative shrink-0">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-transparent" aria-hidden />
            <div className="relative h-20 w-20 lg:h-44 lg:w-44 overflow-hidden rounded-2xl border border-border">
              <img
                src={profileAsset.url}
                alt="Mahamithra SR"
                width={768}
                height={896}
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 22%" }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface/60 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-dot" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                System Active
              </span>
            </div>
            <h1 className="text-2xl lg:text-[34px] font-bold leading-[1.05] tracking-tight">
              MAHAMITHRA<br className="hidden lg:block" /> SR
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Global Operations Specialist <span className="text-accent/70">—</span> Lean Six Sigma Black Belt
            </p>
          </div>
        </div>

        {/* Nav (desktop only) */}
        <nav className="hidden lg:flex flex-col gap-1 border-t border-border pt-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center gap-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="h-px w-6 bg-border transition-all group-hover:w-10 group-hover:bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/resume.pdf"
          download
          className="group inline-flex items-center justify-between gap-3 rounded-lg border border-accent/40 bg-accent/10 px-5 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/15 hover:shadow-[0_0_30px_-5px_oklch(0.74_0.13_245_/_0.4)]"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Download Resume PDF</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent transition-transform group-hover:translate-y-0.5">
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
        </a>

        {/* Contact */}
        <div className="mt-auto grid grid-cols-1 gap-5 border-t border-border pt-8 text-xs">
          <ContactRow label="Location" value="Bangalore, India" />
          <ContactRow label="Network" value="LinkedIn" href="https://www.linkedin.com/" external />
          <ContactRow label="Communications" value="mahamithra007@gmail.com" href="mailto:mahamithra007@gmail.com" />
          <ContactRow label="Contact" value="+91 81974 22754" href="tel:+918197422754" />
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          © 2026 — All systems nominal
        </p>
      </div>
    </aside>
  );
}

function ContactRow({ label, value, href, external }: { label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <span className="text-foreground/90 group-hover:text-accent transition-colors">{value}</span>
  );
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">{label}</span>
      {href ? (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group inline-flex items-center gap-1.5">
          {content}
          {external && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-accent">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          )}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
