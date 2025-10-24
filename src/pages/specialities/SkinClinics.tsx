import React, { useState, useEffect } from 'react';
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

// --- Component 1: Header/Hero Section (Preserves original animation logic) ---
const HeaderSection = () => {
    const animatedWords = ["SEO", "PPC", "Social"];
    const [currentWord, setCurrentWord] = useState(animatedWords[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWord(prevWord => {
                const currentIndex = animatedWords.indexOf(prevWord);
                const nextIndex = (currentIndex + 1) % animatedWords.length;
                return animatedWords[nextIndex];
            });
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <header>
            <div
                className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
                style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
            >
                {/* Dark overlay consistent with AddictionCenters.tsx */}
                <div className="absolute inset-0 bg-blue-950 bg-opacity-80"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-4 lg:px-8 text-white text-center mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Dermatology Marketing That Builds Visibility and Trust
                        <span className="text-indigo-400 ml-2">{currentWord}</span>
                    </h1>
                    <p className="mt-4 text-lg font-bold  text-white-400">
                       Help patients see results—starting online.
                    </p>
                    <p className="mt-4 text-lg  text-white-400">
                       AdvanceEdge helps dermatologists and skin-care clinics attract more cosmetic and medical patients through search, social, and web campaigns that showcase expertise and results. We blend performance marketing with a patient-friendly tone to boost bookings and strengthen your reputation.
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
        <motion.div className="lg:w-1/2" variants={fadeInUp}>
            <img 
            src={CONTENT_IMAGE_URL} 
            alt="Dermatology marketing team discussion" 
            className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"/>
        </motion.div>
        <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
            <motion.h3 className="text-3xl font-extrabold text-gray-900 mb-6" variants={fadeInUp}>
                Who We Help
            </motion.h3>
            <div className="space-y-6">
              {/* Benefit 1: Medical Dermatology */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Dermatology Practices</h3>
                <p className="text-gray-700">Reach more patients for acne, eczema, psoriasis, and other conditions with clear education, strong SEO, and easy appointment flows.</p>
              </motion.div>
              {/* Benefit 2: Cosmetic & Aesthetic */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cosmetic & Aesthetic Clinics</h3>
                <p className="text-gray-700">Promote high-value procedures like Botox, fillers, and laser treatments with visual storytelling, special-offer funnels, and social proof that converts.</p>
              </motion.div>
              {/* Benefit 3: Mohs & Skin Cancer */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mohs & Skin-Cancer Centers</h3>
                <p className="text-gray-700">Highlight your expertise and outcomes with trust-driven content and local search visibility that guide patients to the right care.</p>
              </motion.div>
              {/* Benefit 4: Teledermatology */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Teledermatology Providers</h3>
                <p className="text-gray-700">Show patients how simple virtual skin-care can be with optimized scheduling and digital campaigns built for accessibility.</p>
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
            desc: "We identify where your patients search and design a growth plan to match.",
            icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "02.",
            title: "Build & Launch",
            desc: "We create fast, mobile-friendly websites and campaigns with clean visuals, strong calls to action, and booking built in.",
            icon: <FileText className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "03.",
            title: "Learn & Optimize",
            desc: "We track what drives clicks, calls, and consultations, then refine creative and targeting to scale what works.",
            icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
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
    const challenges = [
        "Improve local rankings and visibility for high-intent treatments",
        "Fill cosmetic consult calendars without overspending on ads",
        "Simplify online booking and patient communication",
        "Strengthen brand trust through reviews and consistent visuals",
        "Maintain HIPAA-safe workflows and content approvals",
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
                        How We Help Clinics Grow
                    </h3>
                    
                    <ul className="mt-8 space-y-4 list-disc pl-6 text-sm">
                        {challenges.map((challenge, index) => {
                             const parts = challenge.split(':');
                             const boldPart = parts[0];
                             const restPart = parts.length > 1 ? parts.slice(1).join(':') : '';
                            return (
                                <li key={index}>
                                    <strong>{boldPart}</strong>:{restPart}
                                </li>
                            );
                        })}
                    </ul>
                     <p className="text-xl text-black italic">
                        AdvanceEdge turns your online presence into a steady flow of real, ready-to-book patients.
                    </p>
                </motion.div>
                {/* Image */}
                <motion.div className="lg:w-1/2 order-1 lg:order-2" variants={fadeInUp}>
                    <img
                        src={CONTENT_IMAGE_URL}
                        alt="Dermatology marketing team working"
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
        >
            Our Dermatology Marketing Approach
        </motion.h2>
        <motion.p
            className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
            variants={fadeInUp}
        >
            AdvanceEdge unites data, creative and compliance to scale patient acquisition for dermatology marketing or skin clinic marketing in the USA.
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
                    <li><strong>Dermatology SEO:</strong> Keyword research, Local SEO, Google My Business, blogging, backlinks; own local SERP.</li>
                    <li><strong>Paid Search:</strong> Google Ads with tight PPC controls; compliant dermatology advertising on Facebook Ads or Meta Ads, video ads on YouTube/Shorts.</li>
                    <li><strong>Social Media:</strong> Instagram Marketing, TikTok Marketing, Youtube; Creators/Influencers, Hashtags, User Generated Content; Strong Storytelling & Visual Content.</li>
                    <li><strong>Outcomes:</strong> Qualified organic traffic and paid traffic to priority service lines.</li>
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
                    <li><strong>Website Design:</strong> Fast, ADA-conscious mobile optimization and UX.</li>
                    <li><strong>Landing Pages:</strong> Focused layouts with clear call to action, FAQ section and Financing Details.</li>
                    <li><strong>Proof & Access:</strong> Pricing clarity, offers/promotions, chatbots, call tracking.</li>
                    <li><strong>Outcome:</strong> Higher conversion rate from every channel.</li>
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
                    <li><strong>Lifecycle Programs:</strong> Email marketing, SMS marketing, newsletters, and CRM automation.</li>
                    <li><strong>Advocacy:</strong> Reviews, referrals, and ongoing patient education content.</li>
                    <li><strong>Measurement:</strong> Continuous analytics and optimization proving ROI across locations.</li>
                    <li><strong>Outcome:</strong> Stronger loyalty and repeat visits, with clear revenue impact.</li>
                </ul>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// --- Component 6: Why Choose Section (Consistent with AddictionCenters.tsx) ---
const WhyChooseSection = () => {
    const features = [
        "Dermatology SEO for acne, Mohs, cosmetics.",
        "Brand consistency with branding and logo design standards.",
        "Google Ads for Botox, lasers and other skin treatments.",
        "Local SEO: GBP, reviews, map-pack wins.",
        "Instagram/TikTok education: procedures and aftercare.",
        "Conversion landing pages with call tracking.",
        "Facebook and Instagram Insights for Strategy Updations.",
        "HIPAA/BAA workflows for galleries, testimonials."
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
                   Why Clinics Choose AdvanceEdge
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    We understand how patients choose a dermatologist—by proof, presence, and professionalism.Our team builds campaigns that highlight real results, clear expertise, and the experience of care your practice delivers.

                </motion.p>

                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    With AdvanceEdge, you get marketing that feels human, looks polished, and performs consistently.

                </motion.p>

                <div className="row mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {features.map((item, idx) => (
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
            <motion.div
                className="max-w-6xl mx-auto px-4 mt-8 flex justify-center lg:justify-start mt-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
            >
 <BookCallButton />
            </motion.div>
        </motion.section>
    );
};



// --- Main App Component --- //
export default function SkinClinics() {
  return (
    <div className="font-sans bg-[#f8f9fc] text-[#111]">
      <HeaderSection />
      <WhoBenefitsSection />
      <ProcessSection />
      <ChallengesSection />
      <ApproachSection />
      <WhyChooseSection />
     
    </div>
  )
}




