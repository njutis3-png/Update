"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface EmailSignupFormProps {
  source?: string;
  variant?: "dark" | "light";
  className?: string;
}

export function EmailSignupForm({
  source = "website",
  variant = "dark",
  className = "",
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }

    // Reset status after 4 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 4000);
  };

  const isDark = variant === "dark";

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-center gap-2 rounded-full px-6 py-3 ${
              isDark ? "bg-[#2f4f3a] text-white" : "bg-[#c1b58c] text-[#1a1f1a]"
            }`}
          >
            <Check size={18} />
            <span className="text-sm font-medium">{message}</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex w-full max-w-md gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === "loading"}
              className={`flex-1 rounded-full px-5 py-3 text-sm outline-none transition placeholder:text-current/40 focus:ring-2 disabled:opacity-50 ${
                isDark
                  ? "bg-white/10 text-white focus:ring-white/30"
                  : "bg-[#1a1f1a]/10 text-[#1a1f1a] focus:ring-[#1a1f1a]/30"
              }`}
            />
            <button
              type="submit"
              disabled={status === "loading" || !email.trim()}
              className={`group flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 ${
                isDark
                  ? "bg-[#c1b58c] text-[#1a1f1a] hover:bg-[#d4c9a4] hover:shadow-[#c1b58c]/25"
                  : "bg-[#2f4f3a] text-white hover:bg-[#3d6149] hover:shadow-[#2f4f3a]/25"
              }`}
            >
              {status === "loading" ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  <span className="hidden sm:inline">Subscribe</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-400"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
