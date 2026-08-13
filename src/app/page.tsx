import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { WhyUs } from "@/components/site/why-us";
import { Regions } from "@/components/site/regions";
import { Stats } from "@/components/site/stats";
import { Testimonials } from "@/components/site/testimonials";
import { Blog } from "@/components/site/blog";
import { Careers } from "@/components/site/careers";
import { ContactCta } from "@/components/site/contact-cta";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Regions />
        <Stats />
        <Testimonials />
        <Blog />
        <Careers />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
