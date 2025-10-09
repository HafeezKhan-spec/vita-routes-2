import React , {useState, useRef, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Plus, Check, MapPin, Target, Shield, Truck, Clock, Calendar, ChevronDown, List, Users, Briefcase, FileText, CheckCircle, Mail, Globe, Phone, BookOpen, Cpu } from 'lucide-react';
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


// --- BLOCK 0: TYPES AND DATA STRUCTURES (Retained from original) ---

interface CheckItem {
  text: string;
}

interface FeatureTab {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  checkItems: CheckItem[];
}

interface ContentBlock {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isImageRight: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

// Data for the Tabbed Feature Section (Why Choose Advance Edge LLC?) (Retained from original)
const tabData: FeatureTab[] = [
  {
    id: 'inquiries',
    title: 'Pre-Qualified Patient Inquiries',
    subtitle: 'Services',
    description: "We focus on high-intent audiences and filter out noise. Campaigns are targeted by service line, location, and keywords, then validated with event-level tracking and quality controls.",
    image: Image_5,
    icon: <Target className="w-5 h-5" />,
    checkItems: [
      { text: 'Targeted & Verified Intent' },
      { text: 'Location/Service-Line Targeting' },
      { text: 'Spam & Bot Filtering' },
      { text: 'Call/Form/Chat Tracking' },
    ],
  },
  {
    id: 'performance',
    title: 'Performance-Driven Models',
    subtitle: 'Services',
    description: "Plans start with KPIs (CPL, qualified rate) and acceptance criteria. We test weekly, shift budget to winners, and report what to do next, daily.",
    image: Image_6,
    icon: <Clock className="w-5 h-5" />,
    checkItems: [
      { text: 'KPI-Led Planning' },
      { text: 'Weekly Experiments' },
      { text: 'Budget To Winners' },
      { text: 'Transparent Dashboards' },
    ],
  },
  {
    id: 'acquisition',
    title: 'Custom Acquisition Programs',
    subtitle: 'Services',
    description: "Your mix is built for your market: SEO, PPC, website design, reputation management, social, content, and automation, tuned by state rules, payer mix, and goals.",
    image: Image_7,
    icon: <Users className="w-5 h-5" />,
    checkItems: [
      { text: 'State-By-State Playbooks' },
      { text: 'Service-Line Messaging' },
      { text: 'Channel Mix By Objective' },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Security',
    subtitle: 'Services',
    description: "Healthcare first. HIPAA-aware workflows, BAA available, data minimization, and no PHI in ad platforms. ADA-conscious experiences and controlled access keep brands safe.",
    image: Image_8,
    icon: <Shield className="w-5 h-5" />,
    checkItems: [
      { text: 'HIPAA/BAA By Default' },
      { text: 'Data Minimization' },
      { text: 'ADA Best Practices' },
      { text: 'Secure Approvals/Audits' },
    ],
  },
  {
    id: 'scale',
    title: 'Built to Scale',
    subtitle: 'Services',
    description: "From single clinics to health systems, our frameworks standardize launches, approvals, and reporting, so you can expand confidently.",
    image: Image_9,
    icon: <Truck className="w-5 h-5" />,
    checkItems: [
      { text: 'Multi-Location Rollups' },
      { text: 'Role-Based Governance' },
      { text: 'Reusable Templates' },
      { text: 'Fast, Predictable Launches' },
      { text: 'Creative & Landing Pages' },
    ],
  },
];

// Content Data for the Services Section (Added icon and color for the new card style)
const contentData: ContentBlock[] = [
  {
    title: 'Strategy & Journey Architecture',
    subtitle: 'SERVICES WE OFFER',
    description: 'We blueprint triggers, segments, and cadences per service line and state. Journeys map inquiry → education → conversion → retention. We define KPIs, acceptance criteria, and governance so teams approve quickly. This is healthcare marketing automation built for repeatability: fast launches now, easy scale later, and clear ownership at each step.',
    image: Image_2,
    isImageRight: false,
    icon: Briefcase, 
    color: 'text-blue-600',
  },
  {
    title: 'Lead Nurture & Reactivation',
    subtitle: 'SERVICES WE OFFER',
    description: 'Not ready today? We keep value flowing. Sequences deliver FAQs, prep checklists, coverage notes, and testimonials. Branching adapts to clicks and replies. Reactivation targets inactive lists with safety disclaimers and fresh offers. Outcome: more inquiries from audiences you already paid to reach, with lower incremental cost than net-new media.',
    image: Image_3,
    isImageRight: true,
    icon: Users, 
    color: 'text-purple-600',
  },
  {
    title: 'Email Programs Automation',
    subtitle: 'SERVICES WE OFFER',
    description: 'Welcome, nurture, education series, reactivation, and win-back campaigns—each with plain-English copy, accessible templates, and UTMs. Clinical review where needed. We manage deliverability, warmups, and bounce/complaint controls. Why it matters: more qualified actions from the inbox, not just ads. This is healthcare email marketing that proves lift in GA4.',
    image: Image_4,
    isImageRight: false,
    icon: Mail, 
    color: 'text-red-600',
  },
  {
    title: 'Medical CRM Marketing & Integrations',
    subtitle: 'SERVICES WE OFFER',
    description: 'We connect forms, call tracking, and site events to CRMs/EMRs via secure APIs or webhooks. Fields are minimized; consent flows are logged. Dashboards join source → campaign → step → outcome. Result: cleaner pipeline and better routing. This is medical CRM marketing that makes sales and operations easier.',
    image: Image_3,
    isImageRight: true,
    icon: Globe, 
    color: 'text-green-600',
  },
  {
    title: 'SMS Programs Automation',
    subtitle: 'SERVICES WE OFFER',
    description: 'Opt-in SMS for reminders, follow-ups, and time-sensitive updates. Quiet-hour rules by state, easy opt-out, and content guardrails come standard. We use short codes/alphas as allowed and log consent events. Why it matters: timely nudges drive response. This is healthcare sms marketing that’s respectful, measurable, and built for scale.',
    image: Image_2,
    isImageRight: true,
    icon: Phone, 
    color: 'text-green-600',
  },
  {
    title: 'Consent, Compliance and Deliverability',
    subtitle: 'SERVICES WE OFFER',
    description: 'We document consent, honor opt-outs immediately, and maintain suppression lists. Sender domains, DKIM/DMARC, and list hygiene protect inbox placement. Content avoids PHI and prohibited claims. Approvals are logged. In short: HIPAA compliant email marketing principles by default, with audit trails that satisfy policy and keep programs safe.',
    image: Image_3,
    isImageRight: true,
    icon: Target, 
    color: 'text-green-600',
  },
  {
    title: 'Appointment Reminder Automation',
    subtitle: 'SERVICES WE OFFER',
    description: 'Multi-touch reminders via email/SMS reduce no-shows. We confirm intent, provide prep links, and route to self-service pages where applicable, no scheduling handled by us. Cadence varies by specialty and risk of missed visits. Reporting shows confirmations, reschedules, and gaps. This is appointment reminder automation built to protect revenue and patient experience.',
    image: Image_4,
    isImageRight: true,
    icon: BookOpen, 
    color: 'text-green-600',
  },
  {
    title: 'Data Testing and Reporting',
    subtitle: 'SERVICES WE OFFER',
    description: 'Every journey ships with UTMs, GA4 events, and call attribution. Dashboards show channel → sequence → step → inquiry, plus retention and reactivation. We run controlled tests on cadence, subject lines, creative, and CTAs. Insight leads to iteration the following sprint, so performance improves week after week.',
    image: Image_3,
    isImageRight: true,
    icon: Cpu, 
    color: 'text-green-600',
  },
];


// --- REUSABLE COMPONENTS (Standardized to PaidMarketing.tsx) ---

/**
 * Custom CTA Button component with consistent styling from PaidMarketing.tsx.
 */
const PrimaryButton: React.FC<{ children: React.ReactNode, onClick?: () => void }> = ({ children, onClick }) => (
    <Link
        to="/contact"
        onClick={onClick}
        className={`inline-flex items-center mx-auto justify-center bg-black text-white font-semibold border-2 border-orange-500 px-6 py-3 rounded-none transition-all duration-300 ease-out hover:bg-white hover:text-black hover:shadow-[0_0_25px_5px_rgba(249,115,22,0.35)] hover:scale-105 hover:-translate-y-0.5`}
    >
        <Plus className="w-5 h-5 mr-2" />
        {children}
    </Link>
);


/**
 * Checkmark list item used in multiple sections, updated to match PaidMarketing.tsx styling.
 */
const CheckListItem: React.FC<CheckItem & { index: number }> = ({ text, index }) => (
  <li 
    key={index} 
    className="flex items-start p-2 rounded-lg transition duration-200 hover:bg-gray-100/50 cursor-pointer transform hover:scale-[1.01] hover:shadow-sm"
  >
    <CheckCircle className="flex-shrink-0 w-6 h-6 mr-3 mt-1 text-blue-600" />
    <p className="text-base text-gray-700 font-medium">{text}</p>
  </li>
);

/**
 * Mock Image Card component (from PaidMarketing.tsx).
 */
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

// New Service Card Component (Adapted from PaidMarketing.tsx's visual style)
const AutomationServiceCard: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const Icon = block.icon;
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white transition duration-300 hover:shadow-2xl group border border-gray-100 transform hover:-translate-y-1">
            {/* Image (Top section) */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={block.image} // Using a generic placeholder for the card image
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


// --- BLOCK 1: HERO SECTION (Rewritten to PaidMarketing.tsx style) ---

const HeroSection: React.FC = () => {
  const heroText =
    "Turn interest into qualified inquiries with healthcare marketing automation, planned, built, and optimized by automation experts at AdvanceEdge. We design healthcare email marketing and healthcare SMS marketing that respect consent, protect privacy, and move patients from discovery to action with measurable next steps.";

  return (
    <div
      className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <h1
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ color: '#ffffff' }}
            >
              Healthcare Marketing Automation in the USA
            </h1>
            <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
              {heroText}
            </p>

            {/* Main CTA Button */}
            <div className="mt-10 flex justify-center">
              <PrimaryButton
                onClick={() =>
                  console.log("Book a Call clicked from Hero")
                }
              >
                BOOK A CALL
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// --- BLOCK 2: BENEFITS SECTION (Rewritten to PaidMarketing.tsx style) ---

const BenefitsSection: React.FC = () => {
  // Original MarketingAutomation checklist items
  const benefits = [
    "Faster follow-ups that prevent leads from going cold.",
    "Cross-channel prompts: email, SMS, and on-site triggers.",
    "Opt-in journeys by state, service line, and payer mix.",
    "Lower CPA by nurturing instead of re-buying clicks.",
    "Appointment reminder automation reduces no-shows and late cancellations.",
    "Clear KPIs: open, click, reply, conversion, retention.",
    "Reactivation sequences revive dormant patient lists.",
    "HIPAA compliant email marketing protects privacy and consent.",
    "Education drips improve understanding and adherence.",
    "No PHI in ad platforms, logs, or reports.",
    "From South Carolina and Tennessee to North Dakota, South Dakota, Arkansas, and Maryland, we localize quiet hours, consent language, and carrier rules, then scale programs nationwide across all 50 states.", // Keeping the footnote content as a descriptive line
  ];

  // Split the list for two columns, adjusting for the extra descriptive line
  const col1 = benefits.slice(0, 5);
  const col2 = benefits.slice(5, 10);
  const footnote = benefits[10];


  return (
    <div className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
                AUTOMATIC ENGAGEMENT TO INQUIRY FORMULA
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8" style={{ color: PRIMARY_BLUE }}>
                Benefits of Healthcare Marketing Automation
            </h2>
        </div>

        {/* Content Grid (Image/Description left, Checklist right) */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start mt-12">
          
          {/* Left Column - Description and Image */}
          <div className="relative p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-[1.005] group">
            <div className="w-full h-72 rounded-xl overflow-hidden mb-6">
                <MockImageCard 
                    src={Image_1} 
                    alt="Automated Flow Chart" 
                />
            </div>
            <p className="text-lg text-gray-600">
                Our healthcare automation marketing experts allow practices to turn inquiries into appointments with automated processes, no manual intervention needed. Automated follow-up, patients welcome for confirmed first click to visit integrated.
            </p>
          </div>

          {/* Right Column - Benefits List (Applying list item hover style) */}
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
        <p className="mt-16 text-sm text-center text-gray-500 max-w-4xl mx-auto italic">
            {footnote}
        </p>

        {/* Final CTA Button */}
        <div className="mt-12 text-center">
            <PrimaryButton onClick={() => console.log('Book a Call clicked from Benefits')}>
                BOOK A CALL
            </PrimaryButton>
        </div>

      </div>
    </div>
  );
};

// --- BLOCK 3: CONTENT GRID SECTION (Now a 2-column card grid, using the AutomationServiceCard style) ---

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
                    Automation Program Services
                </h2>
            </div>

            {/* 3-Column Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {contentData.map((block, index) => (
                    <AutomationServiceCard key={index} block={block} />
                ))}
            </div>

            {/* Section Footer - Value Prop Banner (Standardized style) */}
            <div className="mt-20 flex flex-col sm:flex-row items-center justify-between p-8 rounded-2xl shadow-2xl transition duration-500 hover:shadow-2xl hover:scale-[1.005] cursor-pointer" style={{ backgroundColor: PRIMARY_TEAL }}>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center sm:text-left">
                    10+ Years of Healthcare Marketing Expertise, 100% Commitment to Your Success
                </h3>
            </div>

        </div>
    </div>
  );
};


// --- BLOCK 5: TABBED FEATURE SECTION (Rewritten as WhyChooseSection - Vertical Tabs) ---

const WhyChooseSection: React.FC = () => {
    const [activeTabId, setActiveTabId] = useState(tabData[0].id);
    const activeTab = tabData.find(tab => tab.id === activeTabId) || tabData[0];

    // Helper component for the Tab link
    const TabLink: React.FC<{ id: string, label: string }> = ({ id, label }) => {
        const isActive = activeTabId === id;
        const colorClass = isActive ? `text-gray-900 font-bold` : `text-gray-500 font-medium hover:text-gray-700`;
        const borderClass = isActive ? `bg-red-600` : `bg-gray-200 group-hover:bg-red-300`;

        return (
            <button
                onClick={() => setActiveTabId(id)}
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
                        Why Choose Advance Edge LLC?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We go beyond simple automation. Our approach ensures your patient journeys are HIPAA-compliant, conversion-focused, and built for measurable lift.
                    </p>
                </div>

                {/* Content Grid (Tabs and Active Content) */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-12 mt-12">
                    
                    {/* Left Column - Tab Navigation (Vertical) */}
                    <div className="lg:col-span-4 rounded-2xl p-4 lg:p-0 border lg:border-none border-gray-200">
                        <div className="space-y-1 lg:sticky lg:top-8">
                            {tabData.map((tab) => (
                                <TabLink key={tab.id} id={tab.id} label={tab.title} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Active Content */}
                    <div key={activeTabId} className="lg:col-span-8 mt-8 lg:mt-0 p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-xl transition-all duration-500 animate-fadeInUp group">
                        <h3 className="text-3xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
                            {activeTab.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            {activeTab.description}
                        </p>

                        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                            {/* Details List (Applying list item hover style) */}
                            <div>
                                <ul className="space-y-4">
                                    {activeTab.checkItems.map((item, index) => (
                                        <li key={index} className="flex items-start p-2 rounded-lg transition duration-200 hover:bg-gray-100/50 cursor-pointer transform hover:scale-[1.01] hover:shadow-sm">
                                            <CheckCircle className="flex-shrink-0 w-6 h-6 mr-3 mt-1 text-blue-600" />
                                            <p className="text-base text-gray-700 font-medium">{item.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Image (Right side) */}
                            <div className="mt-8 md:mt-0">
                                <MockImageCard src={activeTab.image} alt={activeTab.title} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA Button */}
                <div className="mt-20 text-center">
                    <PrimaryButton onClick={() => console.log('Book a Call clicked from Why Choose Section')}>
                        BOOK A CALL
                    </PrimaryButton>
                </div>

            </div>
        </div>
    );
};


// --- BLOCK 6: FOOTER/CTA SECTION (Standardized to PaidMarketing.tsx) ---

const FooterSection: React.FC = () => (
  <footer className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Digital Future?
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that trust Advance Edge Digital for their digital transformation journey.
        </p>
      </div>
    </div>
      <div className="border-t border-gray-700 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold mb-6">Advance Edge Digital</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge digital solutions and innovative strategies for sustainable growth.
            </p>
            {/* Social Links */}
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
              <div className="p-1 -m-1 rounded transition duration-200 hover:opacity-80">
                <div className="font-medium">Monday - Friday</div>
                <div>8:00 AM - 6:00 PM EST</div>
              </div>
              <div className="p-1 -m-1 rounded transition duration-200 hover:opacity-80">
                <div className="font-medium">Saturday</div>
                <div>9:00 AM - 2:00 PM EST</div>
              </div>
              <div className="p-1 -m-1 rounded transition duration-200 hover:opacity-80">
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
    </footer>
);


// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">
      {/* Global Tailwind Setup for font and styling consistency */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
          body { font-family: 'Inter', sans-serif; }
          
          /* ADDED: Custom Keyframes for smooth fade-in and slight slide up transition (from PaidMarketing.tsx) */
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
};

export default App;
