"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center hero-bg text-white overflow-hidden"
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 22%, rgba(200,163,90,0.22), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-[1180px] px-6 w-full relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center pt-20 pb-24">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px]"
        >
          <Badge
            variant="outline"
            className="mb-6 inline-flex items-center gap-2 rounded-full border-white/30 bg-white/5 px-4 py-1.5 text-[0.78rem] tracking-wide text-ruhe-gold-light backdrop-blur-sm"
          >
            <Star className="h-3.5 w-3.5 fill-ruhe-gold text-ruhe-gold" />
            ICEF Accredited Educational Agency
          </Badge>

          <h1 className="font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.08] font-bold mb-5">
            Study, work and migrate abroad —{" "}
            <span className="text-ruhe-gold-light">the stress-free way</span>
          </h1>

          <p className="text-[1.08rem] text-white/85 mb-9 max-w-[560px] leading-relaxed">
            Your one-stop shop for admissions, IELTS &amp; TOEFL prep, funding,
            student loans and visas. We turn the paperwork of moving abroad into
            a clear, guided plan — and walk every step with you, from first
            call to airport pickup.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-ruhe-gold text-ruhe-navy-deep hover:bg-ruhe-gold-light rounded-sm font-semibold tracking-wide group"
            >
              <a href="#contact">
                Talk to Our Consultant
                <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-sm bg-transparent border border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60 font-semibold tracking-wide group"
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.78rem] text-white/65">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ruhe-gold" />
              1,200+ study visas processed
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ruhe-gold" />
              1,000+ university partners
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ruhe-gold" />
              HQ in Abuja, Nigeria
            </span>
          </div>
        </motion.div>

        {/* Right: official RUHE logo + emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          {/* Official horizontal logo on a dark card */}
          <div className="relative">
            <div className="absolute -inset-6 bg-ruhe-gold/20 blur-3xl rounded-full" />
            <div className="relative bg-ruhe-navy-deep/70 backdrop-blur-md ring-1 ring-ruhe-gold/30 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-[420px]">
              <Image
                src="/logo/ruhe-header.png"
                alt="RUHE Global Resources — official logo"
                width={440}
                height={110}
                className="w-[260px] sm:w-[340px] lg:w-[360px] h-auto object-contain mx-auto"
                priority
              />
              <div className="mt-4 text-center text-ruhe-gold-light text-[0.78rem] sm:text-[0.84rem] tracking-[0.18em] uppercase font-semibold">
                Your Future. Our Priority.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-1 text-white/60 text-[0.7rem] tracking-[0.2em] uppercase">
          Scroll
          <div className="h-8 w-px bg-gradient-to-b from-ruhe-gold/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
