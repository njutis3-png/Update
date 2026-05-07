"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Send,
  Loader2,
  Check,
} from "lucide-react";
import { EmailSignupForm } from "@/components/email-signup-form";

// TikTok Icon
function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission (in production, connect to email service or Supabase)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials = [
    {
      name: "TikTok",
      handle: "@Ritz_kicks",
      url: "https://www.tiktok.com/@Ritz_kicks",
      icon: TikTokIcon,
      description: "Golf course reviews & content",
    },
    {
      name: "Instagram",
      handle: "@ritz_kicks",
      url: "https://www.instagram.com/ritz_kicks",
      icon: Instagram,
      description: "Behind the scenes & highlights",
    },
    {
      name: "YouTube",
      handle: "@RitzKicks",
      url: "https://www.youtube.com/@RitzKicks",
      icon: Youtube,
      description: "Full-length reviews & vlogs",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f3ee]">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#1d2419]/10 bg-[#f5f3ee]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium text-[#1d2419]/70 transition hover:text-[#1d2419]"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <Link href="/" className="text-lg font-bold tracking-tight text-[#1d2419]">
            RITZ GOLF
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4dc] to-[#f5f3ee]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#2f4f3a]">
              Get in Touch
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#1d2419] sm:text-5xl md:text-6xl">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#1d2419]/60">
              Whether you&apos;re a golf course looking to be featured, a brand interested in
              collaboration, or just want to say hello — I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-8 text-2xl font-bold text-[#1d2419]">Send a Message</h2>
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-[#2f4f3a] p-12 text-center text-white"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="mt-2 text-white/70">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#1d2419]/50">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#1d2419]/10 bg-white px-4 py-3 text-[#1d2419] outline-none transition placeholder:text-[#1d2419]/30 focus:border-[#2f4f3a] focus:ring-2 focus:ring-[#2f4f3a]/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#1d2419]/50">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#1d2419]/10 bg-white px-4 py-3 text-[#1d2419] outline-none transition placeholder:text-[#1d2419]/30 focus:border-[#2f4f3a] focus:ring-2 focus:ring-[#2f4f3a]/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#1d2419]/50">
                      Subject
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-[#1d2419]/10 bg-white px-4 py-3 text-[#1d2419] outline-none transition focus:border-[#2f4f3a] focus:ring-2 focus:ring-[#2f4f3a]/20"
                    >
                      <option value="">Select a topic...</option>
                      <option value="course-review">Course Review Request</option>
                      <option value="brand-collab">Brand Collaboration</option>
                      <option value="media-inquiry">Media Inquiry</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#1d2419]/50">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-[#1d2419]/10 bg-white px-4 py-3 text-[#1d2419] outline-none transition placeholder:text-[#1d2419]/30 focus:border-[#2f4f3a] focus:ring-2 focus:ring-[#2f4f3a]/20"
                      placeholder="Tell me more about your inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#2f4f3a] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#3d6149] hover:shadow-lg hover:shadow-[#2f4f3a]/25 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-12"
            >
              {/* Social Links */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#1d2419]">Follow Along</h2>
                <div className="space-y-4">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-[#1d2419]/10 bg-white p-4 transition hover:border-[#2f4f3a]/30 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f4f3a] text-white transition group-hover:bg-[#3d6149]">
                        <social.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#1d2419]">{social.name}</p>
                        <p className="text-sm text-[#1d2419]/50">{social.description}</p>
                      </div>
                      <span className="text-sm font-medium text-[#2f4f3a]">{social.handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#1d2419]">Quick Info</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-[#1d2419]/10 bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c1b58c]/20 text-[#2f4f3a]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-[#1d2419]">Based In</p>
                      <p className="text-sm text-[#1d2419]/60">Nashville, Tennessee</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-[#1d2419]/10 bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c1b58c]/20 text-[#2f4f3a]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-[#1d2419]">Response Time</p>
                      <p className="text-sm text-[#1d2419]/60">Usually within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="rounded-2xl bg-[#1d2419] p-8 text-white">
                <h3 className="mb-2 text-xl font-bold">Stay Updated</h3>
                <p className="mb-6 text-sm text-white/60">
                  Get notified when new reviews drop and be the first to see exclusive content.
                </p>
                <EmailSignupForm source="contact-page" variant="dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1d2419]/10 bg-[#f5f3ee] py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-[#1d2419]/50">
            &copy; {new Date().getFullYear()} Ritz Golf. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
