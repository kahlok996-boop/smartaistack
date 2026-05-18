"use client";

import Link from "next/link";
import { useState } from "react";
import TrustSection from "@/app/components/TrustSection";

export default function HomePage() {
  const [heroPrompt, setHeroPrompt] = useState("");
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute top-[300px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-6 md:py-10">

        <nav className="sticky top-4 z-50 mb-16">
          <div className="bg-black/70 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-8 py-4 md:py-5 flex justify-between items-center">

            <Link
              href="/"
              className="text-xl md:text-2xl font-black tracking-tight"
            >
              SmartAIStack
            </Link>

            <div className="hidden md:flex items-center gap-8 text-gray-300">

              <Link
                href="/generator"
                className="hover:text-cyan-400 transition"
              >
                Generator
              </Link>

              <Link
                href="/upload"
                className="hover:text-cyan-400 transition"
              >
                Upload
              </Link>

              <Link
                href="/before-after"
                className="hover:text-cyan-400 transition"
              >
                Before / After
              </Link>

              <Link
                href="/about"
                className="hover:text-cyan-400 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-cyan-400 transition"
              >
                Contact
              </Link>

            </div>

            <Link
              href="/generator"
              className="bg-cyan-400 text-black px-4 md:px-5 py-3 rounded-full font-bold text-sm md:text-base hover:scale-105 transition premium-hover"
            >
              Try Generator
            </Link>

          </div>
        </nav>

        {/* HERO */}
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

                    <Link
                      href="/generator"
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 md:px-8 py-4 rounded-2xl font-bold hover:scale-105 transition premium-hover gradient-motion text-center"
                    >
                      Generate Website
                    </Link>

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

        {/* PRODUCT PREVIEW */}
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

        {/* TRUST SECTION */}
        <TrustSection />

        {/* CONVERSION AUDIT */}
        <section className="mb-20 md:mb-28">

          <div className="relative overflow-hidden rounded-[32px] md:rounded-[44px] border border-white/10 bg-white/[0.035] p-6 md:p-12 backdrop-blur-2xl premium-hover soft-glow">

            <div className="absolute top-[-180px] right-[-160px] w-[520px] h-[520px] bg-cyan-400/10 blur-[170px] rounded-full"></div>

            <div className="absolute bottom-[-220px] left-[-160px] w-[520px] h-[520px] bg-purple-500/10 blur-[180px] rounded-full"></div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 md:gap-14 items-center">

              <div className="lg:col-span-6">

                <div className="inline-flex items-center gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-5 py-3 text-sm text-cyan-200 mb-7 backdrop-blur-xl">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.9)]"></div>

                  Premium SaaS Growth System
                </div>

                <h2 className="text-4xl md:text-6xl font-black leading-[1.02] tracking-tight mb-6">
                  Turn your website into a

                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    conversion engine
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-gray-400 leading-8 md:leading-9 mb-8 max-w-2xl">
                  Get an AI Website Audit, conversion optimization priorities,
                  premium redesign direction, and a before / after transformation
                  plan built to capture better leads without rebuilding your
                  entire brand from scratch.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-9">

                  {[
                    "AI Website Audit",
                    "Conversion Optimization",
                    "Premium Redesign Direction",
                    "Lead Capture Strategy",
                  ].map((item) => (

                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-gray-200 backdrop-blur-xl"
                    >
                      <span className="mr-3 text-cyan-400">✦</span>
                      {item}
                    </div>

                  ))}

                </div>

                <div className="flex flex-col sm:flex-row gap-4">

                  <Link
                    href="/upload"
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-7 py-4 rounded-2xl font-bold text-center hover:scale-105 transition premium-hover gradient-motion"
                  >
                    Start AI Audit
                  </Link>

                  <Link
                    href="/before-after"
                    className="border border-white/15 bg-white/5 text-white px-7 py-4 rounded-2xl font-bold text-center hover:border-cyan-400/60 hover:text-cyan-200 transition premium-hover"
                  >
                    View Transformations
                  </Link>

                </div>

              </div>

              <div className="lg:col-span-6">

                <div className="relative rounded-[28px] md:rounded-[36px] border border-white/10 bg-black/55 p-4 md:p-5 shadow-2xl">

                  <div className="absolute -top-5 left-8 rounded-2xl border border-cyan-400/20 bg-black/80 px-5 py-3 backdrop-blur-xl shadow-2xl">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Before / After</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-8">

                    <div className="rounded-[24px] border border-red-400/10 bg-white/[0.03] p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-gray-500 mb-5">Before</p>

                      <div className="space-y-4">
                        <div className="h-4 w-3/4 rounded-full bg-white/10"></div>
                        <div className="h-4 w-1/2 rounded-full bg-white/10"></div>
                        <div className="h-24 rounded-2xl bg-white/[0.06] border border-white/5"></div>
                        <div className="h-10 rounded-xl bg-white/10"></div>
                      </div>

                      <div className="mt-6 rounded-2xl border border-red-400/10 bg-red-500/5 p-4 text-sm text-gray-400 leading-6">
                        Unclear offer, weak visual hierarchy, and missed lead
                        capture moments.
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[24px] border border-cyan-400/20 bg-cyan-400/[0.06] p-5">
                      <div className="absolute top-[-80px] right-[-80px] h-48 w-48 rounded-full bg-cyan-400/20 blur-[70px]"></div>

                      <p className="relative text-sm uppercase tracking-[0.24em] text-cyan-300 mb-5">After</p>

                      <div className="relative space-y-4">
                        <div className="h-4 w-5/6 rounded-full bg-cyan-300/70 shadow-[0_0_22px_rgba(103,232,249,0.4)]"></div>
                        <div className="h-4 w-2/3 rounded-full bg-blue-300/40"></div>
                        <div className="rounded-2xl border border-cyan-300/20 bg-black/35 p-4">
                          <div className="h-20 rounded-xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-500/25"></div>
                        </div>
                        <div className="h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                      </div>

                      <div className="relative mt-6 rounded-2xl border border-cyan-300/20 bg-black/35 p-4 text-sm text-cyan-50 leading-6">
                        Premium positioning, sharper conversion path, and a
                        lead capture CTA engineered for action.
                      </div>
                    </div>

                  </div>

                  <div className="mt-4 grid sm:grid-cols-3 gap-4">

                    {[
                      ["01", "Audit friction"],
                      ["02", "Redesign priority"],
                      ["03", "Capture leads"],
                    ].map(([step, label]) => (

                      <div
                        key={step}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <p className="text-cyan-400 font-black mb-1">{step}</p>
                        <p className="text-sm text-gray-300">{label}</p>
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}