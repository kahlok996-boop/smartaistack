export default function ComparePage() {
    return (
      <main className="min-h-screen bg-black text-white px-8 py-16">
        <div className="max-w-5xl mx-auto">
  
          <p className="text-cyan-400 font-semibold mb-4">
            AI Comparisons
          </p>
  
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Best AI Tool Comparisons 2026
          </h1>
  
          <p className="text-gray-400 text-xl leading-9 mb-16">
            Compare the best AI tools for coding, writing,
            image generation, productivity, and business workflows.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8">
  
            <a
              href="/compare/chatgpt-vs-claude"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h2 className="text-4xl font-bold mb-5">
                ChatGPT vs Claude
              </h2>
  
              <p className="text-gray-400 text-lg leading-8">
                Compare ChatGPT and Claude for writing,
                coding, reasoning, and productivity.
              </p>
            </a>
  
            <a
              href="/compare/cursor-vs-bolt"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h2 className="text-4xl font-bold mb-5">
                Cursor vs Bolt.new
              </h2>
  
              <p className="text-gray-400 text-lg leading-8">
                Compare Cursor AI and Bolt.new for AI coding,
                app building, and startup workflows.
              </p>
            </a>
  
          </div>
  
        </div>
      </main>
    );
  }