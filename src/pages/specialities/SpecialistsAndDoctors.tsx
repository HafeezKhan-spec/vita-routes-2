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
                        Specialist & Doctor Marketing That Drives New Appointments
                    </h1>
                    <p className="mt-4 text-xl font-bold text-white-400">
                        AdvanceEdge helps physicians, specialists, and private practices attract more patients, build trust, and grow responsibly. From eye care and orthopedics to chiropractic and multi-specialty groups, our strategies turn online interest into real appointments—always with full privacy and compliance. 
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
                        alt="Physician Marketing Benefits"
                        className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                    />
                </motion.div>

                {/* Text/Benefits Content */}
                <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
                    <motion.h3 className="text-3xl font-extrabold text-gray-900 mb-6" variants={fadeInUp}>
                        Who We Help
                    </motion.h3>
                    <div className="space-y-6">
                        {/* Benefit 1: Multi-Specialty Groups and Private Practices */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Medical & Surgical Specialists</h3>
                            <p className="mt-2 text-gray-700">Orthopedics, cardiology, urology, ENT, spine, pain management, and other specialties — we build condition-focused content, ads, and landing pages that convert high-intent searches into consultations.</p>
                        </motion.div>
                         {/* Benefit 2: Surgical Specialists */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Ophthalmology & Eye Care Clinics</h3>
                            <p className="mt-2 text-gray-700">From LASIK and cataract surgery to glaucoma and retina care, we design educational pages, video campaigns, and local search strategies that highlight expertise and drive scheduled consults.</p>
                        </motion.div>
                         {/* Benefit 3: Medical Subspecialties */}
                         <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Chiropractors & Rehabilitation Clinics</h3>
                            <p className="mt-2 text-gray-700">We help solo and group chiropractors expand patient volume through local SEO, paid ads, and optimized websites that make scheduling easy and measurable.</p>
                        </motion.div>
                        {/* Benefit 4: Telehealth and Virtual Care */}
                        <motion.div variants={fadeInUp}>
                           <h3 className="text-xl font-semibold text-gray-800">Multi-Specialty & Private Practice Groups</h3>
                            <p className="mt-2 text-gray-700">We unify marketing across locations and service lines with consistent branding, compliant workflows, and clear dashboards showing what’s driving patient growth.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                           <h3 className="text-xl font-semibold text-gray-800">Telehealth & Virtual Care Providers</h3>
                            <p className="mt-2 text-gray-700">For specialists offering online consults or statewide programs, we run geo-targeted ads, build booking-friendly websites, and ensure every interaction remains secure and compliant.</p>
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
            description: "We audit your website, local listings, and market visibility, then develop a focused strategy aligned with your specialty, location, and goals.",
            icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            description: "Our team designs fast, patient-friendly pages with clear calls to action, strong visuals, and easy scheduling—optimized for both SEO and user experience.",
            icon: <FileText className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            description: "We activate campaigns across Google, Meta, and other channels, tracking every call, click, and consult to measure what’s performing best.",
            icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            description: "We refine top-performing campaigns, strengthen reputation, and expand into new services or markets with clear ROI reporting.",
            icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
        }
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
    const challengesList = [
      "Low visibility in local or specialty search results",
      "High ad costs with unclear ROI",
      "Complex or confusing online booking flows",
      "Outdated physician directories or reviews",
      "Few patient testimonials or limited reputation strategy",
      "Weak content and education materials for patients",
      "Fragmented reporting across multiple locations",
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
                        {challengesList.map((challenge, index) => {
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
                </motion.div>

               
                {/* Image */}
                <motion.div className="lg:w-1/2 order-1 lg:order-2" variants={fadeInUp}>
                    <img
                        src={CONTENT_IMAGE_URL}
                        alt="Marketing Challenges"
                        className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                    />
                </motion.div>
            </div>
            <p className="text-lg text-black mt-8">
                AdvanceEdge builds connected systems that eliminate friction, grow visibility, and fill appointment calendars—ethically and efficiently.
            </p>
            {/* CTA Button - Replaces the original FloatingCta and ContactCTA */}
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
                    Our Approach to Specialists & Doctors Marketing
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    We focus on three outcomes:{" "}
                <span className="text-black font-semibold">Attract. Convert. Retain.</span>
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
                        <ul className="list-disc list-inside space-y-2 text-black text-sm leading-relaxed">
                            <li><span className="font-semibold"></span> We use search, social, and video campaigns to reach patients actively looking for care. From SEO and local listings to compliant PPC and influencer collaborations, our programs position your practice where patients are searching.</li>
                            
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
                        <ul className="list-disc list-inside space-y-2 text-black text-sm leading-relaxed">
                            <li><span className="font-semibold"></span> We make it simple for patients to take action through mobile-friendly websites, clear calls to action, and strong messaging that builds trust—whether it’s for LASIK, spinal care, or a telehealth consult.</li>
                             
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
                        <ul className="list-disc list-inside space-y-2 text-black text-sm leading-relaxed">
                           <li><span className="font-semibold"></span> We strengthen loyalty through post-visit follow-ups, automated recalls, newsletters, and review programs that keep your practice top of mind and trusted within your community.</li>
                          
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
      "Improve local and specialty visibility through targeted SEO",
      "Launch policy-safe ad campaigns that attract qualified patients",
      "Build patient trust with education-driven content and reviews",
      "Simplify online scheduling and reduce drop-offs",
      "Maintain HIPAA-safe, compliant marketing across every channel",
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
            AdvanceEdge partners with specialists and doctors across multiple fields to deliver measurable, compliant, and long-term growth.
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
            With AdvanceEdge, you get marketing that’s intelligent, ethical, and effective — designed to help your practice grow with confidence.
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
const SpecialistsAndDoctors = () => {
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

export default SpecialistsAndDoctors;




