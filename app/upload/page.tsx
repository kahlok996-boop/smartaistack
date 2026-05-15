"use client";

import { useState } from "react";
import AIAnalysisResult from "@/app/components/AIAnalysisResult";

export default function UploadPage() {
  const [mode, setMode] = useState<"url" | "upload">("url");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    setSubmitted(true);
  };

  const handleAnalyzeUrl = () => {
    if (!websiteUrl.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative px-6 md:px-8 py-16">
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-5 py-3 text-cyan-300 text-sm font-semibold mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          AI Website Screenshot Analysis
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] max-w-5xl">
          Analyze Your Website
          <br />
          With AI
        </h1>

        <p className="text-lg md:text-xl text-gray-400 leading-9 mb-14 max-w-3xl">
          Paste your website link or upload a screenshot. SmartAIStack will
          simulate a premium redesign direction, conversion review, and visual
          improvement analysis.
        </p>

        <section className="grid lg:grid-cols-2 gap-10 mb-14">
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-6 md:p-10 backdrop-blur-xl">
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => setMode("url")}
                className={`px-5 py-3 rounded-full font-bold transition ${
                  mode === "url"
                    ? "bg-cyan-400 text-black"
                    : "bg-black border border-zinc-700 text-gray-300"
                }`}
              >
                Website Link
              </button>

              <button
                onClick={() => setMode("upload")}
                className={`px-5 py-3 rounded-full font-bold transition ${
                  mode === "upload"
                    ? "bg-cyan-400 text-black"
                    : "bg-black border border-zinc-700 text-gray-300"
                }`}
              >
                Upload Screenshot
              </button>
            </div>

            {mode === "url" ? (
              <div className="border border-cyan-400/20 rounded-[32px] p-6 md:p-10 bg-black/40">
                <p className="text-cyan-400 font-semibold mb-4">
                  Paste Website Link
                </p>

                <input
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  type="url"
                  placeholder="https://example.com"
                  className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-5 text-white outline-none focus:border-cyan-400 mb-6"
                />

                <button
                  onClick={handleAnalyzeUrl}
                  className="w-full bg-cyan-400 text-black px-8 py-5 rounded-2xl font-black hover:scale-[1.02] transition"
                >
                  Analyze Website Link
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

                    <label className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold cursor-pointer hover:scale-105 transition">
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

                    <p className="text-3xl font-black mb-4">
                      Drop your screenshot here
                    </p>

                    <p className="text-gray-400 mb-8 leading-7">
                      Upload a PNG, JPG, or website screenshot.
                    </p>

                    <label className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold cursor-pointer hover:scale-105 transition">
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

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
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

        {submitted && <AIAnalysisResult />}
      </div>
    </main>
  );
}