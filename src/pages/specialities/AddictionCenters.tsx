import React, { useState } from "react";
import { motion } from "framer-motion";
// Removed: import { Typewriter } from "react-simple-typewriter";
import { Plus, CheckCircle, ClipboardCheck, FileText, MessageSquare, BarChart3, CircleCheckBigIcon,} from "lucide-react";

// --- FIXED: Replaced local image imports with working placeholder URLs ---
// Placeholder for the background image (dark abstract background)
import BACKGROUND_IMAGE_URL from '../../assets/Background.jpg'
// Placeholder for the content image (light subject)
import CONTENT_IMAGE_URL from '../../assets/Image_10.webp'


// --- Animation Variants (Kept untouched) ---
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
            // Using the hardcoded placeholder URL
            style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-blue-950 bg-opacity-80"></div>

            {/* Content: text-white, text-center, and mx-auto added/retained as requested */}
            <div className="relative z-10 max-w-4xl px-4 lg:px-8 text-white text-center mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold leading-sung">
                    Rehab Marketing That Converts <br />
                    <span className="block">Calls into Qualified Admissions</span>
                </h1>
                {/* Subheading: Retaining font-semibold (bold) and white color (inherited from parent) */}
                <p className="mt-4 text-2xl font-bold text-white-400">
                    PPC/Ads, Social, Web/CRO, SEO
                </p>
                {/* Retaining white color and bold for the body text for maximum visibility */}
                <p className="mt-4 text-base font-bold text-gray-200">
                    HIPAA and 42 CFR Part 2 Safeguards; Policy-Safe Ads And Workflows.
                </p>
            </div>
        </div>
    </header>
);

// --- Component 2: Who Benefits Section (Section 1) ---
const WhoBenefitsSection = () => {
    const benefitItems = [
        {
            title: "Residential Rehab and Detox Centers",
            content: "Medical Detox, Inpatient Rehab, Dual Diagnosis Stabilization. Our substance abuse marketing builds LegitScript-vetted funnels, insurance verification, withdrawal triage, compliant admission routing, that convert screened assessments into admissions.",
        },
        {
            title: "IOP/PHP & Outpatient Clinics",
            content: "CBT, DBT, Medication Management, MAT Support, Telehealth. Behavioral health SEO, rehab marketing, referral paths, and online scheduling convert searches into IOP/PHP assessments and outpatient care.",
        },
        {
            title: "Medical Practices & Teletherapy",
            content: "Psychiatry and Therapy Practices with Virtual Consultations and Crisis Resources. Mental health marketing delivers ads and landing pages that turn high-intent searches into scheduled sessions.",
        },
        {
            title: "MAT, Aftercare and Alumni Programs",
            content: "MAT Clinics And Recovery Programs: Buprenorphine/Naltrexone, Relapse Prevention, Family Therapy, Alumni Support. Addiction treatment marketing adds email/SMS nurture and reviews to improve completion, retention, referrals.",
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
                {/* Image: Using the new CONTENT_IMAGE_URL constant */}
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
                        Who Benefits from Behavioral Health Marketing in the USA?
                    </motion.h3>

                    {benefitItems.map((item, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <h6 className="font-bold mt-4">{item.title}</h6>
                            <p dangerouslySetInnerHTML={{ __html: item.content.replace('substance abuse marketing', '<strong>substance abuse marketing</strong>') }} />
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

// --- Component 3: Our Rehab Marketing Process (Section 2) ---
const ProcessSection = () => {
    const processSteps = [
        {
            step: "01.",
            title: "Discover & Plan",
            desc: "Audit GBP/Maps, listings, UX, consent; review policies, 42 CFR Part 2, LegitScript. Map keywords by rehab program and geography. Set KPIs, budgets, geo targets, governance, and clinical approvals.",
            icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            desc: "Publish program pages, clinician bios, insurance/financing, admission FAQs. Implement GA4, UTMs, call tracking, CRM, consent forms. Improve accessibility and speed; fix schema and local SEO.",
            icon: <FileText className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            desc: "Activate SEO, backlinks, and compliant search ads. Test forms, screeners, CTAs. Monitor leads, CPA, and admission rate—proving traction for addiction treatment marketing.",
            icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            desc: "Shift budget to winners; expand programs. Deepen automation from screening→admission. Strengthen review velocity and reporting dashboards for quarterly decisions.",
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
                        Our Rehab Marketing Process
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
        "Platform policies and LegitScript block addiction ads without compliant creatives and screening.",
        "HIPAA and 42 CFR Part 2 require strict consent and data minimization.",
        "High-CPC rehab terms underperform without CRO and qualification gates.",
        "Crisis language risks disapprovals; stigma-safe wording and disclaimers required.",
        "Thin clinical content lowers conversions.",
        "Local SEO gaps from weak GBP and inconsistent listings.",
        "Tracking blindspots without call tracking or attribution.",
        "Reputation volatility from lack of reviews and poor responses.",
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
                {/* Image: Using the new CONTENT_IMAGE_URL constant */}
                <motion.div className="lg:w-1/2" variants={fadeInUp}>
                    <img
                        src={CONTENT_IMAGE_URL}
                        alt="Meeting"
                        className="rounded-lg shadow w-full"
                    />
                </motion.div>

                <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
                    <h3 className="text-2xl font-semibold">
                        Rehab Marketing Challenges We Solve
                    </h3>
                    <h3 className="text-xl font-medium">
                        US-Focused Addiction Treatment Marketing Agency to Accelerate Patient
                        Acquisition.
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
                    Rehab centers across California, Florida, Texas, New York, Arizona, and more
                    benefit from our scalable programs built for screened assessments, admissions,
                    and local SEO.
                </p>
                <motion.div
                    className="mt-4 flex justify-center lg:justify-start"
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
                "Behavioral Health SEO: Program/condition hubs, clinician bios, schema, FAQs, catchment pages, backlinks.",
                "Compliant PPC & Ads: High-intent search, vetted copy, LegitScript, limited retargeting.",
                "Content & Community: Stigma-safe guides, videos, webinars, outreach.",
                "Outcome: More qualified inquiries.",
            ],
        },
        {
            title: "Convert",
            items: [
                "Website & CRO: Mobile UX, insurance checks, forms, crisis resources, telehealth.",
                "Proof & Access: Credentials, evidence-based treatment, testimonials, CTAs.",
                "Measurement: GA4, UTMs, CRM routing.",
                "Outcome: Higher admissions at target CPA.",
            ],
        },
        {
            title: "Retain",
            items: [
                "Automation: Email/SMS, intake, aftercare, relapse-prevention.",
                "Reputation: Reviews, referrals, engagement.",
                "Analytics: Cohort dashboards, budget optimization.",
                "Outcome: Better completion rates & referrals.",
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
                    Our Behavioral Health Marketing Approach
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge delivers mental health marketing programs that turn screened
                    assessments into admissions. We combine rehab marketing, behavioral
                    health SEO and substance abuse marketing with HIPAA/42 CFR Part 2
                    compliance.
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

// --- Component 6: Why Choose Section (Section 5) ---
const WhyChooseSection = () => {
    const whyChooseItems = [
        "LegitScript setup & safe ads",
        "Program-level SEO (detox, IOP, MAT, telehealth)",
        "Insurance verification & CRO",
        "Call tracking & CRM dashboards",
        "HIPAA & 42 CFR Part 2 compliance",
        "Stigma-safe messaging w/ crisis protocols",
        "Review governance & alumni care",
        "Local SEO & referral networks",
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
                    Why Choose AdvanceEdge?
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge is rated among the top behavioral health marketing agencies in the USA,
                    driving compliant growth for mental health and addiction centers.
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

// --- Component 7: Footer Section ---
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
const AddictionCenters = () => {
    // Retaining useState even though it's unused in this refactor, 
    // in case it was a placeholder for future logic.
    const [state, setState] = useState(null); 
    
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

export default AddictionCenters;
