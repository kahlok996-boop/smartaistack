export default function Footer() {
    return (
      <footer className="mt-24 border-t border-white/10 pt-10 pb-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black mb-4">
              SmartAIStack
            </h2>
  
            <p className="text-gray-400 leading-8 max-w-xl">
              AI-powered website analysis, premium redesign direction,
              before/after previews, and conversion-focused landing page ideas
              for modern brands and agencies.
            </p>
          </div>
  
          <div>
            <p className="text-white font-bold mb-4">Product</p>
            <div className="space-y-3 text-gray-400">
              <a href="/generator" className="block hover:text-cyan-400">Redesign Generator</a>
              <a href="/upload" className="block hover:text-cyan-400">Website Analysis</a>
              <a href="/before-after" className="block hover:text-cyan-400">Before / After</a>
            </div>
          </div>
  
          <div>
            <p className="text-white font-bold mb-4">Resources</p>
            <div className="space-y-3 text-gray-400">
              <a href="/about" className="block hover:text-cyan-400">About</a>
              <a href="/contact" className="block hover:text-cyan-400">Contact</a>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-gray-500 text-sm">
          <p>© 2026 SmartAIStack. All rights reserved.</p>
          <p>Built for premium AI website direction.</p>
        </div>
      </footer>
    );
  }