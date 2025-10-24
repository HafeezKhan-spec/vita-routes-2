import React, { useState } from "react";
import BookCallButton from '../../components/BookCallButton';
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

// Use shared BookCallButton component wired to global ContactModal

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
                    Connecting Patients to Care Through Compliant Marketing
                </h1>
                
                <p className="mt-4 text-base font-bold text-white">
                    We partner with addiction treatment and behavioral health organizations to reach those seeking help — safely and responsibly. Our data-driven strategies blend privacy-focused advertising, optimized websites, and follow-up systems that turn intent into admissions while honoring every safeguard. 
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
            title: "Residential Rehab & Detox Centers",
            content: "Medical detox, inpatient rehab, and dual diagnosis stabilization programs rely on our LegitScript-approved funnels, insurance verification tools, and compliant routing workflows that convert screened assessments into admissions.",
        },
        {
            title: "IOP/PHP & Outpatient Clinics",
            content: "Programs offering CBT, DBT, medication management, or MAT support use our behavioral health SEO and paid media to drive high-intent searches toward qualified IOP/PHP assessments and scheduled sessions.",
        },
        {
            title: "Teletherapy & Psychiatry Practices",
            content: "For virtual consultations and hybrid care models, we create mental health campaigns that drive inquiries through compliant ads and optimized landing pages designed for conversion.",
        },
        {
            title: "MAT, Aftercare & Alumni Programs",
            content: "Our addiction treatment marketing adds automated email and SMS nurture to keep patients engaged, improve completion rates, and encourage alumni referrals and reviews.",
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
                        Who We Help
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

// --- Component 3: Our Rehab Marketing Process (Section 2) ---
const ProcessSection = () => {
    const processSteps = [
        {
            step: "01.",
            title: "Discover & Plan",
            desc: "We audit your digital presence, policies, and consent flows. Then we map keywords, budgets, and governance to each program and geography for a clear launch plan.",
            icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            desc: "We develop program pages, clinician bios, insurance and financing content, and compliant forms. GA4, UTMs, and call tracking connect every inquiry to its source.",
            icon: <FileText className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            desc: "We activate SEO, content, and compliant PPC campaigns. Every form, CTA, and funnel is tested to track real admissions and prove ROI.",
            icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            desc: "We double down on top-performing channels, automate screening-to-admission follow-ups, and strengthen review velocity and reporting dashboards to drive steady growth.",
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
                        Our Process:<p className="text-2xl text-blue-400 mt-3">
                        Discover → Build → Launch → Optimize
                    </p>
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
        "LegitScript and platform policy barriers blocking addiction treatment ads",
        "Strict HIPAA and 42 CFR Part 2 compliance requirements for consent and data handling",
        "High-CPC rehab terms that underperform without conversion optimization",
        "Disapproved copy due to crisis or stigma language",
        "Weak local SEO and inconsistent Google Business Profiles",
        "Gaps in attribution, call tracking, and CRM integration",
        "Poor review management and inconsistent brand reputation",
        
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
                    <h3 className="text-3xl font-semibold">
                        Challenges We Solve
                    </h3>
                    
                    <ul className="list-disc pl-6 space-y-2 text-xl">
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
                   Our programs help rehab and behavioral health providers convert more qualified admissions through compliant, transparent, and scalable marketing systems.
                </p>
                <motion.div
                    className="mt-4 flex justify-center lg:justify-start"
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
                "We help your programs show up where people are searching for help. Through ethical advertising, strong SEO, and meaningful storytelling, we connect your brand with patients ready to take the next step.",
                
            ],
        },
        {
            title: "Convert",
            items: [
                "We make it easy for people to choose your center with websites and messaging built on clarity, compassion, and trust. Every click, call, or form leads to a smoother path to admission.",
                
            ],
        },
        {
            title: "Retain",
            items: [
                "We help you stay connected with patients after care begins. Automated follow-ups, thoughtful communication, and reputation programs strengthen relationships and inspire referrals.",
                
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
                  Our Approach to Behavioral Health Marketing  
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge helps treatment centers and behavioral health providers grow responsibly, attracting the right patients, turning inquiries into admissions, and building lasting trust.
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
        "Launch safe, LegitScript-approved ad campaigns that drive real inquiries",
        "Strengthen visibility through program-level SEO and local search optimization",
        "Build trust with stigma-safe messaging and crisis-aware communication",
        "Track every lead with clear dashboards, from first click to confirmed admission",
        "Support retention through alumni engagement and review programs",
        
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
                   AdvanceEdge partners with behavioral health and addiction treatment providers to grow responsibly and with integrity. We understand the unique challenges of this space — from strict ad policies to patient privacy requirements — and we’ve built proven strategies to help you navigate them with confidence.
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


                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mt-[40px]"
                    variants={fadeInUp}
                >
                        We combine compliance, creativity, and compassion to help you reach more people who need care — safely and effectively.
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
                
            </div>
        </div>
    );
};

export default AddictionCenters;




