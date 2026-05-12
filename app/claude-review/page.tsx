export default function ClaudeReviewPage() {
    return (
      <main className="min-h-screen bg-black text-white px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-4">AI Assistant Tools</p>
  
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Claude AI Review 2026
          </h1>
  
          <p className="text-xl text-gray-300 mb-10">
            Claude is a powerful AI assistant for writing, coding, research,
            business planning, and long-form reasoning.
          </p>
  
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Quick Verdict</h2>
  
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 mb-2">Best For</p>
                <p className="font-semibold">Writing, coding, research, planning</p>
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
                <p className="font-semibold">★★★★★ 9.3/10</p>
              </div>
            </div>
          </div>
  
          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-5">What is Claude AI?</h2>
            <p className="text-gray-300 leading-8">
              Claude is an AI assistant created by Anthropic. It is especially
              strong for long-form writing, reasoning, coding help, summarizing
              documents, and business workflows.
            </p>
          </section>
  
          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-5">Pros</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✅ Great for long answers and reasoning</li>
              <li>✅ Strong writing quality</li>
              <li>✅ Useful for coding and debugging</li>
              <li>✅ Good for business planning</li>
              <li>✅ Easy for beginners to use</li>
            </ul>
          </section>
  
          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-5">Cons</h2>
            <ul className="space-y-3 text-gray-300">
              <li>❌ Some features require paid plan</li>
              <li>❌ Can still make mistakes</li>
              <li>❌ Not a full replacement for human judgment</li>
            </ul>
          </section>
  
          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-5">Is Claude Worth It?</h2>
            <p className="text-gray-300 leading-8">
              Yes. Claude is one of the best AI tools for creators, students,
              business owners, and developers who need high-quality thinking,
              writing, and coding support.
            </p>
          </section>
  
          <a
            href="https://claude.ai"
            target="_blank"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold"
          >
            Visit Claude Official Website
          </a>
        </div>
      </main>
    );
  }