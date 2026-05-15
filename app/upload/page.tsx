export default function UploadPage() {
    return (
      <main className="min-h-screen bg-black text-white px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-4">
            Upload Screenshot
          </p>
  
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Upload Your Website Screenshot
          </h1>
  
          <p className="text-xl text-gray-400 leading-9 mb-12 max-w-3xl">
            Upload your current website screenshot and get a simulated premium
            redesign direction. This MVP focuses on previewing the creative
            direction first, before building real AI redesign features.
          </p>
  
          <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-10">
            <div className="border-2 border-dashed border-cyan-400/30 rounded-3xl p-12 text-center bg-black/40">
              <p className="text-3xl font-bold mb-4">
                Drop your screenshot here
              </p>
  
              <p className="text-gray-400 mb-8">
                PNG, JPG, or website screenshot preview
              </p>
  
              <label className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold cursor-pointer hover:scale-105 transition">
                Choose Screenshot
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </section>
  
          <section className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h2 className="text-xl font-bold mb-3">1. Upload</h2>
              <p className="text-gray-400 leading-7">
                Add a screenshot of your current website or landing page.
              </p>
            </div>
  
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h2 className="text-xl font-bold mb-3">2. Preview Direction</h2>
              <p className="text-gray-400 leading-7">
                SmartAIStack simulates premium redesign ideas and conversion flow.
              </p>
            </div>
  
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h2 className="text-xl font-bold mb-3">3. Leave Contact</h2>
              <p className="text-gray-400 leading-7">
                Users can submit contact details for a real redesign quote later.
              </p>
            </div>
          </section>
        </div>
      </main>
    );
  }