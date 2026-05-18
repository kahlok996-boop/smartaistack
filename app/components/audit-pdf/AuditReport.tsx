import type { CSSProperties } from "react";
import type { AuditPdfRecommendation, AuditPdfResult } from "@/app/lib/audit-pdf";

type AuditReportProps = {
  result: AuditPdfResult;
  websiteUrl?: string;
  generatedAt?: Date;
};

type Tone = "cyan" | "emerald" | "violet";

const pageStyle: CSSProperties = {
  width: 794,
  minHeight: 1123,
  boxSizing: "border-box",
  background:
    "radial-gradient(circle at 78% 8%, rgba(34,211,238,0.22), transparent 27%), radial-gradient(circle at 10% 18%, rgba(14,165,233,0.16), transparent 30%), linear-gradient(145deg, #030712 0%, #07111f 46%, #020617 100%)",
  color: "#f8fafc",
  fontFamily: "Inter, Arial, Helvetica, sans-serif",
  padding: "58px 62px",
  position: "relative",
  overflow: "hidden",
};

const headingStyle: CSSProperties = {
  fontFamily: "'Space Grotesk', Inter, Arial, Helvetica, sans-serif",
  letterSpacing: "-0.05em",
};

const summaryTitleStyle: CSSProperties = {
  ...headingStyle,
  fontSize: 16,
  fontWeight: 800,
  lineHeight: 1.28,
  overflowWrap: "break-word",
};

const eyebrowStyle: CSSProperties = {
  color: "#22d3ee",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

const panelStyle: CSSProperties = {
  background: "linear-gradient(145deg, rgba(15,23,42,0.92), rgba(2,6,23,0.86))",
  border: "1px solid rgba(103,232,249,0.18)",
  borderRadius: 30,
  boxShadow: "0 30px 90px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.06)",
};

function displayUrl(result: AuditPdfResult, websiteUrl?: string) {
  return websiteUrl?.trim() || result.sourceLabel;
}

function currentDateLabel(generatedAt?: Date) {
  const date = generatedAt ?? new Date();
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

function scoreTone(score: number): Tone {
  if (score >= 82) return "emerald";
  if (score >= 68) return "cyan";
  return "violet";
}

function toneColor(tone: Tone) {
  if (tone === "emerald") return "#34d399";
  if (tone === "violet") return "#a78bfa";
  return "#22d3ee";
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={eyebrowStyle}>{eyebrow}</div>
      <h2 style={{ ...headingStyle, margin: "10px 0 0", fontSize: 38, lineHeight: 1.02 }}>{title}</h2>
      {copy ? <p style={{ margin: "14px 0 0", color: "#94a3b8", fontSize: 15, lineHeight: 1.55 }}>{copy}</p> : null}
    </div>
  );
}

function Footer({ page }: { page: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 62,
        right: 62,
        bottom: 36,
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid rgba(148,163,184,0.18)",
        paddingTop: 15,
        color: "#64748b",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      <span>SmartAIStack · Premium AI Website Audit</span>
      <span>{String(page).padStart(2, "0")}</span>
    </div>
  );
}

function Orb({ style }: { style: CSSProperties }) {
  return <div style={{ position: "absolute", borderRadius: 999, filter: "blur(4px)", ...style }} />;
}

function ScoreRing({ score, size = 170 }: { score: number; size?: number }) {
  const tone = scoreTone(score);
  const color = toneColor(tone);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        display: "grid",
        placeItems: "center",
        background: `conic-gradient(${color} ${score * 3.6}deg, rgba(30,41,59,0.78) 0deg)`,
        boxShadow: `0 0 70px ${color}26`,
      }}
    >
      <div
        style={{
          width: size - 22,
          height: size - 22,
          borderRadius: 999,
          display: "grid",
          placeItems: "center",
          background: "linear-gradient(145deg, #020617, #0f172a)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ ...headingStyle, color, fontSize: size === 170 ? 46 : 34, fontWeight: 800, lineHeight: 1 }}>{score}</div>
          <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>SCORE</div>
        </div>
      </div>
    </div>
  );
}

function ScoreCard({ label, value, note }: { label: string; value: number; note: string }) {
  const color = toneColor(scoreTone(value));
  return (
    <div style={{ ...panelStyle, padding: 24, minHeight: 154, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "flex-start" }}>
        <div>
          <div style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
          <p style={{ margin: "12px 0 0", color: "#94a3b8", fontSize: 12.5, lineHeight: 1.5 }}>{note}</p>
        </div>
        <div style={{ ...headingStyle, color, fontSize: 38, fontWeight: 800, lineHeight: 1 }}>{value}</div>
      </div>
      <div style={{ position: "absolute", left: 24, right: 24, bottom: 22, height: 8, borderRadius: 999, background: "rgba(30,41,59,0.95)", overflow: "hidden" }}>
        <div style={{ width: `${value}%`, height: "100%", borderRadius: 999, background: `linear-gradient(90deg, ${color}, #67e8f9)` }} />
      </div>
    </div>
  );
}

function PriorityCard({ label, title, impact, action, index }: { label: string; title: string; impact: string; action: string; index: number }) {
  return (
    <div style={{ ...panelStyle, padding: 26, display: "grid", gridTemplateColumns: "74px 1fr", gap: 22 }}>
      <div
        style={{
          width: 66,
          height: 66,
          borderRadius: 22,
          display: "grid",
          placeItems: "center",
          color: index === 0 ? "#020617" : "#67e8f9",
          background: index === 0 ? "linear-gradient(135deg, #22d3ee, #a7f3d0)" : "rgba(8,145,178,0.15)",
          border: "1px solid rgba(103,232,249,0.28)",
          fontWeight: 900,
          fontSize: 22,
        }}
      >
        0{index + 1}
      </div>
      <div>
        <div style={{ color: "#22d3ee", fontSize: 11, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase" }}>{label || impact}</div>
        <h3 style={{ ...headingStyle, margin: "8px 0", fontSize: 25, lineHeight: 1.08 }}>{title}</h3>
        <p style={{ margin: 0, color: "#cbd5e1", fontSize: 14, lineHeight: 1.48 }}>{impact}</p>
        <div style={{ marginTop: 14, padding: "14px 16px", borderRadius: 18, background: "rgba(34,211,238,0.08)", color: "#e0f2fe", fontSize: 13.5, lineHeight: 1.45 }}>
          <strong style={{ color: "#67e8f9" }}>Recommended move:</strong> {action}
        </div>
      </div>
    </div>
  );
}

function RecommendationList({ items }: { items: AuditPdfRecommendation[] }) {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      {items.map((item, index) => (
        <div key={`${item.title}-${index}`} style={{ ...panelStyle, padding: "20px 22px", borderRadius: 24 }}>
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{ color: "#22d3ee", fontWeight: 900, fontSize: 13 }}>{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h3 style={{ ...headingStyle, margin: 0, fontSize: 21 }}>{item.title}</h3>
              <p style={{ margin: "8px 0 0", color: "#b6c3d1", fontSize: 13.5, lineHeight: 1.48 }}>{item.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Page({ children, page }: { children: React.ReactNode; page: number }) {
  return (
    <section data-audit-pdf-page="true" style={{ ...pageStyle, marginBottom: 24 }}>
      <Orb style={{ width: 270, height: 270, right: -95, top: -80, background: "rgba(34,211,238,0.18)" }} />
      <Orb style={{ width: 180, height: 180, left: -70, bottom: 90, background: "rgba(59,130,246,0.12)" }} />
      {children}
      <Footer page={page} />
    </section>
  );
}

export default function AuditReport({ result, websiteUrl, generatedAt }: AuditReportProps) {
  const url = displayUrl(result, websiteUrl);
  const scores = [
    { label: "Audit score", value: result.overallScore, note: "Composite readout across brand, conversion, trust, mobile hierarchy, and authority." },
    ...result.scores,
  ].slice(0, 6);
  const ctaIdeas = result.sections.slice(0, 3);
  const pageSequence = ["Hero with quantified promise", "Proof and credibility band", "Problem-aware offer section", "Conversion CTA module", "Premium before/after narrative", "FAQ and final action"].map((fallback, index) => result.sections[index] || fallback);

  return (
    <div style={{ width: 794, background: "#020617" }}>
      <Page page={1}>
        <div style={{ position: "relative", zIndex: 1, minHeight: 980, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "#67e8f9", fontWeight: 900, letterSpacing: "0.22em", fontSize: 15 }}>SMARTAISTACK</div>
            <div style={{ color: "#94a3b8", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>{currentDateLabel(generatedAt)}</div>
          </div>

          <div style={{ marginTop: 98, maxWidth: 610 }}>
            <div style={eyebrowStyle}>AI website audit · agency report v2</div>
            <h1 style={{ ...headingStyle, margin: "18px 0 0", fontSize: 78, lineHeight: 0.92, fontWeight: 800 }}>
              Premium Conversion Audit Report
            </h1>
            <p style={{ margin: "28px 0 0", color: "#cbd5e1", fontSize: 19, lineHeight: 1.45, maxWidth: 590 }}>
              A cinematic, conversion-focused diagnosis of the page experience, priority blockers, and premium redesign direction for {url}.
            </p>
          </div>

          <div style={{ marginTop: 58, display: "grid", gridTemplateColumns: "220px 1fr", gap: 26, alignItems: "stretch" }}>
            <div style={{ ...panelStyle, padding: 24, display: "grid", placeItems: "center" }}>
              <ScoreRing score={result.overallScore} />
            </div>
            <div style={{ ...panelStyle, padding: 28 }}>
              <div style={eyebrowStyle}>Executive readout</div>
              <h2 style={{ ...summaryTitleStyle, margin: "12px 0" }}>{result.summaryTitle}</h2>
              <p style={{ margin: 0, color: "#b6c3d1", fontSize: 15.5, lineHeight: 1.55 }}>{result.summaryBody}</p>
              <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(148,163,184,0.18)", color: "#e2e8f0", fontSize: 13.5 }}>
                <strong style={{ color: "#67e8f9" }}>Source:</strong> {url}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {["Conversion clarity", "Trust velocity", "Premium positioning"].map((label) => (
              <div key={label} style={{ border: "1px solid rgba(103,232,249,0.18)", borderRadius: 22, padding: 18, background: "rgba(15,23,42,0.58)" }}>
                <div style={{ color: "#22d3ee", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</div>
                <div style={{ marginTop: 10, color: "#cbd5e1", fontSize: 12.5, lineHeight: 1.45 }}>Reviewed for high-leverage redesign decisions.</div>
              </div>
            ))}
          </div>
        </div>
      </Page>

      <Page page={2}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <SectionTitle eyebrow="Executive summary" title="Scorecard and signal map" copy="The scorecard turns the audit model into an executive snapshot: what is costing trust, where conversion clarity is leaking, and where the redesign should focus first." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
            {scores.map((score) => <ScoreCard key={score.label} label={score.label} value={score.value} note={score.note} />)}
          </div>
          <div style={{ ...panelStyle, marginTop: 24, padding: 28 }}>
            <div style={eyebrowStyle}>Audit interpretation</div>
            <h3 style={{ ...summaryTitleStyle, margin: "10px 0 12px" }}>{result.summaryTitle}</h3>
            <p style={{ margin: 0, color: "#cbd5e1", fontSize: 15.5, lineHeight: 1.58 }}>{result.summaryBody}</p>
          </div>
        </div>
      </Page>

      <Page page={3}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <SectionTitle eyebrow="Top 3 conversion blockers" title="Priority fixes before redesign" copy="These are the most important blockers to address before visual polish. Each item links the visible issue to the conversion action it should unlock." />
          <div style={{ display: "grid", gap: 20 }}>
            {result.priorities.slice(0, 3).map((priority, index) => <PriorityCard key={priority.title} {...priority} index={index} />)}
          </div>
        </div>
      </Page>

      <Page page={4}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <SectionTitle eyebrow="Redesign direction" title="Premium page narrative" copy="The redesign should make the offer feel sharper, faster to understand, and easier to act on without diluting the cinematic black/cyan SaaS direction." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <div style={eyebrowStyle}>CTA suggestions</div>
              <div style={{ display: "grid", gap: 14, marginTop: 14 }}>
                {ctaIdeas.map((idea, index) => (
                  <div key={idea} style={{ ...panelStyle, padding: 19, borderRadius: 22 }}>
                    <div style={{ color: "#67e8f9", fontSize: 12, fontWeight: 900 }}>CTA 0{index + 1}</div>
                    <p style={{ margin: "8px 0 0", color: "#dbeafe", fontSize: 14, lineHeight: 1.45 }}>{idea}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={eyebrowStyle}>Premium positioning</div>
              <RecommendationList items={result.opportunities.slice(0, 3)} />
            </div>
          </div>
          <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ ...panelStyle, padding: 24 }}>
              <div style={eyebrowStyle}>Before</div>
              <h3 style={{ ...headingStyle, margin: "12px 0", fontSize: 26 }}>Under-explained value</h3>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: 14.5, lineHeight: 1.55 }}>Visitors must work too hard to understand the strongest reason to trust, continue, and take the next step.</p>
            </div>
            <div style={{ ...panelStyle, padding: 24, borderColor: "rgba(34,211,238,0.38)" }}>
              <div style={eyebrowStyle}>After</div>
              <h3 style={{ ...headingStyle, margin: "12px 0", fontSize: 26 }}>Clear premium decision path</h3>
              <p style={{ margin: 0, color: "#dbeafe", fontSize: 14.5, lineHeight: 1.55 }}>A sharper hero, proof-led section order, and repeated action moments make the page feel more valuable and more conversion-ready.</p>
            </div>
          </div>
        </div>
      </Page>

      <Page page={5}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <SectionTitle eyebrow="Suggested page sequence" title="Recommended section order" copy="Use this structure to convert the audit findings into a cleaner page sequence with stronger hierarchy and less decision friction." />
          <div style={{ display: "grid", gap: 15 }}>
            {pageSequence.slice(0, 6).map((section, index) => (
              <div key={`${section}-${index}`} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 18, alignItems: "center" }}>
                <div style={{ height: 58, borderRadius: 20, background: "rgba(34,211,238,0.12)", border: "1px solid rgba(103,232,249,0.2)", display: "grid", placeItems: "center", color: "#67e8f9", fontWeight: 900 }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div style={{ ...panelStyle, borderRadius: 22, padding: "17px 20px", color: "#dbeafe", fontSize: 15, lineHeight: 1.45 }}>{section}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <SectionTitle eyebrow="Additional recommendations" title="Execution notes" />
            <RecommendationList items={result.recommendations.slice(0, 3)} />
          </div>
        </div>
      </Page>
    </div>
  );
}
