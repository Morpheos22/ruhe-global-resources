import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Careers } from "@/components/site/careers";
import { Hero } from "@/components/site/hero";

export const metadata: Metadata = {
  title: "Careers at RUHE Global Resources — Education Counsellor, Visa Officer, Tutor Jobs",
  description:
    "Join RUHE Global Resources. We're hiring senior education counsellors, IELTS/TOEFL tutors, visa documentation officers and referral agents across Nigeria and remote. Apply today.",
  keywords: [
    "RUHE Global Resources careers",
    "education counsellor jobs Nigeria",
    "IELTS tutor jobs Abuja",
    "visa officer jobs",
    "study abroad consultant jobs",
    "referral agent education Nigeria",
  ],
  alternates: { canonical: "https://ruhe-global-resources.vercel.app/careers" },
  openGraph: {
    title: "Careers at RUHE Global Resources",
    description:
      "Join the team making global education accessible. We're hiring counsellors, tutors, visa officers and referral agents.",
    url: "https://ruhe-global-resources.vercel.app/careers",
    siteName: "RUHE Global Resources",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Compact hero for the careers landing */}
        <section className="relative bg-ruhe-navy-deep text-white py-20 md:py-28 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(200,163,90,0.22), transparent 55%)",
            }}
          />
          <div className="mx-auto max-w-[1180px] px-6 relative">
            <div className="max-w-[760px]">
              <span className="eyebrow mb-3">Careers at RUHE</span>
              <h1 className="font-display text-[2.2rem] md:text-[3rem] font-bold leading-tight mb-4">
                Build a career helping Nigerians go global
              </h1>
              <p className="text-white/80 text-[1.05rem] leading-relaxed max-w-[640px]">
                RUHE Global Resources is an ICEF-accredited educational
                advisory headquartered in Abuja, Nigeria. We help students and
                professionals study, work and migrate abroad — and we&apos;re
                growing the team that makes that happen.
              </p>
            </div>
          </div>
        </section>

        <Careers />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
