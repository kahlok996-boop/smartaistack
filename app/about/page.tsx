export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-4">
          About SmartAIStack
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          AI Website Audit + Premium Conversion Redesign SaaS
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          SmartAIStack helps founders, marketers, and agencies analyze weak
          websites, identify conversion problems, and turn screenshots or URLs
          into premium redesign direction.
        </p>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          The product focuses on practical growth output: clear audit signals,
          before/after positioning, stronger landing page hierarchy, and lead
          capture recommendations that make a website feel more credible.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-10">
          <h2 className="text-4xl font-bold mb-6">
            What We Improve
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>✅ AI Website Audit</li>
            <li>✅ Conversion Problems</li>
            <li>✅ Premium Redesign Direction</li>
            <li>✅ Before/After Transformation</li>
            <li>✅ Landing Page Clarity</li>
            <li>✅ Lead Capture Strategy</li>
          </ul>
        </div>

        <a
          href="/upload"
          className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold"
        >
          Start Website Audit
        </a>
      </div>
    </main>
  );
}
