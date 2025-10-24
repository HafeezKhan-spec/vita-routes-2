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
                        Hospital Marketing That Connects Patients to Care
                    </h1>
                    <p className="mt-4 text-2xl font-bold text-white-400">
                        From first click to appointment confirmed.
                    </p>
                    <p className="mt-2 text-md text-white font-medium">
                        AdvanceEdge helps hospitals and health systems attract, convert, and retain patients across every service line. We create coordinated marketing programs that unite SEO, paid media, and web strategy helping your organization grow responsibly while maintaining full brand, policy, and compliance standards.
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
                        alt="A team of medical professionals in a meeting"
                        className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                    />
                </motion.div>

                {/* Text/Benefits Content */}
                <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
                    <motion.h3 className="text-3xl font-extrabold text-gray-900 mb-6" variants={fadeInUp}>
                        Who We Help
                    </motion.h3>
                    <div className="space-y-6">
                        {/* Benefit 1: Community & Regional Hospitals */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Community & Regional Hospitals</h3>
                            <p className="mt-2 text-gray-700">Drive awareness and access for essential services with optimized listings, same-day scheduling, and mobile appointment flows.</p>
                        </motion.div>
                         {/* Benefit 2: Academic Centers & Centers of Excellence */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Academic Centers & Centers of Excellence</h3>
                            <p className="mt-2 text-gray-700">Showcase innovation and outcomes in key areas like oncology, cardiovascular, and women’s health with content, physician stories, and compliant campaigns that build trust locally and nationally.</p>
                        </motion.div>
                         {/* Benefit 3: Ambulatory & Outpatient Networks */}
                         <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Ambulatory & Outpatient Networks</h3>
                            <p className="mt-2 text-gray-700">Strengthen visibility for ASCs, imaging, therapy, and urgent care centers through geo-targeted ads, local SEO, and location-based appointment paths that convert.</p>
                        </motion.div>
                        {/* Benefit 4: Women's & Children's Service Providers */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Women’s & Children’s Hospitals</h3>
                            <p className="mt-2 text-gray-700">Engage families with compassionate, educational campaigns that highlight specialized care in OB/GYN, pediatrics, and NICU programs.</p>
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
            description: "We assess your hospital’s digital presence, research competitors, and identify growth opportunities for each service line.",
            icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            description: "We develop fast, accessible websites, landing pages, and local listings that make care easy to find and book.",
            icon: <FileText className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            description: "Search, social, and advertising campaigns go live with clear goals and compliant messaging that drives real inquiries.",
            icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            description: "We refine what works, expand visibility across departments, and unify analytics for clear systemwide reporting.",
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
                        Our Process:
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
                            <p className="mt-4 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// --- Component 4: Challenges Section (Consistent with AddictionCenters.tsx) ---
const ChallengesSection = () => {
    const challenges = [
        "Department-level competition and fragmented SEO",
        "Confusing hospital map listings and access points",
        "Outdated physician directories and referral paths",
        "Weak mobile booking experiences and low conversion rates",
        "Inconsistent brand presence across hospitals or campuses",
        "Limited visibility into ROI and campaign performance",
        
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
                        {challenges.map((challenge, index) => {
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
                     <p className="text-sm text-gray-700 italic">AdvanceEdge delivers connected marketing systems that solve fragmentation, strengthen brand cohesion, and make care easier to access for every patient.</p>
                </motion.div>
                {/* Image */}
                <motion.div className="lg:w-1/2 order-1 lg:order-2" variants={fadeInUp}>
                    <img
                        src={CONTENT_IMAGE_URL}
                        alt="A team of medical professionals in a meeting"
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
                >Our Approach to Hospital Marketing
                    
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    We align marketing efforts to your service lines, helping patients find the right care, in the right place, at the right time.
                </motion.p>

                <div className="row mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Column 1: Attract */}
                    <motion.div
                        className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl hover:shadow-indigo-300 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.25 }}
                    >
                        <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-800">
                            <CircleCheckBigIcon className="text-indigo-600 mr-3 text-3xl bg-indigo-100 p-2 rounded-full" />
                            Attract
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
                            <li><span className="font-semibold"></span> We align marketing efforts to your service lines, helping patients find the right care, in the right place, at the right time.</li>
                            
                        </ul>
                    </motion.div>
                    {/* Column 2: Convert */}
                     <motion.div
                        className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl hover:shadow-indigo-300 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.25 }}
                    >
                        <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-800">
                            <CircleCheckBigIcon className="text-indigo-600 mr-3 text-3xl bg-indigo-100 p-2 rounded-full" />
                            Convert
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
                             <li><span className="font-semibold"></span> We simplify access to care through intuitive landing pages, provider finders, and clear scheduling flows that reduce drop-offs and increase booked visits.</li>
                             
                        </ul>
                    </motion.div>
                    {/* Column 3: Retain */}
                     <motion.div
                        className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl hover:shadow-indigo-300 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.25 }}
                    >
                        <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-800">
                            <CircleCheckBigIcon className="text-indigo-600 mr-3 text-3xl bg-indigo-100 p-2 rounded-full" />
                            Retain
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
                            <li><span className="font-semibold"></span> We keep patients engaged through post-care follow-ups, newsletters, reviews, and event campaigns that build loyalty and strengthen long-term relationships.</li>
                           
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

// --- Component 6: Why Choose Section (Consistent with AddictionCenters.tsx) ---
const WhyChooseSection = () => {
    const reasons = [
        "Improve visibility through coordinated hospital and service-line SEO",
        "Launch targeted ad campaigns that drive patient appointments",
        "Strengthen brand consistency across hospitals and departments",
        "Build trust through storytelling, reviews, and community programs",
        "Connect every marketing effort to real ROI through clear analytics",
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
                    AdvanceEdge partners with hospitals and health systems to deliver measurable, compliant growth across all service lines.
                </motion.p>
                <motion.h2
                    className="text-xl font-extrabold mb-6 text-gray-800 tracking-wide"
                    variants={fadeInUp}
                >
                    Our team helps you:
                </motion.h2>

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
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mt-[20px]"
                    variants={fadeInUp}
                >
                    We make enterprise healthcare marketing clear, compliant, and scalable — so you can focus on delivering exceptional care.
                </motion.p>
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


// --- Main App Component ---
const MultispecialtyHospitals = () => {
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

export default MultispecialtyHospitals;




