"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Quote, Play } from "lucide-react";

const testimonials = [
  {
    quote:
      "RUHE guided us through every step — from picking a university to landing safely abroad. We couldn't have done it alone.",
    name: "Chinwe & Family",
    detail: "MSc, United Kingdom",
  },
  {
    quote:
      "I scored band 8.0 in IELTS on my first attempt thanks to their tutorials. The mock test feedback was honest and exactly what I needed.",
    name: "Tunde A.",
    detail: "IELTS Student, Abuja",
  },
  {
    quote:
      "From admission letter to airport pickup in Toronto, RUHE handled everything. The consultant was always one call away.",
    name: "Adaeze O.",
    detail: "BSc Nursing, Canada",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto text-center mb-14"
        >
          <span className="eyebrow mb-3">Testimonials</span>
          <h2 className="font-display text-[2.1rem] md:text-[2.4rem] font-bold text-ruhe-navy mb-4">
            What our clients say
          </h2>
          <p className="text-ruhe-slate text-[1.02rem]">
            A few words from clients we&apos;ve assisted on their journey
            abroad — and a video story from one of our recent placements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
          {/* Video frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-md overflow-hidden shadow-[0_18px_40px_rgba(11,31,58,0.18)] group"
          >
            <iframe
              src="https://www.youtube.com/embed/VYl_s__YzmY"
              title="RUHE Global Resources client testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-ruhe-navy-deep/40 group-hover:opacity-0 transition-opacity">
              <div className="h-16 w-16 rounded-full bg-ruhe-gold flex items-center justify-center text-ruhe-navy-deep">
                <Play className="h-7 w-7 fill-ruhe-navy-deep ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-ruhe-ivory rounded-md p-8 md:p-10"
          >
            <Quote className="h-8 w-8 text-ruhe-gold mb-4" />
            <blockquote className="font-display italic text-[1.3rem] md:text-[1.45rem] text-ruhe-navy leading-snug mb-6">
              {testimonials[0].quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-ruhe-navy text-ruhe-gold flex items-center justify-center font-bold text-sm">
                C
              </div>
              <div>
                <div className="font-bold text-[0.92rem] text-ruhe-navy">
                  {testimonials[0].name}
                </div>
                <div className="text-[0.78rem] text-ruhe-slate">
                  {testimonials[0].detail}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-border rounded-md p-6 bg-white hover:shadow-md transition-shadow"
            >
              <Badge className="bg-ruhe-ivory text-ruhe-gold hover:bg-ruhe-ivory mb-3">
                Verified client
              </Badge>
              <p className="font-display italic text-ruhe-navy text-[1.02rem] leading-snug mb-4">
                “{t.quote}”
              </p>
              <div className="text-[0.84rem]">
                <span className="font-bold text-ruhe-navy">{t.name}</span>
                <span className="text-ruhe-slate"> · {t.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
