import React , {useState, useRef, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, CheckCircle, Search, Zap, Phone, ShoppingBag, TrendingUp, Users, Youtube, MapPin } from 'lucide-react';

import IMAGE_1_URL from "../../assets/Image_1.webp";
import IMAGE_2_URL from "../../assets/Image_2.webp";
import IMAGE_3_URL from "../../assets/Image_3.webp";
import IMAGE_4_URL from "../../assets/Image_4.webp";
import IMAGE_5_URL from "../../assets/Image_5.webp";
import IMAGE_6_URL from "../../assets/Image_6.webp";
import IMAGE_7_URL from "../../assets/Image_7.webp";
import IMAGE_8_URL from "../../assets/Image_8.webp";
import IMAGE_9_URL from "../../assets/Image_9.webp";
import BACKGROUND_URL from "../../assets/Background.jpg";


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
 * Duration increased to 1000ms and translate distance reduced to 4 units for softness.
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
  const heroText = "Turn search intent into qualified inquiries with healthcare PPC and healthcare Google Ads—optimized, built, and planned by industry experts at AdvanceEdge. We deploy precise geo/service-line targeting, robust negatives, compliant tracking, and conversion-focused landing pages to drive measurable calls, forms, and chats for hospitals, clinics, and multi-location groups.";

  return (
    // Updated background to a gentle gradient and increased vertical padding for visual appeal
    <div
      className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
      // FIXED: Using BACKGROUND_URL
      style={{ backgroundImage: `url(${BACKGROUND_URL})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centering container for the content */}
        <div className="flex flex-col items-center text-center">

          {/* Content Area (Text and Button) - Removed grid classes and added a max-width for better readability */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight" style={{ color: '#ffffff' }}>
              Healthcare PPC and Google Ads in the USA
            </h1>
            {/* Added mx-auto to center the max-width paragraph */}
            <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
              {heroText}
            </p>

            {/* Main CTA Button - Added hover animation: scale and deeper shadow */}
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center px-8 py-3 text-base font-extrabold bg-black text-white border-2 border-orange-500 shadow-lg hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all duration-200`}
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

// --- Benefits of Medical Content Marketing Section ---

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Reach high-intent patients instantly at search.",
    "Precise geo/dayparting and intent segments for patient acquisition ads.",
    "Pay only for clicks: daily/monthly budget caps for control.",
    "Clear ROI by campaign, keyword, conversion.",
    "Build brand visibility and trust fast.",
    "Competitive edge even before SEO matures.",
    "Promote specialized services by service line.",
    "Adapt messaging quickly to market shifts.",
    "Complement SEO: healthcare google ads share winning data.",
    "Capture urgent demand with call-only ads.",
    "Improve conversions with focused landing pages.",
    "HIPAA-safe tracking: no PHI in platforms.",
  ];

  const col1 = benefits.slice(0, 6);
  const col2 = benefits.slice(6, 12);

  return (
    <div className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
                Proven Filtered Patient Acquisition Formula
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8" style={{ color: PRIMARY_BLUE }}>
                Benefits of Medical Content Marketing
            </h2>
        </div>

        {/* Content Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start mt-12">

          {/* Left Column - Image and Description - Added subtle lift/shadow on hover */}
          <div className="relative p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-xl transition duration-500 hover:shadow-2xl hover:scale-[1.005] group"> {/* Added 'group' for image interaction */}
            <div className="w-full h-72 rounded-xl overflow-hidden mb-6">
                <img
                    // FIXED: Using IMAGE_1_URL
                    src={IMAGE_1_URL}
                    alt="Two people discussing a document"
                    // Added image zoom on group hover
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = BLANK_IMAGE_URL;
                    }}
                />
            </div>
            <p className="text-lg text-gray-600">
                Our healthcare paid media agency in the USA runs medical PPC and healthcare PPC ads with tight targeting, rigorous negatives, HIPAA-safe tracking and conversion-focused pages, all built for **measurable outcomes**.
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
                    // Added hover:shadow-md and slight X translation for emphasis
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
                    // Added hover:shadow-md and slight X translation for emphasis
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

        {/* Footnote/Disclaimer - No direct hover needed, but surrounding elements are animated */}
        <p className="mt-16 text-sm text-center text-gray-500 max-w-4xl mx-auto">
            From Washington to West Virginia, including Oregon, Idaho, Montana, Wyoming, Vermont, New Hampshire, Maine, Rhode Island, and Delaware, our healthcare PPC / healthcare Google Ads programs—Search, Performance Max, YouTube, Microsoft Ads (Bing), call-only, and remarketing patient acquisition ads, localize targeting, copy, and scheduling, then scale state by state.
        </p>

        {/* Final CTA Button - Added hover animation: scale and deeper shadow */}
        <div className="mt-12 text-center">
            <Link
                to="/contact"
                className={`inline-flex items-center mx-auto justify-center px-8 py-3 text-base font-extrabold bg-black text-white border-2 border-orange-500  shadow-lg hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all duration-200`}
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
    imagePlaceholder: string; // Used for the image source in the alternating block style
}

const servicesData: Service[] = [
    {
        title: "Google Ads Search (Healthcare PPC)",
        subtitle: "Brand protection; high-intent nonbrand...",
        description: "Brand protection; high-intent nonbrand (“near me,” symptom, condition, treatment); service-line terms (e.g. bariatric surgery, IVF); emergency/urgent-care queries; optional competitor contexts (policy-safe). Structured with exact/phrase themes and robust negatives.",
        icon: Search,
        color: 'text-blue-600',
        imagePlaceholder: IMAGE_2_URL, // Using original import variable
    },
    {
        title: "Demand Gen (Formerly Discovery)",
        subtitle: "Visual placements for warm audiences...",
        description: "Visual placements for warm audiences and cart-abandon-style journeys (policy-safe). Used sparingly for retargeting and content promotion; frequency-capped.",
        icon: Zap,
        color: 'text-purple-600',
        imagePlaceholder: IMAGE_3_URL, // Using original import variable
    },
    {
        title: "Patient Acquisition Ads (Call-Only & Call-Extension)",
        subtitle: "Phone-first ads for urgent lines...",
        description: "Phone-first ads for urgent lines (ER/urgent care, same-day, after-hours). Dayparted to operating hours; call reporting and recordings (where allowed) for quality checks.",
        icon: Phone,
        color: 'text-red-600',
        imagePlaceholder: IMAGE_4_URL, // Using original import variable
    },
    {
        title: "Microsoft Ads (Bing) Search",
        subtitle: "Mirror top search campaigns...",
        description: "Mirror top search campaigns for additional coverage; call extensions; location targeting; negatives and sitelinks matched to Google winners.",
        icon: ShoppingBag,
        color: 'text-green-600',
        imagePlaceholder: IMAGE_3_URL, // Using original import variable
    },
    {
        title: "Performance Max (P-Max Ads)",
        subtitle: "Asset groups per service line and location...",
        description: "Asset groups per service line and location, brand exclusions, page feeds (service-line URLs), and linked Google Business Profile. Used for incremental reach + local signals; weekly asset and audience tests.",
        icon: TrendingUp,
        color: 'text-yellow-600',
        imagePlaceholder: IMAGE_2_URL, // Using original import variable
    },
    {
        title: "Remarketing and Audiences",
        subtitle: "RLSA (site visitors), YouTube viewers...",
        description: "RLSA (site visitors), YouTube viewers, Customer Match (consented lists only). No sensitive interest targeting. Sequenced creatives by funnel stage with strict frequency controls.",
        icon: Users,
        color: 'text-pink-600',
        imagePlaceholder: IMAGE_3_URL, // Using original import variable
    },
    {
        title: "YouTube Ads (Medical Google Ads)",
        subtitle: "Skippable In-Stream and In-Feed...",
        description: "Skippable In-Stream and In-Feed around high-intent topics and geos; sequence awareness → consideration → action. Viewer and site-based remarketing where policy permits; clear disclaimers.",
        icon: Youtube,
        color: 'text-red-700',
        imagePlaceholder: IMAGE_4_URL, // Using original import variable
    },
    {
        title: "Local Ads Elements",
        subtitle: "Location extensions, directions...",
        description: "Location extensions, directions, and local copy variants; radius/city/state targeting; ad schedules tuned to staffing. Supports hospital advertising across multi-location networks.",
        icon: MapPin,
        color: 'text-orange-600',
        imagePlaceholder: IMAGE_3_URL, // Using original import variable
    },
];

// --- New Service Card Component for Integrated Image and Text ---

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon;
    return (
        // Enhanced Card Hover: Adds a slight upward translate for a 'lift' effect, deeper shadow, and a subtle border color shift.
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white transition duration-300 hover:shadow-2xl group border border-gray-100 transform hover:-translate-y-1 hover:border-blue-200">
            {/* Image (Full-looking top section - increased height from h-48 to h-64) */}
            <div className="h-64 w-full overflow-hidden">
                <img
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
                    {/* Icon Hover: Changes background color slightly on group hover and adds a pulse effect */}
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
                        SERVICES WE OFFER
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: PRIMARY_BLUE }}>
                        Healthcare Google Ads & Medical PPC
                    </h2>
                </div>

                {/* Service Cards Grid (Replaced alternating layout with integrated cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        // No need for a scroll animation here, as the parent section is animated
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>


                {/* Section Footer - Years of Expertise (Added subtle shadow/lift and color change on hover) */}
                <div className="mt-20 flex flex-col sm:flex-row items-center justify-between p-8 rounded-2xl shadow-2xl transition duration-500 hover:shadow-2xl hover:scale-[1.005] cursor-pointer" style={{ backgroundColor: PRIMARY_TEAL }}>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center sm:text-left">
                        10+ Years of Medical Marketing Expertise, 100% Commitment to Your Success
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
        imageSrc: IMAGE_5_URL, // Using original import variable
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
        imageSrc: IMAGE_6_URL, // Using original import variable
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
        imageSrc: IMAGE_7_URL, // Using original import variable
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
        imageSrc: IMAGE_8_URL, // Using original import variable
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
        imageSrc: IMAGE_9_URL, // Using original import variable
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
        // Animation class for text and border
        const colorClass = isActive ? `text-gray-900 font-bold` : `text-gray-500 font-medium hover:text-gray-700`;
        const borderClass = isActive ? `bg-red-600` : `bg-gray-200 group-hover:bg-red-300`;

        return (
            // Tab Link Hover: Added hover background and a slight left-padding shift for a subtle animation.
            <button
                onClick={() => setActiveTab(id)}
                className="group relative w-full text-left py-3 px-4 transition duration-300 focus:outline-none hover:bg-gray-100/50 rounded-lg transform hover:translate-x-1"
            >
                {/* Vertical Accent Bar - Animated width on hover */}
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
                    {/* Retaining existing transition for content change (fade-in and slight move up) */}
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
                                        // Added subtle hover effect to list items: slight scale and shadow
                                        <li key={index} className="flex items-start p-2 rounded-lg transition duration-200 hover:bg-gray-100/50 cursor-pointer transform hover:scale-[1.01] hover:shadow-sm">
                                            <CheckCircle className="flex-shrink-0 w-6 h-6 mr-3 mt-1 text-blue-600" />
                                            <p className="text-base text-gray-700 font-medium">{detail}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image (Right side) */}
                            <div className="mt-8 md:mt-0">
                                {/* Image container with hover to zoom effect */}
                                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-200 flex items-center justify-center bg-gray-100">
                                    <img
                                        src={content.imageSrc}
                                        alt={content.imageAlt}
                                        // Image zoom on parent group hover
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

                {/* Final CTA Button - Added hover animation: scale and deeper shadow */}
                <div className="mt-20 text-center">
                   <Link
                     to="/contact"
                     className={`inline-flex items-center mx-auto justify-center px-8 py-3 text-base font-extrabold bg-black text-white border-2 border-orange-500  shadow-lg hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all duration-200`}
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
      {/* Load Inter font and ADD animation keyframes */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
          body { font-family: 'Inter', sans-serif; }
          
          /* Custom Keyframes for smooth fade-in and slight slide up transition (used only for tab switching) */
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
        {/* Hero Section is already visible, no scroll animation needed */}
        <HeroSection />

        {/* --- SCROLL ANIMATED SECTIONS --- */}
        
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
