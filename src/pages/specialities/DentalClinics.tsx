import React from 'react';
import BookCallButton from '@/components/BookCallButton';
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
                        Smart Dental Marketing That Delivers New Patients
                    </h1>
                    <p className="mt-4 text-2xl font-bold text-white-400">
                        Smart strategy. Real growth. Lasting trust.
                    </p>
                    <p className="mt-4 text-xl font-bold text-white">
                        AdvanceEdge helps dental practices attract more patients, strengthen local and national visibility, and build a brand people trust. Our programs combine SEO, paid ads, and website optimization to fill chairs while keeping every campaign compliant and patient-safe. 
                    </p>
                    <div className="mt-8 flex justify-center">
                        <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <BookCallButton />
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
                        Who We Help
                    </motion.h3>
                    <div className="space-y-6">
                        {/* Benefit 1: General & Family Dentistry */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">General & Family Dentistry</h3>
                            <p className="mt-2 text-gray-700">From cleanings and crowns to emergency care, we create mobile-friendly websites and campaigns that make education simple and appointment booking effortless.</p>
                        </motion.div>
                         {/* Benefit 2: Cosmetic & Implants */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Cosmetic & Implant Practices</h3>
                            <p className="mt-2 text-gray-700">We design targeted funnels and landing pages for veneers, whitening, and implants, turning interest into consultations through clear offers and measurable results.</p>
                        </motion.div>
                         {/* Benefit 3: Orthodontists & Pediatric */}
                         <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Orthodontists & Pediatric Dentists</h3>
                            <p className="mt-2 text-gray-700">For family-focused practices, we build parent-friendly experiences with strong calls-to-action, easy scheduling, and content that earns long-term trust.</p>
                        </motion.div>
                        {/* Benefit 4: DSO & Multi-Location Groups */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">DSO & Multi-Location Groups</h3>
                            <p className="mt-2 text-gray-700">We centralize marketing for national or regional networks, managing campaigns, reviews, and reporting across every office to drive consistent growth and visibility.</p>
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
            desc: "We audit your online presence, research competitors, and identify growth opportunities. Then we map out keywords, audiences, and budgets that align with your practice goals.",
            icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            desc: "We design fast, responsive websites and landing pages with clear calls-to-action. Tracking tools, call routing, and automation are built in for accurate performance data.",
            icon: <FileText className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            desc: "We activate SEO, ads, and social campaigns, testing creative, timing, and offers to see what brings in the most qualified patients.",
            icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            desc: "We expand on what works, growing new service lines, improving reviews, and refining automation to increase booked appointments and ROI.",
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
  Our Process:{" "}
  <span className="text-2xl text-indigo-400 ml-3">
    Discover &rarr; Build &rarr; Launch &rarr; Optimize
  </span>
</h2>

                    
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
        "Low visibility in local search and inconsistent Google Business Profiles",
        "High ad spend without clear ROI or patient tracking, And Local Relevance Signals.",
        "Weak website conversion paths and slow mobile performance",
        "Limited or outdated patient reviews and reputation gaps",
        "Missed community opportunities and inconsistent branding",
        "Poor attribution between marketing activity and actual appointments",
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
                        Challenges We Solve
                    </h3>

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
                     <p className="text-lg text-bold text-black italic">
                       AdvanceEdge builds complete marketing systems that fix these gaps and create predictable patient flow for every dental practice size.
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
                <BookCallButton />
            </motion.div>
        </motion.section>
    );
};

// --- Component 5: Approach Section (Consistent with AddictionCenters.tsx) ---
const ApproachSection = () => {
    const approachColumns = [
        {
            title: "Attract",
            items: [
                "We make your practice visible through local SEO, paid search, and engaging social media content. Educational videos, influencer collaborations, and community storytelling help new patients discover and trust your brand.",
                
            ],
        },
        {
            title: "Convert",
            items: [
                "We design websites and landing pages that highlight your expertise, simplify pricing and offers, and guide visitors straight to booking. Every ad, form, and chatbot supports one goal: more scheduled appointments.",
                
            ],
        },
        {
            title: "Retain",
            items: [
                "We help you stay connected through follow-up emails, reminders, and newsletters that encourage reviews, referrals, and ongoing care. Analytics show what’s working so your marketing keeps improving month after month.",
                
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
                  Our Approach to Dental Marketing 
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge uses a simple, proven model: Attract. Convert. Retain.
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
                                {/* Using the correct icon from the original code */}
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

// --- Component 6: Why Choose Section (Consistent with AddictionCenters.tsx) ---
const WhyChooseSection = () => {
    const reasons = [
        "Launch targeted ad campaigns that attract real patients",
        "Strengthen visibility with local SEO and map listings",
        "Build brand trust with consistent visuals and clear messaging",
        "Track results from first click to confirmed appointment",
        "Keep patients engaged through reviews, social, and automation",
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
                    Why Choose AdvanceEdge
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                   AdvanceEdge helps dentists, specialists grow with confidence. We combine creative marketing with measurable strategy to bring in patients and keep your brand consistent across every channel.
                </motion.p>
                <motion.p
                    className="text-2xl max-w-3xl mx-auto text-black leading-relaxed"
                    variants={fadeInUp}
                >
                   Our team helps you:
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
             <motion.p
                    className="text-2xl max-w-3xl mx-auto text-black leading-relaxed mt-12"
                    variants={fadeInUp}
                >
                   We make dental marketing simple, scalable, and effective—so you can focus on care while we focus on growth.
                </motion.p>
                <motion.div
                className="max-w-6xl mx-auto px-4 mt-8 flex justify-center lg:justify-start"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
            >
                <BookCallButton />
            </motion.div>
        </motion.section>
    );
};

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
           
        </div>
    );
};

export default DentalClinics;




