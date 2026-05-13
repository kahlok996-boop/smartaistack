export default function ChatGPTVsClaudePage() {
    return (
      <main className="min-h-screen bg-black text-white px-8 py-16">
        <div className="max-w-5xl mx-auto">
  
          <p className="text-cyan-400 font-semibold mb-4">
            AI Comparison
          </p>
  
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            ChatGPT vs Claude 2026
          </h1>
  
          <p className="text-gray-400 text-xl leading-9 mb-16">
            Compare ChatGPT and Claude for coding,
            writing, reasoning, research, and business workflows.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8 mb-16">
  
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-4xl font-bold mb-6">
                ChatGPT
              </h2>
  
              <ul className="space-y-4 text-lg text-gray-300">
                <li>✅ Best for coding</li>
                <li>✅ Strong AI ecosystem</li>
                <li>✅ Excellent productivity</li>
                <li>✅ Fast responses</li>
              </ul>
            </div>
  
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-4xl font-bold mb-6">
                Claude
              </h2>
  
              <ul className="space-y-4 text-lg text-gray-300">
                <li>✅ Great long-form writing</li>
                <li>✅ Excellent reasoning</li>
                <li>✅ Better document analysis</li>
                <li>✅ Natural writing style</li>
              </ul>
            </div>
  
          </div>
  
          <div className="bg-cyan-400 text-black rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-5">
              Final Verdict
            </h2>
  
            <p className="text-xl leading-9">
              ChatGPT is better for coding and productivity,
              while Claude is stronger for writing,
              reasoning, and long-form content workflows.
            </p>
          </div>
  
        </div>
      </main>
    );
  }