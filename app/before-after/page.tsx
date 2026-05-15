export default function BeforeAfterPage() {
    return (
      <main className="min-h-screen bg-black text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-4">
            Before / After Preview
          </p>
  
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            See How a Basic Website Can Become Premium
          </h1>
  
          <p className="text-xl text-gray-400 leading-9 mb-14 max-w-3xl">
            SmartAIStack helps simulate premium landing page redesign directions
            so you can show clients how their current website could look more
            modern, cinematic, and conversion-focused.
          </p>
  
          <section className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <p className="text-red-400 font-semibold mb-4">
                BEFORE
              </p>
  
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 min-h-[360px]">
                <div className="h-8 w-40 bg-zinc-800 rounded mb-8"></div>
                <div className="h-14 w-3/4 bg-zinc-800 rounded mb-6"></div>
                <div className="h-4 w-full bg-zinc-800 rounded mb-3"></div>
                <div className="h-4 w-5/6 bg-zinc-800 rounded mb-10"></div>
                <div className="h-12 w-40 bg-zinc-800 rounded"></div>
              </div>
            </div>
  
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-8">
              <p className="text-cyan-400 font-semibold mb-4">
                AFTER
              </p>
  
              <div className="bg-black/70 border border-cyan-400/20 rounded-3xl p-8 min-h-[360px]">
                <div className="inline-flex bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 text-cyan-300 text-sm mb-8">
                  Premium AI Direction
                </div>
  
                <h2 className="text-4xl font-black mb-6">
                  A Cinematic Website That Feels Expensive
                </h2>
  
                <p className="text-gray-300 leading-8 mb-8">
                  Strong visual hierarchy, premium spacing, modern conversion
                  flow, trust-driven sections, and premium storytelling designed
                  to increase perceived brand value.
                </p>
  
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                  />
  
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                  />
  
                  <textarea
                    placeholder="Tell us about your website..."
                    rows={4}
                    className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                  />
  
                  <button className="w-full bg-cyan-400 text-black px-6 py-4 rounded-2xl font-bold hover:scale-[1.02] transition">
                    Get Premium Direction
                  </button>
                </div>
              </div>
            </div>
          </section>
  
          <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-6">
              Why Before / After Works
            </h2>
  
            <p className="text-gray-300 text-lg leading-8 mb-8">
              Clients often understand visual transformation faster than technical
              explanations. A strong before/after preview helps make the value of
              redesign, premium UI, and better positioning immediately obvious.
            </p>
  
            <a
              href="/generator"
              className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Generate a Premium Direction
            </a>
          </section>
        </div>
      </main>
    );
  }