"use client";

import { useEffect, useState } from "react";

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
      <section className="mt-16 rounded-[40px] border border-cyan-400/20 bg-cyan-400/[0.04] p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <p className="text-cyan-400 font-semibold">
            AI Analysis Running
          </p>

          <p className="text-cyan-300 text-sm">
            ● Analyzing
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>
            <p className="text-2xl font-black">
              SmartAIStack is scanning your website screenshot...
            </p>
          </div>

          <div className="space-y-4 animate-pulse">
            <div className="h-5 bg-zinc-800 rounded-full w-full"></div>
            <div className="h-5 bg-zinc-800 rounded-full w-[85%]"></div>
            <div className="h-5 bg-zinc-800 rounded-full w-[70%]"></div>
            <div className="h-5 bg-zinc-800 rounded-full w-[55%]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              "Checking visual hierarchy",
              "Scanning CTA structure",
              "Generating premium direction",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-300 text-sm"
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
    <section className="mt-16 rounded-[40px] border border-cyan-400/20 bg-cyan-400/[0.04] p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <p className="text-cyan-400 font-semibold">
          AI Analysis Result
        </p>

        <p className="text-cyan-300 text-sm">
          ● Completed
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {[
          ["Premium Score", "86%"],
          ["Conversion Score", "74%"],
          ["Trust Score", "81%"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-3xl border border-white/10 bg-black/40 p-6"
          >
            <p className="text-gray-400 mb-3">{label}</p>
            <p className="text-4xl font-black text-cyan-400">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-7">
          <h3 className="text-2xl font-black mb-5">
            Main Problems Found
          </h3>

          <div className="space-y-4">
            {[
              "Hero section does not communicate value fast enough.",
              "CTA placement could be more direct and conversion-focused.",
              "Visual hierarchy needs stronger contrast and spacing.",
              "Trust elements should appear earlier on the page.",
            ].map((item) => (
              <p key={item} className="text-gray-300 leading-7">
                ✦ {item}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-7">
          <h3 className="text-2xl font-black mb-5">
            Suggested Premium Direction
          </h3>

          <p className="text-gray-300 leading-8 mb-6">
            Redesign the page with a stronger cinematic hero, clearer headline,
            premium spacing, trust proof, visual before/after section, and a
            sharper lead-generation CTA.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Cinematic Hero",
              "Premium CTA",
              "Trust Layer",
              "Before / After",
              "Lead Form",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-300 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}