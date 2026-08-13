"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, detailedServices } from "@/lib/site-data";

const detailedServicesStrip = detailedServices.slice(0, 8);

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto text-center mb-14"
        >
          <span className="eyebrow mb-3">What We Do</span>
          <h2 className="font-display text-[2.1rem] md:text-[2.4rem] font-bold text-ruhe-navy mb-4">
            Our core services
          </h2>
          <p className="text-ruhe-slate text-[1.02rem]">
            We add value at every stage of your journey abroad — from choosing
            a destination to settling in after you land. Six pillars, one
            accountable team.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="group h-full border-border bg-white hover:shadow-[0_18px_40px_rgba(11,31,58,0.10)] hover:-translate-y-1 hover:border-ruhe-gold/40 transition-all duration-300 rounded-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-[0.78rem] tracking-[0.1em] text-ruhe-gold font-semibold">
                        {service.num}
                      </span>
                      <div className="h-10 w-10 rounded-full bg-ruhe-ivory flex items-center justify-center text-ruhe-navy group-hover:bg-ruhe-navy group-hover:text-ruhe-gold transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle className="font-display text-[1.18rem] text-ruhe-navy">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-ruhe-slate text-[0.94rem] leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-1.5 mb-5">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[0.86rem] text-ruhe-navy/80"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-ruhe-gold mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-[0.84rem] font-bold text-ruhe-navy hover:text-ruhe-gold transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed services strip */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <Badge className="bg-ruhe-ivory text-ruhe-gold hover:bg-ruhe-ivory mb-3">
                20+ service touchpoints
              </Badge>
              <h3 className="font-display text-[1.6rem] font-bold text-ruhe-navy">
                Everything you need, under one roof
              </h3>
            </div>
            <p className="text-ruhe-slate text-[0.96rem] max-w-md">
              Beyond our six pillars, RUHE offers a full menu of specialised
              services that cover the long tail of moving abroad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {detailedServicesStrip.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="rounded-md border border-border bg-ruhe-ivory/40 p-5 hover:bg-white hover:shadow-sm transition-all"
                >
                  <Icon className="h-5 w-5 text-ruhe-gold mb-3" />
                  <div className="font-semibold text-[0.96rem] text-ruhe-navy mb-1.5">
                    {s.title}
                  </div>
                  <p className="text-[0.84rem] text-ruhe-slate leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-sm border-ruhe-navy text-ruhe-navy hover:bg-ruhe-navy hover:text-white font-semibold"
          >
            <a href="#contact">
              Book a free consultation
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
