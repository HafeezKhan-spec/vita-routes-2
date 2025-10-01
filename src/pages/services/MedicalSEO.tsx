import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Plus, CheckCircle, Smartphone, User, MapPin, TrendingUp, Briefcase, FileText, BarChart2, Shield, Search, BookOpen, Zap, Phone,ShoppingBag,Users,Youtube } from 'lucide-react';
import Image_1 from "../../assets/Image_1.webp";
import Image_2 from "../../assets/Image_2.webp";
import Image_3 from "../../assets/Image_3.webp";
import Image_4 from "../../assets/Image_4.webp";
import Image_5 from "../../assets/Image_5.webp";
import Image_6 from "../../assets/Image_6.webp";
import Image_7 from "../../assets/Image_7.webp";
import Image_8 from "../../assets/Image_8.webp";
import Image_9 from "../../assets/Image_9.webp";
import Background from "../../assets/Background.jpg";

// --- Color Constants ---
const PRIMARY_BLUE = '#2a3e5c'; // Dark Blue/Navy for headings
const PRIMARY_TEAL = '#0e7490'; // Dark Teal/Cyan for main CTA
const BLANK_IMAGE_URL = 'https://placehold.co/800x600/f3f4f6/555555?text=ADD+YOUR+IMAGE+URL+HERE';
const ACCENT_RED = '#dc2626'; // Used for the vertical bar next to active tab

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
  const heroText = "Win high-intent searches and grow qualified inquiries. Our medical SEO Programs align content, UX and analytics for providers nationwide. As a healthcare SEO company serving California, Texas, New York, Florida and all the other states, we focus on durable growth and clear reporting.";

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
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight" style={{ color: '#ffffff' }}>
              Medical SEO Services in the USA
            </h1>
            <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
              {heroText}
            </p>

            {/* Main CTA Button */}
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
              <Link
                to="/contact"
                className={`flex items-center justify-center px-8 py-3 text-base font-extrabold text-white rounded-xl shadow-2xl transition duration-500 transform hover:scale-[1.05] hover:shadow-2xl focus:ring-4 focus:ring-offset-2 focus:ring-blue-500`}
                style={{ backgroundColor: PRIMARY_TEAL }}
              >
                <Plus className="w-5 h-5 mr-2" />
                BOOK A CALL
              </Link>
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
    "Higher rankings for priority service lines with expert medical SEO.",
    "More qualified calls, forms, and chats from healthcare SEO.",
    "Pay only for clicks: daily/monthly budget caps for control.",
    "Stronger authority with physician SEO: bios, schema, condition/treatment pages.",
    "Multi-facility visibility via hospital SEO: service-line hubs and location pages.",
    "Local wins for groups with medical practice SEO: GBP, reviews, location pages.",
    "Faster, clearer pages that meet Core Web Vitals and convert.",
    "Reduced reliance on paid ads; organic becomes a reliable growth channel.",
    "Transparent dashboards to track keywords, pages, and inquiry sources monthly.",
    "Privacy-safe measurement with HIPAA SEO (no PHI in ad platforms).",
    "Delivered by a seasoned medical SEO agency with US healthcare expertise.",
  ];

  const col1 = benefits.slice(0, 5);
  const col2 = benefits.slice(5, 10);

  return (
    <div className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
            Your SERP #Rank1 Formula
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8" style={{ color: PRIMARY_BLUE }}>
            Benefits of Medical SEO Services
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
            <p className="text-lg text-gray-600">
              The right medical SEO program makes you findable when patients search. Our healthcare SEO services, delivered by seasoned healthcare SEO agency USA turn intent into qualified inquiries without risking compliance.
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
        <p className="mt-16 text-sm text-center text-gray-500 max-w-4xl mx-auto">
         Win high-intent searches and grow qualified inquiries. Our medical SEO Programs align content, UX and analytics for providers nationwide. As a healthcare SEO company serving California, Texas, New York, Florida and all the other states, we focus on durable growth and clear reporting.
        </p>

        {/* Final CTA Button */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className={`flex items-center mx-auto justify-center px-8 py-3 text-base font-extrabold text-white rounded-xl shadow-2xl transition duration-500 transform hover:scale-[1.05] hover:shadow-2xl focus:ring-4 focus:ring-offset-2 focus:ring-blue-500`}
            style={{ backgroundColor: PRIMARY_TEAL }}
          >
            <Plus className="w-5 h-5 mr-2" />
            BOOK A CALL
          </Link>
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
        title: "On-Page Optimization",
        subtitle: "We structure pages for medical SEO:",
        description: "titles/meta, H1-H3, internal links, schema, and clear CTAs. Service-line hubs, physician bios, and location pages follow E-E-A-T and readability guidelines. We add FAQs, accessible alt text, and strong intent signals, turning healthcare SEO services into qualified calls, forms, and chats.",
        icon: Search,
        color: 'text-blue-600',
        imagePlaceholder: Image_2,
    },
    {
        title: "Data Analysis & Reporting",
        subtitle: "Make decisions with evidence.",
        description: "Dashboards tie keywords, pages, and sources to qualified inquiries using GA4, GSC, and call tracking, no PHI in platforms. We trend CPL/CPA, SERP share, and conversions, flag anomalies, and present clear next steps. As a healthcare SEO agency USA, we report plainly and often.",
        icon: Zap,
        color: 'text-purple-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "Off-Page Optimization",
        subtitle: "Earn authority without risk.",
        description: "We secure healthcare-relevant backlinks via digital PR, journals, associations, and high-quality directories; build local citations; accelerate reviews; reclaim unlinked mentions; and pursue partner features. As a healthcare SEO company, we avoid spammy tactics, prioritize topical relevance, and strengthen signals that improve rankings and trust.",
        icon: Phone,
        color: 'text-red-600',
        imagePlaceholder: Image_4,
    },
    {
        title: "UI & UX Design",
        subtitle: "Design for trust and action:",
        description: "ADA-conscious, mobile-first layouts; fast pages; scannable sections; and friction-light forms, calls, and chats. Information architecture highlights service lines and physicians. We test headlines, CTAs, and layouts to lift conversion, translating medical SEO traffic into measurable, patient-friendly engagement.",
        icon: ShoppingBag,
        color: 'text-green-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "Technical SEO Optimization",
        subtitle: "Fix what search engines see first:",
        description: "Core Web Vitals, mobile performance, HTTPS, crawl/indexation, canonicals, robots/XML, and redirect hygiene. We optimize multi-location architecture for hospital SEO, reduce duplication for medical practice SEO, validate structured data, and resolve render issues, so bots and patients find fast, error-free pages.",
        icon: TrendingUp,
        color: 'text-yellow-600',
        imagePlaceholder: Image_2,
    },
    {
        title: "Competitor Analysis",
        subtitle: "See the battlefield clearly.",
        description: "We profile SERP competitors, map keyword gaps, analyze backlink quality, compare local pack signals, and assess reviews, schema, and content depth. Findings translate into prioritized actions by state and service line, so your healthcare SEO strategy wins where it matters most.",
        icon: Users,
        color: 'text-pink-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "Content Creation",
        subtitle: "Create patient-friendly, accurate content:",
        description: "condition/treatment hubs, service-line pages, physician bios, blogs, and explainer videos. We apply medical review, schema, and clear CTAs, tuned to state nuances and physician SEO needs. Our HIPAA SEO approach uses privacy-safe research and measurement, ensuring credibility without exposing sensitive information.",
        icon: Youtube,
        color: 'text-red-700',
        imagePlaceholder: Image_4,
    },
    {
        title: "Google Business Profile (GMB) Optimization",
        subtitle: "Optimize every location:",
        description: " correct NAP, primary/secondary categories, services, attributes, photos, and Posts; questions/answers; review generation and responses. Tie profiles to location pages with UTMs, maintain hours/holiday updates, fight spam, and expand citations. For hospitals with departments, we structure GBPs to support hospital SEO at scale.",
        icon: MapPin,
        color: 'text-orange-600',
        imagePlaceholder: Image_3,
    },
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


// --- Services We Offer Section ---

const ServicesSection: React.FC = () => {

  return (
    <div className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
            WHAT ALL WE PROVIDE?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: PRIMARY_BLUE }}>
            Healthcare SEO Services
          </h2>
        </div>

        {/* Service Cards Grid (Updated to 3-column grid to match PaidMarketing.tsx) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            // Note: The original file had a 5-column grid on XL, now consistent with PaidMarketing's 3-column max.
            <ServiceCard key={index} service={service} />
          ))}
        </div>


        {/* Section Footer - Years of Expertise (Added subtle shadow/lift) */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between p-8 rounded-2xl shadow-2xl transition duration-500 hover:shadow-2xl hover:scale-[1.005] cursor-pointer" style={{ backgroundColor: PRIMARY_TEAL }}>
          {/* Note: Updated text to reflect the Reputation Management context better */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center sm:text-left">
            10+ Years of Legal Expertise, 100% Commitment to Your Success
          </h3>
        </div>

      </div>
    </div>
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
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
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
            <p className="text-lg text-gray-600 mb-8">
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
          <Link
            to="/contact"
            className={`flex items-center mx-auto justify-center px-8 py-3 text-base font-extrabold text-white rounded-xl shadow-2xl transition duration-500 transform hover:scale-[1.05] hover:shadow-2xl focus:ring-4 focus:ring-offset-2 focus:ring-blue-500`}
            style={{ backgroundColor: PRIMARY_TEAL }}
          >
            <Plus className="w-5 h-5 mr-2" />
            BOOK A CALL
          </Link>
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
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
          body { font-family: 'Inter', sans-serif; }
          
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

      {/* Footer (Matches PaidMarketing.tsx) */}
      <AnimatedSection>
          <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-8 py-16">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Digital Future?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses that trust Advance Edge Digital for their digital transformation journey.
                </p>
              </div>

              <div className="border-t border-gray-700 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* Company Info */}
                  <div>
                    <h4 className="text-2xl font-bold mb-6">Advance Edge Digital</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Empowering businesses with cutting-edge digital solutions and innovative strategies for sustainable growth.
                    </p>
                    {/* Social Links: Updated to use consistent emojis */}
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-125">📘</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-125">🐦</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-125">📷</a>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                      <li><a href="#hero" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Home</a></li>
                      <li><a href="#about" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">About</a></li>
                      <li><a href="#services" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Services</a></li>
                      <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Portfolio</a></li>
                      <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Testimonials</a></li>
                      <li><a href="#contact" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Contact</a></li>
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="text-xl font-bold mb-6">Contact Info</h4>
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-center space-x-3 p-2 -m-2 rounded-lg transition duration-200 hover:bg-gray-700/50 cursor-pointer">
                        <span className="text-blue-400">📞</span>
                        <span className="hover:text-white transition-colors cursor-pointer">(555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 -m-2 rounded-lg transition duration-200 hover:bg-gray-700/50 cursor-pointer">
                        <span className="text-blue-400">✉️</span>
                        <span className="hover:text-white transition-colors cursor-pointer">info@advanceedgedigital.com</span>
                      </div>
                      <div className="flex items-start space-x-3 p-2 -m-2 rounded-lg transition duration-200 hover:bg-gray-700/50 cursor-pointer">
                        <span className="text-blue-400">📍</span>
                        <span>
                          456 Innovation Drive<br />
                          Tech District<br />
                          San Francisco, CA 94105
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <h4 className="text-xl font-bold mb-6">Office Hours</h4>
                    <div className="space-y-3 text-gray-300">
                      <div>
                        <div className="font-medium">Monday - Friday</div>
                        <div>8:00 AM - 6:00 PM EST</div>
                      </div>
                      <div>
                        <div className="font-medium">Saturday</div>
                        <div>9:00 AM - 2:00 PM EST</div>
                      </div>
                      <div>
                        <div className="font-medium">Sunday</div>
                        <div>Emergency Support Only</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                  <p>&copy; 2024 Advance Edge Digital. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
              </div>
            </div>
          </footer>
      </AnimatedSection>
    </div>
  );
}
