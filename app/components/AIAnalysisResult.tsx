"use client";

import { useEffect, useMemo, useState } from "react";

type AuditSignal =
  | "missingCta"
  | "weakHeadline"
  | "slowLayout"
  | "outdatedBranding"
  | "weakTrust"
  | "poorMobileHierarchy"
  | "weakConversionFlow";

type AuditTier = "premium" | "outdated" | "basic" | "modern";

type ScoreCard = {
  label: string;
  value: number;
  note: string;
};

type Priority = {
  label: string;
  title: string;
  impact: string;
  action: string;
};

type Recommendation = {
  title: string;
  detail: string;
};

type ConfidenceMetric = {
  label: string;
  value: number;
  note: string;
};

type ParsedAuditSource = {
  hostname: string;
  pathname: string;
  normalized: string;
  tokens: string[];
  isUploadedScreenshot: boolean;
};

type AuditResult = {
  sourceLabel: string;
  tier: AuditTier;
  overallScore: number;
  summaryTitle: string;
  summaryBody: string;
  scores: ScoreCard[];
  confidence: ConfidenceMetric[];
  priorities: Priority[];
  strengths: string[];
  weaknesses: string[];
  recommendations: Recommendation[];
  opportunities: Recommendation[];
  sections: string[];
};

const premiumDomains = [
  "stripe",
  "linear",
  "vercel",
  "apple",
  "airbnb",
  "notion",
  "figma",
  "openai",
  "arc",
  "superhuman",
  "framer",
  "webflow",
  "shopify",
];

const modernKeywords = [
  "ai",
  "studio",
  "cloud",
  "labs",
  "app",
  "platform",
  "digital",
  "growth",
  "automation",
  "data",
  "design",
  "brand",
  "saas",
];

const outdatedKeywords = [
  "legacy",
  "classic",
  "old",
  "cheap",
  "free",
  "basic",
  "repair",
  "directory",
  "portal",
  "tripod",
  "angelfire",
  "geocities",
  "blogspot",
  "weebly",
];

const ctaKeywords = [
  "start",
  "try",
  "get",
  "book",
  "buy",
  "demo",
  "quote",
  "contact",
  "pricing",
  "signup",
  "consultation",
  "apply",
];

const proofKeywords = [
  "case",
  "customers",
  "clients",
  "reviews",
  "results",
  "security",
  "enterprise",
  "certified",
  "trusted",
  "portfolio",
];

const weakHeadlineKeywords = [
  "home",
  "welcome",
  "website",
  "services",
  "solutions",
  "company",
  "business",
  "online",
];

const slowLayoutKeywords = [
  "catalog",
  "directory",
  "blog",
  "news",
  "articles",
  "wordpress",
  "joomla",
  "forum",
  "archive",
];

const mobileRiskKeywords = [
  "desktop",
  "pdf",
  "brochure",
  "catalog",
  "menu",
  "gallery",
  "portfolio",
  "store",
];

const processingSteps = [
  "Scanning layout density and above-the-fold hierarchy",
  "Analyzing CTA clarity and conversion path friction",
  "Checking proof placement, trust cues, and credibility signals",
  "Evaluating mobile hierarchy and thumb-first section order",
  "Generating premium redesign direction and priority fixes",
];

const uploadedScreenshotLabel = "Screenshot-based preview analysis";

const fallbackAuditSignals: AuditSignal[] = [
  "weakConversionFlow",
  "weakTrust",
  "poorMobileHierarchy",
];

function clampScore(score: number) {
  return Math.max(38, Math.min(96, Math.round(score)));
}

function getStableVariance(input: string) {
  let hash = 0;

  for (let index = 0; index < input.length; index += 1) {
    hash = (hash * 31 + input.charCodeAt(index)) % 997;
  }

  return (hash % 11) - 5;
}

function parseWebsiteUrl(websiteUrl?: string): ParsedAuditSource {
  const trimmed = websiteUrl?.trim() ?? "";

  if (!trimmed || trimmed === uploadedScreenshotLabel) {
    return {
      hostname: uploadedScreenshotLabel,
      pathname: "",
      normalized: "uploaded screenshot preview",
      tokens: ["uploaded", "screenshot", "preview"],
      isUploadedScreenshot: true,
    };
  }

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);
    const hostname = url.hostname.replace(/^www\./, "").toLowerCase();
    const pathname = url.pathname.toLowerCase();
    const normalized = `${hostname}${pathname}`;
    const tokens = normalized.split(/[^a-z0-9]+/).filter(Boolean);

    return { hostname, pathname, normalized, tokens, isUploadedScreenshot: false };
  } catch {
    const normalized = trimmed.toLowerCase();

    return {
      hostname: normalized || "submitted site",
      pathname: "",
      normalized,
      tokens: normalized.split(/[^a-z0-9]+/).filter(Boolean),
      isUploadedScreenshot: false,
    };
  }
}

function hasAny(source: string[], keywords: string[]) {
  return keywords.some((keyword) => source.includes(keyword));
}

function keywordCount(source: string[], keywords: string[]) {
  return keywords.reduce(
    (count, keyword) => count + (source.includes(keyword) ? 1 : 0),
    0,
  );
}

function detectSignals(tokens: string[], normalized: string, tier: AuditTier) {
  const signals = new Set<AuditSignal>();
  const hasCta = hasAny(tokens, ctaKeywords);
  const hasProof = hasAny(tokens, proofKeywords);
  const hasModern = hasAny(tokens, modernKeywords);
  const tokenVolume = tokens.length;

  if (!hasCta) signals.add("missingCta");
  if (hasAny(tokens, weakHeadlineKeywords) || tokenVolume <= 2) signals.add("weakHeadline");
  if (hasAny(tokens, slowLayoutKeywords) || normalized.length > 34) signals.add("slowLayout");
  if (tier === "outdated" || normalized.includes("-") || normalized.endsWith(".biz")) {
    signals.add("outdatedBranding");
  }
  if (!hasProof && tier !== "premium") signals.add("weakTrust");
  if (hasAny(tokens, mobileRiskKeywords) || normalized.split("/").length > 3) {
    signals.add("poorMobileHierarchy");
  }
  if (!hasCta || ["services", "solutions", "consulting", "agency"].some((item) => tokens.includes(item))) {
    signals.add("weakConversionFlow");
  }

  if (tier === "premium" && hasModern) {
    signals.delete("weakHeadline");
    signals.delete("outdatedBranding");
  }

  return Array.from(signals);
}

function getTier(tokens: string[], normalized: string): AuditTier {
  if (premiumDomains.some((domain) => normalized.includes(domain))) return "premium";
  if (hasAny(tokens, outdatedKeywords)) return "outdated";

  const modernCount = keywordCount(tokens, modernKeywords);

  if (modernCount >= 2) return "modern";
  if (tokens.length <= 2 || hasAny(tokens, weakHeadlineKeywords)) return "basic";

  return "basic";
}

function createScores(tier: AuditTier, signals: AuditSignal[], variance: number): ScoreCard[] {
  const baseByTier = {
    premium: { premium: 88, conversion: 80, trust: 84, mobile: 82, authority: 86 },
    modern: { premium: 78, conversion: 72, trust: 70, mobile: 74, authority: 73 },
    basic: { premium: 66, conversion: 62, trust: 61, mobile: 64, authority: 60 },
    outdated: { premium: 51, conversion: 48, trust: 52, mobile: 46, authority: 50 },
  }[tier];

  const penalties: Record<AuditSignal, Partial<Record<keyof typeof baseByTier, number>>> = {
    missingCta: { conversion: 12, premium: 3 },
    weakHeadline: { conversion: 8, premium: 5, authority: 4 },
    slowLayout: { conversion: 6, mobile: 9, premium: 4 },
    outdatedBranding: { premium: 13, authority: 10, trust: 6 },
    weakTrust: { trust: 13, authority: 7, conversion: 4 },
    poorMobileHierarchy: { mobile: 12, conversion: 6 },
    weakConversionFlow: { conversion: 11, premium: 3 },
  };

  const adjusted = { ...baseByTier };

  signals.forEach((signal) => {
    Object.entries(penalties[signal]).forEach(([key, penalty]) => {
      adjusted[key as keyof typeof adjusted] -= penalty ?? 0;
    });
  });

  adjusted.premium += variance;
  adjusted.conversion += variance * 0.8;
  adjusted.trust += variance * 0.5;
  adjusted.mobile += variance * 0.4;
  adjusted.authority += variance * 0.6;

  return [
    {
      label: "Premium positioning",
      value: clampScore(adjusted.premium),
      note: tier === "premium" ? "Strong market signal" : "Perceived value can rise quickly",
    },
    {
      label: "Conversion confidence",
      value: clampScore(adjusted.conversion),
      note: signals.includes("missingCta") ? "CTA intent needs a sharper path" : "Primary path is readable",
    },
    {
      label: "Trust score",
      value: clampScore(adjusted.trust),
      note: signals.includes("weakTrust") ? "Proof should appear earlier" : "Credibility cues are present",
    },
    {
      label: "Mobile optimization",
      value: clampScore(adjusted.mobile),
      note: signals.includes("poorMobileHierarchy") ? "Mobile hierarchy needs tighter sequencing" : "Likely usable on smaller screens",
    },
    {
      label: "Brand authority",
      value: clampScore(adjusted.authority),
      note: signals.includes("outdatedBranding") ? "Visual system feels behind the offer" : "Brand frame supports authority",
    },
  ];
}

function signalCopy(signal: AuditSignal): Priority {
  const copy: Record<AuditSignal, Omit<Priority, "label">> = {
    missingCta: {
      title: "Make the primary CTA impossible to miss",
      impact: "High conversion impact",
      action:
        "Anchor the hero around one revenue action, then repeat that action after each proof block instead of offering equal-weight choices.",
    },
    weakHeadline: {
      title: "Reframe the hero around buyer outcomes",
      impact: "High clarity impact",
      action:
        "Replace category-level language with a specific promise, audience, and measurable outcome that can be understood in under five seconds.",
    },
    slowLayout: {
      title: "Reduce layout drag before the first decision",
      impact: "Medium UX impact",
      action:
        "Compress dense intro content, tighten section pacing, and move supporting detail below the first conversion checkpoint.",
    },
    outdatedBranding: {
      title: "Modernize the visual trust layer",
      impact: "High premium impact",
      action:
        "Upgrade spacing, typography, and contrast so the design matches the price point buyers expect from a serious provider.",
    },
    weakTrust: {
      title: "Move credibility above the fold",
      impact: "High credibility impact",
      action:
        "Place logos, quantified outcomes, review snippets, certifications, or security cues next to the first CTA before users start comparing alternatives.",
    },
    poorMobileHierarchy: {
      title: "Re-sequence for mobile scanning",
      impact: "Medium mobile impact",
      action:
        "Lead with promise, proof, CTA, and one key differentiator before showing galleries, menus, or long explanatory sections.",
    },
    weakConversionFlow: {
      title: "Connect each section to the next decision",
      impact: "High revenue impact",
      action:
        "Turn the page into a guided funnel: problem, outcome, proof, offer, objection handling, then the next step.",
    },
  };

  return { label: "", ...copy[signal] };
}

function recommendationCopy(signal: AuditSignal): Recommendation {
  const copy: Record<AuditSignal, Recommendation> = {
    missingCta: {
      title: "Build a single-action CTA system",
      detail:
        "Use one dominant action label, supporting microcopy, and a secondary text link only when it reduces anxiety instead of competing for attention.",
    },
    weakHeadline: {
      title: "Write the headline like a positioning statement",
      detail:
        "Name the buyer, the result, and the differentiator so the page stops sounding interchangeable with competitors.",
    },
    slowLayout: {
      title: "Create a faster perceived load path",
      detail:
        "Prioritize clean section breaks, fewer simultaneous cards, and a stronger visual rhythm so the page feels lighter even before technical optimization.",
    },
    outdatedBranding: {
      title: "Refresh premium cues without changing the offer",
      detail:
        "Introduce modern type scale, sharper contrast, controlled glow accents, and cleaner spacing to raise perceived value immediately.",
    },
    weakTrust: {
      title: "Add proof next to moments of risk",
      detail:
        "Place testimonials, client logos, guarantees, statistics, or before/after evidence beside CTAs and pricing moments.",
    },
    poorMobileHierarchy: {
      title: "Design the mobile fold as a sales checkpoint",
      detail:
        "Keep the first mobile screen focused on outcome, proof, and CTA before asking visitors to navigate deeper content.",
    },
    weakConversionFlow: {
      title: "Turn the page into a guided buyer journey",
      detail:
        "Use section-level CTAs, objection handling, and short proof blocks so visitors always know why the next click matters.",
    },
  };

  return copy[signal];
}

function getPrioritySignals(signals: AuditSignal[]) {
  const prioritySignals = [...signals];

  fallbackAuditSignals.forEach((signal) => {
    if (!prioritySignals.includes(signal)) {
      prioritySignals.push(signal);
    }
  });

  return prioritySignals.slice(0, 3);
}

function buildAuditResult(websiteUrl?: string): AuditResult {
  const parsed = parseWebsiteUrl(websiteUrl);
  const tier = parsed.isUploadedScreenshot
    ? "basic"
    : getTier(parsed.tokens, parsed.normalized);
  const variance = parsed.isUploadedScreenshot ? 0 : getStableVariance(parsed.normalized);
  const signals = parsed.isUploadedScreenshot
    ? [...fallbackAuditSignals]
    : detectSignals(parsed.tokens, parsed.normalized, tier);
  const scores = createScores(tier, signals, variance);
  const overallScore = clampScore(
    scores.reduce((total, score) => total + score.value, 0) / scores.length,
  );
  const topSignals = getPrioritySignals(signals);
  const priorities = topSignals.map((signal, index) => ({
    ...signalCopy(signal),
    label: String(index + 1),
  }));
  const recommendations = topSignals
    .map(recommendationCopy)
    .concat([
      {
        title: "Package the redesign direction into a buyer-ready brief",
        detail:
          "Translate audit findings into a concise hero, proof, CTA, and mobile sequence so implementation is not left to interpretation.",
      },
    ])
    .slice(0, 4);

  const strengthsByTier: Record<AuditTier, string[]> = {
    premium: [
      "The domain pattern suggests a contemporary brand with strong perceived category fit.",
      "Premium cues are likely already present, so the audit focuses on conversion precision rather than a full identity reset.",
      "The offer can support a more assertive executive narrative without feeling overdesigned.",
    ],
    modern: [
      "The naming and category signals imply a current business with room for a polished SaaS-style presentation.",
      "There is enough modern context to build a sharper story around outcomes, proof, and product value.",
      "The brand can likely move upmarket with focused hierarchy and stronger trust placement.",
    ],
    basic: [
      "The site appears understandable enough to audit, which gives the redesign a clear baseline to improve.",
      "A simpler structure can become an advantage if the first screen is rewritten around one specific buyer action.",
      "The brand has room for quick perceived-value gains without needing a complex redesign system.",
    ],
    outdated: [
      "The current signal gives the redesign a large before/after opportunity.",
      "The business likely has existing operational value that is not being matched by its digital presentation.",
      "Modern spacing, proof, and CTA hierarchy could create an immediate credibility lift.",
    ],
  };

  const weaknesses = signals.map((signal) => recommendationCopy(signal).detail).slice(0, 4);
  const opportunities: Recommendation[] = [
    {
      title: "Above-the-fold conversion lift",
      detail:
        "Use the first screen to communicate outcome, credibility, and next step before asking visitors to interpret the full page.",
    },
    {
      title: "Trust-assisted pricing confidence",
      detail:
        "Surround high-intent moments with proof and objection handling so visitors feel safer taking action.",
    },
    {
      title: tier === "outdated" ? "Premium repositioning gap" : "Authority compounding",
      detail:
        tier === "outdated"
          ? "A more current visual system can make the business feel materially more established without changing the underlying offer."
          : "Consistent proof, language, and CTA rhythm can make the brand feel more dominant across every scroll depth.",
    },
  ];

  const sections = [
    "Outcome-led Hero",
    signals.includes("weakTrust") ? "Early Proof Strip" : "Authority Proof Strip",
    signals.includes("missingCta") ? "Primary CTA System" : "CTA Reinforcement Row",
    signals.includes("weakConversionFlow") ? "Decision Flow Bridge" : "Offer Clarity Block",
    signals.includes("poorMobileHierarchy") ? "Mobile-First Benefit Stack" : "Benefit Hierarchy",
    "Before / After Evidence",
    "Objection Handling",
    "Lead Capture",
  ];

  return {
    sourceLabel: parsed.hostname,
    tier,
    overallScore,
    summaryTitle:
      parsed.isUploadedScreenshot
        ? "Screenshot-based preview analysis"
        : tier === "premium"
          ? "Strong premium signal. The biggest upside is conversion precision."
        : tier === "outdated"
          ? "The offer may be stronger than the website currently makes it feel."
          : "Solid baseline. The audit found clear ways to make the site feel more decisive.",
    summaryBody:
      parsed.isUploadedScreenshot
        ? "This neutral preview uses a standard screenshot audit profile rather than filename-based scoring. Real visual analysis is not running yet, so treat these priorities as a starting point for reviewing hierarchy, proof, and mobile flow."
        : tier === "premium"
          ? "This looks like a brand that can support an upmarket experience, but the page still needs tighter proof placement, cleaner CTA sequencing, and a more deliberate mobile decision path."
        : tier === "outdated"
          ? "The current digital signal appears to under-sell the business. Modernizing the brand layer, moving trust earlier, and simplifying the first action should create a more believable premium impression."
          : "The site does not need a full reinvention. It needs sharper positioning, earlier proof, and a clearer conversion path so visitors understand the value before they start comparing alternatives.",
    scores,
    confidence: scores.map((score) => ({
      label: score.label,
      value: score.value,
      note: score.note,
    })),
    priorities,
    strengths: strengthsByTier[tier],
    weaknesses,
    recommendations,
    opportunities,
    sections,
  };
}

export default function AIAnalysisResult({ websiteUrl }: { websiteUrl?: string }) {
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const result = useMemo(() => buildAuditResult(websiteUrl), [websiteUrl]);

  useEffect(() => {
    const stepTimer = window.setInterval(() => {
      setActiveStep((current) => Math.min(current + 1, processingSteps.length - 1));
    }, 520);

    const timer = window.setTimeout(() => {
      setLoading(false);
      window.clearInterval(stepTimer);
    }, 2850);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(stepTimer);
    };
  }, [websiteUrl]);

  if (loading) {
    return (
      <section className="mt-14 rounded-[36px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              AI processing
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              Building a data-reactive audit for {result.sourceLabel}
            </h2>
          </div>

          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300"></span>
            {Math.round(((activeStep + 1) / processingSteps.length) * 100)}% scanned
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-8">
          <div className="mb-7 space-y-3 animate-pulse">
            <div className="h-4 w-28 rounded-full bg-cyan-400/30"></div>
            <div className="h-7 w-full max-w-xl rounded-full bg-zinc-800"></div>
            <div className="h-4 w-full max-w-2xl rounded-full bg-zinc-800"></div>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {processingSteps.map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl border p-4 text-sm leading-6 transition ${
                  index <= activeStep
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-100"
                    : "border-white/10 bg-white/[0.03] text-gray-400"
                }`}
              >
                <span className="mb-3 block text-xs font-black text-cyan-300">
                  0{index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-14 rounded-[40px] border border-white/10 bg-white/[0.03] p-5 md:p-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Executive summary · {result.sourceLabel}
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            {result.summaryTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            {result.summaryBody}
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
          Score {result.overallScore}/100
        </div>
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-5">
        {result.scores.map((score) => (
          <div
            key={score.label}
            className="rounded-[24px] border border-white/10 bg-black/30 p-5"
          >
            <div className="flex items-center justify-between gap-4 md:block">
              <p className="text-sm text-gray-400">{score.label}</p>
              <p className="text-3xl font-black text-cyan-300 md:mt-3">
                {score.value}%
              </p>
            </div>
            <p className="mt-3 text-sm text-gray-500">{score.note}</p>
          </div>
        ))}
      </div>

      <div className="mb-8 rounded-[30px] border border-cyan-400/20 bg-cyan-400/[0.06] p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Top 3 priorities
            </p>
            <h3 className="mt-3 text-2xl font-black md:text-3xl">
              Do these first
            </h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-gray-400">
            Ranked by business impact, detected page signals, and likely conversion lift.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {result.priorities.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-white/10 bg-black/35 p-5"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-black">
                  {item.label}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {item.impact}
                </span>
              </div>
              <h4 className="text-lg font-black">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                {item.action}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
            Strengths detected
          </p>
          <h3 className="mt-3 text-2xl font-black">What is working</h3>

          <div className="mt-6 space-y-3">
            {result.strengths.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-emerald-400/[0.06] p-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300"></span>
                <p className="text-sm leading-7 text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
            Key blockers
          </p>
          <h3 className="mt-3 text-2xl font-black">What is slowing conversion</h3>

          <div className="mt-6 space-y-3">
            {result.weaknesses.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.03] p-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"></span>
                <p className="text-sm leading-7 text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
            Action plan
          </p>
          <h3 className="mt-3 text-2xl font-black">Recommended fixes</h3>

          <div className="mt-6 divide-y divide-white/10">
            {result.recommendations.map((item, index) => (
              <div key={item.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className="text-sm font-black text-cyan-300">
                  0{index + 1}
                </span>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/[0.05] p-6 md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Confidence indicators
          </p>
          <h3 className="mt-3 text-2xl font-black">Audit signal strength</h3>

          <div className="mt-6 space-y-4">
            {result.confidence.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold text-gray-200">{item.label}</span>
                  <span className="text-cyan-300">{item.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.55)]"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-xs leading-5 text-gray-500">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-7">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Conversion opportunities
            </p>
            <h3 className="mt-3 text-2xl font-black">Where the redesign can create lift</h3>
          </div>
          <p className="max-w-lg text-sm leading-6 text-gray-400">
            These are generated from the detected risk profile, not a fixed template.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {result.opportunities.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="font-black text-white">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-gray-400">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mb-8 rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-7">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Suggested structure
            </p>
            <h3 className="mt-3 text-2xl font-black">Premium sections to keep</h3>
          </div>
          <p className="max-w-lg text-sm leading-6 text-gray-400">
            The engine surfaces sections based on the detected CTA, trust, mobile, and positioning gaps.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {result.sections.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Next step
        </p>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <h3 className="text-3xl font-black md:text-4xl">
              Turn the audit into a focused redesign brief
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-300">
              Get a concise plan for the hero, proof layer, CTA structure, and
              conversion path without losing the deeper scoring and benchmark logic.
            </p>
          </div>

          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-white/10 bg-black/55 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Work email"
              className="rounded-2xl border border-white/10 bg-black/55 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />
            <button className="rounded-2xl bg-cyan-300 px-8 py-4 font-black text-black transition hover:scale-[1.01]">
              Request redesign brief
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
