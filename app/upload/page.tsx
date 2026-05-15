"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AIAnalysisResult from "@/app/components/AIAnalysisResult";
import BeforeAfterPreview from "@/app/components/BeforeAfterPreview";
import PricingSection from "@/app/components/PricingSection";

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

        <div className="inline-flex items-center gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-5 py-3 text-cyan-300 text-sm font-semibold mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          AI Website Screenshot Analysis
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[0.95] max-w-5xl">
          Analyze Your Website
          <br />
          With AI
        </h1>

        <p className="text-base md:text-xl text-gray-400 leading-8 md:leading-9 mb-12 md:mb-14 max-w-3xl">
          Paste your website link or upload a screenshot. SmartAIStack will
          simulate a premium redesign direction, conversion review, and visual
          improvement analysis.
        </p>

        <section className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-14">
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[28px] p-4 md:p-10 backdrop-blur-xl"
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
              <div className="border border-cyan-400/20 rounded-[28px] p-5 md:p-10 bg-black/40">
                <p className="text-cyan-400 font-semibold mb-4">
                  Paste Website Link
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
                  <p className="text-gray-400 mt-6 leading-7">
                    Ready to analyze:{" "}
                    <span className="text-cyan-300">{websiteUrl}</span>
                  </p>
                )}
              </div>
            ) : (
              <div className="border-2 border-dashed border-cyan-400/30 rounded-[32px] p-6 md:p-12 text-center bg-black/40">
                {preview ? (
                  <div className="space-y-6">
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

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 rounded-[32px] p-6 md:p-10 backdrop-blur-xl">
            <p className="text-cyan-400 font-semibold mb-4">
              Premium Direction Preview
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              What SmartAIStack Will Analyze
            </h2>

            <div className="space-y-5">
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
                  className="bg-black/40 border border-zinc-800 rounded-3xl p-6"
                >
                  <p className="text-gray-500 mb-2">{title}</p>
                  <p className="text-gray-300 leading-7">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {loading && (
          <section className="mt-16 rounded-[40px] border border-cyan-400/20 bg-cyan-400/[0.04] p-8 md:p-14 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>

            <div className="relative z-10">
              <p className="text-cyan-400 font-semibold mb-6">
                AI Generation In Progress
              </p>

              <h2 className="text-3xl md:text-6xl font-black leading-tight mb-8">
                Creating Your
                <br />
                Premium Website Direction
              </h2>

              <div className="space-y-5 max-w-2xl">
                {[
                  "Analyzing visual hierarchy...",
                  "Detecting conversion issues...",
                  "Generating premium redesign direction...",
                  "Building cinematic UI structure...",
                  "Optimizing CTA placement...",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-black/40 border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5 flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                    <p className="text-gray-300 text-base md:text-lg">
                      {item}
                    </p>
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
          </>
        )}

        <Footer />
      </div>
    </main>
  );
}