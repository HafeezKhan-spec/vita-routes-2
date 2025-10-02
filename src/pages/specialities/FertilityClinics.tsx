import React from "react";
// Local CTA button restored
const BookACallButton = () => (
    <Link to="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
      <Plus className="w-4 h-4" />
      BOOK A CALL
    </Link>
);
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
                    Reach Your Patients<br />
                    <span className="block">From First Click to</span>
                    <span className="block mb-5">Comprehensive Care</span>
                </h1>
                <p className="mt-3 text-lg font-bold text-gray-200">
                    Turning Searches into Consultations
                </p>
                <p className="mt-4 text-base font-bold text-gray-200"> 
                    With Fertility Clinics SEO, IVF Ads and Social Media 
                </p>
            </div>
        </div>
    </header>
);

// --- Component 2: Who Benefits Section (Section 1) ---
const WhoBenefitsSection = () => {
    const benefitItems = [
        {
            title: "IVF & Assisted Reproduction Centers",
            content: "IVF, ICSI, Embryo Transfer, PGT/PGS, Donor Programs, On-Site Labs with Success-Rate Pages, Financing, Counseling Funnels, and Mobile Booking Powered By Fertility Clinic Marketing To Increase Qualified Consultations.",
        },
        {
            title: "Fertility Preservation & Egg-Freezing Program",
            content: "Egg Freezing And Embryo Banking with Eligibility Quizzes, Cost And Financing Pages, Webinars, Localized Campaigns Guiding Candidates From Awareness To Counseling And Booked Appointments.",
        },
        {
            title: "Reproductive Endocrinologists (REI) & Specialists",
            content: "Specialist Bios, Procedure Hubs For IUI, Ovulation Induction, Hormone Therapy with Referral Pathways, Research Credentials, Telehealth Access, and Fertility Clinic SEO Converting Searches Into Consultations.",
        },
        {
            title: "Support Services & Male Fertility Clinics",
            content: "Semen Analysis, Varicocele Care, Sperm Retrieval, IUI Support, Donor Coordination, Nutrition, Counseling, And Teleconsult Flows— Designed To Build Trust, Reduce Anxiety, And Lift Consult-To-Treatment Conversion.",
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
                        Who Benefits from Fertility Marketing in the USA?
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

// --- Component 3: Our Marketing Process (Section 2) ---
const ProcessSection = () => {
    // NOTE: The process steps content in the original file was a copy from EyeClinics.tsx. 
    // This content is preserved as requested by the user ("dont change logic and written content of any page").
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
                {/* Title (Preserved from original file, which mistakenly referred to Ophthalmology) */}
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
        "Sensitive Claims — ASRM/SART-compliant wording, substantiated success-rate messaging, clinical approvals required.",
        "Search Visibility — IVF, IUI, egg-freezing terms underperform; weak local SEO and schema.",
        "Ad Policy Risk — Reproductive services restrictions; pre-approved creatives avoid disapprovals and waste.",
        "High CPC Markets — Competitive metros require disciplined bidding, negatives, ZIP geo-targeting.",
        "Conversion Friction — Financing transparency, insurance details, consent steps, eligibility checks impede bookings.",
        "Reputation Sensitivity — Consented testimonials, moderated reviews; privacy-first governance strengthens trust.",
        "Measurement Gaps— Consult-to-start attribution missing; call tracking, CRM, GA4 underused.",
        "Compliance & Privacy — HIPAA/BAA, no PHI in platforms; state telehealth rules.",
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
                        Growth Challenges for Fertility Clinics We Solve
                    </h3>
                    <h3 className="text-xl font-medium">
                        US-Focused IVF Marketing to Accelerate Patient Acquisition.
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                        {challenges.map((challenge, index) => {
                            const parts = challenge.split('—'); // Splitting on '—' to match original file's formatting
                            const boldPart = parts[0];
                            const restPart = parts.length > 1 ? parts.slice(1).join('—') : '';
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
                    Fertility clinics and reproductive endocrinology practices across California, 
                    Texas, New York, Florida, Illinois, New Jersey, Massachusetts, Pennsylvania, Ohio,
                    Georgia, North Carolina, Washington, Michigan, Arizona, Colorado and every other U.S. 
                    state rely on our fertility clinic marketing and IVF marketing programs for patient 
                    acquisition and Local SEO.
                </p>
                <motion.div
                    className="mt-4 flex justify-center lg:justify-start ml-8"
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
                "Fertility Clinic SEO: Treatment hubs (IVF, IUI, Egg Freezing), physician/staff bios, success-rate context, FAQs, schema, local catchment pages, and medical/OBGYN backlink outreach.",
                "IVF & Fertility PPC / Ads: High-intent Search (e.g., IVF, embryo transfer), Performance Max with strict negatives, policy-vetted copy, budget planning for high-CPC terms, geo-targeting by referral ZIPs, and pre-approved creatives with clinical sign-off (IVF advertising / IVF marketing).",
                "Social Media & Video: Instagram, YouTube, Facebook, TikTok—clinician explainers, patient stories, consented lab overviews, webinars, moderated support groups; influencer screening and emotional-support protocols; track engagement, watch time, and assist-to-consult.",
                "Content & Patient Education (Top-Funnel): Blogs, guides, webinars, downloadable checklists, consented testimonials that educate and attract qualified inquiries.",
                "Outcome: Qualified traffic and consult requests across search, social, and content.",
            ],
        },
        {
            title: "Convert",
            items: [
                "Website & CRO for Clinics: Mobile-first booking UX, focused landing pages, success-rate pages with context, transparent cost/financing, eligibility FAQs, secure contact forms, teleconsult pathways, chat triage; A/B test CTAs and form lengths; no PHI in ad platforms.",
                "Attribution & Proof: GA4, UTMs, call tracking, CRM capture mapping keyword→campaign→consult; lead-form vs landing-page testing to raise conversion rate.",
                "Local SEO Signals at Point of Decision: GBP/Maps enhancements, location clarity, hours/insurance accuracy to support last-mile selection.",
                "Outcome: Higher consult conversion and fewer drop-offs.",
            ],
        },
        {
            title: "Retain",
            items: [
                "CRM, Email, SMS & Automation: Consent-first journeys (inquiry→consult→pre/post-procedure), lead scoring, financing follow-ups, appointment reminders, post-treatment nurture and reactivation; CRM↔EMR booking mapping where feasible for full consult attribution.",
                "Content & Education (Mid/Late-Funnel): Patient education series, counseling resources, nutrition/wellness content, webinars, and newsletters—clinically reviewed, empathetic, aligned to the patient journey.",
                "Reputation & Community: Review governance and testimonial workflows (consent-led), moderated groups, and physician video that sustain trust and referrals.",
                "Outcome: Better retention, referrals, and lifetime value—visible in consult→treatment dashboards.",
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
                    Our IVF Marketing Approach
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge, rated as the best fertility marketing agency in the USA,
                    offers clinic-grade programs, delivering measurable fertility clinic
                    marketing growth.
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
        "Fertility Clinic SEO Playbooks For IVF, IUI, Egg Freezing.",
        "Policy-Safe IVF Advertising With Pre-Approved Clinical Copy.",
        "Success-Rate, Cost, And Financing Page Optimization.",
        "Physician Bios, Procedure Hubs, And Local Catchment Pages",
        "CRM, Call Tracking, Keyword-To-Consult Attribution Dashboards.",
        "Consent Workflows, HIPAA/BAA, No PHI In Ad Platforms.",
        "Geo-Targeted Campaigns; Teleconsult And Online Booking Paths.",
        "Review Governance, Testimonials, Webinars, Community Programs.",
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
                    Why Choose AdvanceEdge for Fertility Marketing?
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
                    variants={fadeInUp}
                >
                    AdvanceEdge is a fertility marketing agency, delivering privacy-first
                    programs that grow consultations and treatments across the U.S.
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

// --- Component 7: Footer Section (Reused content/structure) ---
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
const FertilityClinics = () => {
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

export default FertilityClinics;
