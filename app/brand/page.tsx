"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BrandPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d100d] text-[#f8f3e4]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d100d] to-[#0d100d]" />
      
      {/* Subtle texture pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-30 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="/"
            className="flex items-center gap-3 text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            <span className="font-serif text-xl tracking-[-0.02em]">
              Average Golfer
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 md:flex">
            <a href="/#top" className="hover:text-white transition">
              Rankings
            </a>
            <a href="/played-map" className="hover:text-white transition">
              Played Map
            </a>
            <a
              href="/brand"
              className="text-white border-b border-[#c1b58c] pb-1"
            >
              Brand
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c1b58c]/30 bg-[#c1b58c]/5 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#c1b58c]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c1b58c]">
              In Development
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-8xl lg:text-[10rem]"
          >
            Brand
            <br />
            <span className="text-[#c1b58c]">Coming</span>
            <br />
            Soon
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/50"
          >
            Apparel, gear, and goods for the average golfer.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mx-auto my-12 h-px w-32 bg-gradient-to-r from-transparent via-[#c1b58c]/50 to-transparent"
          />

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mx-auto max-w-md"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-[#c1b58c]/20 bg-[#c1b58c]/5 p-6"
              >
                <p className="text-lg font-semibold text-[#c1b58c]">
                  {"You're on the list."}
                </p>
                <p className="mt-2 text-sm text-white/50">
                  {"We'll notify you when the brand drops."}
                </p>
              </motion.div>
            ) : (
              <>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                  Be the first to know
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#c1b58c]/50 focus:bg-white/10"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group flex items-center justify-center gap-2 rounded-full bg-[#c1b58c] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#0d100d] transition hover:bg-[#d4c9a4] disabled:opacity-70"
                  >
                    {isLoading ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0d100d]/30 border-t-[#0d100d]" />
                    ) : (
                      <>
                        Notify Me
                        <ArrowRight
                          size={14}
                          className="transition group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1b58c]/20 to-transparent"
        />
      </main>

      {/* Ambient glow effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-[#c1b58c]/5 blur-[150px]" />
      </div>
    </div>
  );
}
