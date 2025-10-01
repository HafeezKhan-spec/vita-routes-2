import React from 'react';
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
const BookACallButton = ({ className = "" }) => (
    <Link to="/contact" className={`bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-md 
                        hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 
                        flex items-center justify-center gap-2 ${className}`}>
      <Plus className="w-4 h-4" />
      BOOK A CALL
    </Link>
);

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
                        From First Click to Comprehensive Care
                    </h1>
                    <p className="mt-4 text-2xl font-bold text-white-400">
                        Proven Playbooks for Service Line Marketing
                    </p>
                    <p className="mt-2 text-md text-gray-300 font-medium">
                        By U.S. Hospital Marketing Agency
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
                        alt="A team of medical professionals in a meeting"
                        className="rounded-xl shadow-2xl w-full object-cover transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                    />
                </motion.div>

                {/* Text/Benefits Content */}
                <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
                    <motion.h3 className="text-3xl font-extrabold text-gray-900 mb-6" variants={fadeInUp}>
                        Who Benefits from Hospital Digital Marketing in the USA?
                    </motion.h3>
                    <div className="space-y-6">
                        {/* Benefit 1: Community & Regional Hospitals */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Community & Regional Hospitals</h3>
                            <p className="mt-2 text-gray-600">Primary Care, ED/Urgent Care, Surgery, Imaging, Rehab, Cardiology, Orthopedics, Maternity, Pediatrics, Behavioral Health - Accurate GBP/Maps, Access Lines, Payer Details, Same-Day Scheduling, Mobile Appointment Flows.</p>
                        </motion.div>
                         {/* Benefit 2: Academic Centers & Centers of Excellence */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Academic Centers & Centers of Excellence</h3>
                            <p className="mt-2 text-gray-600">Oncology, Cardiovascular, Neuroscience, Transplant, Trauma, Women’s Health – Research Highlights, Physician Profiles, Referral Pathways, Compliant Hospital Advertising, Local-to-National Targeting, Brand Governance, Executive Reporting.</p>
                        </motion.div>
                         {/* Benefit 3: Ambulatory & Outpatient Networks */}
                         <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Ambulatory & Outpatient Networks</h3>
                            <p className="mt-2 text-gray-600">ASCs, Imaging, Therapy, Urgent Care, Telehealth – Location Pages, Schedule Links, Insurance Transparency, Geo-Targeted SEM/Retargeting, Chatbots, Call Tracking to Lift Conversion Rate and Booked Appointments.</p>
                        </motion.div>
                        {/* Benefit 4: Women's & Children's Service Providers */}
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-xl font-semibold text-gray-800">Women's & Children's Service Providers</h3>
                            <p className="mt-2 text-gray-600">OB/GYN (Obstetrician or Gynaecologist), High-Risk, Pediatrics – NICU, Education Content, FAQs, Social Video, Strong CTAs, Conversion-Ready Landing Pages, Review Playbooks, Streamlined Appointment Paths to Scale Patient Acquisition.</p>
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
            description: "Audit multi-specialty presence: campus/department GBP/Maps architecture, local listings, physician directories, site UX/UI. Run market research, competitive analysis, content audit, Map service-line keywords and service areas, set demographics, geo-targeting, KPIs, budget, governance, aligning hospital digital marketing.",
            icon: <ClipboardCheck className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "02.",
            title: "Build & QA",
            description: "Design IA for departments, locations, physicians; responsive pages and conversion landing pages per service line. Implement GA4, call tracking, analytics, CRM, email/SMS automation, chatbots. Configure Google/Bing Ads and campus/department GBPs; ADA and scheduling integrations.",
            icon: <FileText className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "03.",
            title: "Launch & Learn",
            description: "Activate SEO sprints by department; technical fixes, on-page, internal linking, link building. Launch SEM/hospital advertising and social across Google, Bing, Facebook, Instagram, LinkedIn, YouTube. Tune bids, geo-targets; test messaging. Track conversion rate by service line.",
            icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
        },
        {
            step: "04.",
            title: "Optimize & Scale",
            description: "Shift budget to winning channels; expand service line marketing and markets. Grow reviews and reputation. Iterate video storytelling. Deepen automation for lead nurturing. Dashboards tie spend to ROI by hospital, campus, department; scalable healthcare system marketing-appointment–revenue reporting to prove ROI and guide strategy.",
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
                        Our Multi-Speciality Hospital Marketing Process
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
        "Fragmented Enterprise SEO – Departments compete; keywords split; weak internal links depress rankings.",
        "Maps & GBP Complexity – Campuses, departments, clinics misconfigured; inconsistent listings hide locations.",
        "Referral & Access Friction – Physician directories outdated; unclear routes, insurance info, scheduling steps.",
        "Leaky Conversion Paths – Slow mobile UX, buried CTAs, multi-step appointments, poor confirmation.",
        "Paid Media Waste – Broad SEM/display; weak geo-targeting; budgets drift from service lines.",
        "Reputation Inconsistency – Few recent reviews; slow responses; no systemwide playbook or SLAs.",
        "Siloed Measurement – Missing call tracking; unclear attribution by hospital, campus, department, service.",
        "Brand Drift – Inconsistent messaging, visuals, and governance across hospitals, campuses, departments."
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
                        Hospital Growth Challenges We Solve
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">US-Focused Hospital Marketing Agency to Accelerate Patient Acquisition.</p>
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
                     <p className="text-sm text-gray-500 italic">Multi-specialty hospitals and health systems across California, Texas, New York, Florida, Illinois, New Jersey, plus Massachusetts, Pennsylvania, Ohio, Georgia, North Carolina, Washington, Michigan, Arizona, Colorado, and every other U.S. state partner with our hospital marketing agency. We deliver hospital digital marketing, healthcare system marketing, service line marketing, and compliant hospital advertising that drive patient acquisition.</p>
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
                    Our Healthcare Digital Marketing Approach
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge align marketing channels to service line marketing for multi-speciality hospitals in the USA.
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
                            <li><span className="font-semibold">SEO:</span> Enterprise IA for campuses/departments; service-line keywords, schema, link building, content hubs; GBP/Maps architecture and local listings.</li>
                            <li><span className="font-semibold">SEM / Hospital Advertising:</span> Google Ads/Bing Ads (Search, PMax), display ads, retargeting with guardrails by department/location.</li>
                             <li><span className="font-semibold">Social Media:</span> Facebook, Instagram, LinkedIn, X, YouTube; physician stories, service-line video, behavioral targeting, geo-targeting, demographics.</li>
                            <li><span className="font-semibold">Outcome:</span> Qualified organic and paid traffic to priority lines.</li>
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
                             <li><span className="font-semibold">Website Design & CRO:</span> Mobile-responsive UX/UI, ADA; focused landing pages, physician/location finders, persuasive copywriting and calls-to-action.</li>
                             <li><span className="font-semibold">Access & Routing:</span> Insurance/payer info, clear route-to-care across departments, chatbots, call routing/call tracking; EMR-linked appointment flows.</li>
                            <li><span className="font-semibold">Outcome:</span> Higher conversion rate and more scheduled visits.</li>
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
                            <li><span className="font-semibold">Automation:</span> CRM, email/SMS, newsletter journeys—pre-op/post-op, reactivation, and lead nurturing by service line.</li>
                            <li><span className="font-semibold">Community & Brand:</span> Reviews/testimonials, systemwide reputation playbooks, events/webinars, consistent branding strategy.</li>
                            <li><span className="font-semibold">Analytics:</span> Channel → campaign → keyword → inquiry roll-ups by hospital/campus/department; client reporting, ROI pacing and budget guidance.</li>
                            <li><span className="font-semibold">Outcome:</span> Stronger retention, lifetime value, and systemwide clarity.</li>
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
        "Service-Line SEO for Cardiology, Oncology, Women's Health, Transplant, and More.",
        "Brand Consistency With Systemwide Branding, Visuals, And Messaging Standards.",
        "Google Ads and Bing Ads for service lines, ER, and specialty programs.",
        "Local SEO: GBP/Maps Architecture, Reviews, Citations, And Map-Pack Wins.",
        "Social & Video Education: Procedures, Care Pathways, Patient FAQs, and Discharge Guidance.",
        "Conversion Landing Pages, Clear CTAs, Chatbots, Call Tracking, And Appointment Flows.",
        "Facebook, Instagram, LinkedIn Insights and Executive Dashboards Guide Optimization.",
        "HIPAA-Aware Workflows, BAA Available, ADA-Conscious Pages, And Secure CRM Integrations.",
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
                    AdvanceEdge delivers hospital marketing built for the USA, measurable growth for multi-specialty systems and health networks.
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
const MultispecialtyHospitals = () => {
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

export default MultispecialtyHospitals;
