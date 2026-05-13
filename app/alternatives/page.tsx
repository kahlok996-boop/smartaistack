export default function AlternativesPage() {
    return (
      <main className="min-h-screen bg-black text-white px-8 py-16">
        <div className="max-w-5xl mx-auto">
  
          <p className="text-cyan-400 font-semibold mb-4">
            AI Alternatives
          </p>
  
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Best AI Tool Alternatives 2026
          </h1>
  
          <p className="text-gray-400 text-xl leading-9 mb-16">
            Discover the best alternatives to popular AI tools
            for coding, writing, image generation,
            productivity, and business workflows.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8">
  
            <a
              href="/alternatives/chatgpt-alternatives"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h2 className="text-4xl font-bold mb-5">
                ChatGPT Alternatives
              </h2>
  
              <p className="text-gray-400 text-lg leading-8">
                Explore the best alternatives to ChatGPT
                for coding, writing, and AI productivity.
              </p>
            </a>
  
            <a
              href="/alternatives/cursor-alternatives"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h2 className="text-4xl font-bold mb-5">
                Cursor Alternatives
              </h2>
  
              <p className="text-gray-400 text-lg leading-8">
                Compare the best AI coding tools and alternatives
                to Cursor AI.
              </p>
            </a>
  
          </div>
  
        </div>
      </main>
    );
  }