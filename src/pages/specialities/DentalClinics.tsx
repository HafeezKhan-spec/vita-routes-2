import React from 'react';
// Local CTA button restored
const BookACallButton = () => (
    <Link to="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
      <Plus className="w-4 h-4" />
      BOOK A CALL
    </Link>
);
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Plus, CheckCircle, ClipboardCheck, FileText, MessageSquare, BarChart3, CircleCheckBigIcon } from 'lucide-react';

import BACKGROUND_IMAGE_URL from '../../assets/Background.jpg'
import CONTENT_IMAGE_URL from '../../assets/Image_10.webp'

// --- Animation Variants (Consistent with AddictionCenters.tsx) ---
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

// --- Reusable Button Component (Consistent with AddictionCenters.tsx) ---
// Using shared BookCallButton for consistent header-style CTA across pages.

// --- Component 1: Header/Hero Section ---
const HeaderSection = () => {
    // Original Hero text content preserved
    return (
        <header>
            <div
                className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
                style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
            >
                {/* Dark overlay consistent with AddictionCenters.tsx */}
                <div className="absolute inset-0 bg-blue-950 bg-opacity-80"></div>

                <div className="relative z-10 max-w-4xl px-4 lg:px-8 text-white text-center mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        From Search to Scheduled - Dental Marketing That Performs
                    </h1>
                    <p className="mt-4 text-2xl font-bold text-white-400">
                        DSO Marketing Playbooks for National and Local Growth
                    </p>
                    <div className="mt-8 flex justify-center">
                        <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <BookACallButton />
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    );
};

// --- Component 2: Who Benefits Section (Consistent with AddictionCenters.tsx) ---
const WhoBenefitsSection = () => {
    return (
        <motion.section
            className="py-16 bg-[#f8f9fc]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
                {/* Image */}
                <motion.div className="lg:w-1/2" variants={fadeInUp}>
                    <img
                        src={CONTENT_IMAGE_URL}
                        alt="Dental team in discussion"
                        className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                    />
                </motion.div>

                {/* Text/Benefits Content */}
                <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
                    <motion.h3 className="text-3xl font-extrabold text-gray-900 mb-6" variants={fadeInUp}>
                        Who Benefits from Dental Marketing in the USA?
                    </motion.h3>
                    <div className="space-y-6">
                        {/* Benefit 1: General & Family Dentistry */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">General & Family Dentistry</h3>
                            <p className="mt-2 text-gray-600">Cleanings, Exams, Fillings, Crowns/Bridges, Root Canals, Extractions, Dentures, Periodontal Therapy, Sealants/Fluoride, Night Guards, Emergency Care, TMJ, CBCT/Scans–Mobile-Friendly Education & Clear Appointment Pathways.</p>
                        </motion.div>
                         {/* Benefit 2: Cosmetic & Implants */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Cosmetic & Implants</h3>
                            <p className="mt-2 text-gray-600">Veneers, Bonding, Whitening, Smile Design, Gum Contouring, Dental Implants (Single-/Full-Arch), Implant Dentures, Bone Grafts, Sinus Lifts, Soft-Tissue Grafts–Offer-Led Funnels, Optimized Landing Pages, Measurable Consults.</p>
                        </motion.div>
                         {/* Benefit 3: Orthodontists & Pediatric */}
                         <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Orthodontists & Pediatric</h3>
                            <p className="mt-2 text-gray-600">Invisalign/Clear Aligners, Braces, Retainers, Expanders, Interceptive Ortho, Habit Appliances, Pediatric Sealants/Fluoride, Stainless-Steel Crowns, Pulp Therapy, Frenectomy, Space Maintainers–Parent-Friendly UX, Strong Calls-To-Action, Easy Scheduling.</p>
                        </motion.div>
                        {/* Benefit 4: DSO & Multi-Location Groups */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">DSO & Multi-Location Groups</h3>
                            <p className="mt-2 text-gray-600">General, Cosmetic, Implants, Ortho, Pedo, Perio, Endo, Oral Surgery, Prosthodontics, Sleep Apnea/TMJ, Same-Day/Emergency, Teledentistry–Centralized Campaign Management, Call Tracking, Analytics Rollups, Governance For National/Local Growth.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

// --- Component 3: Our Marketing Process (Consistent with AddictionCenters.tsx) ---
const ProcessSection = () => {
    const processSteps = [
        {
            step: "01.",
            title: "Discover & Plan",
            desc: "Audit online presence (Google My Business/Maps, listings, UX/UI, speed). Run research, competitive analysis, and content audit. Map keywords by service line and city/ZIP; set demographics, geo-targeting, KPIs, budget, compliance, aligning dental SEO, dental PPC, content strategy.",
            icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            desc: "Design mobile-responsive pages and high-intent landing pages with clear calls-to-action. Implement schema, Google Analytics, call tracking, CRM, email/SMS automation, chatbots. Configure Google Ads/Bing Ads (Search, PMax, Display, Retargeting) and optimize Google My Business/Maps.",
            icon: <FileText className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            desc: "Launch dentist marketing sprints: technical/on-page dental SEO, citations, internal links, link building. Activate SEM and social, Google/Bing, Facebook, Instagram, TikTok, YouTube. Tune bids, dayparts, geo-targets; test offers; monitor traffic, engagement, funnel integrity, conversion rate.",
            icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            desc: "Shift budget to winning keywords, ads, and locations; expand service lines (implants, Invisalign, emergency). Grow reviews; iterate content and video; deepen automation for lead nurturing. Roll up channel→keyword→appointment→revenue reporting to prove ROI and guide strategy.",
            icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
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
                        Our Dentist Marketing Process
                    </h2>
                    <p className="text-2xl text-indigo-400 mt-3">
                        Discover &rarr; Build &rarr; Launch &rarr; Optimize
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
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400 to-blue-500 opacity-20 blur-2xl -z-10"></div>

                            {/* Step + Icon */}
                            <div className="flex items-start justify-between">
                                <h4 className="text-3xl font-bold text-indigo-500">{item.step}</h4>
                                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-3 rounded-lg shadow-inner">
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

// --- Component 4: Challenges Section (Consistent with AddictionCenters.tsx) ---
const ChallengesSection = () => {
    const challengePoints = [
        "Community Gaps – Low Patient Engagement, No Community Plan, Influencers, Or User Generated Content.",
        "Low SERP Visibility – Not Ranking In Top 10 SERP, Weak Keyword Mapping, Backlinks, And Local Relevance Signals.",
        "Local Visibility Gaps – Incomplete Google Business Profile, Mismatched NAP, Thin Photos, Inconsistent Citations And Listings.",
        "Leaky Conversion Paths – Slow Mobile Site, Confusing UX, Buried CTAs, Long Forms, Unclear Scheduling.",
        "Paid Waste Spend – Broad Match Sprawl, Missing Negatives, Sloppy Geo-Targeting, Weak Audiences, Rising CPL.",
        "Reputation Volatility – Few Fresh Reviews; Slow Replies; No Playbook Or Response Standards.",
        "Content Gaps – Sparse Education Assets; Inconsistent Blogging; No Video; Weak Brand Storytelling.",
        "Measurement Issues – Events Unracked; No Call Attribution; Unclear Click To Consult Linkage & ROI."
    ];
    return (
        <motion.section
            className="py-16 bg-[#f8f9fc]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-start">
                <motion.div className="lg:w-1/2 order-2 lg:order-1 space-y-6" variants={fadeInUp}>
                    <h3 className="text-3xl font-extrabold text-gray-900">
                        Dentistry Growth Challenges We Solve
                    </h3>
                    <p className="text-lg text-gray-600">
                        US-Focused Dental Marketing Agency to Accelerate Patient Acquisition.
                    </p>
                    <ul className="mt-8 space-y-4 list-disc pl-6 text-sm">
                        {challengePoints.map((challenge, index) => {
                             const parts = challenge.split('–');
                             const boldPart = parts[0];
                             const restPart = parts.length > 1 ? parts.slice(1).join('–') : ''; // Use '–' as delimiter
                            return (
                                <li key={index}>
                                    <strong>{boldPart}</strong>–{restPart}
                                </li>
                            );
                        })}
                    </ul>
                     <p className="text-sm text-gray-500 italic">
                        Dental practices across California, Texas, New York, Florida, Illinois, New Jersey, plus Massachusetts, Pennsylvania, Ohio, Georgia, North Carolina, Washington, Michigan, Arizona, Colorado, and every other U.S. state benefit from our scalable, multi-location programs, built for patient acquisition and Local SEO practices.
                    </p>
                </motion.div>
                {/* Image */}
                <motion.div className="lg:w-1/2 order-1 lg:order-2" variants={fadeInUp}>
                    <img
                        src={CONTENT_IMAGE_URL}
                        alt="Dental team in discussion"
                        className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                    />
                </motion.div>
            </div>
            {/* CTA Button */}
            <motion.div
                className="max-w-6xl mx-auto px-4 mt-8 flex justify-center lg:justify-start"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
            >
                <BookACallButton />
            </motion.div>
        </motion.section>
    );
};

// --- Component 5: Approach Section (Consistent with AddictionCenters.tsx) ---
const ApproachSection = () => {
    const approachSteps = [
        {
            title: "Attract",
            points: [
                { "label": "Dental SEO", "desc": "Keywords, Ranking, Schema, Link Building, Maps/Google My Business, Local Listings." },
                { "label": "Dental PPC / SEM", "desc": "Google Ads/Bing Ads (Search, PMax), Display Ads, Retargeting." },
                { "label": "Social Media", "desc": "Facebook, Instagram, TikTok, YouTube; Creators/Influencers, Storytelling, Video, Multi-Channel Outreach." },
                { "label": "Strategy & Targeting", "desc": "Strategy Planning, Campaign Strategy, Audience/Demographics, Geo-Targeting." }
            ],
            outcome: "Qualified Organic + Paid Traffic."
        },
        {
            title: "Convert",
            points: [
                { "label": "Website Design & CRO", "desc": "Mobile Responsive UX/UI, Focused Landing Pages, Strong Messaging/Copywriting." },
                { "label": "Access Signals", "desc": "Transparent Pricing, Offers/Promotions, Trust (Reviews/Testimonial), Chatbots." },
                { "label": "Funnel", "desc": "Streamlined Consultation/Appointment Paths With Clear CTAs." }
            ],
            outcome: "Higher Conversion Rate and Booked Visits."
        },
        {
            title: "Retain",
            points: [
                { "label": "Automation", "desc": "Email, SMS, Newsletter, CRM Journeys for Lead Nurturing and Patient Education." },
                { "label": "Community", "desc": "Referrals, Community Outreach, Event/Webinar Promotion, Consistent Branding." },
                { "label": "Analytics", "desc": "Channel → Campaign → Keyword → Inquiry Dashboards; Prove ROI and Guide Budget." },
            ],
            outcome: "Stronger Retention and Lifetime Value."
        }
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
                    Our Dental Marketing Approach
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    Our dentist marketing playbooks at AdvanceEdge executes ROI-focused dental PPC and SEO to scale practices throughout the USA.
                </motion.p>

                <div className="row mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {approachSteps.map((col, idx) => (
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
                                {col.points.map((point, i) => (
                                    <li key={i}><span className="font-semibold">{point.label}:</span> {point.desc}</li>
                                ))}
                                <li><span className="font-semibold">Outcome:</span> {col.outcome}</li>
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// --- Component 6: Why Choose Section (Consistent with AddictionCenters.tsx) ---
const WhyChooseSection = () => {
    const reasons = [
        "Dental SEO for Implants, Invisalign, Emergency.",
        "Brand Consistency With Branding and Logo Standards.",
        "Google Ads and Bing Ads for Implants, Braces, Emergency Dentistry.",
        "Local SEO: GMB/Maps, Reviews, Map-Pack Wins.",
        "Instagram/TikTok Education: Procedures, Aftercare, FAQs.",
        "Conversion Landing Pages, Strong CTAs, Call Tracking.",
        "Facebook and Instagram Insights Guide Optimization.",
        "HIPAA-Aware Workflows for Forms, Reviews, Testimonials.",
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
                    Why Choose AdvanceEdge for Dental Marketing?
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge delivers dental marketing built for the USA, measurable growth for clinics and DSOs.
                </motion.p>

                <div className="row mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {reasons.map((item, idx) => (
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
            </div>
        </motion.section>
    );
};

// --- Component 7: Footer Section (Consistent with AddictionCenters.tsx) ---
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

// --- Main App Component ---
const DentalClinics = () => {
    return (
        <div className="font-sans bg-[#f8f9fc] text-[#111]">
            <HeaderSection />
            <WhoBenefitsSection />
            <ProcessSection />
            <ChallengesSection />
            <ApproachSection />
            <WhyChooseSection />
            <FooterSection />
        </div>
    );
};

export default DentalClinics;
