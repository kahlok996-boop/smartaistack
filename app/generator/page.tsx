"use client";

import { useState } from "react";

export default function GeneratorPage() {
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState({
    title: "Premium Agency Landing Page",
    headline:
      "Transform Your Agency Brand Into a Premium Digital Experience",
    score: 92,
    cta: "Get Premium Website Direction",
  });

  const handleGenerate = () => {
    setLoading(true);

    setTimeout(() => {
      const results = [
        {
          title: "Luxury SaaS Experience",
          headline:
            "Build A SaaS Website That Feels Like A Billion-Dollar Startup",
          score: 96,
          cta: "Generate SaaS Direction",
        },

        {
          title: "Cinematic Ecommerce Brand",
          headline:
            "Turn Your Ecommerce Brand Into A Premium Shopping Experience",
          score: 94,
          cta: "Generate Ecommerce Direction",
        },

        {
          title: "Modern AI Startup",
          headline:
            "Create An AI Startup Website That Looks Investor-Ready",
          score: 97,
          cta: "Generate AI Startup Direction",
        },
      ];

      const random =
        results[Math.floor(Math.random() * results.length)];

      setResult(random);

      setLoading(false);
    }, 3500);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00d2ff22,transparent_30%),radial-gradient(circle_at_bottom_right,#7c3aed33,transparent_35%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

        {/* HERO */}
        <section className="mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-semibold mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            AI Landing Page Generator
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight max-w-5xl">
            Generate Premium
            <br />
            Website Directions
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-3xl mt-8">
            Create cinematic AI landing page directions, premium redesign ideas,
            startup-inspired layouts, and conversion-focused UI concepts.
          </p>
        </section>

        {/* GENERATOR */}
        <section className="grid lg:grid-cols-2 gap-8 items-start mb-28">

          {/* LEFT */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">

            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black">
                Create Your Direction
              </h2>

              <span className="text-cyan-400 text-sm font-semibold">
                AI Powered
              </span>
            </div>

            <div className="space-y-7">

              <div>
                <label className="block text-sm text-gray-400 mb-3">
                  Industry
                </label>

                <select className="w-full h-16 rounded-2xl bg-black border border-white/10 px-5 text-lg outline-none focus:border-cyan-400">
                  <option>Agency</option>
                  <option>SaaS</option>
                  <option>Ecommerce</option>
                  <option>AI Startup</option>
                  <option>Real Estate</option>
                  <option>Fitness</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-3">
                  Style
                </label>

                <select className="w-full h-16 rounded-2xl bg-black border border-white/10 px-5 text-lg outline-none focus:border-cyan-400">
                  <option>Premium</option>
                  <option>Luxury</option>
                  <option>Minimal</option>
                  <option>Modern</option>
                  <option>Futuristic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-3">
                  Vibe
                </label>

                <select className="w-full h-16 rounded-2xl bg-black border border-white/10 px-5 text-lg outline-none focus:border-cyan-400">
                  <option>Cinematic</option>
                  <option>Corporate</option>
                  <option>Startup</option>
                  <option>Luxury Dark</option>
                </select>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full h-16 rounded-2xl bg-cyan-400 text-black text-lg font-black hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.4)] disabled:opacity-60"
              >
                {loading
                  ? "Generating Premium Direction..."
                  : "Generate Premium Direction"}
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[32px] border border-cyan-400/30 bg-cyan-400/[0.05] backdrop-blur-xl p-8 md:p-10">

            <div className="flex items-center justify-between mb-8">
              <span className="text-cyan-400 text-sm font-semibold">
                AI Generated Result Preview
              </span>

              <span className="text-cyan-300 text-xs">
                ● Live Simulation
              </span>
            </div>

            {loading ? (
              <div className="space-y-6 animate-pulse">
                <div className="h-16 bg-zinc-800 rounded-2xl w-3/4"></div>
                <div className="h-5 bg-zinc-800 rounded-full w-full"></div>
                <div className="h-5 bg-zinc-800 rounded-full w-5/6"></div>

                <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                  <div className="h-6 bg-zinc-800 rounded-full w-1/2 mb-5"></div>

                  <div className="h-4 bg-zinc-800 rounded-full w-full mb-3"></div>

                  <div className="h-4 bg-zinc-800 rounded-full w-4/5"></div>
                </div>

                <div className="space-y-3">
                  {[
                    "Analyzing design hierarchy...",
                    "Generating premium direction...",
                    "Building cinematic structure...",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 text-cyan-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-5xl md:text-6xl font-black leading-[1] mb-6">
                  {result.title}
                </h2>

                <p className="text-gray-300 text-lg leading-8 mb-8">
                  A cinematic website direction designed to make your brand look
                  more premium, modern, trustworthy, and conversion-focused.
                </p>

                <div className="rounded-3xl border border-white/10 bg-black/40 p-6 mb-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">
                      AI Premium Score
                    </span>

                    <span className="text-cyan-400 font-black text-3xl">
                      {result.score}%
                    </span>
                  </div>

                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 rounded-full transition-all duration-700"
                      style={{
                        width: `${result.score}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-5">

                  <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                    <p className="text-gray-500 text-sm mb-3">
                      Headline
                    </p>

                    <p className="text-2xl font-bold leading-9">
                      {result.headline}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                    <p className="text-gray-500 text-sm mb-3">
                      CTA
                    </p>

                    <p className="text-2xl font-bold">
                      {result.cta}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                    <p className="text-gray-500 text-sm mb-4">
                      Suggested Sections
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "Cinematic Hero",
                        "Trust Section",
                        "Before / After",
                        "Pricing CTA",
                        "Testimonials",
                      ].map((item) => (
                        <div
                          key={item}
                          className="px-4 py-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}