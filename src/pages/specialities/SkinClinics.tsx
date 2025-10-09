import React, { useState, useEffect } from 'react';
// Local CTA button restored
const BookACallButton = () => (
    <Link to="/contact" className="bg-black text-white px-8 py-3 border-2 border-orange-500 rounded-none transition-all duration-300 ease-out hover:bg-white hover:text-black hover:shadow-[0_0_25px_5px_rgba(249,115,22,0.35)] hover:scale-105 flex items-center justify-center gap-2">
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
                        Result-Driven Dermatology Marketing for U.S Skin Clinics & Dermatologists
                        <span className="text-indigo-400 ml-2">{currentWord}</span>
                    </h1>
                    <p className="mt-4 text-2xl font-bold text-white-400">
                       Searches to Booked Appointments
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
        <motion.div className="lg:w-1/2" variants={fadeInUp}>
            <img 
            src={CONTENT_IMAGE_URL} 
            alt="Dermatology marketing team discussion" 
            className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"/>
        </motion.div>
        <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
            <motion.h3 className="text-3xl font-extrabold text-gray-900 mb-6" variants={fadeInUp}>
                Who Benefits from Dermatology Marketing in the USA?
            </motion.h3>
            <div className="space-y-6">
              {/* Benefit 1: Medical Dermatology */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Dermatology</h3>
                <p className="text-gray-600">Acne treatment, eczema/dermatitis, psoriasis, rosacea, rashes/allergies, fungal infections, warts, pediatric dermatology, trichology/hair-loss, nail disorders, phototherapy, biologics.</p>
              </motion.div>
              {/* Benefit 2: Cosmetic & Aesthetic */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cosmetic & Aesthetic</h3>
                <p className="text-gray-600">Botox, fillers, chemical peels, microneedling/RF, PRP/PRF, laser resurfacing/laser treatments, IPL, hair removal, skin tightening, pigmentation/melasma, acne scar revision, anti-aging skin care.</p>
              </motion.div>
              {/* Benefit 3: Mohs & Skin Cancer */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mohs & Skin Cancer</h3>
                <p className="text-gray-600">Full-body skin exams, dermoscopy, biopsies, Mohs micrographic surgery, excisions, reconstruction, melanoma management, actinic keratoses, post-operative care.</p>
              </motion.div>
              {/* Benefit 4: Teledermatology */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Teledermatology</h3>
                <p className="text-gray-600">Virtual consults, asynchronous photo visits, second opinions, follow-ups, prescription refills, pre/post-procedure guidance, urgent triage workflows.</p>
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
            desc: "Market research, competitor analysis, and keyword research for dermatology marketing/skin clinic marketing. Define audiences (demographics, geographic targeting), KPIs, budgeting, and compliance. Roadmap covers dermatology SEO, dermatology advertising (PPC), and dermatology social media marketing.",
            icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            desc: "Pages and landing pages (UX, mobile optimization, clear call to action); tracking (Google Analytics, UTMs, call tracking); CRM hooks. Local SEO setup: Google My Business + local listings. Ad accounts/creatives for Google Ads, Facebook Ads, Instagram/TikTok/YouTube. Accessibility, policy, and data checks.",
            icon: <FileText className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            desc: "Activate SEO tasks (blogging, schema, backlinks), paid search/paid ads (Search, PMAX, video), and social campaigns. Verify events, pacing, and funnel integrity. Monitor traffic, engagement, and early conversion rate signals; tighten negatives and audiences.",
            icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            desc: "Shift budget to winners; expand locations/service lines (acne, Botox, laser treatments, skin cancer). Improve copy, creative, and automation. Iterate offers/promotions. Strengthen organic search and reputation (reviews). Roll up, compliant growth across the USA, appointment revenue reporting to prove ROI and guide strategy.",
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
                        Our Dermatologist Marketing Process
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
    const challenges = [
        "Community Gaps: Limited patient engagement, weak community building, no creator or influencers strategy.",
        "Low SERP Visibility: Not ranking in the top 10 SERP Results.",
        "Local Visibility Gaps: Weak Local SEO, Incomplete Google My Business (GMB) Profile, Inconsistent Local Listings.",
        "Leaky Conversion Paths: Slow Mobile Website Design, Unclear Call-to-Action, Complex Appointment Booking, Poor User Experience.",
        "Paid Waste Spend: Broad PPC in Google Ads/Facebook Ads without Targeting Research, Negatives, or Geographic Targeting.",
        "Reputation Volatility: Few Online Reviews, Slow Responses, No Reputation Management Playbook.",
        "Content Gaps: Least or No Patient Education, Thin Blogging, No Video Marketing, Weak Brand Awareness.",
        "Measurement Issues: Traffic But No Clarity, Missing Analytics, Call Tracking, Conversion Mapping to Booked Visits.",
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
                        Dermatology Growth Challenges We Solve
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">US-Focused Skin Clinic Marketing to Accelerate Patient Acquisition.</p>
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
                     <p className="text-sm text-gray-500 italic">
                        Our healthcare marketing experts build scalable, multi-location programs, focused on patient acquisition and Local SEO, for clinics across California, Texas, New York, Florida, Illinois, New Jersey, and every other U.S. state.
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
                <BookACallButton />
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
                    Why Choose AdvanceEdge for Dermatology Marketing?
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    Providing scalable dermatology marketing solutions for U.S. skin clinics, partner with us for measurable digital growth.
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
