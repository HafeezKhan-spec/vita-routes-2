import React from "react";
import { motion } from "framer-motion";
import { Plus, CheckCircle, ClipboardCheck, FileText, MessageSquare, BarChart3, CircleCheckBigIcon } from "lucide-react";

import BACKGROUND_IMAGE_URL from '../../assets/Background.jpg'
// Placeholder for the content image (light subject)
import CONTENT_IMAGE_URL from '../../assets/Image_10.webp'

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- Reusable Button Component ---
const BookACallButton = () => (
    <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-md 
                        hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 
                        flex items-center justify-center gap-2">
      <Plus className="w-4 h-4" />
      BOOK A CALL
    </button>
);

// --- Component 1: Header/Hero Section ---
const HeaderSection = () => (
    <header>
        <div
            className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-blue-950 bg-opacity-80"></div>

            {/* Content (Original text preserved, centering applied for consistent UI) */}
            <div className="relative z-10 max-w-4xl px-4 lg:px-8 text-white text-center mx-auto">
                <h1 className="text-3xl sm:text-5xl font-bold leading-sung">
                    Proven Strategic Growth for <br />
                    <span className="block">Chiropractic Practices</span>
                </h1>
                {/* Removed unused Typewriter import, kept static text/styles */}
                <p className="mt-4 text-base font-bold text-gray-200"> 
                    ( Chiropractor SEO, Chiropractor Google Ads and Website/CRO for U.S. Clinics) 
                </p>
            </div>
        </div>
    </header>
);

// --- Component 2: Who Benefits Section (Section 1) ---
const WhoBenefitsSection = () => {
    const benefitItems = [
        {
            title: "Solo & Group Chiropractors",
            content: "Back, neck, and joint pain care. Spinal adjustments, mobilization, posture correction. Local SEO, reviews, online scheduling, and conversion landing pages lift patient acquisition and retention through focused chiropractor marketing programs.",
        },
        {
            title: "Sports Injury & Rehabilitation Clinics",
            content: "Sports injury, manual therapy, physical therapy adjunct, ergonomic advice, injury prevention. Geo-targeted chiropractor Google Ads, Facebook Ads, and CRO funnels increase consults, treatment plan acceptance, and recurring visit volume.",
        },
        {
            title: "Wellness & Integrated Practices",
            content: "Holistic health, wellness programs, pain management, muscle therapy. Content marketing, email marketing, and marketing automation improve conversion rate, patient loyalty, and referrals—clear pathways from lead generation to care plans.",
        },
        {
            title: "Pediatric, Prenatal & Family Care",
            content: "Pediatric chiropractic, prenatal support, family wellness. Education hubs, FAQs, video marketing, and community engagement build trust. Reputation management and testimonials accelerate reviews and appointment booking.",
        },
    ];

    return (
        <motion.section
            className="py-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
                {/* Image */}
                <motion.div className="lg:w-1/2" variants={fadeInUp}>
                    <img
                        src={CONTENT_IMAGE_URL}
                        alt="Discussion"
                        className="rounded-lg shadow w-full object-cover"
                    />
                </motion.div>

                {/* Text */}
                <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
                    <motion.h3 className="text-2xl font-semibold" variants={fadeInUp}>
                        Who Benefits from Chiropractic Marketing in the USA?
                    </motion.h3>

                    {benefitItems.map((item, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <h6 className="font-bold mt-4">{item.title}</h6>
                            <p>{item.content}</p>
                        </motion.div>
                    ))}

                    {/* Mobile CTA */}
                    <motion.div
                        className="block md:hidden text-center"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex justify-center">
                            <BookACallButton />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Desktop CTA */}
            <motion.div
                className="hidden md:flex justify-center lg:justify-start mt-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
            >
                <div className="flex justify-center ml-8">
                    <BookACallButton />
                </div>
            </motion.div>
        </motion.section>
    );
};

// --- Component 3: Our Chiropractor Marketing Process (Section 2) ---
const ProcessSection = () => {
    const processSteps = [
        {
            step: "01.",
            title: "Discover & Plan",
            desc: "Audit Google My Business, local listings, mobile UX, forms, and booking. Keyword research by service and city. Competitive analysis. KPIs, budgets, geo/demographics, and governance aligning chiropractic marketing across SEO, PPC, content, and social.",
            icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            desc: "Service pages for back pain, neck pain, posture, and rehab. Offers and landing pages. Implement GA4, UTMs, call tracking, CRM, and chatbots. Technical fixes for chiropractic SEO: schema, internal links, city pages, review capture.",
            icon: <FileText className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            desc: "Activate SEO sprints and citations. Launch chiropractor Google Ads (Search, Performance Max) with tight negatives. Facebook/Instagram retargeting. Test headlines, CTAs, and forms. Monitor traffic, conversion rate, CPL, and lead quality by keyword and ZIP.",
            icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            desc: "Shift budget to winning campaigns and neighborhoods. Expand content and video. Automate email/SMS follow-ups and recalls. Strengthen referrals. Dashboards tie channel → keyword → page → call → appointment, proving chiropractic advertising ROI each quarter.",
            icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
        },
    ];

    return (
        <motion.section
            className="bg-gray-900 text-white py-20 relative overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Title */}
                <motion.div className="text-center mb-14" variants={fadeInUp}>
                    <h2 className="text-4xl font-extrabold tracking-wide">
                        Our Chiropractor Marketing Process
                    </h2>
                    <p className="text-2xl text-blue-400 mt-3">
                        Discover → Build → Launch → Optimize
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="relative bg-white text-gray-900 rounded-2xl p-8 
                                    shadow-lg hover:shadow-2xl transition-all duration-300"
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.03 }}
                        >
                            {/* Glowing Aura */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-2xl -z-10"></div>

                            {/* Step + Icon */}
                            <div className="flex items-start justify-between">
                                <h4 className="text-3xl font-bold text-blue-500">{item.step}</h4>
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-lg shadow-inner">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title + Desc */}
                            <h5 className="text-xl font-semibold mt-5">{item.title}</h5>
                            <p className="mt-4 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// --- Component 4: Challenges Section (Section 3) ---
const ChallengesSection = () => {
    const challenges = [
        "Low Local Pack visibility;weak citations and inconsistent GBP details.",
        "Mobile UX friction: slow pages, buried CTAs, confusing booking steps.",
        "Ad waste:broad match sprawl, poor geo and audience controls",
        "Thin education content; no blog, video, or differentiation.",
        "Review gaps: few recent reviews; unstructured reputation management.",
        "Tracking blindspots no call tracking; unclear keyword attribution.",
        "Retention slippage: no email/SMS recalls or loyalty programs.",
        "Seasonal demand swings; no offers calendar or outreach plan.",
    ];

    return (
        <motion.section
            className="py-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
                {/* Image */}
                <motion.div className="lg:w-1/2" variants={fadeInUp}>
                    <img
                        src={CONTENT_IMAGE_URL}
                        alt="Meeting"
                        className="rounded-lg shadow w-full"
                    />
                </motion.div>

                <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
                    <h3 className="text-2xl font-semibold">
                        Chiropractic Growth Challenges We Solve
                    </h3>
                    <h3 className="text-xl font-medium">
                        US-Focused Chiropractor Marketing to Accelerate Patient Acquisition.
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        {challenges.map((challenge, index) => {
                            // Splitting on ':' for bolding consistent with AddictionCenters.tsx
                            const parts = challenge.split(':');
                            const boldPart = parts[0];
                            const restPart = parts.length > 1 ? parts.slice(1).join(':') : '';
                            return (
                                <li key={index}>
                                    <strong>{boldPart}</strong>{restPart}
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            </div>

            <motion.div
                className="max-w-6xl mx-auto px-4 mt-8"
                variants={fadeInUp}
            >
                <p className="text-sm">
                    Whether your chiropractic clinic is in New York, Pennsylvania,
                    Ohio, Michigan, Georgia, Arizona, Washington, or any other U.S. state,
                    our chiropractor marketing programs scale reliably across locations. Book a
                    call to explore chiropractic marketing, chiropractic SEO, and chiropractor
                    Google Ads that grow new-patient volume.
                </p>
                <motion.div
                    className="mt-4 flex justify-center lg:justify-start ml-8"
                    whileHover={{ scale: 1.05 }}
                >
                    <BookACallButton />
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

// --- Component 5: Approach Section (Section 4) ---
const ApproachSection = () => {
    const approachColumns = [
        {
            title: "Attract",
            items: [
                "Chiropractic SEO: Service hubs (back/neck/joint pain, sciatica, posture, sports injury), provider bios, schema, internal links, local pages, quality backlinks.",
                "Local SEO: GBP/Maps per clinic and doctor, citations, NAP consistency, hours/insurance accuracy, review velocity.",
                "SEM & Ads: Google/Bing Search + PMax, display/retargeting; ZIP/demographic geo-targeting; compliant chiropractor Google Ads and chiropractic advertising; Facebook/Instagram for awareness and retargeting.",
                "Outcome: More qualified local searches reaching your site, calling, and booking.",
            ],
        },
        {
            title: "Convert",
            items: [
                "Website & CRO: Fast mobile UX, condition/service landing pages, transparent pricing/insurance, testimonials, online scheduling, clear CTAs.",
                "Proof: Doctor credentials, treatment education, before/after expectations; ADA-conscious layouts.",
                "Proof: Doctor credentials, treatment education, before/after expectations; ADA-conscious layouts.", // Duplicate preserved from original file
                "Outcome: Higher conversion from visit → appointment with lower CPL.",
            ],
        },
        {
            title: "Retain",
            items: [
                "Automation: Email/SMS recalls, care-plan reminders, exercise libraries, newsletters, post-visit follow-ups via CRM.",
                "Reputation & Community: Review requests and response standards, referral programs, workshops, health fairs, local partnerships.",
                "Analytics: Channel → keyword → page → call → appointment dashboards; shift budget to winners.",
                "Outcome: Better retention, referrals, and lifetime value across locations.",
            ],
        },
    ];

    return (
        <motion.section
            className="approach text-center py-20 relative bg-gradient-to-r from-indigo-50 via-white to-indigo-100 overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-extrabold mb-6 text-gray-800 tracking-wide"
                    variants={fadeInUp}
                >
                    Our Chiropractic Health Marketing Approach
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge, a U.S. chiropractic marketing agency, helps chiropractors grow online
                    with focused marketing insights, increasing overall local patient volume and revenue.
                </motion.p>

                <div className="row mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {approachColumns.map((col, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl hover:shadow-indigo-300 transition-all duration-300"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.25 }}
                        >
                            <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-800">
                                <CircleCheckBigIcon className="text-indigo-600 mr-3 text-3xl bg-indigo-100 p-2 rounded-full" />
                                {col.title}
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
                                {col.items.map((text, i) => (
                                    <li key={i}>{text}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// --- Component 6: Why Choose Section (Section 5) ---
const WhyChooseSection = () => {
    const whyChooseItems = [
        "Local-First Chiropractic SEO and Content Playbooks.",
        "High-Intent Chiropractor Google Ads With Guardrails.",
        "Conversion Landing Pages and Mobile Optimization.",
        "Call Tracking, CRM, and Clear Attribution.",
        "Review Velocity and Reputation Governance.",
        "Email/SMS Recalls and Referral Programs",
        "Community Outreach, Events, and Partnerships.",
        "HIPAA-Aware Workflows; No PHI In Ad Platforms.",
    ];

    return (
        <motion.section
            className="choose text-center py-20 relative bg-gray-50 overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="relative container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-extrabold mb-6 text-gray-800 tracking-wide"
                    variants={fadeInUp}
                >
                    Why Choose AdvanceEdge for Chiropractor Marketing?
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    Listed are the reasons why the nation's best chiropractor practices choose AdvanceEdge 
                    as their chiropractic marketing agency in the USA.
                </motion.p>

                <div className="row mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {whyChooseItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white shadow-lg rounded-xl p-6 flex items-center hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.25 }}
                        >
                            <CheckCircle className="text-indigo-600 mr-4 text-2xl hover:text-indigo-700 transition-colors duration-300" />
                            <p className="text-gray-700">{item}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="mt-10"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.08 }}
                >
                    <div className="flex justify-center">
                        <BookACallButton />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

// --- Component 7: Footer Section (Reused content/structure) ---
const FooterSection = () => (
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
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">🐦</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">📷</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                            <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
                            <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Contact Info</h4>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-center space-x-3">
                                <span>📞</span>
                                <span>(555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span>✉️</span>
                                <span>info@advanceedgedigital.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span>📍</span>
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
);

// --- Main App Component (Kept as default export) ---
const Chiropractors = () => {
  return (
      <div>
        <HeaderSection />
        <div className="font-sans bg-[#f8f9fc] text-[#111]">
          <WhoBenefitsSection />
          <ProcessSection />
          <ChallengesSection />
          <ApproachSection />
          <WhyChooseSection />
          <FooterSection />
        </div>
      </div>
  );
};

export default Chiropractors;
