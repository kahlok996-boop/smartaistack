export default function AboutPage() {
    return (
      <main className="min-h-screen bg-black text-white px-8 py-16">
        <div className="max-w-4xl mx-auto">
  
          <p className="text-cyan-400 font-semibold mb-4">
            About SmartAIStack
          </p>
  
          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            Discover The Best AI Tools in 2026
          </h1>
  
          <p className="text-xl text-gray-300 leading-9 mb-10">
            SmartAIStack is an AI tools discovery platform
            focused on helping creators, developers,
            businesses, and startups find the best AI tools
            for productivity, coding, automation,
            image generation, writing, and business workflows.
          </p>
  
          <p className="text-xl text-gray-300 leading-9 mb-10">
            Our goal is to build one of the largest AI tool
            directories and comparison platforms on the internet,
            helping users compare AI tools faster
            and make better decisions.
          </p>
  
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-10">
            <h2 className="text-4xl font-bold mb-6">
              What We Cover
            </h2>
  
            <ul className="space-y-4 text-lg text-gray-300">
              <li>✅ AI Assistants</li>
              <li>✅ AI Coding Tools</li>
              <li>✅ AI Image Generators</li>
              <li>✅ AI Video Tools</li>
              <li>✅ AI Productivity Platforms</li>
              <li>✅ AI Business Workflows</li>
            </ul>
          </div>
  
          <a
            href="/best-ai-tools"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold"
          >
            Explore AI Tools
          </a>
  
        </div>
      </main>
    );
  }