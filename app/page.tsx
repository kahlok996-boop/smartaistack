"use client";

import { useState } from "react";
import { tools } from "@/data/tools";

export default function HomePage() {
  const [heroPrompt, setHeroPrompt] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute top-[300px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-[-200px] left-[20%] w-[600px] h-[600px] bg-cyan-400/10 blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">
        <nav className="sticky top-4 z-50 mb-16">
          <div className="bg-black/70 backdrop-blur-2xl border border-zinc-800 rounded-full px-8 py-5 flex justify-between items-center shadow-2xl">
            <a href="/" className="text-2xl font-black tracking-tight text-white">
              SmartAIStack
            </a>

            <div className="hidden md:flex items-center gap-8 text-gray-300">
              <a href="/best-ai-tools" className="hover:text-cyan-400 transition">
                Tools
              </a>
              <a href="/compare" className="hover:text-cyan-400 transition">
                Compare
              </a>
              <a href="/generator" className="hover:text-cyan-400 transition">
                Generator
              </a>
              <a href="/upload" className="hover:text-cyan-400 transition">
                Upload
              </a>
              <a href="/before-after" className="hover:text-cyan-400 transition">
                Before / After
              </a>
            </div>

            <a
              href="/generator"
              className="bg-cyan-400 text-black px-5 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              Try Generator
            </a>
          </div>
        </nav>

        <section className="pt-8 md:pt-16 mb-28 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-[180px] rounded-full"></div>
            <div className="absolute top-[200px] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-6 py-3 text-sm text-gray-300 mb-10">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              AI Website Generation Platform
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight max-w-6xl mx-auto mb-8">
              Generate
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">
                Premium AI Websites
              </span>
              In Minutes
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 leading-10 max-w-4xl mx-auto mb-14">
              Generate cinematic landing page directions, AI-powered redesign concepts,
              startup-style UI inspiration, and premium website experiences for modern brands.
            </p>

            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-5 shadow-2xl">
                <div className="bg-black/60 border border-white/10 rounded-[28px] p-6">
                  <textarea
                    value={heroPrompt}
                    onChange={(e) => setHeroPrompt(e.target.value)}
                    placeholder="Describe your website idea... e.g. A cinematic AI agency website with dark luxury visuals and futuristic UI..."
                    rows={5}
                    className="w-full bg-transparent text-white text-xl outline-none resize-none placeholder:text-gray-500"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-6 mt-6">
                    <div className="flex flex-wrap gap-3">
                      <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
                        AI Website
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
                        SaaS UI
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
                        Premium Landing Page
                      </div>
                    </div>

                    <a
                      href="/generator"
                      className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition shadow-2xl"
                    >
                      Generate Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-left">
                <p className="text-5xl font-black text-purple-400 mb-4">AI</p>
                <h3 className="text-2xl font-bold mb-4">AI Website Direction</h3>
                <p className="text-gray-400 leading-8">
                  Generate premium landing page concepts, layouts, and redesign directions instantly.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-left">
                <p className="text-5xl font-black text-cyan-400 mb-4">UI</p>
                <h3 className="text-2xl font-bold mb-4">Cinematic UI Experience</h3>
                <p className="text-gray-400 leading-8">
                  Explore startup-inspired visual systems with premium modern aesthetics.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-left">
                <p className="text-5xl font-black text-fuchsia-400 mb-4">2026</p>
                <h3 className="text-2xl font-bold mb-4">Modern AI Startup Feel</h3>
                <p className="text-gray-400 leading-8">
                  Inspired by the latest AI SaaS products, startup platforms, and futuristic UI trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/generator" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition">
              <p className="text-cyan-400 font-semibold mb-3">Step 1</p>
              <h3 className="text-2xl font-bold mb-4">Generate Direction</h3>
              <p className="text-gray-400 leading-7">
                Choose industry, style, and vibe to generate a premium landing page direction.
              </p>
            </a>

            <a href="/upload" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition">
              <p className="text-cyan-400 font-semibold mb-3">Step 2</p>
              <h3 className="text-2xl font-bold mb-4">Upload Screenshot</h3>
              <p className="text-gray-400 leading-7">
                Upload your current website screenshot to preview redesign opportunities.
              </p>
            </a>

            <a href="/before-after" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition">
              <p className="text-cyan-400 font-semibold mb-3">Step 3</p>
              <h3 className="text-2xl font-bold mb-4">See Before / After</h3>
              <p className="text-gray-400 leading-7">
                Compare basic websites with premium AI-inspired redesign directions.
              </p>
            </a>
          </div>
        </section>

        <section className="mb-24">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 md:p-12 backdrop-blur-2xl">
            <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-500/20 blur-[140px] rounded-full"></div>
            <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">
                  AI Creative Workflow
                </p>

                <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                  From a rough idea to a premium website direction
                </h2>

                <p className="text-gray-400 text-lg leading-8 mb-8">
                  SmartAIStack helps you simulate premium landing page concepts,
                  visual hierarchy, CTA structure, color direction, and before/after
                  redesign ideas before building the final website.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/generator"
                    className="bg-cyan-400 text-black px-7 py-4 rounded-2xl font-bold hover:scale-105 transition"
                  >
                    Try Generator
                  </a>

                  <a
                    href="/before-after"
                    className="bg-black/50 border border-white/10 text-white px-7 py-4 rounded-2xl font-bold hover:border-cyan-400 transition"
                  >
                    View Before / After
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[32px] border border-white/10 bg-black/70 p-5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>

                    <p className="text-xs text-gray-500">
                      smartaistack.ai / preview
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/10 border border-white/10 rounded-[28px] p-6">
                    <div className="inline-flex bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan-300 mb-6">
                      Premium AI Direction
                    </div>

                    <h3 className="text-4xl font-black leading-tight mb-5">
                      Cinematic SaaS Landing Page
                    </h3>

                    <p className="text-gray-400 leading-7 mb-6">
                      Dark premium hero, strong CTA, trust sections, modern cards,
                      glow effects, and conversion-focused layout direction.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-black/50 border border-white/10 rounded-2xl p-4">
                        <p className="text-cyan-400 font-black text-2xl">01</p>
                        <p className="text-gray-500 text-sm mt-2">Hero</p>
                      </div>

                      <div className="bg-black/50 border border-white/10 rounded-2xl p-4">
                        <p className="text-purple-400 font-black text-2xl">02</p>
                        <p className="text-gray-500 text-sm mt-2">Trust</p>
                      </div>

                      <div className="bg-black/50 border border-white/10 rounded-2xl p-4">
                        <p className="text-fuchsia-400 font-black text-2xl">03</p>
                        <p className="text-gray-500 text-sm mt-2">CTA</p>
                      </div>
                    </div>

                    <div className="h-32 rounded-3xl border border-white/10 bg-black/40 p-4">
                      <div className="h-3 w-2/3 bg-white/10 rounded mb-3"></div>
                      <div className="h-3 w-full bg-white/10 rounded mb-3"></div>
                      <div className="h-3 w-4/5 bg-white/10 rounded mb-6"></div>
                      <div className="h-10 w-40 bg-cyan-400 rounded-2xl"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 rounded-3xl p-5 shadow-2xl hidden md:block">
                  <p className="text-cyan-400 font-bold mb-1">AI Score</p>
                  <p className="text-3xl font-black">94%</p>
                  <p className="text-gray-500 text-sm">Premium direction match</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 下面保留你原本的 Trusted Layer / Tools / Categories / Comparisons / Tool Grid */}
      </div>
    </main>
  );
}