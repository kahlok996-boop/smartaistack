import { tools } from "@/data/tools";
import { notFound } from "next/navigation";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-4">
          {tool.category}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          {tool.name} Review 2026
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-14">
          {tool.description}
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-16">
          <h2 className="text-4xl font-bold mb-10">
            Quick Verdict
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <p className="text-gray-500 mb-2">Best For</p>
              <p className="text-2xl font-bold">
              {tool.category}
              </p>
            </div>

            <div>
              <p className="text-gray-500 mb-2">Pricing</p>
              <p className="text-2xl font-bold">
                {tool.pricing}
              </p>
            </div>

            <div>
              <p className="text-gray-500 mb-2">Difficulty</p>
              <p className="text-2xl font-bold">
                Beginner Friendly
              </p>
            </div>

            <div>
              <p className="text-gray-500 mb-2">Rating</p>
              <p className="text-2xl font-bold">
                ★★★★★ {tool.rating}
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}