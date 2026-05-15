export default function PricingSection() {
    return (
      <section className="mt-16 rounded-[40px] border border-cyan-400/20 bg-white/[0.03] p-6 md:p-10 overflow-hidden">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold mb-4">
            Pricing
          </p>
  
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Choose Your Website Direction Plan
          </h2>
  
          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Start with a free AI analysis, then upgrade when you want a real
            premium redesign direction or full website build.
          </p>
        </div>
  
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              name: "Free Preview",
              price: "$0",
              desc: "Basic AI website analysis and premium direction preview.",
              features: [
                "Website link or screenshot analysis",
                "Basic AI score",
                "Before / after preview",
                "Suggested improvements",
              ],
              cta: "Start Free",
            },
            {
              name: "Premium Direction",
              price: "$99",
              desc: "A full premium redesign direction for your brand or client.",
              features: [
                "Full redesign direction",
                "CTA and conversion strategy",
                "Visual hierarchy improvements",
                "Premium UI section plan",
                "Lead-generation structure",
              ],
              cta: "Get Premium Direction",
              featured: true,
            },
            {
              name: "Full Website Build",
              price: "$499+",
              desc: "A production-ready landing page or website redesign.",
              features: [
                "Full landing page design",
                "Responsive development",
                "Premium animations",
                "Conversion-focused sections",
                "Deployment-ready website",
              ],
              cta: "Request Website Build",
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-7 ${
                plan.featured
                  ? "border-cyan-400/40 bg-cyan-400/[0.08]"
                  : "border-white/10 bg-black/40"
              }`}
            >
              {plan.featured && (
                <div className="inline-flex rounded-full bg-cyan-400 text-black px-4 py-2 text-sm font-black mb-5">
                  Most Popular
                </div>
              )}
  
              <h3 className="text-2xl font-black mb-3">
                {plan.name}
              </h3>
  
              <p className="text-5xl font-black text-cyan-400 mb-4">
                {plan.price}
              </p>
  
              <p className="text-gray-400 leading-7 mb-7">
                {plan.desc}
              </p>
  
              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <p key={feature} className="text-gray-300 leading-7">
                    ✓ {feature}
                  </p>
                ))}
              </div>
  
              <button className="w-full bg-cyan-400 text-black px-6 py-4 rounded-2xl font-black hover:scale-[1.02] transition">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }