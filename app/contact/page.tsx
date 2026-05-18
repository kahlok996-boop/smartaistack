export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-4">
          Contact SmartAIStack
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          Get In Touch
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-14">
          Have questions about AI website audits, premium redesign direction,
          conversion improvement, or lead capture workflows? Contact
          SmartAIStack.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-8">
            Contact Information
          </h2>

          <div className="space-y-6 text-lg">
            <div>
              <p className="text-gray-500 mb-2">
                Website
              </p>

              <p className="font-semibold">
                SmartAIStack
              </p>
            </div>

            <div>
              <p className="text-gray-500 mb-2">
                Email
              </p>

              <a
                href="mailto:kahlok996@gmail.com"
                className="font-semibold text-cyan-400 hover:text-white transition"
              >
                kahlok996@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-500 mb-2">
                Focus
              </p>

              <p className="font-semibold">
                AI Website Audit, Premium Conversion Redesign,
                Before/After Direction, and Lead Capture Strategy
              </p>
            </div>
          </div>
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
