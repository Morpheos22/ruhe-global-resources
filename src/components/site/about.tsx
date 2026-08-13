"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-grain relative overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Media — Mr Joseph featured prominently */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-md overflow-hidden shadow-[0_18px_50px_rgba(11,31,58,0.18)] bg-gradient-to-br from-ruhe-navy to-ruhe-navy-deep">
              <Image
                src="/team/mr-joseph.jpg"
                alt="Mr Joseph, Founder & CEO of RUHE Global Resources"
                width={1200}
                height={1350}
                className="w-full h-[560px] object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ruhe-navy-deep/85 via-ruhe-navy-deep/20 to-transparent" />

              {/* Name + title overlaid on the photo */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 mb-2 rounded-full bg-ruhe-gold/95 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] font-bold text-ruhe-navy-deep">
                  <Sparkles className="h-3 w-3" />
                  Founder &amp; CEO
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                  Mr Joseph
                </div>
                <div className="text-ruhe-gold-light text-[0.92rem] mt-0.5">
                  RUHE Global Resources
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -top-5 -right-5 bg-ruhe-navy text-white rounded-md shadow-xl p-4 max-w-[160px] hidden md:block">
              <div className="font-display text-2xl font-bold text-ruhe-gold">
                10+ yrs
              </div>
              <div className="text-[0.75rem] text-white/70 leading-tight mt-0.5">
                of placing Nigerian students abroad
              </div>
            </div>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="eyebrow mb-3">Know Who We Are</span>
            <h2 className="font-display text-[2.1rem] md:text-[2.3rem] font-bold text-ruhe-navy mb-5 leading-tight">
              About RUHE Global Resources
            </h2>

            <div className="space-y-4 text-ruhe-slate text-[0.98rem] leading-relaxed">
              <p>
                RUHE Global Resources is a fully registered educational
                advisory company headquartered in Abuja, Nigeria. We were built
                to meet the growing demand from Nigerian students,
                professionals and institutions seeking a genuine international
                educational experience — and a partner they could trust with
                the paperwork.
              </p>
              <p>
                Our objective is simple: close the distance between our clients
                and global education, and make studying abroad achievable —
                not aspirational. We do that by combining deep university
                partnerships with on-the-ground knowledge of what Nigerian
                applicants actually need to succeed.
              </p>
              <p>
                Our strength is diversity — of destinations, of disciplines,
                and of the people we serve. From a fresh secondary-school
                graduate exploring the UK, to a working nurse seeking
                sponsorship in the United States, our team has walked the path
                hundreds of times. That breadth is what makes us truly global.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                asChild
                variant="outline"
                className="rounded-sm border-ruhe-navy text-ruhe-navy hover:bg-ruhe-navy hover:text-white font-semibold"
              >
                <a href="#contact">Contact us now</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-ruhe-navy hover:bg-ruhe-ivory font-semibold"
              >
                <a href="#partnership">See where we operate</a>
              </Button>
            </div>

            {/* Inline pull quote */}
            <div className="mt-8 border-l-2 border-ruhe-gold pl-4">
              <Quote className="h-4 w-4 text-ruhe-gold mb-1.5" />
              <p className="font-display italic text-ruhe-navy text-[1.05rem] leading-snug">
                “Your future. Our priority.” — that&apos;s not a tagline,
                it&apos;s the standard we hold every consultant to.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
