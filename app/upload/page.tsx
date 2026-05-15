"use client";

import { useState } from "react";
import AIAnalysisResult from "@/app/components/AIAnalysisResult";

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
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
          Upload Your Website
          <br />
          Screenshot
        </h1>

        <p className="text-lg md:text-xl text-gray-400 leading-9 mb-14 max-w-3xl">
          Upload your current website screenshot and preview how SmartAIStack
          can turn it into a more premium, cinematic, and conversion-focused
          website direction.
        </p>

        <section className="grid lg:grid-cols-2 gap-10 mb-14">
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-6 md:p-10 backdrop-blur-xl">
            <p className="text-cyan-400 font-semibold mb-4">
              Upload Screenshot
            </p>

            <div className="border-2 border-dashed border-cyan-400/30 rounded-[32px] p-6 md:p-12 text-center bg-black/40">
              {preview ? (
                <div className="space-y-6">
                  <img
                    src={preview}
                    alt="Uploaded Website Screenshot"
                    className="w-full rounded-3xl border border-cyan-400/20"
                  />

                  <label className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold cursor-pointer hover:scale-105 transition shadow-[0_0_40px_rgba(34,211,238,0.25)]">
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
                    This MVP will simulate a premium redesign direction.
                  </p>

                  <label className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold cursor-pointer hover:scale-105 transition shadow-[0_0_40px_rgba(34,211,238,0.25)]">
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

        <section className="grid md:grid-cols-3 gap-6">
          {[
            [
              "Step 1",
              "Upload",
              "Add a screenshot of your current website or landing page.",
            ],
            [
              "Step 2",
              "Preview Direction",
              "SmartAIStack simulates premium redesign ideas and conversion flow.",
            ],
            [
              "Step 3",
              "Leave Contact",
              "Users can submit contact details for a real redesign quote later.",
            ],
          ].map(([step, title, desc]) => (
            <div
              key={step}
              className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-7"
            >
              <p className="text-cyan-400 font-semibold mb-3">{step}</p>
              <h2 className="text-2xl font-bold mb-3">{title}</h2>
              <p className="text-gray-400 leading-7">{desc}</p>
            </div>
          ))}
        </section>

        {preview && <AIAnalysisResult />}
      </div>
    </main>
  );
}