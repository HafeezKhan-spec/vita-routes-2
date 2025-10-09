import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeBgHeader from '@/assets/Home_Bg_Header.mp4';
import image_12 from '@/assets/image_12.webp';
import stepImg from '@/assets/step.webp';
import homeImage from '@/assets/home_image.png';
import home_1 from '@/assets/home_1.webp';
import home_2 from '@/assets/home_2.webp';
import home_3 from '@/assets/home_3.webp';
// --- SVG Icon Components ---
// Using inline SVGs to keep everything in one file and avoid external dependencies.

const DentalIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20.5 8.5c.3-1.2-.5-2.5-1.7-2.8-.9-.3-1.9.2-2.3.9" />
        <path d="M3.5 8.5c-.3-1.2.5-2.5 1.7-2.8.9-.3 1.9.2 2.3.9" />
        <path d="M12 18c-3.2 0-5-1.8-5-4V9c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v5c0 2.2-1.8 4-5 4Z" />
        <path d="M12 18v2" />
        <path d="M9 22h6" />
    </svg>
);

const HospitalIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M12 11v6" />
        <path d="M9 14h6" />
    </svg>
);

const IvfIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.5 2.5a2.5 2.5 0 0 0-3 0" />
        <path d="M8.3 17.7a5 5 0 0 1-1.6-8.6" />
        <path d="M17.4 9.1a5 5 0 0 1-8.8 5" />
        <path d="M13.2 17.7a5 5 0 0 1 1.6-8.6" />
        <path d="m12 14 1-1 1 1" />
        <path d="M10 22s.5-1 2-3 2 3 2 3" />
    </svg>
);

const EyeIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const ChiropracticIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7.5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M16.5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="m14 15-2-3-2 3" />
        <path d="M10 9l2 3 2-3" />
        <path d="M10 21v-3.3a.7.7 0 0 1 .7-.7h2.6a.7.7 0 0 1 .7.7V21" />
        <path d="M14 3v3.3a.7.7 0 0 1-.7.7h-2.6a.7.7 0 0 1-.7-.7V3" />
    </svg>
);

const MentalHealthIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15.23 6.23a4.5 4.5 0 0 0-6.46 0" />
        <path d="M16 11.5A4.5 4.5 0 0 0 11.5 7" />
        <path d="M8 11.5A4.5 4.5 0 0 1 12.5 7" />
        <path d="M12 13a2.5 2.5 0 0 0-2.5 2.5V17a2.5 2.5 0 0 0 5 0v-1.5A2.5 2.5 0 0 0 12 13Z" />
        <path d="M9 18H7.5a4.5 4.5 0 0 1-4.4-5.2L4 8" />
        <path d="M15 18h1.5a4.5 4.5 0 0 0 4.4-5.2L20 8" />
    </svg>
);

// --- Data for Service Cards ---
import Image_1 from "@/assets/Image_1.webp";
import Image_2 from "@/assets/Image_2.webp";
import Image_3 from "@/assets/Image_3.webp";
import Image_4 from "@/assets/Image_4.webp";
import Image_5 from "@/assets/Image_5.webp";
import Image_6 from "@/assets/Image_6.webp";

const services = [
    {
        icon: DentalIcon,
        title: 'Dental Clinics / DSOs',
        description: 'General dentistry, DSOs/MSOs, orthodontics, periodontics, oral surgery, endodontics, pediatric dentistry, and implant centers.',
        imageUrl: Image_1,
    },
    {
        icon: HospitalIcon,
        title: 'Multispecialty Hospitals',
        description: 'Community hospitals, health systems, and outpatient centers. Service lines: cardiology, orthopedics, oncology, women\'s health, primary care.',
        imageUrl: Image_2,
    },
    {
        icon: IvfIcon,
        title: 'IVF / Fertility Clinics',
        description: 'IVF centers, reproductive endocrinologists (REI), egg-freezing, donor/gestational carrier programs, and male fertility partnerships.',
        imageUrl: Image_3,
    },
    {
        icon: EyeIcon,
        title: 'Eye Clinics / Ophthalmology',
        description: 'Ophthalmology groups, refractive/LASIK, cataract surgery, retina/cornea subspecialists, pediatric ophthalmology, and OD co-management.',
        imageUrl: Image_4,
    },
    {
        icon: ChiropracticIcon,
        title: 'Chiropractors',
        description: 'Solo and multi-location clinics, sports chiropractic, prenatal/pediatric care, and integrated pain/rehab practices.',
        imageUrl: Image_5,
    },
    {
        icon: MentalHealthIcon,
        title: 'Mental Health / Addiction',
        description: 'Outpatient psychiatry, IOP/PHP programs, residential rehab/detox, MAT clinics, and tele-mental-health platforms.',
        imageUrl: Image_6,
    },
];

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const CheckmarkIcon = () => (
    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const StarIcon = ({ filled = true }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// Icons for "Our Approach" Section
const TechEnabledIcon = () => <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const StrategicInsightIcon = () => <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>;
const PartnerLedIcon = () => <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.001 3.001 0 01-2.702 0M7 16V5a3 3 0 013-3h4a3 3 0 013 3v11m-6 0a3 3 0 00-3 3v1a3 3 0 003 3h4a3 3 0 003-3v-1a3 3 0 00-3-3m-3 0h.008v.008H12v-.008z"></path></svg>;


// --- Reusable UI Components ---

const ContactForm = () => (
    <form className="space-y-4">
        <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm" />
        </div>
        <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm" />
        </div>
        <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input type="tel" id="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm" />
        </div>
        <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
            SUBMIT
        </button>
    </form>
);

// --- Page Section Components ---

const HeroSection = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attempt to start with audio enabled on load
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      try {
        const p = v.play();
        if (p && typeof p.then === 'function') p.catch(() => {});
      } catch {}
    }
  }, []);
  return (
    <div className="relative min-h-screen">
      {/* Background video (no loop) */}
      <video
        ref={videoRef}
        src={homeBgHeader}
        autoPlay
        playsInline
        muted={false}
        controls={false}
        onPlay={() => { setIsPlaying(true); }}
        onPause={() => { setIsPlaying(false); }}
        onEnded={() => { setVideoEnded(true); setIsPlaying(false); }}
        className={"absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"}
      />

      {/* Play/Pause control overlay (persists after end) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            if (isPlaying) {
              v.pause();
            } else {
              setVideoEnded(false);
              try { v.play(); } catch {}
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 text-white border border-white/30 backdrop-blur-sm hover:bg-black/60 transition"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
              <span className="text-sm font-semibold">Pause</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
              <span className="text-sm font-semibold">Play</span>
            </>
          )}
        </button>
      </div>

      {/* Subtle overlay while video is playing */}
      {!videoEnded && <div className="absolute inset-0 bg-black/10"></div>}

      {/* Audio plays by default; no toggle shown */}

      <div className="relative z-10 container mx-auto px-6 sm:px-8 h-full flex flex-col justify-center md:justify-end items-center text-center pb-12 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-60 md:mt-60 font-bold text-black mb-6 md:mb-8 leading-tight">
            Data-Backed Healthcare Marketing for Real Patient Growth.
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-black mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto">
            From Click to Appointment, We Build HIPAA-Compliant Campaigns That Scale Clinics and Hospitals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-extrabold bg-black text-white border-2 border-orange-500 shadow-lg hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all duration-200">
              BOOK A CALL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img src={image_12} alt="Doctor" className="rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.03]" />
                </div>
                <div className="md:w-1/2">
                    <p className="text-red-500 font-semibold tracking-widest mb-2">ABOUT ADVANCEEDGE DIGITAL</p>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Advancing Patient Growth with Smarter Digital Marketing</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        AdvanceEdge Health is a full-service healthcare marketing agency helping hospitals, specialty clinics, multi-location groups, and telehealth providers grow patient volume across the U.S.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        We deliver end-to-end marketing solutions including SEO, PPC, social media, content marketing, and marketing automation, all tailored to the healthcare industry’s unique compliance and performance needs.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Our approach is simple: clear strategies, reliable execution, and transparent reporting. You’ll see exactly how every channel, campaign, and keyword drives qualified patient inquiries through calls, forms, and bookings.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From SEO to AI-powered automation, ads to content, we turn marketing data into measurable, HIPAA-compliant growth that strengthens your brand and fills your schedule.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const ServicesSection = () => {
    const servicesList = [
        { title: "SEO", description: "Comprehensive SEO strategies focused on growth and compliance.Includes keyword strategy, on-page and technical optimization, local SEO (GBP and citations), backlink development, and detailed GA4/GSC performance tracking." },
        { title: "Social Media", description: "Engage patients where they spend their time.We manage organic and paid social campaigns across Facebook, Instagram, LinkedIn, YouTube, TikTok, and more, with precise audience targeting and compliant ad execution." },
        { title: "Content Marketing", description: "Build trust through expert, patient-focused content.From websites and blogs to video, podcasts, and LinkedIn articles, our editorial process ensures every piece supports SEO, education, and brand credibility." },
        { title: "Paid Marketing (PPC)", description: "Generate immediate patient inquiries through high-performing ad campaigns.We manage Google Ads (Search, Performance Max, YouTube) and Microsoft Ads (Bing) with advanced geo-targeting, negative keyword optimization, and landing page testing." },
        { title: "Marketing Automation", description: "Streamline engagement and retention.We set up HIPAA-aware email and SMS platforms, chatbots, and CRM/EMR-safe integrations to nurture leads, reduce no-shows, and increase reappointments." },
    ];

    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.slice(0, 2).map((service, index) => (
                        <div key={index} className="border border-blue-800/50 rounded-lg p-8 bg-slate-900/30 flex flex-col gap-4 transition-all duration-300 hover:border-blue-400/70 hover:bg-slate-800/40 hover:shadow-lg transform hover:-translate-y-1">
                            <h3 className="text-2xl font-semibold">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                     <div className="flex flex-col justify-center gap-4 p-6 md:p-0">
                         <p className="text-orange-500 font-semibold text-xs tracking-widest">HEALTHCARE MARKETING</p>
                         <h2 className="text-4xl font-bold text-white">Services We Offer</h2>
                         <p className="text-gray-400 leading-relaxed">
                             AdvanceEdge Health delivers performance-driven digital marketing solutions for hospitals, specialty clinics, multi-location groups, and telehealth practices.
                             Our services are designed to increase visibility, attract qualified patients, and grow your practice with measurable, HIPAA-compliant results.

                         </p>
                     </div>
                      {servicesList.slice(2).map((service, index) => (
                         <div key={index + 2} className="border border-blue-800/50 rounded-lg p-8 bg-slate-900/30 flex flex-col gap-4 transition-all duration-300 hover:border-blue-400/70 hover:bg-slate-800/40 hover:shadow-lg transform hover:-translate-y-1">
                             <h3 className="text-2xl font-semibold">{service.title}</h3>
                             <p className="text-gray-400">{service.description}</p>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon: Icon, title, description, imageUrl, isGridHovered, onHover, animationDelay }) => {
    const [isCardHovered, setCardHovered] = useState(false);

    return (
        <div 
            className="relative bg-white p-6 rounded-lg border border-gray-200 cursor-pointer overflow-hidden group transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            style={{ animationDelay }}
            onMouseEnter={() => { onHover(true); setCardHovered(true); }}
            onMouseLeave={() => { onHover(false); setCardHovered(false); }}
        >
            <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out ${isCardHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}
                 style={{ backgroundImage: `url(${imageUrl})` }}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                    <Icon className={`w-8 h-8 transition-all duration-500 transform group-hover:scale-110 ${isCardHovered ? 'text-white' : 'text-teal-500'}`} />
                </div>
                <div className={`transition-all duration-500 ${isCardHovered ? 'text-white' : 'text-gray-800'}`}>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className={`text-sm leading-relaxed ${isCardHovered ? 'text-gray-200' : 'text-gray-600'}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ContactModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative transform transition-all duration-300 ease-in-out scale-95 animate-modal-in" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">CONTACT US</h2>
                    <p className="text-gray-500 mb-6">Fill out the form below, and we will be in touch shortly.</p>
                </div>
                <form>
                    <div className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition" />
                        <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition" />
                        <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition" />
                        <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-md mt-6 hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

function HomeInternal() {
    const [isGridHovered, setGridHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="bg-slate-50 font-sans text-gray-800">
             <div className="container mx-auto px-4 py-16 md:py-24">
                <div className={`lg:flex lg:gap-8 mb-16 items-stretch ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <header className="lg:w-2/3 mb-8 lg:mb-0">
                        <h2 className="text-sm font-bold uppercase text-orange-500 tracking-widest mb-2">OUR EXPERTISE</h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Healthcare Industries We Serve</h1>
                        <p className="text-lg text-gray-600 mb-8">Our medical marketing agency partners with US hospitals, clinics and telehealth brands, providing tailored digital marketing services for each line.</p>
                        <Link 
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-extrabold bg-black text-white border-2 border-orange-500  shadow-lg hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all duration-200"
                        >
                            BOOK A CALL
                        </Link>
                    </header>
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 h-full shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Skin Clinics / Dermatologists</h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                Medical & cosmetic dermatology, MOHS surgery, physician-led medspas, pediatric dermatology, and hair-loss clinics.
                            </p>
                        </div>
                    </div>
                </div>
                <main>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500`}>
                        {services.map((service, index) => (
                            <div key={index} className={isLoaded ? 'animate-fade-in-up' : 'opacity-0'}>
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    imageUrl={service.imageUrl}
                                    onHover={setGridHovered}
                                    isGridHovered={isGridHovered}
                                    animationDelay={`${index * 100 + 300}ms`}
                                />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

const MainView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full p-8 md:p-16 lg:p-24 bg-[#001F3F] text-white gap-10">
      <div className="flex flex-col justify-center">
        <p className="text-orange-500 font-semibold tracking-widest text-sm mb-4">Healthcare Marketing That Scales Patient Acquisition</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Ready to grow your practice in <br />
          today’s competitive healthcare  <br />
          Market?
        </h1>
        <Link
          to="/contact"
          className="mt-12 inline-flex items-center justify-center px-8 py-3 text-base font-extrabold bg-black text-white border-2 border-orange-500 w-max shadow-lg hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all duration-200"
        >
          BOOK A CALL
        </Link>
      </div>
      <div className="group relative overflow-hidden rounded-2xl shadow-xl">
        <img
          src={stepImg}
          alt="Healthcare marketing"
          className="w-full h-full object-cover transform transition-transform duration-900 ease-out group-hover:scale-[1.15]"
        />
      </div>
    </div>
);

const WhyChooseUsSection = () => {
    const features = [
        "Specialized Healthcare Focus",
        "Custom Medical Websites",
        "Data-Driven Healthcare Marketing",
        "Flexible, Scalable, Cost-Effective"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3">
                        <img src={homeImage} alt="Professional man" className="rounded-2xl shadow-xl"/>
                    </div>
                    <div className="lg:w-2/3 flex flex-col xl:flex-row gap-8">
                        <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-2xl space-y-6 flex-1">
                            <h3 className="text-2xl font-bold">Healthcare Expertise That Delivers Results</h3>
                            <p className="text-gray-300">We’re a healthcare marketing agency built to help hospitals, multi-location healthcare groups, and specialty clinics grow patient inquiries and booked appointments — without guesswork.</p>
                            <div className="border-t border-gray-600 pt-6">
                                <p className="font-bold">Also, why does it say attorneys?</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <p className="text-3xl font-bold">4.5</p>
                                    <div className="flex">{[...Array(5)].map((_, i) => <StarIcon key={i} filled={i<4} />)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 pt-6">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose AdvanceEdge?</h2>
                            <ul className="space-y-4">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckmarkIcon />
                                        <span className="text-gray-700 font-semibold">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OurApproachSection = () => {
    const approaches = [
        { icon: <TechEnabledIcon />, title: "Tech-Enabled Efficiency", description: "Automation handles routing, nurture, reactivation; AI powers keyword clustering, creative tests, and bid pacing." },
        { icon: <StrategicInsightIcon />, title: "Strategic Insight", description: "SEO, PPC, social, and content plans guided by CPL and qualified inquiries." },
        { icon: <PartnerLedIcon />, title: "Partner-Led Solutions", description: "Transparent dashboards, weekly tests, monthly reviews; scale services, locations, and service lines." },
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Approach: Precision, Performance and Partnership</h2>
                <p className="max-w-3xl mx-auto text-gray-600 mb-12">At AdvanceEdge, your healthcare marketing agency in the USA, we connect strategy to execution and improve results week after week: clarify goals and markets; map SEO, PPC, social, content, automation; set budgets and metrics; build and QA pages, tracking, campaigns; test weekly, shift spend to winners, scale locations and service lines.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {approaches.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-600">
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        { 
            name: "Antoine Benton", 
            text: "AdvanceEdge's AI-driven support and acquisition tools transformed our process. Their virtual agents are responsive, and deliver measurable results.",
            image: home_1
        },
        { 
            name: "Karol Mcnally", 
            text: "Their team helped us redefine client outreach—smart, strategic, and remarkably effective. Our conversion rates have never been stronger.",
            image: home_2
        },
        { 
            name: "Bianka Hilton", 
            text: "AdvanceEdge gave us a competitive edge with proactive digital marketing that is responsive to law firms. Fast, professional, and result-oriented.",
            image: home_3
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <p className="text-red-500 font-semibold tracking-widest mb-2">OUR CLIENTS</p>
                <h2 className="text-4xl font-bold text-gray-800 mb-12">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-md text-left space-y-4">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={t.image} 
                                    alt={t.name} 
                                    className="w-16 h-16 rounded-full object-cover" 
                                />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-800">{t.name}</h4>
                                    <div className="flex mt-1">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{t.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
const FinalCTASection = () => (
    <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold">Our Commitment: Compliance, Confidentiality & Excellence</h2>
                    <p className="text-gray-300 leading-relaxed">Healthcare is sensitive. Our HIPAA compliant marketing agency treats your data and brand with care. We work with HIPAA-aware workflows, sign BAAs when required, practice data minimization, and never place PHI in ad platforms. Every site and landing page follows ADA accessibility best practices. Secure access, reviews, and QA keep quality and confidentiality high, every time.</p>
                </div>
                <div className="lg:w-1/2 bg-white p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Elevate Your Practice?</h3>
                    <p className="text-gray-500 mb-6">Partner with AdvanceEdge for a HIPAA-aware growth plan for your healthcare practice.</p>
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
);



// --- Main App Component ---

export default function App() {
    return (
        <div className="bg-white font-sans">
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <HomeInternal />
                <MainView />
                <WhyChooseUsSection />
                <OurApproachSection />
                <TestimonialsSection />
                <FinalCTASection />
            </main>
        </div>
    );
}


