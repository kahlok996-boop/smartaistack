import { comparisons } from "@/data/comparisons";
import { notFound } from "next/navigation";

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const comparison = comparisons.find(
    (item) => item.slug === slug
  );

  if (!comparison) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-4">
          AI Comparison
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          {comparison.tool1} vs {comparison.tool2} 2026
        </h1>

        <p className="text-gray-400 text-xl leading-9 mb-16">
          {comparison.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-4xl font-bold mb-6">
              {comparison.tool1}
            </h2>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>✅ Strong AI capabilities</li>
              <li>✅ Great productivity workflow</li>
              <li>✅ Beginner friendly</li>
              <li>✅ Popular AI platform</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-4xl font-bold mb-6">
              {comparison.tool2}
            </h2>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>✅ Powerful AI features</li>
              <li>✅ Modern AI workflow</li>
              <li>✅ Fast-growing ecosystem</li>
              <li>✅ Excellent user experience</li>
            </ul>
          </div>

        </div>

        <div className="bg-cyan-400 text-black rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-5">
            Final Verdict
          </h2>

          <p className="text-xl leading-9">
            Both {comparison.tool1} and {comparison.tool2}
            are excellent AI tools. The best choice depends
            on your workflow, productivity needs,
            and preferred AI ecosystem.
          </p>
        </div>

      </div>
    </main>
  );
}