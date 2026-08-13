"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo } from "@/lib/site-data";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  // WhatsApp number — strip everything except digits, ensure leading country code.
  // +44 7448 387659 → 447448387659
  const whatsappNumber = (contactInfo.mobile || "").replace(/[^\d]/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello RUHE Global Resources, I'd like to ask about studying / working abroad.",
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 w-[280px] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] text-white px-4 py-3 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-[0.92rem] leading-tight">
                  RUHE Global Resources
                </div>
                <div className="text-[0.72rem] text-white/85">
                  Typically replies within minutes
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#e5ddd5]">
              <div className="bg-white rounded-lg shadow-sm px-3 py-2 text-[0.86rem] text-ruhe-navy">
                👋 Hi there! Have a question about studying, working or
                migrating abroad? Tap below to chat with a RUHE consultant on
                WhatsApp.
              </div>
            </div>

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] hover:bg-[#1ebe5b] text-white text-center font-semibold py-3 text-[0.92rem] transition-colors"
            >
              Start chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="relative h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] shadow-lg shadow-[#25D366]/40 flex items-center justify-center text-white transition-colors group"
      >
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        )}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-7 w-7" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {/* WhatsApp glyph */}
              <svg
                viewBox="0 0 32 32"
                className="h-8 w-8 fill-current"
                aria-hidden="true"
              >
                <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.5 31.5l8.1-2c2.2 1.2 4.7 1.9 7.4 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.1c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.2 1.3-4.7-.3-.5c-1.3-2-2-4.4-2-6.8 0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9.1 7.2-5.7 13-12.8 13zm7.1-9.7c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.4 3.6 1.6 3.9c.2.2 2.7 4.1 6.5 5.7.9.4 1.6.6 2.2.8.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
