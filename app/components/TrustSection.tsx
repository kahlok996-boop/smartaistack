export default function TrustSection() {
  return (
    <section className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.03] p-6 md:p-12 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-cyan-400 font-semibold mb-4">
          Trusted Website Direction System
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
          Built To Help Brands Look More Premium
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
          SmartAIStack helps agencies, startups, and business owners understand
          how their current website can be improved with better positioning,
          stronger visuals, and clearer conversion structure.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-5 mb-10">
        {[
          ["12,000+", "Websites Analyzed"],
          ["450+", "Premium Directions"],
          ["92%", "Avg. Direction Score"],
          ["24/7", "AI Website Review"],
        ].map(([number, label]) => (
          <div
            key={label}
            className="rounded-3xl border border-white/10 bg-black/40 p-6 text-center"
          >
            <p className="text-4xl font-black text-cyan-400 mb-3">
              {number}
            </p>
            <p className="text-gray-400">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {[
          {
            quote:
              "SmartAIStack makes it easier to explain why a website needs a premium redesign. The before/after direction helps clients understand the value quickly.",
            name: "Agency Owner",
            role: "Landing Page & Web Design",
          },
          {
            quote:
              "The AI analysis flow gives business owners a clear picture of what feels weak and what can be improved visually and commercially.",
            name: "Startup Founder",
            role: "SaaS & Brand Positioning",
          },
          {
            quote:
              "This is useful as a lead magnet because clients can immediately see what their current website is missing.",
            name: "Marketing Consultant",
            role: "Client Acquisition",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="rounded-[32px] border border-white/10 bg-black/40 p-7"
          >
            <p className="text-gray-300 leading-8 mb-8">
              “{item.quote}”
            </p>

            <div>
              <p className="text-white font-black">{item.name}</p>
              <p className="text-cyan-400 text-sm mt-1">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}