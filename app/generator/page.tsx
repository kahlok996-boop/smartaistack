"use client";

import { useState } from "react";

export default function GeneratorPage() {
  const [industry, setIndustry] = useState("Agency");
  const [style, setStyle] = useState("Premium");
  const [vibe, setVibe] = useState("Cinematic");

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-4">
          AI Landing Page Generator
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Generate a Premium Landing Page Direction
        </h1>

        <p className="text-xl text-gray-400 leading-9 mb-12 max-w-3xl">
          Choose your industry, style, and vibe. SmartAIStack will simulate a
          premium AI-generated landing page direction you can use for client
          presentations, redesign ideas, and creative planning.
        </p>

        <section className="grid lg:grid-cols-2 gap-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Create Your Direction
            </h2>

            <label className="block mb-6">
              <span className="block text-gray-400 mb-3">Industry</span>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white"
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

            <label className="block mb-6">
              <span className="block text-gray-400 mb-3">Style</span>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white"
              >
                <option>Premium</option>
                <option>Luxury</option>
                <option>Minimal</option>
                <option>Modern SaaS</option>
                <option>Bold Startup</option>
                <option>Creative Studio</option>
              </select>
            </label>

            <label className="block mb-8">
              <span className="block text-gray-400 mb-3">Vibe</span>
              <select
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white"
              >
                <option>Cinematic</option>
                <option>Elegant</option>
                <option>High Conversion</option>
                <option>Corporate</option>
                <option>Futuristic</option>
                <option>Warm & Friendly</option>
              </select>
            </label>

            <button className="w-full bg-cyan-400 text-black px-8 py-5 rounded-2xl font-bold hover:scale-105 transition">
              Generate Premium Direction
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-8">
            <p className="text-cyan-400 font-semibold mb-4">
              AI Generated Result Preview
            </p>

            <h2 className="text-4xl font-bold mb-6">
              {style} {industry} Landing Page
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              A {vibe.toLowerCase()} website direction designed to make your
              brand look more premium, trustworthy, and conversion-focused.
            </p>

            <div className="space-y-5">
              <div className="bg-black/50 border border-zinc-800 rounded-2xl p-5">
                <p className="text-gray-500 mb-2">Headline</p>
                <p className="text-xl font-bold">
                  Transform Your {industry} Brand Into a Premium Digital Experience
                </p>
              </div>

              <div className="bg-black/50 border border-zinc-800 rounded-2xl p-5">
                <p className="text-gray-500 mb-2">CTA</p>
                <p className="text-xl font-bold">
                  Book a Free Strategy Call
                </p>
              </div>

              <div className="bg-black/50 border border-zinc-800 rounded-2xl p-5">
                <p className="text-gray-500 mb-2">Design Direction</p>
                <p className="text-gray-300 leading-7">
                  Use dark premium sections, large typography, cinematic visual
                  contrast, strong CTA placement, trust badges, and a clear
                  conversion flow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}