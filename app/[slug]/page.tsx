import { tools } from "@/data/tools";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return {};
  }

  return {
    title: `${tool.name} Review 2026 | SmartAIStack`,
    description: tool.description,

    openGraph: {
      title: `${tool.name} Review 2026 | SmartAIStack`,
      description: tool.description,
      images: ["https://smartaistack.vercel.app/og-image"],
    },

    twitter: {
      card: "summary_large_image",
      title: `${tool.name} Review 2026 | SmartAIStack`,
      description: tool.description,
      images: ["https://smartaistack.vercel.app/og-image"],
    },
  };
}

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${tool.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${tool.name} is an AI tool designed for ${tool.category} workflows and productivity.`,
        },
      },
      {
        "@type": "Question",
        name: `Is ${tool.name} free?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${tool.name} offers ${tool.pricing} pricing plans depending on features and workflow requirements.`,
        },
      },
      {
        "@type": "Question",
        name: `Is ${tool.name} worth using in 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. ${tool.name} is considered one of the best AI tools for modern workflows and AI productivity.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-black text-white px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-4">{tool.category}</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {tool.name} Review 2026
          </h1>

          <p className="text-xl text-gray-300 leading-9 mb-14">
            {tool.description}
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-16">
            <h2 className="text-4xl font-bold mb-10">Quick Verdict</h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-500 mb-2">Best For</p>
                <p className="text-2xl font-bold">{tool.category}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-2">Pricing</p>
                <p className="text-2xl font-bold">{tool.pricing}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-2">Difficulty</p>
                <p className="text-2xl font-bold">Beginner Friendly</p>
              </div>

              <div>
                <p className="text-gray-500 mb-2">Rating</p>
                <p className="text-2xl font-bold">★★★★★ {tool.rating}</p>
              </div>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">What is {tool.name}?</h2>

            <p className="text-gray-300 text-lg leading-9">
              {tool.name} is one of the best AI tools in the {tool.category} category.
              It helps users improve productivity, automate workflows, save time,
              and build smarter digital experiences using AI.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Pros & Cons</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-green-400 mb-6">
                  Pros
                </h3>

                <ul className="space-y-4 text-gray-300 text-lg">
                  <li>✅ Beginner friendly</li>
                  <li>✅ Fast AI workflow</li>
                  <li>✅ Improves productivity</li>
                  <li>✅ Popular among creators</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-red-400 mb-6">
                  Cons
                </h3>

                <ul className="space-y-4 text-gray-300 text-lg">
                  <li>❌ Some features are paid</li>
                  <li>❌ May require learning curve</li>
                  <li>❌ AI output may need editing</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  What is {tool.name}?
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {tool.name} is an AI tool designed for{" "}
                  {tool.category.toLowerCase()} workflows, helping users improve
                  productivity, automate tasks, and build smarter digital
                  experiences.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Is {tool.name} free?
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {tool.name} offers {tool.pricing.toLowerCase()} pricing plans
                  depending on the features and workflow requirements.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Is {tool.name} worth using in 2026?
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  Yes. {tool.name} is considered one of the best AI tools for
                  modern AI workflows, productivity, and automation in 2026.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Related AI Tools</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {tools
                .filter((item) => item.slug !== tool.slug)
                .slice(0, 3)
                .map((item) => (
                  <a
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-400 transition"
                  >
                    <p className="text-cyan-400 text-sm mb-3">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-bold mb-3">{item.name}</h3>

                    <p className="text-gray-400 mb-5">{item.description}</p>

                    <span className="text-cyan-400 font-semibold">
                      Read Review →
                    </span>
                  </a>
                ))}
            </div>
          </section>

          <a
            href="/best-ai-tools"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold"
          >
            Back to Best AI Tools
          </a>
        </div>
      </main>
    </>
  );
}