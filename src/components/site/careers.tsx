"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { careers } from "@/lib/site-data";

export function Careers() {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3">Careers at RUHE</span>
            <h2 className="font-display text-[2.1rem] md:text-[2.4rem] font-bold text-ruhe-navy mb-4 leading-tight">
              Join the team that&apos;s making global education accessible
            </h2>
            <p className="text-ruhe-slate text-[1rem] leading-relaxed mb-6">
              We&apos;re always looking for experienced education counsellors,
              visa documentation officers, exam tutors and driven referral
              agents. If you believe study-abroad advice should be honest,
              structured and genuinely helpful — we want to talk to you.
            </p>
            <Button
              asChild
              className="bg-ruhe-gold text-ruhe-navy-deep hover:bg-ruhe-gold-light rounded-sm font-semibold"
            >
              <a href="#contact">Send your CV</a>
            </Button>
          </motion.div>

          <div className="space-y-4">
            {careers.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group border border-border rounded-md p-5 hover:border-ruhe-gold/40 hover:shadow-md transition-all bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Briefcase className="h-4 w-4 text-ruhe-gold" />
                      <h3 className="font-display text-[1.1rem] font-bold text-ruhe-navy">
                        {role.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className="border-border text-ruhe-slate font-normal"
                      >
                        <MapPin className="h-3 w-3 mr-1" />
                        {role.location}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-ruhe-gold/40 text-ruhe-gold font-normal"
                      >
                        {role.type}
                      </Badge>
                    </div>
                    <p className="text-[0.88rem] text-ruhe-slate leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[0.82rem] font-bold text-ruhe-navy hover:text-ruhe-gold flex-shrink-0"
                  >
                    Apply
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
