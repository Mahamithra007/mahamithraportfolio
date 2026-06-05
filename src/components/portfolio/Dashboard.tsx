import { useState, type ReactNode } from "react";
import profileAsset from "@/assets/profile.jpg.asset.json";

type TabId = "overview" | "competencies" | "initiatives" | "engineered";

const tabs: { id: TabId; label: string; index: string }[] = [
  { id: "overview", label: "Overview", index: "01" },
  { id: "competencies", label: "Core Competencies", index: "02" },
  { id: "initiatives", label: "Enterprise Initiatives", index: "03" },
  { id: "engineered", label: "Engineered Solutions", index: "04" },
];

const competencies = [
  {
    domain: "Governance",
    accent: "oklch(0.74 0.13 245)",
    tags: ["PMO Governance", "Portfolio Execution", "Lean Six Sigma Black Belt", "Change Management", "Stakeholder Management"],
  },
  {
    domain: "Financials",
    accent: "oklch(0.78 0.14 165)",
    tags: ["Financial Margin Analysis", "Vendor Governance & Procurement", "Global Rollouts", "Technical Tooling Transformation"],
  },
  {
    domain: "Systems",
    accent: "oklch(0.72 0.16 305)",
    tags: ["Google Apps Script", "Salesforce (Reporting)", "Tableau", "Monday.com", "Jira", "Confluence", "Smartsheet"],
  },
];

const initiatives = [
  {
    company: "RingCentral",
    title: "Enterprise Financial Automation & Governance",
    challenge: "Global margin calculation integrity at risk across distributed teams without enforced time-tracking discipline.",
    action: "Owned the Global Margin Calculator and spearheaded automation of the Level of Effort (LOE) Allocation Calculator (LAC) via Google Apps Script.",
    result: "Enforced architectural time-tracking standards, restoring margin integrity across every regional P&L cycle.",
  },
  {
    company: "RingCentral",
    title: "Technical Tooling & Workspace Migration",
    challenge: "Fragmented work surfaces and inconsistent automation across Smartsheet, Monday.com, and Salesforce ecosystems.",
    action: "Directed end-to-end Smartsheet → Monday.com migrations, architected unified cross-functional automation rules, and ran rigorous smoke testing for Salesforce rollouts.",
    result: "Unified the operating system of work and de-risked enterprise releases with repeatable QA discipline.",
  },
  {
    company: "DKMS Foundation",
    title: "Global Digital Transformation & Scaling",
    challenge: "Legacy donor workflows blocking scale across 7 international markets, each with distinct compliance demands.",
    action: "Headed multi-country e-registration platforms across 7 nations, transitioned legacy workflows, and authored foundational GDPR-compliant blueprint SOPs.",
    result: "Stood up a compliant, replicable global rollout playbook now used as the international scaling reference.",
  },
  {
    company: "DKMS Foundation",
    title: "Process Optimization & Post-Merger Integration",
    challenge: "Cross-border compliance drift between international HQs post-merger, with unaudited operational pipeline costs.",
    action: "Standardized cross-border compliance tracking and deployed analytical data structures inside Tableau.",
    result: "Cut operational pipeline costs by 40% while preserving strict audit readiness end-to-end.",
  },
];

export function Dashboard() {
  const [active, setActive] = useState<TabId>("overview");

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl flex flex-col gap-6">
        <HeroHeader />
        <TabDock active={active} onChange={setActive} />
        <div className="glass-panel rounded-3xl p-5 sm:p-8 lg:p-10 refract">
          <TabContent key={active} active={active} />
        </div>
        <footer className="flex items-center justify-between px-2 pt-4 text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-[0.22em]">© 2026 — All systems nominal</span>
          <span className="font-mono uppercase tracking-[0.22em]">v.2026 / executive build</span>
        </footer>
      </div>
    </div>
  );
}

function HeroHeader() {
  return (
    <header className="glass-panel rounded-3xl p-5 sm:p-7 lg:p-8 refract">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
        <div className="relative shrink-0">
          <div
            className="absolute -inset-1 rounded-2xl opacity-80 blur-md"
            style={{ background: "linear-gradient(135deg, oklch(0.74 0.13 245 / 0.55), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 overflow-hidden rounded-2xl border border-white/15 shadow-[0_0_40px_-8px_oklch(0.74_0.13_245_/_0.55)]">
            <img
              src={profileAsset.url}
              alt="Mahamithra SR"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 22%" }}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-dot" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">System Active</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
              Bangalore, IN · UTC+5:30
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.02]">
            MAHAMITHRA SR
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Global Operations Specialist <span className="text-accent/80">·</span> Lean Six Sigma Black Belt <span className="text-accent/80">·</span> 8+ Years
          </p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="group inline-flex items-center gap-2 self-stretch sm:self-auto rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm transition-all hover:border-accent hover:bg-accent/15 hover:shadow-[0_0_30px_-5px_oklch(0.74_0.13_245_/_0.45)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
          </svg>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]">Resume</span>
        </a>
      </div>
    </header>
  );
}

function TabDock({ active, onChange }: { active: TabId; onChange: (id: TabId) => void }) {
  return (
    <nav className="glass-panel rounded-2xl p-1.5 overflow-x-auto">
      <div className="flex items-center gap-1 min-w-max">
        {tabs.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={[
                "group relative flex items-center gap-2.5 rounded-xl px-3.5 sm:px-4 py-2.5 text-left transition-all",
                isActive ? "tab-active-glow" : "hover:bg-white/[0.04]",
              ].join(" ")}
            >
              <span className={`font-mono text-[10px] tracking-[0.22em] ${isActive ? "text-accent" : "text-muted-foreground/60"}`}>
                {t.index}
              </span>
              <span className={`text-[12px] sm:text-sm font-medium tracking-tight ${isActive ? "text-foreground" : "text-foreground/70"}`}>
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function TabContent({ active }: { active: TabId }) {
  return (
    <div className="fade-slide-in">
      {active === "overview" && <OverviewTab />}
      {active === "competencies" && <CompetenciesTab />}
      {active === "initiatives" && <InitiativesTab />}
      {active === "engineered" && <EngineeredTab />}
    </div>
  );
}

/* ---------- TABS ---------- */

function OverviewTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
      <Panel eyebrow="01 — Executive Summary" className="lg:col-span-8">
        <p className="text-base sm:text-lg leading-[1.75] text-foreground/85 text-balance">
          Over <span className="text-accent">8+ years</span> scaling digital systems, automating enterprise-grade financial tooling, and translating between technical infrastructure and the business it serves. I architect operating models that hold up under regulatory weight, cross-border complexity, and quarterly margin scrutiny <span className="text-accent/70">—</span> while quietly removing friction the rest of the organization never has to see.
        </p>
      </Panel>

      <Panel eyebrow="Signals" className="lg:col-span-4">
        <dl className="grid grid-cols-2 gap-3">
          <Stat k="8+" v="Years" />
          <Stat k="7" v="Markets" />
          <Stat k="40%" v="Cost cut" />
          <Stat k="LSSBB" v="Certified" />
        </dl>
      </Panel>

      <Panel eyebrow="02 — Philosophy" className="lg:col-span-12">
        <blockquote className="text-lg sm:text-xl font-light italic leading-relaxed text-foreground/90 text-balance">
          "Margin integrity is not a finance problem <span className="text-accent/80">—</span> it is an architecture problem. The work of operations is the systematic removal of friction through custom workflow engineering, defended at every border by clean regulatory compliance."
        </blockquote>
      </Panel>

      <Panel eyebrow="Contact" className="lg:col-span-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Contact label="Location" value="Bangalore, India" />
          <Contact label="Email" value="mahamithra007@gmail.com" href="mailto:mahamithra007@gmail.com" />
          <Contact label="Phone" value="+91 81974 22754" href="tel:+918197422754" />
          <Contact label="Network" value="LinkedIn ↗" href="https://www.linkedin.com/" external />
        </div>
        <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Credentials</span>
          <span className="text-sm text-foreground/85">Lean Six Sigma Black Belt</span>
          <a href="/lssbb-cert.pdf" target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent accent-link">verify ↗</a>
          <span className="text-sm text-foreground/85">· MSW (Medical & Psychiatry), St Joseph's University</span>
          <span className="text-sm text-foreground/85">· BA Historical Studies, Madras University</span>
          <span className="text-sm text-foreground/85">· UN Peace Messenger — International Mandate, Germany</span>
        </div>
      </Panel>
    </div>
  );
}

function CompetenciesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {competencies.map((c) => (
        <div
          key={c.domain}
          className="glass-card rounded-2xl p-6 flex flex-col gap-4"
          style={{ borderTop: `2px solid ${c.accent}` }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold tracking-tight">{c.domain}</h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: c.accent }}>
              / domain
            </span>
          </div>
          <div className="h-px w-full bg-white/5" />
          <div className="flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-foreground/85 transition-colors hover:text-foreground"
                style={{ borderColor: `color-mix(in oklab, ${c.accent} 25%, transparent)` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function InitiativesTab() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="flex flex-col gap-3">
      {initiatives.map((i, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={i.title}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="w-full text-left flex items-center gap-4 px-5 sm:px-6 py-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent w-8 shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <h3 className="text-sm sm:text-base font-semibold tracking-tight truncate">{i.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">— {i.company}</span>
              </div>
              <span className={`text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            {isOpen && (
              <div className="fade-slide-in px-5 sm:px-6 pb-6 pt-1 grid gap-3 border-t border-white/5">
                <Line label="Challenge" tone="muted">{i.challenge}</Line>
                <Line label="Action" tone="default">{i.action}</Line>
                <Line label="Result" tone="accent">{i.result}</Line>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function EngineeredTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Shelved */}
      <article className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col gap-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Product Profile</div>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight">Shelved</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
            Active UAT
          </span>
        </div>

        <dl className="grid grid-cols-2 gap-3 text-sm">
          <Meta k="Type" v="Custom Application" />
          <Meta k="Stage" v="UAT · Optimization" />
        </dl>

        <div className="h-px bg-white/5" />

        <Detail title="Overview">
          Designed and developed a standalone application from scratch, engineered to streamline complex organization frameworks and end-to-end tracking workflows.
        </Detail>
        <Detail title="Execution">
          Drove the product from architecture blueprinting through full development cycles. Currently managing live user acceptance testing, bug tracking, and optimization stages.
        </Detail>
        <Detail title="Operational Impact">
          Demonstrates full-lifecycle product ownership, hands-on application design architecture, and cross-functional technical capabilities.
        </Detail>
      </article>

      {/* Vendor Governance */}
      <article className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col gap-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Custom Architecture</div>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight">Automated Vendor Renewal Governance Engine</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Deployed
          </span>
        </div>

        <dl className="grid grid-cols-2 gap-3 text-sm">
          <Meta k="Stack" v="Google Apps Script" />
          <Meta k="Surface" v="Pipeline Governance" />
        </dl>

        <div className="h-px bg-white/5" />

        <Detail title="Overview">
          Disjointed legacy tracking of third-party vendor renewals was creating workflow bottlenecks and approval risks across global stakeholders.
        </Detail>
        <Detail title="Execution">
          A custom automation engine that programmatically captures, parses, and filters Pending Approvals — dynamically routing critical renewal life cycles across isolated tracking layers.
        </Detail>
        <Detail title="Operational Impact">
          Standardized strict process governance, delivered absolute pipeline visibility, and entirely eliminated manual tracking lag for cross-functional collaborators.
        </Detail>
      </article>
    </div>
  );
}

/* ---------- Primitives ---------- */

function Panel({ eyebrow, children, className = "" }: { eyebrow: string; children: ReactNode; className?: string }) {
  return (
    <section className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
        <span className="h-px flex-1 bg-white/5" />
      </div>
      <div>{children}</div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="text-xl font-semibold tracking-tight text-foreground">{k}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">{v}</div>
    </div>
  );
}

function Contact({ label, value, href, external }: { label: string; value: string; href?: string; external?: boolean }) {
  const inner = <span className="text-sm text-foreground/90">{value}</span>;
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">{label}</span>
      {href ? (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="accent-link self-start">
          {inner}
        </a>
      ) : inner}
    </div>
  );
}

function Line({ label, tone, children }: { label: string; tone: "muted" | "default" | "accent"; children: ReactNode }) {
  const color = tone === "muted" ? "text-muted-foreground" : tone === "accent" ? "text-accent" : "text-foreground/90";
  return (
    <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr] gap-4 items-baseline">
      <span className={`font-mono text-[10px] uppercase tracking-[0.22em] ${color}`}>{label}</span>
      <p className="text-sm text-foreground/85 leading-relaxed">{children}</p>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">{k}</div>
      <div className="text-sm text-foreground/90 mt-0.5">{v}</div>
    </div>
  );
}

function Detail({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h5 className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/90 mb-1.5">{title}</h5>
      <p className="text-sm leading-relaxed text-foreground/80">{children}</p>
    </div>
  );
}
