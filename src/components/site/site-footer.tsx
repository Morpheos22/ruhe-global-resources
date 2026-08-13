import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { navItems, contactInfo } from "@/lib/site-data";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Why choose us", href: "#why-us" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Study Abroad", href: "#services" },
      { label: "Study Visa", href: "#services" },
      { label: "Work Visa", href: "#services" },
      { label: "IELTS / TOEFL", href: "#services" },
      { label: "Admission Processing", href: "#services" },
      { label: "Healthcare Recruitment", href: "#services" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Europe", href: "#partnership" },
      { label: "North America", href: "#partnership" },
      { label: "Rest of the World", href: "#partnership" },
    ],
  },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ruhe-navy-deep text-white/65">
      <div className="mx-auto max-w-[1180px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] mb-12">
          {/* Brand */}
          <div className="max-w-[320px]">
            <Image
              src="/logo/ruhe-logo.png"
              alt="RUHE Global Resources"
              width={280}
              height={150}
              className="rounded-md mb-4 w-full max-w-[260px] h-auto"
            />
            <p className="text-[0.88rem] leading-relaxed">
              Your one-stop shop for admissions, exams, funding and visas —
              helping you study, work and migrate abroad with confidence.
              ICEF-accredited, headquartered in Abuja, serving clients across
              Nigeria.
            </p>

            <div className="flex gap-3 mt-5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="h-9 w-9 rounded-full bg-white/8 hover:bg-ruhe-gold hover:text-ruhe-navy-deep flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-[0.86rem] font-bold uppercase tracking-[0.08em] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.88rem] hover:text-ruhe-gold-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-[0.86rem] font-bold uppercase tracking-[0.08em] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-2 text-[0.88rem] hover:text-ruhe-gold-light transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-ruhe-gold" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s|\(|\)/g, "")}`}
                  className="flex items-start gap-2 text-[0.88rem] hover:text-ruhe-gold-light transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-ruhe-gold" />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[0.88rem]">
                <MapPin className="h-4 w-4 mt-0.5 text-ruhe-gold" />
                {contactInfo.address}
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-md bg-white/5 border border-white/10">
              <div className="text-[0.72rem] uppercase tracking-[0.1em] text-ruhe-gold font-bold mb-1">
                Office hours
              </div>
              <div className="text-[0.84rem]">
                Mon – Fri, 9:00 AM – 6:00 PM (WAT)
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[0.8rem]">
          <span>
            © {new Date().getFullYear()} RUHE Global Resources. All rights
            reserved.
          </span>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-ruhe-gold-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ruhe-gold-light transition-colors">
              Terms of Service
            </a>
            <a
              href="#contact"
              className="hover:text-ruhe-gold-light transition-colors"
            >
              Book an appointment
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
