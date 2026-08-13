"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  Mail,
  MapPin,
  CalendarDays,
  Phone,
  PhoneCall,
} from "lucide-react";
import { navItems, contactInfo } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-ruhe-navy-deep text-white/75 text-[0.78rem] hidden md:block">
        <div className="mx-auto max-w-[1180px] px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-5 flex-wrap">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 hover:text-ruhe-gold-light transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-ruhe-gold" />
              {contactInfo.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-ruhe-gold" />
              {contactInfo.address}
            </span>
            <a
              href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-ruhe-gold-light transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-ruhe-gold" />
              Mobile: {contactInfo.mobile}
            </a>
            <a
              href={`tel:${contactInfo.telephone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-ruhe-gold-light transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5 text-ruhe-gold" />
              Tel: {contactInfo.telephone}
            </a>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-ruhe-gold text-ruhe-navy-deep hover:bg-ruhe-gold-light rounded-sm font-semibold tracking-wide"
          >
            <a href="#contact">
              <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
              Book Appointment
            </a>
          </Button>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "bg-white border-b transition-shadow",
          scrolled ? "shadow-md border-border" : "border-transparent",
        )}
      >
        <div className="mx-auto max-w-[1180px] px-6 flex items-center justify-between py-3">
          <Link href="#home" className="flex items-center gap-2">
            <Image
              src="/logo/ruhe-header.png"
              alt="RUHE Global Resources"
              width={200}
              height={48}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveGroup(item.label)}
                onMouseLeave={() => setActiveGroup(null)}
              >
                <Link
                  href={item.href ?? "#"}
                  className="px-3.5 py-2.5 inline-flex items-center gap-1 text-[0.92rem] font-semibold text-ruhe-navy hover:text-ruhe-gold transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  )}
                </Link>
                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 min-w-[260px] bg-white shadow-[0_10px_30px_rgba(11,31,58,0.12)] rounded-b-md py-2 transition-all duration-200",
                      activeGroup === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-1.5 pointer-events-none",
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2 text-[0.86rem] font-medium text-ruhe-navy hover:bg-ruhe-ivory hover:text-ruhe-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-sm border-ruhe-navy text-ruhe-navy hover:bg-ruhe-navy hover:text-white font-semibold tracking-wide"
            >
              <a href="#contact">Talk to a Consultant</a>
            </Button>
          </div>

          {/* Mobile burger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-ruhe-navy"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm bg-white p-0 overflow-y-auto"
            >
              <SheetHeader className="px-5 pt-5 pb-3 border-b border-border">
                <SheetTitle className="text-left">
                  <Image
                    src="/logo/ruhe-header.png"
                    alt="RUHE Global Resources"
                    width={180}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </SheetTitle>
              </SheetHeader>
              <MobileNav onNavigate={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("Services");
  return (
    <nav className="flex flex-col py-2">
      {navItems.map((item) => (
        <div key={item.label} className="border-b border-border/60">
          {item.children ? (
            <>
              <button
                onClick={() =>
                  setExpanded(expanded === item.label ? null : item.label)
                }
                className="w-full flex items-center justify-between px-5 py-3.5 text-ruhe-navy font-semibold text-left"
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    expanded === item.label && "rotate-180",
                  )}
                />
              </button>
              {expanded === item.label && (
                <div className="bg-ruhe-ivory/60 pb-2">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={onNavigate}
                      className="block px-7 py-2 text-sm text-ruhe-navy/80 hover:text-ruhe-gold"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a
              href={item.href}
              onClick={onNavigate}
              className="block px-5 py-3.5 text-ruhe-navy font-semibold"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
      <div className="p-5">
        <Button
          asChild
          className="w-full bg-ruhe-gold text-ruhe-navy-deep hover:bg-ruhe-gold-light rounded-sm"
        >
          <a href="#contact" onClick={onNavigate}>
            Talk to a Consultant
          </a>
        </Button>
      </div>
    </nav>
  );
}
