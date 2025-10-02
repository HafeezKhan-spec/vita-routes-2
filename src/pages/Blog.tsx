import React, { useState, useEffect } from 'react';
import img6 from '@/assets/image_6.webp';
import img5 from '@/assets/image_5.webp';
import img4 from '@/assets/image_4.webp';
import img3 from '@/assets/image_3.webp';
import img2 from '@/assets/image_2.webp';
import img1 from '@/assets/image_1.webp';

// --- Data for Blog Posts ---
// Now includes full 'content' and real image URLs.
const posts = [
  {
    title: 'AI-Powered Patient Communication: The 2025 Playbook',
    excerpt: 'Explore how AI chatbots and personalized outreach are revolutionizing patient engagement, improving satisfaction, and reducing administrative overhead.',
    tag: 'AI in Medicine',
    date: 'Oct 02, 2025',
    image: img6,
    content: `
      <p class="mb-4">The integration of Artificial Intelligence into healthcare is no longer a futuristic concept; it's a present-day reality transforming patient communication. For clinics aiming to enhance efficiency and patient satisfaction, AI-powered tools offer a robust solution. At the forefront are intelligent chatbots, which can handle appointment scheduling, answer frequently asked questions about services and preparations, and even triage initial symptoms based on pre-defined protocols, 24/7.</p>
      <p class="mb-4">This automation frees up administrative staff to focus on more complex patient needs, reducing wait times and minimizing the potential for human error. Beyond chatbots, AI algorithms can personalize patient outreach at scale. For instance, automated systems can send tailored reminders for follow-up appointments, medication adherence, or annual check-ups based on a patient's specific health history and treatment plan. This proactive approach not only improves health outcomes but also fosters a stronger patient-provider relationship, making patients feel cared for and understood.</p>
      <h3 class="text-2xl font-bold text-gray-800 mt-6 mb-3">Implementing an AI Strategy</h3>
      <p class="mb-4">Successfully deploying an AI communication strategy requires careful planning. The first step is to identify the most significant bottlenecks in your current communication workflow. Are receptionists overwhelmed with calls? Are no-show rates high? Pinpointing these areas will help you select the right tools. It's also crucial to ensure any AI solution is fully HIPAA-compliant, with robust data security measures in place. Finally, a phased rollout allows your team and patients to adapt to the new technology gradually. Start with a simple FAQ chatbot on your website, gather feedback, and then expand its capabilities over time. By taking a measured and strategic approach, you can harness the power of AI to create a seamless and responsive patient experience.</p>
    `,
  },
  {
    title: 'Telehealth Marketing: Attracting Patients in a Virtual-First World',
    excerpt: 'From optimizing for "virtual care" keywords to creating seamless online booking funnels, learn the tactics to grow your telehealth services.',
    tag: 'Telehealth',
    date: 'Sep 25, 2025',
    image: img5,
    content: `
      <p class="mb-4">The rapid adoption of telehealth has permanently altered the healthcare landscape. Patients now expect the convenience of virtual consultations, and providers who fail to market these services effectively risk being left behind. A successful telehealth marketing strategy begins with visibility. Your website and online listings must be optimized for keywords such as "virtual doctor visit," "online consultation," and "telemedicine services," along with location-specific terms. This ensures that when potential patients search for remote care, your practice appears at the top of the results.</p>
      <p class="mb-4">Beyond SEO, the user experience is paramount. The journey from discovering your telehealth service to booking an appointment must be frictionless. This means having a clear, intuitive "Book a Virtual Appointment" call-to-action on your homepage, a simple scheduling interface, and transparent information about costs and insurance coverage. Any technical hurdles or confusing steps can lead to patient drop-off. Leveraging patient testimonials and highlighting the benefits of telehealth—such as saving time, reducing travel, and accessing care from home—can further build trust and encourage bookings.</p>
    `,
  },
  {
    title: 'The Future of Healthcare SEO: Voice Search & Patient Journeys',
    excerpt: 'Go beyond traditional SEO. We dive into optimizing for voice assistants and mapping content to every stage of a patient\'s decision-making process.',
    tag: 'Healthcare SEO',
    date: 'Sep 18, 2025',
    image: img4,
    content: `
      <p class="mb-4">Healthcare SEO is evolving beyond a simple list of keywords. The rise of voice assistants like Alexa and Google Assistant means patients are increasingly asking questions conversationally, such as, "Hey Google, what are the symptoms of the flu?" or "Find a pediatrician near me that is open now." To capture this traffic, your content strategy must focus on answering these long-tail questions directly. Creating comprehensive FAQ pages, blog posts titled with common patient questions, and ensuring your Google Business Profile is fully updated with hours and services are now critical components of a modern SEO strategy.</p>
      <p class="mb-4">Furthermore, understanding the patient journey is key. A prospective patient's information needs change as they move from initial symptom research to selecting a provider and booking an appointment. Your content must map to each stage. Early-stage content might include blog posts about "Causes of knee pain," while consideration-stage content could be a detailed page on "Non-surgical treatments for knee injuries." Finally, decision-stage content would include physician bios, patient testimonials, and easy access to scheduling. By creating a content ecosystem that supports the entire journey, you build authority and guide patients toward choosing your practice for their care.</p>
    `,
  },
  {
    title: 'HIPAA-Compliant Digital Advertising in a Cookieless Era',
    excerpt: 'Learn to run effective, compliant ad campaigns on Google and Meta while respecting patient privacy as third-party cookies phase out.',
    tag: 'Digital Ads',
    date: 'Sep 11, 2025',
    image: img1,
    content: '<p class="mb-4">Navigating digital advertising in healthcare requires a dual focus on performance and compliance. With the phasing out of third-party cookies, the strategies for reaching potential patients are shifting. This article explores how to leverage first-party data, contextual advertising, and privacy-centric platforms to run effective campaigns on Google and Meta. We will cover the essentials of crafting HIPAA-compliant ad copy and landing pages, ensuring that your marketing efforts respect patient privacy while still driving measurable results. Learn how to adapt your strategy to this new era, building trust with your audience and maintaining a strong digital presence.</p>',
  },
  {
    title: 'Building a 5-Star Online Reputation for Your Clinic',
    excerpt: 'A deep dive into proactive review generation, empathetic response strategies, and turning patient feedback into a powerful marketing asset.',
    tag: 'Reputation',
    date: 'Sep 04, 2025',
    image: img2,
    content: '<p class="mb-4">In the digital age, your clinic\'s online reputation is its most valuable asset. A steady stream of positive reviews on platforms like Google, Healthgrades, and Vitals can be the deciding factor for prospective patients. This guide provides a comprehensive framework for building and maintaining a 5-star reputation. We detail proactive strategies for encouraging satisfied patients to leave reviews, provide templates for responding to both positive and negative feedback in a HIPAA-compliant manner, and show you how to leverage patient testimonials as powerful social proof in your marketing materials. Turn your patient feedback into a cornerstone of your growth strategy.</p>',
  },
  {
    title: 'Content Strategies for Specialized Medical Practices',
    excerpt: 'How to create authoritative content that speaks to niche patient populations, from orthopedics to dermatology, building trust and authority.',
    tag: 'Content Strategy',
    date: 'Aug 28, 2025',
    image: img3,
    content: '<p class="mb-4">For specialized medical practices, generic health content is not enough. To attract the right patients, your content must demonstrate deep expertise and speak directly to their specific conditions and concerns. This article outlines a content strategy tailored for specialists. Learn how to conduct keyword research for niche medical topics, create authoritative pillar pages on core services (e.g., "ACL Tear Treatment" for an orthopedic surgeon), and develop a content calendar that includes blog posts, patient case studies, and informational videos. We will guide you through building a content hub that establishes your practice as a leading authority, builds trust with your target audience, and drives qualified patient inquiries.</p>',
  },
];

// --- SVG Icon Components ---
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-500">
        <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
        <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
    </svg>
);

// --- Article View Component ---
const ArticleView = ({ post, onBackClick }) => (
    <div className="animate-fade-in">
        <div className="container mx-auto px-4 py-8 md:py-12">
            <button
                onClick={onBackClick}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8 group"
            >
                <ArrowLeftIcon />
                Back to All Articles
            </button>

            <article>
                <header className="mb-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-xs border border-blue-200 mb-3">
                      {post.tag}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">{post.title}</h1>
                    <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon />
                        <span className="ml-2">{post.date}</span>
                    </div>
                </header>
                
                <img src={post.image} alt={`Banner for ${post.title}`} className="w-full h-auto md:h-[400px] object-cover rounded-2xl shadow-lg mb-8" />

                <div
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    </div>
);

// --- Main Blog Page View Component ---
const BlogView = ({ onPostSelect }) => {
    const heroImageUrl = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';
    
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-full min-h-[450px] flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.6)), url(${heroImageUrl})` }}
            >
                <div className="container mx-auto px-6 text-center z-10">
                    <p className="text-blue-300 font-semibold tracking-wider mb-2">HEALTHCARE INSIGHTS</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">The Pulse of Healthcare Marketing</h1>
                    <p className="max-w-3xl mx-auto text-gray-200 text-lg">Actionable strategies for patient acquisition and practice growth. We cover SEO, digital advertising, patient engagement, and the latest in health-tech.</p>
                </div>
            </section>

            {/* Posts Grid Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Articles & Playbooks</h2>
                        <p className="text-gray-600 mt-2">Insights grounded in data to help you grow.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <article key={idx} className="group bg-white flex flex-col rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-200">
                                <div className="relative">
                                    <img src={post.image} alt={`Image for ${post.title}`} className="w-full h-56 object-cover" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-xs border border-blue-200">{post.tag}</span>
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex-grow">{post.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    <div className="mt-auto">
                                        <button onClick={() => onPostSelect(post)} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group">
                                            Read Article
                                            <ArrowRightIcon />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white border-t">
                <div className="container mx-auto px-6 text-center bg-blue-600 rounded-2xl shadow-xl py-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Accelerate Your Practice's Growth?</h3>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">Let's build a custom marketing strategy that addresses your unique challenges and goals. Get a free, no-obligation consultation today.</p>
                    <a href="#" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 transform shadow-md">
                        Schedule Your Free Strategy Call
                    </a>
                </div>
            </section>
        </>
    );
};

// --- Main App Component ---
const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Scroll to top when the view changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedPost]);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {selectedPost ? (
        <ArticleView post={selectedPost} onBackClick={() => setSelectedPost(null)} />
      ) : (
        <BlogView onPostSelect={(post) => setSelectedPost(post)} />
      )}
    </div>
  );
};

export default App;

