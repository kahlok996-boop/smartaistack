"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AIAnalysisResult from "@/app/components/AIAnalysisResult";
import BeforeAfterPreview from "@/app/components/BeforeAfterPreview";
import PricingSection from "@/app/components/PricingSection";
import LeadCapture from "@/app/components/LeadCapture";

const deliverables = [
  {
    title: "Executive Conversion Summary",
    detail:
      "A clear leadership-level snapshot of what is hurting performance and what to fix first.",
  },
  {
    title: "Conversion Blocker Analysis",
    detail:
      "Pinpointed friction across hero messaging, trust gaps, section order, and decision momentum.",
  },
  {
    title: "CTA Optimization Suggestions",
    detail:
      "Priority upgrades for CTA copy, placement, hierarchy, and action flow across key sections.",
  },
  {
    title: "Premium Positioning Direction",
    detail:
      "Recommendations to move perceived brand value from generic to premium and high-trust.",
  },
  {
    title: "Before / After Redesign Strategy",
    detail:
      "Practical directional blueprint for transforming the current flow into a high-conversion journey.",
  },
];

const builtFor = [
  "Premium brands",
  "Agencies",
  "SaaS companies",
  "Local businesses",
  "Landing pages",
];

export default function UploadPage() {
  const [mode, setMode] = useState<"url" | "upload">("url");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [analysisTarget, setAnalysisTarget] = useState("");

  const processingSteps = [
    "Scanning layout hierarchy",
    "Analyzing conversion flow",
    "Checking trust signals",
    "Evaluating mobile UX",
    "Generating redesign direction",
  ];

  useEffect(() => {
    if (!loading) return;

    const timer = window.setInterval(() => {
      setProcessingStep((current) =>
        Math.min(current + 1, processingSteps.length - 1),
      );
    }, 650);

    return () => window.clearInterval(timer);
  }, [loading, processingSteps.length]);

  const startAnalysis = (target: string) => {
    setSubmitted(false);
    setLoading(true);
    setProcessingStep(0);
    setAnalysisTarget(target);

    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 3500);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    startAnalysis("Screenshot-based preview analysis");
  };

  const handleAnalyzeUrl = () => {
    if (!websiteUrl.trim()) return;
    startAnalysis(websiteUrl.trim());
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-5 py-8 text-white md:px-8 md:py-16">
      <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]"></div>
      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Navbar />

        <section className="mb-16 mt-6 rounded-[34px] border border-cyan-300/15 bg-gradient-to-br from-white/[0.07] via-cyan-500/[0.08] to-blue-500/[0.04] p-6 shadow-[0_0_120px_rgba(6,182,212,0.16)] backdrop-blur-xl md:mb-20 md:p-12">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300">
            <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]"></div>
            Premium AI Audit System
          </div>

          <h1 className="mb-5 max-w-5xl text-4xl font-black leading-[0.98] sm:text-5xl md:text-7xl">
            Get a Premium AI Conversion Audit
          </h1>

          <p className="mb-4 max-w-4xl text-base leading-8 text-gray-200 md:text-2xl md:leading-10">
            Discover why your website is losing trust, conversions, and premium
            positioning — before spending money on redesign or ads.
          </p>

          <p className="max-w-4xl text-sm leading-7 text-gray-400 md:text-lg md:leading-8">
            SmartAIStack analyzes conversion clarity, trust signals, CTA
            structure, mobile UX, and premium positioning opportunities.
          </p>
        </section>

        <section className="mb-16 grid gap-6 md:gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4 shadow-[0_0_90px_rgba(8,145,178,0.1)] backdrop-blur-xl md:p-8">
            <div className="mb-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => setMode("url")}
                className={`rounded-full px-3 py-3 text-sm font-bold transition md:px-5 md:text-base ${
                  mode === "url"
                    ? "bg-cyan-400 text-black"
                    : "border border-zinc-700 bg-black text-gray-300"
                }`}
              >
                Website Link
              </button>

              <button
                onClick={() => setMode("upload")}
                className={`rounded-full px-3 py-3 text-sm font-bold transition md:px-5 md:text-base ${
                  mode === "upload"
                    ? "bg-cyan-400 text-black"
                    : "border border-zinc-700 bg-black text-gray-300"
                }`}
              >
                Upload Screenshot
              </button>
            </div>

            {mode === "url" ? (
              <div className="rounded-[26px] border border-cyan-300/20 bg-black/45 p-5 md:p-8">
                <p className="mb-4 font-semibold text-cyan-300">Website link</p>

                <input
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  type="url"
                  placeholder="https://example.com"
                  className="mb-6 w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none focus:border-cyan-400 md:py-5"
                />

                <button
                  onClick={handleAnalyzeUrl}
                  disabled={loading}
                  className="w-full rounded-2xl bg-cyan-400 px-5 py-3.5 text-sm font-black text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-[1.02] disabled:opacity-60 md:px-8 md:py-5 md:text-base"
                >
                  {loading ? "Generating Premium Audit..." : "Generate Premium Audit"}
                </button>

                {websiteUrl && (
                  <p className="mt-5 truncate rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-400">
                    Ready: <span className="text-cyan-300">{websiteUrl}</span>
                  </p>
                )}
              </div>
            ) : (
              <div className="rounded-[28px] border border-dashed border-cyan-400/35 bg-gradient-to-b from-cyan-500/10 to-black/45 p-6 text-center md:p-10">
                {preview ? (
                  <div className="space-y-6">
                    {/* eslint-disable-next-line @next/next/no-img-element -- Blob previews from uploads are not served through the Next.js image optimizer. */}
                    <img
                      src={preview}
                      alt="Uploaded Website Screenshot"
                      className="w-full rounded-3xl border border-cyan-400/20"
                    />

                    <p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                      Screenshot uploaded. Your premium audit is being prepared.
                    </p>

                    <label className="inline-block cursor-pointer rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-105 md:px-8">
                      Replace Screenshot
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                ) : (
                  <>
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                      <span className="text-4xl">⬆</span>
                    </div>

                    <p className="mb-4 text-2xl font-black md:text-3xl">
                      Upload your website screenshot
                    </p>

                    <p className="mb-8 leading-7 text-gray-400">
                      Upload a PNG or JPG for your premium conversion audit preview.
                    </p>

                    <label className="inline-block cursor-pointer rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-105 md:px-8">
                      Generate Premium Audit
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        className="hidden"
                      />
                    </label>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur-xl md:p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Audit preview
            </p>

            <h2 className="mb-5 text-3xl font-black leading-tight md:text-4xl">
              Clear signal, not a wall of data
            </h2>

            <p className="mb-7 leading-7 text-gray-400">
              The audit keeps the full scoring engine underneath, then surfaces
              only the few insights your team should act on first.
            </p>

            <div className="space-y-3">
              {[
                [
                  "Visual Hierarchy",
                  "Is the hero section clear, premium, and easy to understand?",
                ],
                [
                  "Conversion Flow",
                  "Are the CTAs, trust sections, and offer structure strong enough?",
                ],
                [
                  "Premium Look",
                  "Does the design feel modern, cinematic, expensive, and credible?",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <p className="mb-2 text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm leading-6 text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-7">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              What You'll Receive
            </p>
            <h2 className="text-3xl font-black md:text-5xl">Premium deliverables</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-black/60 p-5"
              >
                <p className="mb-3 text-base font-bold text-white">{item.title}</p>
                <p className="text-sm leading-6 text-gray-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-[30px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 p-6 md:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Built for
          </p>
          <div className="flex flex-wrap gap-3">
            {builtFor.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-sm text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {loading && (
          <section className="relative mt-14 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

            <div className="relative z-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Audit in progress
              </p>

              <h2 className="mb-7 text-3xl font-black leading-tight md:text-5xl">
                Finding the few fixes that matter most
              </h2>

              {analysisTarget && (
                <p className="mb-7 max-w-2xl truncate rounded-2xl border border-white/10 bg-black/35 px-5 py-3 text-sm text-gray-400">
                  Target: <span className="text-cyan-300">{analysisTarget}</span>
                </p>
              )}

              <div className="grid max-w-4xl gap-3 md:grid-cols-3">
                {processingSteps.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 rounded-2xl border px-5 py-4 transition ${
                      index <= processingStep
                        ? "border-cyan-400/30 bg-cyan-400/10"
                        : "border-white/10 bg-black/35"
                    }`}
                  >
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400"></div>
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {submitted && !loading && (
          <>
            <AIAnalysisResult websiteUrl={analysisTarget} />

            <section className="mt-12 rounded-[36px] border border-cyan-400/25 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-7 md:p-10">
              <h3 className="mb-4 text-2xl font-black md:text-4xl">
                Want SmartAIStack to redesign this conversion flow?
              </h3>
              <p className="mb-7 max-w-3xl text-gray-300">
                Move from audit insights to an upgraded conversion system with a
                premium, trust-first execution plan.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-2xl bg-cyan-400 px-6 py-3 font-black text-black transition hover:scale-[1.02]">
                  Book Strategy Review
                </button>
                <button className="rounded-2xl border border-cyan-300/40 bg-black/40 px-6 py-3 font-bold text-cyan-100 transition hover:border-cyan-300">
                  Get Redesign Consultation
                </button>
              </div>
            </section>

            <BeforeAfterPreview />
            <PricingSection />
            <LeadCapture auditType="upload_audit_request" sourcePage="/upload" />
          </>
        )}

        <Footer />
      </div>
    </main>
  );
}
