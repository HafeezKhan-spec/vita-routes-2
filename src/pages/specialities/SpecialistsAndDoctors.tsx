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
                        Marketing for Specialists & Doctors Converting High Intent Searches to Appointments
                    </h1>
                    <p className="mt-4 text-2xl font-bold text-white-400">
                        Transparent Reporting. Bookings Nationwide.
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
                        alt="Physician Marketing Benefits"
                        className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                    />
                </motion.div>

                {/* Text/Benefits Content */}
                <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
                    <motion.h3 className="text-3xl font-extrabold text-gray-900 mb-6" variants={fadeInUp}>
                        Who Benefits from Physician Marketing in the USA?
                    </motion.h3>
                    <div className="space-y-6">
                        {/* Benefit 1: Multi-Specialty Groups and Private Practices */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Multi-Specialty Groups and Private Practices</h3>
                            <p className="mt-2 text-gray-600">Our physician marketing agency provides medical practice marketing services that drive patient acquisition for doctors and increase patient appointments. We run lead generation for doctors as a doctor marketing agency with clear reporting.</p>
                        </motion.div>
                         {/* Benefit 2: Surgical Specialists */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Surgical Specialists</h3>
                            <p className="mt-2 text-gray-600">Orthopedics, ENT, urology, general surgery, spine, neurosurgery. Specialist marketing services pair targeted PPC, SEO, reviews, and multi location physician marketing to secure scheduled consults.</p>
                        </motion.div>
                         {/* Benefit 3: Medical Subspecialties */}
                         <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Medical Subspecialties</h3>
                            <p className="mt-2 text-gray-600">Cardiology, pulmonology, nephrology, endocrinology, rheumatology, oncology, pain, rehab. Healthcare marketing for doctors in the USA aligns content, offers, and forms to real appointments.</p>
                        </motion.div>
                        {/* Benefit 4: Telehealth and Virtual Care */}
                        <motion.div variants={fadeInUp}>
                           <h3 className="text-xl font-semibold text-gray-800">Telehealth and Virtual Care</h3>
                            <p className="mt-2 text-gray-600">Telehealth marketing for doctors powers statewide growth with compliant ads, online scheduling, secure follow ups, and referral paths that book more patients across all 50 states.</p>
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
            description: "Audit Google Business Profile for doctors, healthcare listings and citations, and consent management. HIPAA compliant marketing. BAA for marketing vendors. Set CPL and CPA for healthcare, plan SEO for doctors, PPC for doctors, social media marketing for physicians.",
            icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            description: "Ship service line landing pages, physician bio pages, doctor website design, medical practice website design. Configure GA4 for medical practices, call tracking for doctors. Improve Core Web Vitals healthcare site and ADA website accessibility for doctors.",
            icon: <FileText className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            description: "Run physician SEO services, Google Ads for physicians, Facebook Ads for doctors, Instagram marketing for doctors, remarketing for medical practices. Track patient acquisition for doctors.",
            icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            description: "Expand multi location physician marketing and private practice marketing. Strengthen doctor review management, physician reputation management, and Google reviews for doctors. Marketing dashboards increase patient appointments while keeping no PHI in ads.",
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
                        Our Physician's Marketing Process
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
      "Compliance – HIPAA compliant marketing, consent management, no PHI in ads.",
      "CPC waste – Broad PPC, weak negatives, thin qualification gates, light remarketing.",
      "Local visibility – Weak local SEO for medical practice, incomplete listings and citations, underused Google Business Profile.",
      "CRO – Slow Core Web Vitals, unclear service line landing pages, weak blog strategy.",
      "Tracking – No GA4 for medical practices, call tracking, CRM integration, or useful dashboards.",
      "Reputation – Few patient reviews, uneven physician reputation management, unoptimized Healthgrades and Zocdoc profiles.",
      "Scale – Uneven multi location physician marketing and fragmented reporting.",
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
                        Marketing Challenges We Solve for Specialists and Doctors
                    </h3>
                    <p className="text-lg text-gray-600">US-Focused Physician Marketing Agency to Accelerate Patient Acquisition.</p>
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
            {/* CTA Button - Replaces the original FloatingCta and ContactCTA */}
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
                    Our Marketing Approach for Specialists and Doctors
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge delivers healthcare marketing for doctors in the USA that turns search into booked visits.
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
                            <li><span className="font-semibold">SEO for doctors:</span> Physician SEO services, local SEO for medical practice, Google Business Profile for doctors.</li>
                            <li><span className="font-semibold">PPC and Social:</span> PPC for doctors, Google Ads for physicians, Facebook Ads for doctors, Instagram marketing for doctors, and remarketing for medical practices.</li>
                            <li><span className="font-semibold">Outcome:</span> Patient acquisition for doctors rises as you book more patients.</li>
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
                            <li><span className="font-semibold">Website and CRO:</span> Doctor website design, medical practice website design, ADA website accessibility for doctors, ADA compliant medical website, and HIPAA compliant website forms.</li>
                             <li><span className="font-semibold">Measurement:</span> GA4 for medical practices, call tracking for doctors, CRM integration for physicians, and marketing dashboards for clinics.</li>
                             <li><span className="font-semibold">Outcome:</span> Clean funnels that lift lead generation for doctors and reduce cost per appointment.</li>
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
                           <li><span className="font-semibold">Programs and Reputation:</span> Patient retention marketing, email marketing for physicians, SMS marketing for clinics, physician reputation management, and multi location reporting.</li>
                           <li><span className="font-semibold">Outcome:</span> Private practice marketing and multi location physician marketing scale with attribution and community outreach.</li>
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
      "Policy-safe PPC and ads for physicians nationwide.",
      "HIPAA compliant marketing workflows, consent management standards.",
      "Program-level SEO: conditions, procedures, locations FAQs.",
      "Clinically reviewed messaging, stigma-aware language, escalation protocols.",
      "Online scheduling and intake conversion optimization paths.",
      "Review governance, referrals, reputation and physician liaison.",
      "Call tracking, CRM, booked-appointment attribution dashboards reporting.",
      "Local SEO, GBP, citations, geo-targeting for catchment growth.",
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
              Why Specialists and Doctors Choose AdvanceEdge for Marketing?
          </motion.h2>
          <motion.p
              className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
              variants={fadeInUp}
          >
            AdvanceEdge is a physician marketing agency delivering healthcare marketing for doctors in the USA with compliant growth, booked patients reliably.
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
const SpecialistsAndDoctors = () => {
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

export default SpecialistsAndDoctors;
