"use client";

import { motion } from "framer-motion";
import { values } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white border-t border-border">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto text-center mb-14"
        >
          <span className="eyebrow mb-3">Why Choose RUHE</span>
          <h2 className="font-display text-[2.1rem] md:text-[2.4rem] font-bold text-ruhe-navy mb-4">
            Built on trust, run on outcomes
          </h2>
          <p className="text-ruhe-slate text-[1.02rem]">
            Four reasons families and professionals across Nigeria keep
            referring their friends and relatives to RUHE Global Resources.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative bg-ruhe-ivory/60 rounded-md p-6 hover:bg-ruhe-navy hover:text-white transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 h-1 w-12 bg-ruhe-gold rounded-br" />
                <Icon className="h-8 w-8 text-ruhe-gold mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-display text-[1.1rem] font-bold mb-2 text-ruhe-navy group-hover:text-white">
                  {v.title}
                </h3>
                <p className="text-[0.88rem] text-ruhe-slate leading-relaxed group-hover:text-white/80">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
