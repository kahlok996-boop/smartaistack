export default function ClaudeReviewPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="sticky top-4 z-50 mb-12">
          <div className="bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 flex flex-wrap gap-4 shadow-2xl">
            <a href="#quick-verdict" className="text-sm text-cyan-400 hover:text-white transition">Quick Verdict</a>
            <a href="#pricing" className="text-sm text-cyan-400 hover:text-white transition">Pricing</a>
            <a href="#features" className="text-sm text-cyan-400 hover:text-white transition">Features</a>
            <a href="#faq" className="text-sm text-cyan-400 hover:text-white transition">FAQ</a>
            <a href="#alternatives" className="text-sm text-cyan-400 hover:text-white transition">Alternatives</a>
          </div>
        </div>

        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-400 font-semibold mb-4">AI Assistant Tools</p>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Claude Review 2026
              </h1>

              <p className="text-xl text-gray-300 leading-9 mb-8">
                Claude is an advanced AI assistant built by Anthropic for
                reasoning, long-form writing, document analysis, research
                workflows, and business productivity.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 text-sm text-cyan-400">⭐ 9.2/10 Rating</span>
                <span className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 text-sm text-cyan-400">Great for Reasoning</span>
                <span className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 text-sm text-cyan-400">Free + Paid Plans</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://claude.ai" target="_blank" className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold">
                  Visit Official Website
                </a>

                <a href="#quick-verdict" className="inline-block bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold hover:border-cyan-400 transition">
                  Read Review
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-600/10 border border-cyan-400/30 rounded-3xl p-8">
              <div className="bg-black/60 border border-zinc-800 rounded-3xl p-8">
                <p className="text-cyan-400 font-semibold mb-4">Quick Summary</p>

                <h2 className="text-3xl font-bold mb-6">
                  Best for reasoning, document analysis, long-form writing, and research workflows.
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p>✅ Excellent long-form reasoning</p>
                  <p>✅ Strong document analysis capabilities</p>
                  <p>✅ Great for writing and research</p>
                  <p>✅ Useful for professional workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="quick-verdict" className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Quick Verdict</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 mb-2">Best For</p>
              <p className="font-semibold">
                Reasoning, document analysis, long-form writing, research workflows
              </p>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Pricing</p>
              <p className="font-semibold">Free + Paid Plans</p>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Difficulty</p>
              <p className="font-semibold">Beginner Friendly</p>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Rating</p>
              <p className="font-semibold">★★★★★ 9.2/10</p>
            </div>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-5">What is Claude?</h2>
          <p className="text-gray-300 leading-8">
            Claude is an AI assistant created by Anthropic. It is designed for
            natural language conversations, complex reasoning, document analysis,
            long-form writing, coding assistance, summarization, and research-heavy
            workflows.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Claude Pros & Cons
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-4">Pros</h3>

              <ul className="space-y-3 text-gray-300">
                <li>✅ Excellent for long-form reasoning</li>
                <li>✅ Great for document analysis</li>
                <li>✅ Strong writing quality</li>
                <li>✅ Useful for research and summaries</li>
                <li>✅ Good for professional and business workflows</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4">Cons</h3>

              <ul className="space-y-3 text-gray-300">
                <li>❌ Some advanced features require a paid plan</li>
                <li>❌ May not be ideal for image generation workflows</li>
                <li>❌ Availability can vary by region</li>
                <li>❌ AI answers still need human review</li>
                <li>❌ Not always the fastest for short tasks</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Claude Pricing</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Free</h3>
              <p className="text-cyan-400 text-2xl font-semibold mb-4">$0</p>

              <ul className="space-y-3 text-gray-300">
                <li>Basic Claude access</li>
                <li>Good for casual writing and research</li>
                <li>Beginner-friendly</li>
              </ul>
            </div>

            <div className="bg-cyan-500 text-black rounded-3xl p-6">
              <p className="font-bold mb-2">MOST POPULAR</p>
              <h3 className="text-lg font-semibold mb-3">Claude Pro</h3>
              <p className="text-2xl font-semibold mb-4">Paid</p>

              <ul className="space-y-3">
                <li>Higher usage limits</li>
                <li>Better for daily work</li>
                <li>Useful for professionals</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Team</h3>
              <p className="text-cyan-400 text-2xl font-semibold mb-4">Paid</p>

              <ul className="space-y-3 text-gray-300">
                <li>Team collaboration</li>
                <li>Business workflows</li>
                <li>Admin and organization features</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="features" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Key Features of Claude
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Long-Form Reasoning</h3>
              <p className="text-gray-300 leading-7">
                Claude is strong at structured reasoning, detailed explanations,
                and thoughtful answers for complex questions.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Document Analysis</h3>
              <p className="text-gray-300 leading-7">
                Claude can help summarize, analyze, compare, and extract insights
                from long documents and research materials.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Writing Assistant</h3>
              <p className="text-gray-300 leading-7">
                Claude is useful for essays, articles, business writing, emails,
                summaries, reports, and long-form content creation.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Research Workflows</h3>
              <p className="text-gray-300 leading-7">
                Claude can support research, brainstorming, outlining, planning,
                and knowledge-heavy productivity workflows.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Claude FAQ</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Is Claude good for writing?</h3>
              <p className="text-gray-300 leading-7">
                Yes. Claude is especially strong for long-form writing, editing,
                outlining, summarizing, and professional writing workflows.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Can Claude analyze documents?</h3>
              <p className="text-gray-300 leading-7">
                Yes. Claude is useful for document analysis, summaries, research,
                comparison, and extracting insights from longer text.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Is Claude better than ChatGPT?</h3>
              <p className="text-gray-300 leading-7">
                Claude is often better for long-form reasoning and document-heavy
                work, while ChatGPT is very strong as a general-purpose AI assistant.
              </p>
            </div>
          </div>
        </section>

        <section id="alternatives" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Best Claude Alternatives
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">ChatGPT</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Great all-around AI assistant for writing, coding, productivity,
                research, and daily AI workflows.
              </p>
              <a href="/chatgpt-review" className="text-cyan-400 font-semibold">
                Read Review →
              </a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Gemini AI</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Google's AI assistant with strong search integration and
                productivity use cases.
              </p>
              <a href="/gemini-review" className="text-cyan-400 font-semibold">
                Read Review →
              </a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Perplexity AI</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Useful for AI search, answer generation, and research-focused workflows.
              </p>
              <a href="/perplexity-review" className="text-cyan-400 font-semibold">
                Read Review →
              </a>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Related AI Tools</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="/chatgpt-review" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition">
              <h3 className="text-lg font-semibold mb-3">ChatGPT Review</h3>
              <p className="text-gray-400 leading-7">
                General-purpose AI assistant for writing, coding, productivity,
                and business workflows.
              </p>
            </a>

            <a href="/gemini-review" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition">
              <h3 className="text-lg font-semibold mb-3">Gemini Review</h3>
              <p className="text-gray-400 leading-7">
                Google's AI assistant for productivity, research, and multimodal
                AI workflows.
              </p>
            </a>

            <a href="/perplexity-review" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition">
              <h3 className="text-lg font-semibold mb-3">Perplexity Review</h3>
              <p className="text-gray-400 leading-7">
                AI-powered answer engine and research assistant for deep web search.
              </p>
            </a>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-5">Final Verdict</h2>

          <div className="mt-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-8">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">
              Recommended AI Assistant
            </p>

            <h3 className="text-4xl font-bold mb-6">Try Claude Today</h3>

            <p className="text-gray-300 text-lg leading-8 mb-8 max-w-3xl">
              Claude is one of the best AI assistants in 2026 for long-form
              writing, reasoning, document analysis, research workflows, and
              business productivity.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://claude.ai" target="_blank" className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Visit Official Website
              </a>

              <a href="/best-ai-tools" className="inline-block bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-full font-bold hover:border-cyan-400 transition">
                Explore More AI Tools
              </a>
            </div>
          </div>

          <p className="text-gray-300 leading-8 mt-8">
            Claude is a strong choice for users who need reliable long-form
            reasoning, document workflows, writing support, and research assistance.
          </p>
        </section>

        <a href="https://claude.ai" target="_blank" className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold">
          Visit Claude Official Website
        </a>
      </div>
    </main>
  );
}