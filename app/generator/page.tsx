"use client";

import { useState } from "react";

export default function GeneratorPage() {
  const [industry, setIndustry] = useState("Agency");
  const [style, setStyle] = useState("Premium");
  const [vibe, setVibe] = useState("Cinematic");

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative px-8 py-16">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="inline-flex items-center gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-5 py-3 text-cyan-300 text-sm font-semibold mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          AI Landing Page Generator
        </div>

        <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[0.95] max-w-5xl">
          Generate Premium
          <br />
          Website Directions
        </h1>

        <p className="text-xl text-gray-400 leading-10 mb-16 max-w-3xl">
          Create cinematic AI landing page directions, premium redesign ideas,
          startup-inspired layouts, and conversion-focused UI concepts.
        </p>

        <section className="grid lg:grid-cols-2 gap-10">

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-10 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black">
                Create Your Direction
              </h2>

              <div className="text-cyan-400 text-sm font-semibold">
                AI Powered
              </div>
            </div>

            <label className="block mb-7">
              <span className="block text-gray-400 mb-3">
                Industry
              </span>

              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-black/50 border border-zinc-700 rounded-2xl px-5 py-5 text-white outline-none focus:border-cyan-400"
              >
                <option>Agency</option>
                <option>Restaurant</option>
                <option>Real Estate</option>
                <option>Automotive</option>
                <option>Fitness</option>
                <option>Beauty</option>
                <option>Education</option>
                <option>SaaS</option>
                <option>Local Business</option>
                <option>Ecommerce</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block mb-7">
              <span className="block text-gray-400 mb-3">
                Style
              </span>

              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-black/50 border border-zinc-700 rounded-2xl px-5 py-5 text-white outline-none focus:border-cyan-400"
              >
                <option>Premium</option>
                <option>Luxury</option>
                <option>Minimal</option>
                <option>Modern SaaS</option>
                <option>Bold Startup</option>
                <option>Creative Studio</option>
              </select>
            </label>

            <label className="block mb-10">
              <span className="block text-gray-400 mb-3">
                Vibe
              </span>

              <select
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="w-full bg-black/50 border border-zinc-700 rounded-2xl px-5 py-5 text-white outline-none focus:border-cyan-400"
              >
                <option>Cinematic</option>
                <option>Elegant</option>
                <option>High Conversion</option>
                <option>Corporate</option>
                <option>Futuristic</option>
                <option>Warm & Friendly</option>
              </select>
            </label>

            <button className="w-full bg-cyan-400 text-black px-8 py-5 rounded-2xl font-black hover:scale-[1.02] transition shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              Generate Premium Direction
            </button>

          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 rounded-[32px] p-10 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-8">

              <p className="text-cyan-400 font-semibold">
                AI Generated Result Preview
              </p>

              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                Live Simulation
              </div>

            </div>

            <h2 className="text-5xl font-black mb-6 leading-tight">
              {style} {industry}
              <br />
              Landing Page
            </h2>

            <p className="text-gray-300 leading-8 mb-10 text-lg">
              A {vibe.toLowerCase()} website direction designed to make your
              brand look more premium, modern, trustworthy, and conversion-focused.
            </p>

            <div className="space-y-6">

              <div className="bg-black/40 border border-zinc-800 rounded-3xl p-6">
                <p className="text-gray-500 mb-3">
                  Headline
                </p>

                <p className="text-2xl font-black leading-tight">
                  Transform Your {industry} Brand Into
                  a Premium Digital Experience
                </p>
              </div>

              <div className="bg-black/40 border border-zinc-800 rounded-3xl p-6">
                <p className="text-gray-500 mb-3">
                  CTA
                </p>

                <p className="text-2xl font-black">
                  Get Premium Website Direction
                </p>
              </div>

              <div className="bg-black/40 border border-zinc-800 rounded-3xl p-6">
                <p className="text-gray-500 mb-3">
                  Design Direction
                </p>

                <p className="text-gray-300 leading-8">
                  Use cinematic spacing, premium typography,
                  high-contrast hero sections, startup-inspired
                  UI layouts, glowing CTA blocks, trust sections,
                  and modern conversion flow.
                </p>
              </div>

              <div className="bg-black/40 border border-zinc-800 rounded-3xl p-6">
                <p className="text-gray-500 mb-3">
                  Suggested Color Palette
                </p>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-700"></div>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400"></div>
                  <div className="w-14 h-14 rounded-2xl bg-white"></div>
                  <div className="w-14 h-14 rounded-2xl bg-zinc-700"></div>
                </div>
              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}