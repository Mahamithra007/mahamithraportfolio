import { Section, Card, Tag, CarLine } from "./primitives";

const competencies = [
  {
    group: "Program & Portfolio Governance",
    tags: ["PMO Governance", "Portfolio Execution", "Lean Six Sigma Black Belt", "Change Management", "Stakeholder Management"],
  },
  {
    group: "Operational Infrastructure & Financials",
    tags: ["Technical Tooling Transformation", "Financial Margin Analysis", "Global Rollouts", "Vendor Governance & Procurement"],
  },
  {
    group: "Technical Automations & Systems",
    tags: ["Google Apps Script", "Salesforce (Reporting)", "Tableau", "Monday.com", "Jira", "Confluence", "Smartsheet"],
  },
];

const initiatives = [
  {
    company: "RingCentral",
    title: "Enterprise Financial Automation & Governance",
    challenge:
      "Global margin calculation integrity at risk across distributed teams without enforced time-tracking discipline.",
    action:
      "Owned the Global Margin Calculator and spearheaded automation of the Level of Effort (LOE) Allocation Calculator (LAC) via Google Apps Script.",
    result:
      "Enforced architectural time-tracking standards, restoring margin integrity across every regional P&L cycle.",
  },
  {
    company: "RingCentral",
    title: "Technical Tooling & Workspace Migration",
    challenge:
      "Fragmented work surfaces and inconsistent automation across Smartsheet, Monday.com, and Salesforce ecosystems.",
    action:
      "Directed end-to-end Smartsheet → Monday.com migrations, architected unified cross-functional automation rules, and ran rigorous smoke testing for Salesforce rollouts.",
    result:
      "Unified the operating system of work and de-risked enterprise releases with repeatable QA discipline.",
  },
  {
    company: "DKMS Foundation",
    title: "Global Digital Transformation & Scaling",
    challenge:
      "Legacy donor workflows blocking scale across 7 international markets, each with distinct compliance demands.",
    action:
      "Headed multi-country e-registration platforms across 7 nations, transitioned legacy workflows, and authored foundational GDPR-compliant blueprint SOPs.",
    result:
      "Stood up a compliant, replicable global rollout playbook now used as the international scaling reference.",
  },
  {
    company: "DKMS Foundation",
    title: "Process Optimization & Post-Merger Integration",
    challenge:
      "Cross-border compliance drift between international HQs post-merger, with unaudited operational pipeline costs.",
    action:
      "Standardized cross-border compliance tracking and deployed analytical data structures inside Tableau.",
    result:
      "Cut operational pipeline costs by 40% while preserving strict audit readiness end-to-end.",
  },
];

export function MainContent() {
  return (
    <main className="lg:ml-[380px] xl:ml-[420px] min-h-screen">
      <div className="grain-bg">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16 py-16 sm:py-24 lg:py-28 flex flex-col gap-24 lg:gap-28">

          {/* Summary */}
          <Section id="summary" eyebrow="01 — Executive Summary" title="Operations leadership at the intersection of finance, infrastructure, and global program delivery.">
            <p className="text-base sm:text-lg leading-[1.75] text-foreground/85 text-balance">
              Over <span className="text-accent">8+ years</span> scaling digital systems, automating enterprise-grade financial tooling, and translating between technical infrastructure and the business it serves. I architect operating models that hold up under regulatory weight, cross-border complexity, and quarterly margin scrutiny <span className="text-accent/70">—</span> while quietly removing friction the rest of the organization never has to see.
            </p>
          </Section>

          {/* Philosophy */}
          <Section id="philosophy" eyebrow="02 — Philosophy" title="A leadership operating principle.">
            <blockquote className="relative rounded-2xl border border-border bg-surface/30 p-8 sm:p-10">
              <div className="absolute left-8 top-0 -translate-y-1/2 bg-background px-3 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Principle
              </div>
              <p className="text-lg sm:text-xl font-light italic leading-relaxed text-foreground/90 text-balance">
                "Margin integrity is not a finance problem <span className="text-accent/80">—</span> it is an architecture problem. The work of operations is the systematic removal of friction through custom workflow engineering, defended at every border by clean regulatory compliance."
              </p>
            </blockquote>
          </Section>

          {/* Competencies */}
          <Section id="competencies" eyebrow="03 — Competencies" title="Organized by operating domain.">
            <div className="flex flex-col gap-8">
              {competencies.map((c) => (
                <div key={c.group} className="flex flex-col gap-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="text-accent">/</span> {c.group}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Engineered Solutions */}
          <Section id="engineered" eyebrow="04 — Engineered Solutions" title="Product development & custom automation architecture.">
            <div className="grid gap-5">
              <Card>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Custom Application</div>
                    <h3 className="text-xl font-semibold tracking-tight">Shelved</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
                    Active UAT
                  </span>
                </div>
                <dl className="grid gap-4 text-sm">
                  <SolutionRow label="Overview">
                    A standalone application designed to solve complex organization and tracking workflows end-to-end.
                  </SolutionRow>
                  <SolutionRow label="Execution">
                    Brought from architecture blueprinting through full development cycles; currently managing live user acceptance testing and optimization.
                  </SolutionRow>
                  <SolutionRow label="Impact">
                    Demonstrates full-lifecycle product ownership and hands-on application design capability.
                  </SolutionRow>
                </dl>
              </Card>

              <Card>
                <div className="mb-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Custom Architecture</div>
                  <h3 className="text-xl font-semibold tracking-tight">Automated Vendor Renewal Governance Engine</h3>
                </div>
                <dl className="grid gap-4 text-sm">
                  <SolutionRow label="Problem">
                    Disjointed legacy tracking of third-party vendor renewals creating workflow bottlenecks and approval risks across global stakeholders.
                  </SolutionRow>
                  <SolutionRow label="Solution">
                    A custom automation architecture built on Google Apps Script to programmatically capture, parse, and filter Pending Approvals — dynamically routing critical renewal life cycles across isolated tracking layers.
                  </SolutionRow>
                  <SolutionRow label="Impact">
                    Standardized strict process governance, delivered absolute pipeline visibility, and entirely eliminated manual tracking lag for cross-functional collaborators.
                  </SolutionRow>
                </dl>
              </Card>
            </div>
          </Section>

          {/* Initiatives */}
          <Section id="initiatives" eyebrow="05 — Key Initiatives" title="High-stakes career impact, framed.">
            <div className="grid gap-5">
              {initiatives.map((i) => (
                <Card key={i.title}>
                  <div className="mb-5 flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{i.title}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      — {i.company}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    <CarLine label="Challenge">{i.challenge}</CarLine>
                    <CarLine label="Action">{i.action}</CarLine>
                    <CarLine label="Result">{i.result}</CarLine>
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          {/* Credentials */}
          <Section id="credentials" eyebrow="06 — Credentials" title="Background & mandates.">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="text-accent">/</span> Certifications
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
                  <span className="text-foreground/90">Lean Six Sigma Black Belt</span>
                  <a href="/lssbb-cert.pdf" target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent accent-link">
                    verify ↗
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="text-accent">/</span> Education & Mandates
                </h3>
                <ul className="grid gap-3 text-sm">
                  <CredentialRow
                    primary="Master of Social Work — Medical & Psychiatry"
                    secondary="St Joseph's University"
                  />
                  <CredentialRow
                    primary="Bachelor of Historical Studies"
                    secondary="Madras University"
                  />
                  <CredentialRow
                    primary="UN Peace Messenger — International Mandate"
                    secondary="Germany"
                  />
                </ul>
              </div>
            </div>
          </Section>

          <footer className="border-t border-border pt-8 flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.2em]">— End of Transmission</span>
            <span className="font-mono uppercase tracking-[0.2em]">v.2026</span>
          </footer>
        </div>
      </div>
    </main>
  );
}

function SolutionRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr] gap-4 items-baseline border-t border-border pt-4 first:border-0 first:pt-0">
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
      <dd className="text-foreground/85 leading-relaxed">{children}</dd>
    </div>
  );
}

function CredentialRow({ primary, secondary }: { primary: string; secondary: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0">
      <span className="text-foreground/90">{primary}</span>
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground text-right">— {secondary}</span>
    </li>
  );
}
