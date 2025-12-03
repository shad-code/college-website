"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="bg-[#081428] p-4 rounded-lg shadow-inner space-y-3" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-3">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-[#071226] text-gray-200 px-3 py-2 rounded border border-[#0f2338] focus:outline-none focus:ring-1 focus:ring-yellow-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-[#071226] text-gray-200 px-3 py-2 rounded border border-[#0f2338] focus:outline-none focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        required
        className="w-full bg-[#071226] text-gray-200 px-3 py-2 rounded border border-[#0f2338] focus:outline-none focus:ring-1 focus:ring-yellow-400"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-yellow-400 text-[#071226] px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition w-full md:w-auto"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
