import { tools } from "@/data/tools";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
    return {
      title: "AI Tool Review | SmartAIStack",
      description:
        "Discover and compare the best AI tools on SmartAIStack.",
    };
  }

  return {
    title: `${tool.name} Review 2026 | SmartAIStack`,
    description: `${tool.description} Compare ${tool.name} pricing, features, pros, cons, alternatives, and use cases.`,
  };
}

export default function ToolReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = tools.filter(
    (item) => item.slug !== tool.slug
  );

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[260px_1fr] gap-10">

        {/* Sticky Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-10 bg-zinc-900 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-bold mb-6">
              On This Page
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <a href="#verdict" className="hover:text-cyan-400 transition">
                Quick Verdict
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                What is {tool.name}?
              </a>

              <a href="#proscons" className="hover:text-cyan-400 transition">
                Pros & Cons
              </a>

              <a href="#alternatives" className="hover:text-cyan-400 transition">
                Alternatives
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div>

          <p className="text-cyan-400 font-semibold mb-4">
            {tool.category}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {tool.name} Review 2026
          </h1>

          <p className="text-lg text-gray-300 mb-10 leading-8 max-w-3xl">
            {tool.description}
          </p>

          {/* Quick Verdict */}
          <div
            id="verdict"
            className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Quick Verdict
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-400 mb-2">Category</p>
                <p className="font-semibold text-xl">
                  {tool.category}
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Pricing</p>
                <p className="font-semibold text-xl">
                  {tool.pricing}
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Difficulty</p>
                <p className="font-semibold text-xl">
                  Beginner Friendly
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Rating</p>
                <p className="font-semibold text-xl">
                  ★★★★★ {tool.rating}
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          <section id="about" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is {tool.name}?
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              {tool.name} is one of the AI tools listed on SmartAIStack.
              It helps users compare AI tools by category, pricing,
              use case, and productivity value.
            </p>
          </section>

          {/* Pros & Cons */}
          <section id="proscons" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {tool.name} Pros & Cons
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">
                  Pros
                </h3>

                <ul className="space-y-4 text-gray-300 text-lg">
                  <li>✅ Easy to use</li>
                  <li>✅ Useful for productivity</li>
                  <li>✅ Good for beginners</li>
                  <li>✅ Helps save time</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">
                  Cons
                </h3>

                <ul className="space-y-4 text-gray-300 text-lg">
                  <li>❌ Some features may require payment</li>
                  <li>❌ Output may need review</li>
                  <li>❌ Not perfect for every use case</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Alternatives */}
          <section id="alternatives" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Best {tool.name} Alternatives
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedTools.map((item) => (
                <a
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition"
                >
                  <p className="text-cyan-400 text-sm mb-3">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {item.description}
                  </p>

                  <div className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold">
                    Read Review
                  </div>
                </a>
              ))}
            </div>
          </section>

          <a
            href="/"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold"
          >
            Back to AI Tools
          </a>
        </div>
      </div>
    </main>
  );
}