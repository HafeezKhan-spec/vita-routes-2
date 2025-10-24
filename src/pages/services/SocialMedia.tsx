import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaFacebookF, FaYoutube, FaInstagram, FaSnapchatGhost, FaTiktok, 
  FaPinterestP, FaTwitter, FaRedditAlien, FaLinkedinIn, FaWhatsapp 
} from 'react-icons/fa';
import { Plus, CheckCircle, Search, Zap, Phone, ShoppingBag, TrendingUp, Users, Youtube, MapPin,Instagram} from 'lucide-react';
import Background from "../../assets/Background.jpg"; 
import Image_1 from "../../assets/Image_1.webp";
import Image_2 from "../../assets/Image_2.webp";
import Image_3 from "../../assets/Image_3.webp";
import Image_4 from "../../assets/Image_4.webp";
import Image_5 from "../../assets/Image_5.webp";
import Image_6 from "../../assets/Image_6.webp";
import Image_7 from "../../assets/Image_7.webp";
import Image_8 from "../../assets/Image_8.webp";
import Image_9 from "../../assets/Image_9.webp";
import { URL } from 'url';
import BookCallButton from '@/components/BookCallButton';

// --- Color Constants ---
const PRIMARY_BLUE = '#2a3e5c'; // Dark Blue/Navy for headings
const PRIMARY_TEAL = '#0e7490'; // Dark Teal/Cyan for main CTA
const WHITE='#ffffffff'
// UPDATED: Using a generic placeholder URL that explicitly tells the user where to add their image.
const BLANK_IMAGE_URL = 'https://placehold.co/800x600/f3f4f6/555555?text=ADD+YOUR+IMAGE+URL+HERE'; 
const ACCENT_RED = '#dc2626'; // Used for the vertical bar next to active tab
// Removed FOOTER_BACKGROUND and FONT_GRAY constants


// --- SCROLL ANIMATION LOGIC (Custom Hook and Wrapper) ---

/**
 * Custom hook to use the Intersection Observer API.
 * @param options Observer options (root, rootMargin, threshold).
 * @returns [ref, isIntersecting]
 */
const useIntersectionObserver = (options: IntersectionObserverInit = { threshold: 0.1 }): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only set to true once to trigger the animation only on entry
      if (entry.isIntersecting && !isIntersecting) {
        setIsIntersecting(true);
      }
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, isIntersecting]);

  return [ref, isIntersecting];
};

/**
 * Wrapper component to apply a soft fade-in and subtle slide-up animation on scroll.
 */
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const transitionClass = isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-4'; // Reduced translation for a 'fade-in' focus

    return (
        <div
            ref={ref}
            // Increased duration for a delayed and softer animation effect
            className={`transition-all duration-1000 ease-out ${transitionClass}`}
        >
            {children}
        </div>
    );
};

// --- Hero Section Component ---

const HeroSection: React.FC = () => {
  const heroText = "At AdvanceEdge Health, we manage compliant social media marketing for healthcare organizations across Facebook, Instagram, LinkedIn, YouTube, TikTok, X, Pinterest, Reddit, Snapchat, and WhatsApp. Our campaigns educate patients, highlight physicians, answer common healthcare questions, and build trusted community presence while protecting patient privacy.";

  return (
    // Updated background to a gentle gradient and increased vertical padding for visual appeal
    <div
      className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centering container for the content */}
        <div className="flex flex-col items-center text-center">

          {/* Content Area (Text and Button) - Updated to match the structure of PaidMarketing.tsx (removed small header text) */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white">
             Social Media Marketing for Healthcare
            </h1>
            <p className="mt-3 text-lg text-white max-w-2xl mx-auto">
              Engage, educate, and convert through strategic healthcare social media campaigns.
            </p>
            <p className="mt-3 text-lg text-white max-w-2xl mx-auto">
              {heroText}
            </p>
            <p className="mt-3 text-lg text-white max-w-2xl mx-auto">
              We target the right audiences by service line and location, track performance by platform, and deliver measurable growth in engagement, reputation, and patient inquiries.
            </p>

            {/* Main CTA Button */}
            <div className="mt-20 text-center">
              <BookCallButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Benefits of Healthcare ORM Services Section ---

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Increased patient engagement and two-way communication that builds stronger relationships.",
    "Improved patient education with clear, accessible healthcare content that answers real questions.",
    "Consistent brand visibility across platforms, increasing recognition and local trust.",
    "Data-driven audience targeting that reaches the right patients by service line and location.",
    "HIPAA-compliant content strategy that prevents PHI exposure and supports responsible communication.",
    "Enhanced community reputation through authentic storytelling and physician visibility.",
    "Cost-efficient campaigns that outperform traditional advertising in reach and ROI.",
    "Real-time analytics and performance tracking for continuous campaign optimization.",
  ];

  const col1 = benefits.slice(0, 5);
  const col2 = benefits.slice(5, 10);

  return (
    <div className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500  mb-2">
            Proven Engagement and Acquisition Formula
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8" style={{ color: PRIMARY_BLUE }}>
           Benefits of Healthcare Social Media Marketing
          </h2>
        </div>

        {/* Content Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start mt-12">

          {/* Left Column - Image and Description - Added subtle lift/shadow on hover */}
          <div className="relative p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-[1.005] group">
            <div className="w-full h-72 rounded-xl overflow-hidden mb-6">
              <img
                // Using BLANK_IMAGE_URL as the source
                src={Image_1}
                alt="Two professionals reviewing a document, symbolizing collaboration and strategy."
                className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src = BLANK_IMAGE_URL;
                }}
              />
            </div>
            <p className="text-lg text-gray-700">
             We execute medical social media marketing using documented playbooks, clinical approvals, localized strategies, and privacy-safe tracking. Every campaign is built to strengthen reputation, increase engagement, and generate qualified patient inquiries.
            </p>
          </div>

          {/* Right Column - Benefits List */}
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

              {/* Column 1 */}
              <ul className="space-y-2">
                {col1.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start p-3 rounded-xl transition duration-300 hover:bg-blue-50/70 hover:shadow-md hover:translate-x-1 cursor-pointer"
                  >
                    <CheckCircle className="flex-shrink-0 w-6 h-6 mr-3 mt-1 text-blue-600" />
                    <p className="text-base text-gray-700 font-medium">{benefit}</p>
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2">
                {col2.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start p-3 rounded-xl transition duration-300 hover:bg-blue-50/70 hover:shadow-md hover:translate-x-1 cursor-pointer"
                  >
                    <CheckCircle className="flex-shrink-0 w-6 h-6 mr-3 mt-1 text-blue-600" />
                    <p className="text-base text-gray-700 font-medium">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footnote/Disclaimer */}
        <p className="mt-16 text-sm text-center text-gray-700 max-w-4xl mx-auto">
         Whether your healthcare brand is in Alaska, Massachusetts, Hawaii, New Jersey, Michigan, Indiana, Colorado, Arizona or any other US state, our medical social media marketing tailor content, compliance and targeting to each market and scale measurably across all 50 states. 
        </p>

        {/* Final CTA Button */}
        <div className="mt-20 text-center">
          <BookCallButton />
        </div>

      </div>
    </div>
  );
};

// --- Services Data ---
interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  imagePlaceholder: string;
}

const servicesData: Service[] = [
    {
        title: "Facebook",
        subtitle: "We run healthcare Facebook ads with geo/radius targeting, lookalikes, and retargeting. Objectives match goals:",
        description: "Leads, Traffic, or Awareness. We test lead forms versus landing pages and attach UTMs to GA4. Reports show CPL, qualified-inquiry rate, and creative fatigue. This is compliant healthcare social media marketing with no PHI stored.",
        icon: FaFacebookF,
        color: 'text-blue-600',
        imagePlaceholder: Image_2,
    },
    {
        title: "YouTube",
        subtitle: "YouTube enables physician-led education and pre-visit guidance.",
        description: "We script and optimize chapters, thumbnails, end screens, and captions. Media buys use skippable pre-roll and in-feed placements around high-intent topics and locations. KPIs include watch time, view-through rate, subscribers, and clicks to service-line pages. Moderation and disclaimers protect accuracy and trust.",
        icon: FaYoutube,
        color: 'text-red-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "Instagram",
        subtitle: "Our healthcare Instagram marketing pairs Reels, carousels, and Stories with accessible captions and alt text. ",
        description: "Content maps to service lines and local markets. We retarget engagers to track inquiry paths. For clinicians, doctor social media marketing uses Q&As and spotlights to build trust. Metrics cover saves, shares, profile taps, and completed inquiries.",
        icon: FaInstagram,
        color: 'text-black-600',
        imagePlaceholder: Image_4,
    },
    {
        title: "Snapchat",
        subtitle: "Snapchat Ads reach younger and local audiences. We run vertical video, Story sequences, and geofenced promotions. ",
        description: " Healthcare themes include immunizations, sports injuries, and seasonal wellness. Landing pages are fast and mobile-first. KPIs track reach, frequency, swipe-ups, pixelled sessions, and inquiry completions. All creative follows platform rules and medical social media marketing guidelines.",
        icon: FaSnapchatGhost,
        color: 'text-yellow-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "TikTok",
        subtitle: "With healthcare TikTok marketing, we publish short, creator-style education. Spark Ads boost proven posts. Targeting uses interests, behaviors, and location.",
        description: "Disclaimers and clinical review keep claims accurate. KPIs include view-through rate, average watch time, clicks, and qualified inquiries. It’s medical social media marketing designed for reach and measurable action.",
        icon: FaTiktok,
        color: 'text-black-600',
        imagePlaceholder: Image_2,
    },
    {
        title: "Pinterest",
        subtitle: "Pinterest captures discovery-stage intent. We build boards for dermatology, fertility, eye care, dental aesthetics, and wellness.",
        description: " Promoted Pins target interests, life stages, and locations. Creative includes alt text, clear offers, and compliant visuals that link to service-line pages. Results show saves, outbound clicks, and assisted conversions within multi-channel attribution.",
        icon: FaPinterestP,
        color: 'text-red-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "X (formerly Twitter)",
        subtitle: "X supports advisories, appointment updates, and crisis communication. We use pre-approved copy, clear visuals, and escalation paths.",
        description: "Targeted promotion reaches local communities and referrers. Metrics track impressions, engagements, hashtag reach, and referral clicks. Everything follows healthcare social media marketing policies, with disclaimers to prevent individual medical advice.",
        icon: FaTwitter,
        color: 'text-blue-700',
        imagePlaceholder: Image_4,
    },
    {
        title: "Reddit",
        subtitle: "Reddit activates niche communities. We sponsor relevant threads, support moderated AMAs, and link to authoritative resources—never personal medical advice.",
        description: "Targeting uses communities, interests, and geographies. KPIs include click-throughs, time on page, subscriber growth, and discussion quality. Moderation standards and medical social media marketing policies keep conversations safe and credible.",
        icon: FaRedditAlien,
        color: 'text-red-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "LinkedIn",
        subtitle: "LinkedIn builds credibility and recruiting pipelines. Posts feature physician expertise, research highlights, and culture stories. Sponsored Content targets administrators, HR, and referral sources by specialty and geography.",
        description: " Hospital social media marketing showcases service-line capabilities. Doctor social media marketing grows professional followings. Reports track applicant quality, click-throughs, followers, and completed inquiry actions.",
        icon: FaLinkedinIn,
        color: 'text-blue-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "WhatsApp",
        subtitle: "WhatsApp supports permission-based updates where allowed. We manage broadcast lists for clinic hours, event reminders, and education. ",
        description: " Consent is captured; opt-outs are honored. Links use UTMs for GA4 tracking. Metrics cover delivery, reads, clicks, and responses. No PHI is requested. It complements Facebook and Instagram for fast, localized communication.",
        icon: FaWhatsapp,
        color: 'text-green-600',
        imagePlaceholder: Image_3,
    }
];

// --- New Service Card Component for Integrated Image and Text ---

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;
  return (
    // Enhanced Card Hover: Adds a slight upward translate for a 'lift' effect.
    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white transition duration-300 hover:shadow-2xl group border border-gray-100 transform hover:-translate-y-1">
      {/* Image (Top section - height adjusted to h-64 to match PaidMarketing.tsx) */}
      <div className="h-64 w-full overflow-hidden">
        <img
          // Using BLANK_IMAGE_URL as the source
          src={service.imagePlaceholder}
          alt={service.title}
          // Image Hover: Scales the image inside the container on hover.
          className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = BLANK_IMAGE_URL;
          }}
        />
      </div>
      {/* Text Content */}
      <div className="p-6">
        <div className="flex items-start mb-3">
          {/* Icon and Title */}
          {/* Icon Hover: Changes background color slightly on group hover */}
          <div className={`p-3 rounded-full bg-blue-50/70 mr-4 flex-shrink-0 ${service.color} transition duration-300 group-hover:bg-blue-100/90 group-hover:shadow-lg group-hover:scale-110`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold pt-1" style={{ color: PRIMARY_BLUE }}>
            {service.title}
          </h3>
        </div>
        <p className="text-base text-gray-700 leading-relaxed mt-4">
          {service.description}
        </p>
      </div>
    </div>
  );
};


const CheckCircle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);


// --- Services We Offer Section ---
const ServicesSection: React.FC = () => {
  const tabs = [
    {
      key: 'facebook',
      label: 'Facebook & Instagram Ads',
      title: 'Facebook & Instagram Ads',
      points: [
        'Custom audience building',
        'Custom ad graphics',
        'Custom ad copywriting',
        'Conversion tracking',
        'Ad campaign optimization',
        'Reporting and analytics',
      ],
    },
    {
      key: 'tiktok',
      label: 'TikTok Ads',
      title: 'TikTok Ads',
      points: [
        'Creator-style short-form creative',
        'Interest and behavior targeting',
        'Conversion tracking',
        'Ad optimization and testing',
        'Reporting and analytics',
      ],
    },
    {
      key: 'linkedin',
      label: 'LinkedIn Ads',
      title: 'LinkedIn Ads',
      points: [
        'Audience targeting by role and specialty',
        'Sponsored content creatives',
        'Conversion tracking',
        'Optimization and A/B tests',
        'Reporting and analytics',
      ],
    },
    {
      key: 'social',
      label: 'Social Media Marketing',
      title: 'Social Media Marketing',
      points: [
        'Content planning and calendars',
        'Creative design and copywriting',
        'Community engagement',
        'Performance tracking',
        'Optimization and reporting',
      ],
    },
  ];

  const [active, setActive] = useState('facebook');
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Services We Offer</h2>
            <p className="mt-4 text-lg text-gray-300">Tailored strategies for every platform to grow your brand.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          {/* Left vertical tabs */}
          <div className="flex flex-col gap-4">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`w-full text-left rounded-full px-5 py-4 transition border ${
                    active === t.key 
                    ? 'bg-orange-500 border-orange-500 text-white font-semibold' 
                    : 'border-white/20 hover:bg-white/5'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Right content panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl md:text-3xl font-extrabold">{activeTab.title}</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeTab.points.map((pt) => (
                <div key={pt} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">{pt}</span>
                </div>
              ))}
            </div>
            <a
              href="#" // Changed from Link to a standard anchor tag
              className="mt-8 inline-block font-semibold text-orange-500 underline underline-offset-4 hover:text-white transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
// --- Why Choose Advance Edge Section ---

interface TabContent {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  details: string[];
}

const tabData: Record<string, TabContent> = {
  inquiries: {
    title: "Pre-Qualified Patient Inquiries",
    description: "We focus on high-intent audiences and filter out noise. Campaigns are targeted by service line, location, and keywords, then validated with event-level tracking and quality controls.",
    imageAlt: "Hand holding stars representing quality and reviews",
    imageSrc: Image_5,
    details: [
      "Targeted & Verified Intent",
      "Location/Service-Line Targeting",
      "Spam & Bot Filtering",
      "Call/Form/Chat Tracking"
    ],
  },
  performance: {
    title: "Performance-Driven Models",
    description: "Plans start with KPIs (CPL, qualified rate) and acceptance criteria. We test weekly, shift budget to winners, and report what to do next, plainly.",
    imageAlt: "Laptop displaying charts and performance graphs",
    imageSrc: Image_6,
    details: [
      "KPI-Led Planning",
      "Weekly Experiments",
      "Budget To Winners",
      "Transparent Dashboards"
    ],
  },
  custom: {
    title: "Custom Acquisition Programs",
    description: "Your mix is built for your market: SEO, PPC, website design, reputation management, social, content, and automation, tuned by state rules, payer mix, and goals.",
    imageAlt: "Hand pointing at a screen with charts/diagrams",
    imageSrc: Image_7,
    details: [
      "State-By-State Playbooks",
      "Service-Line Messaging",
      "Channel Mix By Objective"
    ],
  },
  compliance: {
    title: "Compliance & Security",
    description: "Healthcare first. HIPAA-aware workflows, BAA available, data minimization, and no PHI in ad platforms. ADA-conscious experiences and brands safe.",
    imageAlt: "Clipboard checklist representing compliance",
    imageSrc: Image_8,
    details: [
      "HIPAA/BAA by Default",
      "Data Minimization",
      "ADA Best Practices",
      "Secure Approvals/Audits"
    ],
  },
  scale: {
    title: "Built to Scale",
    description: "From single clinics to health systems, our frameworks standardize launches, approvals, and reporting, so you can expand confidently.",
    imageAlt: "Digital calendar/board with dates and numbers",
    imageSrc: Image_9,
    details: [
      "Multi-Location Rollups",
      "Role-Based Governance",
      "Reusable Templates",
      "Fast, Predictable Launches",
      "Creative & Landing Pages"
    ],
  },
};

const WhyChooseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>('inquiries');
  const content = tabData[activeTab];

  // Helper component for the Tab link
  const TabLink: React.FC<{ id: keyof typeof tabData, label: string }> = ({ id, label }) => {
    const isActive = activeTab === id;
    const colorClass = isActive ? `text-gray-900 font-bold` : `text-gray-500 font-medium hover:text-gray-700`;
    const borderClass = isActive ? `bg-red-600` : `bg-gray-200 group-hover:bg-red-300`;

    return (
      <button
        onClick={() => setActiveTab(id)}
        className="group relative w-full text-left py-3 px-4 transition duration-300 focus:outline-none hover:bg-gray-100/50 rounded-lg transform hover:translate-x-1"
      >
        {/* Vertical Accent Bar */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-lg transition-all duration-300 ${borderClass}`}
          style={{ backgroundColor: isActive ? ACCENT_RED : undefined }}
        ></div>
        <span className={`pl-3 text-lg transition-colors duration-300 ${colorClass}`}>{label}</span>
      </button>
    );
  };

  return (
    <div className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: PRIMARY_BLUE }}>
            Why Choose Advance Edge?
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            We go beyond basic lead generation. Our data-driven approach ensures you receive verified, high-intent claimants that match the specific requirements of mass tort and personal injury cases.
          </p>
        </div>

        {/* Content Grid (Tabs and Active Content) */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 mt-12">

          {/* Left Column - Tab Navigation */}
          <div className="lg:col-span-4 rounded-2xl p-4 lg:p-0 border lg:border-none border-gray-200">
            <div className="space-y-1 lg:sticky lg:top-8">
              {Object.entries(tabData).map(([key, data]) => (
                <TabLink key={key} id={key as keyof typeof tabData} label={data.title} />
              ))}
            </div>
          </div>

          {/* Right Column - Active Content */}
          <div key={activeTab} className="lg:col-span-8 mt-8 lg:mt-0 p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-xl transition-all duration-500 animate-fadeInUp group">

            <h3 className="text-3xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
              {content.title}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {content.description}
            </p>

            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Details List */}
              <div>
                <ul className="space-y-4">
                  {content.details.map((detail, index) => (
                    <li key={index} className="flex items-start p-2 rounded-lg transition duration-200 hover:bg-gray-100/50 cursor-pointer transform hover:scale-[1.01] hover:shadow-sm">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 mr-3 mt-1 text-blue-600" />
                      <p className="text-base text-gray-700 font-medium">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image (Right side) */}
              <div className="mt-8 md:mt-0">
                {/* Using the standard MockImageCard style */}
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-200 flex items-center justify-center bg-gray-100">
                  <img
                    // Using BLANK_IMAGE_URL as the source
                    src={content.imageSrc}
                    alt={content.imageAlt}
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = BLANK_IMAGE_URL;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="mt-20 text-center">
          <BookCallButton />
        </div>

      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">
      {/* Load Inter font only */}
      <style>
        {`
          
          
          /* Custom Keyframes for smooth fade-in and slight slide up transition */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Apply the animation */
          .animate-fadeInUp {
            animation: fadeInUp 0.4s ease-out forwards;
          }
        `}
      </style>

      <main>
        <HeroSection />
        
        <AnimatedSection>
            <BenefitsSection />
        </AnimatedSection>

        <AnimatedSection>
            <ServicesSection />
        </AnimatedSection>
        
        <AnimatedSection>
            <WhyChooseSection />
        </AnimatedSection>
      </main>

      
    </div>
  );
}




