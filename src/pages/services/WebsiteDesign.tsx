import React , { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Plus, CheckCircle, Target, Code, Cpu, Layout, BookOpen, Lock, Zap, Aperture, Globe, TrendingUp } from 'lucide-react';
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


// --- Color Constants (Standardized to PaidMarketing.tsx) ---
const PRIMARY_BLUE = '#2a3e5c'; // Dark Blue/Navy for headings
const PRIMARY_TEAL = '#0e7490'; // Dark Teal/Cyan for main CTA
const BLANK_IMAGE_URL = 'https://placehold.co/800x600/f3f4f6/555555?text=ADD+YOUR+IMAGE+URL+HERE'; // Standardized placeholder
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

// --- Reusable UI Components (Defined at the top for clarity) ---

// Generic CTA Button component with aggressive hover/shadow (Named PrimaryButton to align with its usage)
const PrimaryButton: React.FC<{ onClick?: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
    <Link
        to="/contact"
        onClick={onClick}
        className={`inline-flex items-center mx-auto justify-center px-8 py-3 text-base font-extrabold bg-black text-white border-2 border-orange-500  shadow-lg hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all duration-200`}
    >
        <Plus className="w-5 h-5 mr-2" />
        {children}
    </Link>
);

// Mock Image Card Component
const MockImageCard: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-200 flex items-center justify-center bg-gray-100">
        <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
            onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = BLANK_IMAGE_URL;
            }}
        />
    </div>
);


// --- Hero Section Component (Styled to match PaidMarketing) ---
const HeroSection: React.FC = () => {
  const heroText = "Convert patients with high-intent healthcare website design in the USA. Our medical website design services build HIPAA-aware, ADA-conscious websites that load fast, meet Core Web Vitals, and convert effortlessly. Serving Arizona, California, Texas and other states, our services drive durable growth with clear reporting.";

  return (
    // Apply gradient background and centered content
    <div
      className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight" style={{ color: '#ffffff' }}>
                    Healthcare Website Design Services in the USA
                </h1>
                <p className="mt-3 text-lg text-white max-w-2xl mx-auto">
                    {heroText}
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


// --- Benefits Data ---
const BENEFITS_DATA = {
    mainTitle: "Benefits of Healthcare Website Design Services",
    subTitle: "YOUR CONVERSION READY BUILD FORMULA",
    description: "A strategically designed healthcare website design makes you findable when patients browse. Our medical website design agency in the USA builds ADA conscious, HIPAA-aware sites to persuade the visitor, turning visits into qualified inquiries, for sure.",
    features: [
        "Fast loads that meet Core Web Vitals.",
        "Clear paths to call, form, and chat across pages.",
        "ADA conscious patterns: contrast, keyboard, labels, error hints.",
        "HIPAA aware intake with secure forms and BAAs when required.",
        "Multi location consistency with reusable templates and role based governance.",
        "Physician profile depth with bios, credentials, schema, and reviews.",
        "Local visibility supported by GBP embeds, maps, and location pages.",
        "Analytics with privacy safe events and clear dashboards for editors.",
        "SEO ready structure: clean IA, internal links, and structured data.",
        "Lower reliance on paid ads as organic and direct conversions improve.",
    ],
    footerText: "Proven website design programs across California, Texas, New York, Florida, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, and Michigan, scalable to all 50 states.",
};

// --- Benefits Section Component (Styled to match PaidMarketing) ---
const BenefitsSection: React.FC = () => {
    const col1 = BENEFITS_DATA.features.slice(0, 5);
    const col2 = BENEFITS_DATA.features.slice(5, 10);

    return (
        <div className="py-16 sm:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Block */}
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
                        {BENEFITS_DATA.subTitle}
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8" style={{ color: PRIMARY_BLUE }}>
                        {BENEFITS_DATA.mainTitle}
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start mt-12">
                    
                    {/* Left Column - Image and Description */}
                    <div className="relative p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-[1.005] group">
                        <div className="w-full h-72 rounded-xl overflow-hidden mb-6">
                            <MockImageCard src={Image_1} alt="Physicians collaborating" />
                        </div>
                        <p className="text-lg text-gray-700">
                            {BENEFITS_DATA.description}
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
                    {BENEFITS_DATA.footerText}
                </p>

                {/* Final CTA Button */}
                <div className="mt-12 text-center">
                    <BookCallButton />
                </div>

            </div>
        </div>
    );
};


// --- Service Interface/Data ---
interface ServiceBlock { title: string, description: string, imageUrl: string, icon: React.FC<React.SVGProps<SVGSVGElement>>, color: string }

const SERVICES_DATA: ServiceBlock[] = [
    { 
        title: "Discovery & Strategy", 
        description: "We align goals, audiences, service lines, markets, and compliance needs into a clear plan for healthcare website design in the USA. You get a prioritized roadmap, KPIs, budgets, and sprint timelines that tie creative, engineering, and approvals to measurable outcomes.", 
        imageUrl: Image_2, 
        icon: Target, 
        color: 'text-red-600' 
    },
    { 
        title: "Performance & Core Web Vitals", 
        description: "We optimize code, media, and delivery for fast LCP, stable CLS, and responsive INP on real devices. Techniques include image optimization, caching, CDN, code splitting, and responsive media, with monitoring in GA4, Search Console, and privacy safe RUM dashboards.", 
        imageUrl: Image_3, 
        icon: Zap, 
        color: 'text-yellow-600' 
    },
    { 
        title: "Information Architecture", 
        description: "We design sitemaps, navigation, and page templates that make care paths obvious for patients and search engines. Service line hubs, physician bios, and location pages use plain language, internal links, and structured patterns that improve findability and set a strong SEO foundation.", 
        imageUrl: Image_4, 
        icon: Layout, 
        color: 'text-green-600' 
    },
    { 
        title: "Content & Medical Review", 
        description: "We produce patient friendly pages for services, conditions, treatments, physicians, and FAQs that match brand and regulatory context. Editorial guides, medical review workflows, and schema support accuracy and trust, while CTAs and proof improve conversion on key journeys.", 
        imageUrl: Image_3, 
        icon: BookOpen, 
        color: 'text-indigo-600' 
    },
    { 
        title: "UX & UI Design", 
        description: "We create conversion focused layouts with clear hierarchy, readable typography, intuitive controls, and persistent CTAs. Microscopy guides users to call, form, or chat, while visual systems and component libraries keep hospital and clinic website design consistent across brands and states.", 
        imageUrl: Image_2, 
        icon: Cpu, 
        color: 'text-purple-600' 
    },
    { 
        title: "Analytics & Privacy", 
        description: "We configure events, funnels, and dashboards that link pages and campaigns to qualified inquiries without PHI in platforms. Consent banners, IP anonymization, retention measurement, and access controls support HIPAA aware policies, with plain monthly reporting and next step actions.", 
        imageUrl: Image_3, 
        icon: Lock, 
        color: 'text-pink-600' 
    },
    { 
        title: "ADA-Conscious Accessibility (WCAG 2.2 AA)", 
        description: "We implement semantic HTML, headings, labels, alt text, keyboard navigation, focus states, and error hints. Color contrast, target sizes, captions, and accessible PDFs are documented in checklists, so your medical website design agency work is inclusive and auditable.", 
        imageUrl: Image_4, 
        icon: Target, 
        color: 'text-blue-600' 
    },
    { 
        title: "Integrations (EMR, CRM, Scheduling, GBP)", 
        description: "We connect secure forms, call tracking, and scheduling tools to EMR or CRM systems through HIPAA aware handoffs. Google Business Profile embeds, maps, and UTMs link location pages to local search journeys, improving data quality and patient experience.", 
        imageUrl: Image_3, 
        icon: Zap, 
        color: 'text-orange-600' 
    },
    { 
        title: "CMS Development (WordPress or Headless)", 
        description: "We build secure, modular sites with roles, approvals, and reusable blocks for multi location growth. WordPress speeds time to market, and headless supports complex apps and integrations, while versioning, staging, and CI pipelines protect quality during releases.", 
        imageUrl: Image_2, 
        icon: Layout, 
        color: 'text-brown-600' 
    },
    { 
        title: "Security, Hosting & Governance", 
        description: "We implement TLS, WAF, backups, uptime monitoring, and patching on approved hosts, with BAAs when required. Role based governance, release calendars, QA checklists, and training keep multi site, multi state programs safe, consistent, and ready to scale.", 
        imageUrl: Image_3, 
        icon: Lock, 
        color: 'text-black-600' 
    },
];

// --- New Service Card Component for Integrated Image and Text (DesignServiceCard renamed to ServiceCard) ---
const ServiceCard: React.FC<{ block: ServiceBlock }> = ({ block }) => {
    const Icon = block.icon;
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white transition duration-300 hover:shadow-2xl group border border-gray-100 transform hover:-translate-y-1">
            {/* Image (Top section) */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={block.imageUrl} 
                    alt={block.title}
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
                    <div className={`p-3 rounded-full bg-blue-50/70 mr-4 flex-shrink-0 ${block.color} transition duration-300 group-hover:bg-blue-100/90 group-hover:shadow-lg group-hover:scale-110`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold pt-1" style={{ color: PRIMARY_BLUE }}>
                        {block.title}
                    </h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed mt-4">
                    {block.description}
                </p>
            </div>
        </div>
    );
};


// --- Services We Offer Section (ServicesGrid renamed to ServicesSection) ---
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
                        Healthcare Website Design Services
                    </h2>
                </div>

                {/* 3-Column Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={index} block={service} />
                    ))}
                </div>

                {/* Section Footer - Years of Expertise (Standardized style) */}
                <div className="mt-20 flex flex-col sm:flex-row items-center justify-between p-8 rounded-2xl shadow-2xl transition duration-500 hover:shadow-2xl hover:scale-[1.005] cursor-pointer" style={{ backgroundColor: PRIMARY_TEAL }}>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center sm:text-left">
                        10+ Years of Legal Expertise, 100% Commitment to Your Success
                    </h3>
                </div>

            </div>
        </div>
    );
};


// --- Why Choose Interface/Data ---
interface TabContent { 
    id: string; 
    label: string; 
    contentTitle: string; 
    description: string; 
    features: string[]; 
    imageUrl: string; 
    imageAlt: string; 
}

const tabData: Record<string, TabContent> = {
    inquiries: { 
        id: 'inquiries', 
        label: 'Pre-Qualified Patient Inquiries', 
        contentTitle: 'Pre-Qualified Patient Inquiries', 
        description: "We focus on high-intent audiences and filter out noise. Campaigns are targeted by service line, location, and keywords, then validated with event-level tracking and quality controls.", 
        features: ["Targeted & Verified Intent", "Location/Service-Line Targeting", "Spam & Bot Filtering", "Call/Form/Chat Tracking", ], 
        imageUrl: Image_5, 
        imageAlt: "Hand holding stars representing quality and reviews" 
    },
    performance: { 
        id: 'performance', 
        label: 'Performance-Driven Models', 
        contentTitle: 'Performance-Driven Models', 
        description: "Plans start with KPIs (CPL, qualified rate) and acceptance criteria. We test weekly, shift budgets to winners, and report what to do next, plainly.", 
        features: ["KPI-Led Planning", "Weekly Experiments", "Budget To Winners", "Transparent Dashboards", ], 
        imageUrl: Image_6, 
        imageAlt: "Laptop displaying charts and performance graphs" 
    },
    acquisition: { 
        id: 'acquisition', 
        label: 'Custom Acquisition Programs', 
        contentTitle: 'Custom Acquisition Programs', 
        description: "Your mix is built for your market: SEO, PPC, website design, reputation management, social, content, and automation, tuned by state rules, payer mix, and playbooks.", 
        features: ["State-By-State Playbooks", "Service-Line Messaging", "Channel Mix By Objective", ], 
        imageUrl: Image_7, 
        imageAlt: "Hand pointing at a screen with charts/diagrams" 
    },
    compliance: { 
        id: 'compliance', 
        label: 'Compliance & Security', 
        contentTitle: 'Compliance & Security', 
        description: "Healthcare first. HIPAA-aware workflows, BAA available, data minimization, and no PHI in ad platforms. ADA-conscious experiences and controlled access keep brands safe.", 
        features: ["HIPAA/BAA By Default", "Data Minimized", "ADA Best Practices", "Secure Approvals/Audits", ], 
        imageUrl: Image_8, 
        imageAlt: "Clipboard checklist representing compliance" 
    },
    scale: { 
        id: 'scale', 
        label: 'Built to Scale', 
        contentTitle: 'Built to Scale', 
        description: "From single clinics to health systems, our frameworks standardize launches, approvals, and reporting, so you can expand confidently.", 
        features: ["Multi-Location Rollups", "Role-Based Governance", "Reusable Templates", "Fast, Predictable Launches", "Creative & Landing Pages", ], 
        imageUrl: Image_9, 
        imageAlt: "Digital calendar/board with dates and numbers" 
    },
};

const WHY_CHOOSE_US_DATA = {
    title: "Why Choose Advance Edge?",
    subtitle: "We go beyond basic lead generation. Our data-driven approach ensures you receive verified, high-intent claimants that match the specific requirements of mass tort and personal injury cases.",
    tabs: Object.values(tabData), // Using the structured tabData
}

// --- Why Choose Advance Edge Section (WhyChooseUsSection renamed to WhyChooseSection) ---
const WhyChooseSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(WHY_CHOOSE_US_DATA.tabs[0].id);
    const content = WHY_CHOOSE_US_DATA.tabs.find(tab => tab.id === activeTab) || WHY_CHOOSE_US_DATA.tabs[0];

    // Helper component for the Tab link
    const TabLink: React.FC<{ id: string, label: string }> = ({ id, label }) => {
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
                        {WHY_CHOOSE_US_DATA.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        {WHY_CHOOSE_US_DATA.subtitle}
                    </p>
                </div>

                {/* Content Grid (Tabs and Active Content) */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-12 mt-12">
                    
                    {/* Left Column - Tab Navigation */}
                    <div className="lg:col-span-4 rounded-2xl p-4 lg:p-0 border lg:border-none border-gray-200">
                        <div className="space-y-1 lg:sticky lg:top-8">
                            {WHY_CHOOSE_US_DATA.tabs.map((tab) => (
                                <TabLink key={tab.id} id={tab.id} label={tab.label} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Active Content */}
                    <div key={activeTab} className="lg:col-span-8 mt-8 lg:mt-0 p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-xl transition-all duration-500 animate-fadeInUp group">
                        <h3 className="text-3xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
                            {content.contentTitle}
                        </h3>
                        <p className="text-lg text-gray-700 mb-8">
                            {content.description}
                        </p>

                        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                            {/* Details List */}
                            <div>
                                <ul className="space-y-4">
                                    {content.features.map((detail, index) => (
                                        <li 
                                            key={index} 
                                            className="flex items-start p-2 rounded-lg transition duration-200 hover:bg-gray-100/50 cursor-pointer transform hover:scale-[1.01] hover:shadow-sm"
                                        >
                                            <CheckCircle className="flex-shrink-0 w-6 h-6 mr-3 mt-1 text-blue-600" />
                                            <p className="text-base text-gray-700 font-medium">{detail}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Image (Right side) */}
                            <div className="mt-8 md:mt-0">
                                <MockImageCard src={content.imageUrl} alt={content.imageAlt} />
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
const App: React.FC = () => (
  <div className="min-h-screen font-sans antialiased bg-white">
    
    {/* Load Inter font from Google Fonts */}
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

export default App;



