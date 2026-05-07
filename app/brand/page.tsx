"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Instagram, Youtube } from "lucide-react";
import { EmailSignupForm } from "@/components/email-signup-form";

// Custom TikTok icon
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

// Custom X icon
function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export default function BrandPage() {
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
          <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 md:flex">
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
            <a href="/#about" className="hover:text-white transition">
              About
            </a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://instagram.com/Ritz_kicks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition hover:text-[#c1b58c]"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://tiktok.com/@Ritz_kicks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition hover:text-[#c1b58c]"
              aria-label="TikTok"
            >
              <TikTokIcon size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition hover:text-[#c1b58c]"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition hover:text-[#c1b58c]"
              aria-label="X"
            >
              <XIcon size={16} />
            </a>
          </div>
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
            className="font-serif text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-8xl lg:text-[11rem]"
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
            className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/40"
          >
            Apparel, gear, and goods for the average golfer.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mx-auto my-14 h-px w-48 bg-gradient-to-r from-transparent via-[#c1b58c]/40 to-transparent"
          />

          {/* Follow the Journey */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
              Follow the Journey
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com/Ritz_kicks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-[#c1b58c]/50 hover:text-[#c1b58c]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@Ritz_kicks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-[#c1b58c]/50 hover:text-[#c1b58c]"
                aria-label="TikTok"
              >
                <TikTokIcon size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-[#c1b58c]/50 hover:text-[#c1b58c]"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-[#c1b58c]/50 hover:text-[#c1b58c]"
                aria-label="X"
              >
                <XIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mx-auto max-w-md"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              Be the first to know
            </p>
            <EmailSignupForm source="brand-page" variant="dark" />
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0d100d] px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <a href="/" className="font-serif text-lg tracking-[-0.02em] text-white/50 transition hover:text-white">
            Average Golfer
          </a>
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Average Golfer Reviews
          </p>
        </div>
      </footer>
    </div>
  );
}
