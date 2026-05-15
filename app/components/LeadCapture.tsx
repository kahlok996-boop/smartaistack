export default function LeadCapture() {
    return (
      <section className="mt-16 rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-6 md:p-10">
        <p className="text-cyan-400 font-semibold mb-4">
          Get Your Redesign Quote
        </p>
  
        <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
          Want the full premium website direction?
        </h2>
  
        <p className="text-gray-300 text-lg leading-8 max-w-3xl mb-8">
          Leave your details and we can prepare a clearer redesign direction,
          pricing estimate, and next-step plan for your website or client project.
        </p>
  
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
          />
  
          <input
            type="email"
            placeholder="Your Email"
            className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
          />
  
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
          />
  
          <select className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400">
            <option>Website Type</option>
            <option>Landing Page</option>
            <option>Business Website</option>
            <option>Ecommerce</option>
            <option>Agency Website</option>
            <option>SaaS Website</option>
            <option>Other</option>
          </select>
  
          <select className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400">
            <option>Estimated Budget</option>
            <option>Below $300</option>
            <option>$300 - $800</option>
            <option>$800 - $1500</option>
            <option>$1500+</option>
          </select>
  
          <input
            type="text"
            placeholder="Website URL"
            className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
          />
        </div>
  
        <textarea
          rows={4}
          placeholder="Tell us what you want to improve..."
          className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 mb-6 resize-none"
        />
  
        <button className="w-full md:w-auto bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-[1.02] transition">
          Request Premium Quote
        </button>
      </section>
    );
  }