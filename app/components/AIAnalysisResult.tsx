"use client";

import { useEffect, useState } from "react";

const scores = [
  ["Premium", "86%", "Strong brand potential"],
  ["Conversion", "74%", "Primary upside"],
  ["Trust", "81%", "Needs earlier proof"],
];

const priorities = [
  {
    label: "1",
    title: "Clarify the first screen",
    impact: "High conversion impact",
    action:
      "Lead with one sharper promise, one proof point, and one primary CTA above the fold.",
  },
  {
    label: "2",
    title: "Move trust signals earlier",
    impact: "High credibility impact",
    action:
      "Show customer logos, outcomes, testimonials, or security cues before the visitor has to scroll.",
  },
  {
    label: "3",
    title: "Reduce decision friction",
    impact: "Medium revenue impact",
    action:
      "Simplify the next step so users immediately know what to click, why it matters, and what happens next.",
  },
];

const blockers = [
  "The hero explains the product, but does not make the outcome obvious fast enough.",
  "CTA hierarchy competes with supporting content instead of guiding one clear action.",
  "Trust proof appears too late for a first-time visitor evaluating credibility.",
];

const recommendations = [
  {
    title: "Rewrite the hero around the result",
    detail: "Make the headline about the business outcome, not the website features.",
  },
  {
    title: "Use one dominant CTA",
    detail: "Keep the primary action visually obvious and demote secondary links.",
  },
  {
    title: "Add proof near the first CTA",
    detail: "Pair the CTA with logos, testimonials, numbers, or before/after evidence.",
  },
  {
    title: "Create calmer section pacing",
    detail: "Use more whitespace between proof, benefits, and offer sections so each idea lands.",
  },
];

const sections = [
  "Outcome-led Hero",
  "Primary CTA Row",
  "Trust Proof",
  "Before / After",
  "Lead Form",
  "Case Study",
  "Pricing Offer",
  "Testimonials",
];

export default function AIAnalysisResult() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="mt-14 rounded-[36px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Audit running
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              Preparing a clear executive summary
            </h2>
          </div>

          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300"></span>
            Analyzing
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-8">
          <div className="mb-7 space-y-3 animate-pulse">
            <div className="h-4 w-28 rounded-full bg-cyan-400/30"></div>
            <div className="h-7 w-full max-w-xl rounded-full bg-zinc-800"></div>
            <div className="h-4 w-full max-w-2xl rounded-full bg-zinc-800"></div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Finding the clearest conversion blockers",
              "Ranking the highest-impact fixes",
              "Summarizing the next best actions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-gray-300"
              >
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
            Executive summary
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            Strong foundation. The fastest win is clearer conversion focus.
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            The site already feels credible, but the first screen asks users to
            process too much before the value is obvious. Tighten the message,
            elevate proof, and make the next action unmistakable.
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
          Completed
        </div>
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-3">
        {scores.map(([label, value, note]) => (
          <div
            key={label}
            className="rounded-[24px] border border-white/10 bg-black/30 p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-gray-400">{label} score</p>
              <p className="text-3xl font-black text-cyan-300">{value}</p>
            </div>
            <p className="mt-3 text-sm text-gray-500">{note}</p>
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
            Ranked by business impact, not technical complexity.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {priorities.map((item) => (
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
            Key blockers
          </p>
          <h3 className="mt-3 text-2xl font-black">What is slowing conversion</h3>

          <div className="mt-6 space-y-3">
            {blockers.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.03] p-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"></span>
                <p className="text-sm leading-7 text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
            Action plan
          </p>
          <h3 className="mt-3 text-2xl font-black">Recommended fixes</h3>

          <div className="mt-6 divide-y divide-white/10">
            {recommendations.map((item, index) => (
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
            The engine still uses the full audit depth; this view surfaces only
            the sections that matter most for action.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {sections.map((item) => (
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
