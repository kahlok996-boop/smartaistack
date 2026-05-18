"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AIAnalysisResult from "@/app/components/AIAnalysisResult";
import BeforeAfterPreview from "@/app/components/BeforeAfterPreview";
import PricingSection from "@/app/components/PricingSection";
import LeadCapture from "@/app/components/LeadCapture";

export default function UploadPage() {
  const [mode, setMode] = useState<"url" | "upload">("url");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const startAnalysis = () => {
    setSubmitted(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 3500);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    startAnalysis();
  };

  const handleAnalyzeUrl = () => {
    if (!websiteUrl.trim()) return;
    startAnalysis();
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative px-5 md:px-8 py-8 md:py-16">
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <Navbar />

        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 mb-8">
          <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
          AI Website Audit
        </div>

        <h1 className="max-w-5xl text-4xl font-black leading-[0.98] sm:text-5xl md:text-7xl mb-7">
          Get a clear website audit in minutes
        </h1>

        <p className="mb-12 max-w-3xl text-base leading-8 text-gray-400 md:mb-16 md:text-xl md:leading-9">
          Paste a link or upload a screenshot. SmartAIStack turns the analysis
          into a simple executive summary, prioritized fixes, and a conversion
          focused redesign direction.
        </p>

        <section className="grid gap-6 md:gap-10 lg:grid-cols-[1fr_0.9fr] mb-16">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl md:p-8">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setMode("url")}
                className={`px-3 md:px-5 py-3 md:py-3 rounded-full font-bold text-sm md:text-base transition ${
                  mode === "url"
                    ? "bg-cyan-400 text-black"
                    : "bg-black border border-zinc-700 text-gray-300"
                }`}
              >
                Website Link
              </button>

              <button
                onClick={() => setMode("upload")}
                className={`px-3 md:px-5 py-3 md:py-3 rounded-full font-bold text-sm md:text-base transition ${
                  mode === "upload"
                    ? "bg-cyan-400 text-black"
                    : "bg-black border border-zinc-700 text-gray-300"
                }`}
              >
                Upload Screenshot
              </button>
            </div>

            {mode === "url" ? (
              <div className="rounded-[26px] border border-white/10 bg-black/35 p-5 md:p-8">
                <p className="mb-4 font-semibold text-cyan-300">
                  Website link
                </p>

                <input
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  type="url"
                  placeholder="https://example.com"
                  className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 md:py-5 text-white outline-none focus:border-cyan-400 mb-6"
                />

                <button
                  onClick={handleAnalyzeUrl}
                  disabled={loading}
                  className="w-full bg-cyan-400 text-black px-5 md:px-8 py-3.5 md:py-5 rounded-2xl font-black text-sm md:text-base hover:scale-[1.02] transition disabled:opacity-60"
                >
                  {loading ? "Analyzing Website..." : "Analyze Website Link"}
                </button>

                {websiteUrl && (
                  <p className="mt-5 truncate rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-400">
                    Ready: <span className="text-cyan-300">{websiteUrl}</span>
                  </p>
                )}
              </div>
            ) : (
              <div className="rounded-[28px] border border-dashed border-cyan-400/30 bg-black/35 p-6 text-center md:p-10">
                {preview ? (
                  <div className="space-y-6">
                    {/* eslint-disable-next-line @next/next/no-img-element -- Blob previews from uploads are not served through the Next.js image optimizer. */}
                    <img
                      src={preview}
                      alt="Uploaded Website Screenshot"
                      className="w-full rounded-3xl border border-cyan-400/20"
                    />

                    <label className="inline-block bg-cyan-400 text-black px-6 md:px-8 py-4 rounded-2xl font-bold cursor-pointer hover:scale-105 transition">
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
                    <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                      <span className="text-4xl">⬆</span>
                    </div>

                    <p className="text-2xl md:text-3xl font-black mb-4">
                      Drop your screenshot here
                    </p>

                    <p className="text-gray-400 mb-8 leading-7">
                      Upload a PNG, JPG, or website screenshot.
                    </p>

                    <label className="inline-block bg-cyan-400 text-black px-6 md:px-8 py-4 rounded-2xl font-bold cursor-pointer hover:scale-105 transition">
                      Choose Screenshot
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

            <p className="mb-7 text-gray-400 leading-7">
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

        {loading && (
          <section className="mt-14 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-6 relative md:p-10">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>

            <div className="relative z-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Audit in progress
              </p>

              <h2 className="mb-7 text-3xl font-black leading-tight md:text-5xl">
                Finding the few fixes that matter most
              </h2>

              <div className="grid max-w-4xl gap-3 md:grid-cols-3">
                {[
                  "Scanning hierarchy",
                  "Ranking blockers",
                  "Writing summary",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-5 py-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {submitted && !loading && (
          <>
            <AIAnalysisResult />
            <BeforeAfterPreview />
            <PricingSection />
            <LeadCapture />
          </>
        )}

        <Footer />
      </div>
    </main>
  );
}