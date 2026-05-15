"use client";

import { useState } from "react";

export default function LeadCapture() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    websiteType: "",
    budget: "",
    websiteUrl: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {

    setLoading(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbzemDn7FYDGxj7wN0xki_-iPN--sFOTOZ1HbSIcJcBRXEBVhT6Esj5dytgRTIQR2jQZ1A/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
      }
    );

    setLoading(false);

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      whatsapp: "",
      websiteType: "",
      budget: "",
      websiteUrl: "",
      message: "",
    });
  };

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
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
        />

        <input
          type="text"
          placeholder="WhatsApp Number"
          value={form.whatsapp}
          onChange={(e) =>
            setForm({
              ...form,
              whatsapp: e.target.value,
            })
          }
          className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
        />

        <select
          value={form.websiteType}
          onChange={(e) =>
            setForm({
              ...form,
              websiteType: e.target.value,
            })
          }
          className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
        >
          <option value="">Website Type</option>
          <option>Landing Page</option>
          <option>Business Website</option>
          <option>Ecommerce</option>
          <option>Agency Website</option>
          <option>SaaS Website</option>
          <option>Other</option>
        </select>

        <select
          value={form.budget}
          onChange={(e) =>
            setForm({
              ...form,
              budget: e.target.value,
            })
          }
          className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
        >
          <option value="">Estimated Budget</option>
          <option>Below $300</option>
          <option>$300 - $800</option>
          <option>$800 - $1500</option>
          <option>$1500+</option>
        </select>

        <input
          type="text"
          placeholder="Website URL"
          value={form.websiteUrl}
          onChange={(e) =>
            setForm({
              ...form,
              websiteUrl: e.target.value,
            })
          }
          className="bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
        />

      </div>

      <textarea
        rows={4}
        placeholder="Tell us what you want to improve..."
        value={form.message}
        onChange={(e) =>
          setForm({
            ...form,
            message: e.target.value,
          })
        }
        className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 mb-6 resize-none"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full md:w-auto bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-[1.02] transition disabled:opacity-60"
      >
        {loading
          ? "Submitting..."
          : success
          ? "Submitted Successfully"
          : "Request Premium Quote"}
      </button>

    </section>
  );
}