import React from "react";
import BookCallButton from '@/components/BookCallButton';
import { motion } from "framer-motion";
import { Search, FileText, Rocket, BarChart3, CircleCheckBigIcon, CheckCircle } from "lucide-react";

import BACKGROUND_IMAGE_URL from '../../assets/Background.jpg';
import CONTENT_IMAGE_URL from '../../assets/Image_10.webp';

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

// --- Header Section ---
const HeaderSection = () => (
  <header>
    <div
      className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div className="absolute inset-0 bg-blue-950 bg-opacity-80"></div>
      <div className="relative z-10 max-w-4xl px-4 lg:px-8 text-white text-center mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Fertility Marketing That Turns Searches Into Consultations
        </h1>
        <p className="mt-4 text-lg font-semibold">
          AdvanceEdge helps fertility clinics and IVF programs attract more patients, build trust, and grow responsibly.
        </p>
        <p className="mt-4 text-lg font-semibold">
          AdvanceEdge helps fertility clinics and IVF programs attract more patients, build trust, and grow responsibly. Our marketing blends search, social, and website optimization to increase consultations while maintaining full privacy and compliance.
        </p>
        <div className="mt-6 flex justify-center">
          <BookCallButton />
        </div>
      </div>
    </div>
  </header>
);

// --- Who We Help Section ---
const WhoBenefitsSection = () => {
  const benefitItems = [
    {
      title: "IVF & Assisted Reproduction Centers",
      content: "We create marketing programs that highlight your expertise and success stories while guiding patients through every step, from first click to booked consultation.",
    },
    {
      title: "Egg Freezing & Fertility Preservation Programs",
      content: "Our campaigns educate and empower patients with clear information about eligibility, cost, and care options, helping them take the next step with confidence.",
    },
    {
      title: "Reproductive Endocrinologists & Fertility Specialists",
      content: "We help physicians stand out through optimized profiles, procedure content, and local search visibility that turn online interest into real consultations.",
    },
    {
      title: "Male Fertility & Support Services",
      content: "We design experiences that reduce anxiety, build trust, and make it easy for patients and couples to schedule consultations and follow-up care.",
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
        <motion.div className="lg:w-1/2" variants={fadeInUp}>
          <img src={CONTENT_IMAGE_URL} alt="Discussion" className="rounded-lg shadow w-full object-cover" />
        </motion.div>
        <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
          <motion.h3 className="text-2xl font-semibold" variants={fadeInUp}>
            Who We Help
          </motion.h3>
          {benefitItems.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <h6 className="font-bold mt-4">{item.title}</h6>
              <p>{item.content}</p>
            </motion.div>
          ))}
          <motion.div className="block md:hidden text-center" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
            <div className="flex justify-center">
              <BookCallButton />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="hidden md:flex justify-center lg:justify-start mt-6" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
        <div className="flex justify-center ml-[700px]">
          <BookCallButton />
        </div>
      </motion.div>
    </motion.section>
  );
};

// --- Process Section ---
const ProcessSection = () => {
  const processSteps = [
    {
      step: "01.",
      title: "Discover & Plan",
      desc: "We review your digital presence, website, and patient experience to find growth opportunities. Together, we define goals, target audiences, and success metrics for your fertility programs.",
      icon: <Search className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "02.",
      title: "Build & QA",
      desc: "We create educational content, service pages, and patient-friendly booking experiences. Your campaigns are built to reflect your brand, your outcomes, and your approach to care.",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "03.",
      title: "Launch & Learn",
      desc: "Search and social campaigns go live with a focus on qualified leads and real inquiries. We test, refine, and monitor what drives engagement and booked consultations.",
      icon: <Rocket className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "04.",
      title: "Optimize & Scale",
      desc: "We expand on what works, growing your reach, improving visibility, and deepening relationships with patients and referring providers.",
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <motion.section className="bg-gray-900 text-white py-20 relative overflow-hidden" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-14" variants={fadeInUp}>
  <h2 className="text-4xl font-extrabold tracking-wide">
    Our Process:{" "}
    <span className="text-2xl text-indigo-400 ml-3">
      Discover &rarr; Build &rarr; Launch &rarr; Optimize
    </span>
  </h2>
</motion.div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-2xl -z-10"></div>
              <div className="flex items-start justify-between">
                <h4 className="text-3xl font-bold text-blue-500">{item.step}</h4>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-lg shadow-inner">{item.icon}</div>
              </div>
              <h5 className="text-xl font-semibold mt-5">{item.title}</h5>
              <p className="mt-4 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- Challenges Section ---
const ChallengesSection = () => {
  const challenges = [
    "Low visibility in competitive IVF and fertility search markets.",
    "High advertising costs with poor conversion tracking.",
    "Complex or unclear booking paths that lead to drop-offs.",
    "Sensitive content that needs compliance review.",
    "Limited patient reviews or social proof.",
    "Missed local SEO and map opportunities.",
  ];

  return (
    <motion.section className="py-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <motion.div className="lg:w-1/2" variants={fadeInUp}>
          <img src={CONTENT_IMAGE_URL} alt="Meeting" className="rounded-lg shadow w-full" />
        </motion.div>
        <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
          <h3 className="text-2xl font-semibold">Challenges We Solve</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </motion.div>
      </div>
      <motion.div className="max-w-6xl mx-auto px-4 mt-8" variants={fadeInUp}>
        <p className="text-sm">
          AdvanceEdge simplifies digital growth for fertility providers, balancing ethical communication, privacy, and measurable performance.
        </p>
        <motion.div className="mt-4 flex justify-center" whileHover={{ scale: 1.05 }}>
          <BookCallButton />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// --- Approach Section ---
const ApproachSection = () => {
  const approachColumns = [
    {
      title: "Attract",
      items: [
        "We use search, social media, and content marketing to make your clinic visible to people actively seeking care.",
        "From fertility education to patient success stories, every campaign builds trust before the first appointment.",
      ],
    },
    {
      title: "Convert",
      items: [
        "We design websites and landing pages that make complex information clear and booking simple.",
        "Transparent pricing, real success rates, and reassuring messaging turn interest into consultations.",
      ],
    },
    {
      title: "Retain",
      items: [
        "Through automated communication, newsletters, and community engagement, we help you stay connected after treatment, supporting referrals, ongoing care, and alumni relationships.",
      ],
    },
  ];

  return (
    <motion.section className="approach text-center py-20 relative bg-gradient-to-r from-indigo-50 via-white to-indigo-100 overflow-hidden" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <motion.h2 className="text-4xl font-extrabold mb-6 text-gray-800 tracking-wide" variants={fadeInUp}>
          Our Approach to Fertility Marketing
        </motion.h2>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed" variants={fadeInUp}>
          Our model is simple: Attract. Convert. Retain.
        </motion.p>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed" variants={fadeInUp}>
          Each stage is designed to help fertility clinics build visibility, trust, and patient relationships that last.
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

// --- Why Choose Section ---
const WhyChooseSection = () => {
  const whyChooseItems = [
    "Attract more qualified consultations through search and social.",
    "Build trust with education-based marketing and patient storytelling.",
    "Simplify the booking process for every treatment line.",
    "Strengthen reputation with reviews, webinars, and community programs.",
    "Grow ethically with privacy-safe, compliant workflows.",
  ];

  return (
    <motion.section className="choose text-center py-20 relative bg-gray-50 overflow-hidden" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="relative container mx-auto px-4">
        <motion.h2 className="text-4xl font-extrabold mb-6 text-gray-800 tracking-wide" variants={fadeInUp}>
          Why Choose AdvanceEdge
        </motion.h2>
        <motion.p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed" variants={fadeInUp}>
          AdvanceEdge helps fertility clinics grow with confidence — combining strategy, creativity, and compassion.
        </motion.p>
         <motion.p className="text-2xl text-center max-w-3xl mx-auto text-black leading-relaxed" variants={fadeInUp}>
         Our team helps you:
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
        <motion.p className="text-xl text-center max-w-3xl mx-auto text-black leading-relaxed mt-12" variants={fadeInUp}>
         We partner with clinics that change lives, helping you reach more families ready to start theirs.
        </motion.p>
        <motion.div className="mt-10" variants={fadeInUp} whileHover={{ scale: 1.08 }}>
          <div className="flex justify-center">
            <BookCallButton />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

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
      </div>
    </div>
  );
};

export default FertilityClinics;
