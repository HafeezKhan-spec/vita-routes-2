import React, { useState, useCallback } from 'react';
import contact from "../assets/contact_bg.jpg";
import businessmanSmall from "@/assets/Businessman_small.png";
import contactTeam from "@/assets/contact.jpg";

// Helper component for SVG icons to keep the main component cleaner
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d={path} />
    </svg>
);

// Main App Component
const App = () => {
    // State to show the success message after the form has been submitted
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    // Handler for a successful submission. Netlify will redirect to a success page
    // but in a single-page React app, we often use a hidden input and history push.
    // However, the simplest Netlify integration is to monitor URL query params.
    // For this example, we'll use a simple onSubmit handler that will be overridden by Netlify.
    // Note: Netlify's standard redirect handles the submission, 
    // so this is a simplified approach for demonstration.
    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const form = e.currentTarget;
            const formData = new FormData(form);
            // Ensure form-name is set for Netlify
            if (!formData.get('form-name')) formData.set('form-name', 'contact');

            const body = new URLSearchParams(formData as any).toString();
            const resp = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body,
            });
            if (!resp.ok) throw new Error(`Submission failed: ${resp.status}`);
            setSubmitted(true);
            form.reset();
        } catch (err: any) {
            setError(err?.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }, []);


    // Data for navigation links (kept for original component structure)
    const navLinks = ["HOME", "SERVICES", "SPECIALITIES", "ABOUT", "CONTACT"];

    return (
        <div className="bg-white font-sans text-gray-800">
            <main>
                {/* Hero Section */}
                <section 
                    className="py-16 px-4 sm:px-8 lg:px-16 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${contact})` }}
                >
                    <div className="container mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Left Side: Contact Info */}
                        <div>
                            <span className="text-white font-semibold text-sm">GET IN TOUCH</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-8">Contact Information</h1>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                    <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                                        <Icon path="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.8a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z" className="w-8 h-8 text-blue-600"/>
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">Location</h3>
                                    <p className="text-sm text-gray-700">1008 Hamilton St, Immokalee, FL 34142.</p>
                                </div>
                                <div className="bg-[#0a101e] text-white p-8 rounded-lg shadow-lg text-center">
                                    <div className="bg-gray-700 rounded-full p-4 inline-block mb-4">
                                       <Icon path="M17.3,21.8a1,1,0,0,1-.5-.1l-.1-.1-2-1.3a1,1,0,0,1-.6-1.5,10.1,10.1,0,0,0-3.6-3.6,1,1,0,0,1,1.5-.6l1.3,2,.1.1a1,1,0,0,1,0,1.4l-1,1a1,1,0,0,1-1.4,0,12.1,12.1,0,0,1-7-7,1,1,0,0,1,0-1.4l1-1a1,1,0,0,1,1.4,0l.1.1,2,1.3a1,1,0,0,1,.6,1.5,10.1,10.1,0,0,0,3.6,3.6,1,1,0,0,1,1.5.6l1.3,2,.1.1a1,1,0,0,1,.1.5A1,1,0,0,1,17.3,21.8Z" className="w-8 h-8 text-white"/>
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
                                    <p className="text-sm text-gray-700">(832) 937-7738</p>
                                    <p className="text-sm text-gray-700">info@advancedgellc.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form & Image */}
                        <div className="relative">
                            <img
                                src={businessmanSmall}
                                alt="Business Professional"
                                className="rounded-lg object-cover w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
                            />
                            <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-8 lg:right-0 lg:-right-8 bg-white p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md">
                                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                                
                                {/* NETLIFY FORM INTEGRATION HERE */}
                                <form 
                                    name="contact" 
                                    method="POST" 
                                    data-netlify="true" // REQUIRED: Tells Netlify to process the form
                                    netlify-honeypot="bot-field" // OPTIONAL: Anti-spam
                                    onSubmit={handleSubmit} // This is for local UX update only
                                    className="space-y-4"
                                >
                                    {/* REQUIRED: Hidden field for Netlify to identify the form */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    {/* OPTIONAL: Anti-spam field (must be hidden with CSS/Tailwind if used) */}
                                    <div hidden>
                                        <label>Don’t fill this out: <input name="bot-field" /></label>
                                    </div>
                                    
                                    <input 
                                        type="text" 
                                        name="fullName" // REQUIRED: Name attribute
                                        placeholder="Full Name" 
                                        required
                                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 text-black"
                                    />
                                    <input 
                                        type="text" 
                                        name="company" // REQUIRED: Name attribute
                                        placeholder="Company Name / Brand name / Business Name" 
                                        required
                                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 text-black"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input 
                                            type="tel" 
                                            name="phone" // REQUIRED: Name attribute
                                            placeholder="10 Digit Call & WhatsApp Mobile Number" 
                                            required
                                            className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 text-black"
                                        />
                                        <input 
                                            type="email" 
                                            name="email" // REQUIRED: Name attribute
                                            placeholder="Email" 
                                            required
                                            className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 text-black"
                                        />
                                    </div>
                                    <select 
                                        name="lookingFor" // REQUIRED: Name attribute
                                        required
                                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 text-black"
                                    >
                                        <option value="" disabled>Select the services you are looking for</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Paid Ads">Paid Ads</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Website Design">Website Design</option>
                                    </select>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className={`w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'SEND NOW'}
                                    </button>

                                    {/* Error Message */}
                                    {error && (
                                        <p className="text-red-600 font-semibold mt-2">{error}</p>
                                    )}
                                </form>
                                {/* Success Popup */}
                                {submitted && (
                                    <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/50">
                                        <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md text-center">
                                            <h3 className="text-xl font-bold">Submitted successfully</h3>
                                            <button
                                                className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
                                                onClick={() => setSubmitted(false)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-[#0a101e] text-white py-12 px-4 sm:px-8 lg:px-16">
                    <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 text-center sm:text-left">
                        <Icon path="M21.3,9.55a1,1,0,0,0-1,0L13,13.29V3a1,1,0,0,0-2,0V13.29L3.73,9.55a1,1,0,0,0-1.46,1.37l9,5.14a1,1,0,0,0,1.46,0l9-5.14A1,1,0,0,0,21.3,9.55ZM12,18.5,4.28,14,12,9.3l7.72,4.7Z M22,19H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z" className="w-12 h-12 text-gray-400" />
                        <div className="flex items-center gap-8">
                            <span className="text-5xl font-bold text-blue-500">5+</span>
                            <p className="max-w-[150px]">Healthcare Marketing Services Delivered</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-5xl font-bold text-blue-500">6+</span>
                            <p className="max-w-[150px]">Industries in the U.S. Served</p>
                        </div>
                    </div>
                </section>

                {/* Growth Brief Section */}
                <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
                    <div className="container mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <img src={contactTeam} alt="Team meeting" className="rounded-lg shadow-lg w-full"/>
                        <div className="bg-gray-50 p-6 sm:p-10 lg:p-12 rounded-lg relative lg:-ml-12">
                            <h2 className="text-3xl font-bold text-[#0a101e] mb-4">Healthcare Marketing Growth Brief - Trends, Strategies & Insights for U.S. Healthcare Practices</h2>
                            <p className="text-black">
                                Stay ahead with practical playbooks from a healthcare marketing agency USA. Each issue distills what works now in patient acquisition, SEO, PPC, social, content, websites, and analytics, direct from our healthcare digital marketing agency team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-[#0a101e] text-white py-16 px-4 sm:px-8 lg:px-16">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                             <span className="text-blue-500 font-semibold text-sm">GET IN TOUCH</span>
                            <h2 className="text-4xl font-bold mt-2">Partner with AdvanceEdge today and take your Firm to the next level.</h2>
                        </div>
                        <div className="bg-blue-600 p-8 rounded-lg text-center shrink-0">
                            <p className="text-3xl font-bold">832-937-7738</p>
                            <p className="text-sm opacity-80">FEEL FREE TO CALL US</p>
                        </div>
                    </div>
                </section>
            </main>

            <div>
      {/* White Middle Section */}
      <section style={{ backgroundColor: '#fff', color: '#000', padding: '40px 20px' }}>
       <section style={{ backgroundColor: '#000', color: '#fff', padding: '4px 6px' }}> 
        
      </section>
      </section>

    </div>
        </div>
    );
};

export default App;



