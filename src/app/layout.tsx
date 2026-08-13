import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ImageProtection } from "@/components/site/image-protection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RUHE Global Resources — Study, Work & Migrate Abroad",
  description:
    "RUHE Global Resources is your one-stop shop for admissions, IELTS/TOEFL prep, funding, student loans and visa processing. We turn the paperwork of moving abroad into a clear, guided plan.",
  keywords: [
    "RUHE Global Resources",
    "study abroad",
    "IELTS preparation",
    "TOEFL",
    "study visa",
    "work visa",
    "migrate abroad",
    "Nigeria education consultancy",
    "Abuja education agency",
    "student loans",
    "scholarships",
  ],
  authors: [{ name: "RUHE Global Resources" }],
  metadataBase: new URL("https://ruhegr.com"),
  icons: {
    icon: "/logo/ruhe-header.png",
    apple: "/logo/ruhe-header.png",
  },
  openGraph: {
    title: "RUHE Global Resources — Study, Work & Migrate Abroad",
    description:
      "ICEF-accredited educational advisory helping Nigerian students and professionals study, work and migrate abroad with confidence.",
    url: "https://ruhegr.com",
    siteName: "RUHE Global Resources",
    type: "website",
    images: ["/logo/ruhe-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUHE Global Resources",
    description:
      "Study, work and migrate abroad — the stress-free way. Admissions, exams, funding and visas, all in one place.",
    images: ["/logo/ruhe-logo.png"],
  },
  alternates: { canonical: "https://ruhegr.com" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <ImageProtection />
      </body>
    </html>
  );
}
