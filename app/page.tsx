const categories = [
  {
    title: "AI Website Builders",
    desc: "Build landing pages, business websites, and SaaS ideas faster with AI.",
    tools: "Framer, Lovable, Replit, Hostinger AI",
  },
  {
    title: "AI Coding Tools",
    desc: "Code faster, debug better, and ship real projects with AI coding assistants.",
    tools: "Cursor, Claude, GitHub Copilot",
  },
  {
    title: "AI Business Tools",
    desc: "Automate marketing, sales, content, customer support, and business workflows.",
    tools: "ChatGPT, Zapier AI, Notion AI",
  },
];

const tools = [
  "Cursor",
  "Claude",
  "ChatGPT",
  "Framer",
  "Lovable",
  "Replit",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold">SmartAIStack</h1>
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#tools">Tools</a>
          <a href="#categories">Categories</a>
          <a href="#newsletter">Newsletter</a>
        </div>
      </nav>

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm text-cyan-400 font-semibold">
            AI Tools Directory for Builders
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discover the Best AI Tools to Build, Code, and Grow Faster.
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            SmartAIStack helps entrepreneurs, creators, and beginners compare the best AI tools for websites, coding, business, and productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#tools"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold text-center"
            >
              Explore AI Tools
            </a>
            <a
              href="#newsletter"
              className="border border-white/20 px-6 py-3 rounded-full font-semibold text-center"
            >
              Get Weekly AI Picks
            </a>
          </div>
        </div>
      </section>

      <section id="categories" className="px-8 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Featured Categories</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-white/10 p-6 rounded-3xl"
            >
              <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-400 mb-5">{item.desc}</p>
              <p className="text-sm text-cyan-400">{item.tools}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="px-8 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Top AI Tools</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <a
            href={
              tool === "Cursor"
                ? "/cursor-review"
                : tool === "Claude"
                ? "/claude-review"
                : "#"
            }
              key={tool}
              className="bg-white text-black p-6 rounded-2xl"
            >
              <h4 className="text-xl font-bold mb-2">{tool}</h4>
              <p className="text-gray-700">
                Coming soon: full review, pricing, pros, cons, and best use cases.
              </p>
              </a>
          ))}
        </div>
      </section>

      <section id="newsletter" className="px-8 py-20 max-w-6xl mx-auto">
        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4">
            Get the best AI tools every week
          </h3>
          <p className="text-gray-400 mb-6">
            Join the SmartAIStack newsletter for AI tools, website ideas, and business workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full text-black flex-1"
            />
            <button className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold">
              Join Free
            </button>
          </div>
        </div>
      </section>

      <footer className="px-8 py-8 border-t border-white/10 text-gray-500 text-sm">
        © 2026 SmartAIStack. Built with AI.
      </footer>
    </main>
  );
}