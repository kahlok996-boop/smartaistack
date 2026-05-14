"use client";

import { useState } from "react";
import { tools } from "@/data/tools";

export default function HomePage() {
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
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center mb-16">
          <h2 className="text-2xl font-bold text-cyan-400">
            SmartAIStack
          </h2>

          <div className="flex gap-6 text-gray-300">
            <a href="/best-ai-tools" className="hover:text-cyan-400 transition">
              Tools
            </a>
            <a href="/compare" className="hover:text-cyan-400 transition">
              Compare
            </a>
            <a href="/alternatives" className="hover:text-cyan-400 transition">
              Alternatives
            </a>
            <a href="/about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="/contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </nav>

        <section className="relative overflow-hidden mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-cyan-400/20 rounded-full px-5 py-3 mb-8 backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

              <p className="text-sm text-cyan-300 tracking-wide">
                Discover the Future of AI Tools
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8 max-w-5xl">
              The Modern Platform
              <br />
              for Discovering
              <span className="text-cyan-400"> AI Tools</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 leading-10 max-w-3xl mb-12">
              Explore the best AI tools for coding, productivity,
              writing, image generation, startups, automation,
              and next-generation software workflows.
            </p>

            <div className="flex flex-wrap gap-5 mb-14">
              <a
                href="/best-ai-tools"
                className="inline-flex items-center gap-3 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300"
              >
                Explore AI Tools
              </a>

              <a
                href="/best-ai-coding-tools"
                className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-2xl font-bold hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Best AI Coding Tools
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
                <p className="text-4xl font-black text-cyan-400 mb-3">
                  100+
                </p>

                <p className="text-gray-400 leading-7">
                  AI tools, comparisons,
                  and reviews curated for modern workflows.
                </p>
              </div>

              <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
                <p className="text-4xl font-black text-cyan-400 mb-3">
                  2026
                </p>

                <p className="text-gray-400 leading-7">
                  Updated AI rankings,
                  comparisons, and industry trends.
                </p>
              </div>

              <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
                <p className="text-4xl font-black text-cyan-400 mb-3">
                  AI
                </p>

                <p className="text-gray-400 leading-7">
                  Coding, productivity,
                  automation, startups, and business tools.
                </p>
              </div>
            </div>

            <div className="max-w-2xl">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search AI tools..."
                className="w-full bg-zinc-900/80 border border-zinc-700 rounded-3xl px-7 py-5 text-lg text-white outline-none focus:border-cyan-400 backdrop-blur-xl"
              />
            </div>
          </div>
        </section>

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
              className="bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {category}
            </button>
          ))}
        </div>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-10">
            <p className="text-sm uppercase tracking-widest mb-4">
              Featured Tool
            </p>

            <h2 className="text-5xl font-bold mb-5">ChatGPT</h2>

            <p className="text-lg text-cyan-100 max-w-2xl mb-8">
              One of the most powerful AI assistants for coding,
              writing, business planning and productivity.
            </p>

            <a
              href="/chatgpt-review"
              className="inline-block bg-white text-black px-6 py-3 rounded-2xl font-bold"
            >
              Explore ChatGPT
            </a>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Featured Categories</h2>

            <a
              href="/categories/ai-coding-tools"
              className="text-cyan-400 font-semibold"
            >
              View All →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/categories/ai-coding-tools"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold mb-4">AI Coding Tools</h3>
              <p className="text-gray-400 leading-7">
                AI tools for developers, debugging,
                software engineering, and coding workflows.
              </p>
            </a>

            <a
              href="/categories/ai-writing-tools"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold mb-4">AI Writing Tools</h3>
              <p className="text-gray-400 leading-7">
                AI writing assistants for content,
                blogging, copywriting, and productivity.
              </p>
            </a>

            <a
              href="/categories/ai-image-generators"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold mb-4">AI Image Generators</h3>
              <p className="text-gray-400 leading-7">
                Generate AI art, images,
                creative visuals, and concept designs.
              </p>
            </a>

            <a
              href="/categories/ai-video-tools"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold mb-4">AI Video Tools</h3>
              <p className="text-gray-400 leading-7">
                AI video generation,
                editing, avatars, and content workflows.
              </p>
            </a>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Popular Comparisons</h2>

            <a href="/compare" className="text-cyan-400 font-semibold">
              View Comparisons →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/compare/chatgpt-vs-claude"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <p className="text-cyan-400 text-sm mb-4">
                AI Assistant Comparison
              </p>

              <h3 className="text-3xl font-bold mb-4">
                ChatGPT vs Claude
              </h3>

              <p className="text-gray-400 leading-7">
                Compare reasoning, coding,
                writing, productivity, and real-world AI workflows.
              </p>
            </a>

            <a
              href="/compare/cursor-vs-copilot"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <p className="text-cyan-400 text-sm mb-4">
                AI Coding Comparison
              </p>

              <h3 className="text-3xl font-bold mb-4">
                Cursor vs GitHub Copilot
              </h3>

              <p className="text-gray-400 leading-7">
                Compare AI coding workflows,
                debugging, autocomplete, and developer productivity.
              </p>
            </a>

            <a
              href="/compare/cursor-vs-windsurf"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <p className="text-cyan-400 text-sm mb-4">
                AI Coding Comparison
              </p>

              <h3 className="text-3xl font-bold mb-4">
                Cursor vs Windsurf
              </h3>

              <p className="text-gray-400 leading-7">
                Compare two modern AI-native
                coding environments for developers and startups.
              </p>
            </a>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-10">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">
              Featured SEO Guide
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Best AI Coding Tools in 2026
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-8 max-w-3xl">
              Compare the best AI coding tools for developers,
              startups, software engineers, and modern AI-powered development workflows.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/best-ai-coding-tools"
                className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
              >
                View Best AI Coding Tools
              </a>

              <a
                href="/cursor-review"
                className="inline-block bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-full font-bold hover:border-cyan-400 transition"
              >
                Read Cursor Review
              </a>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <a
              key={tool.name}
              href={`/${tool.slug}`}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition"
            >
              <h2 className="text-3xl font-bold mb-4">{tool.name}</h2>

              <p className="text-cyan-400 text-sm mb-3">
                {tool.category}
              </p>

              <p className="text-gray-400 mb-6">
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