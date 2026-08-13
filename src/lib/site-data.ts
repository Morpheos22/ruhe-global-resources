import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  BookOpenCheck,
  PlaneTakeoff,
  Home,
  Banknote,
  Globe2,
  FileText,
  Users,
  Stethoscope,
  Briefcase,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  School,
  Award,
  Send,
  Plane,
  CarFront,
  LifeBuoy,
  Sun,
  Building2,
  HandHeart,
  UserCheck,
} from "lucide-react";

export type NavLink = { label: string; href: string };

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const navItems: NavGroup[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about", children: [
    { label: "Our History", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
  ] },
  { label: "Services", href: "#services", children: [
    { label: "Study Abroad", href: "#services" },
    { label: "IELTS Preparation", href: "#services" },
    { label: "TOEFL Preparation", href: "#services" },
    { label: "Study Visa", href: "#services" },
    { label: "Work Visa", href: "#services" },
    { label: "Dependent Visa", href: "#services" },
    { label: "Spouse Visa", href: "#services" },
    { label: "Business Visa", href: "#services" },
    { label: "Visa Interview Training", href: "#services" },
    { label: "Destination Selection", href: "#services" },
    { label: "Institution Selection", href: "#services" },
    { label: "Course Selection", href: "#services" },
    { label: "Admission Processing", href: "#services" },
    { label: "Flight Processing", href: "#services" },
    { label: "Airport Pickup", href: "#services" },
    { label: "Post-Arrival Services", href: "#services" },
    { label: "Summer School", href: "#services" },
    { label: "Nurses Recruitment", href: "#services" },
    { label: "Health Assistant", href: "#services" },
    { label: "Doctors Recruitment", href: "#services" },
  ] },
  { label: "Destinations", href: "#partnership" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export const services: Service[] = [
  {
    num: "01",
    title: "Study Abroad",
    description:
      "With partnerships across 1,000+ universities worldwide, we match you with an institution that fits your goals, budget and career plan — then walk you through every step of admission.",
    icon: GraduationCap,
    bullets: [
      "Destination, course & institution selection",
      "Application & document review",
      "Offer letter & enrolment confirmation",
      "Tuition payment guidance",
    ],
  },
  {
    num: "02",
    title: "Exam Tutorials",
    description:
      "Experienced, reliable IELTS, TOEFL, PTE and GRE preparation. We diagnose your weak areas, give you a structured study plan, and drill you with full-length mock tests.",
    icon: BookOpenCheck,
    bullets: [
      "IELTS Academic & General",
      "TOEFL iBT",
      "PTE Academic",
      "GRE / GMAT foundations",
    ],
  },
  {
    num: "03",
    title: "Visa Processing",
    description:
      "Years of experience processing study, work, dependent, spouse and business visas for the world's leading destinations — with a strong approval track record.",
    icon: PlaneTakeoff,
    bullets: [
      "Study, work & business visas",
      "Dependent & spouse visas",
      "Visa interview preparation",
      "Biometrics & submission support",
    ],
  },
  {
    num: "04",
    title: "Accommodation",
    description:
      "Through trusted partners, we help arrange comfortable on-campus or private housing that fits your budget and preferences, so you arrive with a place to call home.",
    icon: Home,
    bullets: [
      "On-campus dormitories",
      "Private student residences",
      "Homestay & shared housing",
      "Short-let options for arrivals",
    ],
  },
  {
    num: "05",
    title: "Money Transfer",
    description:
      "Support for tuition remittance and upkeep payments abroad through licensed channels — so funding your studies is one less thing to worry about.",
    icon: Banknote,
    bullets: [
      "Tuition fee remittance",
      "Upkeep & maintenance transfers",
      "Compliant FX documentation",
      "Receipts for embassy purposes",
    ],
  },
  {
    num: "06",
    title: "Permanent Residency",
    description:
      "Guidance through PR applications for destinations like Canada, Germany and Australia — from a team that knows the points system and the paperwork inside-out.",
    icon: Globe2,
    bullets: [
      "Canada Express Entry",
      "Germany skilled PR pathway",
      "Australia skilled migration",
      "Document & language checklist",
    ],
  },
];

export type Region = {
  title: string;
  countries: string;
  blurb: string;
};

export const regions: Region[] = [
  {
    title: "Europe",
    countries:
      "United Kingdom, Ireland, Germany, Lithuania, France, Italy, Latvia, Spain, Netherlands, Finland",
    blurb:
      "From Russell Group universities in the UK to tuition-friendly public universities in Germany, Europe remains a top destination for Nigerian students seeking globally recognised degrees and post-study work rights.",
  },
  {
    title: "North America",
    countries: "United States, Canada",
    blurb:
      "The US offers unmatched research university options and OPT pathways, while Canada combines affordable tuition with clear PR routes — we have a strong track record placing students in both markets.",
  },
  {
    title: "Rest of the World",
    countries:
      "Australia, New Zealand, China, India, Japan, Singapore, Ghana",
    blurb:
      "Whether you want Australia's graduate visa stream, Singapore's business-friendly environment, or affordable English-taught programmes in Asia, our team can guide you to the right fit.",
  },
];

export type Stat = { value: number; label: string; suffix?: string };

export const stats: Stat[] = [
  { value: 1200, label: "Study Visas Processed", suffix: "+" },
  { value: 980, label: "5-Star Client Ratings", suffix: "+" },
  { value: 430, label: "Dependant Visas", suffix: "+" },
  { value: 1500, label: "IELTS Students Coached", suffix: "+" },
];

export type BlogPost = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    date: "24 May 2025",
    category: "Study in the UK",
    title: "Top 5 cheapest universities in the UK for African students",
    excerpt:
      "Tuition, living costs and scholarship options compared — a practical shortlist for Nigerian applicants who want a UK degree without breaking the bank.",
    image: "/blog/uk-universities.png",
    href: "https://ruhegr.com/top-5-cheapest-universities-in-uk-for-africans/",
  },
  {
    date: "09 May 2025",
    category: "Destinations",
    title: "[Update] Top 8 easiest countries for Nigerians to study in",
    excerpt:
      "Visa approval rates, post-study work options and cost of living — the eight destinations we currently recommend most to Nigerian applicants.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    href: "https://ruhegr.com/update-top-8-easiest-countries-for-nigerians-to-study/",
  },
  {
    date: "12 Apr 2025",
    category: "Visa Interviews",
    title: "What to know before your student visa interview",
    excerpt:
      "The five questions visa officers love to ask, how to frame your study plan, and the documents that make the difference between approval and refusal.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    href: "https://ruhegr.com/blog/",
  },
];

export type DetailedService = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const detailedServices: DetailedService[] = [
  {
    icon: FileText,
    title: "Admission Processing",
    description:
      "End-to-end handling of your university applications — from shortlisting and SOP review to submission, follow-up and unconditional offer.",
  },
  {
    icon: Users,
    title: "Visa Interview Training",
    description:
      "Mock interviews calibrated to embassy expectations, with feedback on tone, body language and answers to high-risk questions.",
  },
  {
    icon: MapPin,
    title: "Destination Selection",
    description:
      "We help you weigh cost, post-study work rights, PR pathway and course reputation so you pick a country that fits your long-term plan.",
  },
  {
    icon: School,
    title: "Institution & Course Selection",
    description:
      "From Russell Group to Fachhochschulen, we match your academic profile and budget to institutions where you will actually thrive.",
  },
  {
    icon: Plane,
    title: "Flight Processing",
    description:
      "Discounted student fares, baggage planning and the right arrival window — booked through trusted travel partners.",
  },
  {
    icon: CarFront,
    title: "Airport Pickup",
    description:
      "Land knowing someone is waiting. Our destination partners meet you at the airport and get you safely to your accommodation.",
  },
  {
    icon: LifeBuoy,
    title: "Post-Arrival Services",
    description:
      "Bank account setup, SIM registration, school enrolment and orientation — so your first week abroad is calm, not chaotic.",
  },
  {
    icon: Sun,
    title: "Summer School",
    description:
      "Short-term programmes for younger students to experience international education before committing to a full degree.",
  },
  {
    icon: Stethoscope,
    title: "Nurses Recruitment",
    description:
      "Licensed recruitment of Nigerian nurses to UK, US and Middle East employers — with NMC, NCLEX and OSCE preparation built in.",
  },
  {
    icon: HeartHandshake,
    title: "Health Assistant Roles",
    description:
      "Trained health assistants placed in care homes and hospitals abroad, with full visa sponsorship and onboarding support.",
  },
  {
    icon: Briefcase,
    title: "Doctors Recruitment",
    description:
      "Specialist medical professionals placed in international hospitals, with credentialing, licensing and relocation handled end-to-end.",
  },
  {
    icon: Award,
    title: "Scholarships & Loans",
    description:
      "Access to scholarships, education loans and tuition payment plans — so funding never becomes the reason you stay home.",
  },
];

export type Value = { icon: LucideIcon; title: string; description: string };

export const values: Value[] = [
  {
    icon: ShieldCheck,
    title: "ICEF Accredited",
    description:
      "We hold international agency accreditation, which means our processes are audited and our counsel is genuinely independent.",
  },
  {
    icon: UserCheck,
    title: "Personal Consultant",
    description:
      "You get one dedicated consultant from first call to airport pickup — not a rotating ticket queue.",
  },
  {
    icon: Building2,
    title: "1,000+ University Partners",
    description:
      "Direct relationships across Europe, North America, Asia and Oceania give you access to programmes you can't find on a generic portal.",
  },
  {
    icon: HandHeart,
    title: "End-to-End Ownership",
    description:
      "Admissions, exams, visa, flight, accommodation, post-arrival — one team, accountable for the whole journey.",
  },
];

export type Career = {
  title: string;
  location: string;
  type: string;
  description: string;
};

export const careers: Career[] = [
  {
    title: "Senior Education Counsellor",
    location: "Abuja, NG (Hybrid)",
    type: "Full-time",
    description:
      "Lead a portfolio of student applicants end-to-end: profiling, shortlisting, applications, visas. 3+ years study-abroad experience required.",
  },
  {
    title: "IELTS / TOEFL Tutor",
    location: "Abuja, NG",
    type: "Part-time",
    description:
      "Deliver high-quality group and 1-on-1 exam prep sessions, with mock-test feedback. Band 8.0+ IELTS or equivalent required.",
  },
  {
    title: "Visa Documentation Officer",
    location: "Abuja, NG",
    type: "Full-time",
    description:
      "Own visa application files from document collection to submission. Strong attention to detail and prior embassy-facing experience preferred.",
  },
  {
    title: "Referral Agent (Remote, Pan-Nigeria)",
    location: "Remote",
    type: "Commission-only",
    description:
      "Earn a generous commission for every student or professional you refer to RUHE who enrolls. Open to agents, alum and community leads.",
  },
];

export const contactInfo = {
  email: "georgianeo@ruheglobalresources.com",
  // Primary mobile (WhatsApp-friendly)
  mobile: "+44 7448 387659",
  // Office landline
  telephone: "+44 7448 967703",
  address: "Abuja, Nigeria",
  bookingUrl: "#contact",
};
