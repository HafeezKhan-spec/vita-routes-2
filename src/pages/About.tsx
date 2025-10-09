import React from 'react';
import aboutUs from '@/assets/About_us.webp';

// SVG Icon Components
const MailIcon = ({ className = "h-4 w-4 mr-2" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = ({ className = "h-4 w-4 mr-2" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const PaperPlaneIcon = () => (
     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
);

// Page Section Components
const HeroSection = () => (
    <div className="relative bg-cover bg-center text-white py-24 sm:py-32 md:py-48" style={{ backgroundImage: "url('https://placehold.co/1920x800/0f172a/e0e7ff?text=.')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto text-center relative z-10 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">Award-Winning Healthcare Marketing Firm</h1>
            <p className="text-lg sm:text-xl md:text-4xl mt-4 font-light">Serving all the 50 States in the USA</p>
        </div>
    </div>
);

const AboutSection = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                    <img src={aboutUs} alt="About AdvanceEdge" className="rounded-lg shadow-2xl w-full h-auto" />
                </div>
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-blue-600">About Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Rated as one of the best healthcare marketing firm and medical marketing company, AdvanceEdge is your trusted digital partner for remarkable patient growth. We plan clearly, execute precisely, and report what matters!
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our healthcare marketing experts build SEO, PPC, Social Media, Content Marketing and Marketing Automation programs that respect HIPAA and your hospitals, clinics, or brand's standards.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                       From California to Texas, Florida, Alaska, Virginia and all the other 45 states, AdvanceEdge healthcare marketing delivers data-driven growth and qualified patient enquiries. Partner with a team that understands service lines, multi-location operations and the realities of U.S healthcare.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const ValuesSection = () => (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
            <div className="grid md:grid-cols-2 gap-16 mb-16">
                 <div className="text-left">
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Aiming to be the most trusted healthcare marketing firm in the USA for measurable, compliant patient growth.
                    </p>
                </div>
                <div className="text-left">
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Help U.S. hospitals, clinics and telehealth brands grow qualified inquiries through data-driven SEO, PPC, Social Media, Content and Marketing Automation.
                    </p>
                </div>
            </div>
            <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-800 mb-3">Core Values</h3>
                <p className="text-gray-600 leading-relaxed">
                    Patient-first outcomes, compliance by default (HIPAA, BAA, ADA), evidence-led decisions, advanced edge with automation, security and data minimization to build and protect trust.
                </p>
            </div>
        </div>
    </section>
);

const StrategySection = () => (
    <div className="relative bg-cover bg-center text-white py-20 md:py-32" style={{ backgroundImage: "url('https://placehold.co/1920x600/1e293b/e0e7ff?text=.')" }}>
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-8 text-center md:text-left">
             <div className="max-w-2xl">
                 <ul className="space-y-6 text-xl">
                    <li><strong className="text-blue-400 font-bold">State-By-State USP Strategy –</strong> Audience, Keywords, Offers Tuned to Each Market</li>
                    <li><strong className="text-blue-400 font-bold">ROI-Focused Campaign Execution –</strong> SEO, PPC, Social Media Aligned to Local Demand.</li>
                    <li><strong className="text-blue-400 font-bold">Measurement & Reporting by Location –</strong> Calls, Forms, Chats Per State/City.</li>
                    <li><strong className="text-blue-400 font-bold">Local Market Planning & Compliance –</strong> Budgets, Approvals, Guidelines for Each State.</li>
                </ul>
             </div>
        </div>
    </div>
);

const CtaSection = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-blue-600 font-semibold mb-2">GET IN TOUCH</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Partner with AdvanceEdge and take your Firm to the next level.</h2>
                </div>
                <div className="bg-blue-600 text-white p-8 rounded-lg text-center shadow-lg">
                    <p className="text-4xl md:text-5xl font-extrabold tracking-wider">832-937-7738</p>
                    <p className="mt-2 text-blue-200">FEEL FREE TO CALL US</p>
                </div>
            </div>
        </div>
    </section>
);


const Footer = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto py-16 px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-12">
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Our Address</h4>
                    <p className="leading-loose">1008 Hamilton St, Immokalee, Fl 34142.</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Connect with Us</h4>
                    <div className="flex items-center mb-2">
                        <MailIcon className="h-5 w-5 mr-3 text-blue-400" />
                        <a href="mailto:info@advancedgeellc.com" className="hover:text-white">info@advancedgeellc.com</a>
                    </div>
                     <div className="flex items-center">
                        <PhoneIcon className="h-5 w-5 mr-3 text-blue-400" />
                        <a href="tel:832-937-7738" className="hover:text-white">832-937-7738</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Our Newsletter</h4>
                    <p className="mb-4">Signup for our latest news & articles.</p>
                    <form className="flex">
                        <input type="email" placeholder="Email Address" className="bg-gray-700 text-white px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md">
                           <PaperPlaneIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-700 py-6">
            <div className="container mx-auto px-4 md:px-8 text-center text-gray-400">
                <p>&copy; Copyright 2025. All rights reserved. <span className="text-white font-semibold">AdvanceEdge.</span></p>
            </div>
        </div>
    </footer>
);


// Main App Component
const App = () => {
    return (
        <div className="font-sans bg-white">
            <main>
                <HeroSection />
                <AboutSection />
                <ValuesSection />
                <StrategySection />
                <CtaSection />
            </main>
        </div>
    );
};

export default App;

