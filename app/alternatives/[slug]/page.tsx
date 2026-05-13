import { alternatives } from "@/data/alternatives";
import { tools } from "@/data/tools";
import { notFound } from "next/navigation";

export default async function AlternativesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const alternative = alternatives.find(
    (item) => item.slug === slug
  );

  if (!alternative) {
    notFound();
  }

  const relatedTools = tools.slice(0, 6);

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-4">
          AI Alternatives
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Best {alternative.tool} Alternatives 2026
        </h1>

        <p className="text-gray-400 text-xl leading-9 mb-16 max-w-4xl">
          {alternative.description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedTools.map((tool) => (
            <a
              key={tool.slug}
              href={`/${tool.slug}`}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <p className="text-cyan-400 text-sm mb-3">
                {tool.category}
              </p>

              <h2 className="text-3xl font-bold mb-4">
                {tool.name}
              </h2>

              <p className="text-gray-400 leading-7 mb-6">
                {tool.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">
                  {tool.rating}
                </span>

                <span className="text-cyan-400 font-bold">
                  Read Review →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}