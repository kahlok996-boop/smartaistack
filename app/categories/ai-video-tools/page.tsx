import { tools } from "@/data/tools";

export default function AIAssistantPage() {
  const assistantTools = tools.filter(
    (tool) => tool.category === "AI Video Generator"
  );

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-4">
          AI Assistant Tools
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          Best AI Video Tools 2026
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-16">
        Discover the best AI video tools for video generation,
          coding, writing, research, automation, and business workflows.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {assistantTools.map((tool) => (
            <a
              key={tool.slug}
              href={`/${tool.slug}`}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition"
            >
              <p className="text-cyan-400 text-sm mb-3">
                {tool.category}
              </p>

              <h2 className="text-3xl font-bold mb-4">
                {tool.name}
              </h2>

              <p className="text-gray-400 mb-6">
                {tool.description}
              </p>

              <div className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold">
                Read Review
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}