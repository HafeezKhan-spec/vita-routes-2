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
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-blue-600">About AdvanceEdge Digital</h2>
                    <h1 className="text-xl sm:text-xl font-bold text-gray-800 mb-6 relative pb-2 ">
                        Your Healthcare Marketing Partner for Growth With Integrity
                    </h1>
                    <p className="text-black leading-relaxed mb-4">
                        AdvanceEdge is a results-driven healthcare marketing agency that helps hospitals, clinics, and telehealth brands attract more patients and grow responsibly. We combine deep healthcare knowledge with proven digital expertise—turning strategy into measurable, compliant results.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                       Our team plans with clarity, executes with precision, and reports on what truly matters: real patient growth, trusted visibility, and lasting impact.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                       We specialize in SEO, paid advertising, social media, content marketing, and automation—built on HIPAA-aware systems and workflows that respect every organization’s brand, data, and compliance standards.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                       Partner with a team that understands service lines, multi-location operations, and the realities of modern healthcare marketing.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const ValuesSection = () => {
  const coreValues = [
    {
      title: "Patient First",
      desc: "Marketing built around trust, empathy, and outcomes.",
    },
    {
      title: "Compliance by Default",
      desc: "HIPAA, BAA, and ADA standards woven into every workflow.",
    },
    {
      title: "Evidence-Led Decisions",
      desc: "Data drives every insight, every recommendation.",
    },
    {
      title: "Innovation with Integrity",
      desc: "Using automation, AI, and advanced analytics responsibly.",
    },
    {
      title: "Transparency",
      desc: "Clear communication, clear reporting, clear results.",
    },
  ];

  const commitments = [
    "Campaigns tailored by audience, state, and specialty.",
    "SEO, PPC, and social aligned to real local demand.",
    "Measurable performance by call, form, or chat.",
    "Regional compliance and budget planning baked in.",
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              title: "Our Vision",
              desc: "To be the most trusted healthcare marketing partner for measurable, compliant growth across every channel and every state.",
            },
            {
              title: "Our Mission",
              desc: "Helping healthcare organizations attract qualified patient inquiries through strategy, creativity, and ethical performance marketing.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-8 text-left transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-200 hover:bg-gradient-to-br from-white via-indigo-50 to-white"
            >
              <h3 className="text-3xl font-bold text-indigo-700 mb-4 transition-colors duration-300 hover:text-indigo-800">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 hover:bg-gradient-to-br from-white via-indigo-50 to-white"
              >
                <h4 className="text-xl font-semibold text-indigo-700 mb-2 transition-colors duration-300 group-hover:text-indigo-800">
                  {value.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Commitment</h3>
          <div className="bg-white rounded-2xl shadow-md p-8 text-left transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:shadow-indigo-200 hover:bg-gradient-to-br from-white via-indigo-50 to-white">
            <ul className="space-y-4">
              {commitments.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start transition-all duration-300 hover:translate-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 hover:text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const StrategySection = () => (
  <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6 transition-all duration-700 hover:translate-y-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            AdvanceEdge Digital builds growth you can trust — 
            <span className="text-orange-500"> measurable, ethical,</span> and
            built for the long run.
          </h2>

          <div className="flex items-center gap-3 group cursor-pointer w-fit">
            <p className="text-orange-600 text-2xl font-semibold tracking-wide group-hover:text-orange-700 transition-colors">
              Let’s Talk About Growth
            </p>
            <span className="text-orange-600 group-hover:translate-x-2 transition-transform duration-300 text-2xl">
              →
            </span>
          </div>

          
        </div>

        {/* Right Contact Box */}
        <div className="bg-black text-white p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden group">
          {/* Background Glow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>

          <div className="relative z-10 space-y-4">
            <p className="text-sm tracking-widest text-gray-300 uppercase">
              Get in Touch
            </p>

            <div className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-extrabold">
              <span className="text-orange-500 animate-pulse">📞</span>
              <p>832-937-7738</p>
            </div>

            <p className="text-gray-400 text-sm mt-2">
              Call us today for a free consultation
            </p>
          </div>
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
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md" aria-label="Subscribe">
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
                
            </main>
        </div>
    );
};

export default App;





