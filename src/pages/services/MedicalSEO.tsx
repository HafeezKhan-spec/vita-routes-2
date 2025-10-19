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
import BookCallButton from '@/components/BookCallButton';

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
  const heroText = "AdvanceEdge Health provides medical SEO services that help healthcare providers dominate high-intent searches and convert clicks into appointments. Our healthcare SEO programs combine keyword strategy, on-page optimization, user experience, and analytics to deliver measurable, long-term growth.";

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
              Medical SEO Services
            </h1>
            <p className="mt-3 text-lg text-white max-w-2xl mx-auto">
              Rank higher. Attract patients. Grow your practice.
            </p>
            <p className="mt-3 text-lg text-white max-w-2xl mx-auto">
              {heroText}
            </p>
            <p className="mt-3 text-lg text-white max-w-2xl mx-auto">
              We work with hospitals, specialty clinics, and multi-location healthcare groups across California, Texas, New York, Florida, and beyond — providing clear reporting, HIPAA-compliant optimization, and consistent visibility across every service line and location.
            </p>

            {/* Main CTA Button */}
            <div className="mt-10 flex justify-center">
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
    "Higher rankings for key treatments and specialties through targeted medical SEO.",
    "Increased patient calls, form fills, and chats from high-intent healthcare searches.",
    "Stronger local visibility with optimized Google Business Profiles, reviews, and location pages.",
    "Improved page experience that meets Core Web Vitals and converts more visitors.",
    "Reduced dependence on paid ads by building a sustainable organic growth channel.",
    "Enhanced authority for physicians with optimized bios, schema, and condition pages.",
    "Clear reporting dashboards to track keywords, rankings, and patient inquiries.",
    "Scalable SEO programs for hospitals, DSOs, and multi-location healthcare networks.",
    "Privacy-safe measurement with HIPAA-compliant tracking and analytics.",
    
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
            <p className="text-lg text-gray-700">
             Your Proven Formula for Healthcare SEO and Patient Growth
            </p>
            <p className="text-lg text-gray-700">
              The right medical SEO program makes your practice visible when patients search for care.Our healthcare SEO experts help hospitals, specialty clinics, and multi-location practices rank higher, attract qualified inquiries, and grow patient volume — all with HIPAA-compliant optimization and transparent reporting.
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
        Win high-intent searches and convert them into qualified patient inquiries.Our medical SEO programs align content, user experience, and analytics to help healthcare providers achieve consistent, measurable growth. As a healthcare SEO company serving clinics and hospitals nationwide, we focus on sustainable results and transparent reporting.
        </p>

        {/* Final CTA Button */}
        <div className="mt-12 text-center">
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
        description: "Our analytics dashboards connect keywords, pages, and channels directly to qualified patient inquiries using GA4, GSC, and call tracking with no PHI stored in platforms. We monitor cost per lead (CPL), conversion rates, and SERP share to identify trends, flag anomalies, and recommend actionable next steps. Reporting is transparent, frequent, and focused on ROI.",
        icon: Zap,
        color: 'text-purple-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "Off-Page Optimization",
        subtitle: "Earn authority without risk.",
        description: "We build high-authority, healthcare-relevant backlinks through digital PR, medical journals, professional associations, and quality directories. Our team manages local citations, accelerates review acquisition, and reclaims unlinked mentions, always avoiding spammy tactics. Every backlink strengthens domain authority, trust, and rankings across your key service lines.",
        icon: Phone,
        color: 'text-red-600',
        imagePlaceholder: Image_4,
    },
    {
        title: "UI & UX Design",
        subtitle: "Design for trust and action:",
        description: "We create ADA-conscious, mobile-first layouts that load fast and guide users effortlessly. Clear architecture highlights service lines and physicians, while conversion-optimized forms and CTAs reduce friction. We continuously test headlines, CTAs, and layouts to increase engagement and translate SEO traffic into measurable patient actions.",
        icon: ShoppingBag,
        color: 'text-green-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "Technical SEO Optimization",
        subtitle: "Fix what search engines see first:",
        description: "We enhance site performance and structure through Core Web Vitals, HTTPS security, crawlability, and indexation improvements. Our team optimizes multi-location site architecture for hospital and medical practice SEO, validates structured data, and resolves technical errors — ensuring both search engines and patients find your pages quickly and reliably.",
        icon: TrendingUp,
        color: 'text-yellow-600',
        imagePlaceholder: Image_2,
    },
    {
        title: "Competitor Analysis",
        subtitle: "See the battlefield clearly.",
        description: "We identify keyword gaps, backlink opportunities, local pack strengths, and review signals by analyzing top-performing healthcare competitors. Insights guide tactical actions across states and service lines, ensuring your SEO strategy outperforms in the markets that matter most.",
        icon: Users,
        color: 'text-pink-600',
        imagePlaceholder: Image_3,
    },
    {
        title: "Content Creation",
        subtitle: "Create patient-friendly, accurate content:",
        description: "We produce SEO-optimized healthcare content including condition hubs, service-line pages, physician bios, blogs, and videos. Each asset is medically reviewed, schema-optimized, and privacy-safe under HIPAA guidelines. Our content attracts patients, supports credibility, and enhances physician and clinic visibility in search results.",
        icon: Youtube,
        color: 'text-red-700',
        imagePlaceholder: Image_4,
    },
    {
        title: "Google Business Profile (GMB) Optimization",
        subtitle: "Optimize every location:",
        description: "We optimize every element of your Google Business Profile, from NAP consistency and categories to photos, attributes, and posts. Our local SEO team manages reviews, questions, and spam prevention, linking each GBP to its corresponding location page with proper UTM tracking. For hospitals, we structure multiple department profiles to maximize location-based visibility.",
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
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-2">
            WHAT ALL WE PROVIDE?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: PRIMARY_BLUE }}>
            Comprehensive Healthcare SEO Services
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
    description: "We focus on high-intent audiences and filter out low-quality traffic. Campaigns are segmented by service line, location, and search intent, validated with event-level tracking and quality control.",
    imageAlt: "Hand holding stars representing quality and reviews",
    imageSrc: Image_5,
    details: [
      "Targeted & Verified Intent",
      "Location & Service-Line Precision",
      "Spam & Bot Filtering",
      "Call/Form/Chat Tracking"
    ],
  },
  performance: {
    title: "Performance-Driven Campaign Models",
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
    title: "Compliance & Security Focus",
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
    title: "Scalable, Multi-Location Growth",
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
            Proven Expertise. Scalable Growth. Transparent Results.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            With over a decade of digital marketing experience, AdvanceEdge Health goes beyond lead generation to deliver verified, high-intent patient inquiries. Our data-driven healthcare marketing model ensures measurable ROI while maintaining HIPAA compliance and brand trust.
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

        <h3 className="text-lg font-extrabold text-black mb-8">
              Ready to Transform Your Digital Future?
            </h3>
        <p className="text-lg text-gray-700 mb-8">
              Join hundreds of businesses that trust AdvanceEdge Digital to grow visibility, attract patients, and scale with confidence.
            </p>
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




