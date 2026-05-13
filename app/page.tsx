import { tools } from "@/data/tools";
"use client";

import { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.desc.toLowerCase().includes(search.toLowerCase()) ||
        tool.category.toLowerCase().includes(search.toLowerCase());
    
      const matchesCategory =
        selectedCategory === "All" ||
        tool.category === selectedCategory;
    
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
    <a href="#">Tools</a>
    <a href="#">Categories</a>
    <a href="#">Newsletter</a>
  </div>
</nav>
        <h1 className="text-6xl font-bold mb-6">
          SmartAIStack
        </h1>

        <p className="text-gray-400 text-xl mb-14">
          Discover the best AI tools for coding, business,
          productivity and website building.
        </p>
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
{["All", "AI Assistant", "Writing", "Research", "Coding"].map(
  (category) => (
      <button
       onClick={() => setSelectedCategory(category)}
        key={category}
        className="bg-zinc-900 border border-zinc-700 text-gray-300 px-5 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition"
      >
        {category}
      </button>
      )
    )}
</div>
<section className="mb-16">
  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-10">
    <p className="text-sm uppercase tracking-widest mb-4">
      Featured Tool
    </p>

    <h2 className="text-5xl font-bold mb-5">
      ChatGPT
    </h2>

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
        <div className="grid md:grid-cols-3 gap-8">
        {filteredTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.link}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition"
            >
              <h2 className="text-3xl font-bold mb-4">
                {tool.name}
              </h2>
              <p className="text-cyan-400 text-sm mb-3">
  {tool.category}
</p>

              <p className="text-gray-400 mb-6">
                {tool.desc}
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