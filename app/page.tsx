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
      <div className="absolute top-[300px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-6 md:py-10">
        <nav className="sticky top-4 z-50 mb-16">
          <div className="bg-black/70 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-8 py-4 md:py-5 flex justify-between items-center">
            <a href="/" className="text-xl md:text-2xl font-black tracking-tight">
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
              className="bg-cyan-400 text-black px-4 md:px-5 py-3 rounded-full font-bold text-sm md:text-base hover:scale-105 transition premium-hover"
            >
              Try Generator
            </a>
          </div>
        </nav>

        <section className="pt-8 md:pt-20 mb-20 md:mb-28 relative text-center">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[900px] h-[700px] md:h-[900px] bg-purple-500/10 blur-[180px] rounded-full"></div>

  <div className="relative z-10">
    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 md:px-6 py-3 text-sm text-gray-300 mb-8 md:mb-10 backdrop-blur-xl">
      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
      AI Website Transformation Platform
    </div>

    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1] tracking-tight max-w-6xl mx-auto mb-8">
      Transform
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
        Websites Into
      </span>
      Premium AI Experiences
    </h1>

    <p className="text-lg md:text-2xl text-gray-400 leading-8 md:leading-10 max-w-3xl mx-auto mb-10 md:mb-14">
      Analyze websites, generate cinematic redesign directions,
      create startup-inspired UI concepts, and turn ordinary websites
      into premium conversion-focused experiences.
    </p>

    <div className="max-w-5xl mx-auto mb-14 md:mb-16">
      <div className="bg-white/5 border border-white/10 rounded-[28px] md:rounded-[32px] p-4 md:p-5 backdrop-blur-2xl shadow-2xl premium-hover soft-glow">
        <div className="bg-black/60 border border-white/10 rounded-[24px] md:rounded-[28px] p-5 md:p-6">
          <textarea
            value={heroPrompt}
            onChange={(e) => setHeroPrompt(e.target.value)}
            placeholder="Describe your website idea..."
            rows={5}
            className="w-full bg-transparent text-white text-lg md:text-xl outline-none resize-none placeholder:text-gray-500"
          />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-6 mt-6">
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
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 md:px-8 py-4 rounded-2xl font-bold hover:scale-105 transition premium-hover gradient-motion text-center"
            >
              Generate Website
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* SOCIAL PROOF */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto mt-16">
      {[
        ["12,000+", "Websites Analyzed"],
        ["450+", "Premium Directions"],
        ["92%", "Conversion Improvement"],
        ["24/7", "AI Website Generation"],
      ].map(([number, label]) => (
        <div
          key={label}
          className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 premium-hover"
        >
          <p className="text-4xl md:text-5xl font-black text-cyan-400 mb-3">
            {number}
          </p>

          <p className="text-gray-400 leading-7">
            {label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        <section className="mb-20 md:mb-24">
          <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/[0.03] p-5 md:p-14 backdrop-blur-2xl premium-hover soft-glow">
            <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
            <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"></div>

            <div className="relative z-10 text-center mb-10 md:mb-16">
              <p className="text-cyan-400 font-semibold uppercase tracking-[0.22em] md:tracking-[0.3em] mb-5 text-xs md:text-base">
                REAL PRODUCT EXPERIENCE
              </p>

              <h2 className="text-4xl md:text-7xl font-black leading-[1] md:leading-[0.95] mb-6 md:mb-8">
                See SmartAIStack
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  In Action
                </span>
              </h2>

              <p className="text-base md:text-xl text-gray-400 leading-8 md:leading-9 max-w-4xl mx-auto">
                Generate premium website directions, cinematic redesign concepts,
                screenshot analysis, and conversion-focused landing page ideas.
              </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="relative z-10 grid lg:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="lg:col-span-7 relative">
                  <div className="absolute -top-6 -left-6 bg-black border border-white/10 backdrop-blur-xl rounded-3xl px-5 py-4 shadow-2xl z-20 hidden md:block">
                    <p className="text-cyan-400 text-sm font-semibold mb-1">
                      AI Generated Direction
                    </p>

                    <p className="text-3xl font-black">
                      Premium Agency UI
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl bg-black/60 premium-hover">
                    <img
                      src="/screenshots/generator-preview.png"
                      alt="Generator Preview"
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
                  <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl bg-black/60 premium-hover">
                    <img
                      src="/screenshots/upload-preview.png"
                      alt="Upload Preview"
                      className="w-full object-cover"
                    />
                  </div>

                  <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl bg-black/60 premium-hover">
                    <img
                      src="/screenshots/before-after-preview.png"
                      alt="Before After Preview"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-10">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search AI tools..."
            className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {[
            "All",
            "AI Assistant",
            "AI Coding Tool",
            "AI Image Generator",
            "AI Writing Tool",
          ].map((category) => (
            <button
              onClick={() => setSelectedCategory(category)}
              key={category}
              className="bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition premium-hover soft-glow"
            >
              {category}
            </button>
          ))}
        </div>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 md:p-10 premium-hover gradient-motion soft-glow">
            <p className="text-sm uppercase tracking-widest mb-4">
              Featured Tool
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              ChatGPT
            </h2>

            <p className="text-base md:text-lg text-cyan-100 max-w-2xl mb-8 leading-8">
              One of the most powerful AI assistants for coding,
              writing, business planning and productivity.
            </p>

            <a
              href="/chatgpt-review"
              className="inline-block bg-white text-black px-6 py-3 rounded-2xl font-bold premium-hover"
            >
              Explore ChatGPT
            </a>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {filteredTools.map((tool) => (
            <a
              key={tool.name}
              href={`/${tool.slug}`}
              className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-[32px] p-7 hover:border-cyan-400 transition premium-hover soft-glow"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {tool.name}
              </h2>

              <p className="text-cyan-400 text-sm mb-3">
                {tool.category}
              </p>

              <p className="text-gray-400 mb-6 leading-7">
                {tool.description}
              </p>

              <div className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold">
                Read Review
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}