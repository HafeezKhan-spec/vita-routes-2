import React from "react";
import BookCallButton from '@/components/BookCallButton';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus,Search,Rocket, FileText, BarChart3, CircleCheckBigIcon, CheckCircle, } from "lucide-react";

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
// Using shared BookCallButton for consistent header-style CTA across pages.

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
                    Marketing Playbooks for Eye<br />
                    <span className="block"> Care Marketing </span>
                </h1>
                {/* Replaced Typewriter effect with static text to match the AddictionCenters structure */}
                <p className="mt-4 text-2xl font-bold text-blue-400">
                    LASIK, Cataract, Glaucoma, Retina, Pediatric etc
                </p> 
                <p className="mt-4 text-base font-bold text-white"> 
                    Ophthalmology Marketing in the USA That Converts!
                </p>
                <div className="mt-6 flex justify-center -top-[-20px]">
                    <BookCallButton />
                </div>  
            </div>
        </div>
    </header>
);

// --- Component 2: Who Benefits Section (Section 1) ---
const WhoBenefitsSection = () => {
    const benefitItems = [
        {
            title: "LASIK & Refractive Surgery Centers",
            content: "LASIK, PRK, SMILE, Laser Eye Surgery -Eligibility Quizzes, Cost/Financing Pages, Mobile Booking, Video Marketing, and Local SEO/Google My Business Enhancements to Lift Conversion and Scheduled Consultations through focused LASIK marketing programs.",
        },
        {
            title: "Cataract Surgery & Premium IOL Programs",
            content: "Cataract Surgery, Premium IOLs (Toric/Multifocal), Co-Management – Education Hubs, Surgeon Bios, Insurance Guidance, Reputation Playbooks, and GBP/Maps Architecture Driving Demand with Targeted Cataract Surgery Marketing and Conversion-Ready Landing Pages",
        },
        {
            title: "Retina, Glaucoma & Cornea Specialists",
            content: "Diabetic Retinopathy, AMD, Retinal Detachments, MIGS, Transplants – Condition/Treatment Pages, Referral Pathways, Schema Markup, Reviews, and Physician Video; Ophthalmology SEO And PPC Connect High-Intent Searches To Booked Consultations.",
        },
        {
            title: "Comprehensive & Pediatric Ophthalmology/Eye Clinics",
            content: "Eye Exams, Dry Eye Treatment, Eyeglasses, Contact Lenses, Pediatric Ophthalmology—Local Listings Accuracy, Chatbots, FAQ Hubs, Social Media Ads, And Patient Education That Improve Experience, Retention, And Appointment Booking.",
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
                        Who Benefits from Eye Care Marketing in the USA?
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
                            <BookCallButton />
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
                <div className="flex justify-center ml-8 ml-[700px]">
                    <BookCallButton />
                </div>
            </motion.div>
        </motion.section>
    );
};

// --- Component 3: Our Eye Care Marketing Process (Section 2) ---
const ProcessSection = () => {
    const processSteps = [
        {
            step: "01.",
            title: "Discover & Plan",
            desc: "Audit GBP/Maps, surgeon directories, co-management listings, UX speed, forms, and booking. Map demand for LASIK, cataract/IOL, retina, glaucoma, pediatrics. Review ad policies/claims. Set KPIs, budgets, geo-targets, and governance for ophthalmology marketing and eye care marketing.",
            icon: <Search className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            desc: "Publish service-line hubs (LASIK, Cataract/ Premium IOLs, Glaucoma, Retina, Pediatric), surgeon bios, insurance/financing pages, and conversion landing pages. Implement GA4, UTMs, call tracking, CRM, chatbots; add schema. Configure Search/PMax with negatives to support ophthalmology SEO.",
            icon: <FileText className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            desc: "Execute technical/on-page ophthalmology SEO, internal linking, and medical backlinks. Launch ZIP-level Search/PMax and paid social. Test offers, extensions, creatives. Run focused LASIK marketing and cataract surgery marketing campaigns. Verify events; monitor consult rate, CPL/CPA, and funnel integrity.",
            icon: <Rocket className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            desc: "Shift budget to winning keywords, creatives, and ZIPs; expand locations and service lines. Grow reviews and surgeon video; deepen email/SMS recalls. Refine bids and audiences. Dashboards tie channel→keyword→page→consult to guide quarterly planning.",
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
                        Our Ophthalmology Marketing Process
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
        "Low SERP visibility for LASIK and cataract; weak ophthalmology SEO fundamentals.",
        "Inconsistent GBP/Maps for clinics, surgeons, co-management partners across locations",
        "Conversion friction: slow mobile UX, unclear CTAs, confusing booking steps.",
        "Ad policy risk:LASIK marketing and medical claims trigger disapprovals.",
        "Wasted spend: broad match sprawl, weak geo-targeting, poor audience controls.",
        "Reputation gaps: few recent reviews; no testimonial governance or standards.",
        "Measurement blindspots: missing call tracking; consult attribution unclear by keyword.",
        "Content debt:thin education, limited surgeon video, outdated treatment pages.",
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
                        Growth Challenges for Eye Care Clinics We Solve
                    </h3>
                    <h3 className="text-xl font-medium">
                        US-Focused Ophthalmology Marketing to Accelerate Patient Acquisition.
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        {challenges.map((challenge, index) => {
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
                    Whether your eye care clinic is based in Texas, California, Illinois, New Jersey, Colorado,
                    Florida, North Carolina or any other state in the U.S., our ophthalmology marketing programs
                    provide lasting fix for all locations. Book a call with our marketing experts now to know more
                    about eye care marketing, LASIK marketing or cataract surgery marketing.
                </p>
                <motion.div
                    className="mt-4 flex justify-center lg:justify-start ml-8"
                    whileHover={{ scale: 1.05 }}
                >
 <BookCallButton />
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
                "Ophthalmology SEO: Condition/treatment hubs (LASIK, Cataract/IOL, Glaucoma, Retina, Pediatric), surgeon bios, schema, internal links, medical backlinks.",
                "Local SEO: GBP/Maps per clinic and surgeon, citations, hours/insurance accuracy.",
                "SEM & Ads: Google/Bing Search + PMax, display/retargeting; ZIP-level geo-targeting; compliant LASIK marketing and cataract surgery marketing.",
                "Outcome: More qualified searches reaching your pages and calling to book.",
            ],
        },
        {
            title: "Convert",
            items: [
                "Website & CRO: Fast mobile UX, service-line landing pages, transparent cost/financing, insurance FAQs, testimonial videos.",
                "Access & Tools: Chatbots, call routing/tracking, online appointment flows, co-management/referral paths.",
                "Proof: Clear CTAs, surgeon credentials, outcome education; ADA-conscious layouts.",
                "Outcome: Higher conversion from visit → consult for eye care marketing programs.",
            ],
        },
        {
            title: "Retain",
            items: [
                "Automation: Email/SMS recalls (annual exams, post-op), education series, cross-service nurturing.",
                "Reputation: Review requests and response standards; clinicwide governance.",
                "Analytics: Channel → keyword → page → consult dashboards; budget to winners.",
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
                    Our Eye Care Clinic Marketing Approach
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge, a U.S. ophthalmology marketing agency, delivers clinic-grade
                    programs that drive measurable eye care marketing growth across all eye
                    care services
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
        "Enterprise Ophthalmology SEO: Schema, Internal Links, GBP/Maps Architecture.",
        "Policy-Safe PPC: Search/PMax, Negatives, ZIP-Level Geo-Targeting.",
        "Conversion Landing Pages: Pricing, Financing, Insurance Clarity, Strong CTAs.",
        "Co-Management Referral Paths, Surgeon Directories, Appointment Routing.",
        "Review & Testimonial Governance; Surgeon Video & Visual Content Standards.",
        "GA4 Dashboards, Call Tracking, CRM Consult Attribution To Revenue.",
        "HIPAA-Aware Workflows, ADA-Conscious UX, Secure Approvals & Audits.",
        "Focused LASIK Marketing And Cataract Surgery Marketing With Measurable ROI.",
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
                    Why Choose AdvanceEdge for Ophthalmology Marketing?
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge is a U.S. partner for ophthalmology marketing and eye 
                    care marketing, built to convert searches into scheduled consultations.
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
 <BookCallButton />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

// --- Main App Component (Kept as default export) ---
const EyeClinics = () => {
  return (
    <div>
        <HeaderSection />
        <div className="font-sans bg-[#f8f9fc] text-[#111]">
            <WhoBenefitsSection />
            <ProcessSection />
            <ChallengesSection />
            <ApproachSection />
            <WhyChooseSection />
        </div>
    </div>
  );
};

export default EyeClinics;




