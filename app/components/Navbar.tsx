import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 mb-10 md:mb-16">
      <div className="max-w-7xl mx-auto bg-black/70 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-3">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-black whitespace-nowrap tracking-tight"
        >
          SmartAIStack
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-gray-300">
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

        {/* CTA BUTTON */}
        <Link
          href="/upload"
          className="bg-cyan-400 text-black px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full font-black text-xs sm:text-sm md:text-base hover:scale-105 transition whitespace-nowrap shadow-[0_0_30px_rgba(34,211,238,0.35)]"
        >
          Analyze
        </Link>

      </div>
    </nav>
  );
}