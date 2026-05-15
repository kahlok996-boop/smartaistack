export default function GeneratorPage() {
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

              {/* INDUSTRY */}
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

              {/* STYLE */}
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

              {/* VIBE */}
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

              {/* BUTTON */}
              <button className="w-full h-16 rounded-2xl bg-cyan-400 text-black text-lg font-black hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                Generate Premium Direction
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

            <h2 className="text-5xl md:text-6xl font-black leading-[1] mb-6">
              Premium Agency
              <br />
              Landing Page
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              A cinematic website direction designed to make your brand look
              more premium, modern, trustworthy, and conversion-focused.
            </p>

            {/* SCORE */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 mb-6">
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">
                  AI Premium Score
                </span>

                <span className="text-cyan-400 font-black text-3xl">
                  92%
                </span>
              </div>

              <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-cyan-400 rounded-full" />
              </div>
            </div>

            {/* BLOCKS */}
            <div className="space-y-5">

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-gray-500 text-sm mb-3">
                  Headline
                </p>

                <p className="text-2xl font-bold leading-9">
                  Transform Your Agency Brand Into a Premium Digital Experience
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-gray-500 text-sm mb-3">
                  CTA
                </p>

                <p className="text-2xl font-bold">
                  Get Premium Website Direction
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-gray-500 text-sm mb-4">
                  Design Direction
                </p>

                <p className="text-gray-300 leading-8 text-lg">
                  Use cinematic spacing, premium typography, high-contrast hero
                  sections, startup-inspired UI layouts, glowing CTA blocks,
                  trust sections, and modern conversion flow.
                </p>
              </div>

              {/* SUGGESTED SECTIONS */}
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

              {/* COLORS */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-gray-500 text-sm mb-4">
                  Suggested Color Palette
                </p>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/10" />
                  <div className="w-12 h-12 rounded-xl bg-cyan-400" />
                  <div className="w-12 h-12 rounded-xl bg-white" />
                  <div className="w-12 h-12 rounded-xl bg-zinc-700" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SCREENSHOT ANALYSIS */}
        <section className="rounded-[40px] border border-cyan-400/20 bg-cyan-400/[0.04] p-6 md:p-12 mb-28">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-semibold mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            AI Website Screenshot Analysis
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-[0.95] mb-6">
            Upload Your Website
            <br />
            Screenshot
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-3xl mb-12">
            Upload your current website screenshot and preview how SmartAIStack
            can turn it into a more premium, cinematic, and conversion-focused
            website direction.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">

            {/* LEFT */}
            <div className="rounded-[32px] border border-white/10 bg-black/40 p-6 md:p-8">

              <p className="text-cyan-400 text-sm font-semibold mb-5">
                Upload Screenshot
              </p>

              <div className="rounded-[28px] border border-dashed border-cyan-400/30 bg-black/40 p-12 flex flex-col items-center justify-center text-center min-h-[450px]">

                <div className="w-24 h-24 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-5xl text-cyan-400 mb-8">
                  ↑
                </div>

                <h3 className="text-4xl font-black mb-6">
                  Drop your screenshot here
                </h3>

                <p className="text-gray-400 text-lg leading-8 max-w-md mb-8">
                  Upload a PNG, JPG, or website screenshot. This MVP will
                  simulate a premium redesign direction.
                </p>

                <button className="h-16 px-10 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-105 transition-all">
                  Choose Screenshot
                </button>

              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[32px] border border-white/10 bg-black/40 p-6 md:p-8">

              <p className="text-cyan-400 text-sm font-semibold mb-6">
                Premium Direction Preview
              </p>

              <h3 className="text-5xl font-black leading-tight mb-8">
                What SmartAIStack
                <br />
                Will Analyze
              </h3>

              <div className="space-y-5">

                {[
                  {
                    title: "Visual Hierarchy",
                    desc: "Is the hero section clear, premium, and easy to understand?",
                  },
                  {
                    title: "Conversion Flow",
                    desc: "Are the CTAs, trust sections, and offer structure strong enough?",
                  },
                  {
                    title: "Premium Look",
                    desc: "Does the design feel modern, cinematic, expensive, and credible?",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-black/40 p-6"
                  >
                    <p className="text-gray-500 text-sm mb-3">
                      {item.title}
                    </p>

                    <p className="text-gray-300 text-lg leading-8">
                      {item.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* STEPS */}
          <div className="grid md:grid-cols-3 gap-5">

            {[
              {
                step: "Step 1",
                title: "Upload",
                desc: "Add a screenshot of your current website or landing page.",
              },
              {
                step: "Step 2",
                title: "Preview Direction",
                desc: "SmartAIStack simulates premium redesign ideas and conversion flow.",
              },
              {
                step: "Step 3",
                title: "Leave Contact",
                desc: "Users can submit contact details for a real redesign quote later.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-black/40 p-8"
              >
                <p className="text-cyan-400 text-sm font-semibold mb-4">
                  {item.step}
                </p>

                <h4 className="text-3xl font-black mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-lg leading-8">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </section>

      </div>
    </main>
  );
}