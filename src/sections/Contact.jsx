import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { CONTACT_LINKS } from "../data/portfolioData";

const ICONS = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    // TODO(backend): wire this up to a real contact endpoint / email service.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitting(false);
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section
      id="contact"
      className="px-6 sm:px-10 lg:px-20 py-24 sm:py-32 bg-cream text-ink"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-serif italic text-gold-dark text-sm mb-4">
              06 — Contact
            </p>

            <h2 className="font-serif font-extrabold text-5xl sm:text-6xl leading-[0.95] mb-6">
              Let's work
              <br />
              together.
            </h2>

            <p className="text-slate-600 text-lg max-w-md mb-8">
              Open to freelance work, internships, and collaborations in web
              development and AI. I'll reply as soon as I can.
            </p>

            {/* Resume link */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-ink font-semibold rounded-full px-6 py-3 transition mb-10"
            >
              <Download className="w-4 h-4" />
              Download resume
            </a>

            <div className="space-y-4">
              {CONTACT_LINKS.map((link) => {
                const Icon = ICONS[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="flex items-center justify-between gap-4 bg-white/60 hover:bg-white border border-ink/10 rounded-2xl px-5 py-4 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gold-dark" />
                      </span>

                      <div>
                        <p className="text-[11px] tracking-[0.15em] text-slate-500 font-mono mb-0.5">
                          {link.label}
                        </p>

                        <p className="font-medium text-ink">
                          {link.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/60 border border-ink/10 rounded-2xl p-8 space-y-6"
          >
            {submitted && (
              <div
                role="status"
                className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl px-4 py-2.5"
              >
                Thanks! Your message has been sent.
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-[11px] tracking-[0.15em] text-slate-500 font-mono mb-2"
              >
                NAME
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-white border border-ink/15 rounded-xl px-4 py-3 text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[11px] tracking-[0.15em] text-slate-500 font-mono mb-2"
              >
                EMAIL
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full bg-white border border-ink/15 rounded-xl px-4 py-3 text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[11px] tracking-[0.15em] text-slate-500 font-mono mb-2"
              >
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or role..."
                className="w-full bg-white border border-ink/15 rounded-xl px-4 py-3 text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark disabled:opacity-60 text-ink font-semibold rounded-full px-6 py-3.5 transition"
            >
              <Send className="w-4 h-4" />
              {submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-16 pt-8 border-t border-ink/10 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Sosena Gossaye. All rights reserved.
          </p>

          <p className="font-mono text-xs">
            Designed & built with React and Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
}

