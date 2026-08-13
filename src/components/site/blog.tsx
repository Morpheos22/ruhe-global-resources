"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/site-data";

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-grain border-y border-border">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-[560px]"
          >
            <span className="eyebrow mb-3">Resources</span>
            <h2 className="font-display text-[2.1rem] md:text-[2.4rem] font-bold text-ruhe-navy mb-3">
              Latest from the blog
            </h2>
            <p className="text-ruhe-slate text-[1.02rem]">
              Practical, Nigeria-first guides on studying, working and
              migrating abroad — written by the consultants who handle the
              cases.
            </p>
          </motion.div>
          <Button
            asChild
            variant="outline"
            className="rounded-sm border-ruhe-navy text-ruhe-navy hover:bg-ruhe-navy hover:text-white font-semibold"
          >
            <a href="#blog">
              View all articles
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-md overflow-hidden bg-white shadow-[0_4px_18px_rgba(11,31,58,0.08)] hover:shadow-[0_18px_40px_rgba(11,31,58,0.14)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={750}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-ruhe-navy text-white hover:bg-ruhe-navy-deep">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6">
                <div className="text-[0.75rem] uppercase tracking-[0.08em] text-ruhe-gold font-bold mb-2.5">
                  {post.date}
                </div>
                <h3 className="font-display text-[1.12rem] font-bold text-ruhe-navy mb-3 leading-snug group-hover:text-ruhe-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-[0.88rem] text-ruhe-slate leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[0.82rem] font-bold text-ruhe-navy group-hover:text-ruhe-gold">
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
