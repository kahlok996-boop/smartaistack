"use client";

import { useState } from "react";

export default function BeforeAfterPreview() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="mt-16 rounded-[40px] border border-cyan-400/20 bg-white/[0.03] p-6 md:p-10 overflow-hidden">
      <div className="mb-10">
        <p className="text-cyan-400 font-semibold mb-4">
          AI Redesign Preview
        </p>

        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
          Before / After Website Direction
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl">
          Preview how a basic website can be transformed into a premium,
          cinematic, and conversion-focused brand experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-[32px] border border-red-400/20 bg-black/40 p-6">
          <p className="text-red-400 font-semibold mb-5">BEFORE</p>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 min-h-[420px]">
            <div className="h-8 w-40 bg-zinc-800 rounded mb-8"></div>
            <div className="h-14 w-4/5 bg-zinc-800 rounded mb-5"></div>
            <div className="h-4 w-full bg-zinc-800 rounded mb-3"></div>
            <div className="h-4 w-5/6 bg-zinc-800 rounded mb-8"></div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="h-24 bg-zinc-800 rounded-2xl"></div>
              <div className="h-24 bg-zinc-800 rounded-2xl"></div>
              <div className="h-24 bg-zinc-800 rounded-2xl"></div>
            </div>

            <div className="h-12 w-40 bg-zinc-800 rounded-2xl"></div>
          </div>
        </div>

        <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-6">
          <p className="text-cyan-400 font-semibold mb-5">AFTER</p>

          <div className="rounded-3xl border border-cyan-400/20 bg-black/70 p-6 min-h-[420px]">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-300 text-sm mb-8">
              Premium AI Direction
            </div>

            <h3 className="text-4xl font-black leading-tight mb-5">
              A Cinematic Website That Feels Expensive
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              Strong visual hierarchy, premium spacing, modern conversion flow,
              trust-driven sections, and clear lead-generation structure.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <p className="text-cyan-400 font-black text-2xl">01</p>
                <p className="text-gray-400 text-sm mt-2">Hero</p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <p className="text-cyan-400 font-black text-2xl">02</p>
                <p className="text-gray-400 text-sm mt-2">Trust</p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <p className="text-cyan-400 font-black text-2xl">03</p>
                <p className="text-gray-400 text-sm mt-2">CTA</p>
              </div>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="w-full rounded-2xl bg-cyan-400 text-black px-6 py-4 font-black text-center hover:scale-[1.02] transition"
            >
              Get Premium Direction
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="mt-10 rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-6 md:p-8">
          <p className="text-cyan-400 font-semibold mb-4">
            Request Premium Direction
          </p>

          <h3 className="text-3xl md:text-4xl font-black mb-5">
            Leave your contact details
          </h3>

          <p className="text-gray-300 leading-8 mb-6 max-w-3xl">
            Send your website details and we will prepare a premium redesign
            direction based on your analysis.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Website URL"
              className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <button className="w-full md:w-auto bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-[1.02] transition">
            Submit Request
          </button>
        </div>
      )}
    </section>
  );
}