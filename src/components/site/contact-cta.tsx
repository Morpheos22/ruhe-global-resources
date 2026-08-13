"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  CalendarDays,
} from "lucide-react";
import { contactInfo } from "@/lib/site-data";

const services = [
  "Study Abroad",
  "IELTS / TOEFL Preparation",
  "Study Visa",
  "Work Visa",
  "Dependent / Spouse Visa",
  "Business Visa",
  "Visa Interview Training",
  "Admission Processing",
  "Flight & Airport Pickup",
  "Post-Arrival Services",
  "Permanent Residency",
  "Healthcare Recruitment",
  "Other",
];

export function ContactCta() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setSubmitted(true);
      toast({
        title: "Request received",
        description:
          "A RUHE consultant will reach out to you within one business day.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast({
        title: "Something went wrong",
        description:
          "Please email us directly at georgianeo@ruheglobalresources.com.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-ruhe-navy-deep text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(200,163,90,0.18), transparent 50%), radial-gradient(circle at 10% 90%, rgba(200,163,90,0.10), transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-[1180px] px-6 relative">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3">Request a call back</span>
            <h2 className="font-display text-[2rem] md:text-[2.4rem] font-bold mb-4 leading-tight">
              Let&apos;s plan your move abroad
            </h2>
            <p className="text-white/75 text-[1.02rem] leading-relaxed mb-8 max-w-md">
              Have a question about studying abroad, visas, or IELTS classes?
              Drop us a message and a consultant will reach out within one
              business day. The first call is always free.
            </p>

            <div className="space-y-4">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Mobile"
                value={contactInfo.mobile}
                href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<PhoneCall className="h-4 w-4" />}
                label="Telephone"
                value={contactInfo.telephone}
                href={`tel:${contactInfo.telephone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Office"
                value={contactInfo.address}
              />
              <ContactRow
                icon={<CalendarDays className="h-4 w-4" />}
                label="Hours"
                value="Mon – Fri, 9:00 AM – 6:00 PM (WAT)"
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white text-ruhe-navy rounded-md p-7 md:p-9 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="h-14 w-14 mx-auto rounded-full bg-ruhe-gold/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-7 w-7 text-ruhe-gold" />
                </div>
                <h3 className="font-display text-[1.5rem] font-bold text-ruhe-navy mb-2">
                  Thank you — we&apos;ve got it
                </h3>
                <p className="text-ruhe-slate text-[0.95rem] mb-6">
                  Your request has been logged. A RUHE consultant will reach
                  out to you within one business day.
                </p>
                <Button
                  variant="outline"
                  className="border-ruhe-navy text-ruhe-navy hover:bg-ruhe-navy hover:text-white rounded-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" required>
                    <Input
                      name="name"
                      placeholder="Jane Doe"
                      required
                      className="rounded-sm"
                    />
                  </Field>
                  <Field label="Email" required>
                    <Input
                      type="email"
                      name="email"
                      placeholder="jane@email.com"
                      required
                      className="rounded-sm"
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone">
                    <Input
                      name="phone"
                      placeholder="+234 803 ..."
                      className="rounded-sm"
                    />
                  </Field>
                  <Field label="Service of interest">
                    <Select name="service">
                      <SelectTrigger className="rounded-sm">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <Field label="Tell us about your goal" required>
                  <Textarea
                    name="message"
                    rows={4}
                    placeholder="e.g. I want to study a Master's in the UK starting September intake..."
                    required
                    className="rounded-sm resize-none"
                  />
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-ruhe-gold text-ruhe-navy-deep hover:bg-ruhe-gold-light rounded-sm font-semibold tracking-wide disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Request call back
                    </>
                  )}
                </Button>

                <p className="text-[0.78rem] text-ruhe-slate text-center">
                  By submitting, you agree to be contacted by RUHE Global
                  Resources about your enquiry. We never share your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-[0.84rem] font-semibold text-ruhe-navy">
        {label}
        {required && <span className="text-ruhe-gold"> *</span>}
      </Label>
      {children}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 group">
      <div className="h-10 w-10 rounded-full bg-ruhe-gold/15 flex items-center justify-center text-ruhe-gold flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[0.72rem] uppercase tracking-[0.1em] text-white/55 font-bold mb-0.5">
          {label}
        </div>
        <div className="text-[0.96rem] font-medium text-white group-hover:text-ruhe-gold-light transition-colors">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
