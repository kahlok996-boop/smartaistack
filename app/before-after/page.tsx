"use client";

import { useState } from "react";
import { submitAuditLead } from "@/app/lib/audit-leads";

export default function BeforeAfterPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess(false);
    setError("");

    const response = await submitAuditLead({
      email: form.email,
      audit_type: "before_after_page_request",
      source_page: "/before-after",
      notes: [
        form.name && `Name: ${form.name}`,
        form.message && `Message: ${form.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    setLoading(false);

    if (!response.ok) {
      setError(response.message);
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="inline-flex items-center gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-5 py-3 text-cyan-300 text-sm font-semibold mb-8">
        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
        Before / After Premium Preview
      </div>

      <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[0.95] max-w-5xl">
        Turn a Basic Website
        <br />
        Into a Premium Brand
      </h1>

      <p className="text-xl text-gray-400 leading-10 mb-14 max-w-3xl">
        Show clients the value of premium redesign faster with a visual
        before/after concept. This MVP simulates how a simple website can
        become more cinematic, trustworthy, and conversion-focused.
      </p>

      <section className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-8 backdrop-blur-xl">
          <p className="text-red-400 font-semibold mb-5">
            BEFORE
          </p>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[28px] p-8 min-h-[420px]">
            <div className="flex justify-between items-center mb-10">
              <div className="h-8 w-40 bg-zinc-800 rounded"></div>
              <div className="flex gap-3">
                <div className="h-4 w-14 bg-zinc-800 rounded"></div>
                <div className="h-4 w-14 bg-zinc-800 rounded"></div>
                <div className="h-4 w-14 bg-zinc-800 rounded"></div>
              </div>
            </div>

            <div className="h-16 w-4/5 bg-zinc-800 rounded mb-6"></div>
            <div className="h-4 w-full bg-zinc-800 rounded mb-3"></div>
            <div className="h-4 w-5/6 bg-zinc-800 rounded mb-10"></div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="h-24 bg-zinc-800 rounded-2xl"></div>
              <div className="h-24 bg-zinc-800 rounded-2xl"></div>
              <div className="h-24 bg-zinc-800 rounded-2xl"></div>
            </div>

            <div className="h-12 w-40 bg-zinc-800 rounded-2xl"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 rounded-[32px] p-8 backdrop-blur-xl">
          <p className="text-cyan-400 font-semibold mb-5">
            AFTER
          </p>

          <div className="bg-black/70 border border-cyan-400/20 rounded-[28px] p-8 min-h-[420px]">
            <div className="inline-flex bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 text-cyan-300 text-sm mb-8">
              Premium AI Direction
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              A Cinematic Website That Feels Expensive
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              Strong visual hierarchy, premium spacing, modern conversion
              flow, trust-driven sections, and premium storytelling designed
              to increase perceived brand value.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-4">
                <p className="text-cyan-400 font-black text-2xl">01</p>
                <p className="text-gray-400 text-sm mt-2">Clear Hero</p>
              </div>

              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-4">
                <p className="text-cyan-400 font-black text-2xl">02</p>
                <p className="text-gray-400 text-sm mt-2">Trust Flow</p>
              </div>

              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-4">
                <p className="text-cyan-400 font-black text-2xl">03</p>
                <p className="text-gray-400 text-sm mt-2">Better CTA</p>
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                placeholder="Tell us about your website..."
                rows={4}
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              {error && (
                <p className="rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4 text-sm text-red-200">
                  {error}
                </p>
              )}

              {success && (
                <p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 text-sm text-cyan-100">
                  Request saved.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-cyan-400 text-black px-6 py-4 rounded-2xl font-bold hover:scale-[1.02] transition shadow-[0_0_40px_rgba(34,211,238,0.25)] disabled:opacity-60"
              >
                {loading
                  ? "Saving request..."
                  : success
                    ? "Request saved"
                    : "Get Premium Direction"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6 mb-16">
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-7">
          <p className="text-cyan-400 font-semibold mb-3">Visual Value</p>
          <h2 className="text-2xl font-bold mb-3">Clients See the Difference</h2>
          <p className="text-gray-400 leading-7">
            A before/after preview makes the redesign value instantly obvious.
          </p>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-7">
          <p className="text-cyan-400 font-semibold mb-3">Sales Tool</p>
          <h2 className="text-2xl font-bold mb-3">Better for Closing Deals</h2>
          <p className="text-gray-400 leading-7">
            Visual transformation helps agencies explain premium design value faster.
          </p>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-7">
          <p className="text-cyan-400 font-semibold mb-3">Viral Content</p>
          <h2 className="text-2xl font-bold mb-3">Made for Social Media</h2>
          <p className="text-gray-400 leading-7">
            Before/after content is easy to post on TikTok, Facebook, Instagram, and Reels.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 rounded-[32px] p-10">
        <h2 className="text-4xl font-black mb-6">
          Generate Your Own Premium Direction
        </h2>

        <p className="text-gray-300 text-lg leading-8 mb-8 max-w-3xl">
          Start with a simulated premium redesign direction first.
          Real AI redesign and advanced upload workflows can be added later
          after the MVP is validated.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/generator"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Generate Direction
          </a>

          <a
            href="/upload"
            className="inline-block bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-2xl font-bold hover:border-cyan-400 transition"
          >
            Upload Screenshot
          </a>
        </div>
      </section>
    </>
  );
}
