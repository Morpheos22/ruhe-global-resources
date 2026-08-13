"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2 } from "lucide-react";
import { regions } from "@/lib/site-data";

export function Regions() {
  return (
    <section id="partnership" className="py-24 bg-grain border-y border-border">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[680px] mx-auto text-center mb-14"
        >
          <span className="eyebrow mb-3">Where We Operate</span>
          <h2 className="font-display text-[2.1rem] md:text-[2.4rem] font-bold text-ruhe-navy mb-4">
            Global partnerships, local expertise
          </h2>
          <p className="text-ruhe-slate text-[1.02rem]">
            Strong direct partnerships with universities across the world mean
            more choice for students planning to study abroad — and faster,
            more reliable admissions decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-md bg-ruhe-navy text-white p-7 hover:bg-ruhe-navy-deep transition-colors"
            >
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-ruhe-gold/15" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Globe2 className="h-5 w-5 text-ruhe-gold" />
                  <span className="text-[0.75rem] uppercase tracking-[0.16em] text-ruhe-gold font-bold">
                    Region 0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-[1.3rem] font-bold text-ruhe-gold-light mb-2">
                  {r.title}
                </h3>
                <p className="text-[0.86rem] text-white/75 mb-3 leading-relaxed">
                  {r.blurb}
                </p>
                <p className="text-[0.82rem] text-white/85 font-medium mb-5">
                  {r.countries}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[0.82rem] font-bold text-ruhe-gold hover:text-ruhe-gold-light group/r"
                >
                  Contact us to know more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/r:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-ruhe-slate text-[0.96rem] mb-4">
            Not sure which destination fits your goals? We&apos;ll help you
            weigh cost, post-study work rights and PR pathways.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-sm bg-ruhe-gold text-ruhe-navy-deep hover:bg-ruhe-gold-light font-semibold"
          >
            <a href="#contact">
              Get a destination recommendation
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
