export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 mb-10 md:mb-16">
      <div className="max-w-7xl mx-auto bg-black/70 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-3">

        <a
          href="/"
          className="text-lg md:text-2xl font-black whitespace-nowrap"
        >
          SmartAIStack
        </a>

        <div className="hidden lg:flex items-center gap-8 text-gray-300">
          <a href="/generator" className="hover:text-cyan-400 transition">
            Generator
          </a>

          <a href="/upload" className="hover:text-cyan-400 transition">
            Analyze
          </a>

          <a href="/before-after" className="hover:text-cyan-400 transition">
            Before / After
          </a>

          <a href="/best-ai-tools" className="hover:text-cyan-400 transition">
            Tools
          </a>

          <a href="/compare" className="hover:text-cyan-400 transition">
            Compare
          </a>
        </div>

        <a
          href="/upload"
          className="bg-cyan-400 text-black px-4 md:px-5 py-2 md:py-3 rounded-full font-black text-xs md:text-base hover:scale-105 transition text-center whitespace-nowrap"
        >
          Analyze
        </a>

      </div>
    </nav>
  );
}